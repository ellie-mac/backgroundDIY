chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "changeColor") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: changeBackgroundToImage(request.source),
        });
      });
    }
  });
  
  function changeBackgroundToImage(imageURL) {
    document.body.style.backgroundImage = `url('${imageURL}')`;
  }
  
  