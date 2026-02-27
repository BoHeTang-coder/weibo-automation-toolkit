// ==UserScript==
// @name         Weibo Batch Delete Tool
// @namespace    https://github.com/yourname
// @version      1.0
// @description  Batch delete weibo posts safely
// @author       YourName
// @match        https://weibo.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    (function () {

    if (window.weiboDeleteController) {
        console.log("控制器已存在");
        return;
    }

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    let running = false;
    let deleted = 0;

    async function deleteLoop() {

        while (running) {

            let moreBtn = document.querySelector('i[title="更多"]');

            if (!moreBtn) {
                window.scrollBy(0, 1200);
                await sleep(1500);
                continue;
            }

            moreBtn.click();
            await sleep(random(400, 700));

            let deleteBtn = Array.from(document.querySelectorAll('.woo-pop-item-main'))
                .find(el => el.innerText.includes("删除"));

            if (!deleteBtn) {
                await sleep(1000);
                continue;
            }

            deleteBtn.click();
            await sleep(random(400, 700));

            let confirmBtn = Array.from(document.querySelectorAll('.woo-dialog-btn'))
                .find(el => el.innerText.includes("确定"));

            if (confirmBtn) {
                confirmBtn.click();
                deleted++;
                console.log(`已删除 ${deleted} 条`);
            }

            await sleep(random(1500, 2500));

            if (deleted % 10 === 0) {
                let pause = random(8000, 15000);
                console.log(`暂停 ${pause / 1000} 秒防风控`);
                await sleep(pause);
            }
        }

        console.log("已暂停");
    }

    // ===== 创建控制面板 =====
    const panel = document.createElement("div");
    panel.style.position = "fixed";
    panel.style.top = "80px";
    panel.style.right = "20px";
    panel.style.zIndex = 99999;
    panel.style.background = "#fff";
    panel.style.padding = "10px";
    panel.style.border = "1px solid #ccc";
    panel.style.borderRadius = "8px";
    panel.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    panel.innerHTML = `
        <div style="margin-bottom:6px;font-weight:bold;">微博删除控制</div>
        <button id="startDel">开始</button>
        <button id="pauseDel">暂停</button>
        <div style="margin-top:6px;font-size:12px;">已删除: <span id="countDel">0</span></div>
    `;
    document.body.appendChild(panel);

    document.getElementById("startDel").onclick = () => {
        if (!running) {
            running = true;
            deleteLoop();
        }
    };

    document.getElementById("pauseDel").onclick = () => {
        running = false;
    };

    const counter = setInterval(() => {
        document.getElementById("countDel").innerText = deleted;
    }, 500);

    window.weiboDeleteController = true;

})();

})();