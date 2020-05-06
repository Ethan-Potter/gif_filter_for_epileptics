// content.js
// node package used to get pixel information.
// Will later be used to store gif data using gif_array
var getPixels = require("get-pixels");

// arrays for storing content data
var gif_array = [];
var images = document.getElementsByTagName('img');

// function for changing gif images to pre-determined image
function chageGIF (image, index) {
  getPixels(image.src, function(err, pixels) {
    if(err) {
      console.log("bad image path")
      return
    };
    if (pixels.shape.length == 4) {
      let file = 'images/cat.jpg';
      let image_url = chrome.extension.getURL(file);
      gif_array.push({'index':index,
                     'pixels':pixels,
                     'image_src':image.src});
      image.src = image_url;
    };
  })
}

// recursion function for itterating over all gifs on page
function selectAndReplace () {
  for (var i = 0; i < images.length; i++) {
    chageGIF(images[i], i)
  };
}

// chrome extension listener for user clicking "apply" button.
// It runs selectAndReplace() if clicked, this is for when the user
// has changed the slider status to true and doesn't want to refresh the page
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    if (message.txt == "apply_button_clicked") {
      selectAndReplace();
    }
});

// function that runs selectAndReplace() depending on what the user has the
// slider status set to on a page load
function replaceOnSavedData() {
  chrome.storage.sync.get(["sliderStatus"],
  function(items) {
    if (items.sliderStatus == true) {
      selectAndReplace();
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
