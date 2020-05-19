// content.js
// node package used to get pixel information.
// Will later be used to store gif data using gif_array
// NOTE that websites like GIPHY use .webp image extensions which the "get-pixels"
// NOTE can't handle. Current fix is to search for string ANMF in webpack files
// NOTE Need to explore how get-pixels works and build function for getting webp pixels
// NOTE google documentation on webp files may be useful https://developers.google.com/speed/webp/docs/using
var getPixels = require("get-pixels");

// arrays for storing content data
var gif_array = [];
var images = document.getElementsByTagName('img');
var file = 'images/512.png';
var image_url = chrome.extension.getURL(file);

function changeWEBPAnimated(image, type) {
    var request = new XMLHttpRequest();
    request.open('GET', image.src, true);
    request.addEventListener('load', function () {
        if(request.response.indexOf("ANMF") != -1){
            // animated
            image.src = image_url;
        }
    });
    request.send();
}

// function for changing gif images to pre-determined image
function chageGIF (image, type) {
  getPixels(image.src, function(err, pixels) {
    if(err) {
      console.log("bad image path")
      return
    };
    if (pixels.shape.length == 4) {
      gif_array.push({'type':type,
                      'pixels':pixels,
                      'image_src':image.src});
      image.src = image_url;
    };
  })
}

function changeAnimation(image, type) {
  if (image.src.split('.').pop() == 'webp') {
    changeWEBPAnimated(image, type)
  } else {
    chageGIF(image, type)
  };
}

// recursion function for itterating over all gifs on page
function selectAndReplace (images, type) {
  for (var i = 0; i < images.length; i++) {
    changeAnimation(images[i], type)
  };
}

// chrome extension listener for user clicking "apply" button.
// It runs selectAndReplace() if clicked, this is for when the user
// has changed the slider status to true and doesn't want to refresh the page
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    if (message.txt == "apply_button_clicked") {
      selectAndReplace(images, 'onApply');
    }
});

// function that runs depending on what the user has the
// slider status set to on a page load
function replaceOnSavedData() {
  chrome.storage.sync.get(["sliderStatus"],
  function(items) {
    if (items.sliderStatus == true) {
      // For on load before mutations occour
      selectAndReplace(images, 'onLoad');
      // BLOCK for handling dynamic pages. Replaces gifs if a mutation that added a "src" to
      // an image tag was observed. blocked variable is to stop mutation observer
      // thinking the image replace from the content script was a mutation from the webpage
      var blocked = false;
      var newValue = image_url;

      config = {
          attributes: true,
          childList: true,
          characterData: true,
          characterDataOldValue: true,
          subtree: true
      }

      var MutationObserver = window.MutationObserver;

      var observer = new MutationObserver(function (mutations) {
        if(blocked){
          blocked = false;
          return;
        }
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "src" && mutation.target.src != image_url) {
            console.log(mutation)
            changeAnimation(mutation.target, 'onMutation')
            blocked = true
          }
        });
      });

      observer.observe(document, config);
    }
  });
}

// content of page needs to be loaded before gifs can be replaced with images
// This DOMContentLoaded wouldn't work as it only loads HTML and DOM resources,
// not images.
window.onload = function () {
  console.log('content loaded');
  replaceOnSavedData();
};
