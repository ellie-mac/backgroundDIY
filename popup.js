document.getElementById('changeColor').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "changeColor"});
  });
  