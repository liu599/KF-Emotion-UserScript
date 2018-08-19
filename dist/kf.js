// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     5.0.1
// @author      eddie32
// @description KF论坛专用的回复表情, 插图扩展插件, 在发帖时快速输入自定义表情和论坛BBCODE
// @icon        http://wx1.sinaimg.cn/small/62800f43ly8fttwqsdhc2j20e80e8t9b.jpg
// @homepage    https://github.com/liu599/KF-Emotion-UserScript
// @include     https://*miaola.info/*
// @include     https://*2dkf.com/*
// @include     https://*9moe.com/*
// @include     https://*kfgal.com/*
// @copyright   2014-2018, eddie32
// @grant       none
// @license     MIT
// @run-at      document-end
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tsc/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./tsc/emotion.js":
/*!************************!*\
  !*** ./tsc/emotion.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar utils = __webpack_require__(/*! ./utils */ \"./tsc/utils.js\");\r\nvar GroupType;\r\n(function (GroupType) {\r\n    GroupType[GroupType[\"ImageLink\"] = 0] = \"ImageLink\";\r\n    GroupType[GroupType[\"Plain\"] = 1] = \"Plain\";\r\n    GroupType[GroupType[\"Image\"] = 2] = \"Image\";\r\n})(GroupType = exports.GroupType || (exports.GroupType = {}));\r\nvar EmotionMenuItem = /** @class */ (function () {\r\n    function EmotionMenuItem() {\r\n    }\r\n    return EmotionMenuItem;\r\n}());\r\nexports.EmotionMenuItem = EmotionMenuItem;\r\nvar EmotionMenu = /** @class */ (function () {\r\n    function EmotionMenu() {\r\n    }\r\n    return EmotionMenu;\r\n}());\r\nexports.EmotionMenu = EmotionMenu;\r\nvar CssStyles = /** @class */ (function () {\r\n    function CssStyles() {\r\n    }\r\n    return CssStyles;\r\n}());\r\nexports.CssStyles = CssStyles;\r\nvar EmotionPlugin = /** @class */ (function () {\r\n    function EmotionPlugin(name, data, css, targetTextarea) {\r\n        this.targetInstance = targetTextarea;\r\n        this.divPrefix = name;\r\n        this.appInstance = document.createElement('div');\r\n        this.appInstance.id = this.divPrefix + \"0000\";\r\n        this.EmotionMenu = data;\r\n        this.EmotionStyles = css;\r\n        this.addStyles(css);\r\n        this.addMenus();\r\n        this.addStage();\r\n        this.loadMenu(data);\r\n        console.log(window.getComputedStyle(this.targetInstance, null).getPropertyValue('width'));\r\n        this.stageInstance.style.width = window.getComputedStyle(this.targetInstance, null).getPropertyValue('width');\r\n    }\r\n    EmotionPlugin.prototype.addStyles = function (css) {\r\n        var styleInstance = document.createElement('style');\r\n        styleInstance.innerHTML = utils.join(css);\r\n        this.appInstance.appendChild(styleInstance);\r\n    };\r\n    EmotionPlugin.prototype.addMenus = function () {\r\n        var menu = document.createElement('div');\r\n        menu.id = this.divPrefix + \"menu\";\r\n        this.appInstance.appendChild(menu);\r\n        this.menuInstance = menu;\r\n    };\r\n    EmotionPlugin.prototype.addStage = function () {\r\n        var _this = this;\r\n        var stage = document.createElement('div');\r\n        stage.id = this.divPrefix + \"stage\";\r\n        stage.addEventListener('click', function (e) { return _this.addEmotions(e); });\r\n        this.appInstance.appendChild(stage);\r\n        this.stageInstance = stage;\r\n    };\r\n    EmotionPlugin.prototype.addEmotions = function (e) {\r\n        console.log(e.target, e.target instanceof HTMLAnchorElement);\r\n        var target = e.target;\r\n        var scrollPos = this.targetInstance.scrollTop;\r\n        var curValue = this.targetInstance.value;\r\n        var caretPos = this.targetInstance.selectionStart;\r\n        var front = curValue.substring(0, caretPos);\r\n        var back = curValue.substring(this.targetInstance.selectionEnd, curValue.length);\r\n        if (e.target instanceof HTMLAnchorElement) {\r\n            this.targetInstance.value = front + decodeURI(target.dataset.sign) + back;\r\n            caretPos = caretPos + decodeURI(target.dataset.sign).length;\r\n        }\r\n        if (e.target instanceof HTMLImageElement) {\r\n            if (e.target.dataset.link !== '') {\r\n                this.targetInstance.value = front + (\"\" + e.target.dataset.link) + back;\r\n                caretPos = caretPos + 6;\r\n            }\r\n            else {\r\n                this.targetInstance.value = front + (\"[img]\" + e.target.src + \"[/img]\") + back;\r\n                caretPos = caretPos + e.target.src.length + 11;\r\n            }\r\n        }\r\n        this.targetInstance.selectionStart = caretPos;\r\n        this.targetInstance.selectionEnd = caretPos;\r\n        this.targetInstance.focus();\r\n        this.targetInstance.scrollTop = scrollPos;\r\n    };\r\n    EmotionPlugin.prototype.loadMenu = function (item) {\r\n        var _this = this;\r\n        var ulContainer = document.createElement('ul');\r\n        item.forEach(function (mi) {\r\n            var listItem = document.createElement('li');\r\n            var clickItem = document.createElement('a');\r\n            listItem.className = _this.divPrefix + \"00001\";\r\n            clickItem.title = mi.groupTitle;\r\n            clickItem.dataset.loadtype = \"\" + mi.groupType;\r\n            clickItem.addEventListener('click', function (e) { return _this.expandMenu(e, mi, listItem.className); });\r\n            clickItem.innerHTML = \"<span class=\\\"t\\\">\" + mi.groupTitle + \"</span>\";\r\n            listItem.appendChild(clickItem);\r\n            ulContainer.appendChild(listItem);\r\n        });\r\n        this.menuInstance.appendChild(ulContainer);\r\n    };\r\n    EmotionPlugin.prototype.expandMenu = function (e, menuItem, className) {\r\n        var _this = this;\r\n        this.clearStage();\r\n        this.toggleStage(e, className);\r\n        switch (menuItem.groupType) {\r\n            case GroupType.Plain:\r\n                console.log('plain', e.target);\r\n                menuItem.groupEmotions.forEach(function (emotion) {\r\n                    emotion.itemAddress.forEach(function (addr, idx) {\r\n                        var plainTxtItem = document.createElement('a');\r\n                        plainTxtItem.className = 'txtBtnEmotion';\r\n                        plainTxtItem.setAttribute('data-sign', \"\" + encodeURI(addr));\r\n                        plainTxtItem.innerHTML = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : addr;\r\n                        _this.stageInstance.appendChild(plainTxtItem);\r\n                    });\r\n                });\r\n                break;\r\n            case GroupType.ImageLink:\r\n                console.log('imageLink');\r\n                menuItem.groupEmotions.forEach(function (emotion) {\r\n                    emotion.itemAddress.forEach(function (addr, idx) {\r\n                        var imageItem = document.createElement('img');\r\n                        imageItem.src = addr;\r\n                        imageItem.dataset.link = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : '';\r\n                        imageItem.className = 'Ems';\r\n                        _this.stageInstance.appendChild(imageItem);\r\n                    });\r\n                });\r\n                break;\r\n            default:\r\n                console.log('default');\r\n        }\r\n    };\r\n    EmotionPlugin.prototype.clearStage = function () {\r\n        this.stageInstance.innerHTML = '';\r\n    };\r\n    EmotionPlugin.prototype.toggleStage = function (e, className) {\r\n        var listElems = document.querySelectorAll(\".\" + className);\r\n        var target = e.target;\r\n        if (target instanceof HTMLSpanElement) {\r\n            target = target.parentElement;\r\n        }\r\n        if (target.className && target.className.includes('active')) {\r\n            target.className = '';\r\n        }\r\n        else {\r\n            listElems.forEach(function (elem) {\r\n                elem.querySelector('a').className = '';\r\n            });\r\n            target.className = 'active';\r\n        }\r\n        if (!target.className.includes('active') && this.stageInstance.style.display && this.stageInstance.style.display !== 'none') {\r\n            this.stageInstance.style.display = 'none';\r\n        }\r\n        else {\r\n            this.stageInstance.style.display = 'block';\r\n        }\r\n    };\r\n    return EmotionPlugin;\r\n}());\r\nexports.EmotionPlugin = EmotionPlugin;\r\n//# sourceMappingURL=emotion.js.map\n\n//# sourceURL=webpack:///./tsc/emotion.js?");

