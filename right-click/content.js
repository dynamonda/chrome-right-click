// テキストが選択されたときにメッセージを送信
document.addEventListener('selectionchange', function(){
    var selection = window.getSelection().toString().trim();
    chrome.runtime.sendMessage({
        request: 'updateContentMenu',
        selection: selection
    });
});
