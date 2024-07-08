chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "changeBackground") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: changeBackgroundToImage,
        args: [request.source], // transfer the image data to the function
      });
    });
  }
});

function changeBackgroundToImage(imageData) {
  // use image data to set the background image of the body
  document.body.style.backgroundImage = `url('${imageData}')`;
  // ensure the image covers the whole page and keep the image ratio
  document.body.style.backgroundSize = 'cover'; 
  document.body.style.backgroundPosition = 'center'; 
  document.body.style.backgroundRepeat = 'no-repeat';
}
  