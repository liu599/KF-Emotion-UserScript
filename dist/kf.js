// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     4.3.2
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

/* eslint linebreak-style: ["error", "windows"] */

var fun = function fun() {
  var imagepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var versionNo = '4.3.2';
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
  // New Game kf扩展
  var NewGame = emAddrArrayHandler(2, 64, 'http://nekohand.moe/spsmile/01Sora/0xx', '.png');
  emAddrArrayHandler(1, 20, 'http://ss.nekohand.moe/Asource/EmotionPic/KFEM (', ').gif', NewGame);
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
      if (eventTarget.attributes.length === 2) {
        if (eventTarget.src) {
          addressTarget = eventTarget.src;
          emotionAddress = attachAction.addressParse(addressTarget, 'image');
        } else {
          // console.log(eventTarget.attributes);
          addressTarget = eventTarget.attributes[0].nodeValue;
          emotionAddress = attachAction.addressParse(addressTarget, 'plain');
        }
      } else {
        // console.log(eventTarget.attributes);
        addressTarget = eventTarget.attributes[0].nodeValue;
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
      var dataType = eventTarget.attributes[2].nodeValue;
      var dataKey = eventTarget.attributes[1].nodeValue;
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
      closeBtn.onclick = createMenu.clear;
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
      var subcontent = '<a class=\'subBut\' data-kid=' + subid + ' date-type=' + subtype + '>' + title + '</a>';
      subMenu.onclick = func;
      subMenu.title = title;
      subMenu.innerHTML = subcontent;
      return subMenu;
    }
  };

  if (typeof window !== 'undefined' && document != null) {
    // let testareaEleSet = new WeakSet();

    NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    var elementSet = Array.from(document.getElementsByTagName('textarea'));

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
    var mainEmotionMenu = createMenu.main();
    if (document.getElementById('editor-content') !== null) {
      document.getElementById('editor-content').style.position = 'static';
    }
    /* eslint no-restricted-syntax: [1, "ForOfStatement"] */
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elementSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elementSingle = _step.value;

        // console.log(elementSingle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUdBLElBQU0sTUFBTSxTQUFOLEdBQU0sR0FBb0I7QUFBQSxNQUFuQixTQUFtQix1RUFBUCxFQUFPOztBQUM5QixNQUFNLFlBQVksT0FBbEI7QUFDRTs7Ozs7Ozs7QUFRQTtBQUNGLFdBQVMsa0JBQVQsQ0FBNEIsV0FBNUIsRUFBeUMsV0FBekMsRUFBc0QsU0FBdEQsRUFDRSxTQURGLEVBQ2tEO0FBQUEsUUFBckMsU0FBcUMsdUVBQXpCLEVBQXlCO0FBQUEsUUFBckIsV0FBcUIsdUVBQVAsS0FBTzs7QUFDaEQsUUFBSSxXQUFXLEVBQWY7QUFDQSxRQUFJLGFBQWEsQ0FBakI7QUFDQSxTQUFLLElBQUksSUFBSSxXQUFiLEVBQTBCLElBQUksV0FBOUIsRUFBMkMsS0FBSyxDQUFoRCxFQUFtRDtBQUNqRCxtQkFBYSxDQUFiO0FBQ0EsVUFBSSxXQUFKLEVBQWlCO0FBQ2YscUJBQWMsSUFBSSxDQUFMLEdBQVcsQ0FBWCxTQUFxQixDQUFsQztBQUNEO0FBQ0Qsc0JBQWMsU0FBZCxHQUEwQixVQUExQixHQUF1QyxTQUF2QztBQUNBLGdCQUFVLElBQVYsQ0FBZSxRQUFmO0FBQ0Q7QUFDRCxXQUFPLFNBQVA7QUFDRDtBQUNDOztBQUdBO0FBQ0YsTUFBTSxTQUFTLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQiwyRUFBMUIsRUFDbUIsT0FEbkIsQ0FBZjtBQUVBLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQixpREFBMUIsRUFBNkUsTUFBN0UsRUFBcUYsTUFBckY7QUFDQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsaUZBQTFCLEVBQ3FCLE9BRHJCLEVBQzhCLE1BRDlCO0FBRUU7QUFDRixxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsa0VBQTFCLEVBQ3FCLE1BRHJCLEVBQzZCLE1BRDdCLEVBQ3FDLElBRHJDO0FBRUU7QUFDRixNQUFNLGFBQWEsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLHlFQUExQixFQUFxRyxNQUFyRyxDQUFuQjtBQUNBLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQix1RUFBMUIsRUFBbUcsTUFBbkcsRUFBMkcsVUFBM0c7QUFDRTtBQUNGLE1BQU0sVUFBVSxtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsd0NBQTFCLEVBQW9FLE1BQXBFLENBQWhCO0FBQ0EscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLGtEQUExQixFQUE4RSxPQUE5RSxFQUF1RixPQUF2RjtBQUNFO0FBQ0YsTUFBTSxXQUFXLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQixzRUFBMUIsRUFBa0csTUFBbEcsQ0FBakI7QUFDQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIseUVBQTFCLEVBQXFHLE1BQXJHLEVBQTZHLFFBQTdHLEVBQXVILElBQXZIO0FBQ0U7QUFDRixNQUFNLGFBQWEsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEdBQTZCLE9BQU8sU0FBUCxLQUFxQixXQUFyQixHQUFtQyxTQUFuQyxHQUErQyxFQUE1RSx5QkFDbUIsTUFEbkIsRUFDMkIsRUFEM0IsRUFDK0IsSUFEL0IsQ0FBbkI7QUFFQSxNQUFNLGNBQWMsbUJBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEtBQTNCLEVBQ21CLEdBRG5CLENBQXBCO0FBRUU7QUFDRixNQUFNLHlCQUF5QixtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsdUVBQTFCLEVBQ21CLE1BRG5CLENBQS9CO0FBRUEscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLG9FQUExQixFQUNxQixNQURyQixFQUM2QixzQkFEN0I7QUFFRTtBQUNGLE1BQU0sc0JBQXNCLENBQUMsWUFBRCxFQUFlLElBQWYsRUFBcUIsYUFBckIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsS0FBbkQsRUFBMEQsTUFBMUQsRUFBa0UsSUFBbEUsRUFDMUIsS0FEMEIsRUFDbkIsSUFEbUIsRUFDYixLQURhLEVBQ04sS0FETSxFQUNDLE1BREQsQ0FBNUI7QUFFQSxNQUFNLGtCQUFrQixDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixFQUF5QyxtQkFBekMsRUFBOEQsZUFBOUQsRUFDdEIsbUJBRHNCLEVBQ0QsYUFEQyxFQUNjLHlCQURkLEVBQ3lDLFNBRHpDLEVBQ29ELFNBRHBELEVBQytELFNBRC9ELEVBRXRCLE1BRnNCLEVBRWQsMEJBRmMsRUFFYyxhQUZkLENBQXhCO0FBR0U7QUFDRixNQUFNLFFBQVEsQ0FBQyxXQUFELEVBQ1osYUFEWSxFQUNHLE9BREgsRUFDWSxLQURaLEVBQ21CLFdBRG5CLEVBQ2dDLFFBRGhDLEVBQzBDLFVBRDFDLEVBQ3NELFFBRHRELEVBQ2dFLFFBRGhFLEVBQzBFLFVBRDFFLEVBQ3NGLE9BRHRGLEVBQytGLE9BRC9GLEVBQ3dHLE9BRHhHLEVBQ2lILFNBRGpILEVBQzRILE9BRDVILEVBQ3FJLE9BRHJJLEVBQzhJLFNBRDlJLEVBQ3lKLE9BRHpKLEVBQ2tLLE9BRGxLLEVBQzJLLE9BRDNLLEVBQ29MLFNBRHBMLEVBQytMLFNBRC9MLEVBQzBNLFNBRDFNLEVBQ3FOLE9BRHJOLEVBRVosUUFGWSxFQUVGLE9BRkUsRUFFTyxTQUZQLEVBRWtCLFNBRmxCLEVBRTZCLEtBRjdCLEVBRW9DLGFBRnBDLEVBRW1ELGFBRm5ELEVBRWtFLGFBRmxFLEVBRWlGLFFBRmpGLEVBRTJGLFFBRjNGLEVBRXFHLGFBRnJHLEVBRW9ILFNBRnBILEVBRStILFdBRi9ILEVBR1osU0FIWSxFQUdELFNBSEMsRUFHVSxVQUhWLEVBR3NCLFNBSHRCLEVBR2lDLFdBSGpDLEVBRzhDLGFBSDlDLEVBRzZELFNBSDdELEVBR3dFLFFBSHhFLEVBR2tGLE9BSGxGLEVBRzJGLFdBSDNGLEVBR3dHLFNBSHhHLEVBR21ILGFBSG5ILEVBR2tJLFdBSGxJLEVBRytJLFVBSC9JLEVBRzJKLEtBSDNKLEVBR2tLLEtBSGxLLEVBR3lLLEtBSHpLLEVBR2dMLE1BSGhMLEVBR3dMLFNBSHhMLEVBR21NLGNBSG5NLEVBR21OLGFBSG5OLEVBR2tPLFFBSGxPLEVBRzRPLFFBSDVPLEVBR3NQLFNBSHRQLEVBR2lRLFFBSGpRLEVBRzJRLFNBSDNRLEVBR3NSLGFBSHRSLEVBR3FTLGFBSHJTLEVBR29ULG9CQUhwVCxFQUlaLFVBSlksRUFJQSxVQUpBLEVBSVksU0FKWixFQUl1QixTQUp2QixFQUlrQyxVQUpsQyxFQUk4QyxPQUo5QyxFQUl1RCxpQkFKdkQsRUFJMEUsZ0JBSjFFLEVBS1osUUFMWSxFQUtGLFFBTEUsRUFLUSxVQUxSLEVBS29CLDhCQUxwQixFQUtvRCxRQUxwRCxDQUFkOztBQVFBLE1BQU0sV0FBVztBQUNmLFdBQU8sRUFBRSxVQUFVLFdBQVosRUFBeUIsT0FBTyxJQUFoQyxFQUFzQyxNQUFNLFVBQTVDLEVBQXdELEtBQUssV0FBN0QsRUFEUTtBQUVmLFdBQU8sRUFBRSxVQUFVLE9BQVosRUFBcUIsT0FBTyxJQUE1QixFQUFrQyxNQUFNLGVBQXhDLEVBQXlELEtBQUssbUJBQTlELEVBRlE7QUFHZixXQUFPLEVBQUUsVUFBVSxPQUFaLEVBQXFCLE9BQU8sS0FBNUIsRUFBbUMsTUFBTSxLQUF6QyxFQUhRO0FBSWYsV0FBTyxFQUFFLFVBQVUsT0FBWixFQUFxQixPQUFPLE9BQTVCLEVBQXFDLE1BQU0sUUFBM0MsRUFKUTtBQUtmLFdBQU8sRUFBRSxVQUFVLE9BQVosRUFBcUIsT0FBTyxJQUE1QixFQUFrQyxNQUFNLE9BQXhDLEVBTFEsRUFLNEM7QUFDM0QsV0FBTyxFQUFFLFVBQVUsT0FBWixFQUFxQixPQUFPLE9BQTVCLEVBQXFDLE1BQU0sVUFBM0MsRUFOUSxFQU1pRDtBQUNoRSxXQUFPLEVBQUUsVUFBVSxPQUFaLEVBQXFCLE9BQU8sVUFBNUIsRUFBd0MsTUFBTSxNQUE5QyxFQVBRLEVBT2dEO0FBQy9ELFdBQU8sRUFBRSxVQUFVLE9BQVosRUFBcUIsT0FBTyxVQUE1QixFQUF3QyxNQUFNLHNCQUE5QztBQVJRLEdBQWpCO0FBVUE7QUFDRTtBQUNGLE1BQU0sWUFBWTtBQUNoQixZQURnQixvQkFDUCxLQURPLEVBQ0E7QUFDZCxhQUFPLFNBQVMsT0FBTyxLQUF2QjtBQUNELEtBSGU7QUFJaEIsYUFKZ0IscUJBSU4sS0FKTSxFQUlDO0FBQ2YsYUFBTyxNQUFNLE1BQU4sSUFBZ0IsTUFBTSxVQUE3QjtBQUNELEtBTmU7QUFPaEIsa0JBUGdCLDBCQU9ELEtBUEMsRUFPTTtBQUNwQixVQUFJLE1BQU0sY0FBVixFQUEwQjtBQUN4QixjQUFNLGNBQU47QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNLFdBQU4sR0FBb0IsS0FBcEI7QUFDRDtBQUNGLEtBYmU7QUFjaEIsbUJBZGdCLDJCQWNBLEtBZEEsRUFjTztBQUNyQixVQUFJLE1BQU0sZUFBVixFQUEyQjtBQUN6QixjQUFNLGVBQU47QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNLFlBQU4sR0FBcUIsSUFBckI7QUFDRDtBQUNGLEtBcEJlO0FBcUJoQixjQXJCZ0Isc0JBcUJMLE9BckJLLEVBcUJJLElBckJKLEVBcUJVLE9BckJWLEVBcUJtQjtBQUNqQyxVQUFJLFFBQVEsZ0JBQVosRUFBOEI7QUFDNUIsZ0JBQVEsZ0JBQVIsQ0FBeUIsSUFBekIsRUFBK0IsT0FBL0IsRUFBd0MsS0FBeEMsRUFENEIsQ0FDcUI7QUFDbEQsT0FGRCxNQUVPLElBQUksUUFBUSxXQUFaLEVBQXlCO0FBQzlCLGdCQUFRLFdBQVIsUUFBeUIsSUFBekIsRUFBaUMsT0FBakMsRUFEOEIsQ0FDYztBQUM3QyxPQUZNLE1BRUE7QUFDTCx1QkFBYSxJQUFiLElBQXVCLE9BQXZCLENBREssQ0FDNEI7QUFDbEM7QUFDRixLQTdCZTtBQThCaEIsaUJBOUJnQix5QkE4QkYsT0E5QkUsRUE4Qk8sSUE5QlAsRUE4QmEsT0E5QmIsRUE4QnNCO0FBQ3BDLFVBQUksUUFBUSxtQkFBWixFQUFpQztBQUMvQixnQkFBUSxtQkFBUixDQUE0QixJQUE1QixFQUFrQyxPQUFsQyxFQUEyQyxLQUEzQyxFQUQrQixDQUNvQjtBQUNwRCxPQUZELE1BRU8sSUFBSSxRQUFRLFdBQVosRUFBeUI7QUFDOUIsZ0JBQVEsV0FBUixRQUF5QixJQUF6QixFQUFpQyxPQUFqQyxFQUQ4QixDQUNhO0FBQzVDLE9BRk0sTUFFQTtBQUNMLHVCQUFhLElBQWIsSUFBdUIsSUFBdkIsQ0FESyxDQUN3QjtBQUM5QjtBQUNGO0FBdENlLEdBQWxCO0FBd0NBO0FBQ0U7QUFDRixNQUFNLFVBQVU7QUFDZCxVQURjLGtCQUNQLEdBRE8sRUFDRjtBQUNWLGFBQU8sU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQVA7QUFDRCxLQUhhO0FBSWQsWUFKYyxvQkFJTCxHQUpLLEVBSUE7QUFDWixhQUFPLFNBQVMsY0FBVCxDQUF3QixHQUF4QixDQUFQO0FBQ0QsS0FOYTtBQU9kLFVBUGMsa0JBT1AsUUFQTyxFQU9HO0FBQ2YsYUFBTyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBUDtBQUNEO0FBVGEsR0FBaEI7QUFXRTtBQUNGLE1BQU0sa0JBQWtCO0FBQ3RCLFdBRHNCLG1CQUNkLEtBRGMsRUFDUDtBQUNiLFVBQU0sY0FBYyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBcEI7QUFDQTs7O0FBR0EsVUFBTSxxQkFBcUIsUUFBUSxRQUFSLENBQWlCLFdBQWpCLENBQTNCO0FBTGEsaUJBTTZCLENBQUMsU0FBUyxJQUFULENBQWMsU0FBZixFQUEwQixTQUFTLElBQVQsQ0FBYyxVQUF4QyxDQU43QjtBQUFBLFVBTU4sY0FOTTtBQUFBLFVBTVUsZUFOVjs7QUFPYix5QkFBbUIsU0FBbkIsaUJBQTJDLFlBQVksR0FBdkQ7QUFDQSx5QkFBbUIsS0FBbkIsQ0FBeUIsT0FBekIsR0FBbUMsT0FBbkM7QUFDQSx5QkFBbUIsS0FBbkIsQ0FBeUIsR0FBekIsR0FBa0MsTUFBTSxPQUFOLEdBQWdCLGNBQWhCLEdBQWlDLEVBQW5FO0FBQ0EseUJBQW1CLEtBQW5CLENBQXlCLElBQXpCLEdBQW1DLE1BQU0sT0FBTixHQUFnQixlQUFuRDtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ1QsS0FoQnFCO0FBaUJ0QixZQWpCc0Isc0JBaUJYO0FBQ1QsY0FBUSxRQUFSLENBQWlCLFdBQWpCLEVBQThCLEtBQTlCLENBQW9DLE9BQXBDLEdBQThDLE1BQTlDO0FBQ0Q7QUFuQnFCLEdBQXhCO0FBcUJBLE1BQU0sZUFBZTtBQUNuQixpQkFEbUIseUJBQ0wsS0FESyxFQUNFO0FBQ25CLFVBQU0sY0FBYyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBcEI7QUFDUTs7QUFFUixVQUFJLGdCQUFnQixFQUFwQjtBQUNBLFVBQUksaUJBQWlCLEVBQXJCO0FBQ0EsVUFBSSxZQUFZLFVBQVosQ0FBdUIsTUFBdkIsS0FBa0MsQ0FBdEMsRUFBeUM7QUFDdkMsWUFBSSxZQUFZLEdBQWhCLEVBQXFCO0FBQ25CLDBCQUFnQixZQUFZLEdBQTVCO0FBQ0EsMkJBQWlCLGFBQWEsWUFBYixDQUEwQixhQUExQixFQUF5QyxPQUF6QyxDQUFqQjtBQUNELFNBSEQsTUFHTztBQUNPO0FBQ1osMEJBQWdCLFlBQVksVUFBWixDQUF1QixDQUF2QixFQUEwQixTQUExQztBQUNBLDJCQUFpQixhQUFhLFlBQWIsQ0FBMEIsYUFBMUIsRUFBeUMsT0FBekMsQ0FBakI7QUFDRDtBQUNGLE9BVEQsTUFTTztBQUNLO0FBQ1Ysd0JBQWdCLFlBQVksVUFBWixDQUF1QixDQUF2QixFQUEwQixTQUExQztBQUNBLHlCQUFpQixhQUFhLFlBQWIsQ0FBMEIsYUFBMUIsRUFBeUMsT0FBekMsQ0FBakI7QUFDRDtBQUNELFVBQU0saUJBQWlCLFFBQVEsTUFBUixDQUFlLFVBQWYsQ0FBdkI7QUFDQSxVQUFNLFNBQVMsZUFBZSxLQUE5QjtBQUNBLFVBQU0sV0FBVyxlQUFlLGNBQWhDO0FBQ0E7QUFDQSxxQkFBZSxLQUFmLFFBQTBCLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsUUFBaEIsQ0FBMUIsR0FBc0QsY0FBdEQsR0FBdUUsT0FBTyxLQUFQLENBQWEsUUFBYixDQUF2RTtBQUNRO0FBQ0E7QUFDVCxLQTVCa0I7QUE2Qm5CLGdCQTdCbUIsd0JBNkJOLE1BN0JNLEVBNkJFLE9BN0JGLEVBNkJXO0FBQzVCLFVBQUksZUFBZSxFQUFuQjtBQUNBLFVBQUksWUFBWSxPQUFoQixFQUF5QjtBQUN2QixpQ0FBdUIsTUFBdkI7QUFDRDtBQUNELFVBQUksWUFBWSxPQUFoQixFQUF5QjtBQUN2Qix1QkFBZSxVQUFVLE1BQVYsQ0FBZjtBQUNEO0FBQ0QsVUFBSSxZQUFZLFdBQWhCLEVBQTZCO0FBQzNCLHVCQUFlLE1BQWY7QUFDRDtBQUNELGFBQU8sWUFBUDtBQUNEO0FBekNrQixHQUFyQjtBQTJDQSxNQUFNLGNBQWM7QUFDbEIsbUJBRGtCLDJCQUNGLEdBREUsRUFDRztBQUNuQixVQUFNLGdCQUFnQixRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQXRCO0FBQ0Esb0JBQWMsRUFBZCxlQUE2QixHQUE3QjtBQUNBLGNBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxNQUF2QyxHQUFnRCxPQUFoRDtBQUNBLGNBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxXQUFqQyxDQUE2QyxhQUE3QztBQUNBLGFBQU8sYUFBUDtBQUNELEtBUGlCO0FBUWxCLGdCQVJrQix3QkFRTCxHQVJLLEVBUUE7QUFDaEIsVUFBTSxpQkFBaUIsWUFBWSxlQUFaLENBQTRCLEdBQTVCLENBQXZCO0FBQ007QUFDTixVQUFNLFVBQVUsU0FBUyxHQUFULEVBQWMsSUFBOUI7QUFDQSxVQUFNLFlBQVksUUFBUSxNQUExQjtBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFwQixFQUErQixLQUFLLENBQXBDLEVBQXVDO0FBQ3JDLFlBQU0sYUFBYSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQW5CO0FBQ0EsbUJBQVcsU0FBWCxHQUF1QixXQUF2QjtBQUNBLFlBQU0sVUFBVSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQWhCO0FBQ0EsZ0JBQVEsR0FBUixHQUFjLFFBQVEsQ0FBUixDQUFkO0FBQ0EsZ0JBQVEsU0FBUixHQUFvQixLQUFwQjtBQUNBLGdCQUFRLE9BQVIsR0FBa0IsYUFBYSxhQUEvQjtBQUNBLGdCQUFRLFdBQVIsR0FBc0IsZ0JBQWdCLE9BQXRDO0FBQ0EsZ0JBQVEsVUFBUixHQUFxQixnQkFBZ0IsUUFBckM7O0FBRUEsbUJBQVcsV0FBWCxDQUF1QixPQUF2QjtBQUNBLHVCQUFlLFdBQWYsQ0FBMkIsVUFBM0I7QUFDRDtBQUNGLEtBMUJpQjtBQTJCbEIsbUJBM0JrQiwyQkEyQkYsR0EzQkUsRUEyQkc7QUFDbkIsVUFBTSxpQkFBaUIsWUFBWSxlQUFaLENBQTRCLEdBQTVCLENBQXZCO0FBQ0EsVUFBTSxVQUFVLFNBQVMsR0FBVCxFQUFjLElBQTlCO0FBQ0EsVUFBTSxZQUFZLFFBQVEsTUFBMUI7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBcEIsRUFBK0IsS0FBSyxDQUFwQyxFQUF1QztBQUNyQyxZQUFNLFVBQVUsUUFBUSxNQUFSLENBQWUsTUFBZixDQUFoQjtBQUNBLGdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLG9DQUF4QjtBQUNBLGdCQUFRLFNBQVIscUJBQW9DLFVBQVUsUUFBUSxDQUFSLENBQVYsQ0FBcEMsaUNBQW1GLFFBQVEsQ0FBUixDQUFuRjtBQUNBLFlBQUksU0FBUyxHQUFULEVBQWMsR0FBbEIsRUFBdUI7QUFDckIsa0JBQVEsU0FBUixxQkFBb0MsVUFBVSxRQUFRLENBQVIsQ0FBVixDQUFwQyxpQ0FBbUYsU0FBUyxHQUFULEVBQWMsR0FBZCxDQUFrQixDQUFsQixDQUFuRjtBQUNBLGtCQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsTUFBdkMsR0FBZ0QsTUFBaEQ7QUFDRDtBQUNELGdCQUFRLE9BQVIsR0FBa0IsYUFBYSxhQUEvQjtBQUNBLGdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLGdEQUF4QjtBQUNBLHVCQUFlLFdBQWYsQ0FBMkIsT0FBM0I7QUFDRDtBQUNGLEtBM0NpQjtBQTRDbEIsbUJBNUNrQiwyQkE0Q0YsR0E1Q0UsRUE0Q0c7QUFDbkIsVUFBTSxpQkFBaUIsWUFBWSxlQUFaLENBQTRCLEdBQTVCLENBQXZCO0FBQ0EsVUFBTSxVQUFVLFNBQVMsR0FBVCxFQUFjLElBQTlCO0FBQ0EsVUFBTSxVQUFVLFNBQVMsR0FBVCxFQUFjLEdBQTlCO0FBQ0EsVUFBTSxZQUFZLFFBQVEsTUFBMUI7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBcEIsRUFBK0IsS0FBSyxDQUFwQyxFQUF1QztBQUNyQyxZQUFNLFVBQVUsUUFBUSxNQUFSLENBQWUsS0FBZixDQUFoQjtBQUNBLGdCQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsR0FBdUIsUUFBUSxDQUFSLENBQXZCO0FBQ0EsZ0JBQVEsR0FBUixHQUFjLFFBQVEsQ0FBUixDQUFkO0FBQ0EsZ0JBQVEsU0FBUixHQUFvQixLQUFwQjtBQUNBLGdCQUFRLE9BQVIsR0FBa0IsYUFBYSxhQUEvQjtBQUNBLGdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLGlEQUF4QjtBQUNBLHVCQUFlLFdBQWYsQ0FBMkIsT0FBM0I7QUFDRDtBQUNGO0FBMURpQixHQUFwQjtBQTREQSxNQUFNLFlBQVk7QUFDaEIsU0FEZ0IsbUJBQ1I7QUFDTixVQUFNLGVBQWUsUUFBUSxRQUFSLENBQWlCLGNBQWpCLENBQXJCO0FBQ0EsbUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNBLFVBQU0saUJBQWlCLGFBQWEsVUFBcEM7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsTUFBTSxlQUFlLE1BQXJDLEVBQTZDLElBQUksR0FBakQsRUFBc0QsS0FBSyxDQUEzRCxFQUE4RDtBQUNwRDtBQUNSLHVCQUFlLENBQWYsRUFBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsR0FBa0MsTUFBbEM7QUFDRDtBQUNGO0FBVGUsR0FBbEI7QUFXQSxNQUFNLGFBQWE7QUFDakIsUUFEaUIsZ0JBQ1osS0FEWSxFQUNMO0FBQ1YsZ0JBQVUsS0FBVjtBQUNBLFVBQU0sY0FBYyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBcEI7QUFDQSxjQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsT0FBdkMsR0FBaUQsT0FBakQ7QUFDQSxjQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsS0FBdkMsR0FBK0MsUUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixLQUEzQixDQUFpQyxLQUFoRjtBQUNBLFVBQU0sV0FBVyxZQUFZLFVBQVosQ0FBdUIsQ0FBdkIsRUFBMEIsU0FBM0M7QUFDQSxVQUFNLFVBQVUsWUFBWSxVQUFaLENBQXVCLENBQXZCLEVBQTBCLFNBQTFDO0FBQ0EsVUFBSSxRQUFRLE1BQVIsY0FBMEIsT0FBMUIsQ0FBSixFQUEwQztBQUN4QyxnQkFBUSxNQUFSLGNBQTBCLE9BQTFCLEVBQXFDLEtBQXJDLENBQTJDLE9BQTNDLEdBQXFELE9BQXJEO0FBQ0EsWUFBSSxZQUFZLE9BQWhCLEVBQXlCLFFBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxNQUF2QyxHQUFnRCxNQUFoRCxDQUF6QixLQUNLLFFBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxNQUF2QyxHQUFnRCxPQUFoRDtBQUNMO0FBQ0Q7QUFDRCxVQUFJLGFBQWEsT0FBakIsRUFBMEI7QUFDeEIsb0JBQVksZUFBWixDQUE0QixPQUE1QjtBQUNELE9BRkQsTUFFTyxJQUFJLGFBQWEsT0FBakIsRUFBMEI7QUFDL0Isb0JBQVksWUFBWixDQUF5QixPQUF6QjtBQUNELE9BRk0sTUFFQSxJQUFJLGFBQWEsV0FBakIsRUFBOEI7QUFDbkMsb0JBQVksZUFBWixDQUE0QixPQUE1QjtBQUNEO0FBQ0Y7QUFyQmdCLEdBQW5COztBQTBCQSxNQUFNLGFBQWE7QUFDakIsZUFBVyxhQURNO0FBRWpCLFFBRmlCLGtCQUVWO0FBQ0M7QUFDTixVQUFNLFdBQVcsUUFBUSxNQUFSLENBQWUsS0FBZixDQUFqQjtBQUNBLGVBQVMsU0FBVCxpR0FBNkYsU0FBN0Y7QUFDQSxlQUFTLEVBQVQsR0FBYyxXQUFXLFNBQXpCO0FBQ0EsVUFBTSxhQUFhLE9BQU8sSUFBUCxDQUFZLFFBQVosRUFBc0IsTUFBekM7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksVUFBcEIsRUFBZ0MsS0FBSyxDQUFyQyxFQUF3QztBQUN0QyxZQUFNLFVBQVUsT0FBTyxJQUFQLENBQVksUUFBWixFQUFzQixDQUF0QixDQUFoQjtBQUNBLFlBQU0sWUFBWSxTQUFTLE9BQVQsRUFBa0IsS0FBcEM7QUFDQSxZQUFNLFdBQVcsU0FBUyxPQUFULEVBQWtCLFFBQW5DO0FBQ0E7QUFDQSxZQUFNLFdBQVcsV0FBVyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCLFdBQVcsSUFBdEMsRUFBNEMsT0FBNUMsRUFBcUQsUUFBckQsQ0FBakI7QUFDQSxpQkFBUyxXQUFULENBQXFCLFFBQXJCO0FBQ0Q7QUFDSztBQUNOLFVBQU0sV0FBVyxRQUFRLE1BQVIsQ0FBZSxNQUFmLENBQWpCO0FBQ0EsZUFBUyxTQUFULEdBQXFCLEtBQXJCO0FBQ0EsZUFBUyxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsZUFBUyxFQUFULEdBQWMsU0FBZDtBQUNBLGVBQVMsT0FBVCxHQUFtQixXQUFXLEtBQTlCO0FBQ0EsZUFBUyxLQUFULENBQWUsT0FBZixHQUF5QixnQkFBekI7QUFDQSxlQUFTLFdBQVQsQ0FBcUIsUUFBckI7QUFDTTtBQUNOLFVBQU0sYUFBYSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQW5CO0FBQ0EsaUJBQVcsRUFBWCxHQUFnQixjQUFoQjtBQUNBLGVBQVMsV0FBVCxDQUFxQixVQUFyQjtBQUNNO0FBQ04sVUFBTSxZQUFZLFFBQVEsTUFBUixDQUFlLE9BQWYsQ0FBbEI7QUFDQSxnQkFBVSxTQUFWO0FBaUJBLGVBQVMsV0FBVCxDQUFxQixTQUFyQjtBQUNBLGFBQU8sUUFBUDtBQUNELEtBakRnQjtBQWtEakIsUUFsRGlCLGdCQWtEWixLQWxEWSxFQWtETCxJQWxESyxFQWtEQyxLQWxERCxFQWtEUSxPQWxEUixFQWtEaUI7QUFDaEMsVUFBTSxVQUFVLFFBQVEsTUFBUixDQUFlLE1BQWYsQ0FBaEI7QUFDQSxjQUFRLEVBQVIsR0FBYSxLQUFiO0FBQ0EsY0FBUSxTQUFSLEdBQW9CLFNBQXBCO0FBQ0EsVUFBTSwrQ0FBMkMsS0FBM0MsbUJBQThELE9BQTlELFNBQXlFLEtBQXpFLFNBQU47QUFDQSxjQUFRLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxjQUFRLFNBQVIsR0FBb0IsVUFBcEI7QUFDQSxhQUFPLE9BQVA7QUFDRDtBQTNEZ0IsR0FBbkI7O0FBK0RBLE1BQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFlBQVksSUFBakQsRUFBdUQ7QUFDakQ7O0FBRUosYUFBUyxTQUFULENBQW1CLE9BQU8sUUFBMUIsSUFBc0MsTUFBTSxTQUFOLENBQWdCLE9BQU8sUUFBdkIsQ0FBdEM7QUFDQSxtQkFBZSxTQUFmLENBQXlCLE9BQU8sUUFBaEMsSUFBNEMsTUFBTSxTQUFOLENBQWdCLE9BQU8sUUFBdkIsQ0FBNUM7QUFDQSxRQUFNLGFBQWEsTUFBTSxJQUFOLENBQVcsU0FBUyxvQkFBVCxDQUE4QixVQUE5QixDQUFYLENBQW5COztBQUVJOzs7O0FBSUE7QUFDQTs7O0FBR0o7QUFDQTs7O0FBR0E7QUFDQTs7OztBQUlBLFFBQU0sa0JBQWtCLFdBQVcsSUFBWCxFQUF4QjtBQUNBLFFBQUksU0FBUyxjQUFULENBQXdCLGdCQUF4QixNQUE4QyxJQUFsRCxFQUF3RDtBQUN0RCxlQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDLEtBQTFDLENBQWdELFFBQWhELEdBQTJELFFBQTNEO0FBQ0Q7QUFDRDtBQTVCcUQ7QUFBQTtBQUFBOztBQUFBO0FBNkJyRCwyQkFBNEIsVUFBNUIsOEhBQXdDO0FBQUEsWUFBN0IsYUFBNkI7O0FBQ2hDO0FBQ04sc0JBQWMsVUFBZCxDQUF5QixZQUF6QixDQUFzQyxlQUF0QyxFQUF1RCxhQUF2RDtBQUNEO0FBaENvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUN0RDtBQUNGLENBM1lEO0FBNFlBLElBQU0sWUFBWSxZQUFsQjtBQUNBLElBQUksU0FBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBlc2xpbnQgbGluZWJyZWFrLXN0eWxlOiBbXCJlcnJvclwiLCBcIndpbmRvd3NcIl0gKi9cclxuXHJcblxyXG5jb25zdCBmdW4gPSAoaW1hZ2VwYXRoID0gJycpID0+IHtcclxuICBjb25zdCB2ZXJzaW9uTm8gPSAnNC4yLjInO1xyXG4gICAgLyogQWRkcmVzcyBmdW5jdGlvblxyXG4gICAgICogc3RhcnROdW1iZXI6IG51bWJlciwgaW5kaWNhdGluZyB0aGUgc3RhcnQgbnVtYmVyO1xyXG4gICAgICogbGVuZ3RoQXJyYXk6IG51bWJlciwgaW5kaWNhdGluZyB0aGUgYWRkckFycmF5IGxlbmd0aDtcclxuICAgICAqIHN0clByZWZpeDogc3RyaW5nLCBhZGRyZXNzIFByZWZpeDtcclxuICAgICAqIHN0clN1ZmZpeDogc3RyaW5nLCBhZGRyZXNzIFN1ZmZpeDtcclxuICAgICAqIGxlYWRpbmdaZXJvOiBib29sZW4sIHRydWUgZm9yIGxlYWRpbmcgemVybyBpbiBudW1iZXI7XHJcbiAgICAgKiBhZGRyQXJyYXk6IGFycmF5LCBhZGRyZXNzIGFycmF5LCBkZWZhdWx0IGZvciBlbXB0eTtcclxuICAgICAqL1xyXG4gICAgLy8g5Yib5bu66KGo5oOF5YyF5pWw57uE55qE5Ye95pWwXHJcbiAgZnVuY3Rpb24gZW1BZGRyQXJyYXlIYW5kbGVyKHN0YXJ0TnVtYmVyLCBsZW5ndGhBcnJheSwgc3RyUHJlZml4LFxyXG4gICAgc3RyU3VmZml4LCBhZGRyQXJyYXkgPSBbXSwgbGVhZGluZ1plcm8gPSBmYWxzZSkge1xyXG4gICAgbGV0IGFkZHJUZW1wID0gJyc7XHJcbiAgICBsZXQgYWRkck51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBqID0gc3RhcnROdW1iZXI7IGogPCBsZW5ndGhBcnJheTsgaiArPSAxKSB7XHJcbiAgICAgIGFkZHJOdW1iZXIgPSBqO1xyXG4gICAgICBpZiAobGVhZGluZ1plcm8pIHtcclxuICAgICAgICBhZGRyTnVtYmVyID0gKGogPiA5KSA/IChqKSA6IChgMCR7an1gKTtcclxuICAgICAgfVxyXG4gICAgICBhZGRyVGVtcCA9IGAke3N0clByZWZpeH0ke2FkZHJOdW1iZXJ9JHtzdHJTdWZmaXh9YDtcclxuICAgICAgYWRkckFycmF5LnB1c2goYWRkclRlbXApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkZHJBcnJheTtcclxuICB9XHJcbiAgICAvKiDooajmg4XljIXlnLDlnYDmlbDmja4gKi9cclxuXHJcblxyXG4gICAgLy8gQuermVxyXG4gIGNvbnN0IGJpbGlFTSA9IGVtQWRkckFycmF5SGFuZGxlcigxLCAxNywgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9CaWxpQmlsaS8yMjMzICgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKS5naWYnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTQsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvQmlsaWJpbGkveGRzLycsICcucG5nJywgYmlsaUVNKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMCwgMTQsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQmlsaUJpbGkvYmlsaWJpbGlUViAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnKS5wbmcnLCBiaWxpRU0pO1xyXG4gICAgLy8gdG9yYemFsVxyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCAxNCwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC90b3JhLzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcuanBnJywgYmlsaUVNLCB0cnVlKTtcclxuICAgIC8vIOmYv+WNoeaelyBmcm9tIOaRh+abs+eZvuWQiFxyXG4gIGNvbnN0IEFrYXJpU21pbGUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMjEsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvRHluYW1pYy9ha2FyaScsICcuZ2lmJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDcyLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL2FrYXJpL2FrYXJpJywgJy5wbmcnLCBBa2FyaVNtaWxlKTtcclxuICAgIC8vIE5ldyBHYW1lIGtm5omp5bGVXHJcbiAgY29uc3QgTmV3R2FtZSA9IGVtQWRkckFycmF5SGFuZGxlcigyLCA2NCwgJ2h0dHA6Ly9uZWtvaGFuZC5tb2Uvc3BzbWlsZS8wMVNvcmEvMHh4JywgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMjAsICdodHRwOi8vc3MubmVrb2hhbmQubW9lL0Fzb3VyY2UvRW1vdGlvblBpYy9LRkVNICgnLCAnKS5naWYnLCBOZXdHYW1lKTtcclxuICAgIC8vIEFDRlVOXHJcbiAgY29uc3QgQUNTbWlsZTQgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNTEsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQUNGVU4vTmV3LycsICcucG5nJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQwLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0FDRlVOL05pbWluZy8nLCAnLmdpZicsIEFDU21pbGU0LCB0cnVlKTtcclxuICAgIC8vIEtGIOWGhee9rlxyXG4gIGNvbnN0IEtGU21pbGVVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDksIGAke3R5cGVvZiBpbWFnZXBhdGggIT09ICd1bmRlZmluZWQnID8gaW1hZ2VwYXRoIDogJyd9L3Bvc3Qvc21pbGUvZW0vZW1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5naWYnLCBbXSwgdHJ1ZSk7XHJcbiAgY29uc3QgS0ZTbWlsZUNvZGUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMTAsIDU4LCAnW3M6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXScpO1xyXG4gICAgLy8gbG92ZWxpdmXkuJPnlKjlsI9cclxuICBjb25zdCBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQxLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAyL1NtYWxsL0xvdmVsaXZlMm5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcucG5nJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQxLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL1NtYWxsL0xvdmVsaXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycsIExvdmVsaXZlU21hbGx0YXJnZXRVUkwpO1xyXG4gICAgLy8ga2blv6vmjbfku6PnoIEo6ZyA6KaB5pS55YaZ6Kej5p6E6LWL5YC8KVxyXG4gIGNvbnN0IGZ1bmN0aW9uRGVzY3JpcHRpb24gPSBbJ+WHuuWUrui0tHNlbGw95ZSu5Lu3JywgJ+W8leeUqCcsICfpmpDol49oaWRlPeelnuenmOetiee6pycsICfmj5LlhaXku6PnoIEnLCAn5Yig6Zmk57q/JywgJ+i3kemprOeBrycsICfmloflrZfpopzoibInLCAn57KX5L2TJyxcclxuICAgICfkuIvliJLnur8nLCAn5pac5L2TJywgJ+awtOW5s+e6vycsICfog4zmma/oibInLCAn5o+S5YWl5Zu+54mHJ107XHJcbiAgY29uc3QgZGVmYXVsdEZ1bmN0aW9uID0gWydbc2VsbD0xMDBdWy9zZWxsXScsICdbcXVvdGVdWy9xdW90ZV0nLCAnW2hpZGU9MTAwXVsvaGlkZV0nLCAnW2NvZGVdWy9jb2RlXScsXHJcbiAgICAnW3N0cmlrZV1bL3N0cmlrZV0nLCAnW2ZseV1bL2ZseV0nLCAnW2NvbG9yPSMwMEZGMDBdWy9jb2xvcl0nLCAnW2JdWy9iXScsICdbdV1bL3VdJywgJ1tpXVsvaV0nLFxyXG4gICAgJ1tocl0nLCAnW2JhY2tjb2xvcj1dWy9iYWNrY29sb3JdJywgJ1tpbWddWy9pbWddJ107XHJcbiAgICAvLyDpopzmloflrZdcclxuICBjb25zdCBlbW9qaSA9IFsnKOKXj+ODuyA4IOODu+KXjyknLFxyXG4gICAgJ+KVsCjguZHil5Ug4pa9IOKXleC5kSnila8nLCAnKOOCnc+J44O7KScsICfjgJzimarimaonLCAnKO++n9CU776f4omh776f0JTvvp8pJywgJyjvvL5v77y+Ke++iScsICcofHx8776f0JTvvp8pJywgJyhgzrXCtCApJywgJyjilazvvp/QtO++nyknLCAnKHx8fO++n9C0776fKScsICco77+j4oiH77+jKScsICco77+jM++/oyknLCAnKO+/o++9sO+/oyknLCAnKO+/oyAuIO+/oyknLCAnKO+/o++4v++/oyknLCAnKO+/o++4tu+/oyknLCAnKCrCtM+JYCopJywgJyjjg7vPieODuyknLCAnKOKMkuKWveKMkiknLCAnKO+/o+KWve+/o++8iScsICcoPeODu8+J44O7PSknLCAnKO+9gOODu8+J44O7wrQpJywgJyjjgJzvv6PilrPvv6Mp44CcJywgJyjvvaXiiIDvvaUpJyxcclxuICAgICcowrDiiIDCsCnvvoknLCAnKO+/ozPvv6MpJywgJ+KVrijvv6Pilr3vv6Mp4pWtJywgJyggwrRf44Kd772AKScsICfjga7jg67jga4nLCAnKO++idiCPCDguZHvvInor7blmL/imIbvvZ4nLCAnKCZsdDtfJmx0OyknLCAnKCZndDtfJmd0OyknLCAnKDvCrF/CrCknLCAnKOKWlOKWoeKWlCkvJywgJyjvvp/QlO++n+KJoe++n9C0776fKSE/JywgJ86jKO++n9C0776fOyknLCAnzqMoIO+/o+KWoe+/o3x8KScsXHJcbiAgICAnKMK077ybz4nvvJtgKScsICfvvIgvVNCUVCkvJywgJyhe44O7z4njg7teICknLCAnKO+9oe+9pc+J772l772hKScsICco4peP77+jKO+9tCnvv6Pil48pJywgJ861Pc61PSjjg47iiafiiIfiiaYp44OOJywgJyjCtO+9pV/vvaVgKScsICcoLV8tIyknLCAn77yI77+j44G477+j77yJJywgJyjvv6POtSgj77+jKSDOoycsICfjg70oYNCUwrQp776JJywgJyjila/CsOWPo8KwKeKVryjilLTigJTilLQnLCAn77yIIy1fLSnilK/ilIHilK8nLCAnXyg6M+OAjeKIoClfJywgJyjnrJEpJywgJyjmsZcpJywgJyjms6MpJywgJyjoi6bnrJEpJywgJyjCtOODu8+J44O7YCknLCAnKOKVr8Kw4pahwrDvvInila/vuLUg4pS74pSB4pS7JywgJyjila/igLXilqHigLIp4pWv77i14pS74pSB4pS7JywgJyggwrTPgWApJywgJygg776fz4nvvp8pJywgJyhv776fz4nvvp9vKScsICco44CAXs+JXiknLCAnKO+9oeKXleKIgOKXle+9oSknLCAnLygg4peV4oC/4oC/4peVIClcXFxcJywgJ8612akoIMK64oiAwrogKdu20LcnLCAnKO+/o861KCPvv6Mp4piG4pWw4pWuKO+/o+KWve+/oy8vLyknLFxyXG4gICAgJ++8iOKXj8K0M++9gO+8iX7imaonLCAnXyg60LfjgI3iiKApXycsICfRhdC+0YDQvtGI0L4hJywgJ++8vCheb14p77yPJywgJyjigKLMheeBrOKAosyFICknLCAnKO++n9CU776fKScsICfjgb7jgaPjgZ/jgY/jgIHlsI/lrabnlJ/jga/mnIDpq5jjgaDjgZzvvIHvvIEnLCAnzrU9zrU9zrU94pSPKOOCnOODreOCnDsp4pSbJyxcclxuICAgICco77ybwrDjgbvCsCknLCAn4o6d4omn4o+d4o+d4omm4o6gJywgJ+ODvSjinL/vvp/ilr3vvp8p44OOJywgJ+eElOOBq+iInuOBhOS4iuOBjOOCi+OCueODkeODvOOCr+OCiOOAgemCquaCquOBqueVsOaAp+S6pOmam+OBq+OAgeWkqee9sOOCkuS4juOBiO+8gScsICd84oCiz4nigKJgKSddO1xyXG5cclxuXHJcbiAgY29uc3QgTWVudUxpc3QgPSB7XHJcbiAgICBpdGVtNDogeyBkYXRhdHlwZTogJ2ltYWdlTGluaycsIHRpdGxlOiAn5Zu65pyJJywgYWRkcjogS0ZTbWlsZVVSTCwgcmVmOiBLRlNtaWxlQ29kZSB9LFxyXG4gICAgaXRlbTE6IHsgZGF0YXR5cGU6ICdwbGFpbicsIHRpdGxlOiAn5b+r5o23JywgYWRkcjogZGVmYXVsdEZ1bmN0aW9uLCByZWY6IGZ1bmN0aW9uRGVzY3JpcHRpb24gfSxcclxuICAgIGl0ZW0yOiB7IGRhdGF0eXBlOiAncGxhaW4nLCB0aXRsZTogJ+minOaWh+WtlycsIGFkZHI6IGVtb2ppIH0sXHJcbiAgICBpdGVtNTogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdBQ0ZVTicsIGFkZHI6IEFDU21pbGU0IH0sXHJcbiAgICBpdGVtNjogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICfluLjnlKgnLCBhZGRyOiBOZXdHYW1lIH0sICAvL1xyXG4gICAgaXRlbTc6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQWthcmknLCBhZGRyOiBBa2FyaVNtaWxlIH0sIC8vIEFrYXJpXHJcbiAgICBpdGVtODogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdCaWxpQmlsaScsIGFkZHI6IGJpbGlFTSB9LCAvLyBC56uZXHJcbiAgICBpdGVtMzogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdMb3ZlTGl2ZScsIGFkZHI6IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgfSxcclxuICB9O1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduKi9cclxuICAgIC8qIEV2ZW50IOWHveaVsCAqL1xyXG4gIGNvbnN0IEV2ZW50VXRpbCA9IHtcclxuICAgIGdldEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgIHJldHVybiBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGFyZ2V0KGV2ZW50KSB7XHJcbiAgICAgIHJldHVybiBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBwcmV2ZW50RGVmYXVsdChldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7ICAvLyBET00yXHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJHt0eXBlfWAsIGhhbmRsZXIpOyAgLy8gSUVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50W2BvbiR7dHlwZX1gXSA9IGhhbmRsZXI7ICAvLyBET00gMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAvLyBET00yXHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoYG9uJHt0eXBlfWAsIGhhbmRsZXIpOyAvLyBJRVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRbYG9uJHt0eXBlfWBdID0gbnVsbDsgLy8gRE9NIDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24qL1xyXG4gICAgLyogRWxlbWVudCDlh73mlbAqL1xyXG4gIGNvbnN0IEVsZVV0aWwgPSB7XHJcbiAgICBjcmVhdGUoZWxlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0SUQoZWxlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGUpO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdChzZWxlY3Rvcikge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgICAvKiDmqKHlnZcqL1xyXG4gIGNvbnN0IG1vdXNlT3ZlckFjdGlvbiA9IHtcclxuICAgIHNob3dJbWcoZXZlbnQpIHtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgLyogaWYgKCFldmVudFRhcmdldC5zcmMpIHtcclxuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XHJcbiAgICAgIH0qL1xyXG4gICAgICBjb25zdCBsYXJnZVZpZXdDb250YWluZXIgPSBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKTtcclxuICAgICAgY29uc3QgW3Njcm9sbFRvcFZhbHVlLCBzY3JvbGxMZWZ0VmFsdWVdID0gW2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7ZXZlbnRUYXJnZXQuc3JjfSAvPmA7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgKyBzY3JvbGxUb3BWYWx1ZSArIDIwfXB4YDtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYICsgc2Nyb2xsTGVmdFZhbHVlfXB4YDtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhbZXZlbnQuY2xpZW50WSxldmVudC5jbGllbnRYXSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coW0VsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLnRvcCxcclxuICAgICAgICAgICAgICAvLyBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS5sZWZ0XSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coW2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdF0pO1xyXG4gICAgfSxcclxuICAgIGNsZWFySW1nKCkge1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGF0dGFjaEFjdGlvbiA9IHtcclxuICAgIGF0dGFjaEVtb3Rpb24oZXZlbnQpIHtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldCk7XHJcblxyXG4gICAgICBsZXQgYWRkcmVzc1RhcmdldCA9ICcnO1xyXG4gICAgICBsZXQgZW1vdGlvbkFkZHJlc3MgPSAnJztcclxuICAgICAgaWYgKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50VGFyZ2V0LnNyYykge1xyXG4gICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LnNyYztcclxuICAgICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAnaW1hZ2UnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1swXS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ3BsYWluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1swXS5ub2RlVmFsdWU7XHJcbiAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdwbGFpbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbGVjdFRleHRBcmVhID0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IG92YWx1ZSA9IHNlbGVjdFRleHRBcmVhLnZhbHVlO1xyXG4gICAgICBjb25zdCBzdGFydFBvcyA9IHNlbGVjdFRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAvLyBjb25zdCBlbmRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgIHNlbGVjdFRleHRBcmVhLnZhbHVlID0gYCR7b3ZhbHVlLnNsaWNlKDAsIHN0YXJ0UG9zKX0ke2Vtb3Rpb25BZGRyZXNzfSR7b3ZhbHVlLnNsaWNlKHN0YXJ0UG9zKX1gO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbW90aW9uQWRkcmVzcyk7XHJcbiAgICB9LFxyXG4gICAgYWRkcmVzc1BhcnNlKGFkZFN0ciwgcGF0dGVybikge1xyXG4gICAgICBsZXQgc3RyaW5nUmV0dXJuID0gJyc7XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gYFtpbWddJHthZGRTdHJ9Wy9pbWddYDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ3BsYWluJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGRlY29kZVVSSShhZGRTdHIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAnaW1hZ2VMaW5rJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGFkZFN0cjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RyaW5nUmV0dXJuO1xyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZUl0ZW1zID0ge1xyXG4gICAgY3JlYXRlQ29udGFpbmVyKGtleSkge1xyXG4gICAgICBjb25zdCBJdGVtQ29udGFpbmVyID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICBJdGVtQ29udGFpbmVyLmlkID0gYGVkZGllMzIke2tleX1gO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5hcHBlbmRDaGlsZChJdGVtQ29udGFpbmVyKTtcclxuICAgICAgcmV0dXJuIEl0ZW1Db250YWluZXI7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSW1hZ2VzKGtleSkge1xyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhNZW51TGlzdFtrZXldKTtcclxuICAgICAgY29uc3QgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgaW1nTGVuZ3RoID0gaW1nTGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW1nTGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCBkaXZFbGVtZW50ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gJ2NsaWNrSXRlbSc7XHJcbiAgICAgICAgY29uc3QgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICBpbWdJdGVtLnNyYyA9IGltZ0xpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAnRW1zJztcclxuICAgICAgICBpbWdJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICBpbWdJdGVtLm9ubW91c2VvdmVyID0gbW91c2VPdmVyQWN0aW9uLnNob3dJbWc7XHJcbiAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3V0ID0gbW91c2VPdmVyQWN0aW9uLmNsZWFySW1nO1xyXG5cclxuICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlUGxhaW5UZXh0KGtleSkge1xyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICBjb25zdCB0eHRMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCB0eHRMZW5ndGggPSB0eHRMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0eHRMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHR4dEl0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICAgIHR4dEl0ZW0uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcjsgbWFyZ2luOiAxMHB4IDEwcHg7JztcclxuICAgICAgICB0eHRJdGVtLmlubmVySFRNTCA9IGA8YSBkYXRhLXNpZ249JHtlbmNvZGVVUkkodHh0TGlzdFtrXSl9IGNsYXNzPSd0eHRCdG5FbW90aW9uJz4ke3R4dExpc3Rba119PC9hPmA7XHJcbiAgICAgICAgaWYgKE1lbnVMaXN0W2tleV0ucmVmKSB7XHJcbiAgICAgICAgICB0eHRJdGVtLmlubmVySFRNTCA9IGA8YSBkYXRhLXNpZ249JHtlbmNvZGVVUkkodHh0TGlzdFtrXSl9IGNsYXNzPSd0eHRCdG5FbW90aW9uJz4ke01lbnVMaXN0W2tleV0ucmVmW2tdfTwvYT5gO1xyXG4gICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0eHRJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICB0eHRJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7cGFkZGluZzogMTBweCAxMHB4OndpZHRoOiA1MHB4Oyc7XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHh0SXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZUxpbmsoa2V5KSB7XHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgIGNvbnN0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IHJlZkxpc3QgPSBNZW51TGlzdFtrZXldLnJlZjtcclxuICAgICAgY29uc3QgaW1nTGVuZ3RoID0gaW1nTGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW1nTGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCBpbWdJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ2ltZycpO1xyXG4gICAgICAgIGltZ0l0ZW0uZGF0YXNldC5saW5rID0gcmVmTGlzdFtrXTtcclxuICAgICAgICBpbWdJdGVtLnNyYyA9IGltZ0xpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAnRW1zJztcclxuICAgICAgICBpbWdJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICBpbWdJdGVtLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDUwcHggIWltcG9ydGFudDtoZWlnaHQ6IDUwcHggIWltcG9ydGFudDsnO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgY2xlYXJNZW51ID0ge1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZVdpbmRvdyA9IEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpO1xyXG4gICAgICB0b2dnbGVXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgY29uc3QgdG9nV2luQ2hpbGRyZW4gPSB0b2dnbGVXaW5kb3cuY2hpbGROb2RlcztcclxuICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHRvZ1dpbkNoaWxkcmVuLmxlbmd0aDsgaiA8IGxlbjsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2dXaW5DaGlsZHJlbltqXSk7XHJcbiAgICAgICAgdG9nV2luQ2hpbGRyZW5bal0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGV4cGFuZE1lbnUgPSB7XHJcbiAgICBpbml0KGV2ZW50KSB7XHJcbiAgICAgIGNsZWFyTWVudS5jbGVhcigpO1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUud2lkdGggPSBFbGVVdGlsLnNlbGVjdCgndGV4dGFyZWEnKS5zdHlsZS53aWR0aDtcclxuICAgICAgY29uc3QgZGF0YVR5cGUgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLm5vZGVWYWx1ZTtcclxuICAgICAgY29uc3QgZGF0YUtleSA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0ubm9kZVZhbHVlO1xyXG4gICAgICBpZiAoRWxlVXRpbC5zZWxlY3QoYCNlZGRpZTMyJHtkYXRhS2V5fWApKSB7XHJcbiAgICAgICAgRWxlVXRpbC5zZWxlY3QoYCNlZGRpZTMyJHtkYXRhS2V5fWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGlmIChkYXRhS2V5ID09PSAnaXRlbTEnKSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICAgICAgZWxzZSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YVR5cGUgPT09ICdwbGFpbicpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVQbGFpblRleHQoZGF0YUtleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdpbWFnZScpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZXMoZGF0YUtleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdpbWFnZUxpbmsnKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VMaW5rKGRhdGFLZXkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgY3JlYXRlTWVudSA9IHtcclxuICAgIGRlZmF1bHRJRDogJ2Vtb3Rpb24wMDAwJyxcclxuICAgIG1haW4oKSB7XHJcbiAgICAgICAgICAgIC8qIG1haW4gbWVudSovXHJcbiAgICAgIGNvbnN0IG1haW5NZW51ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICBtYWluTWVudS5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9J2xhcmdlVmlldyc+PC9zcGFuPjxzcGFuIGNsYXNzPSdzdWJNZW51JyB0aXRsZT0n5Li76I+c5Y2VIHZlcnNpb24gJHt2ZXJzaW9uTm99Jz48Yj7ikajlm6fikag8L2I+PC9zcGFuPmA7XHJcbiAgICAgIG1haW5NZW51LmlkID0gY3JlYXRlTWVudS5kZWZhdWx0SUQ7XHJcbiAgICAgIGNvbnN0IE1lbnVMZW5ndGggPSBPYmplY3Qua2V5cyhNZW51TGlzdCkubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1lbnVMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IE1lbnVLZXkgPSBPYmplY3Qua2V5cyhNZW51TGlzdClbaV07XHJcbiAgICAgICAgY29uc3QgTWVudVRpdGxlID0gTWVudUxpc3RbTWVudUtleV0udGl0bGU7XHJcbiAgICAgICAgY29uc3QgTWVudVR5cGUgPSBNZW51TGlzdFtNZW51S2V5XS5kYXRhdHlwZTtcclxuICAgICAgICAvLyBpZiAoIU1lbnVUeXBlIHx8ICFNZW51VGl0bGUpIGNvbnNvbGUubG9nKGBkYXRhZXJyb3IgICR7TWVudUtleX1gKTtcclxuICAgICAgICBjb25zdCB0ZXN0TWVudSA9IGNyZWF0ZU1lbnUuc3VicyhNZW51VGl0bGUsIGV4cGFuZE1lbnUuaW5pdCwgTWVudUtleSwgTWVudVR5cGUpO1xyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKHRlc3RNZW51KTtcclxuICAgICAgfVxyXG4gICAgICAgICAgICAvKiBjbG9zZSBidXR0b24qL1xyXG4gICAgICBjb25zdCBjbG9zZUJ0biA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICdbeF0nO1xyXG4gICAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnc3ViTWVudSc7XHJcbiAgICAgIGNsb3NlQnRuLmlkID0gJ2Nsb3NlRU0nO1xyXG4gICAgICBjbG9zZUJ0bi5vbmNsaWNrID0gY3JlYXRlTWVudS5jbGVhcjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcic7XHJcbiAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgLyogZHJvcGRvd24gYm94Ki9cclxuICAgICAgY29uc3QgaXRlbVdpbmRvdyA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgaXRlbVdpbmRvdy5pZCA9ICd0b2dnbGVXaW5kb3cnO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpdGVtV2luZG93KTtcclxuICAgICAgICAgICAgLyogY3NzIHN0eWxlKi9cclxuICAgICAgY29uc3Qgc3R5bGVJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3N0eWxlJyk7XHJcbiAgICAgIHN0eWxlSXRlbS5pbm5lckhUTUwgPSBgI2Vtb3Rpb24wMDAwIHtwYWRkaW5nOjVweCA1cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZid9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3e3Bvc2l0aW9uOmFic29sdXRlOyBiYWNrZ3JvdW5kOiAjZmZmO3otaW5kZXg6NTAwMDsgb3BhY2l0eTogMC44fSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlldyBpbWd7d2lkdGg6IDIwMHB4OyBoZWlnaHQ6MjAwcHg7fSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyBhe3BhZGRpbmc6IDVweCA1cHg7bGluZS1oZWlnaHQ6Mn0gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cge2hlaWdodDogMTAwcHg7IHBhZGRpbmc6IDNweCAzcHg7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbi10b3A6NnB4OyBcXFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7IGJvcmRlcjoxcHggc29saWQgI2ZmNDM1MTsgZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlOyB6LWluZGV4OjIwMDsgfVxcXHJcbiAgICAgICAgICAgICAgICAuY2xpY2tJdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrOyB6LWluZGV4OjMwMDt9XHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLkVtc3tjdXJzb3I6cG9pbnRlcjt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7ICB6LWluZGV4OjQwMDt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dDpob3Zlcntjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb257dGV4dC1kZWNvcmF0aW9uOm5vbmU7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9uOmhvdmVye2JhY2tncm91bmQ6I2ZmNzY4MDsgY29sb3I6I2ZmZjsgfSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXI7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOiA4cHggOHB4OyBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8xNnB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcXFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDM1MTtib3JkZXItY29sb3I6ICNmZjQzNTE7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnU6aG92ZXIsIC5zdWJNZW51OmZvY3VzLCAuc3ViTWVudTp2aXNpdGVke2JhY2tncm91bmQtY29sb3I6ICNmZjc2ODA7Ym9yZGVyLWNvbG9yOiAjZmY3NjgwO2NvbG9yOiAjZmZmO31gO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChzdHlsZUl0ZW0pO1xyXG4gICAgICByZXR1cm4gbWFpbk1lbnU7XHJcbiAgICB9LFxyXG4gICAgc3Vicyh0aXRsZSwgZnVuYywgc3ViaWQsIHN1YnR5cGUpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgIHN1Yk1lbnUuaWQgPSBzdWJpZDtcclxuICAgICAgc3ViTWVudS5jbGFzc05hbWUgPSAnc3ViTWVudSc7XHJcbiAgICAgIGNvbnN0IHN1YmNvbnRlbnQgPSBgPGEgY2xhc3M9J3N1YkJ1dCcgZGF0YS1raWQ9JHtzdWJpZH0gZGF0ZS10eXBlPSR7c3VidHlwZX0+JHt0aXRsZX08L2E+YDtcclxuICAgICAgc3ViTWVudS5vbmNsaWNrID0gZnVuYztcclxuICAgICAgc3ViTWVudS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICBzdWJNZW51LmlubmVySFRNTCA9IHN1YmNvbnRlbnQ7XHJcbiAgICAgIHJldHVybiBzdWJNZW51O1xyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAvLyBsZXQgdGVzdGFyZWFFbGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG5cclxuICAgIE5vZGVMaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgY29uc3QgZWxlbWVudFNldCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJykpO1xyXG5cclxuICAgICAgICAvKiDlhbzlrrnmgKfpl67popggQnkg5Za15ouJ5biD5LiBMjAxNy4wMS4zMDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWXmlrnms5Xov5Tlm57nmoTmmK9IVE1MQ29sbGVjdGlvblxyXG7lnKjovoPmlrDniYjnmoRGaXJlZm945Lit77yMSFRNTENvbGxlY3Rpb27mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOaJgOS7peWPr+S7peeUqGZvci4uLm9m5b6q546vXHJcbuiAjOWcqENocm9tZeS4re+8iOaIkeWPquWcqOS9v+eUqENocm9taXVtIDUw5YaF5qC455qE5rWP6KeI5Zmo5LiL5rWL6K+V6L+H77yJ77yMSFRNTENvbGxlY3Rpb27kuI3mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOS4jeWPr+eUqOebtOaOpeS9v+eUqGZvci4uLm9m5b6q546vXHJcbuaJgOS7peW7uuiurualvOS4u+i/mOaYr+eUqOiAgeaWueazleWQpyovXHJcbiAgICAgICAgLy8gU29sdXRpb24gc3RhY2tmbG93OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNzU0MzE1L2ZvcmVhY2gtbG9vcC1mb3ItaHRtbGNvbGxlY3Rpb24tZWxlbWVudHNcclxuICAgICAgICAvKiDov5jmnIlBcnJheS5mcm9t5pa55rOV56Gu5a6e6IO96Kej5YazQ2hyb21l5LiLSFRNTENvbGxlY3Rpb27kuI3og73nlKhmb3IuLi5vZuW+queOr+eahOmXrumimO+8jOS4jei/h0Nocm9tZSA0NeaJjeW8gOWni+aUr+aMgUFycmF5LmZyb23mlrnms5Vcclxu6Iul5oOz5YW85a655Lul5YmN55qE5rWP6KeI5Zmo55qE6K+d77yM5Y+v5Lul55SoZm9yLi4uaW7lvqrnjq/vvIzmiJbogIXliqDkuKpiYWJlbC1wb2x5ZmlsbOiEmuacrFxyXG7lvZPnhLbkvaDkuI3mg7Plhbzlrrnkvb/nlKhDaHJvbWl1bSA0NeS7peWJjeWGheaguOeahOa1j+iniOWZqOS5n+ayoeWkmuWkp+mXrumimO+8jOeOsOWcqOWbveWGheW4guWcuuS7vemineacgOWkmkNocm9taXVt5aWX5aOz5rWP6KeI5ZmoLS0zNjDlronlhajmtY/op4jlmajnmoTmnIDmlrDmraPlvI/niYjkuZ/mmK/ph4fnlKhDaHJvbWl1bSA0NeWGheaguOS6hiovXHJcbiAgICAvLyBjb25zdCBlbGVtZW50U2V0TGVuZ3RoID0gZWxlbWVudFNldC5sZW5ndGg7XHJcbiAgICAvKiBpZiAoZWxlbWVudFNldExlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHRleHRhcmVhJyk7XHJcbiAgICB9ICovXHJcbiAgICAvLyB0ZXN0YXJlYUVsZVNldC5hZGQoZWxlbWVudFNldCk7XHJcbiAgICAvKiBjb25zdCB1c2VyT3B0aW9uID0ge1xyXG4gICAgICB1c2VyV2luZG93SGVpZ2h0OiAxMjAsXHJcbiAgICAgIHVzZXJTZWxlY3RUZXh0QXJlYTogJ2xhc3QnLFxyXG4gICAgfTsgKi9cclxuICAgIGNvbnN0IG1haW5FbW90aW9uTWVudSA9IGNyZWF0ZU1lbnUubWFpbigpO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpICE9PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1zeW50YXg6IFsxLCBcIkZvck9mU3RhdGVtZW50XCJdICovXHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnRTaW5nbGUgb2YgZWxlbWVudFNldCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50U2luZ2xlKTtcclxuICAgICAgZWxlbWVudFNpbmdsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWluRW1vdGlvbk1lbnUsIGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuY29uc3QgaW1hZ2VwYXRoID0gJzE0ODU0MTI4MTAnO1xyXG5mdW4oaW1hZ2VwYXRoKTtcclxuIl19
