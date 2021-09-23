'use strict';

{
    chrome.runtime.onInstalled.addListener(() => {
        const parent = chrome.contextMenus.create({
            id: 'parent',
            title: '親メニュー'
        });
        chrome.contextMenus.create({
            id: 'child1',
            parentId: 'parent',
            title: '子メニュー1'
        });
        chrome.contextMenus.create({
            id: 'child2',
            parentId: 'parent',
            title: '子メニュー2'
        });
    });

    // メニューをクリック時に実行
    chrome.contextMenus.onClicked.addListener(item => {
        alert("ID=" + item.menuItemId);
    });
}