// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     4.2.9
// @author      eddie32
// @description KF论坛专用的回复表情, 插图扩展插件, 在发帖时快速输入自定义表情和论坛BBCODE
// @icon        https://blog.nekohand.moe/favicon.ico
// @homepage    https://github.com/liu599/KF-Emotion-UserScript
// @include     https://*miaola.info/*
// @include     http://*2dkf.com/*
// @include     http://*9moe.com/*
// @include     http://*kfgal.com/*
// @copyright   2014-2017, eddie32
// @grant       none
// @license     MIT
// @run-at      document-end
// ==/UserScript==

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var fun = function fun() {
    var imagepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


    var versionNo = '4.2.9';
    /* Address function
     * startNumber: number, indicating the start number;
     * lengthArray: number, indicating the addrArray length;
     * strPrefix: string, address Prefix;
     * strSuffix: string, address Suffix;
     * leadingZero: boolen, true for leading zero in number;
     * addrArray: array, address array, default for empty;
     */
    // 创建表情包数组的函数
    function emAddrArrayHandler(startNumber, lengthArray, strPrefix, strSuffix) {
        var addrArray = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
        var leadingZero = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

        var addrTemp = '',
            addrNumber = 0;
        for (var j = startNumber; j < lengthArray; j++) {
            addrNumber = j;
            if (leadingZero) {
                addrNumber = j > 9 ? j : '0' + j;
            }
            addrTemp = '' + strPrefix + addrNumber + strSuffix;
            addrArray.push(addrTemp);
        }
        return addrArray;
    }
    /* 表情包地址数据 */
    // B站
    var biliEM = emAddrArrayHandler(1, 17, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/2233 (', ').gif');
    emAddrArrayHandler(0, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/bilibiliTV (', ').png', biliEM);
    // tora酱
    emAddrArrayHandler(1, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/tora/0', '.jpg', biliEM, true);
    //阿卡林 from 摇曳百合
    var AkariSmile = emAddrArrayHandler(1, 21, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Dynamic/akari', '.gif');
    emAddrArrayHandler(1, 72, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/akari/akari', '.png', AkariSmile);
    // New Game kf扩展
    var NewGame = emAddrArrayHandler(2, 64, 'http://nekohand.moe/spsmile/01Sora/0xx', '.png');
    emAddrArrayHandler(1, 20, 'http://ss.nekohand.moe/Asource/EmotionPic/KFEM (', ').gif', NewGame);
    // ACFUN
    var ACSmile4 = emAddrArrayHandler(1, 51, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/New/', '.png');
    emAddrArrayHandler(1, 40, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/Niming/', '.gif', ACSmile4, true);
    // KF 内置
    var KFSmileURL = emAddrArrayHandler(1, 49, (typeof imagepath != 'undefined' ? imagepath : '') + '/post/smile/em/em', '.gif', [], true);
    var KFSmileCode = emAddrArrayHandler(10, 58, '[s:', ']');
    // lovelive专用小
    var LoveliveSmalltargetURL = emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Small/Lovelive2nd', '.png');
    emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Small/Lovelive', '.png', LoveliveSmalltargetURL);
    // kf快捷代码(需要改写解构赋值)
    var functionDescription = ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体', '下划线', '斜体', '水平线', '背景色', '插入图片'];
    var defaultFunction = ['[sell=100][/sell]', '[quote][/quote]', '[hide=100][/hide]', '[code][/code]', '[strike][/strike]', '[fly][/fly]', '[color=#00FF00][/color]', '[b][/b]', '[u][/u]', '[i][/i]', '[hr]', '[backcolor=][/backcolor]', '[img][/img]'];
    // 颜文字
    var emoji = ['(●・ 8 ・●)', '╰(๑◕ ▽ ◕๑)╯', '(ゝω・)', '〜♪♪', '(ﾟДﾟ≡ﾟДﾟ)', '(＾o＾)ﾉ', '(|||ﾟДﾟ)', '(`ε´ )', '(╬ﾟдﾟ)', '(|||ﾟдﾟ)', '(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)', '╮(￣▽￣)╭', '( ´_ゝ｀)', 'のヮの', '(ﾉ؂< ๑）诶嘿☆～', '(&lt;_&lt;)', '(&gt;_&gt;)', '(;¬_¬)', '(▔□▔)/', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', 'Σ( ￣□￣||)', '(´；ω；`)', '（/TДT)/', '(^・ω・^ )', '(｡･ω･｡)', '(●￣(ｴ)￣●)', 'ε=ε=(ノ≧∇≦)ノ', '(´･_･`)', '(-_-#)', '（￣へ￣）', '(￣ε(#￣) Σ', 'ヽ(`Д´)ﾉ', '(╯°口°)╯(┴—┴', '（#-_-)┯━┯', '_(:3」∠)_', '(笑)', '(汗)', '(泣)', '(苦笑)', '(´・ω・`)', '(╯°□°）╯︵ ┻━┻', '(╯‵□′)╯︵┻━┻', '( ´ρ`)', '( ﾟωﾟ)', '(oﾟωﾟo)', '(　^ω^)', '(｡◕∀◕｡)', '/( ◕‿‿◕ )\\', 'ε٩( º∀º )۶з', '(￣ε(#￣)☆╰╮(￣▽￣///)', '（●´3｀）~♪', '_(:з」∠)_', 'хорошо!', '＼(^o^)／', '(•̅灬•̅ )', '(ﾟДﾟ)', 'まったく、小学生は最高だぜ！！', 'ε=ε=ε=┏(゜ロ゜;)┛', '(；°ほ°)', '	⎝≧⏝⏝≦⎠', 'ヽ(✿ﾟ▽ﾟ)ノ', '焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！', '|•ω•`)'];

    var MenuList = {
        item4: { datatype: 'imageLink', title: '固有', addr: KFSmileURL, ref: KFSmileCode },
        item1: { datatype: 'plain', title: '快捷', addr: defaultFunction, ref: functionDescription },
        item2: { datatype: 'plain', title: '颜文字', addr: emoji },
        item5: { datatype: 'image', title: 'ACFUN', addr: ACSmile4 },
        item6: { datatype: 'image', title: '常用', addr: NewGame }, //
        item7: { datatype: 'image', title: 'Akari', addr: AkariSmile }, //Akari
        item8: { datatype: 'image', title: 'BiliBili', addr: biliEM }, //B站
        item3: { datatype: 'image', title: 'LoveLive', addr: LoveliveSmalltargetURL }
    };

    /* Event 函数 */
    var EventUtil = {
        getEvent: function getEvent(event) {
            return event ? event : window.event;
        },
        getTarget: function getTarget(event) {
            return event.target || event.srcElement;
        },
        preventDefault: function preventDefault(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        stopPropagation: function stopPropagation(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        addHandler: function addHandler(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false); //DOM2
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler); //IE
            } else {
                element['on' + type] = handler; //DOM 0
            }
        },
        removeHandler: function removeHandler(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false); //DOM2
            } else if (element.detachEvent) {
                element.detachEvent('on' + type, handler); //IE
            } else {
                element['on' + type] = null; //DOM 0
            }
        }
    };
    /*Element 函数*/
    var EleUtil = {
        create: function create(ele) {
            return document.createElement(ele);
        },
        selectID: function selectID(ele) {
            return document.getElementById(ele);
        },
        select: function select(selector) {
            return document.querySelector(selector);
        }
    };

    /*Cookie处理*/
    var CookieUtil = {
        getCookies: function getCookies() {
            var CookieObj = {};
            var thisCookie = document.cookie;
            if (thisCookie === '') return CookieObj;
            var listObj = thisCookie.split(';');
            for (var i = 0, len = listObj.length; i < len; i++) {
                var w = listObj[i].split('=');
                var name = decodeURIComponent(w[0].replace(/^\s+|\s+$/g, ''));
                var value = decodeURIComponent(w[1]);
                CookieObj[name] = value;
            }
            return CookieObj;
            //console.log(thisCookie);
        },
        setCookies: function setCookies(name, value, path, iDay, domain, secure) {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + iDay);
            var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            if (iDay) {
                cookie + ';expires=' + oDate;
            }
            if (path) {
                cookie + ';path=' + path;
            }
            if (domain) {
                cookie + ';domain=' + domain;
            }
            if (secure) {
                cookie + ';secure=' + secure;
            }
            document.cookie = cookie;
        }
    };
    /*模块*/
    var createItems = {
        createContainer: function createContainer(key) {
            var ItemContainer = EleUtil.create('div');
            ItemContainer.id = 'eddie32' + key;
            EleUtil.selectID('toggleWindow').style.height = '100px';
            EleUtil.selectID('toggleWindow').appendChild(ItemContainer);
            return ItemContainer;
        },
        createImages: function createImages(key) {
            var outerContainer = createItems.createContainer(key);
            //console.log(MenuList[key]);
            var imgList = MenuList[key].addr;
            var imgLength = imgList.length;
            for (var k = 0; k < imgLength; k++) {
                var divElement = EleUtil.create('div');
                divElement.className = 'clickItem';
                var imgItem = EleUtil.create('img');
                imgItem.src = imgList[k];
                imgItem.className = 'Ems';
                imgItem.onclick = expandMenu.attachEmotion;
                imgItem.onmouseover = mouseOverAction.showImg;
                imgItem.onmouseout = mouseOverAction.clearImg;
                //imgItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 75px;height: 75px;';
                divElement.appendChild(imgItem);
                outerContainer.appendChild(divElement);
            }
        },
        createPlainText: function createPlainText(key) {
            var outerContainer = createItems.createContainer(key);
            var txtList = MenuList[key].addr;
            var txtLength = txtList.length;
            for (var k = 0; k < txtLength; k++) {
                var txtItem = EleUtil.create('span');
                txtItem.style.cssText = 'cursor:pointer; margin: 10px 10px;';
                txtItem.innerHTML = '<a data-sign=' + encodeURI(txtList[k]) + ' class=\'txtBtnEmotion\'>' + txtList[k] + '</a>';
                if (MenuList[key].ref) {
                    txtItem.innerHTML = '<a data-sign=' + encodeURI(txtList[k]) + ' class=\'txtBtnEmotion\'>' + MenuList[key].ref[k] + '</a>';
                    EleUtil.selectID('toggleWindow').style.height = '50px';
                }
                txtItem.onclick = expandMenu.attachEmotion;
                txtItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 50px;';
                outerContainer.appendChild(txtItem);
            }
        },
        createImageLink: function createImageLink(key) {
            var outerContainer = createItems.createContainer(key);
            var imgList = MenuList[key].addr;
            var refList = MenuList[key].ref;
            var imgLength = imgList.length;
            for (var k = 0; k < imgLength; k++) {
                var imgItem = EleUtil.create('img');
                imgItem.dataset.link = refList[k];
                imgItem.src = imgList[k];
                imgItem.className = 'Ems';
                imgItem.onclick = expandMenu.attachEmotion;
                imgItem.style.cssText = 'width: 50px !important;height: 50px !important;';
                outerContainer.appendChild(imgItem);
            }
        }
    };
    var mouseOverAction = {
        showImg: function showImg(event) {
            var eventTarget = EventUtil.getTarget(event);
            if (!eventTarget.src) {
                return null;
            }
            var largeViewContainer = EleUtil.selectID('largeView');
            var _ref = [document.body.scrollTop, document.body.scrollLeft],
                scrollTopValue = _ref[0],
                scrollLeftValue = _ref[1];

            largeViewContainer.innerHTML = '<img src=' + eventTarget.src + ' />';
            largeViewContainer.style.display = 'block';
            largeViewContainer.style.top = event.clientY + scrollTopValue + 20 + 'px';
            largeViewContainer.style.left = event.clientX + scrollLeftValue + 'px';
            //console.log([event.clientY,event.clientX]);
            //console.log([EleUtil.selectID('largeView').style.top,EleUtil.selectID('largeView').style.left]);
            //console.log([document.body.scrollTop,document.body.scrollLeft]);
        },
        clearImg: function clearImg(event) {
            EleUtil.selectID('largeView').style.display = 'none';
        }
    };
    var expandMenu = {
        init: function init(event) {
            createMenu.clear();
            var eventTarget = EventUtil.getTarget(event);
            EleUtil.selectID('toggleWindow').style.display = 'block';
            EleUtil.selectID('toggleWindow').style.width = EleUtil.select('textarea').style.width;
            var dataType = eventTarget.attributes[2].nodeValue;
            var dataKey = eventTarget.attributes[1].nodeValue;
            if (EleUtil.select('#eddie32' + dataKey)) {
                EleUtil.select('#eddie32' + dataKey).style.display = 'block';
                if (dataKey == 'item1') EleUtil.selectID('toggleWindow').style.height = '50px';else EleUtil.selectID('toggleWindow').style.height = '100px';
                return;
            }
            if (dataType == 'plain') {
                createItems.createPlainText(dataKey);
            } else if (dataType == 'image') {
                createItems.createImages(dataKey);
            } else if (dataType == 'imageLink') {
                createItems.createImageLink(dataKey);
            }
        },
        attachEmotion: function attachEmotion(event) {
            var eventTarget = EventUtil.getTarget(event);
            //console.log(eventTarget);

            var addressTarget = '',
                emotionAddress = '';
            if (eventTarget.attributes.length == 2) {
                if (eventTarget.src) {
                    addressTarget = eventTarget.src;
                    emotionAddress = expandMenu.addressParse(addressTarget, 'image');
                } else {
                    //console.log(eventTarget.attributes);
                    addressTarget = eventTarget.attributes[0].nodeValue;
                    emotionAddress = expandMenu.addressParse(addressTarget, 'plain');
                }
            } else {
                //console.log(eventTarget.attributes);
                addressTarget = eventTarget.attributes[0].nodeValue;
                emotionAddress = expandMenu.addressParse(addressTarget, 'plain');
            }
            var selectTextArea = EleUtil.select('textarea');
            var ovalue = selectTextArea.value;
            var startPos = selectTextArea.selectionStart;
            var endPos = selectTextArea.selectionEnd;
            selectTextArea.value = '' + ovalue.slice(0, startPos) + emotionAddress + ovalue.slice(startPos);
            // console.log(eventTarget);
            // console.log(emotionAddress);
        },
        addressParse: function addressParse(addStr, pattern) {
            var stringReturn = '';
            if (pattern === 'image') {
                stringReturn = '[img]' + addStr + '[/img]';
            }
            if (pattern === 'plain') {
                stringReturn = decodeURI(addStr);
            }
            if (pattern === 'imageLink') {
                stringReturn = addStr;
            }
            return stringReturn;
        }
    };
    var createMenu = {
        defaultID: 'emotion0000',
        main: function main() {
            /*main menu*/
            var mainMenu = EleUtil.create('div');
            mainMenu.innerHTML = '<span id=\'largeView\'></span><span class=\'subMenu\' title=\'\u4E3B\u83DC\u5355 version ' + versionNo + '\'><b>\u2468\u56E7\u2468</b></span>';
            mainMenu.id = createMenu.defaultID;
            var MenuLength = Object.keys(MenuList).length;
            for (var i = 0; i < MenuLength; i++) {
                var MenuKey = Object.keys(MenuList)[i];
                var MenuTitle = MenuList[MenuKey].title;
                var MenuType = MenuList[MenuKey].datatype;
                if (!MenuType || !MenuTitle) console.log('dataerror  ' + MenuKey);
                var testMenu = createMenu.subs(MenuTitle, expandMenu.init, MenuKey, MenuType);
                mainMenu.appendChild(testMenu);
            }
            /*close button*/
            var closeBtn = EleUtil.create('span');
            closeBtn.innerHTML = '[x]';
            closeBtn.className = 'subMenu';
            closeBtn.id = 'closeEM';
            closeBtn.onclick = createMenu.clear;
            closeBtn.style.cssText = 'cursor:pointer';
            mainMenu.appendChild(closeBtn);
            /*dropdown box*/
            var itemWindow = EleUtil.create('div');
            itemWindow.id = 'toggleWindow';
            mainMenu.appendChild(itemWindow);
            /*css style*/
            var styleItem = EleUtil.create('style');
            styleItem.innerHTML = '#emotion0000 {padding:5px 5px; vertical-align: middle;                   font: 12px/16px \'Hiragino Sans GB\',\'Microsoft YaHei\',\'Arial\',\'sans-serif\'}                 #largeView{position:absolute; background: #fff;z-index:5000; opacity: 0.8}                 #largeView img{width: 200px; height:200px;}                 #toggleWindow a{padding: 5px 5px;line-height:2}                 #toggleWindow {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:6px;                 margin-bottom:6px; border:1px solid #ff4351; display:none;position:relative; z-index:200; }                .clickItem{display:inline-block; z-index:300;}\n                a.subBut{text-decoration: none;color: #fff;}                 .Ems{cursor:pointer;width: 50px;height: 50px;display:inline-block;  z-index:400;}                 a.subBut:hover{color: #fff;}                 a.txtBtnEmotion{text-decoration:none;}                 a.txtBtnEmotion:hover{background:#ff7680; color:#fff; }                 .subMenu{display:inline-block;cursor:pointer; text-align:center; padding: 8px 8px;                 font: 12px/16px \'Hiragino Sans GB\',\'Microsoft YaHei\',\'Arial\',\'sans-serif\';                background-color: #ff4351;border-color: #ff4351;color: #fff;}                 .subMenu:hover, .subMenu:focus, .subMenu:visited{background-color: #ff7680;border-color: #ff7680;color: #fff;}';
            mainMenu.appendChild(styleItem);
            return mainMenu;
        },
        subs: function subs(title, func, subid, subtype) {
            var subMenu = EleUtil.create('span');
            subMenu.id = subid;
            subMenu.className = 'subMenu';
            var subcontent = '<a class=\'subBut\' data-kid=' + subid + ' date-type=' + subtype + '>' + title + '</a>';
            subMenu.onclick = func;
            subMenu.title = title;
            subMenu.innerHTML = subcontent;
            return subMenu;
        },
        clear: function clear() {
            var toggleWindow = EleUtil.selectID('toggleWindow');
            toggleWindow.style.display = 'none';
            var togWinChildren = toggleWindow.childNodes;
            for (var j = 0, len = togWinChildren.length; j < len; j++) {
                //console.log(togWinChildren[j]);
                togWinChildren[j].style.display = 'none';
            }
        }
    };

    if (typeof window !== 'undefined' && document != null) {
        //let testareaEleSet = new WeakSet();
        var elementSet = document.getElementsByTagName('textarea');
        var elementSetLength = elementSet.length;
        if (elementSetLength === 0) {
            console.log('There is no textarea');
        }
        //testareaEleSet.add(elementSet);
        var userOption = {
            userWindowHeight: 120,
            userSelectTextArea: 'last'
        };
        var mainEmotionMenu = createMenu.main();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = elementSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var elementSingle = _step.value;

                //console.log(elementSingle);
                elementSingle.parentNode.insertBefore(mainEmotionMenu, elementSingle);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
};
var imagepath = '1485412810';
fun(imgpath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFDQSxJQUFNLE1BQU0sU0FBTixHQUFNLEdBQWtCO0FBQUEsUUFBakIsU0FBaUIsdUVBQVAsRUFBTzs7O0FBRTFCLFFBQU0sWUFBWSxPQUFsQjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0EsYUFBUyxrQkFBVCxDQUE0QixXQUE1QixFQUF5QyxXQUF6QyxFQUFzRCxTQUF0RCxFQUFpRSxTQUFqRSxFQUFpSDtBQUFBLFlBQXBDLFNBQW9DLHVFQUF4QixFQUF3QjtBQUFBLFlBQXBCLFdBQW9CLHVFQUFOLEtBQU07O0FBQzdHLFlBQUksV0FBVyxFQUFmO0FBQUEsWUFBbUIsYUFBYSxDQUFoQztBQUNBLGFBQUksSUFBSSxJQUFFLFdBQVYsRUFBc0IsSUFBRSxXQUF4QixFQUFvQyxHQUFwQyxFQUF3QztBQUNwQyx5QkFBYSxDQUFiO0FBQ0EsZ0JBQUcsV0FBSCxFQUFlO0FBQ1gsNkJBQWMsSUFBRSxDQUFILEdBQU8sQ0FBUCxTQUFlLENBQTVCO0FBQ0g7QUFDRCw0QkFBYyxTQUFkLEdBQTBCLFVBQTFCLEdBQXVDLFNBQXZDO0FBQ0Esc0JBQVUsSUFBVixDQUFlLFFBQWY7QUFDSDtBQUNELGVBQU8sU0FBUDtBQUNIO0FBQ0Q7QUFDQTtBQUNBLFFBQUksU0FBUyxtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBeUIsMkVBQXpCLEVBQ21CLE9BRG5CLENBQWI7QUFFQSx1QkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBeUIsaUZBQXpCLEVBQ21CLE9BRG5CLEVBQzJCLE1BRDNCO0FBRUE7QUFDQSx1QkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBeUIsa0VBQXpCLEVBQ21CLE1BRG5CLEVBQzBCLE1BRDFCLEVBQ2lDLElBRGpDO0FBRUE7QUFDQSxRQUFJLGFBQWEsbUJBQW1CLENBQW5CLEVBQXFCLEVBQXJCLEVB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bnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IGZ1biA9IChpbWFnZXBhdGg9JycpID0+IHtcclxuXHJcbiAgICBjb25zdCB2ZXJzaW9uTm8gPSAnNC4yLjInO1xyXG4gICAgLyogQWRkcmVzcyBmdW5jdGlvblxyXG4gICAgICogc3RhcnROdW1iZXI6IG51bWJlciwgaW5kaWNhdGluZyB0aGUgc3RhcnQgbnVtYmVyO1xyXG4gICAgICogbGVuZ3RoQXJyYXk6IG51bWJlciwgaW5kaWNhdGluZyB0aGUgYWRkckFycmF5IGxlbmd0aDtcclxuICAgICAqIHN0clByZWZpeDogc3RyaW5nLCBhZGRyZXNzIFByZWZpeDtcclxuICAgICAqIHN0clN1ZmZpeDogc3RyaW5nLCBhZGRyZXNzIFN1ZmZpeDtcclxuICAgICAqIGxlYWRpbmdaZXJvOiBib29sZW4sIHRydWUgZm9yIGxlYWRpbmcgemVybyBpbiBudW1iZXI7XHJcbiAgICAgKiBhZGRyQXJyYXk6IGFycmF5LCBhZGRyZXNzIGFycmF5LCBkZWZhdWx0IGZvciBlbXB0eTtcclxuICAgICAqL1xyXG4gICAgLy8g5Yib5bu66KGo5oOF5YyF5pWw57uE55qE5Ye95pWwXHJcbiAgICBmdW5jdGlvbiBlbUFkZHJBcnJheUhhbmRsZXIoc3RhcnROdW1iZXIsIGxlbmd0aEFycmF5LCBzdHJQcmVmaXgsIHN0clN1ZmZpeCwgIGFkZHJBcnJheSA9IFtdLCBsZWFkaW5nWmVybyA9IGZhbHNlKXtcclxuICAgICAgICBsZXQgYWRkclRlbXAgPSAnJywgYWRkck51bWJlciA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBqPXN0YXJ0TnVtYmVyO2o8bGVuZ3RoQXJyYXk7aisrKXtcclxuICAgICAgICAgICAgYWRkck51bWJlciA9IGo7XHJcbiAgICAgICAgICAgIGlmKGxlYWRpbmdaZXJvKXtcclxuICAgICAgICAgICAgICAgIGFkZHJOdW1iZXIgPSAoaj45KT8oaik6KGAwJHtqfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFkZHJUZW1wID0gYCR7c3RyUHJlZml4fSR7YWRkck51bWJlcn0ke3N0clN1ZmZpeH1gO1xyXG4gICAgICAgICAgICBhZGRyQXJyYXkucHVzaChhZGRyVGVtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhZGRyQXJyYXk7XHJcbiAgICB9XHJcbiAgICAvKiDooajmg4XljIXlnLDlnYDmlbDmja4gKi9cclxuICAgIC8vIELnq5lcclxuICAgIGxldCBiaWxpRU0gPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTcsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9CaWxpQmlsaS8yMjMzICgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKS5naWYnKTtcclxuICAgIGVtQWRkckFycmF5SGFuZGxlcigwLCAxNCwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0JpbGlCaWxpL2JpbGliaWxpVFYgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJykucG5nJyxiaWxpRU0pO1xyXG4gICAgLy8gdG9yYemFsVxyXG4gICAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvdG9yYS8wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLmpwZycsYmlsaUVNLHRydWUpO1xyXG4gICAgLy/pmL/ljaHmnpcgZnJvbSDmkYfmm7Pnmb7lkIhcclxuICAgIGxldCBBa2FyaVNtaWxlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsMjEsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9EeW5hbWljL2FrYXJpJywnLmdpZicpO1xyXG4gICAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsNzIsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9ha2FyaS9ha2FyaScsJy5wbmcnLEFrYXJpU21pbGUpO1xyXG4gICAgLy8gTmV3IEdhbWUga2bmianlsZVcclxuICAgIGxldCBOZXdHYW1lID0gZW1BZGRyQXJyYXlIYW5kbGVyKDIsNjQsJ2h0dHA6Ly9uZWtvaGFuZC5tb2Uvc3BzbWlsZS8wMVNvcmEvMHh4JywnLnBuZycpO1xyXG4gICAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsMjAsJ2h0dHA6Ly9zcy5uZWtvaGFuZC5tb2UvQXNvdXJjZS9FbW90aW9uUGljL0tGRU0gKCcsJykuZ2lmJywgTmV3R2FtZSk7XHJcbiAgICAvLyBBQ0ZVTlxyXG4gICAgbGV0IEFDU21pbGU0ID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsNTEsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9BQ0ZVTi9OZXcvJywnLnBuZycpO1xyXG4gICAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsNDAsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9BQ0ZVTi9OaW1pbmcvJywnLmdpZicsQUNTbWlsZTQsdHJ1ZSk7XHJcbiAgICAvLyBLRiDlhoXnva5cclxuICAgIGxldCBLRlNtaWxlVVJMID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsNDksYCR7dHlwZW9mIGltYWdlcGF0aCAhPSAndW5kZWZpbmVkJyA/IGltYWdlcGF0aCA6ICcnfS9wb3N0L3NtaWxlL2VtL2VtYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZ2lmJyxbXSx0cnVlKTtcclxuICAgIGxldCBLRlNtaWxlQ29kZSA9IGVtQWRkckFycmF5SGFuZGxlcigxMCw1OCxgW3M6YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXScpO1xyXG4gICAgLy8gbG92ZWxpdmXkuJPnlKjlsI9cclxuICAgIGxldCBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsNDEsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMi9TbWFsbC9Mb3ZlbGl2ZTJuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycpO1xyXG4gICAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsNDEsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9TbWFsbC9Mb3ZlbGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnLExvdmVsaXZlU21hbGx0YXJnZXRVUkwpO1xyXG4gICAgLy8ga2blv6vmjbfku6PnoIEo6ZyA6KaB5pS55YaZ6Kej5p6E6LWL5YC8KVxyXG4gICAgbGV0IGZ1bmN0aW9uRGVzY3JpcHRpb24gPSBbJ+WHuuWUrui0tHNlbGw95ZSu5Lu3Jywn5byV55SoJywgJ+makOiXj2hpZGU956We56eY562J57qnJywn5o+S5YWl5Luj56CBJywn5Yig6Zmk57q/Jywn6LeR6ams54GvJywn5paH5a2X6aKc6ImyJywn57KX5L2TJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfkuIvliJLnur8nLCfmlpzkvZMnLCfmsLTlubPnur8nLCfog4zmma/oibInLCfmj5LlhaXlm77niYcnXTtcclxuICAgIGxldCBkZWZhdWx0RnVuY3Rpb24gPSBbJ1tzZWxsPTEwMF1bL3NlbGxdJywnW3F1b3RlXVsvcXVvdGVdJywnW2hpZGU9MTAwXVsvaGlkZV0nLCdbY29kZV1bL2NvZGVdJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1tzdHJpa2VdWy9zdHJpa2VdJywnW2ZseV1bL2ZseV0nLCdbY29sb3I9IzAwRkYwMF1bL2NvbG9yXScsJ1tiXVsvYl0nLCdbdV1bL3VdJywnW2ldWy9pXScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdbaHJdJywgJ1tiYWNrY29sb3I9XVsvYmFja2NvbG9yXScsJ1tpbWddWy9pbWddJ107XHJcbiAgICAvLyDpopzmloflrZdcclxuICAgIGxldCBlbW9qaSA9IFsnKOKXj+ODuyA4IOODu+KXjyknLFxyXG4gICAgICAgICAgICAgICAgICfilbAo4LmR4peVIOKWvSDil5XguZEp4pWvJywnKOOCnc+J44O7KScsJ+OAnOKZquKZqicsJyjvvp/QlO++n+KJoe++n9CU776fKScsICco77y+b++8vinvvoknICwgJyh8fHzvvp/QlO++nyknLCAnKGDOtcK0ICknLCAgJyjilazvvp/QtO++nyknLCAnKHx8fO++n9C0776fKScgLCAnKO+/o+KIh++/oyknLCAnKO+/ozPvv6MpJywgJyjvv6PvvbDvv6MpJywgJyjvv6MgLiDvv6MpJywgJyjvv6PvuL/vv6MpJywgJyjvv6PvuLbvv6MpJywgJygqwrTPiWAqKScsICco44O7z4njg7spJywnKOKMkuKWveKMkiknLCco77+j4pa977+j77yJJywnKD3jg7vPieODuz0pJywnKO+9gOODu8+J44O7wrQpJywnKOOAnO+/o+KWs++/oynjgJwnLCco772l4oiA772lKScsXHJcbiAgICAgICAgICAgICAgICAgJyjCsOKIgMKwKe++iScsJyjvv6Mz77+jKScsJ+KVrijvv6Pilr3vv6Mp4pWtJywnKCDCtF/jgp3vvYApJywn44Gu44Ou44GuJywnKO++idiCPCDguZHvvInor7blmL/imIbvvZ4nLCcoJmx0O18mbHQ7KScsJygmZ3Q7XyZndDspJywnKDvCrF/CrCknLCco4paU4pah4paUKS8nLCco776f0JTvvp/iiaHvvp/QtO++nykhPycsJ86jKO++n9C0776fOyknLCfOoygg77+j4pah77+jfHwpJyxcclxuICAgICAgICAgICAgICAgICAnKMK077ybz4nvvJtgKScsJ++8iC9U0JRUKS8nLCcoXuODu8+J44O7XiApJywnKO+9oe+9pc+J772l772hKScsJyjil4/vv6Mo7720Ke+/o+KXjyknLCfOtT3OtT0o44OO4omn4oiH4ommKeODjicsJyjCtO+9pV/vvaVgKScsJygtXy0jKScsJ++8iO+/o+OBuO+/o++8iScsJyjvv6POtSgj77+jKSDOoycsJ+ODvShg0JTCtCnvvoknLCco4pWvwrDlj6PCsCnila8o4pS04oCU4pS0Jywn77yIIy1fLSnilK/ilIHilK8nLCdfKDoz44CN4oigKV8nLCco56yRKScsJyjmsZcpJywnKOazoyknLCco6Ium56yRKScsICcowrTjg7vPieODu2ApJywgJyjila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuycsJyjila/igLXilqHigLIp4pWv77i14pS74pSB4pS7JywgJyggwrTPgWApJywgJygg776fz4nvvp8pJywgJyhv776fz4nvvp9vKScsICco44CAXs+JXiknLCAnKO+9oeKXleKIgOKXle+9oSknLCAnLygg4peV4oC/4oC/4peVIClcXFxcJywnzrXZqSggwrriiIDCuiAp27bQtycsJyjvv6POtSgj77+jKeKYhuKVsOKVrijvv6Pilr3vv6MvLy8pJyxcclxuICAgICAgICAgICAgICAgICAn77yI4pePwrQz772A77yJfuKZqicsICdfKDrQt+OAjeKIoClfJywn0YXQvtGA0L7RiNC+IScsJ++8vCheb14p77yPJywnKOKAosyF54Gs4oCizIUgKScsICco776f0JTvvp8pJywn44G+44Gj44Gf44GP44CB5bCP5a2m55Sf44Gv5pyA6auY44Gg44Gc77yB77yBJywnzrU9zrU9zrU94pSPKOOCnOODreOCnDsp4pSbJyxcclxuICAgICAgICAgICAgICAgICAnKO+8m8Kw44G7wrApJywnXHTijp3iiafij53ij53iiabijqAnLCfjg70o4py/776f4pa9776fKeODjicsJ+eElOOBq+iInuOBhOS4iuOBjOOCi+OCueODkeODvOOCr+OCiOOAgemCquaCquOBqueVsOaAp+S6pOmam+OBq+OAgeWkqee9sOOCkuS4juOBiO+8gScsJ3zigKLPieKAomApJ107XHJcblxyXG5cclxuICAgIGxldCBNZW51TGlzdCA9IHtcclxuICAgICAgICBpdGVtNDp7ZGF0YXR5cGU6J2ltYWdlTGluaycsIHRpdGxlOiflm7rmnIknLGFkZHI6S0ZTbWlsZVVSTCwgcmVmOktGU21pbGVDb2RlfSxcclxuICAgICAgICBpdGVtMTp7ZGF0YXR5cGU6J3BsYWluJyx0aXRsZTon5b+r5o23JyxhZGRyOmRlZmF1bHRGdW5jdGlvbiwgcmVmOmZ1bmN0aW9uRGVzY3JpcHRpb259LFxyXG4gICAgICAgIGl0ZW0yOntkYXRhdHlwZToncGxhaW4nLHRpdGxlOifpopzmloflrZcnLCBhZGRyOmVtb2ppfSxcclxuICAgICAgICBpdGVtNTp7ZGF0YXR5cGU6J2ltYWdlJyx0aXRsZTonQUNGVU4nLGFkZHI6QUNTbWlsZTR9LFxyXG4gICAgICAgIGl0ZW02OntkYXRhdHlwZTonaW1hZ2UnLHRpdGxlOifluLjnlKgnLGFkZHI6TmV3R2FtZX0sICAvL1xyXG4gICAgICAgIGl0ZW03OntkYXRhdHlwZTonaW1hZ2UnLHRpdGxlOidBa2FyaScsYWRkcjpBa2FyaVNtaWxlfSwgLy9Ba2FyaVxyXG4gICAgICAgIGl0ZW04OntkYXRhdHlwZTonaW1hZ2UnLHRpdGxlOidCaWxpQmlsaScsYWRkcjpiaWxpRU19LCAvL0Lnq5lcclxuICAgICAgICBpdGVtMzp7ZGF0YXR5cGU6J2ltYWdlJyx0aXRsZTonTG92ZUxpdmUnLGFkZHI6TG92ZWxpdmVTbWFsbHRhcmdldFVSTH1cclxuICAgIH07XHJcblxyXG4gICAgLyogRXZlbnQg5Ye95pWwICovXHJcbiAgICBjb25zdCBFdmVudFV0aWwgPSB7XHJcbiAgICAgICAgZ2V0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50ID8gZXZlbnQgOiB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRUYXJnZXQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KXtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbil7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZEhhbmRsZXI6IGZ1bmN0aW9uKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpe1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7ICAvL0RPTTJcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KXtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGhhbmRsZXIpOyAgLy9JRVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFsnb24nICsgdHlwZV0gPSBoYW5kbGVyOyAgLy9ET00gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVIYW5kbGVyOiBmdW5jdGlvbihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKXtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAvL0RPTTJcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KXtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29uJyArIHR5cGUsIGhhbmRsZXIpOyAvL0lFXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50WydvbicgKyB0eXBlXSA9IG51bGw7IC8vRE9NIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKkVsZW1lbnQg5Ye95pWwKi9cclxuICAgIGNvbnN0IEVsZVV0aWwgPSB7XHJcbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbihlbGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0SUQ6IGZ1bmN0aW9uKGVsZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qQ29va2ll5aSE55CGKi9cclxuICAgIGNvbnN0IENvb2tpZVV0aWwgPSB7XHJcbiAgICAgICAgZ2V0Q29va2llczogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IENvb2tpZU9iaiA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdGhpc0Nvb2tpZSA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgICAgICAgICAgaWYodGhpc0Nvb2tpZSA9PT0gJycpIHJldHVybiBDb29raWVPYmo7XHJcbiAgICAgICAgICAgIGxldCBsaXN0T2JqID0gdGhpc0Nvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MCwgbGVuPWxpc3RPYmoubGVuZ3RoO2k8bGVuO2krKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdyA9IGxpc3RPYmpbaV0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KHdbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywnJykpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHdbMV0pO1xyXG4gICAgICAgICAgICAgICAgQ29va2llT2JqW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIENvb2tpZU9iajtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzQ29va2llKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldENvb2tpZXM6IGZ1bmN0aW9uKG5hbWUsdmFsdWUscGF0aCxpRGF5LGRvbWFpbixzZWN1cmUpe1xyXG4gICAgICAgICAgICBsZXQgb0RhdGU9bmV3IERhdGUoKTtcclxuICAgICAgICAgICAgb0RhdGUuc2V0RGF0ZShvRGF0ZS5nZXREYXRlKCkraURheSk7XHJcbiAgICAgICAgICAgIGxldCBjb29raWUgPSBgJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKX1gO1xyXG4gICAgICAgICAgICBpZiAoaURheSkge1xyXG4gICAgICAgICAgICAgICAgYCR7Y29va2llfTtleHBpcmVzPSR7b0RhdGV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgYCR7Y29va2llfTtwYXRoPSR7cGF0aH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcclxuICAgICAgICAgICAgICAgIGAke2Nvb2tpZX07ZG9tYWluPSR7ZG9tYWlufWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlY3VyZSkge1xyXG4gICAgICAgICAgICAgICAgYCR7Y29va2llfTtzZWN1cmU9JHtzZWN1cmV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8q5qih5Z2XKi9cclxuICAgIGNvbnN0IGNyZWF0ZUl0ZW1zID0ge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcjogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICAgICAgbGV0IEl0ZW1Db250YWluZXIgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgICAgICAgIEl0ZW1Db250YWluZXIuaWQgPSBgZWRkaWUzMiR7a2V5fWA7XHJcbiAgICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodD0nMTAwcHgnO1xyXG4gICAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5hcHBlbmRDaGlsZChJdGVtQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIEl0ZW1Db250YWluZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVJbWFnZXM6ZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICAgICAgbGV0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coTWVudUxpc3Rba2V5XSk7XHJcbiAgICAgICAgICAgIGxldCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICAgICAgICBsZXQgaW1nTGVuZ3RoID0gaW1nTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8aW1nTGVuZ3RoO2srKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2RWxlbWVudCA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gJ2NsaWNrSXRlbSc7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0uc3JjID0gaW1nTGlzdFtrXTtcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLm9uY2xpY2sgPSBleHBhbmRNZW51LmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLm9ubW91c2VvdmVyID0gbW91c2VPdmVyQWN0aW9uLnNob3dJbWc7XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLm9ubW91c2VvdXQgPW1vdXNlT3ZlckFjdGlvbi5jbGVhckltZztcclxuICAgICAgICAgICAgICAgIC8vaW1nSXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6IDEwcHggMTBweDp3aWR0aDogNzVweDtoZWlnaHQ6IDc1cHg7JztcclxuICAgICAgICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XHJcbiAgICAgICAgICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlUGxhaW5UZXh0OiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgICAgICBsZXQgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgICAgICAgbGV0IHR4dExpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgICAgICAgIGxldCB0eHRMZW5ndGggPSB0eHRMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKGxldCBrPTA7azx0eHRMZW5ndGg7aysrKXtcclxuICAgICAgICAgICAgICAgIGxldCB0eHRJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgICAgICAgICAgIHR4dEl0ZW0uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcjsgbWFyZ2luOiAxMHB4IDEwcHg7JztcclxuICAgICAgICAgICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYDxhIGRhdGEtc2lnbj0ke2VuY29kZVVSSSh0eHRMaXN0W2tdKX0gY2xhc3M9J3R4dEJ0bkVtb3Rpb24nPiR7dHh0TGlzdFtrXX08L2E+YDtcclxuICAgICAgICAgICAgICAgIGlmKE1lbnVMaXN0W2tleV0ucmVmKXtcclxuICAgICAgICAgICAgICAgICAgICB0eHRJdGVtLmlubmVySFRNTCA9IGA8YSBkYXRhLXNpZ249JHtlbmNvZGVVUkkodHh0TGlzdFtrXSl9IGNsYXNzPSd0eHRCdG5FbW90aW9uJz4ke01lbnVMaXN0W2tleV0ucmVmW2tdfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodD0nNTBweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0eHRJdGVtLm9uY2xpY2sgPSBleHBhbmRNZW51LmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgICAgICAgICB0eHRJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7cGFkZGluZzogMTBweCAxMHB4OndpZHRoOiA1MHB4Oyc7XHJcbiAgICAgICAgICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHRJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlSW1hZ2VMaW5rOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgICAgICBsZXQgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgICAgICAgbGV0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgICAgICAgIGxldCByZWZMaXN0ID0gTWVudUxpc3Rba2V5XS5yZWY7XHJcbiAgICAgICAgICAgIGxldCBpbWdMZW5ndGggPSBpbWdMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKHZhciBrPTA7azxpbWdMZW5ndGg7aysrKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbWdJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5kYXRhc2V0LmxpbmsgPSAgcmVmTGlzdFtrXTtcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0uc3JjID0gaW1nTGlzdFtrXTtcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLm9uY2xpY2sgPSBleHBhbmRNZW51LmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDUwcHggIWltcG9ydGFudDtoZWlnaHQ6IDUwcHggIWltcG9ydGFudDsnO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW91c2VPdmVyQWN0aW9uID0ge1xyXG4gICAgICAgIHNob3dJbWc6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgbGV0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgICAgICAgIGlmKCFldmVudFRhcmdldC5zcmMpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGxhcmdlVmlld0NvbnRhaW5lciA9IEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpO1xyXG4gICAgICAgICAgICBsZXQgW3Njcm9sbFRvcFZhbHVlLHNjcm9sbExlZnRWYWx1ZV0gPSBbZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XTtcclxuICAgICAgICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke2V2ZW50VGFyZ2V0LnNyY30gLz5gO1xyXG4gICAgICAgICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZICsgc2Nyb2xsVG9wVmFsdWUgKyAyMH1weGA7XHJcbiAgICAgICAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCArIHNjcm9sbExlZnRWYWx1ZX1weGA7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coW2V2ZW50LmNsaWVudFksZXZlbnQuY2xpZW50WF0pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFtFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS50b3AsRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUubGVmdF0pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsZWFySW1nOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGV4cGFuZE1lbnUgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjcmVhdGVNZW51LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGxldCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUud2lkdGg9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpLnN0eWxlLndpZHRoO1xyXG4gICAgICAgICAgICBsZXQgZGF0YVR5cGUgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgbGV0IGRhdGFLZXkgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgaWYoRWxlVXRpbC5zZWxlY3QoJyNlZGRpZTMyJytkYXRhS2V5KSl7XHJcbiAgICAgICAgICAgICAgICBFbGVVdGlsLnNlbGVjdCgnI2VkZGllMzInK2RhdGFLZXkpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YUtleSA9PSAnaXRlbTEnKSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQ9JzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQ9JzEwMHB4JztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhVHlwZSA9PSdwbGFpbicpe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlUGxhaW5UZXh0KGRhdGFLZXkpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihkYXRhVHlwZSA9PSdpbWFnZScpe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VzKGRhdGFLZXkpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihkYXRhVHlwZSA9PSAnaW1hZ2VMaW5rJyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZUxpbmsoZGF0YUtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGF0dGFjaEVtb3Rpb246IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudFRhcmdldCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYWRkcmVzc1RhcmdldCA9ICcnLCBlbW90aW9uQWRkcmVzcz0nJztcclxuICAgICAgICAgICAgaWYoZXZlbnRUYXJnZXQuYXR0cmlidXRlcy5sZW5ndGg9PTIpe1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnRUYXJnZXQuc3JjKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtb3Rpb25BZGRyZXNzPWV4cGFuZE1lbnUuYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbW90aW9uQWRkcmVzcz1leHBhbmRNZW51LmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCdwbGFpbicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZW1vdGlvbkFkZHJlc3M9ZXhwYW5kTWVudS5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwncGxhaW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0VGV4dEFyZWEgPSBFbGVVdGlsLnNlbGVjdCgndGV4dGFyZWEnKTtcclxuICAgICAgICAgICAgY29uc3Qgb3ZhbHVlID0gc2VsZWN0VGV4dEFyZWEudmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFBvcyA9IHNlbGVjdFRleHRBcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICAgICAgc2VsZWN0VGV4dEFyZWEudmFsdWUgPSBgJHtvdmFsdWUuc2xpY2UoMCwgc3RhcnRQb3MpfSR7ZW1vdGlvbkFkZHJlc3N9JHtvdmFsdWUuc2xpY2Uoc3RhcnRQb3MpfWA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZW1vdGlvbkFkZHJlc3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkcmVzc1BhcnNlOiBmdW5jdGlvbihhZGRTdHIsIHBhdHRlcm4pe1xyXG4gICAgICAgICAgICBsZXQgc3RyaW5nUmV0dXJuPScnO1xyXG4gICAgICAgICAgICBpZihwYXR0ZXJuID09PSAnaW1hZ2UnKXtcclxuICAgICAgICAgICAgICAgIHN0cmluZ1JldHVybiA9IGBbaW1nXSR7YWRkU3RyfVsvaW1nXWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocGF0dGVybiA9PT0gJ3BsYWluJyl7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmdSZXR1cm4gPSAgZGVjb2RlVVJJKGFkZFN0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocGF0dGVybiA9PT0gJ2ltYWdlTGluaycpe1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nUmV0dXJuID0gIGFkZFN0cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nUmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBjcmVhdGVNZW51ID0ge1xyXG4gICAgICAgIGRlZmF1bHRJRDogJ2Vtb3Rpb24wMDAwJyxcclxuICAgICAgICBtYWluOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAvKm1haW4gbWVudSovXHJcbiAgICAgICAgICAgIGxldCBtYWluTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICAgICAgbWFpbk1lbnUuaW5uZXJIVE1MID0gYDxzcGFuIGlkPSdsYXJnZVZpZXcnPjwvc3Bhbj48c3BhbiBjbGFzcz0nc3ViTWVudScgdGl0bGU9J+S4u+iPnOWNlSB2ZXJzaW9uICR7dmVyc2lvbk5vfSc+PGI+4pGo5Zun4pGoPC9iPjwvc3Bhbj5gO1xyXG4gICAgICAgICAgICBtYWluTWVudS5pZCA9IGNyZWF0ZU1lbnUuZGVmYXVsdElEO1xyXG4gICAgICAgICAgICBsZXQgTWVudUxlbmd0aCA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8TWVudUxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgTWVudUtleSA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KVtpXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IE1lbnVUaXRsZSA9IE1lbnVMaXN0W01lbnVLZXldLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgTWVudVR5cGUgPSBNZW51TGlzdFtNZW51S2V5XS5kYXRhdHlwZTtcclxuICAgICAgICAgICAgICAgIGlmKCFNZW51VHlwZSB8fCAhTWVudVRpdGxlKSBjb25zb2xlLmxvZygnZGF0YWVycm9yICAnK01lbnVLZXkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVzdE1lbnUgPSBjcmVhdGVNZW51LnN1YnMoTWVudVRpdGxlLGV4cGFuZE1lbnUuaW5pdCxNZW51S2V5LCBNZW51VHlwZSk7XHJcbiAgICAgICAgICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZCh0ZXN0TWVudSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLypjbG9zZSBidXR0b24qL1xyXG4gICAgICAgICAgICBsZXQgY2xvc2VCdG4gPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnW3hdJztcclxuICAgICAgICAgICAgY2xvc2VCdG4uY2xhc3NOYW1lPSAnc3ViTWVudSc7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmlkID0gJ2Nsb3NlRU0nO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5vbmNsaWNrID0gY3JlYXRlTWVudS5jbGVhcjtcclxuICAgICAgICAgICAgY2xvc2VCdG4uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcic7XHJcbiAgICAgICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgLypkcm9wZG93biBib3gqL1xyXG4gICAgICAgICAgICBsZXQgaXRlbVdpbmRvdyA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICAgICAgaXRlbVdpbmRvdy5pZCA9ICd0b2dnbGVXaW5kb3cnO1xyXG4gICAgICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpdGVtV2luZG93KTtcclxuICAgICAgICAgICAgLypjc3Mgc3R5bGUqL1xyXG4gICAgICAgICAgICBsZXQgc3R5bGVJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIHN0eWxlSXRlbS5pbm5lckhUTUwgPSBgI2Vtb3Rpb24wMDAwIHtwYWRkaW5nOjVweCA1cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZid9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3e3Bvc2l0aW9uOmFic29sdXRlOyBiYWNrZ3JvdW5kOiAjZmZmO3otaW5kZXg6NTAwMDsgb3BhY2l0eTogMC44fSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlldyBpbWd7d2lkdGg6IDIwMHB4OyBoZWlnaHQ6MjAwcHg7fSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyBhe3BhZGRpbmc6IDVweCA1cHg7bGluZS1oZWlnaHQ6Mn0gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cge2hlaWdodDogMTAwcHg7IHBhZGRpbmc6IDNweCAzcHg7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbi10b3A6NnB4OyBcXFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7IGJvcmRlcjoxcHggc29saWQgI2ZmNDM1MTsgZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlOyB6LWluZGV4OjIwMDsgfVxcXHJcbiAgICAgICAgICAgICAgICAuY2xpY2tJdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrOyB6LWluZGV4OjMwMDt9XHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLkVtc3tjdXJzb3I6cG9pbnRlcjt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7ICB6LWluZGV4OjQwMDt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dDpob3Zlcntjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb257dGV4dC1kZWNvcmF0aW9uOm5vbmU7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9uOmhvdmVye2JhY2tncm91bmQ6I2ZmNzY4MDsgY29sb3I6I2ZmZjsgfSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXI7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOiA4cHggOHB4OyBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8xNnB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcXFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDM1MTtib3JkZXItY29sb3I6ICNmZjQzNTE7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnU6aG92ZXIsIC5zdWJNZW51OmZvY3VzLCAuc3ViTWVudTp2aXNpdGVke2JhY2tncm91bmQtY29sb3I6ICNmZjc2ODA7Ym9yZGVyLWNvbG9yOiAjZmY3NjgwO2NvbG9yOiAjZmZmO31gO1xyXG4gICAgICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChzdHlsZUl0ZW0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbWFpbk1lbnU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJzOiBmdW5jdGlvbih0aXRsZSxmdW5jLHN1YmlkLHN1YnR5cGUpe1xyXG4gICAgICAgICAgICBsZXQgc3ViTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuaWQgPSBzdWJpZDtcclxuICAgICAgICAgICAgc3ViTWVudS5jbGFzc05hbWU9ICdzdWJNZW51JztcclxuICAgICAgICAgICAgbGV0IHN1YmNvbnRlbnQgPSBgPGEgY2xhc3M9J3N1YkJ1dCcgZGF0YS1raWQ9JHtzdWJpZH0gZGF0ZS10eXBlPSR7c3VidHlwZX0+JHt0aXRsZX08L2E+YDtcclxuICAgICAgICAgICAgc3ViTWVudS5vbmNsaWNrID0gZnVuYztcclxuICAgICAgICAgICAgc3ViTWVudS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICBzdWJNZW51LmlubmVySFRNTCA9IHN1YmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWJNZW51O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZVdpbmRvdyA9IEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpO1xyXG4gICAgICAgICAgICB0b2dnbGVXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgY29uc3QgdG9nV2luQ2hpbGRyZW4gPSB0b2dnbGVXaW5kb3cuY2hpbGROb2RlcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaj0wLCBsZW4gPSB0b2dXaW5DaGlsZHJlbi5sZW5ndGggO2o8bGVuO2orKyl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRvZ1dpbkNoaWxkcmVuW2pdKTtcclxuICAgICAgICAgICAgICAgIHRvZ1dpbkNoaWxkcmVuW2pdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAvL2xldCB0ZXN0YXJlYUVsZVNldCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRTZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKTtcclxuICAgICAgICBsZXQgZWxlbWVudFNldExlbmd0aCA9IGVsZW1lbnRTZXQubGVuZ3RoO1xyXG4gICAgICAgIGlmKGVsZW1lbnRTZXRMZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHRleHRhcmVhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGVzdGFyZWFFbGVTZXQuYWRkKGVsZW1lbnRTZXQpO1xyXG4gICAgICAgIGxldCB1c2VyT3B0aW9uID0ge1xyXG4gICAgICAgICAgICB1c2VyV2luZG93SGVpZ2h0OiAxMjAsXHJcbiAgICAgICAgICAgIHVzZXJTZWxlY3RUZXh0QXJlYTogJ2xhc3QnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG1haW5FbW90aW9uTWVudSA9IGNyZWF0ZU1lbnUubWFpbigpO1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnRTaW5nbGUgb2YgZWxlbWVudFNldCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgICAgICAgICBlbGVtZW50U2luZ2xlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1haW5FbW90aW9uTWVudSwgZWxlbWVudFNpbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5jb25zdCBpbWFnZXBhdGggPSAnMTQ4NTQxMjgxMCc7XHJcbmZ1biAoaW1hZ2VwYXRoKTtcclxuIl19
