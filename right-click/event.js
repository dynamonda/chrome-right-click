'use strict';

{
    var cmid = null;
    var selectedText = "";

    chrome.extension.onMessage.addListener(function(msg, sender, sendResponse){
        if(msg.request === 'updateContentMenu'){
            const selection = msg.selection;
            selectedText = selection;

            if(selection === ''){
                if (cmid != null) {
                    // メニューアイテムを削除
                    chrome.contextMenus.remove(cmid);
                    cmid = null;
                }
            }else{
                var options = {
                    id: 'option',
                    title: "Open '%s' URL",
                    contexts: ['selection']
                };

                if (cmid != null) {
                    chrome.contextMenus.update(cmid, options);
                } else {
                    // メニューアイテムを追加
                    cmid = chrome.contextMenus.create(options);
                }
            }
        }
    });

    // メニューをクリック時に実行
    chrome.contextMenus.onClicked.addListener(item => {
        //alert("selected = " + selectedText);
        chrome.tabs.create({
            url: 'https://google.com'
        });
    });
}