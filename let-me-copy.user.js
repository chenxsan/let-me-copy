// ==UserScript==
// @name         Let me copy
// @namespace    https://blog.zfanw.com
// @version      0.0.1
// @description  解除知乎禁止转载的限制
// @author       陈三
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var body = document.getElementsByTagName('body')[0];
    body.addEventListener('copy', function (e) {
        e.stopPropagation();
    }, false);
})();