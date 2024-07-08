chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "changeBackground") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: changeBackgroundToImage,
        args: [request.source], // 将图片数据作为参数传递
      });
    });
  }
});

function changeBackgroundToImage(imageData) {
  // 使用imageData更改背景，例如：
  document.body.style.backgroundImage = `url('${imageData}')`;
}
  