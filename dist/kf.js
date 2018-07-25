// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     4.5.2
// @author      eddie32
// @description KF论坛专用的回复表情, 插图扩展插件, 在发帖时快速输入自定义表情和论坛BBCODE
// @icon        https://blog.nekohand.moe/favicon.ico
// @homepage    https://github.com/liu599/KF-Emotion-UserScript
// @include     https://*miaola.info/*
// @include     https://*2dkf.com/*
// @include     https://*9moe.com/*
// @include     https://*kfgal.com/*
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

  var versionNo = '4.5.2';
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
  var biliEM = emAddrArrayHandler(1, 17, 'http://o6smnd6uw.bkt.clouddn.com/xds/2233 (', ').gif');
  emAddrArrayHandler(1, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds/', '.png', biliEM);
  emAddrArrayHandler(0, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds/bilibiliTV (', ').png', biliEM);
  // tora酱
  emAddrArrayHandler(1, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds2/0', '.jpg', biliEM, true);
  // 阿卡林 from 摇曳百合
  var AkariSmile = emAddrArrayHandler(1, 21, 'http://o6smnd6uw.bkt.clouddn.com/xds2/akari', '.gif');
  emAddrArrayHandler(1, 72, 'http://o6smnd6uw.bkt.clouddn.com/xds3/akari', '.png', AkariSmile);
  // New Game
  var NewGame = emAddrArrayHandler(2, 64, 'http://o6smnd6uw.bkt.clouddn.com/xds4/0xx', '.png');
  // ACFUN
  var ACSmile4 = emAddrArrayHandler(1, 51, 'http://o6smnd6uw.bkt.clouddn.com/xds6/', '.png');
  emAddrArrayHandler(1, 40, 'http://o6smnd6uw.bkt.clouddn.com/xds5/', '.gif', ACSmile4, true);
  // KF 内置
  var KFSmileURL = emAddrArrayHandler(1, 49, (typeof imagepath !== 'undefined' ? imagepath : '') + '/post/smile/em/em', '.gif', [], true);
  var KFSmileCode = emAddrArrayHandler(10, 58, '[s:', ']');
  // lovelive专用小
  var LoveliveSmalltargetURL = emAddrArrayHandler(1, 41, 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive2nd', '.png');
  emAddrArrayHandler(1, 41, 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive', '.png', LoveliveSmalltargetURL);
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
          addressTarget = eventTarget.getAttribute('data-sign');
          emotionAddress = attachAction.addressParse(addressTarget, 'plain');
        }
      } else {
        addressTarget = eventTarget.getAttribute('data-link');
        emotionAddress = attachAction.addressParse(addressTarget, 'plain');
      }
      var selectTextArea = EleUtil.select('textarea');
      var ovalue = selectTextArea.value;
      var startPos = selectTextArea.selectionStart;
      // const endPos = selectTextArea.selectionEnd;
      selectTextArea.value = '' + ovalue.slice(0, startPos) + emotionAddress + ovalue.slice(startPos);
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
    createImages: function createImages(key) {

      var outerContainer = EleUtil.selectID('eddie32' + key);
      console.log(MenuList[key]);
      var imgList = MenuList[key].addr;
      var imgLength = imgList.length;
      for (var k = 0; k < imgLength; k += 1) {
        var divElement = EleUtil.create('div');
        divElement.className = 'clickItem';
        var imgItem = EleUtil.create('img');
        imgItem.src = imgList[k];
        imgItem.className = 'Ems';
        imgItem.onclick = attachAction.attachEmotion;
        //imgItem.onmouseover = mouseOverAction.showImg;
        //imgItem.onmouseout = mouseOverAction.clearImg;

        divElement.appendChild(imgItem);
        outerContainer.appendChild(divElement);
      }
    },
    createPlainText: function createPlainText(key) {

      var outerContainer = EleUtil.selectID('eddie32' + key);
      outerContainer.innerHTML = '';
      var txtList = MenuList[key].addr;
      var txtLength = txtList.length;
      for (var k = 0; k < txtLength; k += 1) {
        console.log(txtLength);
        var txtItem = EleUtil.create('a');
        txtItem.className = 'txtBtnEmotion';
        txtItem.setAttribute('data-sign', '' + encodeURI(txtList[k]));
        txtItem.innerHTML = '' + txtList[k];
        if (MenuList[key].ref) {
          txtItem.innerHTML = '' + MenuList[key].ref[k];
          EleUtil.selectID('toggleWindow').style.height = '50px';
        }
        txtItem.onclick = attachAction.attachEmotion;
        outerContainer.appendChild(txtItem);
      }
    },
    createImageLink: function createImageLink(key) {

      var outerContainer = EleUtil.selectID('eddie32' + key);
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
    main: function main() {
      /* main menu*/
      var mainMenu = EleUtil.create('div');
      mainMenu.innerHTML = '<span id=\'largeView\'></span>';
      mainMenu.id = 'emotion0000';
      var MenuLength = Object.keys(MenuList).length;
      for (var i = 0; i < MenuLength; i += 1) {
        var MenuKey = Object.keys(MenuList)[i];
        var MenuTitle = MenuList[MenuKey].title;
        var MenuType = MenuList[MenuKey].datatype;
        // if (!MenuType || !MenuTitle) console.log(`data error:  ${MenuKey}`);
        var testMenu = createMenu.subs(MenuTitle, expandMenu.init, MenuKey, MenuType);
        mainMenu.appendChild(testMenu);
      }
      /* close button*/
      var closeBtn = EleUtil.create('a');
      closeBtn.innerHTML = 'x';
      closeBtn.className = 'subMenu';
      closeBtn.id = 'closeEM';
      closeBtn.onclick = clearMenu.clear;
      closeBtn.style.cssText = 'cursor:pointer';
      mainMenu.appendChild(closeBtn);
      /* dropdown box*/
      var itemWindow = EleUtil.create('div');
      itemWindow.id = 'toggleWindow';
      mainMenu.appendChild(itemWindow);
      for (var ww = 0; ww < MenuLength; ww += 1) {
        var itemEddie32 = EleUtil.create('div');
        var _MenuKey = Object.keys(MenuList)[ww];
        itemEddie32.id = 'eddie32' + _MenuKey;
        itemEddie32.style.display = 'none';
        itemWindow.appendChild(itemEddie32);
      }
      /* css style*/
      var styleItem = EleUtil.create('style');
      styleItem.innerHTML = '#emotion0000 { font: 12px/28px \'Hiragino Sans GB\',\'Microsoft YaHei\',\'Arial\',\'sans-serif\';                 margin-bottom: 5px; }                 #largeView{position:absolute; background: #fff; z-index:5000; opacity: 0.8;}                 #largeView img{width: 200px; height:200px;}                 #toggleWindow {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:4px;                 margin-bottom:4px; border:1px solid #ff4351; display:none;position:relative; z-index:200; }                .clickItem{display:inline-block; z-index:300;}\n                a.subMenu{cursor:pointer;display:inline-block;cursor:pointer;                 \ttext-align:center; padding: 0 8px;                 font: 12px/30px \'Hiragino Sans GB\',\'Microsoft YaHei\',\'Arial\',\'sans-serif\';                background-color: #ff4351;border-color: #ff4351;color: #fff;}                 .Ems{cursor:pointer;width: 50px;height: 50px;display:inline-block;  z-index:400;}                 a.txtBtnEmotion{display: inline-block; text-decoration:none;  \n                \tcursor: pointer;\n                \tpadding:0 8px; font: 12px/24px \'Hiragino Sans GB\',\'Microsoft YaHei\',\'Arial\',\'sans-serif\'}                 a.txtBtnEmotion:hover{background:#ff7680; color:#fff; }                 a.subMenu:hover, a.subMenu:focus, a.subMenu:visited{background-color: #ff7680;border-color: #ff7680;color: #fff;}';
      mainMenu.appendChild(styleItem);
      return mainMenu;
    },
    subs: function subs(title, func, subid, subtype) {
      var subMenu = EleUtil.create('a');
      subMenu.id = subid;
      subMenu.className = 'subMenu';
      subMenu.setAttribute('data-kid', subid);
      subMenu.setAttribute('data-retype', subtype);
      subMenu.onclick = func;
      subMenu.title = title;
      subMenu.innerHTML = '' + title;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOztBQUVBOztBQUdBLElBQU0sTUFBTSxTQUFOLEdBQU0sR0FBOEI7QUFBQSxNQUE3QixTQUE2Qix1RUFBakIsWUFBaUI7O0FBQ3hDLE1BQU0sWUFBWSxPQUFsQjtBQUNFOzs7Ozs7OztBQVFBO0FBQ0YsV0FBUyxrQkFBVCxDQUE0QixXQUE1QixFQUF5QyxXQUF6QyxFQUFzRCxTQUF0RCxFQUNFLFNBREYsRUFDa0Q7QUFBQSxRQUFyQyxTQUFxQyx1RUFBekIsRUFBeUI7QUFBQSxRQUFyQixXQUFxQix1RUFBUCxLQUFPOztBQUNoRCxRQUFJLFdBQVcsRUFBZjtBQUNBLFFBQUksYUFBYSxDQUFqQjtBQUNBLFNBQUssSUFBSSxJQUFJLFdBQWIsRUFBMEIsSUFBSSxXQUE5QixFQUEyQyxLQUFLLENBQWhELEVBQW1EO0FBQ2pELG1CQUFhLENBQWI7QUFDQSxVQUFJLFdBQUosRUFBaUI7QUFDZixxQkFBYyxJQUFJLENBQUwsR0FBVyxDQUFYLFNBQXFCLENBQWxDO0FBQ0Q7QUFDRCxzQkFBYyxTQUFkLEdBQTBCLFVBQTFCLEdBQXVDLFNBQXZDO0FBQ0EsZ0JBQVUsSUFBVixDQUFlLFFBQWY7QUFDRDtBQUNELFdBQU8sU0FBUDtBQUNEO0FBQ0M7O0FBR0E7QUFDRixNQUFNLFNBQVMsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLDZDQUExQixFQUNtQixPQURuQixDQUFmO0FBRUEscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLHVDQUExQixFQUFtRSxNQUFuRSxFQUEyRSxNQUEzRTtBQUNBLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQixtREFBMUIsRUFDcUIsT0FEckIsRUFDOEIsTUFEOUI7QUFFRTtBQUNGLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQix5Q0FBMUIs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SUFBbEI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxjQUFRLFNBQVIsUUFBdUIsS0FBdkI7QUFDQSxhQUFPLE9BQVA7QUFDRDtBQWxFZ0IsR0FBbkI7O0FBc0VBLE1BQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFlBQVksSUFBakQsRUFBdUQ7QUFDckQ7QUFDQSxRQUFNLFVBQVUsU0FBUyxvQkFBVCxDQUE4QixVQUE5QixDQUFoQjtBQUNBO0FBQ0E7QUFDQSxRQUFNLGtCQUFrQixXQUFXLElBQVgsRUFBeEI7QUFDQSxRQUFJLFNBQVMsY0FBVCxDQUF3QixnQkFBeEIsTUFBOEMsSUFBbEQsRUFBd0Q7QUFDdEQsZUFBUyxjQUFULENBQXdCLGdCQUF4QixFQUEwQyxLQUExQyxDQUFnRCxRQUFoRCxHQUEyRCxRQUEzRDtBQUNEO0FBQ0QsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsTUFBNUIsRUFBb0MsS0FBSyxDQUF6QyxFQUE0QztBQUMxQztBQUNBLFVBQU0sY0FBYyxRQUFRLElBQVIsQ0FBYSxDQUFiLENBQXBCO0FBQ0E7QUFDQSxrQkFBWSxVQUFaLENBQXVCLFlBQXZCLENBQW9DLGVBQXBDLEVBQXFELFdBQXJEO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDSTs7OztBQUlBO0FBQ0E7OztBQUdKO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7OztBQUlEO0FBQ0YsQ0FsWkQ7O0FBb1pBLElBQUcsT0FBTyxPQUFQLEtBQW1CLFdBQXRCLEVBQW1DO0FBQy9CLE1BQUksV0FBVSxZQUFkO0FBQ0g7QUFDRCxJQUFJLE9BQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZXNsaW50IGxpbmVicmVhay1zdHlsZTogW1wiZXJyb3JcIiwgXCJ3aW5kb3dzXCJdICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBzdHJpY3QgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5jb25zdCBmdW4gPSAoaW1hZ2VwYXRoID0gJzE0ODU0MTI4MTAnKSA9PiB7XHJcbiAgY29uc3QgdmVyc2lvbk5vID0gJzQuMi4yJztcclxuICAgIC8qIEFkZHJlc3MgZnVuY3Rpb25cclxuICAgICAqIHN0YXJ0TnVtYmVyOiBudW1iZXIsIGluZGljYXRpbmcgdGhlIHN0YXJ0IG51bWJlcjtcclxuICAgICAqIGxlbmd0aEFycmF5OiBudW1iZXIsIGluZGljYXRpbmcgdGhlIGFkZHJBcnJheSBsZW5ndGg7XHJcbiAgICAgKiBzdHJQcmVmaXg6IHN0cmluZywgYWRkcmVzcyBQcmVmaXg7XHJcbiAgICAgKiBzdHJTdWZmaXg6IHN0cmluZywgYWRkcmVzcyBTdWZmaXg7XHJcbiAgICAgKiBsZWFkaW5nWmVybzogYm9vbGVuLCB0cnVlIGZvciBsZWFkaW5nIHplcm8gaW4gbnVtYmVyO1xyXG4gICAgICogYWRkckFycmF5OiBhcnJheSwgYWRkcmVzcyBhcnJheSwgZGVmYXVsdCBmb3IgZW1wdHk7XHJcbiAgICAgKi9cclxuICAgIC8vIOWIm+W7uuihqOaDheWMheaVsOe7hOeahOWHveaVsFxyXG4gIGZ1bmN0aW9uIGVtQWRkckFycmF5SGFuZGxlcihzdGFydE51bWJlciwgbGVuZ3RoQXJyYXksIHN0clByZWZpeCxcclxuICAgIHN0clN1ZmZpeCwgYWRkckFycmF5ID0gW10sIGxlYWRpbmdaZXJvID0gZmFsc2UpIHtcclxuICAgIGxldCBhZGRyVGVtcCA9ICcnO1xyXG4gICAgbGV0IGFkZHJOdW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0TnVtYmVyOyBqIDwgbGVuZ3RoQXJyYXk7IGogKz0gMSkge1xyXG4gICAgICBhZGRyTnVtYmVyID0gajtcclxuICAgICAgaWYgKGxlYWRpbmdaZXJvKSB7XHJcbiAgICAgICAgYWRkck51bWJlciA9IChqID4gOSkgPyAoaikgOiAoYDAke2p9YCk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkclRlbXAgPSBgJHtzdHJQcmVmaXh9JHthZGRyTnVtYmVyfSR7c3RyU3VmZml4fWA7XHJcbiAgICAgIGFkZHJBcnJheS5wdXNoKGFkZHJUZW1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhZGRyQXJyYXk7XHJcbiAgfVxyXG4gICAgLyog6KGo5oOF5YyF5Zyw5Z2A5pWw5o2uICovXHJcblxyXG5cclxuICAgIC8vIELnq5lcclxuICBjb25zdCBiaWxpRU0gPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTcsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMvMjIzMyAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJykuZ2lmJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzLycsICcucG5nJywgYmlsaUVNKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMCwgMTQsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMvYmlsaWJpbGlUViAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnKS5wbmcnLCBiaWxpRU0pO1xyXG4gICAgLy8gdG9yYemFsVxyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCAxNCwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczIvMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5qcGcnLCBiaWxpRU0sIHRydWUpO1xyXG4gICAgLy8g6Zi/5Y2h5p6XIGZyb20g5pGH5puz55m+5ZCIXHJcbiAgY29uc3QgQWthcmlTbWlsZSA9IGVtQWRkckFycmF5SGFuZGxlcigxLCAyMSwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczIvYWthcmknLCAnLmdpZicpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA3MiwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczMvYWthcmknLCAnLnBuZycsIEFrYXJpU21pbGUpO1xyXG4gICAgLy8gTmV3IEdhbWVcclxuICBjb25zdCBOZXdHYW1lID0gZW1BZGRyQXJyYXlIYW5kbGVyKDIsIDY0LCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzNC8weHgnLCAnLnBuZycpO1xyXG4gICAgLy8gQUNGVU5cclxuICBjb25zdCBBQ1NtaWxlNCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA1MSwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczYvJywgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDAsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHM1LycsICcuZ2lmJywgQUNTbWlsZTQsIHRydWUpO1xyXG4gICAgLy8gS0Yg5YaF572uXHJcbiAgY29uc3QgS0ZTbWlsZVVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA0OSwgYCR7dHlwZW9mIGltYWdlcGF0aCAhPT0gJ3VuZGVmaW5lZCcgPyBpbWFnZXBhdGggOiAnJ30vcG9zdC9zbWlsZS9lbS9lbWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmdpZicsIFtdLCB0cnVlKTtcclxuICBjb25zdCBLRlNtaWxlQ29kZSA9IGVtQWRkckFycmF5SGFuZGxlcigxMCwgNTgsICdbczonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICddJyk7XHJcbiAgICAvLyBsb3ZlbGl2ZeS4k+eUqOWwj1xyXG4gIGNvbnN0IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDEsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS9sb3ZlbGl2ZS9Mb3ZlbGl2ZTJuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA0MSwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL2xvdmVsaXZlL0xvdmVsaXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycsIExvdmVsaXZlU21hbGx0YXJnZXRVUkwpO1xyXG4gICAgLy8ga2blv6vmjbfku6PnoIEo6ZyA6KaB5pS55YaZ6Kej5p6E6LWL5YC8KVxyXG4gIGNvbnN0IGZ1bmN0aW9uRGVzY3JpcHRpb24gPSBbJ+WHuuWUrui0tHNlbGw95ZSu5Lu3JywgJ+W8leeUqCcsICfpmpDol49oaWRlPeelnuenmOetiee6pycsICfmj5LlhaXku6PnoIEnLCAn5Yig6Zmk57q/JywgJ+i3kemprOeBrycsICfmloflrZfpopzoibInLCAn57KX5L2TJyxcclxuICAgICfkuIvliJLnur8nLCAn5pac5L2TJywgJ+awtOW5s+e6vycsICfog4zmma/oibInLCAn5o+S5YWl5Zu+54mHJ107XHJcbiAgY29uc3QgZGVmYXVsdEZ1bmN0aW9uID0gWydbc2VsbD0xMDBdWy9zZWxsXScsICdbcXVvdGVdWy9xdW90ZV0nLCAnW2hpZGU9MTAwXVsvaGlkZV0nLCAnW2NvZGVdWy9jb2RlXScsXHJcbiAgICAnW3N0cmlrZV1bL3N0cmlrZV0nLCAnW2ZseV1bL2ZseV0nLCAnW2NvbG9yPSMwMEZGMDBdWy9jb2xvcl0nLCAnW2JdWy9iXScsICdbdV1bL3VdJywgJ1tpXVsvaV0nLFxyXG4gICAgJ1tocl0nLCAnW2JhY2tjb2xvcj1dWy9iYWNrY29sb3JdJywgJ1tpbWddWy9pbWddJ107XHJcbiAgICAvLyDpopzmloflrZdcclxuICBjb25zdCBlbW9qaSA9IFsnKOKXj+ODuyA4IOODu+KXjyknLFxyXG4gICAgJ+KVsCjguZHil5Ug4pa9IOKXleC5kSnila8nLCAnKOOCnc+J44O7KScsICfjgJzimarimaonLCAnKO++n9CU776f4omh776f0JTvvp8pJywgJyjvvL5v77y+Ke++iScsICcofHx8776f0JTvvp8pJywgJyhgzrXCtCApJywgJyjilazvvp/QtO++nyknLCAnKHx8fO++n9C0776fKScsICco77+j4oiH77+jKScsICco77+jM++/oyknLCAnKO+/o++9sO+/oyknLCAnKO+/oyAuIO+/oyknLCAnKO+/o++4v++/oyknLCAnKO+/o++4tu+/oyknLCAnKCrCtM+JYCopJywgJyjjg7vPieODuyknLCAnKOKMkuKWveKMkiknLCAnKO+/o+KWve+/o++8iScsICcoPeODu8+J44O7PSknLCAnKO+9gOODu8+J44O7wrQpJywgJyjjgJzvv6PilrPvv6Mp44CcJywgJyjvvaXiiIDvvaUpJyxcclxuICAgICcowrDiiIDCsCnvvoknLCAnKO+/ozPvv6MpJywgJ+KVrijvv6Pilr3vv6Mp4pWtJywgJyggwrRf44Kd772AKScsICfjga7jg67jga4nLCAnKO++idiCPCDguZHvvInor7blmL/imIbvvZ4nLCAnKCZsdDtfJmx0OyknLCAnKCZndDtfJmd0OyknLCAnKDvCrF/CrCknLCAnKOKWlOKWoeKWlCkvJywgJyjvvp/QlO++n+KJoe++n9C0776fKSE/JywgJ86jKO++n9C0776fOyknLCAnzqMoIO+/o+KWoe+/o3x8KScsXHJcbiAgICAnKMK077ybz4nvvJtgKScsICfvvIgvVNCUVCkvJywgJyhe44O7z4njg7teICknLCAnKO+9oe+9pc+J772l772hKScsICco4peP77+jKO+9tCnvv6Pil48pJywgJ861Pc61PSjjg47iiafiiIfiiaYp44OOJywgJyjCtO+9pV/vvaVgKScsICcoLV8tIyknLCAn77yI77+j44G477+j77yJJywgJyjvv6POtSgj77+jKSDOoycsICfjg70oYNCUwrQp776JJywgJyjila/CsOWPo8KwKeKVryjilLTigJTilLQnLCAn77yIIy1fLSnilK/ilIHilK8nLCAnXyg6M+OAjeKIoClfJywgJyjnrJEpJywgJyjmsZcpJywgJyjms6MpJywgJyjoi6bnrJEpJywgJyjCtOODu8+J44O7YCknLCAnKOKVr8Kw4pahwrDvvInila/vuLUg4pS74pSB4pS7JywgJyjila/igLXilqHigLIp4pWv77i14pS74pSB4pS7JywgJyggwrTPgWApJywgJygg776fz4nvvp8pJywgJyhv776fz4nvvp9vKScsICco44CAXs+JXiknLCAnKO+9oeKXleKIgOKXle+9oSknLCAnLygg4peV4oC/4oC/4peVIClcXFxcJywgJ8612akoIMK64oiAwrogKdu20LcnLCAnKO+/o861KCPvv6Mp4piG4pWw4pWuKO+/o+KWve+/oy8vLyknLFxyXG4gICAgJ++8iOKXj8K0M++9gO+8iX7imaonLCAnXyg60LfjgI3iiKApXycsICfRhdC+0YDQvtGI0L4hJywgJ++8vCheb14p77yPJywgJyjigKLMheeBrOKAosyFICknLCAnKO++n9CU776fKScsICfjgb7jgaPjgZ/jgY/jgIHlsI/lrabnlJ/jga/mnIDpq5jjgaDjgZzvvIHvvIEnLCAnzrU9zrU9zrU94pSPKOOCnOODreOCnDsp4pSbJyxcclxuICAgICco77ybwrDjgbvCsCknLCAn4o6d4omn4o+d4o+d4omm4o6gJywgJ+ODvSjinL/vvp/ilr3vvp8p44OOJywgJ+eElOOBq+iInuOBhOS4iuOBjOOCi+OCueODkeODvOOCr+OCiOOAgemCquaCquOBqueVsOaAp+S6pOmam+OBq+OAgeWkqee9sOOCkuS4juOBiO+8gScsICd84oCiz4nigKJgKSddO1xyXG5cclxuXHJcbiAgY29uc3QgTWVudUxpc3QgPSB7XHJcbiAgICBpdGVtNDogeyBkYXRhdHlwZTogJ2ltYWdlTGluaycsIHRpdGxlOiAn5Zu65pyJJywgYWRkcjogS0ZTbWlsZVVSTCwgcmVmOiBLRlNtaWxlQ29kZSB9LFxyXG4gICAgaXRlbTE6IHsgZGF0YXR5cGU6ICdwbGFpbicsIHRpdGxlOiAn5b+r5o23JywgYWRkcjogZGVmYXVsdEZ1bmN0aW9uLCByZWY6IGZ1bmN0aW9uRGVzY3JpcHRpb24gfSxcclxuICAgIGl0ZW0yOiB7IGRhdGF0eXBlOiAncGxhaW4nLCB0aXRsZTogJ+minOaWh+WtlycsIGFkZHI6IGVtb2ppIH0sXHJcbiAgICBpdGVtNTogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdBQ0ZVTicsIGFkZHI6IEFDU21pbGU0IH0sXHJcbiAgICBpdGVtNjogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICfluLjnlKgnLCBhZGRyOiBOZXdHYW1lIH0sICAvL1xyXG4gICAgaXRlbTc6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQWthcmknLCBhZGRyOiBBa2FyaVNtaWxlIH0sIC8vIEFrYXJpXHJcbiAgICBpdGVtODogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdCaWxpQmlsaScsIGFkZHI6IGJpbGlFTSB9LCAvLyBC56uZXHJcbiAgICBpdGVtMzogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdMb3ZlTGl2ZScsIGFkZHI6IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgfSxcclxuICB9O1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduKi9cclxuICAgIC8qIEV2ZW50IOWHveaVsCAqL1xyXG4gIGNvbnN0IEV2ZW50VXRpbCA9IHtcclxuICAgIGdldEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgIHJldHVybiBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGFyZ2V0KGV2ZW50KSB7XHJcbiAgICAgIHJldHVybiBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBwcmV2ZW50RGVmYXVsdChldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7ICAvLyBET00yXHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJHt0eXBlfWAsIGhhbmRsZXIpOyAgLy8gSUVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50W2BvbiR7dHlwZX1gXSA9IGhhbmRsZXI7ICAvLyBET00gMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAvLyBET00yXHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoYG9uJHt0eXBlfWAsIGhhbmRsZXIpOyAvLyBJRVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRbYG9uJHt0eXBlfWBdID0gbnVsbDsgLy8gRE9NIDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24qL1xyXG4gICAgLyogRWxlbWVudCDlh73mlbAqL1xyXG4gIGNvbnN0IEVsZVV0aWwgPSB7XHJcbiAgICBjcmVhdGUoZWxlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0SUQoZWxlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGUpO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdChzZWxlY3Rvcikge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgICAvKiDmqKHlnZcqL1xyXG4gIGNvbnN0IG1vdXNlT3ZlckFjdGlvbiA9IHtcclxuICAgIHNob3dJbWcoZXZlbnQpIHtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgLyogaWYgKCFldmVudFRhcmdldC5zcmMpIHtcclxuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XHJcbiAgICAgIH0qL1xyXG4gICAgICBjb25zdCBsYXJnZVZpZXdDb250YWluZXIgPSBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKTtcclxuICAgICAgY29uc3QgW3Njcm9sbFRvcFZhbHVlLCBzY3JvbGxMZWZ0VmFsdWVdID0gW2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7ZXZlbnRUYXJnZXQuc3JjfSAvPmA7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgKyBzY3JvbGxUb3BWYWx1ZSArIDIwfXB4YDtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYICsgc2Nyb2xsTGVmdFZhbHVlfXB4YDtcclxuXHJcbiAgICB9LFxyXG4gICAgY2xlYXJJbWcoKSB7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgYXR0YWNoQWN0aW9uID0ge1xyXG4gICAgYXR0YWNoRW1vdGlvbihldmVudCkge1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgIGxldCBhZGRyZXNzVGFyZ2V0ID0gJyc7XHJcbiAgICAgIGxldCBlbW90aW9uQWRkcmVzcyA9ICcnO1xyXG4gICAgICBpZiAoZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChldmVudFRhcmdldC5zcmMpIHtcclxuICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5zcmM7XHJcbiAgICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ2ltYWdlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2lnbicpO1xyXG4gICAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdwbGFpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxpbmsnKTtcclxuICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ3BsYWluJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0VGV4dEFyZWEgPSBFbGVVdGlsLnNlbGVjdCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3Qgb3ZhbHVlID0gc2VsZWN0VGV4dEFyZWEudmFsdWU7XHJcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgIC8vIGNvbnN0IGVuZFBvcyA9IHNlbGVjdFRleHRBcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgc2VsZWN0VGV4dEFyZWEudmFsdWUgPSBgJHtvdmFsdWUuc2xpY2UoMCwgc3RhcnRQb3MpfSR7ZW1vdGlvbkFkZHJlc3N9JHtvdmFsdWUuc2xpY2Uoc3RhcnRQb3MpfWA7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgYWRkcmVzc1BhcnNlKGFkZFN0ciwgcGF0dGVybikge1xyXG4gICAgICBsZXQgc3RyaW5nUmV0dXJuID0gJyc7XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gYFtpbWddJHthZGRTdHJ9Wy9pbWddYDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ3BsYWluJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGRlY29kZVVSSShhZGRTdHIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAnaW1hZ2VMaW5rJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGFkZFN0cjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RyaW5nUmV0dXJuO1xyXG4gICAgfSxcclxuICB9O1xyXG4gIFxyXG5cclxuICBjb25zdCBjcmVhdGVJdGVtcyA9IHtcclxuXHJcbiAgICBjcmVhdGVJbWFnZXMoa2V5KSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IEVsZVV0aWwuc2VsZWN0SUQoYGVkZGllMzIke2tleX1gKTtcclxuICAgICAgY29uc29sZS5sb2coTWVudUxpc3Rba2V5XSk7XHJcbiAgICAgIGNvbnN0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGl2RWxlbWVudCA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9ICdjbGlja0l0ZW0nO1xyXG4gICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3ZlciA9IG1vdXNlT3ZlckFjdGlvbi5zaG93SW1nO1xyXG4gICAgICAgIGltZ0l0ZW0ub25tb3VzZW91dCA9IG1vdXNlT3ZlckFjdGlvbi5jbGVhckltZztcclxuXHJcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZVBsYWluVGV4dChrZXkpIHtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gRWxlVXRpbC5zZWxlY3RJRChgZWRkaWUzMiR7a2V5fWApO1xyXG4gICAgICBvdXRlckNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgY29uc3QgdHh0TGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgdHh0TGVuZ3RoID0gdHh0TGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdHh0TGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgXHRjb25zb2xlLmxvZyh0eHRMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHR4dEl0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnYScpO1xyXG4gICAgICAgIHR4dEl0ZW0uY2xhc3NOYW1lID0gJ3R4dEJ0bkVtb3Rpb24nO1xyXG4gICAgICAgIHR4dEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXNpZ24nLCBgJHtlbmNvZGVVUkkodHh0TGlzdFtrXSl9YClcclxuICAgICAgICB0eHRJdGVtLmlubmVySFRNTCA9IGAke3R4dExpc3Rba119YDtcclxuICAgICAgICBpZiAoTWVudUxpc3Rba2V5XS5yZWYpIHtcclxuICAgICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYCR7TWVudUxpc3Rba2V5XS5yZWZba119YDtcclxuICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHh0SXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHh0SXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZUxpbmsoa2V5KSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IEVsZVV0aWwuc2VsZWN0SUQoYGVkZGllMzIke2tleX1gKTtcclxuICAgICAgY29uc3QgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgcmVmTGlzdCA9IE1lbnVMaXN0W2tleV0ucmVmO1xyXG4gICAgICBjb25zdCBpbWdMZW5ndGggPSBpbWdMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpbWdMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgaW1nSXRlbS5kYXRhc2V0LmxpbmsgPSByZWZMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uc3JjID0gaW1nTGlzdFtrXTtcclxuICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdFbXMnO1xyXG4gICAgICAgIGltZ0l0ZW0ub25jbGljayA9IGF0dGFjaEFjdGlvbi5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgIGltZ0l0ZW0uc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogNTBweCAhaW1wb3J0YW50O2hlaWdodDogNTBweCAhaW1wb3J0YW50Oyc7XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBjbGVhck1lbnUgPSB7XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgY29uc3QgdG9nZ2xlV2luZG93ID0gRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jyk7XHJcbiAgICAgIHRvZ2dsZVdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBjb25zdCB0b2dXaW5DaGlsZHJlbiA9IHRvZ2dsZVdpbmRvdy5jaGlsZE5vZGVzO1xyXG4gICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gdG9nV2luQ2hpbGRyZW4ubGVuZ3RoOyBqIDwgbGVuOyBqICs9IDEpIHtcclxuICAgICAgICB0b2dXaW5DaGlsZHJlbltqXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgZXhwYW5kTWVudSA9IHtcclxuICAgIGluaXQoZXZlbnQpIHtcclxuICAgICAgY2xlYXJNZW51LmNsZWFyKCk7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS53aWR0aCA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpLnN0eWxlLndpZHRoO1xyXG4gICAgICBjb25zdCBkYXRhVHlwZSA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yZXR5cGUnKTtcclxuICAgICAgY29uc3QgZGF0YUtleSA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1raWQnKTtcclxuICAgICAgaWYgKEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKSkge1xyXG4gICAgICAgIEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBpZiAoZGF0YUtleSA9PT0gJ2l0ZW0xJykgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIGVsc2UgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YVR5cGUgPT09ICdwbGFpbicpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVQbGFpblRleHQoZGF0YUtleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdpbWFnZScpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZXMoZGF0YUtleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdpbWFnZUxpbmsnKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VMaW5rKGRhdGFLZXkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgY3JlYXRlTWVudSA9IHtcclxuICAgIG1haW4oKSB7XHJcbiAgICAgICAgICAgIC8qIG1haW4gbWVudSovXHJcbiAgICAgIGNvbnN0IG1haW5NZW51ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICBtYWluTWVudS5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9J2xhcmdlVmlldyc+PC9zcGFuPmA7XHJcbiAgICAgIG1haW5NZW51LmlkID0gJ2Vtb3Rpb24wMDAwJztcclxuICAgICAgY29uc3QgTWVudUxlbmd0aCA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWVudUxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgTWVudUtleSA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KVtpXTtcclxuICAgICAgICBjb25zdCBNZW51VGl0bGUgPSBNZW51TGlzdFtNZW51S2V5XS50aXRsZTtcclxuICAgICAgICBjb25zdCBNZW51VHlwZSA9IE1lbnVMaXN0W01lbnVLZXldLmRhdGF0eXBlO1xyXG4gICAgICAgIC8vIGlmICghTWVudVR5cGUgfHwgIU1lbnVUaXRsZSkgY29uc29sZS5sb2coYGRhdGEgZXJyb3I6ICAke01lbnVLZXl9YCk7XHJcbiAgICAgICAgY29uc3QgdGVzdE1lbnUgPSBjcmVhdGVNZW51LnN1YnMoTWVudVRpdGxlLCBleHBhbmRNZW51LmluaXQsIE1lbnVLZXksIE1lbnVUeXBlKTtcclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZCh0ZXN0TWVudSk7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgLyogY2xvc2UgYnV0dG9uKi9cclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBFbGVVdGlsLmNyZWF0ZSgnYScpO1xyXG4gICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAneCc7XHJcbiAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdzdWJNZW51JztcclxuICAgICAgY2xvc2VCdG4uaWQgPSAnY2xvc2VFTSc7XHJcbiAgICAgIGNsb3NlQnRuLm9uY2xpY2sgPSBjbGVhck1lbnUuY2xlYXI7XHJcbiAgICAgIGNsb3NlQnRuLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXInO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgICAgIC8qIGRyb3Bkb3duIGJveCovXHJcbiAgICAgIGNvbnN0IGl0ZW1XaW5kb3cgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIGl0ZW1XaW5kb3cuaWQgPSAndG9nZ2xlV2luZG93JztcclxuICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoaXRlbVdpbmRvdyk7XHJcbiAgICAgICAgZm9yIChsZXQgd3c9MDsgd3cgPCBNZW51TGVuZ3RoOyB3dyArPSAxICl7XHJcbiAgICAgICAgICAgIGxldCBpdGVtRWRkaWUzMiA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICAgICAgbGV0IE1lbnVLZXkgPSBPYmplY3Qua2V5cyhNZW51TGlzdClbd3ddO1xyXG4gICAgICAgICAgICBpdGVtRWRkaWUzMi5pZCA9IGBlZGRpZTMyJHtNZW51S2V5fWA7XHJcbiAgICAgICAgICAgIGl0ZW1FZGRpZTMyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGl0ZW1XaW5kb3cuYXBwZW5kQ2hpbGQoaXRlbUVkZGllMzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLyogY3NzIHN0eWxlKi9cclxuICAgICAgY29uc3Qgc3R5bGVJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3N0eWxlJyk7XHJcbiAgICAgIHN0eWxlSXRlbS5pbm5lckhUTUwgPSBgI2Vtb3Rpb24wMDAwIHsgZm9udDogMTJweC8yOHB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJzsgXFxcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgfSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlld3twb3NpdGlvbjphYnNvbHV0ZTsgYmFja2dyb3VuZDogI2ZmZjsgei1pbmRleDo1MDAwOyBvcGFjaXR5OiAwLjg7fSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlldyBpbWd7d2lkdGg6IDIwMHB4OyBoZWlnaHQ6MjAwcHg7fSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyB7aGVpZ2h0OiAxMDBweDsgcGFkZGluZzogM3B4IDNweDsgb3ZlcmZsb3cteDogYXV0bzsgbWFyZ2luLXRvcDo0cHg7IFxcXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweDsgYm9yZGVyOjFweCBzb2xpZCAjZmY0MzUxOyBkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7IHotaW5kZXg6MjAwOyB9XFxcclxuICAgICAgICAgICAgICAgIC5jbGlja0l0ZW17ZGlzcGxheTppbmxpbmUtYmxvY2s7IHotaW5kZXg6MzAwO31cclxuICAgICAgICAgICAgICAgIGEuc3ViTWVudXtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcjsgXFxcclxuICAgICAgICAgICAgICAgIFx0dGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6IDAgOHB4OyBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8zMHB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcXFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDM1MTtib3JkZXItY29sb3I6ICNmZjQzNTE7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLkVtc3tjdXJzb3I6cG9pbnRlcjt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7ICB6LWluZGV4OjQwMDt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb257ZGlzcGxheTogaW5saW5lLWJsb2NrOyB0ZXh0LWRlY29yYXRpb246bm9uZTsgXFwgXHJcbiAgICAgICAgICAgICAgICBcdGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIFx0cGFkZGluZzowIDhweDsgZm9udDogMTJweC8yNHB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJ30gXFxcclxuICAgICAgICAgICAgICAgIGEudHh0QnRuRW1vdGlvbjpob3ZlcntiYWNrZ3JvdW5kOiNmZjc2ODA7IGNvbG9yOiNmZmY7IH0gXFxcclxuICAgICAgICAgICAgICAgIGEuc3ViTWVudTpob3ZlciwgYS5zdWJNZW51OmZvY3VzLCBhLnN1Yk1lbnU6dmlzaXRlZHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NjgwO2JvcmRlci1jb2xvcjogI2ZmNzY4MDtjb2xvcjogI2ZmZjt9YDtcclxuICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtKTtcclxuICAgICAgcmV0dXJuIG1haW5NZW51O1xyXG4gICAgfSxcclxuICAgIHN1YnModGl0bGUsIGZ1bmMsIHN1YmlkLCBzdWJ0eXBlKSB7XHJcbiAgICAgIGNvbnN0IHN1Yk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnYScpO1xyXG4gICAgICBzdWJNZW51LmlkID0gc3ViaWQ7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NOYW1lID0gJ3N1Yk1lbnUnO1xyXG4gICAgICBzdWJNZW51LnNldEF0dHJpYnV0ZSgnZGF0YS1raWQnLCBzdWJpZCk7XHJcbiAgICAgIHN1Yk1lbnUuc2V0QXR0cmlidXRlKCdkYXRhLXJldHlwZScsIHN1YnR5cGUpO1xyXG4gICAgICBzdWJNZW51Lm9uY2xpY2sgPSBmdW5jO1xyXG4gICAgICBzdWJNZW51LnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHN1Yk1lbnUuaW5uZXJIVE1MID0gYCR7dGl0bGV9YDtcclxuICAgICAgcmV0dXJuIHN1Yk1lbnU7XHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG5cclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQgIT0gbnVsbCkge1xyXG4gICAgLy8gbGV0IHRlc3RhcmVhRWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IHRlc3RTZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlc3RTZXQpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGVzdFNldC5pdGVtKDApKTtcclxuICAgIGNvbnN0IG1haW5FbW90aW9uTWVudSA9IGNyZWF0ZU1lbnUubWFpbigpO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpICE9PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCB3ID0gMDsgdyA8IHRlc3RTZXQubGVuZ3RoOyB3ICs9IDEpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codGVzdFNldC5pdGVtKHcpKTtcclxuICAgICAgY29uc3QgZWxlbWVudFRlc3QgPSB0ZXN0U2V0Lml0ZW0odyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG1haW5FbW90aW9uTWVudSk7XHJcbiAgICAgIGVsZW1lbnRUZXN0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1haW5FbW90aW9uTWVudSwgZWxlbWVudFRlc3QpO1xyXG4gICAgfVxyXG4gICAgLy8gTm9kZUxpc3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBBcnJheS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIC8vIEhUTUxDb2xsZWN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICAvLyBjb25zdCBlbGVtZW50U2V0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKSk7XHJcbiAgICAgICAgLyog5YW85a655oCn6Zeu6aKYIEJ5IOWWteaLieW4g+S4gTIwMTcuMDEuMzA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1l5pa55rOV6L+U5Zue55qE5pivSFRNTENvbGxlY3Rpb25cclxu5Zyo6L6D5paw54mI55qERmlyZWZveOS4re+8jEhUTUxDb2xsZWN0aW9u5pSv5oyBSXRlcmF0b3LmjqXlj6PvvIzmiYDku6Xlj6/ku6XnlKhmb3IuLi5vZuW+queOr1xyXG7ogIzlnKhDaHJvbWXkuK3vvIjmiJHlj6rlnKjkvb/nlKhDaHJvbWl1bSA1MOWGheaguOeahOa1j+iniOWZqOS4i+a1i+ivlei/h++8ie+8jEhUTUxDb2xsZWN0aW9u5LiN5pSv5oyBSXRlcmF0b3LmjqXlj6PvvIzkuI3lj6/nlKjnm7TmjqXkvb/nlKhmb3IuLi5vZuW+queOr1xyXG7miYDku6Xlu7rorq7mpbzkuLvov5jmmK/nlKjogIHmlrnms5XlkKcqL1xyXG4gICAgICAgIC8vIFNvbHV0aW9uIHN0YWNrZmxvdzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMjc1NDMxNS9mb3JlYWNoLWxvb3AtZm9yLWh0bWxjb2xsZWN0aW9uLWVsZW1lbnRzXHJcbiAgICAgICAgLyog6L+Y5pyJQXJyYXkuZnJvbeaWueazleehruWunuiDveino+WGs0Nocm9tZeS4i0hUTUxDb2xsZWN0aW9u5LiN6IO955SoZm9yLi4ub2blvqrnjq/nmoTpl67popjvvIzkuI3ov4dDaHJvbWUgNDXmiY3lvIDlp4vmlK/mjIFBcnJheS5mcm9t5pa55rOVXHJcbuiLpeaDs+WFvOWuueS7peWJjeeahOa1j+iniOWZqOeahOivne+8jOWPr+S7peeUqGZvci4uLmlu5b6q546v77yM5oiW6ICF5Yqg5LiqYmFiZWwtcG9seWZpbGzohJrmnKxcclxu5b2T54S25L2g5LiN5oOz5YW85a655L2/55SoQ2hyb21pdW0gNDXku6XliY3lhoXmoLjnmoTmtY/op4jlmajkuZ/msqHlpJrlpKfpl67popjvvIznjrDlnKjlm73lhoXluILlnLrku73pop3mnIDlpJpDaHJvbWl1beWll+Wjs+a1j+iniOWZqC0tMzYw5a6J5YWo5rWP6KeI5Zmo55qE5pyA5paw5q2j5byP54mI5Lmf5piv6YeH55SoQ2hyb21pdW0gNDXlhoXmoLjkuoYqL1xyXG4gICAgLy8gY29uc3QgZWxlbWVudFNldExlbmd0aCA9IGVsZW1lbnRTZXQubGVuZ3RoO1xyXG4gICAgLyogaWYgKGVsZW1lbnRTZXRMZW5ndGggPT09IDApIHtcclxuICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBubyB0ZXh0YXJlYScpO1xyXG4gICAgfSAqL1xyXG4gICAgLy8gdGVzdGFyZWFFbGVTZXQuYWRkKGVsZW1lbnRTZXQpO1xyXG4gICAgLyogY29uc3QgdXNlck9wdGlvbiA9IHtcclxuICAgICAgdXNlcldpbmRvd0hlaWdodDogMTIwLFxyXG4gICAgICB1c2VyU2VsZWN0VGV4dEFyZWE6ICdsYXN0JyxcclxuICAgIH07ICovXHJcblxyXG4gICAgLyogZXNsaW50IG5vLXJlc3RyaWN0ZWQtc3ludGF4OiBbMSwgXCJGb3JPZlN0YXRlbWVudFwiXSAqL1xyXG4gICAgLyogZm9yIChjb25zdCBlbGVtZW50U2luZ2xlIG9mIGVsZW1lbnRTZXQpIHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgICBlbGVtZW50U2luZ2xlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1haW5FbW90aW9uTWVudSwgZWxlbWVudFNpbmdsZSk7XHJcbiAgICB9ICovXHJcbiAgfVxyXG59O1xyXG5cclxuaWYodHlwZW9mIGltZ3BhdGggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBsZXQgaW1ncGF0aCA9ICcxNDg1NDEyODEwJztcclxufVxyXG5mdW4oaW1ncGF0aCk7XHJcbiJdfQ==
