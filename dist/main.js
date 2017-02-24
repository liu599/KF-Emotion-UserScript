(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint linebreak-style: ["error", "windows"] */

/* eslint-disable strict */

'use strict';

var fun = function fun() {
  var imagepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1485412810';

  var versionNo = '4.4.1';
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
      var subcontent = '<a class=\'subBut\' data-kid=' + subid + ' date-type=' + subtype + '>' + title + '</a>';
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

if (typeof imgpath === 'undefined') imgpath = '1485412810';
fun(imgpath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8uNi4wLjJAYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7O0FBRUE7O0FBR0EsSUFBTSxNQUFNLFNBQU4sR0FBTSxHQUE4QjtBQUFBLE1BQTdCLFNBQTZCLHVFQUFqQixZQUFpQjs7QUFDeEMsTUFBTSxZQUFZLE9BQWxCO0FBQ0U7Ozs7Ozs7O0FBUUE7QUFDRixXQUFTLGtCQUFULENBQTRCLFdBQTVCLEVBQXlDLFdBQXpDLEVBQXNELFNBQXRELEVBQ0UsU0FERixFQUNrRDtBQUFBLFFBQXJDLFNBQXFDLHVFQUF6QixFQUF5QjtBQUFBLFFBQXJCLFdBQXFCLHVFQUFQLEtBQU87O0FBQ2hELFFBQUksV0FBVyxFQUFmO0FBQ0EsUUFBSSxhQUFhLENBQWpCO0FBQ0EsU0FBSyxJQUFJLElBQUksV0FBYixFQUEwQixJQUFJLFdBQTlCLEVBQTJDLEtBQUssQ0FBaEQsRUFBbUQ7QUFDakQsbUJBQWEsQ0FBYjtBQUNBLFVBQUksV0FBSixFQUFpQjtBQUNmLHFCQUFjLElBQUksQ0FBTCxHQUFXLENBQVgsU0FBcUIsQ0FBbEM7QUFDRDtBQUNELHNCQUFjLFNBQWQsR0FBMEIsVUFBMUIsR0FBdUMsU0FBdkM7QUFDQSxnQkFBVSxJQUFWLENBQWUsUUFBZjtBQUNEO0FBQ0QsV0FBTyxTQUFQO0FBQ0Q7QUFDQzs7QUFHQTtBQUNGLE1BQU0sU0FBUyxtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsMkVBQTFCLEVBQ21CLE9BRG5CLENBQWY7QUFFQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsaURBQTFCLEVBQTZFLE1BQTdFLEVBQXFGLE1BQXJGO0FBQ0EscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLGlGQUExQixFQUNxQixPQURyQixFQUM4QixNQUQ5QjtBQUVFO0FBQ0YscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBC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QThELE9BQTlELFNBQXlFLEtBQXpFLFNBQU47QUFDQSxjQUFRLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxjQUFRLFNBQVIsR0FBb0IsVUFBcEI7QUFDQSxhQUFPLE9BQVA7QUFDRDtBQTNEZ0IsR0FBbkI7O0FBK0RBLE1BQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFlBQVksSUFBakQsRUFBdUQ7QUFDckQ7QUFDQSxRQUFNLFVBQVUsU0FBUyxvQkFBVCxDQUE4QixVQUE5QixDQUFoQjtBQUNBO0FBQ0E7QUFDQSxRQUFNLGtCQUFrQixXQUFXLElBQVgsRUFBeEI7QUFDQSxRQUFJLFNBQVMsY0FBVCxDQUF3QixnQkFBeEIsTUFBOEMsSUFBbEQsRUFBd0Q7QUFDdEQsZUFBUyxjQUFULENBQXdCLGdCQUF4QixFQUEwQyxLQUExQyxDQUFnRCxRQUFoRCxHQUEyRCxRQUEzRDtBQUNEO0FBQ0QsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsTUFBNUIsRUFBb0MsS0FBSyxDQUF6QyxFQUE0QztBQUMxQztBQUNBLFVBQU0sY0FBYyxRQUFRLElBQVIsQ0FBYSxDQUFiLENBQXBCO0FBQ0E7QUFDQSxrQkFBWSxVQUFaLENBQXVCLFlBQXZCLENBQW9DLGVBQXBDLEVBQXFELFdBQXJEO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDSTs7OztBQUlBO0FBQ0E7OztBQUdKO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7OztBQUlEO0FBQ0YsQ0FsWkQ7O0FBb1pBLElBQUcsT0FBTyxPQUFQLEtBQW1CLFdBQXRCLEVBQW9DLFVBQVUsWUFBVjtBQUNwQyxJQUFJLE9BQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZXNsaW50IGxpbmVicmVhay1zdHlsZTogW1wiZXJyb3JcIiwgXCJ3aW5kb3dzXCJdICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBzdHJpY3QgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5jb25zdCBmdW4gPSAoaW1hZ2VwYXRoID0gJzE0ODU0MTI4MTAnKSA9PiB7XHJcbiAgY29uc3QgdmVyc2lvbk5vID0gJzQuMi4yJztcclxuICAgIC8qIEFkZHJlc3MgZnVuY3Rpb25cclxuICAgICAqIHN0YXJ0TnVtYmVyOiBudW1iZXIsIGluZGljYXRpbmcgdGhlIHN0YXJ0IG51bWJlcjtcclxuICAgICAqIGxlbmd0aEFycmF5OiBudW1iZXIsIGluZGljYXRpbmcgdGhlIGFkZHJBcnJheSBsZW5ndGg7XHJcbiAgICAgKiBzdHJQcmVmaXg6IHN0cmluZywgYWRkcmVzcyBQcmVmaXg7XHJcbiAgICAgKiBzdHJTdWZmaXg6IHN0cmluZywgYWRkcmVzcyBTdWZmaXg7XHJcbiAgICAgKiBsZWFkaW5nWmVybzogYm9vbGVuLCB0cnVlIGZvciBsZWFkaW5nIHplcm8gaW4gbnVtYmVyO1xyXG4gICAgICogYWRkckFycmF5OiBhcnJheSwgYWRkcmVzcyBhcnJheSwgZGVmYXVsdCBmb3IgZW1wdHk7XHJcbiAgICAgKi9cclxuICAgIC8vIOWIm+W7uuihqOaDheWMheaVsOe7hOeahOWHveaVsFxyXG4gIGZ1bmN0aW9uIGVtQWRkckFycmF5SGFuZGxlcihzdGFydE51bWJlciwgbGVuZ3RoQXJyYXksIHN0clByZWZpeCxcclxuICAgIHN0clN1ZmZpeCwgYWRkckFycmF5ID0gW10sIGxlYWRpbmdaZXJvID0gZmFsc2UpIHtcclxuICAgIGxldCBhZGRyVGVtcCA9ICcnO1xyXG4gICAgbGV0IGFkZHJOdW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0TnVtYmVyOyBqIDwgbGVuZ3RoQXJyYXk7IGogKz0gMSkge1xyXG4gICAgICBhZGRyTnVtYmVyID0gajtcclxuICAgICAgaWYgKGxlYWRpbmdaZXJvKSB7XHJcbiAgICAgICAgYWRkck51bWJlciA9IChqID4gOSkgPyAoaikgOiAoYDAke2p9YCk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkclRlbXAgPSBgJHtzdHJQcmVmaXh9JHthZGRyTnVtYmVyfSR7c3RyU3VmZml4fWA7XHJcbiAgICAgIGFkZHJBcnJheS5wdXNoKGFkZHJUZW1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhZGRyQXJyYXk7XHJcbiAgfVxyXG4gICAgLyog6KGo5oOF5YyF5Zyw5Z2A5pWw5o2uICovXHJcblxyXG5cclxuICAgIC8vIELnq5lcclxuICBjb25zdCBiaWxpRU0gPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTcsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQmlsaUJpbGkvMjIzMyAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJykuZ2lmJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0JpbGliaWxpL3hkcy8nLCAnLnBuZycsIGJpbGlFTSk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDAsIDE0LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0JpbGlCaWxpL2JpbGliaWxpVFYgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJykucG5nJywgYmlsaUVNKTtcclxuICAgIC8vIHRvcmHphbFcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTQsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvdG9yYS8wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLmpwZycsIGJpbGlFTSwgdHJ1ZSk7XHJcbiAgICAvLyDpmL/ljaHmnpcgZnJvbSDmkYfmm7Pnmb7lkIhcclxuICBjb25zdCBBa2FyaVNtaWxlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDIxLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0R5bmFtaWMvYWthcmknLCAnLmdpZicpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA3MiwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9ha2FyaS9ha2FyaScsICcucG5nJywgQWthcmlTbWlsZSk7XHJcbiAgICAvLyBOZXcgR2FtZVxyXG4gIGNvbnN0IE5ld0dhbWUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMiwgNjQsICdodHRwOi8vbmVrb2hhbmQubW9lL3Nwc21pbGUvMDFTb3JhLzB4eCcsICcucG5nJyk7XHJcbiAgICAvLyBBQ0ZVTlxyXG4gIGNvbnN0IEFDU21pbGU0ID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDUxLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0FDRlVOL05ldy8nLCAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA0MCwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9BQ0ZVTi9OaW1pbmcvJywgJy5naWYnLCBBQ1NtaWxlNCwgdHJ1ZSk7XHJcbiAgICAvLyBLRiDlhoXnva5cclxuICBjb25zdCBLRlNtaWxlVVJMID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQ5LCBgJHt0eXBlb2YgaW1hZ2VwYXRoICE9PSAndW5kZWZpbmVkJyA/IGltYWdlcGF0aCA6ICcnfS9wb3N0L3NtaWxlL2VtL2VtYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZ2lmJywgW10sIHRydWUpO1xyXG4gIGNvbnN0IEtGU21pbGVDb2RlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEwLCA1OCwgJ1tzOicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ10nKTtcclxuICAgIC8vIGxvdmVsaXZl5LiT55So5bCPXHJcbiAgY29uc3QgTG92ZWxpdmVTbWFsbHRhcmdldFVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA0MSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMi9TbWFsbC9Mb3ZlbGl2ZTJuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA0MSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9TbWFsbC9Mb3ZlbGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnLCBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMKTtcclxuICAgIC8vIGtm5b+r5o235Luj56CBKOmcgOimgeaUueWGmeino+aehOi1i+WAvClcclxuICBjb25zdCBmdW5jdGlvbkRlc2NyaXB0aW9uID0gWyflh7rllK7otLRzZWxsPeWUruS7tycsICflvJXnlKgnLCAn6ZqQ6JePaGlkZT3npZ7np5jnrYnnuqcnLCAn5o+S5YWl5Luj56CBJywgJ+WIoOmZpOe6vycsICfot5Hpqaznga8nLCAn5paH5a2X6aKc6ImyJywgJ+eyl+S9kycsXHJcbiAgICAn5LiL5YiS57q/JywgJ+aWnOS9kycsICfmsLTlubPnur8nLCAn6IOM5pmv6ImyJywgJ+aPkuWFpeWbvueJhyddO1xyXG4gIGNvbnN0IGRlZmF1bHRGdW5jdGlvbiA9IFsnW3NlbGw9MTAwXVsvc2VsbF0nLCAnW3F1b3RlXVsvcXVvdGVdJywgJ1toaWRlPTEwMF1bL2hpZGVdJywgJ1tjb2RlXVsvY29kZV0nLFxyXG4gICAgJ1tzdHJpa2VdWy9zdHJpa2VdJywgJ1tmbHldWy9mbHldJywgJ1tjb2xvcj0jMDBGRjAwXVsvY29sb3JdJywgJ1tiXVsvYl0nLCAnW3VdWy91XScsICdbaV1bL2ldJyxcclxuICAgICdbaHJdJywgJ1tiYWNrY29sb3I9XVsvYmFja2NvbG9yXScsICdbaW1nXVsvaW1nXSddO1xyXG4gICAgLy8g6aKc5paH5a2XXHJcbiAgY29uc3QgZW1vamkgPSBbJyjil4/jg7sgOCDjg7vil48pJyxcclxuICAgICfilbAo4LmR4peVIOKWvSDil5XguZEp4pWvJywgJyjjgp3PieODuyknLCAn44Cc4pmq4pmqJywgJyjvvp/QlO++n+KJoe++n9CU776fKScsICco77y+b++8vinvvoknLCAnKHx8fO++n9CU776fKScsICcoYM61wrQgKScsICco4pWs776f0LTvvp8pJywgJyh8fHzvvp/QtO++nyknLCAnKO+/o+KIh++/oyknLCAnKO+/ozPvv6MpJywgJyjvv6PvvbDvv6MpJywgJyjvv6MgLiDvv6MpJywgJyjvv6PvuL/vv6MpJywgJyjvv6PvuLbvv6MpJywgJygqwrTPiWAqKScsICco44O7z4njg7spJywgJyjijJLilr3ijJIpJywgJyjvv6Pilr3vv6PvvIknLCAnKD3jg7vPieODuz0pJywgJyjvvYDjg7vPieODu8K0KScsICco44Cc77+j4paz77+jKeOAnCcsICco772l4oiA772lKScsXHJcbiAgICAnKMKw4oiAwrAp776JJywgJyjvv6Mz77+jKScsICfila4o77+j4pa977+jKeKVrScsICcoIMK0X+OCne+9gCknLCAn44Gu44Ou44GuJywgJyjvvonYgjwg4LmR77yJ6K+25Zi/4piG772eJywgJygmbHQ7XyZsdDspJywgJygmZ3Q7XyZndDspJywgJyg7wqxfwqwpJywgJyjilpTilqHilpQpLycsICco776f0JTvvp/iiaHvvp/QtO++nykhPycsICfOoyjvvp/QtO++nzspJywgJ86jKCDvv6PilqHvv6N8fCknLFxyXG4gICAgJyjCtO+8m8+J77ybYCknLCAn77yIL1TQlFQpLycsICcoXuODu8+J44O7XiApJywgJyjvvaHvvaXPie+9pe+9oSknLCAnKOKXj++/oyjvvbQp77+j4pePKScsICfOtT3OtT0o44OO4omn4oiH4ommKeODjicsICcowrTvvaVf772lYCknLCAnKC1fLSMpJywgJ++8iO+/o+OBuO+/o++8iScsICco77+jzrUoI++/oykgzqMnLCAn44O9KGDQlMK0Ke++iScsICco4pWvwrDlj6PCsCnila8o4pS04oCU4pS0JywgJ++8iCMtXy0p4pSv4pSB4pSvJywgJ18oOjPjgI3iiKApXycsICco56yRKScsICco5rGXKScsICco5rOjKScsICco6Ium56yRKScsICcowrTjg7vPieODu2ApJywgJyjila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuycsICco4pWv4oC14pah4oCyKeKVr++4teKUu+KUgeKUuycsICcoIMK0z4FgKScsICcoIO++n8+J776fKScsICcob+++n8+J776fbyknLCAnKOOAgF7PiV4pJywgJyjvvaHil5XiiIDil5XvvaEpJywgJy8oIOKXleKAv+KAv+KXlSApXFxcXCcsICfOtdmpKCDCuuKIgMK6ICnbttC3JywgJyjvv6POtSgj77+jKeKYhuKVsOKVrijvv6Pilr3vv6MvLy8pJyxcclxuICAgICfvvIjil4/CtDPvvYDvvIl+4pmqJywgJ18oOtC344CN4oigKV8nLCAn0YXQvtGA0L7RiNC+IScsICfvvLwoXm9eKe+8jycsICco4oCizIXngazigKLMhSApJywgJyjvvp/QlO++nyknLCAn44G+44Gj44Gf44GP44CB5bCP5a2m55Sf44Gv5pyA6auY44Gg44Gc77yB77yBJywgJ861Pc61Pc61PeKUjyjjgpzjg63jgpw7KeKUmycsXHJcbiAgICAnKO+8m8Kw44G7wrApJywgJ+KOneKJp+KPneKPneKJpuKOoCcsICfjg70o4py/776f4pa9776fKeODjicsICfnhJTjgavoiJ7jgYTkuIrjgYzjgovjgrnjg5Hjg7zjgq/jgojjgIHpgqrmgqrjgarnlbDmgKfkuqTpmpvjgavjgIHlpKnnvbDjgpLkuI7jgYjvvIEnLCAnfOKAos+J4oCiYCknXTtcclxuXHJcblxyXG4gIGNvbnN0IE1lbnVMaXN0ID0ge1xyXG4gICAgaXRlbTQ6IHsgZGF0YXR5cGU6ICdpbWFnZUxpbmsnLCB0aXRsZTogJ+WbuuaciScsIGFkZHI6IEtGU21pbGVVUkwsIHJlZjogS0ZTbWlsZUNvZGUgfSxcclxuICAgIGl0ZW0xOiB7IGRhdGF0eXBlOiAncGxhaW4nLCB0aXRsZTogJ+W/q+aNtycsIGFkZHI6IGRlZmF1bHRGdW5jdGlvbiwgcmVmOiBmdW5jdGlvbkRlc2NyaXB0aW9uIH0sXHJcbiAgICBpdGVtMjogeyBkYXRhdHlwZTogJ3BsYWluJywgdGl0bGU6ICfpopzmloflrZcnLCBhZGRyOiBlbW9qaSB9LFxyXG4gICAgaXRlbTU6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQUNGVU4nLCBhZGRyOiBBQ1NtaWxlNCB9LFxyXG4gICAgaXRlbTY6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAn5bi455SoJywgYWRkcjogTmV3R2FtZSB9LCAgLy9cclxuICAgIGl0ZW03OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0FrYXJpJywgYWRkcjogQWthcmlTbWlsZSB9LCAvLyBBa2FyaVxyXG4gICAgaXRlbTg6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQmlsaUJpbGknLCBhZGRyOiBiaWxpRU0gfSwgLy8gQuermVxyXG4gICAgaXRlbTM6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnTG92ZUxpdmUnLCBhZGRyOiBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMIH0sXHJcbiAgfTtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiovXHJcbiAgICAvKiBFdmVudCDlh73mlbAgKi9cclxuICBjb25zdCBFdmVudFV0aWwgPSB7XHJcbiAgICBnZXRFdmVudChldmVudCkge1xyXG4gICAgICByZXR1cm4gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgfSxcclxuICAgIGdldFRhcmdldChldmVudCkge1xyXG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudERlZmF1bHQoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAgLy8gRE9NMlxyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGBvbiR7dHlwZX1gLCBoYW5kbGVyKTsgIC8vIElFXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFtgb24ke3R5cGV9YF0gPSBoYW5kbGVyOyAgLy8gRE9NIDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xyXG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgLy8gRE9NMlxyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICBlbGVtZW50LmRldGFjaEV2ZW50KGBvbiR7dHlwZX1gLCBoYW5kbGVyKTsgLy8gSUVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50W2BvbiR7dHlwZX1gXSA9IG51bGw7IC8vIERPTSAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduKi9cclxuICAgIC8qIEVsZW1lbnQg5Ye95pWwKi9cclxuICBjb25zdCBFbGVVdGlsID0ge1xyXG4gICAgY3JlYXRlKGVsZSkge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdElEKGVsZSkge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3Qoc2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgfSxcclxuICB9O1xyXG4gICAgLyog5qih5Z2XKi9cclxuICBjb25zdCBtb3VzZU92ZXJBY3Rpb24gPSB7XHJcbiAgICBzaG93SW1nKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgIC8qIGlmICghZXZlbnRUYXJnZXQuc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xyXG4gICAgICB9Ki9cclxuICAgICAgY29uc3QgbGFyZ2VWaWV3Q29udGFpbmVyID0gRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jyk7XHJcbiAgICAgIGNvbnN0IFtzY3JvbGxUb3BWYWx1ZSwgc2Nyb2xsTGVmdFZhbHVlXSA9IFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XTtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke2V2ZW50VGFyZ2V0LnNyY30gLz5gO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZICsgc2Nyb2xsVG9wVmFsdWUgKyAyMH1weGA7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCArIHNjcm9sbExlZnRWYWx1ZX1weGA7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coW2V2ZW50LmNsaWVudFksZXZlbnQuY2xpZW50WF0pO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS50b3AsXHJcbiAgICAgICAgICAgICAgLy8gRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUubGVmdF0pO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdKTtcclxuICAgIH0sXHJcbiAgICBjbGVhckltZygpIHtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBhdHRhY2hBY3Rpb24gPSB7XHJcbiAgICBhdHRhY2hFbW90aW9uKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgbGV0IGFkZHJlc3NUYXJnZXQgPSAnJztcclxuICAgICAgbGV0IGVtb3Rpb25BZGRyZXNzID0gJyc7XHJcbiAgICAgIGlmIChldmVudFRhcmdldC5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIGlmIChldmVudFRhcmdldC5zcmMpIHtcclxuICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5zcmM7XHJcbiAgICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ2ltYWdlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xyXG4gICAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdwbGFpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xyXG4gICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAncGxhaW4nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RUZXh0QXJlYSA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCBvdmFsdWUgPSBzZWxlY3RUZXh0QXJlYS52YWx1ZTtcclxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgLy8gY29uc3QgZW5kUG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uRW5kO1xyXG4gICAgICBzZWxlY3RUZXh0QXJlYS52YWx1ZSA9IGAke292YWx1ZS5zbGljZSgwLCBzdGFydFBvcyl9JHtlbW90aW9uQWRkcmVzc30ke292YWx1ZS5zbGljZShzdGFydFBvcyl9YDtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZW1vdGlvbkFkZHJlc3MpO1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3NQYXJzZShhZGRTdHIsIHBhdHRlcm4pIHtcclxuICAgICAgbGV0IHN0cmluZ1JldHVybiA9ICcnO1xyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGBbaW1nXSR7YWRkU3RyfVsvaW1nXWA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdwbGFpbicpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBkZWNvZGVVUkkoYWRkU3RyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ2ltYWdlTGluaycpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBhZGRTdHI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cmluZ1JldHVybjtcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVJdGVtcyA9IHtcclxuICAgIGNyZWF0ZUNvbnRhaW5lcihrZXkpIHtcclxuICAgICAgY29uc3QgSXRlbUNvbnRhaW5lciA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgSXRlbUNvbnRhaW5lci5pZCA9IGBlZGRpZTMyJHtrZXl9YDtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93JykuYXBwZW5kQ2hpbGQoSXRlbUNvbnRhaW5lcik7XHJcbiAgICAgIHJldHVybiBJdGVtQ29udGFpbmVyO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUltYWdlcyhrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTWVudUxpc3Rba2V5XSk7XHJcbiAgICAgIGNvbnN0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGl2RWxlbWVudCA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9ICdjbGlja0l0ZW0nO1xyXG4gICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3ZlciA9IG1vdXNlT3ZlckFjdGlvbi5zaG93SW1nO1xyXG4gICAgICAgIGltZ0l0ZW0ub25tb3VzZW91dCA9IG1vdXNlT3ZlckFjdGlvbi5jbGVhckltZztcclxuXHJcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZVBsYWluVGV4dChrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgY29uc3QgdHh0TGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgdHh0TGVuZ3RoID0gdHh0TGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdHh0TGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCB0eHRJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgICB0eHRJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7IG1hcmdpbjogMTBweCAxMHB4Oyc7XHJcbiAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHt0eHRMaXN0W2tdfTwvYT5gO1xyXG4gICAgICAgIGlmIChNZW51TGlzdFtrZXldLnJlZikge1xyXG4gICAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHtNZW51TGlzdFtrZXldLnJlZltrXX08L2E+YDtcclxuICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHh0SXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgdHh0SXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6IDEwcHggMTBweDp3aWR0aDogNTBweDsnO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHR4dEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSW1hZ2VMaW5rKGtleSkge1xyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICBjb25zdCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCByZWZMaXN0ID0gTWVudUxpc3Rba2V5XS5yZWY7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICBpbWdJdGVtLmRhdGFzZXQubGluayA9IHJlZkxpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7JztcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGNsZWFyTWVudSA9IHtcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICBjb25zdCB0b2dnbGVXaW5kb3cgPSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKTtcclxuICAgICAgdG9nZ2xlV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGNvbnN0IHRvZ1dpbkNoaWxkcmVuID0gdG9nZ2xlV2luZG93LmNoaWxkTm9kZXM7XHJcbiAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSB0b2dXaW5DaGlsZHJlbi5sZW5ndGg7IGogPCBsZW47IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9nV2luQ2hpbGRyZW5bal0pO1xyXG4gICAgICAgIHRvZ1dpbkNoaWxkcmVuW2pdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBleHBhbmRNZW51ID0ge1xyXG4gICAgaW5pdChldmVudCkge1xyXG4gICAgICBjbGVhck1lbnUuY2xlYXIoKTtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLndpZHRoID0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJykuc3R5bGUud2lkdGg7XHJcbiAgICAgIGNvbnN0IGRhdGFUeXBlID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1syXS5ub2RlVmFsdWU7XHJcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLm5vZGVWYWx1ZTtcclxuICAgICAgaWYgKEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKSkge1xyXG4gICAgICAgIEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBpZiAoZGF0YUtleSA9PT0gJ2l0ZW0xJykgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIGVsc2UgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGFUeXBlID09PSAncGxhaW4nKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlUGxhaW5UZXh0KGRhdGFLZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VzKGRhdGFLZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAnaW1hZ2VMaW5rJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlTGluayhkYXRhS2V5KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGNyZWF0ZU1lbnUgPSB7XHJcbiAgICBkZWZhdWx0SUQ6ICdlbW90aW9uMDAwMCcsXHJcbiAgICBtYWluKCkge1xyXG4gICAgICAgICAgICAvKiBtYWluIG1lbnUqL1xyXG4gICAgICBjb25zdCBtYWluTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgbWFpbk1lbnUuaW5uZXJIVE1MID0gYDxzcGFuIGlkPSdsYXJnZVZpZXcnPjwvc3Bhbj48c3BhbiBjbGFzcz0nc3ViTWVudScgdGl0bGU9J+S4u+iPnOWNlSB2ZXJzaW9uICR7dmVyc2lvbk5vfSc+PGI+4pGo5Zun4pGoPC9iPjwvc3Bhbj5gO1xyXG4gICAgICBtYWluTWVudS5pZCA9IGNyZWF0ZU1lbnUuZGVmYXVsdElEO1xyXG4gICAgICBjb25zdCBNZW51TGVuZ3RoID0gT2JqZWN0LmtleXMoTWVudUxpc3QpLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNZW51TGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBNZW51S2V5ID0gT2JqZWN0LmtleXMoTWVudUxpc3QpW2ldO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUaXRsZSA9IE1lbnVMaXN0W01lbnVLZXldLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUeXBlID0gTWVudUxpc3RbTWVudUtleV0uZGF0YXR5cGU7XHJcbiAgICAgICAgLy8gaWYgKCFNZW51VHlwZSB8fCAhTWVudVRpdGxlKSBjb25zb2xlLmxvZyhgZGF0YWVycm9yICAke01lbnVLZXl9YCk7XHJcbiAgICAgICAgY29uc3QgdGVzdE1lbnUgPSBjcmVhdGVNZW51LnN1YnMoTWVudVRpdGxlLCBleHBhbmRNZW51LmluaXQsIE1lbnVLZXksIE1lbnVUeXBlKTtcclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZCh0ZXN0TWVudSk7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgLyogY2xvc2UgYnV0dG9uKi9cclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnW3hdJztcclxuICAgICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ3N1Yk1lbnUnO1xyXG4gICAgICBjbG9zZUJ0bi5pZCA9ICdjbG9zZUVNJztcclxuICAgICAgY2xvc2VCdG4ub25jbGljayA9IGNsZWFyTWVudS5jbGVhcjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcic7XHJcbiAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgLyogZHJvcGRvd24gYm94Ki9cclxuICAgICAgY29uc3QgaXRlbVdpbmRvdyA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgaXRlbVdpbmRvdy5pZCA9ICd0b2dnbGVXaW5kb3cnO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpdGVtV2luZG93KTtcclxuICAgICAgICAgICAgLyogY3NzIHN0eWxlKi9cclxuICAgICAgY29uc3Qgc3R5bGVJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3N0eWxlJyk7XHJcbiAgICAgIHN0eWxlSXRlbS5pbm5lckhUTUwgPSBgI2Vtb3Rpb24wMDAwIHtwYWRkaW5nOjVweCA1cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZid9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3e3Bvc2l0aW9uOmFic29sdXRlOyBiYWNrZ3JvdW5kOiAjZmZmO3otaW5kZXg6NTAwMDsgb3BhY2l0eTogMC44fSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlldyBpbWd7d2lkdGg6IDIwMHB4OyBoZWlnaHQ6MjAwcHg7fSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyBhe3BhZGRpbmc6IDVweCA1cHg7bGluZS1oZWlnaHQ6Mn0gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cge2hlaWdodDogMTAwcHg7IHBhZGRpbmc6IDNweCAzcHg7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbi10b3A6NnB4OyBcXFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7IGJvcmRlcjoxcHggc29saWQgI2ZmNDM1MTsgZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlOyB6LWluZGV4OjIwMDsgfVxcXHJcbiAgICAgICAgICAgICAgICAuY2xpY2tJdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrOyB6LWluZGV4OjMwMDt9XHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLkVtc3tjdXJzb3I6cG9pbnRlcjt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7ICB6LWluZGV4OjQwMDt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dDpob3Zlcntjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb257dGV4dC1kZWNvcmF0aW9uOm5vbmU7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9uOmhvdmVye2JhY2tncm91bmQ6I2ZmNzY4MDsgY29sb3I6I2ZmZjsgfSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXI7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOiA4cHggOHB4OyBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8xNnB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcXFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDM1MTtib3JkZXItY29sb3I6ICNmZjQzNTE7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnU6aG92ZXIsIC5zdWJNZW51OmZvY3VzLCAuc3ViTWVudTp2aXNpdGVke2JhY2tncm91bmQtY29sb3I6ICNmZjc2ODA7Ym9yZGVyLWNvbG9yOiAjZmY3NjgwO2NvbG9yOiAjZmZmO31gO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChzdHlsZUl0ZW0pO1xyXG4gICAgICByZXR1cm4gbWFpbk1lbnU7XHJcbiAgICB9LFxyXG4gICAgc3Vicyh0aXRsZSwgZnVuYywgc3ViaWQsIHN1YnR5cGUpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgIHN1Yk1lbnUuaWQgPSBzdWJpZDtcclxuICAgICAgc3ViTWVudS5jbGFzc05hbWUgPSAnc3ViTWVudSc7XHJcbiAgICAgIGNvbnN0IHN1YmNvbnRlbnQgPSBgPGEgY2xhc3M9J3N1YkJ1dCcgZGF0YS1raWQ9JHtzdWJpZH0gZGF0ZS10eXBlPSR7c3VidHlwZX0+JHt0aXRsZX08L2E+YDtcclxuICAgICAgc3ViTWVudS5vbmNsaWNrID0gZnVuYztcclxuICAgICAgc3ViTWVudS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICBzdWJNZW51LmlubmVySFRNTCA9IHN1YmNvbnRlbnQ7XHJcbiAgICAgIHJldHVybiBzdWJNZW51O1xyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICE9IG51bGwpIHtcclxuICAgIC8vIGxldCB0ZXN0YXJlYUVsZVNldCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCB0ZXN0U2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlc3RTZXQuaXRlbSgwKSk7XHJcbiAgICBjb25zdCBtYWluRW1vdGlvbk1lbnUgPSBjcmVhdGVNZW51Lm1haW4oKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWNvbnRlbnQnKSAhPT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWNvbnRlbnQnKS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgdyA9IDA7IHcgPCB0ZXN0U2V0Lmxlbmd0aDsgdyArPSAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3RTZXQuaXRlbSh3KSk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRUZXN0ID0gdGVzdFNldC5pdGVtKHcpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhtYWluRW1vdGlvbk1lbnUpO1xyXG4gICAgICBlbGVtZW50VGVzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWluRW1vdGlvbk1lbnUsIGVsZW1lbnRUZXN0KTtcclxuICAgIH1cclxuICAgIC8vIE5vZGVMaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICAvLyBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgLy8gY29uc3QgZWxlbWVudFNldCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJykpO1xyXG4gICAgICAgIC8qIOWFvOWuueaAp+mXrumimCBCeSDllrXmi4nluIPkuIEyMDE3LjAxLjMwOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZeaWueazlei/lOWbnueahOaYr0hUTUxDb2xsZWN0aW9uXHJcbuWcqOi+g+aWsOeJiOeahEZpcmVmb3jkuK3vvIxIVE1MQ29sbGVjdGlvbuaUr+aMgUl0ZXJhdG9y5o6l5Y+j77yM5omA5Lul5Y+v5Lul55SoZm9yLi4ub2blvqrnjq9cclxu6ICM5ZyoQ2hyb21l5Lit77yI5oiR5Y+q5Zyo5L2/55SoQ2hyb21pdW0gNTDlhoXmoLjnmoTmtY/op4jlmajkuIvmtYvor5Xov4fvvInvvIxIVE1MQ29sbGVjdGlvbuS4jeaUr+aMgUl0ZXJhdG9y5o6l5Y+j77yM5LiN5Y+v55So55u05o6l5L2/55SoZm9yLi4ub2blvqrnjq9cclxu5omA5Lul5bu66K6u5qW85Li76L+Y5piv55So6ICB5pa55rOV5ZCnKi9cclxuICAgICAgICAvLyBTb2x1dGlvbiBzdGFja2Zsb3c6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjI3NTQzMTUvZm9yZWFjaC1sb29wLWZvci1odG1sY29sbGVjdGlvbi1lbGVtZW50c1xyXG4gICAgICAgIC8qIOi/mOaciUFycmF5LmZyb23mlrnms5Xnoa7lrp7og73op6PlhrNDaHJvbWXkuItIVE1MQ29sbGVjdGlvbuS4jeiDveeUqGZvci4uLm9m5b6q546v55qE6Zeu6aKY77yM5LiN6L+HQ2hyb21lIDQ15omN5byA5aeL5pSv5oyBQXJyYXkuZnJvbeaWueazlVxyXG7oi6Xmg7Plhbzlrrnku6XliY3nmoTmtY/op4jlmajnmoTor53vvIzlj6/ku6XnlKhmb3IuLi5pbuW+queOr++8jOaIluiAheWKoOS4qmJhYmVsLXBvbHlmaWxs6ISa5pysXHJcbuW9k+eEtuS9oOS4jeaDs+WFvOWuueS9v+eUqENocm9taXVtIDQ15Lul5YmN5YaF5qC455qE5rWP6KeI5Zmo5Lmf5rKh5aSa5aSn6Zeu6aKY77yM546w5Zyo5Zu95YaF5biC5Zy65Lu96aKd5pyA5aSaQ2hyb21pdW3lpZflo7PmtY/op4jlmagtLTM2MOWuieWFqOa1j+iniOWZqOeahOacgOaWsOato+W8j+eJiOS5n+aYr+mHh+eUqENocm9taXVtIDQ15YaF5qC45LqGKi9cclxuICAgIC8vIGNvbnN0IGVsZW1lbnRTZXRMZW5ndGggPSBlbGVtZW50U2V0Lmxlbmd0aDtcclxuICAgIC8qIGlmIChlbGVtZW50U2V0TGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gdGV4dGFyZWEnKTtcclxuICAgIH0gKi9cclxuICAgIC8vIHRlc3RhcmVhRWxlU2V0LmFkZChlbGVtZW50U2V0KTtcclxuICAgIC8qIGNvbnN0IHVzZXJPcHRpb24gPSB7XHJcbiAgICAgIHVzZXJXaW5kb3dIZWlnaHQ6IDEyMCxcclxuICAgICAgdXNlclNlbGVjdFRleHRBcmVhOiAnbGFzdCcsXHJcbiAgICB9OyAqL1xyXG5cclxuICAgIC8qIGVzbGludCBuby1yZXN0cmljdGVkLXN5bnRheDogWzEsIFwiRm9yT2ZTdGF0ZW1lbnRcIl0gKi9cclxuICAgIC8qIGZvciAoY29uc3QgZWxlbWVudFNpbmdsZSBvZiBlbGVtZW50U2V0KSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50U2luZ2xlKTtcclxuICAgICAgZWxlbWVudFNpbmdsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWluRW1vdGlvbk1lbnUsIGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgfSAqL1xyXG4gIH1cclxufTtcclxuXHJcbmlmKHR5cGVvZiBpbWdwYXRoID09PSAndW5kZWZpbmVkJykgIGltZ3BhdGggPSAnMTQ4NTQxMjgxMCc7XHJcbmZ1bihpbWdwYXRoKTtcclxuIl19
