// Saves options to chrome.storage
// Saves status of the slider to key "sliderStatus"
function save_options() {
  var onOff = document.getElementById('slider').checked;
  chrome.storage.sync.set({
    sliderStatus: onOff
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('save');
    status.textContent = 'Saved';
    setTimeout(function() {
      status.textContent = 'Save';
    }, 750);
  });
}

// gets saved options from chrome.storage and applies setting to
// sliderStatus. Default status is true.
function restore_options() {
  chrome.storage.sync.get({
    sliderStatus: true
  }, function(items) {
    document.getElementById('slider').checked = items.sliderStatus;
  });
}

// Event listener for applying set options when DOM Content is loaded
document.addEventListener('DOMContentLoaded', restore_options);

// Event listener for saving slider options (save_options()) when save
// button is clicked
document.getElementById('save').addEventListener('click', save_options);
