// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     4.4.2
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
/* eslint linebreak-style: ["error", "windows"] */

/* eslint-disable strict */

'use strict';

var fun = function fun() {
  var imagepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1485412810';

  var versionNo = '4.4.2';
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

    var addrTemp = '';
    var addrNumber = 0;
    for (var j = startNumber; j < lengthArray; j += 1) {
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
  emAddrArrayHandler(1, 14, 'http://smile.nekohand.moe/blogAcc/Bilibili/xds/', '.png', biliEM);
  emAddrArrayHandler(0, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/bilibiliTV (', ').png', biliEM);
  // tora酱
  emAddrArrayHandler(1, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/tora/0', '.jpg', biliEM, true);
  // 阿卡林 from 摇曳百合
  var AkariSmile = emAddrArrayHandler(1, 21, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Dynamic/akari', '.gif');
  emAddrArrayHandler(1, 72, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/akari/akari', '.png', AkariSmile);
  // New Game
  var NewGame = emAddrArrayHandler(2, 64, 'http://nekohand.moe/spsmile/01Sora/0xx', '.png');
  // ACFUN
  var ACSmile4 = emAddrArrayHandler(1, 51, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/New/', '.png');
  emAddrArrayHandler(1, 40, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/Niming/', '.gif', ACSmile4, true);
  // KF 内置
  var KFSmileURL = emAddrArrayHandler(1, 49, (typeof imagepath !== 'undefined' ? imagepath : '') + '/post/smile/em/em', '.gif', [], true);
  var KFSmileCode = emAddrArrayHandler(10, 58, '[s:', ']');
  // lovelive专用小
  var LoveliveSmalltargetURL = emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Small/Lovelive2nd', '.png');
  emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Small/Lovelive', '.png', LoveliveSmalltargetURL);
  // kf快捷代码(需要改写解构赋值)
  var functionDescription = ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体', '下划线', '斜体', '水平线', '背景色', '插入图片'];
  var defaultFunction = ['[sell=100][/sell]', '[quote][/quote]', '[hide=100][/hide]', '[code][/code]', '[strike][/strike]', '[fly][/fly]', '[color=#00FF00][/color]', '[b][/b]', '[u][/u]', '[i][/i]', '[hr]', '[backcolor=][/backcolor]', '[img][/img]'];
  // 颜文字
  var emoji = ['(●・ 8 ・●)', '╰(๑◕ ▽ ◕๑)╯', '(ゝω・)', '〜♪♪', '(ﾟДﾟ≡ﾟДﾟ)', '(＾o＾)ﾉ', '(|||ﾟДﾟ)', '(`ε´ )', '(╬ﾟдﾟ)', '(|||ﾟдﾟ)', '(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)', '╮(￣▽￣)╭', '( ´_ゝ｀)', 'のヮの', '(ﾉ؂< ๑）诶嘿☆～', '(&lt;_&lt;)', '(&gt;_&gt;)', '(;¬_¬)', '(▔□▔)/', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', 'Σ( ￣□￣||)', '(´；ω；`)', '（/TДT)/', '(^・ω・^ )', '(｡･ω･｡)', '(●￣(ｴ)￣●)', 'ε=ε=(ノ≧∇≦)ノ', '(´･_･`)', '(-_-#)', '（￣へ￣）', '(￣ε(#￣) Σ', 'ヽ(`Д´)ﾉ', '(╯°口°)╯(┴—┴', '（#-_-)┯━┯', '_(:3」∠)_', '(笑)', '(汗)', '(泣)', '(苦笑)', '(´・ω・`)', '(╯°□°）╯︵ ┻━┻', '(╯‵□′)╯︵┻━┻', '( ´ρ`)', '( ﾟωﾟ)', '(oﾟωﾟo)', '(　^ω^)', '(｡◕∀◕｡)', '/( ◕‿‿◕ )\\', 'ε٩( º∀º )۶з', '(￣ε(#￣)☆╰╮(￣▽￣///)', '（●´3｀）~♪', '_(:з」∠)_', 'хорошо!', '＼(^o^)／', '(•̅灬•̅ )', '(ﾟДﾟ)', 'まったく、小学生は最高だぜ！！', 'ε=ε=ε=┏(゜ロ゜;)┛', '(；°ほ°)', '⎝≧⏝⏝≦⎠', 'ヽ(✿ﾟ▽ﾟ)ノ', '焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！', '|•ω•`)'];

  var MenuList = {
    item4: { datatype: 'imageLink', title: '固有', addr: KFSmileURL, ref: KFSmileCode },
    item1: { datatype: 'plain', title: '快捷', addr: defaultFunction, ref: functionDescription },
    item2: { datatype: 'plain', title: '颜文字', addr: emoji },
    item5: { datatype: 'image', title: 'ACFUN', addr: ACSmile4 },
    item6: { datatype: 'image', title: '常用', addr: NewGame }, //
    item7: { datatype: 'image', title: 'Akari', addr: AkariSmile }, // Akari
    item8: { datatype: 'image', title: 'BiliBili', addr: biliEM }, // B站
    item3: { datatype: 'image', title: 'LoveLive', addr: LoveliveSmalltargetURL }
  };
  /* eslint-disable no-param-reassign*/
  /* Event 函数 */
  var EventUtil = {
    getEvent: function getEvent(event) {
      return event || window.event;
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
        element.addEventListener(type, handler, false); // DOM2
      } else if (element.attachEvent) {
        element.attachEvent('on' + type, handler); // IE
      } else {
        element['on' + type] = handler; // DOM 0
      }
    },
    removeHandler: function removeHandler(element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false); // DOM2
      } else if (element.detachEvent) {
        element.detachEvent('on' + type, handler); // IE
      } else {
        element['on' + type] = null; // DOM 0
      }
    }
  };
  /* eslint-enable no-param-reassign*/
  /* Element 函数*/
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
  /* 模块*/
  var mouseOverAction = {
    showImg: function showImg(event) {
      var eventTarget = EventUtil.getTarget(event);
      /* if (!eventTarget.src) {
        return 'undefined';
      }*/
      var largeViewContainer = EleUtil.selectID('largeView');
      var _ref = [document.body.scrollTop, document.body.scrollLeft],
          scrollTopValue = _ref[0],
          scrollLeftValue = _ref[1];

      largeViewContainer.innerHTML = '<img src=' + eventTarget.src + ' />';
      largeViewContainer.style.display = 'block';
      largeViewContainer.style.top = event.clientY + scrollTopValue + 20 + 'px';
      largeViewContainer.style.left = event.clientX + scrollLeftValue + 'px';
      // console.log([event.clientY,event.clientX]);
      // console.log([EleUtil.selectID('largeView').style.top,
      // EleUtil.selectID('largeView').style.left]);
      // console.log([document.body.scrollTop,document.body.scrollLeft]);
    },
    clearImg: function clearImg() {
      EleUtil.selectID('largeView').style.display = 'none';
    }
  };
  var attachAction = {
    attachEmotion: function attachEmotion(event) {
      var eventTarget = EventUtil.getTarget(event);
      // console.log(eventTarget);

      var addressTarget = '';
      var emotionAddress = '';
      if (eventTarget.getAttribute('data-link') === null) {
        if (eventTarget.src) {
          addressTarget = eventTarget.src;
          emotionAddress = attachAction.addressParse(addressTarget, 'image');
        } else {
          // console.log(eventTarget.attributes);
          addressTarget = eventTarget.getAttribute('data-sign');
          emotionAddress = attachAction.addressParse(addressTarget, 'plain');
        }
      } else {
        // console.log(eventTarget.attributes);
        addressTarget = eventTarget.getAttribute('data-link');
        emotionAddress = attachAction.addressParse(addressTarget, 'plain');
      }
      var selectTextArea = EleUtil.select('textarea');
      var ovalue = selectTextArea.value;
      var startPos = selectTextArea.selectionStart;
      // const endPos = selectTextArea.selectionEnd;
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
      // console.log(MenuList[key]);
      var imgList = MenuList[key].addr;
      var imgLength = imgList.length;
      for (var k = 0; k < imgLength; k += 1) {
        var divElement = EleUtil.create('div');
        divElement.className = 'clickItem';
        var imgItem = EleUtil.create('img');
        imgItem.src = imgList[k];
        imgItem.className = 'Ems';
        imgItem.onclick = attachAction.attachEmotion;
        imgItem.onmouseover = mouseOverAction.showImg;
        imgItem.onmouseout = mouseOverAction.clearImg;

        divElement.appendChild(imgItem);
        outerContainer.appendChild(divElement);
      }
    },
    createPlainText: function createPlainText(key) {
      var outerContainer = createItems.createContainer(key);
      var txtList = MenuList[key].addr;
      var txtLength = txtList.length;
      for (var k = 0; k < txtLength; k += 1) {
        var txtItem = EleUtil.create('span');
        txtItem.style.cssText = 'cursor:pointer; margin: 10px 10px;';
        txtItem.innerHTML = '<a data-sign=' + encodeURI(txtList[k]) + ' class=\'txtBtnEmotion\'>' + txtList[k] + '</a>';
        if (MenuList[key].ref) {
          txtItem.innerHTML = '<a data-sign=' + encodeURI(txtList[k]) + ' class=\'txtBtnEmotion\'>' + MenuList[key].ref[k] + '</a>';
          EleUtil.selectID('toggleWindow').style.height = '50px';
        }
        txtItem.onclick = attachAction.attachEmotion;
        txtItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 50px;';
        outerContainer.appendChild(txtItem);
      }
    },
    createImageLink: function createImageLink(key) {
      var outerContainer = createItems.createContainer(key);
      var imgList = MenuList[key].addr;
      var refList = MenuList[key].ref;
      var imgLength = imgList.length;
      for (var k = 0; k < imgLength; k += 1) {
        var imgItem = EleUtil.create('img');
        imgItem.dataset.link = refList[k];
        imgItem.src = imgList[k];
        imgItem.className = 'Ems';
        imgItem.onclick = attachAction.attachEmotion;
        imgItem.style.cssText = 'width: 50px !important;height: 50px !important;';
        outerContainer.appendChild(imgItem);
      }
    }
  };
  var clearMenu = {
    clear: function clear() {
      var toggleWindow = EleUtil.selectID('toggleWindow');
      toggleWindow.style.display = 'none';
      var togWinChildren = toggleWindow.childNodes;
      for (var j = 0, len = togWinChildren.length; j < len; j += 1) {
        // console.log(togWinChildren[j]);
        togWinChildren[j].style.display = 'none';
      }
    }
  };
  var expandMenu = {
    init: function init(event) {
      clearMenu.clear();
      var eventTarget = EventUtil.getTarget(event);
      EleUtil.selectID('toggleWindow').style.display = 'block';
      EleUtil.selectID('toggleWindow').style.width = EleUtil.select('textarea').style.width;
      var dataType = eventTarget.getAttribute('data-retype');
      var dataKey = eventTarget.getAttribute('data-kid');
      if (EleUtil.select('#eddie32' + dataKey)) {
        EleUtil.select('#eddie32' + dataKey).style.display = 'block';
        if (dataKey === 'item1') EleUtil.selectID('toggleWindow').style.height = '50px';else EleUtil.selectID('toggleWindow').style.height = '100px';
        return;
      }
      if (dataType === 'plain') {
        createItems.createPlainText(dataKey);
      } else if (dataType === 'image') {
        createItems.createImages(dataKey);
      } else if (dataType === 'imageLink') {
        createItems.createImageLink(dataKey);
      }
    }
  };

  var createMenu = {
    defaultID: 'emotion0000',
    main: function main() {
      /* main menu*/
      var mainMenu = EleUtil.create('div');
      mainMenu.innerHTML = '<span id=\'largeView\'></span><span class=\'subMenu\' title=\'\u4E3B\u83DC\u5355 version ' + versionNo + '\'><b>\u2468\u56E7\u2468</b></span>';
      mainMenu.id = createMenu.defaultID;
      var MenuLength = Object.keys(MenuList).length;
      for (var i = 0; i < MenuLength; i += 1) {
        var MenuKey = Object.keys(MenuList)[i];
        var MenuTitle = MenuList[MenuKey].title;
        var MenuType = MenuList[MenuKey].datatype;
        // if (!MenuType || !MenuTitle) console.log(`dataerror  ${MenuKey}`);
        var testMenu = createMenu.subs(MenuTitle, expandMenu.init, MenuKey, MenuType);
        mainMenu.appendChild(testMenu);
      }
      /* close button*/
      var closeBtn = EleUtil.create('span');
      closeBtn.innerHTML = '[x]';
      closeBtn.className = 'subMenu';
      closeBtn.id = 'closeEM';
      closeBtn.onclick = clearMenu.clear;
      closeBtn.style.cssText = 'cursor:pointer';
      mainMenu.appendChild(closeBtn);
      /* dropdown box*/
      var itemWindow = EleUtil.create('div');
      itemWindow.id = 'toggleWindow';
      mainMenu.appendChild(itemWindow);
      /* css style*/
      var styleItem = EleUtil.create('style');
      styleItem.innerHTML = '#emotion0000 {padding:5px 5px; vertical-align: middle;                   font: 12px/16px \'Hiragino Sans GB\',\'Microsoft YaHei\',\'Arial\',\'sans-serif\'}                 #largeView{position:absolute; background: #fff;z-index:5000; opacity: 0.8}                 #largeView img{width: 200px; height:200px;}                 #toggleWindow a{padding: 5px 5px;line-height:2}                 #toggleWindow {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:6px;                 margin-bottom:6px; border:1px solid #ff4351; display:none;position:relative; z-index:200; }                .clickItem{display:inline-block; z-index:300;}\n                a.subBut{text-decoration: none;color: #fff;}                 .Ems{cursor:pointer;width: 50px;height: 50px;display:inline-block;  z-index:400;}                 a.subBut:hover{color: #fff;}                 a.txtBtnEmotion{text-decoration:none;}                 a.txtBtnEmotion:hover{background:#ff7680; color:#fff; }                 .subMenu{display:inline-block;cursor:pointer; text-align:center; padding: 8px 8px;                 font: 12px/16px \'Hiragino Sans GB\',\'Microsoft YaHei\',\'Arial\',\'sans-serif\';                background-color: #ff4351;border-color: #ff4351;color: #fff;}                 .subMenu:hover, .subMenu:focus, .subMenu:visited{background-color: #ff7680;border-color: #ff7680;color: #fff;}';
      mainMenu.appendChild(styleItem);
      return mainMenu;
    },
    subs: function subs(title, func, subid, subtype) {
      var subMenu = EleUtil.create('span');
      subMenu.id = subid;
      subMenu.className = 'subMenu';
      subMenu.setAttribute('data-kid', subid);
      subMenu.setAttribute('data-retype', subtype);
      var subcontent = '<a class=\'subBut\' data-kid=' + subid + ' date-retype=' + subtype + '>' + title + '</a>';
      subMenu.onclick = func;
      subMenu.title = title;
      subMenu.innerHTML = subcontent;
      return subMenu;
    }
  };

  if (typeof window !== 'undefined' && document != null) {
    // let testareaEleSet = new WeakSet();
    var testSet = document.getElementsByTagName('textarea');
    // console.log(testSet);
    // console.log(testSet.item(0));
    var mainEmotionMenu = createMenu.main();
    if (document.getElementById('editor-content') !== null) {
      document.getElementById('editor-content').style.position = 'static';
    }
    for (var w = 0; w < testSet.length; w += 1) {
      // console.log(testSet.item(w));
      var elementTest = testSet.item(w);
      // console.log(mainEmotionMenu);
      elementTest.parentNode.insertBefore(mainEmotionMenu, elementTest);
    }
    // NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    // HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    // const elementSet = Array.from(document.getElementsByTagName('textarea'));
    /* 兼容性问题 By 喵拉布丁2017.01.30: document.getElementsByTagName方法返回的是HTMLCollection
    在较新版的Firefox中，HTMLCollection支持Iterator接口，所以可以用for...of循环
    而在Chrome中（我只在使用Chromium 50内核的浏览器下测试过），HTMLCollection不支持Iterator接口，不可用直接使用for...of循环
    所以建议楼主还是用老方法吧*/
    // Solution stackflow: http://stackoverflow.com/questions/22754315/foreach-loop-for-htmlcollection-elements
    /* 还有Array.from方法确实能解决Chrome下HTMLCollection不能用for...of循环的问题，不过Chrome 45才开始支持Array.from方法
    若想兼容以前的浏览器的话，可以用for...in循环，或者加个babel-polyfill脚本
    当然你不想兼容使用Chromium 45以前内核的浏览器也没多大问题，现在国内市场份额最多Chromium套壳浏览器--360安全浏览器的最新正式版也是采用Chromium 45内核了*/
    // const elementSetLength = elementSet.length;
    /* if (elementSetLength === 0) {
       console.log('There is no textarea');
    } */
    // testareaEleSet.add(elementSet);
    /* const userOption = {
      userWindowHeight: 120,
      userSelectTextArea: 'last',
    }; */

    /* eslint no-restricted-syntax: [1, "ForOfStatement"] */
    /* for (const elementSingle of elementSet) {
             console.log(elementSingle);
      elementSingle.parentNode.insertBefore(mainEmotionMenu, elementSingle);
    } */
  }
};

if (typeof imgpath === 'undefined') {
  var _imgpath = '1485412810';
}
fun(imgpath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOztBQUVBOztBQUdBLElBQU0sTUFBTSxTQUFOLEdBQU0sR0FBOEI7QUFBQSxNQUE3QixTQUE2Qix1RUFBakIsWUFBaUI7O0FBQ3hDLE1BQU0sWUFBWSxPQUFsQjtBQUNFOzs7Ozs7OztBQVFBO0FBQ0YsV0FBUyxrQkFBVCxDQUE0QixXQUE1QixFQUF5QyxXQUF6QyxFQUFzRCxTQUF0RCxFQUNFLFNBREYsRUFDa0Q7QUFBQSxRQUFyQyxTQUFxQyx1RUFBekIsRUFBeUI7QUFBQSxRQUFyQixXQUFxQix1RUFBUCxLQUFPOztBQUNoRCxRQUFJLFdBQVcsRUFBZjtBQUNBLFFBQUksYUFBYSxDQUFqQjtBQUNBLFNBQUssSUFBSSxJQUFJLFdBQWIsRUFBMEIsSUFBSSxXQUE5QixFQUEyQyxLQUFLLENBQWhELEVBQW1EO0FBQ2pELG1CQUFhLENBQWI7QUFDQSxVQUFJLFdBQUosRUFBaUI7QUFDZixxQkFBYyxJQUFJLENBQUwsR0FBVyxDQUFYLFNBQXFCLENBQWxDO0FBQ0Q7QUFDRCxzQkFBYyxTQUFkLEdBQTBCLFVBQTFCLEdBQXVDLFNBQXZDO0FBQ0EsZ0JBQVUsSUFBVixDQUFlLFFBQWY7QUFDRDtBQUNELFdBQU8sU0FBUDtBQUNEO0FBQ0M7O0FBR0E7QUFDRixNQUFNLFNBQVMsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLDJFQUExQixFQUNtQixPQURuQixDQUFmO0FBRUEscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLGlEQUExQixFQUE2RSxNQUE3RSxFQUFxRixNQUFyRjtBQUNBLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQixpRkFBMUIsRUFDcUIsT0FEckIsRUFDOEIsTUFEOUI7QUFFRTtBQUNGLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQixrRUFBMUIs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QixhQUFyQixFQUFvQyxPQUFwQztBQUNBLFVBQU0sK0NBQTJDLEtBQTNDLHFCQUFnRSxPQUFoRSxTQUEyRSxLQUEzRSxTQUFOO0FBQ0EsY0FBUSxPQUFSLEdBQWtCLElBQWxCO0FBQ0EsY0FBUSxLQUFSLEdBQWdCLEtBQWhCO0FBQ0EsY0FBUSxTQUFSLEdBQW9CLFVBQXBCO0FBQ0EsYUFBTyxPQUFQO0FBQ0Q7QUE3RGdCLEdBQW5COztBQWlFQSxNQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxZQUFZLElBQWpELEVBQXVEO0FBQ3JEO0FBQ0EsUUFBTSxVQUFVLFNBQVMsb0JBQVQsQ0FBOEIsVUFBOUIsQ0FBaEI7QUFDQTtBQUNBO0FBQ0EsUUFBTSxrQkFBa0IsV0FBVyxJQUFYLEVBQXhCO0FBQ0EsUUFBSSxTQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLE1BQThDLElBQWxELEVBQXdEO0FBQ3RELGVBQVMsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEMsS0FBMUMsQ0FBZ0QsUUFBaEQsR0FBMkQsUUFBM0Q7QUFDRDtBQUNELFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxRQUFRLE1BQTVCLEVBQW9DLEtBQUssQ0FBekMsRUFBNEM7QUFDMUM7QUFDQSxVQUFNLGNBQWMsUUFBUSxJQUFSLENBQWEsQ0FBYixDQUFwQjtBQUNBO0FBQ0Esa0JBQVksVUFBWixDQUF1QixZQUF2QixDQUFvQyxlQUFwQyxFQUFxRCxXQUFyRDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0k7Ozs7QUFJQTtBQUNBOzs7QUFHSjtBQUNBOzs7QUFHQTtBQUNBOzs7OztBQUtBO0FBQ0E7Ozs7QUFJRDtBQUNGLENBcFpEOztBQXNaQSxJQUFHLE9BQU8sT0FBUCxLQUFtQixXQUF0QixFQUFtQztBQUMvQixNQUFJLFdBQVUsWUFBZDtBQUNIO0FBQ0QsSUFBSSxPQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGVzbGludCBsaW5lYnJlYWstc3R5bGU6IFtcImVycm9yXCIsIFwid2luZG93c1wiXSAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgc3RyaWN0ICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5cclxuY29uc3QgZnVuID0gKGltYWdlcGF0aCA9ICcxNDg1NDEyODEwJykgPT4ge1xyXG4gIGNvbnN0IHZlcnNpb25ObyA9ICc0LjIuMic7XHJcbiAgICAvKiBBZGRyZXNzIGZ1bmN0aW9uXHJcbiAgICAgKiBzdGFydE51bWJlcjogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBzdGFydCBudW1iZXI7XHJcbiAgICAgKiBsZW5ndGhBcnJheTogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBhZGRyQXJyYXkgbGVuZ3RoO1xyXG4gICAgICogc3RyUHJlZml4OiBzdHJpbmcsIGFkZHJlc3MgUHJlZml4O1xyXG4gICAgICogc3RyU3VmZml4OiBzdHJpbmcsIGFkZHJlc3MgU3VmZml4O1xyXG4gICAgICogbGVhZGluZ1plcm86IGJvb2xlbiwgdHJ1ZSBmb3IgbGVhZGluZyB6ZXJvIGluIG51bWJlcjtcclxuICAgICAqIGFkZHJBcnJheTogYXJyYXksIGFkZHJlc3MgYXJyYXksIGRlZmF1bHQgZm9yIGVtcHR5O1xyXG4gICAgICovXHJcbiAgICAvLyDliJvlu7rooajmg4XljIXmlbDnu4TnmoTlh73mlbBcclxuICBmdW5jdGlvbiBlbUFkZHJBcnJheUhhbmRsZXIoc3RhcnROdW1iZXIsIGxlbmd0aEFycmF5LCBzdHJQcmVmaXgsXHJcbiAgICBzdHJTdWZmaXgsIGFkZHJBcnJheSA9IFtdLCBsZWFkaW5nWmVybyA9IGZhbHNlKSB7XHJcbiAgICBsZXQgYWRkclRlbXAgPSAnJztcclxuICAgIGxldCBhZGRyTnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGogPSBzdGFydE51bWJlcjsgaiA8IGxlbmd0aEFycmF5OyBqICs9IDEpIHtcclxuICAgICAgYWRkck51bWJlciA9IGo7XHJcbiAgICAgIGlmIChsZWFkaW5nWmVybykge1xyXG4gICAgICAgIGFkZHJOdW1iZXIgPSAoaiA+IDkpID8gKGopIDogKGAwJHtqfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZHJUZW1wID0gYCR7c3RyUHJlZml4fSR7YWRkck51bWJlcn0ke3N0clN1ZmZpeH1gO1xyXG4gICAgICBhZGRyQXJyYXkucHVzaChhZGRyVGVtcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRkckFycmF5O1xyXG4gIH1cclxuICAgIC8qIOihqOaDheWMheWcsOWdgOaVsOaNriAqL1xyXG5cclxuXHJcbiAgICAvLyBC56uZXHJcbiAgY29uc3QgYmlsaUVNID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE3LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0JpbGlCaWxpLzIyMzMgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcpLmdpZicpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCAxNCwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9CaWxpYmlsaS94ZHMvJywgJy5wbmcnLCBiaWxpRU0pO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigwLCAxNCwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9CaWxpQmlsaS9iaWxpYmlsaVRWICgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcpLnBuZycsIGJpbGlFTSk7XHJcbiAgICAvLyB0b3Jh6YWxXHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL3RvcmEvMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5qcGcnLCBiaWxpRU0sIHRydWUpO1xyXG4gICAgLy8g6Zi/5Y2h5p6XIGZyb20g5pGH5puz55m+5ZCIXHJcbiAgY29uc3QgQWthcmlTbWlsZSA9IGVtQWRkckFycmF5SGFuZGxlcigxLCAyMSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9EeW5hbWljL2FrYXJpJywgJy5naWYnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNzIsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvYWthcmkvYWthcmknLCAnLnBuZycsIEFrYXJpU21pbGUpO1xyXG4gICAgLy8gTmV3IEdhbWVcclxuICBjb25zdCBOZXdHYW1lID0gZW1BZGRyQXJyYXlIYW5kbGVyKDIsIDY0LCAnaHR0cDovL25la29oYW5kLm1vZS9zcHNtaWxlLzAxU29yYS8weHgnLCAnLnBuZycpO1xyXG4gICAgLy8gQUNGVU5cclxuICBjb25zdCBBQ1NtaWxlNCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA1MSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9BQ0ZVTi9OZXcvJywgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDAsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQUNGVU4vTmltaW5nLycsICcuZ2lmJywgQUNTbWlsZTQsIHRydWUpO1xyXG4gICAgLy8gS0Yg5YaF572uXHJcbiAgY29uc3QgS0ZTbWlsZVVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA0OSwgYCR7dHlwZW9mIGltYWdlcGF0aCAhPT0gJ3VuZGVmaW5lZCcgPyBpbWFnZXBhdGggOiAnJ30vcG9zdC9zbWlsZS9lbS9lbWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmdpZicsIFtdLCB0cnVlKTtcclxuICBjb25zdCBLRlNtaWxlQ29kZSA9IGVtQWRkckFycmF5SGFuZGxlcigxMCwgNTgsICdbczonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICddJyk7XHJcbiAgICAvLyBsb3ZlbGl2ZeS4k+eUqOWwj1xyXG4gIGNvbnN0IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDEsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDIvU21hbGwvTG92ZWxpdmUybmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDEsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvU21hbGwvTG92ZWxpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcucG5nJywgTG92ZWxpdmVTbWFsbHRhcmdldFVSTCk7XHJcbiAgICAvLyBrZuW/q+aNt+S7o+eggSjpnIDopoHmlLnlhpnop6PmnoTotYvlgLwpXHJcbiAgY29uc3QgZnVuY3Rpb25EZXNjcmlwdGlvbiA9IFsn5Ye65ZSu6LS0c2VsbD3llK7ku7cnLCAn5byV55SoJywgJ+makOiXj2hpZGU956We56eY562J57qnJywgJ+aPkuWFpeS7o+eggScsICfliKDpmaTnur8nLCAn6LeR6ams54GvJywgJ+aWh+Wtl+minOiJsicsICfnspfkvZMnLFxyXG4gICAgJ+S4i+WIkue6vycsICfmlpzkvZMnLCAn5rC05bmz57q/JywgJ+iDjOaZr+iJsicsICfmj5LlhaXlm77niYcnXTtcclxuICBjb25zdCBkZWZhdWx0RnVuY3Rpb24gPSBbJ1tzZWxsPTEwMF1bL3NlbGxdJywgJ1txdW90ZV1bL3F1b3RlXScsICdbaGlkZT0xMDBdWy9oaWRlXScsICdbY29kZV1bL2NvZGVdJyxcclxuICAgICdbc3RyaWtlXVsvc3RyaWtlXScsICdbZmx5XVsvZmx5XScsICdbY29sb3I9IzAwRkYwMF1bL2NvbG9yXScsICdbYl1bL2JdJywgJ1t1XVsvdV0nLCAnW2ldWy9pXScsXHJcbiAgICAnW2hyXScsICdbYmFja2NvbG9yPV1bL2JhY2tjb2xvcl0nLCAnW2ltZ11bL2ltZ10nXTtcclxuICAgIC8vIOminOaWh+Wtl1xyXG4gIGNvbnN0IGVtb2ppID0gWyco4peP44O7IDgg44O74pePKScsXHJcbiAgICAn4pWwKOC5keKXlSDilr0g4peV4LmRKeKVrycsICco44Kdz4njg7spJywgJ+OAnOKZquKZqicsICco776f0JTvvp/iiaHvvp/QlO++nyknLCAnKO+8vm/vvL4p776JJywgJyh8fHzvvp/QlO++nyknLCAnKGDOtcK0ICknLCAnKOKVrO++n9C0776fKScsICcofHx8776f0LTvvp8pJywgJyjvv6PiiIfvv6MpJywgJyjvv6Mz77+jKScsICco77+j772w77+jKScsICco77+jIC4g77+jKScsICco77+j77i/77+jKScsICco77+j77i277+jKScsICcoKsK0z4lgKiknLCAnKOODu8+J44O7KScsICco4oyS4pa94oySKScsICco77+j4pa977+j77yJJywgJyg944O7z4njg7s9KScsICco772A44O7z4njg7vCtCknLCAnKOOAnO+/o+KWs++/oynjgJwnLCAnKO+9peKIgO+9pSknLFxyXG4gICAgJyjCsOKIgMKwKe++iScsICco77+jM++/oyknLCAn4pWuKO+/o+KWve+/oynila0nLCAnKCDCtF/jgp3vvYApJywgJ+OBruODruOBricsICco776J2II8IOC5ke+8ieivtuWYv+KYhu+9nicsICcoJmx0O18mbHQ7KScsICcoJmd0O18mZ3Q7KScsICcoO8KsX8KsKScsICco4paU4pah4paUKS8nLCAnKO++n9CU776f4omh776f0LTvvp8pIT8nLCAnzqMo776f0LTvvp87KScsICfOoygg77+j4pah77+jfHwpJyxcclxuICAgICcowrTvvJvPie+8m2ApJywgJ++8iC9U0JRUKS8nLCAnKF7jg7vPieODu14gKScsICco772h772lz4nvvaXvvaEpJywgJyjil4/vv6Mo7720Ke+/o+KXjyknLCAnzrU9zrU9KOODjuKJp+KIh+KJpinjg44nLCAnKMK0772lX++9pWApJywgJygtXy0jKScsICfvvIjvv6Pjgbjvv6PvvIknLCAnKO+/o861KCPvv6MpIM6jJywgJ+ODvShg0JTCtCnvvoknLCAnKOKVr8Kw5Y+jwrAp4pWvKOKUtOKAlOKUtCcsICfvvIgjLV8tKeKUr+KUgeKUrycsICdfKDoz44CN4oigKV8nLCAnKOeskSknLCAnKOaxlyknLCAnKOazoyknLCAnKOiLpueskSknLCAnKMK044O7z4njg7tgKScsICco4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLsnLCAnKOKVr+KAteKWoeKAsinila/vuLXilLvilIHilLsnLCAnKCDCtM+BYCknLCAnKCDvvp/Pie++nyknLCAnKG/vvp/Pie++n28pJywgJyjjgIBez4leKScsICco772h4peV4oiA4peV772hKScsICcvKCDil5XigL/igL/il5UgKVxcXFwnLCAnzrXZqSggwrriiIDCuiAp27bQtycsICco77+jzrUoI++/oynimIbilbDila4o77+j4pa977+jLy8vKScsXHJcbiAgICAn77yI4pePwrQz772A77yJfuKZqicsICdfKDrQt+OAjeKIoClfJywgJ9GF0L7RgNC+0YjQviEnLCAn77y8KF5vXinvvI8nLCAnKOKAosyF54Gs4oCizIUgKScsICco776f0JTvvp8pJywgJ+OBvuOBo+OBn+OBj+OAgeWwj+WtpueUn+OBr+acgOmrmOOBoOOBnO+8ge+8gScsICfOtT3OtT3OtT3ilI8o44Kc44Ot44KcOynilJsnLFxyXG4gICAgJyjvvJvCsOOBu8KwKScsICfijp3iiafij53ij53iiabijqAnLCAn44O9KOKcv+++n+KWve++nynjg44nLCAn54SU44Gr6Iie44GE5LiK44GM44KL44K544OR44O844Kv44KI44CB6YKq5oKq44Gq55Ww5oCn5Lqk6Zqb44Gr44CB5aSp572w44KS5LiO44GI77yBJywgJ3zigKLPieKAomApJ107XHJcblxyXG5cclxuICBjb25zdCBNZW51TGlzdCA9IHtcclxuICAgIGl0ZW00OiB7IGRhdGF0eXBlOiAnaW1hZ2VMaW5rJywgdGl0bGU6ICflm7rmnIknLCBhZGRyOiBLRlNtaWxlVVJMLCByZWY6IEtGU21pbGVDb2RlIH0sXHJcbiAgICBpdGVtMTogeyBkYXRhdHlwZTogJ3BsYWluJywgdGl0bGU6ICflv6vmjbcnLCBhZGRyOiBkZWZhdWx0RnVuY3Rpb24sIHJlZjogZnVuY3Rpb25EZXNjcmlwdGlvbiB9LFxyXG4gICAgaXRlbTI6IHsgZGF0YXR5cGU6ICdwbGFpbicsIHRpdGxlOiAn6aKc5paH5a2XJywgYWRkcjogZW1vamkgfSxcclxuICAgIGl0ZW01OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0FDRlVOJywgYWRkcjogQUNTbWlsZTQgfSxcclxuICAgIGl0ZW02OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ+W4uOeUqCcsIGFkZHI6IE5ld0dhbWUgfSwgIC8vXHJcbiAgICBpdGVtNzogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdBa2FyaScsIGFkZHI6IEFrYXJpU21pbGUgfSwgLy8gQWthcmlcclxuICAgIGl0ZW04OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0JpbGlCaWxpJywgYWRkcjogYmlsaUVNIH0sIC8vIELnq5lcclxuICAgIGl0ZW0zOiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0xvdmVMaXZlJywgYWRkcjogTG92ZWxpdmVTbWFsbHRhcmdldFVSTCB9LFxyXG4gIH07XHJcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24qL1xyXG4gICAgLyogRXZlbnQg5Ye95pWwICovXHJcbiAgY29uc3QgRXZlbnRVdGlsID0ge1xyXG4gICAgZ2V0RXZlbnQoZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcclxuICAgIH0sXHJcbiAgICBnZXRUYXJnZXQoZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIHByZXZlbnREZWZhdWx0KGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xyXG4gICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgIC8vIERPTTJcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChgb24ke3R5cGV9YCwgaGFuZGxlcik7ICAvLyBJRVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRbYG9uJHt0eXBlfWBdID0gaGFuZGxlcjsgIC8vIERPTSAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcclxuICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7IC8vIERPTTJcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudChgb24ke3R5cGV9YCwgaGFuZGxlcik7IC8vIElFXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFtgb24ke3R5cGV9YF0gPSBudWxsOyAvLyBET00gMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiovXHJcbiAgICAvKiBFbGVtZW50IOWHveaVsCovXHJcbiAgY29uc3QgRWxlVXRpbCA9IHtcclxuICAgIGNyZWF0ZShlbGUpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RJRChlbGUpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZSk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0KHNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIH0sXHJcbiAgfTtcclxuICAgIC8qIOaooeWdlyovXHJcbiAgY29uc3QgbW91c2VPdmVyQWN0aW9uID0ge1xyXG4gICAgc2hvd0ltZyhldmVudCkge1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAvKiBpZiAoIWV2ZW50VGFyZ2V0LnNyYykge1xyXG4gICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcclxuICAgICAgfSovXHJcbiAgICAgIGNvbnN0IGxhcmdlVmlld0NvbnRhaW5lciA9IEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpO1xyXG4gICAgICBjb25zdCBbc2Nyb2xsVG9wVmFsdWUsIHNjcm9sbExlZnRWYWx1ZV0gPSBbZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdF07XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtldmVudFRhcmdldC5zcmN9IC8+YDtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSArIHNjcm9sbFRvcFZhbHVlICsgMjB9cHhgO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFggKyBzY3JvbGxMZWZ0VmFsdWV9cHhgO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtldmVudC5jbGllbnRZLGV2ZW50LmNsaWVudFhdKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhbRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUudG9wLFxyXG4gICAgICAgICAgICAgIC8vIEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLmxlZnRdKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhbZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJJbWcoKSB7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgYXR0YWNoQWN0aW9uID0ge1xyXG4gICAgYXR0YWNoRW1vdGlvbihldmVudCkge1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgIGxldCBhZGRyZXNzVGFyZ2V0ID0gJyc7XHJcbiAgICAgIGxldCBlbW90aW9uQWRkcmVzcyA9ICcnO1xyXG4gICAgICBpZiAoZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChldmVudFRhcmdldC5zcmMpIHtcclxuICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5zcmM7XHJcbiAgICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ2ltYWdlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaWduJyk7XHJcbiAgICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ3BsYWluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKTtcclxuICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ3BsYWluJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0VGV4dEFyZWEgPSBFbGVVdGlsLnNlbGVjdCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3Qgb3ZhbHVlID0gc2VsZWN0VGV4dEFyZWEudmFsdWU7XHJcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgIC8vIGNvbnN0IGVuZFBvcyA9IHNlbGVjdFRleHRBcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgc2VsZWN0VGV4dEFyZWEudmFsdWUgPSBgJHtvdmFsdWUuc2xpY2UoMCwgc3RhcnRQb3MpfSR7ZW1vdGlvbkFkZHJlc3N9JHtvdmFsdWUuc2xpY2Uoc3RhcnRQb3MpfWA7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVtb3Rpb25BZGRyZXNzKTtcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzUGFyc2UoYWRkU3RyLCBwYXR0ZXJuKSB7XHJcbiAgICAgIGxldCBzdHJpbmdSZXR1cm4gPSAnJztcclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdpbWFnZScpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBgW2ltZ10ke2FkZFN0cn1bL2ltZ11gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAncGxhaW4nKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gZGVjb2RlVVJJKGFkZFN0cik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdpbWFnZUxpbmsnKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gYWRkU3RyO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdHJpbmdSZXR1cm47XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlSXRlbXMgPSB7XHJcbiAgICBjcmVhdGVDb250YWluZXIoa2V5KSB7XHJcbiAgICAgIGNvbnN0IEl0ZW1Db250YWluZXIgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIEl0ZW1Db250YWluZXIuaWQgPSBgZWRkaWUzMiR7a2V5fWA7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLmFwcGVuZENoaWxkKEl0ZW1Db250YWluZXIpO1xyXG4gICAgICByZXR1cm4gSXRlbUNvbnRhaW5lcjtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZXMoa2V5KSB7XHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE1lbnVMaXN0W2tleV0pO1xyXG4gICAgICBjb25zdCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCBpbWdMZW5ndGggPSBpbWdMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpbWdMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgPSAnY2xpY2tJdGVtJztcclxuICAgICAgICBjb25zdCBpbWdJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ2ltZycpO1xyXG4gICAgICAgIGltZ0l0ZW0uc3JjID0gaW1nTGlzdFtrXTtcclxuICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdFbXMnO1xyXG4gICAgICAgIGltZ0l0ZW0ub25jbGljayA9IGF0dGFjaEFjdGlvbi5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgIGltZ0l0ZW0ub25tb3VzZW92ZXIgPSBtb3VzZU92ZXJBY3Rpb24uc2hvd0ltZztcclxuICAgICAgICBpbWdJdGVtLm9ubW91c2VvdXQgPSBtb3VzZU92ZXJBY3Rpb24uY2xlYXJJbWc7XHJcblxyXG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2RWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVQbGFpblRleHQoa2V5KSB7XHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgIGNvbnN0IHR4dExpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IHR4dExlbmd0aCA9IHR4dExpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHR4dExlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdHh0SXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgICAgdHh0SXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyOyBtYXJnaW46IDEwcHggMTBweDsnO1xyXG4gICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYDxhIGRhdGEtc2lnbj0ke2VuY29kZVVSSSh0eHRMaXN0W2tdKX0gY2xhc3M9J3R4dEJ0bkVtb3Rpb24nPiR7dHh0TGlzdFtrXX08L2E+YDtcclxuICAgICAgICBpZiAoTWVudUxpc3Rba2V5XS5yZWYpIHtcclxuICAgICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYDxhIGRhdGEtc2lnbj0ke2VuY29kZVVSSSh0eHRMaXN0W2tdKX0gY2xhc3M9J3R4dEJ0bkVtb3Rpb24nPiR7TWVudUxpc3Rba2V5XS5yZWZba119PC9hPmA7XHJcbiAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR4dEl0ZW0ub25jbGljayA9IGF0dGFjaEFjdGlvbi5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgIHR4dEl0ZW0uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOiAxMHB4IDEwcHg6d2lkdGg6IDUwcHg7JztcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHRJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUltYWdlTGluayhrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgY29uc3QgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgcmVmTGlzdCA9IE1lbnVMaXN0W2tleV0ucmVmO1xyXG4gICAgICBjb25zdCBpbWdMZW5ndGggPSBpbWdMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpbWdMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgaW1nSXRlbS5kYXRhc2V0LmxpbmsgPSByZWZMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uc3JjID0gaW1nTGlzdFtrXTtcclxuICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdFbXMnO1xyXG4gICAgICAgIGltZ0l0ZW0ub25jbGljayA9IGF0dGFjaEFjdGlvbi5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgIGltZ0l0ZW0uc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogNTBweCAhaW1wb3J0YW50O2hlaWdodDogNTBweCAhaW1wb3J0YW50Oyc7XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBjbGVhck1lbnUgPSB7XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgY29uc3QgdG9nZ2xlV2luZG93ID0gRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jyk7XHJcbiAgICAgIHRvZ2dsZVdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBjb25zdCB0b2dXaW5DaGlsZHJlbiA9IHRvZ2dsZVdpbmRvdy5jaGlsZE5vZGVzO1xyXG4gICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gdG9nV2luQ2hpbGRyZW4ubGVuZ3RoOyBqIDwgbGVuOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZ1dpbkNoaWxkcmVuW2pdKTtcclxuICAgICAgICB0b2dXaW5DaGlsZHJlbltqXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgZXhwYW5kTWVudSA9IHtcclxuICAgIGluaXQoZXZlbnQpIHtcclxuICAgICAgY2xlYXJNZW51LmNsZWFyKCk7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS53aWR0aCA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpLnN0eWxlLndpZHRoO1xyXG4gICAgICBjb25zdCBkYXRhVHlwZSA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yZXR5cGUnKTtcclxuICAgICAgY29uc3QgZGF0YUtleSA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1raWQnKTtcclxuICAgICAgaWYgKEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKSkge1xyXG4gICAgICAgIEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBpZiAoZGF0YUtleSA9PT0gJ2l0ZW0xJykgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIGVsc2UgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGFUeXBlID09PSAncGxhaW4nKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlUGxhaW5UZXh0KGRhdGFLZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VzKGRhdGFLZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAnaW1hZ2VMaW5rJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlTGluayhkYXRhS2V5KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGNyZWF0ZU1lbnUgPSB7XHJcbiAgICBkZWZhdWx0SUQ6ICdlbW90aW9uMDAwMCcsXHJcbiAgICBtYWluKCkge1xyXG4gICAgICAgICAgICAvKiBtYWluIG1lbnUqL1xyXG4gICAgICBjb25zdCBtYWluTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgbWFpbk1lbnUuaW5uZXJIVE1MID0gYDxzcGFuIGlkPSdsYXJnZVZpZXcnPjwvc3Bhbj48c3BhbiBjbGFzcz0nc3ViTWVudScgdGl0bGU9J+S4u+iPnOWNlSB2ZXJzaW9uICR7dmVyc2lvbk5vfSc+PGI+4pGo5Zun4pGoPC9iPjwvc3Bhbj5gO1xyXG4gICAgICBtYWluTWVudS5pZCA9IGNyZWF0ZU1lbnUuZGVmYXVsdElEO1xyXG4gICAgICBjb25zdCBNZW51TGVuZ3RoID0gT2JqZWN0LmtleXMoTWVudUxpc3QpLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNZW51TGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBNZW51S2V5ID0gT2JqZWN0LmtleXMoTWVudUxpc3QpW2ldO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUaXRsZSA9IE1lbnVMaXN0W01lbnVLZXldLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUeXBlID0gTWVudUxpc3RbTWVudUtleV0uZGF0YXR5cGU7XHJcbiAgICAgICAgLy8gaWYgKCFNZW51VHlwZSB8fCAhTWVudVRpdGxlKSBjb25zb2xlLmxvZyhgZGF0YWVycm9yICAke01lbnVLZXl9YCk7XHJcbiAgICAgICAgY29uc3QgdGVzdE1lbnUgPSBjcmVhdGVNZW51LnN1YnMoTWVudVRpdGxlLCBleHBhbmRNZW51LmluaXQsIE1lbnVLZXksIE1lbnVUeXBlKTtcclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZCh0ZXN0TWVudSk7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgLyogY2xvc2UgYnV0dG9uKi9cclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnW3hdJztcclxuICAgICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ3N1Yk1lbnUnO1xyXG4gICAgICBjbG9zZUJ0bi5pZCA9ICdjbG9zZUVNJztcclxuICAgICAgY2xvc2VCdG4ub25jbGljayA9IGNsZWFyTWVudS5jbGVhcjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcic7XHJcbiAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgLyogZHJvcGRvd24gYm94Ki9cclxuICAgICAgY29uc3QgaXRlbVdpbmRvdyA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgaXRlbVdpbmRvdy5pZCA9ICd0b2dnbGVXaW5kb3cnO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpdGVtV2luZG93KTtcclxuICAgICAgICAgICAgLyogY3NzIHN0eWxlKi9cclxuICAgICAgY29uc3Qgc3R5bGVJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3N0eWxlJyk7XHJcbiAgICAgIHN0eWxlSXRlbS5pbm5lckhUTUwgPSBgI2Vtb3Rpb24wMDAwIHtwYWRkaW5nOjVweCA1cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZid9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3e3Bvc2l0aW9uOmFic29sdXRlOyBiYWNrZ3JvdW5kOiAjZmZmO3otaW5kZXg6NTAwMDsgb3BhY2l0eTogMC44fSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlldyBpbWd7d2lkdGg6IDIwMHB4OyBoZWlnaHQ6MjAwcHg7fSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyBhe3BhZGRpbmc6IDVweCA1cHg7bGluZS1oZWlnaHQ6Mn0gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cge2hlaWdodDogMTAwcHg7IHBhZGRpbmc6IDNweCAzcHg7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbi10b3A6NnB4OyBcXFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7IGJvcmRlcjoxcHggc29saWQgI2ZmNDM1MTsgZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlOyB6LWluZGV4OjIwMDsgfVxcXHJcbiAgICAgICAgICAgICAgICAuY2xpY2tJdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrOyB6LWluZGV4OjMwMDt9XHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLkVtc3tjdXJzb3I6cG9pbnRlcjt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7ICB6LWluZGV4OjQwMDt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dDpob3Zlcntjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb257dGV4dC1kZWNvcmF0aW9uOm5vbmU7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9uOmhvdmVye2JhY2tncm91bmQ6I2ZmNzY4MDsgY29sb3I6I2ZmZjsgfSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXI7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOiA4cHggOHB4OyBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8xNnB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcXFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDM1MTtib3JkZXItY29sb3I6ICNmZjQzNTE7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnU6aG92ZXIsIC5zdWJNZW51OmZvY3VzLCAuc3ViTWVudTp2aXNpdGVke2JhY2tncm91bmQtY29sb3I6ICNmZjc2ODA7Ym9yZGVyLWNvbG9yOiAjZmY3NjgwO2NvbG9yOiAjZmZmO31gO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChzdHlsZUl0ZW0pO1xyXG4gICAgICByZXR1cm4gbWFpbk1lbnU7XHJcbiAgICB9LFxyXG4gICAgc3Vicyh0aXRsZSwgZnVuYywgc3ViaWQsIHN1YnR5cGUpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgIHN1Yk1lbnUuaWQgPSBzdWJpZDtcclxuICAgICAgc3ViTWVudS5jbGFzc05hbWUgPSAnc3ViTWVudSc7XHJcbiAgICAgIHN1Yk1lbnUuc2V0QXR0cmlidXRlKCdkYXRhLWtpZCcsIHN1YmlkKTtcclxuICAgICAgc3ViTWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmV0eXBlJywgc3VidHlwZSk7XHJcbiAgICAgIGNvbnN0IHN1YmNvbnRlbnQgPSBgPGEgY2xhc3M9J3N1YkJ1dCcgZGF0YS1raWQ9JHtzdWJpZH0gZGF0ZS1yZXR5cGU9JHtzdWJ0eXBlfT4ke3RpdGxlfTwvYT5gO1xyXG4gICAgICBzdWJNZW51Lm9uY2xpY2sgPSBmdW5jO1xyXG4gICAgICBzdWJNZW51LnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHN1Yk1lbnUuaW5uZXJIVE1MID0gc3ViY29udGVudDtcclxuICAgICAgcmV0dXJuIHN1Yk1lbnU7XHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gbGV0IHRlc3RhcmVhRWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IHRlc3RTZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlc3RTZXQpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGVzdFNldC5pdGVtKDApKTtcclxuICAgIGNvbnN0IG1haW5FbW90aW9uTWVudSA9IGNyZWF0ZU1lbnUubWFpbigpO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpICE9PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHRlc3RTZXQubGVuZ3RoOyB3ICs9IDEpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codGVzdFNldC5pdGVtKHcpKTtcclxuICAgICAgY29uc3QgZWxlbWVudFRlc3QgPSB0ZXN0U2V0Lml0ZW0odyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG1haW5FbW90aW9uTWVudSk7XHJcbiAgICAgIGVsZW1lbnRUZXN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1haW5FbW90aW9uTWVudSwgZWxlbWVudFRlc3QpO1xyXG4gICAgfVxyXG4gICAgLy8gTm9kZUxpc3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBBcnJheS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIC8vIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICAvLyBjb25zdCBlbGVtZW50U2V0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKSk7XHJcbiAgICAgICAgLyog5YW85a655oCn6Zeu6aKYIEJ5IOWWteaLieW4g+S4gTIwMTcuMDEuMzA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1l5pa55rOV6L+U5Zue55qE5pivSFRNTENvbGxlY3Rpb25cclxu5Zyo6L6D5paw54mI55qERmlyZWZveOS4re+8jEhUTUxDb2xsZWN0aW9u5pSv5oyBSXRlcmF0b3LmjqXlj6PvvIzmiYDku6Xlj6/ku6XnlKhmb3IuLi5vZuW+queOr1xyXG7ogIzlnKhDaHJvbWXkuK3vvIjmiJHlj6rlnKjkvb/nlKhDaHJvbWl1bSA1MOWGheaguOeahOa1j+iniOWZqOS4i+a1i+ivlei/h++8ie+8jEhUTUxDb2xsZWN0aW9u5LiN5pSv5oyBSXRlcmF0b3LmjqXlj6PvvIzkuI3lj6/nlKjnm7TmjqXkvb/nlKhmb3IuLi5vZuW+queOr1xyXG7miYDku6Xlu7rorq7mpbzkuLvov5jmmK/nlKjogIHmlrnms5XlkKcqL1xyXG4gICAgICAgIC8vIFNvbHV0aW9uIHN0YWNrZmxvdzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMjc1NDMxNS9mb3JlYWNoLWxvb3AtZm9yLWh0bWxjb2xsZWN0aW9uLWVsZW1lbnRzXHJcbiAgICAgICAgLyog6L+Y5pyJQXJyYXkuZnJvbeaWueazleehruWunuiDveino+WGs0Nocm9tZeS4i0hUTUxDb2xsZWN0aW9u5LiN6IO955SoZm9yLi4ub2blvqrnjq/nmoTpl67popjvvIzkuI3ov4dDaHJvbWUgNDXmiY3lvIDlp4vmlK/mjIFBcnJheS5mcm9t5pa55rOVXHJcbuiLpeaDs+WFvOWuueS7peWJjeeahOa1j+iniOWZqOeahOivne+8jOWPr+S7peeUqGZvci4uLmlu5b6q546v77yM5oiW6ICF5Yqg5LiqYmFiZWwtcG9seWZpbGzohJrmnKxcclxu5b2T54S25L2g5LiN5oOz5YW85a655L2/55SoQ2hyb21pdW0gNDXku6XliY3lhoXmoLjnmoTmtY/op4jlmajkuZ/msqHlpJrlpKfpl67popjvvIznjrDlnKjlm73lhoXluILlnLrku73pop3mnIDlpJpDaHJvbWl1beWll+Wjs+a1j+iniOWZqC0tMzYw5a6J5YWo5rWP6KeI5Zmo55qE5pyA5paw5q2j5byP54mI5Lmf5piv6YeH55SoQ2hyb21pdW0gNDXlhoXmoLjkuoYqL1xyXG4gICAgLy8gY29uc3QgZWxlbWVudFNldExlbmd0aCA9IGVsZW1lbnRTZXQubGVuZ3RoO1xyXG4gICAgLyogaWYgKGVsZW1lbnRTZXRMZW5ndGggPT09IDApIHtcclxuICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBubyB0ZXh0YXJlYScpO1xyXG4gICAgfSAqL1xyXG4gICAgLy8gdGVzdGFyZWFFbGVTZXQuYWRkKGVsZW1lbnRTZXQpO1xyXG4gICAgLyogY29uc3QgdXNlck9wdGlvbiA9IHtcclxuICAgICAgdXNlcldpbmRvd0hlaWdodDogMTIwLFxyXG4gICAgICB1c2VyU2VsZWN0VGV4dEFyZWE6ICdsYXN0JyxcclxuICAgIH07ICovXHJcblxyXG4gICAgLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtc3ludGF4OiBbMSwgXCJGb3JPZlN0YXRlbWVudFwiXSAqL1xyXG4gICAgLyogZm9yIChjb25zdCBlbGVtZW50U2luZ2xlIG9mIGVsZW1lbnRTZXQpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgICBlbGVtZW50U2luZ2xlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1haW5FbW90aW9uTWVudSwgZWxlbWVudFNpbmdsZSk7XHJcbiAgICB9ICovXHJcbiAgfVxyXG59O1xyXG5cclxuaWYodHlwZW9mIGltZ3BhdGggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBsZXQgaW1ncGF0aCA9ICcxNDg1NDEyODEwJztcclxufVxyXG5mdW4oaW1ncGF0aCk7XHJcbiJdfQ==