/***/ }),

/***/ "./tsc/main.js":
/*!*********************!*\
  !*** ./tsc/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Emotion = __webpack_require__(/*! ./emotion */ \"./tsc/emotion.js\");\r\nvar utils = __webpack_require__(/*! ./utils */ \"./tsc/utils.js\");\r\nvar containers = document.getElementsByTagName('textarea');\r\nvar targetTextarea = containers.item(0);\r\nvar uniquePrefix = 'eddie32';\r\nvar reserveData = [\r\n    {\r\n        groupEmotions: [\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 1,\r\n                    arrLength: 49,\r\n                    strPrefix: (typeof window.imgpath !== 'undefined' ? window.imgpath : '') + \"/post/smile/em/em\",\r\n                    strSuffix: '.gif',\r\n                    leadingZero: true,\r\n                }),\r\n                itemDescription: utils.loadEmotions({\r\n                    startPos: 10,\r\n                    arrLength: 58,\r\n                    strPrefix: \"[s:\",\r\n                    strSuffix: ']',\r\n                    leadingZero: false,\r\n                }),\r\n            },\r\n        ],\r\n        groupTitle: 'KF',\r\n        groupType: Emotion.GroupType.ImageLink,\r\n    },\r\n    {\r\n        groupEmotions: [\r\n            {\r\n                itemAddress: ['[sell=100][/sell]', '[quote][/quote]', '[hide=100][/hide]', '[code][/code]', '[strike][/strike]', '[fly][/fly]', '[color=#00FF00][/color]', '[b][/b]', '[u][/u]', '[i][/i]', '[hr]', '[backcolor=][/backcolor]', '[img][/img]'],\r\n                itemDescription: ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体', '下划线', '斜体', '水平线', '背景色', '插入图片'],\r\n            },\r\n        ],\r\n        groupTitle: '快捷',\r\n        groupType: Emotion.GroupType.Plain,\r\n    },\r\n    {\r\n        groupEmotions: [\r\n            {\r\n                itemAddress: ['(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)'],\r\n                itemDescription: [],\r\n            },\r\n        ],\r\n        groupTitle: '颜文字',\r\n        groupType: Emotion.GroupType.Plain,\r\n    },\r\n    {\r\n        groupEmotions: [\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 1,\r\n                    arrLength: 17,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds/2233 (',\r\n                    strSuffix: ').gif',\r\n                    leadingZero: false,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 0,\r\n                    arrLength: 14,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds/bilibiliTV (',\r\n                    strSuffix: ').png',\r\n                    leadingZero: false,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n        ],\r\n        groupTitle: 'BILIBILI',\r\n        groupType: Emotion.GroupType.ImageLink,\r\n    },\r\n    {\r\n        groupEmotions: [\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 0,\r\n                    arrLength: 20,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/pcrn/sticker (',\r\n                    strSuffix: ').png',\r\n                    leadingZero: false,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 1,\r\n                    arrLength: 21,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds2/akari',\r\n                    strSuffix: '.gif',\r\n                    leadingZero: false,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 2,\r\n                    arrLength: 64,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds4/0xx',\r\n                    strSuffix: '.png',\r\n                    leadingZero: false,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 1,\r\n                    arrLength: 41,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive2nd',\r\n                    strSuffix: '.png',\r\n                    leadingZero: false,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n        ],\r\n        groupTitle: '流行',\r\n        groupType: Emotion.GroupType.ImageLink,\r\n    },\r\n    {\r\n        groupEmotions: [\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 1,\r\n                    arrLength: 51,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds6/',\r\n                    strSuffix: '.png',\r\n                    leadingZero: false,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n            {\r\n                itemAddress: utils.loadEmotions({\r\n                    startPos: 1,\r\n                    arrLength: 40,\r\n                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds5/',\r\n                    strSuffix: '.gif',\r\n                    leadingZero: true,\r\n                }),\r\n                itemDescription: [],\r\n            },\r\n        ],\r\n        groupTitle: 'ACFUN',\r\n        groupType: Emotion.GroupType.ImageLink,\r\n    },\r\n];\r\nvar cssStyles = {\r\n    mainView: \"#\" + uniquePrefix + \"0000 {font: 12px/28px \\\"Hiragino Sans GB\\\",\\\"Microsoft YaHei\\\",\\\"Arial\\\",\\\"sans-serif\\\"; margin-bottom: 5px; }\",\r\n    stageView: \"#\" + uniquePrefix + \"stage {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:4px;margin-bottom:4px; border:1px solid #ff4351; position:relative; z-index:200; display: none }\",\r\n    menuView: \"#\" + uniquePrefix + \"menu {display:inline-block;cursor:pointer; text-align:center; padding: 0; font: 12px/30px \\\"Hiragino Sans GB\\\",\\\"Microsoft YaHei\\\",\\\"Arial\\\",\\\"sans-serif\\\";background-color: #ff4351;border-color: #ff4351;color: #fff; } #\" + uniquePrefix + \"menu ul { list-style-type: none; margin: 0; padding: 0; } #\" + uniquePrefix + \"menu ul li { display: inline-block; text-align: middle } #\" + uniquePrefix + \"menu ul li a { display: block; color: #f2f2f2; min-width: 55px; } #\" + uniquePrefix + \"menu ul li a:hover, #\" + uniquePrefix + \"menu ul li a.active {background-color: #ff7680;border-color: #ff7680; color: #f2f2f2;}\",\r\n    txtBtn: \"a.txtBtnEmotion { display: inline-block; text-decoration: none; cursor: pointer; padding: 0 8px; font: 12px/24px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif';} a.txtBtnEmotion:hover { background: #ff7680; color: #fff; }\",\r\n    imageLink: \".Ems { cursor: pointer; width: 50px; height: 50px; display: inline-block; z-index: 400;  }\",\r\n};\r\nvar app = new Emotion.EmotionPlugin(uniquePrefix, reserveData, cssStyles, targetTextarea);\r\ntargetTextarea.parentNode.insertBefore(app.appInstance, targetTextarea);\r\n//# sourceMappingURL=main.js.map\n\n//# sourceURL=webpack:///./tsc/main.js?");

