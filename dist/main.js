(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint linebreak-style: ["error", "windows"] */

/* eslint-disable strict */

'use strict';

var fun = function fun() {
  var imagepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1485412810';

  var versionNo = '4.2.2';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8uNi4wLjJAYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7O0FBRUE7O0FBR0EsSUFBTSxNQUFNLFNBQU4sR0FBTSxHQUE4QjtBQUFBLE1BQTdCLFNBQTZCLHVFQUFqQixZQUFpQjs7QUFDeEMsTUFBTSxZQUFZLE9BQWxCO0FBQ0U7Ozs7Ozs7O0FBUUE7QUFDRixXQUFTLGtCQUFULENBQTRCLFdBQTVCLEVBQXlDLFdBQXpDLEVBQXNELFNBQXRELEVBQ0UsU0FERixFQUNrRDtBQUFBLFFBQXJDLFNBQXFDLHVFQUF6QixFQUF5QjtBQUFBLFFBQXJCLFdBQXFCLHVFQUFQLEtBQU87O0FBQ2hELFFBQUksV0FBVyxFQUFmO0FBQ0EsUUFBSSxhQUFhLENBQWpCO0FBQ0EsU0FBSyxJQUFJLElBQUksV0FBYixFQUEwQixJQUFJLFdBQTlCLEVBQTJDLEtBQUssQ0FBaEQsRUFBbUQ7QUFDakQsbUJBQWEsQ0FBYjtBQUNBLFVBQUksV0FBSixFQUFpQjtBQUNmLHFCQUFjLElBQUksQ0FBTCxHQUFXLENBQVgsU0FBcUIsQ0FBbEM7QUFDRDtBQUNELHNCQUFjLFNBQWQsR0FBMEIsVUFBMUIsR0FBdUMsU0FBdkM7QUFDQSxnQkFBVSxJQUFWLENBQWUsUUFBZjtBQUNEO0FBQ0QsV0FBTyxTQUFQO0FBQ0Q7QUFDQzs7QUFHQTtBQUNGLE1BQU0sU0FBUyxtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsNkNBQTFCLEVBQ21CLE9BRG5CLENBQWY7QUFFQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsdUNBQTFCLEVBQW1FLE1BQW5FLEVBQTJFLE1BQTNFO0FBQ0EscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLG1EQUExQixFQUNxQixPQURyQixFQUM4QixNQUQ5QjtBQUVFO0FBQ0YscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLHlDQUExQixFQUNxQixNQURyQixFQUM2QixNQUQ3QixFQUNxQyxJQURyQztBQUVFO0FBQ0YsTUFBTSxhQUFhLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQiw2Q0FBMUIsRUFBeUUsTUFBekUsQ0FBbkI7QUFDQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsNkNBQTFCLEVBQXlFLE1BQXpFLEVBQWlGLFVBQWpGO0FBQ0U7QUFDRixNQUFNLFVBQVUsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLDJDQUExQixFQUF1RSxNQUF2RSxDQUFoQjtBQUNFO0FBQ0YsTUFBTSxXQUFXLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQix3Q0FBMUIsRUFBb0UsTUFBcEUsQ0FBakI7QUFDQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsd0NBQTFCLEVBQW9FLE1BQXBFLEVBQTRFLFFBQTVFLEVBQXNGLElBQXRGO0FBQ0U7QUFDRixNQUFNLGFBQWEsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEdBQTZCLE9BQU8sU0FBUCxLQUFxQixXQUFyQixHQUFtQyxTQUFuQyxHQUErQyxFQUE1RSx5QkFDbUIsTUFEbkIsRUFDMkIsRUFEM0IsRUFDK0IsSUFEL0IsQ0FBbkI7QUFFQSxNQUFNLGNBQWMsbUJBQW1CLEVBQW5CLEVBQXVCLEVBQXZCLEVBQTJCLEtBQTNCLEVBQ21CLEdBRG5CLENBQXBCO0FBRUU7QUFDRixNQUFNLHlCQUF5QixtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsdURBQTFCLEVBQ21CLE1BRG5CLENBQS9CO0FBRUEscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLG9EQUExQixFQUNxQixNQURyQixFQUM2QixzQkFEN0I7QUFFRTtBQUNGLE1BQU0sc0JBQXNCLENBQUMsWUFBRCxFQUFlLElBQWYsRUFBcUIsYUFBckIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsS0FBbkQsRUFBMEQsTUFBMUQsRUFBa0UsSUFBbEUsRUFDMUIsS0FEMEIsRUFDbkIsSUFEbUIsRUFDYixLQURhLEVBQ04sS0FETSxFQUNDLE1BREQsQ0FBNUI7QUFFQSxNQUFNLGtCQUFrQixDQUFDLG1CQUFELEVBQXNCLGlCQUF0QixFQUF5QyxtQkFBekMsRUFBOEQsZUFBOUQsRUFDdEIsbUJBRHNCLEVBQ0QsYUFEQyxFQUNjLHlCQURkLEVBQ3lDLFNBRHpDLEVBQ29ELFNBRHBELEVBQytELFNBRC9ELEVBRXRCLE1BRnNCLEVBRWQsMEJBRmMsRUFFYyxhQUZkLENBQXhCO0FBR0U7QUFDRixNQUFNLFFBQVEsQ0FBQyxXQUFELEVBQ1osYUFEWSxFQUNHLE9BREgsRUFDWSxLQURaLEVBQ21CLFdBRG5CLEVBQ2dDLFFBRGhDLEVBQzBDLFVBRDFDLEVBQ3NELFFBRHRELEVBQ2dFLFFBRGhFLEVBQzBFLFVBRDFFLEVBQ3NGLE9BRHRGLEVBQytGLE9BRC9GLEVBQ3dHLE9BRHhHLEVBQ2lILFNBRGpILEVBQzRILE9BRDVILEVBQ3FJLE9BRHJJLEVBQzhJLFNBRDlJLEVBQ3lKLE9BRHpKLEVBQ2tLLE9BRGxLLEVBQzJLLE9BRDNLLEVBQ29MLFNBRHBMLEVBQytMLFNBRC9MLEVBQzBNLFNBRDFNLEVBQ3FOLE9BRHJOLEVBRVosUUFGWSxFQUVGLE9BRkUsRUFFTyxTQUZQLEVBRWtCLFNBRmxCLEVBRTZCLEtBRjdCLEVBRW9DLGFBRnBDLEVBRW1ELGFBRm5ELEVBRWtFLGFBRmxFLEVBRWlGLFFBRmpGLEVBRTJGLFFBRjNGLEVBRXFHLGFBRnJHLEVBRW9ILFNBRnBILEVBRStILFdBRi9ILEVBR1osU0FIWSxFQUdELFNBSEMsRUFHVSxVQUhWLEVBR3NCLFNBSHRCLEVBR2lDLFdBSGpDLEVBRzhDLGFBSDlDLEVBRzZELFNBSDdELEVBR3dFLFFBSHhFLEVBR2tGLE9BSGxGLEVBRzJGLFdBSDNGLEVBR3dHLFNBSHhHLEVBR21ILGFBSG5ILEVBR2tJLFdBSGxJLEVBRytJLFVBSC9JLEVBRzJKLEtBSDNKLEVBR2tLLEtBSGxLLEVBR3lLLEtBSHpLLEVBR2dMLE1BSGhMLEVBR3dMLFNBSHhMLEVBR21NLGNBSG5NLEVBR21OLGFBSG5OLEVBR2tPLFFBSGxPLEVBRzRPLFFBSDVPLEVBR3NQLFNBSHRQLEVBR2lRLFFBSGpRLEVBRzJRLFNBSDNRLEVBR3NSLGFBSHRSLEVBR3FTLGFBSHJTLEVBR29ULG9CQUhwVCxFQUlaLFVBSlksRUFJQSxVQUpBLEVBSVksU0FKWixFQUl1QixTQUp2QixFQUlrQyxVQUpsQyxFQUk4QyxPQUo5QyxFQUl1RCxpQkFKdkQsRUFJMEUsZ0JBSjFFLEVBS1osUUFMWSxFQUtGLFFBTEUsRUFLUSxVQUxSLEVBS29CLDhCQUxwQixFQUtvRCxRQUxwRCxDQUFkOztBQVFBLE1BQU0sV0FBVztBQUNmLFdBQU8sRUFBRSxVQUFVLFdBQVosRUFBeUIsT0FBTyxJQUFoQyxFQUFzQyxNQUFNLFVBQTVDLEVBQXdELEtBQUssV0FBN0QsRUFEUTtBQUVmLFdBQU8sRUFBRSxVQUFVLE9BQVosRUFBcUIsT0FBTyxJQUE1QixFQUFrQyxNQUFNLGVBQXhDLEVBQXlELEtBQUssbUJBQTlELEVBRlE7QUFHZixXQUFPLEVBQUUsVUFBVSxPQUFaLEVBQXFCLE9BQU8sS0FBNUIsRUFBbUMsTUFBTSxLQUF6QyxFQUhRO0FBSWYsV0FBTyxFQUFFLFVBQVUsT0FBWixFQUFxQixPQUFPLE9BQTVCLEVBQXFDLE1BQU0sUUFBM0MsRUFKUTtBQUtmLFdBQU8sRUFBRSxVQUFVLE9BQVosRUFBcUIsT0FBTyxJQUE1QixFQUFrQyxNQUFNLE9BQXhDLEVBTFEsRUFLNEM7QUFDM0QsV0FBTyxFQUFFLFVBQVUsT0FBWixFQUFxQixPQUFPLE9BQTVCLEVBQXFDLE1BQU0sVUFBM0MsRUFOUSxFQU1pRDtBQUNoRSxXQUFPLEVBQUUsVUFBVSxPQUFaLEVBQXFCLE9BQU8sVUFBNUIsRUFBd0MsTUFBTSxNQUE5QyxFQVBRLEVBT2dEO0FBQy9ELFdBQU8sRUFBRSxVQUFVLE9BQVosRUFBcUIsT0FBTyxVQUE1QixFQUF3QyxNQUFNLHNCQUE5QztBQVJRLEdBQWpCO0FBVUE7QUFDRTtBQUNGLE1BQU0sWUFBWTtBQUNoQixZQURnQixvQkFDUCxLQURPLEVBQ0E7QUFDZCxhQUFPLFNBQVMsT0FBTyxLQUF2QjtBQUNELEtBSGU7QUFJaEIsYUFKZ0IscUJBSU4sS0FKTSxFQUlDO0FBQ2YsYUFBTyxNQUFNLE1BQU4sSUFBZ0IsTUFBTSxVQUE3QjtBQUNELEtBTmU7QUFPaEIsa0JBUGdCLDBCQU9ELEtBUEMsRUFPTTtBQUNwQixVQUFJLE1BQU0sY0FBVixFQUEwQjtBQUN4QixjQUFNLGNBQU47QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNLFdBQU4sR0FBb0IsS0FBcEI7QUFDRDtBQUNGLEtBYmU7QUFjaEIsbUJBZGdCLDJCQWNBLEtBZEEsRUFjTztBQUNyQixVQUFJLE1BQU0sZUFBVixFQUEyQjtBQUN6QixjQUFNLGVBQU47QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNLFlBQU4sR0FBcUIsSUFBckI7QUFDRDtBQUNGLEtBcEJlO0FBcUJoQixjQXJCZ0Isc0JBcUJMLE9BckJLLEVBcUJJLElBckJKLEVBcUJVLE9BckJWLEVBcUJtQjtBQUNqQyxVQUFJLFFBQVEsZ0JBQVosRUFBOEI7QUFDNUIsZ0JBQVEsZ0JBQVIsQ0FBeUIsSUFBekIsRUFBK0IsT0FBL0IsRUFBd0MsS0FBeEMsRUFENEIsQ0FDcUI7QUFDbEQsT0FGRCxNQUVPLElBQUksUUFBUSxXQUFaLEVBQXlCO0FBQzlCLGdCQUFRLFdBQVIsUUFBeUIsSUFBekIsRUFBaUMsT0FBakMsRUFEOEIsQ0FDYztBQUM3QyxPQUZNLE1BRUE7QUFDTCx1QkFBYSxJQUFiLElBQXVCLE9BQXZCLENBREssQ0FDNEI7QUFDbEM7QUFDRixLQTdCZTtBQThCaEIsaUJBOUJnQix5QkE4QkYsT0E5QkUsRUE4Qk8sSUE5QlAsRUE4QmEsT0E5QmIsRUE4QnNCO0FBQ3BDLFVBQUksUUFBUSxtQkFBWixFQUFpQztBQUMvQixnQkFBUSxtQkFBUixDQUE0QixJQUE1QixFQUFrQyxPQUFsQyxFQUEyQyxLQUEzQyxFQUQrQixDQUNvQjtBQUNwRCxPQUZELE1BRU8sSUFBSSxRQUFRLFdBQVosRUFBeUI7QUFDOUIsZ0JBQVEsV0FBUixRQUF5QixJQUF6QixFQUFpQyxPQUFqQyxFQUQ4QixDQUNhO0FBQzVDLE9BRk0sTUFFQTtBQUNMLHVCQUFhLElBQWIsSUFBdUIsSUFBdkIsQ0FESyxDQUN3QjtBQUM5QjtBQUNGO0FBdENlLEdBQWxCO0FBd0NBO0FBQ0U7QUFDRixNQUFNLFVBQVU7QUFDZCxVQURjLGtCQUNQLEdBRE8sRUFDRjtBQUNWLGFBQU8sU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQVA7QUFDRCxLQUhhO0FBSWQsWUFKYyxvQkFJTCxHQUpLLEVBSUE7QUFDWixhQUFPLFNBQVMsY0FBVCxDQUF3QixHQUF4QixDQUFQO0FBQ0QsS0FOYTtBQU9kLFVBUGMsa0JBT1AsUUFQTyxFQU9HO0FBQ2YsYUFBTyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBUDtBQUNEO0FBVGEsR0FBaEI7QUFXRTtBQUNGLE1BQU0sa0JBQWtCO0FBQ3RCLFdBRHNCLG1CQUNkLEtBRGMsRUFDUDtBQUNiLFVBQU0sY0FBYyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBcEI7QUFDQTs7O0FBR0EsVUFBTSxxQkFBcUIsUUFBUSxRQUFSLENBQWlCLFdBQWpCLENBQTNCO0FBTGEsaUJBTTZCLENBQUMsU0FBUyxJQUFULENBQWMsU0FBZixFQUEwQixTQUFTLElBQVQsQ0FBYyxVQUF4QyxDQU43QjtBQUFBLFVBTU4sY0FOTTtBQUFBLFVBTVUsZUFOVjs7QUFPYix5QkFBbUIsU0FBbkIsaUJBQTJDLFlBQVksR0FBdkQ7QUFDQSx5QkFBbUIsS0FBbkIsQ0FBeUIsT0FBekIsR0FBbUMsT0FBbkM7QUFDQSx5QkFBbUIsS0FBbkIsQ0FBeUIsR0FBekIsR0FBa0MsTUFBTSxPQUFOLEdBQWdCLGNBQWhCLEdBQWlDLEVBQW5FO0FBQ0EseUJBQW1CLEtBQW5CLENBQXlCLElBQXpCLEdBQW1DLE1BQU0sT0FBTixHQUFnQixlQUFuRDtBQUNRO0FBQ0E7QUFDQTtBQUNBO0FBQ1QsS0FoQnFCO0FBaUJ0QixZQWpCc0Isc0JBaUJYO0FBQ1QsY0FBUSxRQUFSLENBQWlCLFdBQWpCLEVBQThCLEtBQTlCLENBQW9DLE9BQXBDLEdBQThDLE1BQTlDO0FBQ0Q7QUFuQnFCLEdBQXhCO0FBcUJBLE1BQU0sZUFBZTtBQUNuQixpQkFEbUIseUJBQ0wsS0FESyxFQUNFO0FBQ25CLFVBQU0sY0FBYyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBcEI7QUFDUTs7QUFFUixVQUFJLGdCQUFnQixFQUFwQjtBQUNBLFVBQUksaUJBQWlCLEVBQXJCO0FBQ0EsVUFBSSxZQUFZLFlBQVosQ0FBeUIsV0FBekIsTUFBMEMsSUFBOUMsRUFBb0Q7QUFDbEQsWUFBSSxZQUFZLEdBQWhCLEVBQXFCO0FBQ25CLDBCQUFnQixZQUFZLEdBQTVCO0FBQ0EsMkJBQWlCLGFBQWEsWUFBYixDQUEwQixhQUExQixFQUF5QyxPQUF6QyxDQUFqQjtBQUNELFNBSEQsTUFHTztBQUNPO0FBQ1osMEJBQWdCLFlBQVksWUFBWixDQUF5QixXQUF6QixDQUFoQjtBQUNBLDJCQUFpQixhQUFhLFlBQWIsQ0FBMEIsYUFBMUIsRUFBeUMsT0FBekMsQ0FBakI7QUFDRDtBQUNGLE9BVEQsTUFTTztBQUNLO0FBQ1Ysd0JBQWdCLFlBQVksWUFBWixDQUF5QixXQUF6QixDQUFoQjtBQUNBLHlCQUFpQixhQUFhLFlBQWIsQ0FBMEIsYUFBMUIsRUFBeUMsT0FBekMsQ0FBakI7QUFDRDtBQUNELFVBQU0saUJBQWlCLFFBQVEsTUFBUixDQUFlLFVBQWYsQ0FBdkI7QUFDQSxVQUFNLFNBQVMsZUFBZSxLQUE5QjtBQUNBLFVBQU0sV0FBVyxlQUFlLGNBQWhDO0FBQ0E7QUFDQSxxQkFBZSxLQUFmLFFBQTBCLE9BQU8sS0FBUCxDQUFhLENBQWIsRUFBZ0IsUUFBaEIsQ0FBMUIsR0FBc0QsY0FBdEQsR0FBdUUsT0FBTyxLQUFQLENBQWEsUUFBYixDQUF2RTtBQUNRO0FBQ0E7QUFDVCxLQTVCa0I7QUE2Qm5CLGdCQTdCbUIsd0JBNkJOLE1BN0JNLEVBNkJFLE9BN0JGLEVBNkJXO0FBQzVCLFVBQUksZUFBZSxFQUFuQjtBQUNBLFVBQUksWUFBWSxPQUFoQixFQUF5QjtBQUN2QixpQ0FBdUIsTUFBdkI7QUFDRDtBQUNELFVBQUksWUFBWSxPQUFoQixFQUF5QjtBQUN2Qix1QkFBZSxVQUFVLE1BQVYsQ0FBZjtBQUNEO0FBQ0QsVUFBSSxZQUFZLFdBQWhCLEVBQTZCO0FBQzNCLHVCQUFlLE1BQWY7QUFDRDtBQUNELGFBQU8sWUFBUDtBQUNEO0FBekNrQixHQUFyQjtBQTJDQSxNQUFNLGNBQWM7QUFDbEIsbUJBRGtCLDJCQUNGLEdBREUsRUFDRztBQUNuQixVQUFNLGdCQUFnQixRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQXRCO0FBQ0Esb0JBQWMsRUFBZCxlQUE2QixHQUE3QjtBQUNBLGNBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxNQUF2QyxHQUFnRCxPQUFoRDtBQUNBLGNBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxXQUFqQyxDQUE2QyxhQUE3QztBQUNBLGFBQU8sYUFBUDtBQUNELEtBUGlCO0FBUWxCLGdCQVJrQix3QkFRTCxHQVJLLEVBUUE7QUFDaEIsVUFBTSxpQkFBaUIsWUFBWSxlQUFaLENBQTRCLEdBQTVCLENBQXZCO0FBQ007QUFDTixVQUFNLFVBQVUsU0FBUyxHQUFULEVBQWMsSUFBOUI7QUFDQSxVQUFNLFlBQVksUUFBUSxNQUExQjtBQUNBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFwQixFQUErQixLQUFLLENBQXBDLEVBQXVDO0FBQ3JDLFlBQU0sYUFBYSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQW5CO0FBQ0EsbUJBQVcsU0FBWCxHQUF1QixXQUF2QjtBQUNBLFlBQU0sVUFBVSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQWhCO0FBQ0EsZ0JBQVEsR0FBUixHQUFjLFFBQVEsQ0FBUixDQUFkO0FBQ0EsZ0JBQVEsU0FBUixHQUFvQixLQUFwQjtBQUNBLGdCQUFRLE9BQVIsR0FBa0IsYUFBYSxhQUEvQjtBQUNBLGdCQUFRLFdBQVIsR0FBc0IsZ0JBQWdCLE9BQXRDO0FBQ0EsZ0JBQVEsVUFBUixHQUFxQixnQkFBZ0IsUUFBckM7O0FBRUEsbUJBQVcsV0FBWCxDQUF1QixPQUF2QjtBQUNBLHVCQUFlLFdBQWYsQ0FBMkIsVUFBM0I7QUFDRDtBQUNGLEtBMUJpQjtBQTJCbEIsbUJBM0JrQiwyQkEyQkYsR0EzQkUsRUEyQkc7QUFDbkIsVUFBTSxpQkFBaUIsWUFBWSxlQUFaLENBQTRCLEdBQTVCLENBQXZCO0FBQ0EsVUFBTSxVQUFVLFNBQVMsR0FBVCxFQUFjLElBQTlCO0FBQ0EsVUFBTSxZQUFZLFFBQVEsTUFBMUI7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBcEIsRUFBK0IsS0FBSyxDQUFwQyxFQUF1QztBQUNyQyxZQUFNLFVBQVUsUUFBUSxNQUFSLENBQWUsTUFBZixDQUFoQjtBQUNBLGdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLG9DQUF4QjtBQUNBLGdCQUFRLFNBQVIscUJBQW9DLFVBQVUsUUFBUSxDQUFSLENBQVYsQ0FBcEMsaUNBQW1GLFFBQVEsQ0FBUixDQUFuRjtBQUNBLFlBQUksU0FBUyxHQUFULEVBQWMsR0FBbEIsRUFBdUI7QUFDckIsa0JBQVEsU0FBUixxQkFBb0MsVUFBVSxRQUFRLENBQVIsQ0FBVixDQUFwQyxpQ0FBbUYsU0FBUyxHQUFULEVBQWMsR0FBZCxDQUFrQixDQUFsQixDQUFuRjtBQUNBLGtCQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsTUFBdkMsR0FBZ0QsTUFBaEQ7QUFDRDtBQUNELGdCQUFRLE9BQVIsR0FBa0IsYUFBYSxhQUEvQjtBQUNBLGdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLGdEQUF4QjtBQUNBLHVCQUFlLFdBQWYsQ0FBMkIsT0FBM0I7QUFDRDtBQUNGLEtBM0NpQjtBQTRDbEIsbUJBNUNrQiwyQkE0Q0YsR0E1Q0UsRUE0Q0c7QUFDbkIsVUFBTSxpQkFBaUIsWUFBWSxlQUFaLENBQTRCLEdBQTVCLENBQXZCO0FBQ0EsVUFBTSxVQUFVLFNBQVMsR0FBVCxFQUFjLElBQTlCO0FBQ0EsVUFBTSxVQUFVLFNBQVMsR0FBVCxFQUFjLEdBQTlCO0FBQ0EsVUFBTSxZQUFZLFFBQVEsTUFBMUI7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksU0FBcEIsRUFBK0IsS0FBSyxDQUFwQyxFQUF1QztBQUNyQyxZQUFNLFVBQVUsUUFBUSxNQUFSLENBQWUsS0FBZixDQUFoQjtBQUNBLGdCQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsR0FBdUIsUUFBUSxDQUFSLENBQXZCO0FBQ0EsZ0JBQVEsR0FBUixHQUFjLFFBQVEsQ0FBUixDQUFkO0FBQ0EsZ0JBQVEsU0FBUixHQUFvQixLQUFwQjtBQUNBLGdCQUFRLE9BQVIsR0FBa0IsYUFBYSxhQUEvQjtBQUNBLGdCQUFRLEtBQVIsQ0FBYyxPQUFkLEdBQXdCLGlEQUF4QjtBQUNBLHVCQUFlLFdBQWYsQ0FBMkIsT0FBM0I7QUFDRDtBQUNGO0FBMURpQixHQUFwQjtBQTREQSxNQUFNLFlBQVk7QUFDaEIsU0FEZ0IsbUJBQ1I7QUFDTixVQUFNLGVBQWUsUUFBUSxRQUFSLENBQWlCLGNBQWpCLENBQXJCO0FBQ0EsbUJBQWEsS0FBYixDQUFtQixPQUFuQixHQUE2QixNQUE3QjtBQUNBLFVBQU0saUJBQWlCLGFBQWEsVUFBcEM7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFSLEVBQVcsTUFBTSxlQUFlLE1BQXJDLEVBQTZDLElBQUksR0FBakQsRUFBc0QsS0FBSyxDQUEzRCxFQUE4RDtBQUNwRDtBQUNSLHVCQUFlLENBQWYsRUFBa0IsS0FBbEIsQ0FBd0IsT0FBeEIsR0FBa0MsTUFBbEM7QUFDRDtBQUNGO0FBVGUsR0FBbEI7QUFXQSxNQUFNLGFBQWE7QUFDakIsUUFEaUIsZ0JBQ1osS0FEWSxFQUNMO0FBQ1YsZ0JBQVUsS0FBVjtBQUNBLFVBQU0sY0FBYyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBcEI7QUFDQSxjQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsT0FBdkMsR0FBaUQsT0FBakQ7QUFDQSxjQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsS0FBdkMsR0FBK0MsUUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixLQUEzQixDQUFpQyxLQUFoRjtBQUNBLFVBQU0sV0FBVyxZQUFZLFlBQVosQ0FBeUIsYUFBekIsQ0FBakI7QUFDQSxVQUFNLFVBQVUsWUFBWSxZQUFaLENBQXlCLFVBQXpCLENBQWhCO0FBQ0EsVUFBSSxRQUFRLE1BQVIsY0FBMEIsT0FBMUIsQ0FBSixFQUEwQztBQUN4QyxnQkFBUSxNQUFSLGNBQTBCLE9BQTFCLEVBQXFDLEtBQXJDLENBQTJDLE9BQTNDLEdBQXFELE9BQXJEO0FBQ0EsWUFBSSxZQUFZLE9BQWhCLEVBQXlCLFFBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxNQUF2QyxHQUFnRCxNQUFoRCxDQUF6QixLQUNLLFFBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxNQUF2QyxHQUFnRCxPQUFoRDtBQUNMO0FBQ0Q7QUFDRCxVQUFJLGFBQWEsT0FBakIsRUFBMEI7QUFDeEIsb0JBQVksZUFBWixDQUE0QixPQUE1QjtBQUNELE9BRkQsTUFFTyxJQUFJLGFBQWEsT0FBakIsRUFBMEI7QUFDL0Isb0JBQVksWUFBWixDQUF5QixPQUF6QjtBQUNELE9BRk0sTUFFQSxJQUFJLGFBQWEsV0FBakIsRUFBOEI7QUFDbkMsb0JBQVksZUFBWixDQUE0QixPQUE1QjtBQUNEO0FBQ0Y7QUFyQmdCLEdBQW5COztBQTBCQSxNQUFNLGFBQWE7QUFDakIsZUFBVyxhQURNO0FBRWpCLFFBRmlCLGtCQUVWO0FBQ0M7QUFDTixVQUFNLFdBQVcsUUFBUSxNQUFSLENBQWUsS0FBZixDQUFqQjtBQUNBLGVBQVMsU0FBVCxpR0FBNkYsU0FBN0Y7QUFDQSxlQUFTLEVBQVQsR0FBYyxXQUFXLFNBQXpCO0FBQ0EsVUFBTSxhQUFhLE9BQU8sSUFBUCxDQUFZLFFBQVosRUFBc0IsTUFBekM7QUFDQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksVUFBcEIsRUFBZ0MsS0FBSyxDQUFyQyxFQUF3QztBQUN0QyxZQUFNLFVBQVUsT0FBTyxJQUFQLENBQVksUUFBWixFQUFzQixDQUF0QixDQUFoQjtBQUNBLFlBQU0sWUFBWSxTQUFTLE9BQVQsRUFBa0IsS0FBcEM7QUFDQSxZQUFNLFdBQVcsU0FBUyxPQUFULEVBQWtCLFFBQW5DO0FBQ0E7QUFDQSxZQUFNLFdBQVcsV0FBVyxJQUFYLENBQWdCLFNBQWhCLEVBQTJCLFdBQVcsSUFBdEMsRUFBNEMsT0FBNUMsRUFBcUQsUUFBckQsQ0FBakI7QUFDQSxpQkFBUyxXQUFULENBQXFCLFFBQXJCO0FBQ0Q7QUFDSztBQUNOLFVBQU0sV0FBVyxRQUFRLE1BQVIsQ0FBZSxNQUFmLENBQWpCO0FBQ0EsZUFBUyxTQUFULEdBQXFCLEtBQXJCO0FBQ0EsZUFBUyxTQUFULEdBQXFCLFNBQXJCO0FBQ0EsZUFBUyxFQUFULEdBQWMsU0FBZDtBQUNBLGVBQVMsT0FBVCxHQUFtQixVQUFVLEtBQTdCO0FBQ0EsZUFBUyxLQUFULENBQWUsT0FBZixHQUF5QixnQkFBekI7QUFDQSxlQUFTLFdBQVQsQ0FBcUIsUUFBckI7QUFDTTtBQUNOLFVBQU0sYUFBYSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQW5CO0FBQ0EsaUJBQVcsRUFBWCxHQUFnQixjQUFoQjtBQUNBLGVBQVMsV0FBVCxDQUFxQixVQUFyQjtBQUNNO0FBQ04sVUFBTSxZQUFZLFFBQVEsTUFBUixDQUFlLE9BQWYsQ0FBbEI7QUFDQSxnQkFBVSxTQUFWO0FBaUJBLGVBQVMsV0FBVCxDQUFxQixTQUFyQjtBQUNBLGFBQU8sUUFBUDtBQUNELEtBakRnQjtBQWtEakIsUUFsRGlCLGdCQWtEWixLQWxEWSxFQWtETCxJQWxESyxFQWtEQyxLQWxERCxFQWtEUSxPQWxEUixFQWtEaUI7QUFDaEMsVUFBTSxVQUFVLFFBQVEsTUFBUixDQUFlLE1BQWYsQ0FBaEI7QUFDQSxjQUFRLEVBQVIsR0FBYSxLQUFiO0FBQ0EsY0FBUSxTQUFSLEdBQW9CLFNBQXBCO0FBQ0EsY0FBUSxZQUFSLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBQ0EsY0FBUSxZQUFSLENBQXFCLGFBQXJCLEVBQW9DLE9BQXBDO0FBQ0EsVUFBTSwrQ0FBMkMsS0FBM0MscUJBQWdFLE9BQWhFLFNBQTJFLEtBQTNFLFNBQU47QUFDQSxjQUFRLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxjQUFRLFNBQVIsR0FBb0IsVUFBcEI7QUFDQSxhQUFPLE9BQVA7QUFDRDtBQTdEZ0IsR0FBbkI7O0FBaUVBLE1BQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFlBQVksSUFBakQsRUFBdUQ7QUFDckQ7QUFDQSxRQUFNLFVBQVUsU0FBUyxvQkFBVCxDQUE4QixVQUE5QixDQUFoQjtBQUNBO0FBQ0E7QUFDQSxRQUFNLGtCQUFrQixXQUFXLElBQVgsRUFBeEI7QUFDQSxRQUFJLFNBQVMsY0FBVCxDQUF3QixnQkFBeEIsTUFBOEMsSUFBbEQsRUFBd0Q7QUFDdEQsZUFBUyxjQUFULENBQXdCLGdCQUF4QixFQUEwQyxLQUExQyxDQUFnRCxRQUFoRCxHQUEyRCxRQUEzRDtBQUNEO0FBQ0QsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsTUFBNUIsRUFBb0MsS0FBSyxDQUF6QyxFQUE0QztBQUMxQztBQUNBLFVBQU0sY0FBYyxRQUFRLElBQVIsQ0FBYSxDQUFiLENBQXBCO0FBQ0E7QUFDQSxrQkFBWSxVQUFaLENBQXVCLFlBQXZCLENBQW9DLGVBQXBDLEVBQXFELFdBQXJEO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDSTs7OztBQUlBO0FBQ0E7OztBQUdKO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7OztBQUlEO0FBQ0YsQ0FwWkQ7O0FBc1pBLElBQUcsT0FBTyxPQUFQLEtBQW1CLFdBQXRCLEVBQW1DO0FBQy9CLE1BQUksV0FBVSxZQUFkO0FBQ0g7QUFDRCxJQUFJLE9BQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZXNsaW50IGxpbmVicmVhay1zdHlsZTogW1wiZXJyb3JcIiwgXCJ3aW5kb3dzXCJdICovXHJcblxyXG4vKiBlc2xpbnQtZGlzYWJsZSBzdHJpY3QgKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5jb25zdCBmdW4gPSAoaW1hZ2VwYXRoID0gJzE0ODU0MTI4MTAnKSA9PiB7XHJcbiAgY29uc3QgdmVyc2lvbk5vID0gJzQuMi4yJztcclxuICAgIC8qIEFkZHJlc3MgZnVuY3Rpb25cclxuICAgICAqIHN0YXJ0TnVtYmVyOiBudW1iZXIsIGluZGljYXRpbmcgdGhlIHN0YXJ0IG51bWJlcjtcclxuICAgICAqIGxlbmd0aEFycmF5OiBudW1iZXIsIGluZGljYXRpbmcgdGhlIGFkZHJBcnJheSBsZW5ndGg7XHJcbiAgICAgKiBzdHJQcmVmaXg6IHN0cmluZywgYWRkcmVzcyBQcmVmaXg7XHJcbiAgICAgKiBzdHJTdWZmaXg6IHN0cmluZywgYWRkcmVzcyBTdWZmaXg7XHJcbiAgICAgKiBsZWFkaW5nWmVybzogYm9vbGVuLCB0cnVlIGZvciBsZWFkaW5nIHplcm8gaW4gbnVtYmVyO1xyXG4gICAgICogYWRkckFycmF5OiBhcnJheSwgYWRkcmVzcyBhcnJheSwgZGVmYXVsdCBmb3IgZW1wdHk7XHJcbiAgICAgKi9cclxuICAgIC8vIOWIm+W7uuihqOaDheWMheaVsOe7hOeahOWHveaVsFxyXG4gIGZ1bmN0aW9uIGVtQWRkckFycmF5SGFuZGxlcihzdGFydE51bWJlciwgbGVuZ3RoQXJyYXksIHN0clByZWZpeCxcclxuICAgIHN0clN1ZmZpeCwgYWRkckFycmF5ID0gW10sIGxlYWRpbmdaZXJvID0gZmFsc2UpIHtcclxuICAgIGxldCBhZGRyVGVtcCA9ICcnO1xyXG4gICAgbGV0IGFkZHJOdW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0TnVtYmVyOyBqIDwgbGVuZ3RoQXJyYXk7IGogKz0gMSkge1xyXG4gICAgICBhZGRyTnVtYmVyID0gajtcclxuICAgICAgaWYgKGxlYWRpbmdaZXJvKSB7XHJcbiAgICAgICAgYWRkck51bWJlciA9IChqID4gOSkgPyAoaikgOiAoYDAke2p9YCk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkclRlbXAgPSBgJHtzdHJQcmVmaXh9JHthZGRyTnVtYmVyfSR7c3RyU3VmZml4fWA7XHJcbiAgICAgIGFkZHJBcnJheS5wdXNoKGFkZHJUZW1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhZGRyQXJyYXk7XHJcbiAgfVxyXG4gICAgLyog6KGo5oOF5YyF5Zyw5Z2A5pWw5o2uICovXHJcblxyXG5cclxuICAgIC8vIELnq5lcclxuICBjb25zdCBiaWxpRU0gPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTcsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMvMjIzMyAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJykuZ2lmJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzLycsICcucG5nJywgYmlsaUVNKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMCwgMTQsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMvYmlsaWJpbGlUViAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnKS5wbmcnLCBiaWxpRU0pO1xyXG4gICAgLy8gdG9yYemFsVxyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCAxNCwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczIvMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5qcGcnLCBiaWxpRU0sIHRydWUpO1xyXG4gICAgLy8g6Zi/5Y2h5p6XIGZyb20g5pGH5puz55m+5ZCIXHJcbiAgY29uc3QgQWthcmlTbWlsZSA9IGVtQWRkckFycmF5SGFuZGxlcigxLCAyMSwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczIvYWthcmknLCAnLmdpZicpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA3MiwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczMvYWthcmknLCAnLnBuZycsIEFrYXJpU21pbGUpO1xyXG4gICAgLy8gTmV3IEdhbWVcclxuICBjb25zdCBOZXdHYW1lID0gZW1BZGRyQXJyYXlIYW5kbGVyKDIsIDY0LCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzNC8weHgnLCAnLnBuZycpO1xyXG4gICAgLy8gQUNGVU5cclxuICBjb25zdCBBQ1NtaWxlNCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA1MSwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczYvJywgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDAsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHM1LycsICcuZ2lmJywgQUNTbWlsZTQsIHRydWUpO1xyXG4gICAgLy8gS0Yg5YaF572uXHJcbiAgY29uc3QgS0ZTbWlsZVVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA0OSwgYCR7dHlwZW9mIGltYWdlcGF0aCAhPT0gJ3VuZGVmaW5lZCcgPyBpbWFnZXBhdGggOiAnJ30vcG9zdC9zbWlsZS9lbS9lbWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmdpZicsIFtdLCB0cnVlKTtcclxuICBjb25zdCBLRlNtaWxlQ29kZSA9IGVtQWRkckFycmF5SGFuZGxlcigxMCwgNTgsICdbczonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICddJyk7XHJcbiAgICAvLyBsb3ZlbGl2ZeS4k+eUqOWwj1xyXG4gIGNvbnN0IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDEsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS9sb3ZlbGl2ZS9Mb3ZlbGl2ZTJuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA0MSwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL2xvdmVsaXZlL0xvdmVsaXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycsIExvdmVsaXZlU21hbGx0YXJnZXRVUkwpO1xyXG4gICAgLy8ga2blv6vmjbfku6PnoIEo6ZyA6KaB5pS55YaZ6Kej5p6E6LWL5YC8KVxyXG4gIGNvbnN0IGZ1bmN0aW9uRGVzY3JpcHRpb24gPSBbJ+WHuuWUrui0tHNlbGw95ZSu5Lu3JywgJ+W8leeUqCcsICfpmpDol49oaWRlPeelnuenmOetiee6pycsICfmj5LlhaXku6PnoIEnLCAn5Yig6Zmk57q/JywgJ+i3kemprOeBrycsICfmloflrZfpopzoibInLCAn57KX5L2TJyxcclxuICAgICfkuIvliJLnur8nLCAn5pac5L2TJywgJ+awtOW5s+e6vycsICfog4zmma/oibInLCAn5o+S5YWl5Zu+54mHJ107XHJcbiAgY29uc3QgZGVmYXVsdEZ1bmN0aW9uID0gWydbc2VsbD0xMDBdWy9zZWxsXScsICdbcXVvdGVdWy9xdW90ZV0nLCAnW2hpZGU9MTAwXVsvaGlkZV0nLCAnW2NvZGVdWy9jb2RlXScsXHJcbiAgICAnW3N0cmlrZV1bL3N0cmlrZV0nLCAnW2ZseV1bL2ZseV0nLCAnW2NvbG9yPSMwMEZGMDBdWy9jb2xvcl0nLCAnW2JdWy9iXScsICdbdV1bL3VdJywgJ1tpXVsvaV0nLFxyXG4gICAgJ1tocl0nLCAnW2JhY2tjb2xvcj1dWy9iYWNrY29sb3JdJywgJ1tpbWddWy9pbWddJ107XHJcbiAgICAvLyDpopzmloflrZdcclxuICBjb25zdCBlbW9qaSA9IFsnKOKXj+ODuyA4IOODu+KXjyknLFxyXG4gICAgJ+KVsCjguZHil5Ug4pa9IOKXleC5kSnila8nLCAnKOOCnc+J44O7KScsICfjgJzimarimaonLCAnKO++n9CU776f4omh776f0JTvvp8pJywgJyjvvL5v77y+Ke++iScsICcofHx8776f0JTvvp8pJywgJyhgzrXCtCApJywgJyjilazvvp/QtO++nyknLCAnKHx8fO++n9C0776fKScsICco77+j4oiH77+jKScsICco77+jM++/oyknLCAnKO+/o++9sO+/oyknLCAnKO+/oyAuIO+/oyknLCAnKO+/o++4v++/oyknLCAnKO+/o++4tu+/oyknLCAnKCrCtM+JYCopJywgJyjjg7vPieODuyknLCAnKOKMkuKWveKMkiknLCAnKO+/o+KWve+/o++8iScsICcoPeODu8+J44O7PSknLCAnKO+9gOODu8+J44O7wrQpJywgJyjjgJzvv6PilrPvv6Mp44CcJywgJyjvvaXiiIDvvaUpJyxcclxuICAgICcowrDiiIDCsCnvvoknLCAnKO+/ozPvv6MpJywgJ+KVrijvv6Pilr3vv6Mp4pWtJywgJyggwrRf44Kd772AKScsICfjga7jg67jga4nLCAnKO++idiCPCDguZHvvInor7blmL/imIbvvZ4nLCAnKCZsdDtfJmx0OyknLCAnKCZndDtfJmd0OyknLCAnKDvCrF/CrCknLCAnKOKWlOKWoeKWlCkvJywgJyjvvp/QlO++n+KJoe++n9C0776fKSE/JywgJ86jKO++n9C0776fOyknLCAnzqMoIO+/o+KWoe+/o3x8KScsXHJcbiAgICAnKMK077ybz4nvvJtgKScsICfvvIgvVNCUVCkvJywgJyhe44O7z4njg7teICknLCAnKO+9oe+9pc+J772l772hKScsICco4peP77+jKO+9tCnvv6Pil48pJywgJ861Pc61PSjjg47iiafiiIfiiaYp44OOJywgJyjCtO+9pV/vvaVgKScsICcoLV8tIyknLCAn77yI77+j44G477+j77yJJywgJyjvv6POtSgj77+jKSDOoycsICfjg70oYNCUwrQp776JJywgJyjila/CsOWPo8KwKeKVryjilLTigJTilLQnLCAn77yIIy1fLSnilK/ilIHilK8nLCAnXyg6M+OAjeKIoClfJywgJyjnrJEpJywgJyjmsZcpJywgJyjms6MpJywgJyjoi6bnrJEpJywgJyjCtOODu8+J44O7YCknLCAnKOKVr8Kw4pahwrDvvInila/vuLUg4pS74pSB4pS7JywgJyjila/igLXilqHigLIp4pWv77i14pS74pSB4pS7JywgJyggwrTPgWApJywgJygg776fz4nvvp8pJywgJyhv776fz4nvvp9vKScsICco44CAXs+JXiknLCAnKO+9oeKXleKIgOKXle+9oSknLCAnLygg4peV4oC/4oC/4peVIClcXFxcJywgJ8612akoIMK64oiAwrogKdu20LcnLCAnKO+/o861KCPvv6Mp4piG4pWw4pWuKO+/o+KWve+/oy8vLyknLFxyXG4gICAgJ++8iOKXj8K0M++9gO+8iX7imaonLCAnXyg60LfjgI3iiKApXycsICfRhdC+0YDQvtGI0L4hJywgJ++8vCheb14p77yPJywgJyjigKLMheeBrOKAosyFICknLCAnKO++n9CU776fKScsICfjgb7jgaPjgZ/jgY/jgIHlsI/lrabnlJ/jga/mnIDpq5jjgaDjgZzvvIHvvIEnLCAnzrU9zrU9zrU94pSPKOOCnOODreOCnDsp4pSbJyxcclxuICAgICco77ybwrDjgbvCsCknLCAn4o6d4omn4o+d4o+d4omm4o6gJywgJ+ODvSjinL/vvp/ilr3vvp8p44OOJywgJ+eElOOBq+iInuOBhOS4iuOBjOOCi+OCueODkeODvOOCr+OCiOOAgemCquaCquOBqueVsOaAp+S6pOmam+OBq+OAgeWkqee9sOOCkuS4juOBiO+8gScsICd84oCiz4nigKJgKSddO1xyXG5cclxuXHJcbiAgY29uc3QgTWVudUxpc3QgPSB7XHJcbiAgICBpdGVtNDogeyBkYXRhdHlwZTogJ2ltYWdlTGluaycsIHRpdGxlOiAn5Zu65pyJJywgYWRkcjogS0ZTbWlsZVVSTCwgcmVmOiBLRlNtaWxlQ29kZSB9LFxyXG4gICAgaXRlbTE6IHsgZGF0YXR5cGU6ICdwbGFpbicsIHRpdGxlOiAn5b+r5o23JywgYWRkcjogZGVmYXVsdEZ1bmN0aW9uLCByZWY6IGZ1bmN0aW9uRGVzY3JpcHRpb24gfSxcclxuICAgIGl0ZW0yOiB7IGRhdGF0eXBlOiAncGxhaW4nLCB0aXRsZTogJ+minOaWh+WtlycsIGFkZHI6IGVtb2ppIH0sXHJcbiAgICBpdGVtNTogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdBQ0ZVTicsIGFkZHI6IEFDU21pbGU0IH0sXHJcbiAgICBpdGVtNjogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICfluLjnlKgnLCBhZGRyOiBOZXdHYW1lIH0sICAvL1xyXG4gICAgaXRlbTc6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQWthcmknLCBhZGRyOiBBa2FyaVNtaWxlIH0sIC8vIEFrYXJpXHJcbiAgICBpdGVtODogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdCaWxpQmlsaScsIGFkZHI6IGJpbGlFTSB9LCAvLyBC56uZXHJcbiAgICBpdGVtMzogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdMb3ZlTGl2ZScsIGFkZHI6IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgfSxcclxuICB9O1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduKi9cclxuICAgIC8qIEV2ZW50IOWHveaVsCAqL1xyXG4gIGNvbnN0IEV2ZW50VXRpbCA9IHtcclxuICAgIGdldEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgIHJldHVybiBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGFyZ2V0KGV2ZW50KSB7XHJcbiAgICAgIHJldHVybiBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBwcmV2ZW50RGVmYXVsdChldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcclxuICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7ICAvLyBET00yXHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoYG9uJHt0eXBlfWAsIGhhbmRsZXIpOyAgLy8gSUVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50W2BvbiR7dHlwZX1gXSA9IGhhbmRsZXI7ICAvLyBET00gMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAvLyBET00yXHJcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoYG9uJHt0eXBlfWAsIGhhbmRsZXIpOyAvLyBJRVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRbYG9uJHt0eXBlfWBdID0gbnVsbDsgLy8gRE9NIDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24qL1xyXG4gICAgLyogRWxlbWVudCDlh73mlbAqL1xyXG4gIGNvbnN0IEVsZVV0aWwgPSB7XHJcbiAgICBjcmVhdGUoZWxlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0SUQoZWxlKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGUpO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdChzZWxlY3Rvcikge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgICAvKiDmqKHlnZcqL1xyXG4gIGNvbnN0IG1vdXNlT3ZlckFjdGlvbiA9IHtcclxuICAgIHNob3dJbWcoZXZlbnQpIHtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgLyogaWYgKCFldmVudFRhcmdldC5zcmMpIHtcclxuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XHJcbiAgICAgIH0qL1xyXG4gICAgICBjb25zdCBsYXJnZVZpZXdDb250YWluZXIgPSBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKTtcclxuICAgICAgY29uc3QgW3Njcm9sbFRvcFZhbHVlLCBzY3JvbGxMZWZ0VmFsdWVdID0gW2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7ZXZlbnRUYXJnZXQuc3JjfSAvPmA7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgKyBzY3JvbGxUb3BWYWx1ZSArIDIwfXB4YDtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYICsgc2Nyb2xsTGVmdFZhbHVlfXB4YDtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhbZXZlbnQuY2xpZW50WSxldmVudC5jbGllbnRYXSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coW0VsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLnRvcCxcclxuICAgICAgICAgICAgICAvLyBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS5sZWZ0XSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coW2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdF0pO1xyXG4gICAgfSxcclxuICAgIGNsZWFySW1nKCkge1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGF0dGFjaEFjdGlvbiA9IHtcclxuICAgIGF0dGFjaEVtb3Rpb24oZXZlbnQpIHtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldCk7XHJcblxyXG4gICAgICBsZXQgYWRkcmVzc1RhcmdldCA9ICcnO1xyXG4gICAgICBsZXQgZW1vdGlvbkFkZHJlc3MgPSAnJztcclxuICAgICAgaWYgKGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJykgPT09IG51bGwpIHtcclxuICAgICAgICBpZiAoZXZlbnRUYXJnZXQuc3JjKSB7XHJcbiAgICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuc3JjO1xyXG4gICAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdpbWFnZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2lnbicpO1xyXG4gICAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdwbGFpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1saW5rJyk7XHJcbiAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdwbGFpbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNlbGVjdFRleHRBcmVhID0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJyk7XHJcbiAgICAgIGNvbnN0IG92YWx1ZSA9IHNlbGVjdFRleHRBcmVhLnZhbHVlO1xyXG4gICAgICBjb25zdCBzdGFydFBvcyA9IHNlbGVjdFRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAvLyBjb25zdCBlbmRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgIHNlbGVjdFRleHRBcmVhLnZhbHVlID0gYCR7b3ZhbHVlLnNsaWNlKDAsIHN0YXJ0UG9zKX0ke2Vtb3Rpb25BZGRyZXNzfSR7b3ZhbHVlLnNsaWNlKHN0YXJ0UG9zKX1gO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbW90aW9uQWRkcmVzcyk7XHJcbiAgICB9LFxyXG4gICAgYWRkcmVzc1BhcnNlKGFkZFN0ciwgcGF0dGVybikge1xyXG4gICAgICBsZXQgc3RyaW5nUmV0dXJuID0gJyc7XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gYFtpbWddJHthZGRTdHJ9Wy9pbWddYDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ3BsYWluJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGRlY29kZVVSSShhZGRTdHIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAnaW1hZ2VMaW5rJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGFkZFN0cjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RyaW5nUmV0dXJuO1xyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZUl0ZW1zID0ge1xyXG4gICAgY3JlYXRlQ29udGFpbmVyKGtleSkge1xyXG4gICAgICBjb25zdCBJdGVtQ29udGFpbmVyID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICBJdGVtQ29udGFpbmVyLmlkID0gYGVkZGllMzIke2tleX1gO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5hcHBlbmRDaGlsZChJdGVtQ29udGFpbmVyKTtcclxuICAgICAgcmV0dXJuIEl0ZW1Db250YWluZXI7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSW1hZ2VzKGtleSkge1xyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhNZW51TGlzdFtrZXldKTtcclxuICAgICAgY29uc3QgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgaW1nTGVuZ3RoID0gaW1nTGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW1nTGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCBkaXZFbGVtZW50ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gJ2NsaWNrSXRlbSc7XHJcbiAgICAgICAgY29uc3QgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICBpbWdJdGVtLnNyYyA9IGltZ0xpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAnRW1zJztcclxuICAgICAgICBpbWdJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICBpbWdJdGVtLm9ubW91c2VvdmVyID0gbW91c2VPdmVyQWN0aW9uLnNob3dJbWc7XHJcbiAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3V0ID0gbW91c2VPdmVyQWN0aW9uLmNsZWFySW1nO1xyXG5cclxuICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlUGxhaW5UZXh0KGtleSkge1xyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICBjb25zdCB0eHRMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCB0eHRMZW5ndGggPSB0eHRMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0eHRMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IHR4dEl0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICAgIHR4dEl0ZW0uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcjsgbWFyZ2luOiAxMHB4IDEwcHg7JztcclxuICAgICAgICB0eHRJdGVtLmlubmVySFRNTCA9IGA8YSBkYXRhLXNpZ249JHtlbmNvZGVVUkkodHh0TGlzdFtrXSl9IGNsYXNzPSd0eHRCdG5FbW90aW9uJz4ke3R4dExpc3Rba119PC9hPmA7XHJcbiAgICAgICAgaWYgKE1lbnVMaXN0W2tleV0ucmVmKSB7XHJcbiAgICAgICAgICB0eHRJdGVtLmlubmVySFRNTCA9IGA8YSBkYXRhLXNpZ249JHtlbmNvZGVVUkkodHh0TGlzdFtrXSl9IGNsYXNzPSd0eHRCdG5FbW90aW9uJz4ke01lbnVMaXN0W2tleV0ucmVmW2tdfTwvYT5gO1xyXG4gICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0eHRJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICB0eHRJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7cGFkZGluZzogMTBweCAxMHB4OndpZHRoOiA1MHB4Oyc7XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHh0SXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZUxpbmsoa2V5KSB7XHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgIGNvbnN0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IHJlZkxpc3QgPSBNZW51TGlzdFtrZXldLnJlZjtcclxuICAgICAgY29uc3QgaW1nTGVuZ3RoID0gaW1nTGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW1nTGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCBpbWdJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ2ltZycpO1xyXG4gICAgICAgIGltZ0l0ZW0uZGF0YXNldC5saW5rID0gcmVmTGlzdFtrXTtcclxuICAgICAgICBpbWdJdGVtLnNyYyA9IGltZ0xpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAnRW1zJztcclxuICAgICAgICBpbWdJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICBpbWdJdGVtLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDUwcHggIWltcG9ydGFudDtoZWlnaHQ6IDUwcHggIWltcG9ydGFudDsnO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgY2xlYXJNZW51ID0ge1xyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgIGNvbnN0IHRvZ2dsZVdpbmRvdyA9IEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpO1xyXG4gICAgICB0b2dnbGVXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgY29uc3QgdG9nV2luQ2hpbGRyZW4gPSB0b2dnbGVXaW5kb3cuY2hpbGROb2RlcztcclxuICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHRvZ1dpbkNoaWxkcmVuLmxlbmd0aDsgaiA8IGxlbjsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2dXaW5DaGlsZHJlbltqXSk7XHJcbiAgICAgICAgdG9nV2luQ2hpbGRyZW5bal0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGV4cGFuZE1lbnUgPSB7XHJcbiAgICBpbml0KGV2ZW50KSB7XHJcbiAgICAgIGNsZWFyTWVudS5jbGVhcigpO1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUud2lkdGggPSBFbGVVdGlsLnNlbGVjdCgndGV4dGFyZWEnKS5zdHlsZS53aWR0aDtcclxuICAgICAgY29uc3QgZGF0YVR5cGUgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmV0eXBlJyk7XHJcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2lkJyk7XHJcbiAgICAgIGlmIChFbGVVdGlsLnNlbGVjdChgI2VkZGllMzIke2RhdGFLZXl9YCkpIHtcclxuICAgICAgICBFbGVVdGlsLnNlbGVjdChgI2VkZGllMzIke2RhdGFLZXl9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaWYgKGRhdGFLZXkgPT09ICdpdGVtMScpIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICBlbHNlIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ3BsYWluJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZVBsYWluVGV4dChkYXRhS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlcyhkYXRhS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ2ltYWdlTGluaycpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZUxpbmsoZGF0YUtleSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBjcmVhdGVNZW51ID0ge1xyXG4gICAgZGVmYXVsdElEOiAnZW1vdGlvbjAwMDAnLFxyXG4gICAgbWFpbigpIHtcclxuICAgICAgICAgICAgLyogbWFpbiBtZW51Ki9cclxuICAgICAgY29uc3QgbWFpbk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIG1haW5NZW51LmlubmVySFRNTCA9IGA8c3BhbiBpZD0nbGFyZ2VWaWV3Jz48L3NwYW4+PHNwYW4gY2xhc3M9J3N1Yk1lbnUnIHRpdGxlPSfkuLvoj5zljZUgdmVyc2lvbiAke3ZlcnNpb25Ob30nPjxiPuKRqOWbp+KRqDwvYj48L3NwYW4+YDtcclxuICAgICAgbWFpbk1lbnUuaWQgPSBjcmVhdGVNZW51LmRlZmF1bHRJRDtcclxuICAgICAgY29uc3QgTWVudUxlbmd0aCA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWVudUxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgTWVudUtleSA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KVtpXTtcclxuICAgICAgICBjb25zdCBNZW51VGl0bGUgPSBNZW51TGlzdFtNZW51S2V5XS50aXRsZTtcclxuICAgICAgICBjb25zdCBNZW51VHlwZSA9IE1lbnVMaXN0W01lbnVLZXldLmRhdGF0eXBlO1xyXG4gICAgICAgIC8vIGlmICghTWVudVR5cGUgfHwgIU1lbnVUaXRsZSkgY29uc29sZS5sb2coYGRhdGFlcnJvciAgJHtNZW51S2V5fWApO1xyXG4gICAgICAgIGNvbnN0IHRlc3RNZW51ID0gY3JlYXRlTWVudS5zdWJzKE1lbnVUaXRsZSwgZXhwYW5kTWVudS5pbml0LCBNZW51S2V5LCBNZW51VHlwZSk7XHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQodGVzdE1lbnUpO1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgIC8qIGNsb3NlIGJ1dHRvbiovXHJcbiAgICAgIGNvbnN0IGNsb3NlQnRuID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJ1t4XSc7XHJcbiAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdzdWJNZW51JztcclxuICAgICAgY2xvc2VCdG4uaWQgPSAnY2xvc2VFTSc7XHJcbiAgICAgIGNsb3NlQnRuLm9uY2xpY2sgPSBjbGVhck1lbnUuY2xlYXI7XHJcbiAgICAgIGNsb3NlQnRuLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXInO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgICAgIC8qIGRyb3Bkb3duIGJveCovXHJcbiAgICAgIGNvbnN0IGl0ZW1XaW5kb3cgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIGl0ZW1XaW5kb3cuaWQgPSAndG9nZ2xlV2luZG93JztcclxuICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoaXRlbVdpbmRvdyk7XHJcbiAgICAgICAgICAgIC8qIGNzcyBzdHlsZSovXHJcbiAgICAgIGNvbnN0IHN0eWxlSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdzdHlsZScpO1xyXG4gICAgICBzdHlsZUl0ZW0uaW5uZXJIVE1MID0gYCNlbW90aW9uMDAwMCB7cGFkZGluZzo1cHggNXB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAgIFxcXHJcbiAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE2cHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnfSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlld3twb3NpdGlvbjphYnNvbHV0ZTsgYmFja2dyb3VuZDogI2ZmZjt6LWluZGV4OjUwMDA7IG9wYWNpdHk6IDAuOH0gXFxcclxuICAgICAgICAgICAgICAgICNsYXJnZVZpZXcgaW1ne3dpZHRoOiAyMDBweDsgaGVpZ2h0OjIwMHB4O30gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cgYXtwYWRkaW5nOiA1cHggNXB4O2xpbmUtaGVpZ2h0OjJ9IFxcXHJcbiAgICAgICAgICAgICAgICAjdG9nZ2xlV2luZG93IHtoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAzcHggM3B4OyBvdmVyZmxvdy14OiBhdXRvOyBtYXJnaW4tdG9wOjZweDsgXFxcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NnB4OyBib3JkZXI6MXB4IHNvbGlkICNmZjQzNTE7IGRpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTsgei1pbmRleDoyMDA7IH1cXFxyXG4gICAgICAgICAgICAgICAgLmNsaWNrSXRlbXtkaXNwbGF5OmlubGluZS1ibG9jazsgei1pbmRleDozMDA7fVxyXG4gICAgICAgICAgICAgICAgYS5zdWJCdXR7dGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIC5FbXN7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6IDUwcHg7aGVpZ2h0OiA1MHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOyAgei1pbmRleDo0MDA7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS5zdWJCdXQ6aG92ZXJ7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9ue3RleHQtZGVjb3JhdGlvbjpub25lO30gXFxcclxuICAgICAgICAgICAgICAgIGEudHh0QnRuRW1vdGlvbjpob3ZlcntiYWNrZ3JvdW5kOiNmZjc2ODA7IGNvbG9yOiNmZmY7IH0gXFxcclxuICAgICAgICAgICAgICAgIC5zdWJNZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyOyB0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzogOHB4IDhweDsgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZic7XFxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQzNTE7Ym9yZGVyLWNvbG9yOiAjZmY0MzUxO2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIC5zdWJNZW51OmhvdmVyLCAuc3ViTWVudTpmb2N1cywgLnN1Yk1lbnU6dmlzaXRlZHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NjgwO2JvcmRlci1jb2xvcjogI2ZmNzY4MDtjb2xvcjogI2ZmZjt9YDtcclxuICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtKTtcclxuICAgICAgcmV0dXJuIG1haW5NZW51O1xyXG4gICAgfSxcclxuICAgIHN1YnModGl0bGUsIGZ1bmMsIHN1YmlkLCBzdWJ0eXBlKSB7XHJcbiAgICAgIGNvbnN0IHN1Yk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICBzdWJNZW51LmlkID0gc3ViaWQ7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NOYW1lID0gJ3N1Yk1lbnUnO1xyXG4gICAgICBzdWJNZW51LnNldEF0dHJpYnV0ZSgnZGF0YS1raWQnLCBzdWJpZCk7XHJcbiAgICAgIHN1Yk1lbnUuc2V0QXR0cmlidXRlKCdkYXRhLXJldHlwZScsIHN1YnR5cGUpO1xyXG4gICAgICBjb25zdCBzdWJjb250ZW50ID0gYDxhIGNsYXNzPSdzdWJCdXQnIGRhdGEta2lkPSR7c3ViaWR9IGRhdGUtcmV0eXBlPSR7c3VidHlwZX0+JHt0aXRsZX08L2E+YDtcclxuICAgICAgc3ViTWVudS5vbmNsaWNrID0gZnVuYztcclxuICAgICAgc3ViTWVudS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICBzdWJNZW51LmlubmVySFRNTCA9IHN1YmNvbnRlbnQ7XHJcbiAgICAgIHJldHVybiBzdWJNZW51O1xyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICE9IG51bGwpIHtcclxuICAgIC8vIGxldCB0ZXN0YXJlYUVsZVNldCA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCB0ZXN0U2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRlc3RTZXQuaXRlbSgwKSk7XHJcbiAgICBjb25zdCBtYWluRW1vdGlvbk1lbnUgPSBjcmVhdGVNZW51Lm1haW4oKTtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWNvbnRlbnQnKSAhPT0gbnVsbCkge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWNvbnRlbnQnKS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgdyA9IDA7IHcgPCB0ZXN0U2V0Lmxlbmd0aDsgdyArPSAxKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3RTZXQuaXRlbSh3KSk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRUZXN0ID0gdGVzdFNldC5pdGVtKHcpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhtYWluRW1vdGlvbk1lbnUpO1xyXG4gICAgICBlbGVtZW50VGVzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWluRW1vdGlvbk1lbnUsIGVsZW1lbnRUZXN0KTtcclxuICAgIH1cclxuICAgIC8vIE5vZGVMaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICAvLyBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgLy8gY29uc3QgZWxlbWVudFNldCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJykpO1xyXG4gICAgICAgIC8qIOWFvOWuueaAp+mXrumimCBCeSDllrXmi4nluIPkuIEyMDE3LjAxLjMwOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZeaWueazlei/lOWbnueahOaYr0hUTUxDb2xsZWN0aW9uXHJcbuWcqOi+g+aWsOeJiOeahEZpcmVmb3jkuK3vvIxIVE1MQ29sbGVjdGlvbuaUr+aMgUl0ZXJhdG9y5o6l5Y+j77yM5omA5Lul5Y+v5Lul55SoZm9yLi4ub2blvqrnjq9cclxu6ICM5ZyoQ2hyb21l5Lit77yI5oiR5Y+q5Zyo5L2/55SoQ2hyb21pdW0gNTDlhoXmoLjnmoTmtY/op4jlmajkuIvmtYvor5Xov4fvvInvvIxIVE1MQ29sbGVjdGlvbuS4jeaUr+aMgUl0ZXJhdG9y5o6l5Y+j77yM5LiN5Y+v55So55u05o6l5L2/55SoZm9yLi4ub2blvqrnjq9cclxu5omA5Lul5bu66K6u5qW85Li76L+Y5piv55So6ICB5pa55rOV5ZCnKi9cclxuICAgICAgICAvLyBTb2x1dGlvbiBzdGFja2Zsb3c6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjI3NTQzMTUvZm9yZWFjaC1sb29wLWZvci1odG1sY29sbGVjdGlvbi1lbGVtZW50c1xyXG4gICAgICAgIC8qIOi/mOaciUFycmF5LmZyb23mlrnms5Xnoa7lrp7og73op6PlhrNDaHJvbWXkuItIVE1MQ29sbGVjdGlvbuS4jeiDveeUqGZvci4uLm9m5b6q546v55qE6Zeu6aKY77yM5LiN6L+HQ2hyb21lIDQ15omN5byA5aeL5pSv5oyBQXJyYXkuZnJvbeaWueazlVxyXG7oi6Xmg7Plhbzlrrnku6XliY3nmoTmtY/op4jlmajnmoTor53vvIzlj6/ku6XnlKhmb3IuLi5pbuW+queOr++8jOaIluiAheWKoOS4qmJhYmVsLXBvbHlmaWxs6ISa5pysXHJcbuW9k+eEtuS9oOS4jeaDs+WFvOWuueS9v+eUqENocm9taXVtIDQ15Lul5YmN5YaF5qC455qE5rWP6KeI5Zmo5Lmf5rKh5aSa5aSn6Zeu6aKY77yM546w5Zyo5Zu95YaF5biC5Zy65Lu96aKd5pyA5aSaQ2hyb21pdW3lpZflo7PmtY/op4jlmagtLTM2MOWuieWFqOa1j+iniOWZqOeahOacgOaWsOato+W8j+eJiOS5n+aYr+mHh+eUqENocm9taXVtIDQ15YaF5qC45LqGKi9cclxuICAgIC8vIGNvbnN0IGVsZW1lbnRTZXRMZW5ndGggPSBlbGVtZW50U2V0Lmxlbmd0aDtcclxuICAgIC8qIGlmIChlbGVtZW50U2V0TGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gdGV4dGFyZWEnKTtcclxuICAgIH0gKi9cclxuICAgIC8vIHRlc3RhcmVhRWxlU2V0LmFkZChlbGVtZW50U2V0KTtcclxuICAgIC8qIGNvbnN0IHVzZXJPcHRpb24gPSB7XHJcbiAgICAgIHVzZXJXaW5kb3dIZWlnaHQ6IDEyMCxcclxuICAgICAgdXNlclNlbGVjdFRleHRBcmVhOiAnbGFzdCcsXHJcbiAgICB9OyAqL1xyXG5cclxuICAgIC8qIGVzbGludCBuby1yZXN0cmljdGVkLXN5bnRheDogWzEsIFwiRm9yT2ZTdGF0ZW1lbnRcIl0gKi9cclxuICAgIC8qIGZvciAoY29uc3QgZWxlbWVudFNpbmdsZSBvZiBlbGVtZW50U2V0KSB7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50U2luZ2xlKTtcclxuICAgICAgZWxlbWVudFNpbmdsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWluRW1vdGlvbk1lbnUsIGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgfSAqL1xyXG4gIH1cclxufTtcclxuXHJcbmlmKHR5cGVvZiBpbWdwYXRoID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgbGV0IGltZ3BhdGggPSAnMTQ4NTQxMjgxMCc7XHJcbn1cclxuZnVuKGltZ3BhdGgpO1xyXG4iXX0=
