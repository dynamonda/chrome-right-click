'use strict';

{
    // メニューを登録
    chrome.runtime.onInstalled.addListener(function(){
        // 動画
        const menuItem = chrome.contextMenus.create({
            id: 'youtube_id',
            title: "YouTubeをID '%s' で開く",
            contexts: ['selection']
        });

        // チャンネル
        const channel = chrome.contextMenus.create({
            id: 'youtube_channel',
            title: "YouTubeをチャンネル '%s' で開く",
            contexts: ['selection']
        });
    });

    // メニューをクリック時に実行
    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        const selectedMenu = info.menuItemId;
        const selectedText = info.selectionText;

        if(selectedMenu === "youtube_id"){
            chrome.tabs.create({
                url: 'https://youtube.com/watch?v=' + selectedText
            });
        }else if(selectedMenu === "youtube_channel"){
            chrome.tabs.create({
                url: 'https://youtube.com/channel/' + selectedText
            });
        }else{
            alert("selected=" + selectedText + ", menu=" + selectedMenu);
        }
    });
}