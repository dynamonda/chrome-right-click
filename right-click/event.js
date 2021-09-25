'use strict';

{
    // メニューを登録
    chrome.runtime.onInstalled.addListener(function(){
        const menuItem = chrome.contextMenus.create({
            id: 'youtube_id',
            title: "テスト「%s」",
            contexts: ['selection']
        });
    });

    // メニューをクリック時に実行
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        const selectedMenu = info.menuItemId;
        const selectedText = info.selectionText;

        if(selectedMenu === "youtube_id"){
            chrome.tabs.create({
                url: 'https://google.com'
            });
        }else{
            alert("selected=" + selectedText + ", menu=" + selectedMenu);
        }
    });
}