/***/ }),

/***/ "./tsc/utils.js":
/*!**********************!*\
  !*** ./tsc/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction join(obj) {\r\n    var output = '';\r\n    Object.keys(obj).forEach(function (keyname) {\r\n        output += obj[keyname] + \" \";\r\n    });\r\n    return output;\r\n}\r\nexports.join = join;\r\nvar OPT = /** @class */ (function () {\r\n    function OPT() {\r\n    }\r\n    return OPT;\r\n}());\r\nfunction loadEmotions(options) {\r\n    var rest = [];\r\n    for (var _i = 1; _i < arguments.length; _i++) {\r\n        rest[_i - 1] = arguments[_i];\r\n    }\r\n    var ret = [];\r\n    for (var i = options.startPos; i < options.arrLength; i += 1) {\r\n        var picNumber = \"\" + i;\r\n        if (options.leadingZero) {\r\n            picNumber = (i > 9) ? picNumber : \"0\" + picNumber;\r\n        }\r\n        ret.push(\"\" + options.strPrefix + picNumber + options.strSuffix);\r\n    }\r\n    rest.forEach(function (r) {\r\n        var restRet = [];\r\n        for (var i = r.startPos; i < r.arrLength; i += 1) {\r\n            var picNumber = \"\" + i;\r\n            if (r.leadingZero) {\r\n                picNumber = (i > 9) ? picNumber : \"0\" + picNumber;\r\n            }\r\n            restRet.push(\"\" + options.strPrefix + picNumber + options.strSuffix);\r\n        }\r\n        ret.concat(restRet);\r\n    });\r\n    return ret;\r\n}\r\nexports.loadEmotions = loadEmotions;\r\n//# sourceMappingURL=utils.js.map\n\n//# sourceURL=webpack:///./tsc/utils.js?");

/***/ })

/******/ });