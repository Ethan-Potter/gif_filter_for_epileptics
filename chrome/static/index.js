// JavaScript to run on extension load, index.html
import "./index.css";

// function for sending message data to content.js if slider is switched on
function sendData(messageTxt) {
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs) {
    var selected = document.getElementById("slider").checked;
    if (selected == true) {
      let message = {
        txt: messageTxt
      }
      chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
        console.log("message sent");
      });
    };
  }
}

// event listener for DOM Content of index being loaded.
// adds an event listener to the apply button that sends data to content.js
document.addEventListener('DOMContentLoaded', function () {
  var applyButton = document.getElementById('apply_button');
  applyButton.addEventListener('click', sendData("apply_button_clicked"));
});
