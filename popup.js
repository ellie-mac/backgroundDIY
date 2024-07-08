document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = function() {
      // once read complete, send it to background.js
      chrome.runtime.sendMessage({action: "changeBackground", source: reader.result});
    };
    reader.readAsDataURL(file); // 读取文件内容作为DataURL
  }
});
  