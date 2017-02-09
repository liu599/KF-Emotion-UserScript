// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     4.3.4
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

const fun = (imagepath = '') => {
  const versionNo = '4.3.4';
  /* Address function
   * startNumber: number, indicating the start number;
   * lengthArray: number, indicating the addrArray length;
   * strPrefix: string, address Prefix;
   * strSuffix: string, address Suffix;
   * leadingZero: boolen, true for leading zero in number;
   * addrArray: array, address array, default for empty;
   */
  // 创建表情包数组的函数
  function emAddrArrayHandler(startNumber, lengthArray, strPrefix, strSuffix, addrArray = [], leadingZero = false) {
    let addrTemp = '';
    let addrNumber = 0;
    for (let j = startNumber; j < lengthArray; j += 1) {
      addrNumber = j;
      if (leadingZero) {
        addrNumber = j > 9 ? j : `0${j}`;
      }
      addrTemp = `${strPrefix}${addrNumber}${strSuffix}`;
      addrArray.push(addrTemp);
    }
    return addrArray;
  }
  /* 表情包地址数据 */

  // B站
  const biliEM = emAddrArrayHandler(1, 17, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/2233 (', ').gif');
  emAddrArrayHandler(1, 14, 'http://smile.nekohand.moe/blogAcc/Bilibili/xds/', '.png', biliEM);
  emAddrArrayHandler(0, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/bilibiliTV (', ').png', biliEM);
  // tora酱
  emAddrArrayHandler(1, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/tora/0', '.jpg', biliEM, true);
  // 阿卡林 from 摇曳百合
  const AkariSmile = emAddrArrayHandler(1, 21, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Dynamic/akari', '.gif');
  emAddrArrayHandler(1, 72, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/akari/akari', '.png', AkariSmile);
  // New Game kf扩展
  const NewGame = emAddrArrayHandler(2, 64, 'http://nekohand.moe/spsmile/01Sora/0xx', '.png');
  emAddrArrayHandler(1, 20, 'http://ss.nekohand.moe/Asource/EmotionPic/KFEM (', ').gif', NewGame);
  // ACFUN
  const ACSmile4 = emAddrArrayHandler(1, 51, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/New/', '.png');
  emAddrArrayHandler(1, 40, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/Niming/', '.gif', ACSmile4, true);
  // KF 内置
  const KFSmileURL = emAddrArrayHandler(1, 49, `${typeof imagepath !== 'undefined' ? imagepath : ''}/post/smile/em/em`, '.gif', [], true);
  const KFSmileCode = emAddrArrayHandler(10, 58, '[s:', ']');
  // lovelive专用小
  const LoveliveSmalltargetURL = emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Small/Lovelive2nd', '.png');
  emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Small/Lovelive', '.png', LoveliveSmalltargetURL);
  // kf快捷代码(需要改写解构赋值)
  const functionDescription = ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体', '下划线', '斜体', '水平线', '背景色', '插入图片'];
  const defaultFunction = ['[sell=100][/sell]', '[quote][/quote]', '[hide=100][/hide]', '[code][/code]', '[strike][/strike]', '[fly][/fly]', '[color=#00FF00][/color]', '[b][/b]', '[u][/u]', '[i][/i]', '[hr]', '[backcolor=][/backcolor]', '[img][/img]'];
  // 颜文字
  const emoji = ['(●・ 8 ・●)', '╰(๑◕ ▽ ◕๑)╯', '(ゝω・)', '〜♪♪', '(ﾟДﾟ≡ﾟДﾟ)', '(＾o＾)ﾉ', '(|||ﾟДﾟ)', '(`ε´ )', '(╬ﾟдﾟ)', '(|||ﾟдﾟ)', '(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)', '╮(￣▽￣)╭', '( ´_ゝ｀)', 'のヮの', '(ﾉ؂< ๑）诶嘿☆～', '(&lt;_&lt;)', '(&gt;_&gt;)', '(;¬_¬)', '(▔□▔)/', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', 'Σ( ￣□￣||)', '(´；ω；`)', '（/TДT)/', '(^・ω・^ )', '(｡･ω･｡)', '(●￣(ｴ)￣●)', 'ε=ε=(ノ≧∇≦)ノ', '(´･_･`)', '(-_-#)', '（￣へ￣）', '(￣ε(#￣) Σ', 'ヽ(`Д´)ﾉ', '(╯°口°)╯(┴—┴', '（#-_-)┯━┯', '_(:3」∠)_', '(笑)', '(汗)', '(泣)', '(苦笑)', '(´・ω・`)', '(╯°□°）╯︵ ┻━┻', '(╯‵□′)╯︵┻━┻', '( ´ρ`)', '( ﾟωﾟ)', '(oﾟωﾟo)', '(　^ω^)', '(｡◕∀◕｡)', '/( ◕‿‿◕ )\\', 'ε٩( º∀º )۶з', '(￣ε(#￣)☆╰╮(￣▽￣///)', '（●´3｀）~♪', '_(:з」∠)_', 'хорошо!', '＼(^o^)／', '(•̅灬•̅ )', '(ﾟДﾟ)', 'まったく、小学生は最高だぜ！！', 'ε=ε=ε=┏(゜ロ゜;)┛', '(；°ほ°)', '⎝≧⏝⏝≦⎠', 'ヽ(✿ﾟ▽ﾟ)ノ', '焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！', '|•ω•`)'];

  const MenuList = {
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
  const EventUtil = {
    getEvent(event) {
      return event || window.event;
    },
    getTarget(event) {
      return event.target || event.srcElement;
    },
    preventDefault(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    stopPropagation(event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    addHandler(element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false); // DOM2
      } else if (element.attachEvent) {
        element.attachEvent(`on${type}`, handler); // IE
      } else {
        element[`on${type}`] = handler; // DOM 0
      }
    },
    removeHandler(element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false); // DOM2
      } else if (element.detachEvent) {
        element.detachEvent(`on${type}`, handler); // IE
      } else {
        element[`on${type}`] = null; // DOM 0
      }
    }
  };
  /* eslint-enable no-param-reassign*/
  /* Element 函数*/
  const EleUtil = {
    create(ele) {
      return document.createElement(ele);
    },
    selectID(ele) {
      return document.getElementById(ele);
    },
    select(selector) {
      return document.querySelector(selector);
    }
  };
  /* 模块*/
  const mouseOverAction = {
    showImg(event) {
      const eventTarget = EventUtil.getTarget(event);
      /* if (!eventTarget.src) {
        return 'undefined';
      }*/
      const largeViewContainer = EleUtil.selectID('largeView');
      const [scrollTopValue, scrollLeftValue] = [document.body.scrollTop, document.body.scrollLeft];
      largeViewContainer.innerHTML = `<img src=${eventTarget.src} />`;
      largeViewContainer.style.display = 'block';
      largeViewContainer.style.top = `${event.clientY + scrollTopValue + 20}px`;
      largeViewContainer.style.left = `${event.clientX + scrollLeftValue}px`;
      // console.log([event.clientY,event.clientX]);
      // console.log([EleUtil.selectID('largeView').style.top,
      // EleUtil.selectID('largeView').style.left]);
      // console.log([document.body.scrollTop,document.body.scrollLeft]);
    },
    clearImg() {
      EleUtil.selectID('largeView').style.display = 'none';
    }
  };
  const attachAction = {
    attachEmotion(event) {
      const eventTarget = EventUtil.getTarget(event);
      // console.log(eventTarget);

      let addressTarget = '';
      let emotionAddress = '';
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
      const selectTextArea = EleUtil.select('textarea');
      const ovalue = selectTextArea.value;
      const startPos = selectTextArea.selectionStart;
      // const endPos = selectTextArea.selectionEnd;
      selectTextArea.value = `${ovalue.slice(0, startPos)}${emotionAddress}${ovalue.slice(startPos)}`;
      // console.log(eventTarget);
      // console.log(emotionAddress);
    },
    addressParse(addStr, pattern) {
      let stringReturn = '';
      if (pattern === 'image') {
        stringReturn = `[img]${addStr}[/img]`;
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
  const createItems = {
    createContainer(key) {
      const ItemContainer = EleUtil.create('div');
      ItemContainer.id = `eddie32${key}`;
      EleUtil.selectID('toggleWindow').style.height = '100px';
      EleUtil.selectID('toggleWindow').appendChild(ItemContainer);
      return ItemContainer;
    },
    createImages(key) {
      const outerContainer = createItems.createContainer(key);
      // console.log(MenuList[key]);
      const imgList = MenuList[key].addr;
      const imgLength = imgList.length;
      for (let k = 0; k < imgLength; k += 1) {
        const divElement = EleUtil.create('div');
        divElement.className = 'clickItem';
        const imgItem = EleUtil.create('img');
        imgItem.src = imgList[k];
        imgItem.className = 'Ems';
        imgItem.onclick = attachAction.attachEmotion;
        imgItem.onmouseover = mouseOverAction.showImg;
        imgItem.onmouseout = mouseOverAction.clearImg;

        divElement.appendChild(imgItem);
        outerContainer.appendChild(divElement);
      }
    },
    createPlainText(key) {
      const outerContainer = createItems.createContainer(key);
      const txtList = MenuList[key].addr;
      const txtLength = txtList.length;
      for (let k = 0; k < txtLength; k += 1) {
        const txtItem = EleUtil.create('span');
        txtItem.style.cssText = 'cursor:pointer; margin: 10px 10px;';
        txtItem.innerHTML = `<a data-sign=${encodeURI(txtList[k])} class='txtBtnEmotion'>${txtList[k]}</a>`;
        if (MenuList[key].ref) {
          txtItem.innerHTML = `<a data-sign=${encodeURI(txtList[k])} class='txtBtnEmotion'>${MenuList[key].ref[k]}</a>`;
          EleUtil.selectID('toggleWindow').style.height = '50px';
        }
        txtItem.onclick = attachAction.attachEmotion;
        txtItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 50px;';
        outerContainer.appendChild(txtItem);
      }
    },
    createImageLink(key) {
      const outerContainer = createItems.createContainer(key);
      const imgList = MenuList[key].addr;
      const refList = MenuList[key].ref;
      const imgLength = imgList.length;
      for (let k = 0; k < imgLength; k += 1) {
        const imgItem = EleUtil.create('img');
        imgItem.dataset.link = refList[k];
        imgItem.src = imgList[k];
        imgItem.className = 'Ems';
        imgItem.onclick = attachAction.attachEmotion;
        imgItem.style.cssText = 'width: 50px !important;height: 50px !important;';
        outerContainer.appendChild(imgItem);
      }
    }
  };
  const clearMenu = {
    clear() {
      const toggleWindow = EleUtil.selectID('toggleWindow');
      toggleWindow.style.display = 'none';
      const togWinChildren = toggleWindow.childNodes;
      for (let j = 0, len = togWinChildren.length; j < len; j += 1) {
        // console.log(togWinChildren[j]);
        togWinChildren[j].style.display = 'none';
      }
    }
  };
  const expandMenu = {
    init(event) {
      clearMenu.clear();
      const eventTarget = EventUtil.getTarget(event);
      EleUtil.selectID('toggleWindow').style.display = 'block';
      EleUtil.selectID('toggleWindow').style.width = EleUtil.select('textarea').style.width;
      const dataType = eventTarget.attributes[2].nodeValue;
      const dataKey = eventTarget.attributes[1].nodeValue;
      if (EleUtil.select(`#eddie32${dataKey}`)) {
        EleUtil.select(`#eddie32${dataKey}`).style.display = 'block';
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

  const createMenu = {
    defaultID: 'emotion0000',
    main() {
      /* main menu*/
      const mainMenu = EleUtil.create('div');
      mainMenu.innerHTML = `<span id='largeView'></span><span class='subMenu' title='主菜单 version ${versionNo}'><b>⑨囧⑨</b></span>`;
      mainMenu.id = createMenu.defaultID;
      const MenuLength = Object.keys(MenuList).length;
      for (let i = 0; i < MenuLength; i += 1) {
        const MenuKey = Object.keys(MenuList)[i];
        const MenuTitle = MenuList[MenuKey].title;
        const MenuType = MenuList[MenuKey].datatype;
        // if (!MenuType || !MenuTitle) console.log(`dataerror  ${MenuKey}`);
        const testMenu = createMenu.subs(MenuTitle, expandMenu.init, MenuKey, MenuType);
        mainMenu.appendChild(testMenu);
      }
      /* close button*/
      const closeBtn = EleUtil.create('span');
      closeBtn.innerHTML = '[x]';
      closeBtn.className = 'subMenu';
      closeBtn.id = 'closeEM';
      closeBtn.onclick = clearMenu.clear;
      closeBtn.style.cssText = 'cursor:pointer';
      mainMenu.appendChild(closeBtn);
      /* dropdown box*/
      const itemWindow = EleUtil.create('div');
      itemWindow.id = 'toggleWindow';
      mainMenu.appendChild(itemWindow);
      /* css style*/
      const styleItem = EleUtil.create('style');
      styleItem.innerHTML = `#emotion0000 {padding:5px 5px; vertical-align: middle;   \
                font: 12px/16px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif'} \
                #largeView{position:absolute; background: #fff;z-index:5000; opacity: 0.8} \
                #largeView img{width: 200px; height:200px;} \
                #toggleWindow a{padding: 5px 5px;line-height:2} \
                #toggleWindow {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:6px; \
                margin-bottom:6px; border:1px solid #ff4351; display:none;position:relative; z-index:200; }\
                .clickItem{display:inline-block; z-index:300;}
                a.subBut{text-decoration: none;color: #fff;} \
                .Ems{cursor:pointer;width: 50px;height: 50px;display:inline-block;  z-index:400;} \
                a.subBut:hover{color: #fff;} \
                a.txtBtnEmotion{text-decoration:none;} \
                a.txtBtnEmotion:hover{background:#ff7680; color:#fff; } \
                .subMenu{display:inline-block;cursor:pointer; text-align:center; padding: 8px 8px; \
                font: 12px/16px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif';\
                background-color: #ff4351;border-color: #ff4351;color: #fff;} \
                .subMenu:hover, .subMenu:focus, .subMenu:visited{background-color: #ff7680;border-color: #ff7680;color: #fff;}`;
      mainMenu.appendChild(styleItem);
      return mainMenu;
    },
    subs(title, func, subid, subtype) {
      const subMenu = EleUtil.create('span');
      subMenu.id = subid;
      subMenu.className = 'subMenu';
      const subcontent = `<a class='subBut' data-kid=${subid} date-type=${subtype}>${title}</a>`;
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
    const elementSet = Array.from(document.getElementsByTagName('textarea'));

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
    const mainEmotionMenu = createMenu.main();
    if (document.getElementById('editor-content') !== null) {
      document.getElementById('editor-content').style.position = 'static';
    }
    /* eslint no-restricted-syntax: [1, "ForOfStatement"] */
    for (const elementSingle of elementSet) {
      // console.log(elementSingle);
      elementSingle.parentNode.insertBefore(mainEmotionMenu, elementSingle);
    }
  }
};
const imagepath = '1485412810'; // This is fake.  Global Variable.
fun(imgpath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFHQSxNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQWIsS0FBb0I7QUFDOUIsUUFBTSxZQUFZLE9BQWxCO0FBQ0U7Ozs7Ozs7O0FBUUE7QUFDRixXQUFTLGtCQUFULENBQTRCLFdBQTVCLEVBQXlDLFdBQXpDLEVBQXNELFNBQXRELEVBQ0UsU0FERixFQUNhLFlBQVksRUFEekIsRUFDNkIsY0FBYyxLQUQzQyxFQUNrRDtBQUNoRCxRQUFJLFdBQVcsRUFBZjtBQUNBLFFBQUksYUFBYSxDQUFqQjtBQUNBLFNBQUssSUFBSSxJQUFJLFdBQWIsRUFBMEIsSUFBSSxXQUE5QixFQUEyQyxLQUFLLENBQWhELEVBQW1EO0FBQ2pELG1CQUFhLENBQWI7QUFDQSxVQUFJLFdBQUosRUFBaUI7QUFDZixxQkFBYyxJQUFJLENBQUwsR0FBVyxDQUFYLEdBQWtCLElBQUcsQ0FBRSxFQUFwQztBQUNEO0FBQ0QsaUJBQVksR0FBRSxTQUFVLEdBQUUsVUFBVyxHQUFFLFNBQVUsRUFBakQ7QUFDQSxnQkFBVSxJQUFWLENBQWUsUUFBZjtBQUNEO0FBQ0QsV0FBTyxTQUFQO0FBQ0Q7QUFDQzs7QUFHQTtBQUNGLFFBQU0sU0FBUyxtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsMkVBQTFCLEVBQ21CLE9BRG5CLENBQWY7QUFFQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsaURBQTFCLEVBQTZFLE1BQTdFLEVBQXFGLE1BQXJGO0FBQ0EscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLGlGQUExQixFQUNxQixPQURyQixFQUM4QixNQUQ5QjtBQUVFO0FBQ0YscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLGtFQUExQixFQUNxQixNQURyQixFQUM2QixNQUQ3QixFQUNxQyxJQURyQztBQUVFO0FBQ0Ys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QUFRLFNBQVIsR0FBb0IsU0FBcEI7QUFDQSxZQUFNLGFBQWMsOEJBQTZCLEtBQU0sY0FBYSxPQUFRLElBQUcsS0FBTSxNQUFyRjtBQUNBLGNBQVEsT0FBUixHQUFrQixJQUFsQjtBQUNBLGNBQVEsS0FBUixHQUFnQixLQUFoQjtBQUNBLGNBQVEsU0FBUixHQUFvQixVQUFwQjtBQUNBLGFBQU8sT0FBUDtBQUNEOztBQTNEZ0IsR0FBbkI7O0FBK0RBLE1BQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFlBQVksSUFBakQsRUFBdUQ7QUFDakQ7O0FBRUosYUFBUyxTQUFULENBQW1CLE9BQU8sUUFBMUIsSUFBc0MsTUFBTSxTQUFOLENBQWdCLE9BQU8sUUFBdkIsQ0FBdEM7QUFDQSxtQkFBZSxTQUFmLENBQXlCLE9BQU8sUUFBaEMsSUFBNEMsTUFBTSxTQUFOLENBQWdCLE9BQU8sUUFBdkIsQ0FBNUM7QUFDQSxVQUFNLGFBQWEsTUFBTSxJQUFOLENBQVcsU0FBUyxvQkFBVCxDQUE4QixVQUE5QixDQUFYLENBQW5COztBQUVJOzs7O0FBSUE7QUFDQTs7O0FBR0o7QUFDQTs7O0FBR0E7QUFDQTs7OztBQUlBLFVBQU0sa0JBQWtCLFdBQVcsSUFBWCxFQUF4QjtBQUNBLFFBQUksU0FBUyxjQUFULENBQXdCLGdCQUF4QixNQUE4QyxJQUFsRCxFQUF3RDtBQUN0RCxlQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDLEtBQTFDLENBQWdELFFBQWhELEdBQTJELFFBQTNEO0FBQ0Q7QUFDRDtBQUNBLFNBQUssTUFBTSxhQUFYLElBQTRCLFVBQTVCLEVBQXdDO0FBQ2hDO0FBQ04sb0JBQWMsVUFBZCxDQUF5QixZQUF6QixDQUFzQyxlQUF0QyxFQUF1RCxhQUF2RDtBQUNEO0FBQ0Y7QUFDRixDQTNZRDtBQTRZQSxNQUFNLFlBQVksWUFBbEIsQyxDQUFnQztBQUNoQyxJQUFJLFNBQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZXNsaW50IGxpbmVicmVhay1zdHlsZTogW1wiZXJyb3JcIiwgXCJ3aW5kb3dzXCJdICovXHJcblxyXG5cclxuY29uc3QgZnVuID0gKGltYWdlcGF0aCA9ICcnKSA9PiB7XHJcbiAgY29uc3QgdmVyc2lvbk5vID0gJzQuMi4yJztcclxuICAgIC8qIEFkZHJlc3MgZnVuY3Rpb25cclxuICAgICAqIHN0YXJ0TnVtYmVyOiBudW1iZXIsIGluZGljYXRpbmcgdGhlIHN0YXJ0IG51bWJlcjtcclxuICAgICAqIGxlbmd0aEFycmF5OiBudW1iZXIsIGluZGljYXRpbmcgdGhlIGFkZHJBcnJheSBsZW5ndGg7XHJcbiAgICAgKiBzdHJQcmVmaXg6IHN0cmluZywgYWRkcmVzcyBQcmVmaXg7XHJcbiAgICAgKiBzdHJTdWZmaXg6IHN0cmluZywgYWRkcmVzcyBTdWZmaXg7XHJcbiAgICAgKiBsZWFkaW5nWmVybzogYm9vbGVuLCB0cnVlIGZvciBsZWFkaW5nIHplcm8gaW4gbnVtYmVyO1xyXG4gICAgICogYWRkckFycmF5OiBhcnJheSwgYWRkcmVzcyBhcnJheSwgZGVmYXVsdCBmb3IgZW1wdHk7XHJcbiAgICAgKi9cclxuICAgIC8vIOWIm+W7uuihqOaDheWMheaVsOe7hOeahOWHveaVsFxyXG4gIGZ1bmN0aW9uIGVtQWRkckFycmF5SGFuZGxlcihzdGFydE51bWJlciwgbGVuZ3RoQXJyYXksIHN0clByZWZpeCxcclxuICAgIHN0clN1ZmZpeCwgYWRkckFycmF5ID0gW10sIGxlYWRpbmdaZXJvID0gZmFsc2UpIHtcclxuICAgIGxldCBhZGRyVGVtcCA9ICcnO1xyXG4gICAgbGV0IGFkZHJOdW1iZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaiA9IHN0YXJ0TnVtYmVyOyBqIDwgbGVuZ3RoQXJyYXk7IGogKz0gMSkge1xyXG4gICAgICBhZGRyTnVtYmVyID0gajtcclxuICAgICAgaWYgKGxlYWRpbmdaZXJvKSB7XHJcbiAgICAgICAgYWRkck51bWJlciA9IChqID4gOSkgPyAoaikgOiAoYDAke2p9YCk7XHJcbiAgICAgIH1cclxuICAgICAgYWRkclRlbXAgPSBgJHtzdHJQcmVmaXh9JHthZGRyTnVtYmVyfSR7c3RyU3VmZml4fWA7XHJcbiAgICAgIGFkZHJBcnJheS5wdXNoKGFkZHJUZW1wKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhZGRyQXJyYXk7XHJcbiAgfVxyXG4gICAgLyog6KGo5oOF5YyF5Zyw5Z2A5pWw5o2uICovXHJcblxyXG5cclxuICAgIC8vIELnq5lcclxuICBjb25zdCBiaWxpRU0gPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTcsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQmlsaUJpbGkvMjIzMyAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJykuZ2lmJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0JpbGliaWxpL3hkcy8nLCAnLnBuZycsIGJpbGlFTSk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDAsIDE0LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0JpbGlCaWxpL2JpbGliaWxpVFYgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJykucG5nJywgYmlsaUVNKTtcclxuICAgIC8vIHRvcmHphbFcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTQsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvdG9yYS8wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLmpwZycsIGJpbGlFTSwgdHJ1ZSk7XHJcbiAgICAvLyDpmL/ljaHmnpcgZnJvbSDmkYfmm7Pnmb7lkIhcclxuICBjb25zdCBBa2FyaVNtaWxlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDIxLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0R5bmFtaWMvYWthcmknLCAnLmdpZicpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA3MiwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9ha2FyaS9ha2FyaScsICcucG5nJywgQWthcmlTbWlsZSk7XHJcbiAgICAvLyBOZXcgR2FtZSBrZuaJqeWxlVxyXG4gIGNvbnN0IE5ld0dhbWUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMiwgNjQsICdodHRwOi8vbmVrb2hhbmQubW9lL3Nwc21pbGUvMDFTb3JhLzB4eCcsICcucG5nJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDIwLCAnaHR0cDovL3NzLm5la29oYW5kLm1vZS9Bc291cmNlL0Vtb3Rpb25QaWMvS0ZFTSAoJywgJykuZ2lmJywgTmV3R2FtZSk7XHJcbiAgICAvLyBBQ0ZVTlxyXG4gIGNvbnN0IEFDU21pbGU0ID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDUxLCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0FDRlVOL05ldy8nLCAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA0MCwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9BQ0ZVTi9OaW1pbmcvJywgJy5naWYnLCBBQ1NtaWxlNCwgdHJ1ZSk7XHJcbiAgICAvLyBLRiDlhoXnva5cclxuICBjb25zdCBLRlNtaWxlVVJMID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQ5LCBgJHt0eXBlb2YgaW1hZ2VwYXRoICE9PSAndW5kZWZpbmVkJyA/IGltYWdlcGF0aCA6ICcnfS9wb3N0L3NtaWxlL2VtL2VtYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZ2lmJywgW10sIHRydWUpO1xyXG4gIGNvbnN0IEtGU21pbGVDb2RlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEwLCA1OCwgJ1tzOicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ10nKTtcclxuICAgIC8vIGxvdmVsaXZl5LiT55So5bCPXHJcbiAgY29uc3QgTG92ZWxpdmVTbWFsbHRhcmdldFVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA0MSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMi9TbWFsbC9Mb3ZlbGl2ZTJuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA0MSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9TbWFsbC9Mb3ZlbGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnLCBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMKTtcclxuICAgIC8vIGtm5b+r5o235Luj56CBKOmcgOimgeaUueWGmeino+aehOi1i+WAvClcclxuICBjb25zdCBmdW5jdGlvbkRlc2NyaXB0aW9uID0gWyflh7rllK7otLRzZWxsPeWUruS7tycsICflvJXnlKgnLCAn6ZqQ6JePaGlkZT3npZ7np5jnrYnnuqcnLCAn5o+S5YWl5Luj56CBJywgJ+WIoOmZpOe6vycsICfot5Hpqaznga8nLCAn5paH5a2X6aKc6ImyJywgJ+eyl+S9kycsXHJcbiAgICAn5LiL5YiS57q/JywgJ+aWnOS9kycsICfmsLTlubPnur8nLCAn6IOM5pmv6ImyJywgJ+aPkuWFpeWbvueJhyddO1xyXG4gIGNvbnN0IGRlZmF1bHRGdW5jdGlvbiA9IFsnW3NlbGw9MTAwXVsvc2VsbF0nLCAnW3F1b3RlXVsvcXVvdGVdJywgJ1toaWRlPTEwMF1bL2hpZGVdJywgJ1tjb2RlXVsvY29kZV0nLFxyXG4gICAgJ1tzdHJpa2VdWy9zdHJpa2VdJywgJ1tmbHldWy9mbHldJywgJ1tjb2xvcj0jMDBGRjAwXVsvY29sb3JdJywgJ1tiXVsvYl0nLCAnW3VdWy91XScsICdbaV1bL2ldJyxcclxuICAgICdbaHJdJywgJ1tiYWNrY29sb3I9XVsvYmFja2NvbG9yXScsICdbaW1nXVsvaW1nXSddO1xyXG4gICAgLy8g6aKc5paH5a2XXHJcbiAgY29uc3QgZW1vamkgPSBbJyjil4/jg7sgOCDjg7vil48pJyxcclxuICAgICfilbAo4LmR4peVIOKWvSDil5XguZEp4pWvJywgJyjjgp3PieODuyknLCAn44Cc4pmq4pmqJywgJyjvvp/QlO++n+KJoe++n9CU776fKScsICco77y+b++8vinvvoknLCAnKHx8fO++n9CU776fKScsICcoYM61wrQgKScsICco4pWs776f0LTvvp8pJywgJyh8fHzvvp/QtO++nyknLCAnKO+/o+KIh++/oyknLCAnKO+/ozPvv6MpJywgJyjvv6PvvbDvv6MpJywgJyjvv6MgLiDvv6MpJywgJyjvv6PvuL/vv6MpJywgJyjvv6PvuLbvv6MpJywgJygqwrTPiWAqKScsICco44O7z4njg7spJywgJyjijJLilr3ijJIpJywgJyjvv6Pilr3vv6PvvIknLCAnKD3jg7vPieODuz0pJywgJyjvvYDjg7vPieODu8K0KScsICco44Cc77+j4paz77+jKeOAnCcsICco772l4oiA772lKScsXHJcbiAgICAnKMKw4oiAwrAp776JJywgJyjvv6Mz77+jKScsICfila4o77+j4pa977+jKeKVrScsICcoIMK0X+OCne+9gCknLCAn44Gu44Ou44GuJywgJyjvvonYgjwg4LmR77yJ6K+25Zi/4piG772eJywgJygmbHQ7XyZsdDspJywgJygmZ3Q7XyZndDspJywgJyg7wqxfwqwpJywgJyjilpTilqHilpQpLycsICco776f0JTvvp/iiaHvvp/QtO++nykhPycsICfOoyjvvp/QtO++nzspJywgJ86jKCDvv6PilqHvv6N8fCknLFxyXG4gICAgJyjCtO+8m8+J77ybYCknLCAn77yIL1TQlFQpLycsICcoXuODu8+J44O7XiApJywgJyjvvaHvvaXPie+9pe+9oSknLCAnKOKXj++/oyjvvbQp77+j4pePKScsICfOtT3OtT0o44OO4omn4oiH4ommKeODjicsICcowrTvvaVf772lYCknLCAnKC1fLSMpJywgJ++8iO+/o+OBuO+/o++8iScsICco77+jzrUoI++/oykgzqMnLCAn44O9KGDQlMK0Ke++iScsICco4pWvwrDlj6PCsCnila8o4pS04oCU4pS0JywgJ++8iCMtXy0p4pSv4pSB4pSvJywgJ18oOjPjgI3iiKApXycsICco56yRKScsICco5rGXKScsICco5rOjKScsICco6Ium56yRKScsICcowrTjg7vPieODu2ApJywgJyjila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuycsICco4pWv4oC14pah4oCyKeKVr++4teKUu+KUgeKUuycsICcoIMK0z4FgKScsICcoIO++n8+J776fKScsICcob+++n8+J776fbyknLCAnKOOAgF7PiV4pJywgJyjvvaHil5XiiIDil5XvvaEpJywgJy8oIOKXleKAv+KAv+KXlSApXFxcXCcsICfOtdmpKCDCuuKIgMK6ICnbttC3JywgJyjvv6POtSgj77+jKeKYhuKVsOKVrijvv6Pilr3vv6MvLy8pJyxcclxuICAgICfvvIjil4/CtDPvvYDvvIl+4pmqJywgJ18oOtC344CN4oigKV8nLCAn0YXQvtGA0L7RiNC+IScsICfvvLwoXm9eKe+8jycsICco4oCizIXngazigKLMhSApJywgJyjvvp/QlO++nyknLCAn44G+44Gj44Gf44GP44CB5bCP5a2m55Sf44Gv5pyA6auY44Gg44Gc77yB77yBJywgJ861Pc61Pc61PeKUjyjjgpzjg63jgpw7KeKUmycsXHJcbiAgICAnKO+8m8Kw44G7wrApJywgJ+KOneKJp+KPneKPneKJpuKOoCcsICfjg70o4py/776f4pa9776fKeODjicsICfnhJTjgavoiJ7jgYTkuIrjgYzjgovjgrnjg5Hjg7zjgq/jgojjgIHpgqrmgqrjgarnlbDmgKfkuqTpmpvjgavjgIHlpKnnvbDjgpLkuI7jgYjvvIEnLCAnfOKAos+J4oCiYCknXTtcclxuXHJcblxyXG4gIGNvbnN0IE1lbnVMaXN0ID0ge1xyXG4gICAgaXRlbTQ6IHsgZGF0YXR5cGU6ICdpbWFnZUxpbmsnLCB0aXRsZTogJ+WbuuaciScsIGFkZHI6IEtGU21pbGVVUkwsIHJlZjogS0ZTbWlsZUNvZGUgfSxcclxuICAgIGl0ZW0xOiB7IGRhdGF0eXBlOiAncGxhaW4nLCB0aXRsZTogJ+W/q+aNtycsIGFkZHI6IGRlZmF1bHRGdW5jdGlvbiwgcmVmOiBmdW5jdGlvbkRlc2NyaXB0aW9uIH0sXHJcbiAgICBpdGVtMjogeyBkYXRhdHlwZTogJ3BsYWluJywgdGl0bGU6ICfpopzmloflrZcnLCBhZGRyOiBlbW9qaSB9LFxyXG4gICAgaXRlbTU6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQUNGVU4nLCBhZGRyOiBBQ1NtaWxlNCB9LFxyXG4gICAgaXRlbTY6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAn5bi455SoJywgYWRkcjogTmV3R2FtZSB9LCAgLy9cclxuICAgIGl0ZW03OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0FrYXJpJywgYWRkcjogQWthcmlTbWlsZSB9LCAvLyBBa2FyaVxyXG4gICAgaXRlbTg6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQmlsaUJpbGknLCBhZGRyOiBiaWxpRU0gfSwgLy8gQuermVxyXG4gICAgaXRlbTM6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnTG92ZUxpdmUnLCBhZGRyOiBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMIH0sXHJcbiAgfTtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiovXHJcbiAgICAvKiBFdmVudCDlh73mlbAgKi9cclxuICBjb25zdCBFdmVudFV0aWwgPSB7XHJcbiAgICBnZXRFdmVudChldmVudCkge1xyXG4gICAgICByZXR1cm4gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgfSxcclxuICAgIGdldFRhcmdldChldmVudCkge1xyXG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudERlZmF1bHQoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAgLy8gRE9NMlxyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGBvbiR7dHlwZX1gLCBoYW5kbGVyKTsgIC8vIElFXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFtgb24ke3R5cGV9YF0gPSBoYW5kbGVyOyAgLy8gRE9NIDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xyXG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgLy8gRE9NMlxyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICBlbGVtZW50LmRldGFjaEV2ZW50KGBvbiR7dHlwZX1gLCBoYW5kbGVyKTsgLy8gSUVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50W2BvbiR7dHlwZX1gXSA9IG51bGw7IC8vIERPTSAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduKi9cclxuICAgIC8qIEVsZW1lbnQg5Ye95pWwKi9cclxuICBjb25zdCBFbGVVdGlsID0ge1xyXG4gICAgY3JlYXRlKGVsZSkge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdElEKGVsZSkge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3Qoc2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgfSxcclxuICB9O1xyXG4gICAgLyog5qih5Z2XKi9cclxuICBjb25zdCBtb3VzZU92ZXJBY3Rpb24gPSB7XHJcbiAgICBzaG93SW1nKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgIC8qIGlmICghZXZlbnRUYXJnZXQuc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xyXG4gICAgICB9Ki9cclxuICAgICAgY29uc3QgbGFyZ2VWaWV3Q29udGFpbmVyID0gRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jyk7XHJcbiAgICAgIGNvbnN0IFtzY3JvbGxUb3BWYWx1ZSwgc2Nyb2xsTGVmdFZhbHVlXSA9IFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XTtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke2V2ZW50VGFyZ2V0LnNyY30gLz5gO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZICsgc2Nyb2xsVG9wVmFsdWUgKyAyMH1weGA7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCArIHNjcm9sbExlZnRWYWx1ZX1weGA7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coW2V2ZW50LmNsaWVudFksZXZlbnQuY2xpZW50WF0pO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS50b3AsXHJcbiAgICAgICAgICAgICAgLy8gRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUubGVmdF0pO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdKTtcclxuICAgIH0sXHJcbiAgICBjbGVhckltZygpIHtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBhdHRhY2hBY3Rpb24gPSB7XHJcbiAgICBhdHRhY2hFbW90aW9uKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgbGV0IGFkZHJlc3NUYXJnZXQgPSAnJztcclxuICAgICAgbGV0IGVtb3Rpb25BZGRyZXNzID0gJyc7XHJcbiAgICAgIGlmIChldmVudFRhcmdldC5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIGlmIChldmVudFRhcmdldC5zcmMpIHtcclxuICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5zcmM7XHJcbiAgICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ2ltYWdlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xyXG4gICAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdwbGFpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xyXG4gICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAncGxhaW4nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RUZXh0QXJlYSA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCBvdmFsdWUgPSBzZWxlY3RUZXh0QXJlYS52YWx1ZTtcclxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgLy8gY29uc3QgZW5kUG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uRW5kO1xyXG4gICAgICBzZWxlY3RUZXh0QXJlYS52YWx1ZSA9IGAke292YWx1ZS5zbGljZSgwLCBzdGFydFBvcyl9JHtlbW90aW9uQWRkcmVzc30ke292YWx1ZS5zbGljZShzdGFydFBvcyl9YDtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZW1vdGlvbkFkZHJlc3MpO1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3NQYXJzZShhZGRTdHIsIHBhdHRlcm4pIHtcclxuICAgICAgbGV0IHN0cmluZ1JldHVybiA9ICcnO1xyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGBbaW1nXSR7YWRkU3RyfVsvaW1nXWA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdwbGFpbicpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBkZWNvZGVVUkkoYWRkU3RyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ2ltYWdlTGluaycpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBhZGRTdHI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cmluZ1JldHVybjtcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVJdGVtcyA9IHtcclxuICAgIGNyZWF0ZUNvbnRhaW5lcihrZXkpIHtcclxuICAgICAgY29uc3QgSXRlbUNvbnRhaW5lciA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgSXRlbUNvbnRhaW5lci5pZCA9IGBlZGRpZTMyJHtrZXl9YDtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93JykuYXBwZW5kQ2hpbGQoSXRlbUNvbnRhaW5lcik7XHJcbiAgICAgIHJldHVybiBJdGVtQ29udGFpbmVyO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUltYWdlcyhrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTWVudUxpc3Rba2V5XSk7XHJcbiAgICAgIGNvbnN0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGl2RWxlbWVudCA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9ICdjbGlja0l0ZW0nO1xyXG4gICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3ZlciA9IG1vdXNlT3ZlckFjdGlvbi5zaG93SW1nO1xyXG4gICAgICAgIGltZ0l0ZW0ub25tb3VzZW91dCA9IG1vdXNlT3ZlckFjdGlvbi5jbGVhckltZztcclxuXHJcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZVBsYWluVGV4dChrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgY29uc3QgdHh0TGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgdHh0TGVuZ3RoID0gdHh0TGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdHh0TGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCB0eHRJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgICB0eHRJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7IG1hcmdpbjogMTBweCAxMHB4Oyc7XHJcbiAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHt0eHRMaXN0W2tdfTwvYT5gO1xyXG4gICAgICAgIGlmIChNZW51TGlzdFtrZXldLnJlZikge1xyXG4gICAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHtNZW51TGlzdFtrZXldLnJlZltrXX08L2E+YDtcclxuICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHh0SXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgdHh0SXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6IDEwcHggMTBweDp3aWR0aDogNTBweDsnO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHR4dEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSW1hZ2VMaW5rKGtleSkge1xyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICBjb25zdCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCByZWZMaXN0ID0gTWVudUxpc3Rba2V5XS5yZWY7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICBpbWdJdGVtLmRhdGFzZXQubGluayA9IHJlZkxpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7JztcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGNsZWFyTWVudSA9IHtcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICBjb25zdCB0b2dnbGVXaW5kb3cgPSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKTtcclxuICAgICAgdG9nZ2xlV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGNvbnN0IHRvZ1dpbkNoaWxkcmVuID0gdG9nZ2xlV2luZG93LmNoaWxkTm9kZXM7XHJcbiAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSB0b2dXaW5DaGlsZHJlbi5sZW5ndGg7IGogPCBsZW47IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9nV2luQ2hpbGRyZW5bal0pO1xyXG4gICAgICAgIHRvZ1dpbkNoaWxkcmVuW2pdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBleHBhbmRNZW51ID0ge1xyXG4gICAgaW5pdChldmVudCkge1xyXG4gICAgICBjbGVhck1lbnUuY2xlYXIoKTtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLndpZHRoID0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJykuc3R5bGUud2lkdGg7XHJcbiAgICAgIGNvbnN0IGRhdGFUeXBlID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1syXS5ub2RlVmFsdWU7XHJcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLm5vZGVWYWx1ZTtcclxuICAgICAgaWYgKEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKSkge1xyXG4gICAgICAgIEVsZVV0aWwuc2VsZWN0KGAjZWRkaWUzMiR7ZGF0YUtleX1gKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBpZiAoZGF0YUtleSA9PT0gJ2l0ZW0xJykgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIGVsc2UgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGFUeXBlID09PSAncGxhaW4nKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlUGxhaW5UZXh0KGRhdGFLZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VzKGRhdGFLZXkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSAnaW1hZ2VMaW5rJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlTGluayhkYXRhS2V5KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGNyZWF0ZU1lbnUgPSB7XHJcbiAgICBkZWZhdWx0SUQ6ICdlbW90aW9uMDAwMCcsXHJcbiAgICBtYWluKCkge1xyXG4gICAgICAgICAgICAvKiBtYWluIG1lbnUqL1xyXG4gICAgICBjb25zdCBtYWluTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgbWFpbk1lbnUuaW5uZXJIVE1MID0gYDxzcGFuIGlkPSdsYXJnZVZpZXcnPjwvc3Bhbj48c3BhbiBjbGFzcz0nc3ViTWVudScgdGl0bGU9J+S4u+iPnOWNlSB2ZXJzaW9uICR7dmVyc2lvbk5vfSc+PGI+4pGo5Zun4pGoPC9iPjwvc3Bhbj5gO1xyXG4gICAgICBtYWluTWVudS5pZCA9IGNyZWF0ZU1lbnUuZGVmYXVsdElEO1xyXG4gICAgICBjb25zdCBNZW51TGVuZ3RoID0gT2JqZWN0LmtleXMoTWVudUxpc3QpLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNZW51TGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBNZW51S2V5ID0gT2JqZWN0LmtleXMoTWVudUxpc3QpW2ldO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUaXRsZSA9IE1lbnVMaXN0W01lbnVLZXldLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUeXBlID0gTWVudUxpc3RbTWVudUtleV0uZGF0YXR5cGU7XHJcbiAgICAgICAgLy8gaWYgKCFNZW51VHlwZSB8fCAhTWVudVRpdGxlKSBjb25zb2xlLmxvZyhgZGF0YWVycm9yICAke01lbnVLZXl9YCk7XHJcbiAgICAgICAgY29uc3QgdGVzdE1lbnUgPSBjcmVhdGVNZW51LnN1YnMoTWVudVRpdGxlLCBleHBhbmRNZW51LmluaXQsIE1lbnVLZXksIE1lbnVUeXBlKTtcclxuICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZCh0ZXN0TWVudSk7XHJcbiAgICAgIH1cclxuICAgICAgICAgICAgLyogY2xvc2UgYnV0dG9uKi9cclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnW3hdJztcclxuICAgICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ3N1Yk1lbnUnO1xyXG4gICAgICBjbG9zZUJ0bi5pZCA9ICdjbG9zZUVNJztcclxuICAgICAgY2xvc2VCdG4ub25jbGljayA9IGNsZWFyTWVudS5jbGVhcjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcic7XHJcbiAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgLyogZHJvcGRvd24gYm94Ki9cclxuICAgICAgY29uc3QgaXRlbVdpbmRvdyA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgaXRlbVdpbmRvdy5pZCA9ICd0b2dnbGVXaW5kb3cnO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpdGVtV2luZG93KTtcclxuICAgICAgICAgICAgLyogY3NzIHN0eWxlKi9cclxuICAgICAgY29uc3Qgc3R5bGVJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3N0eWxlJyk7XHJcbiAgICAgIHN0eWxlSXRlbS5pbm5lckhUTUwgPSBgI2Vtb3Rpb24wMDAwIHtwYWRkaW5nOjVweCA1cHg7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICAgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZid9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3e3Bvc2l0aW9uOmFic29sdXRlOyBiYWNrZ3JvdW5kOiAjZmZmO3otaW5kZXg6NTAwMDsgb3BhY2l0eTogMC44fSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlldyBpbWd7d2lkdGg6IDIwMHB4OyBoZWlnaHQ6MjAwcHg7fSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyBhe3BhZGRpbmc6IDVweCA1cHg7bGluZS1oZWlnaHQ6Mn0gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cge2hlaWdodDogMTAwcHg7IHBhZGRpbmc6IDNweCAzcHg7IG92ZXJmbG93LXg6IGF1dG87IG1hcmdpbi10b3A6NnB4OyBcXFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo2cHg7IGJvcmRlcjoxcHggc29saWQgI2ZmNDM1MTsgZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlOyB6LWluZGV4OjIwMDsgfVxcXHJcbiAgICAgICAgICAgICAgICAuY2xpY2tJdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrOyB6LWluZGV4OjMwMDt9XHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dHt0ZXh0LWRlY29yYXRpb246IG5vbmU7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLkVtc3tjdXJzb3I6cG9pbnRlcjt3aWR0aDogNTBweDtoZWlnaHQ6IDUwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7ICB6LWluZGV4OjQwMDt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnN1YkJ1dDpob3Zlcntjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb257dGV4dC1kZWNvcmF0aW9uOm5vbmU7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9uOmhvdmVye2JhY2tncm91bmQ6I2ZmNzY4MDsgY29sb3I6I2ZmZjsgfSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y3Vyc29yOnBvaW50ZXI7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOiA4cHggOHB4OyBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8xNnB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJztcXFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDM1MTtib3JkZXItY29sb3I6ICNmZjQzNTE7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgLnN1Yk1lbnU6aG92ZXIsIC5zdWJNZW51OmZvY3VzLCAuc3ViTWVudTp2aXNpdGVke2JhY2tncm91bmQtY29sb3I6ICNmZjc2ODA7Ym9yZGVyLWNvbG9yOiAjZmY3NjgwO2NvbG9yOiAjZmZmO31gO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChzdHlsZUl0ZW0pO1xyXG4gICAgICByZXR1cm4gbWFpbk1lbnU7XHJcbiAgICB9LFxyXG4gICAgc3Vicyh0aXRsZSwgZnVuYywgc3ViaWQsIHN1YnR5cGUpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgIHN1Yk1lbnUuaWQgPSBzdWJpZDtcclxuICAgICAgc3ViTWVudS5jbGFzc05hbWUgPSAnc3ViTWVudSc7XHJcbiAgICAgIGNvbnN0IHN1YmNvbnRlbnQgPSBgPGEgY2xhc3M9J3N1YkJ1dCcgZGF0YS1raWQ9JHtzdWJpZH0gZGF0ZS10eXBlPSR7c3VidHlwZX0+JHt0aXRsZX08L2E+YDtcclxuICAgICAgc3ViTWVudS5vbmNsaWNrID0gZnVuYztcclxuICAgICAgc3ViTWVudS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICBzdWJNZW51LmlubmVySFRNTCA9IHN1YmNvbnRlbnQ7XHJcbiAgICAgIHJldHVybiBzdWJNZW51O1xyXG4gICAgfSxcclxuXHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAvLyBsZXQgdGVzdGFyZWFFbGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG5cclxuICAgIE5vZGVMaXN0LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gQXJyYXkucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgY29uc3QgZWxlbWVudFNldCA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJykpO1xyXG5cclxuICAgICAgICAvKiDlhbzlrrnmgKfpl67popggQnkg5Za15ouJ5biD5LiBMjAxNy4wMS4zMDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWXmlrnms5Xov5Tlm57nmoTmmK9IVE1MQ29sbGVjdGlvblxyXG7lnKjovoPmlrDniYjnmoRGaXJlZm945Lit77yMSFRNTENvbGxlY3Rpb27mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOaJgOS7peWPr+S7peeUqGZvci4uLm9m5b6q546vXHJcbuiAjOWcqENocm9tZeS4re+8iOaIkeWPquWcqOS9v+eUqENocm9taXVtIDUw5YaF5qC455qE5rWP6KeI5Zmo5LiL5rWL6K+V6L+H77yJ77yMSFRNTENvbGxlY3Rpb27kuI3mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOS4jeWPr+eUqOebtOaOpeS9v+eUqGZvci4uLm9m5b6q546vXHJcbuaJgOS7peW7uuiurualvOS4u+i/mOaYr+eUqOiAgeaWueazleWQpyovXHJcbiAgICAgICAgLy8gU29sdXRpb24gc3RhY2tmbG93OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNzU0MzE1L2ZvcmVhY2gtbG9vcC1mb3ItaHRtbGNvbGxlY3Rpb24tZWxlbWVudHNcclxuICAgICAgICAvKiDov5jmnIlBcnJheS5mcm9t5pa55rOV56Gu5a6e6IO96Kej5YazQ2hyb21l5LiLSFRNTENvbGxlY3Rpb27kuI3og73nlKhmb3IuLi5vZuW+queOr+eahOmXrumimO+8jOS4jei/h0Nocm9tZSA0NeaJjeW8gOWni+aUr+aMgUFycmF5LmZyb23mlrnms5Vcclxu6Iul5oOz5YW85a655Lul5YmN55qE5rWP6KeI5Zmo55qE6K+d77yM5Y+v5Lul55SoZm9yLi4uaW7lvqrnjq/vvIzmiJbogIXliqDkuKpiYWJlbC1wb2x5ZmlsbOiEmuacrFxyXG7lvZPnhLbkvaDkuI3mg7Plhbzlrrnkvb/nlKhDaHJvbWl1bSA0NeS7peWJjeWGheaguOeahOa1j+iniOWZqOS5n+ayoeWkmuWkp+mXrumimO+8jOeOsOWcqOWbveWGheW4guWcuuS7vemineacgOWkmkNocm9taXVt5aWX5aOz5rWP6KeI5ZmoLS0zNjDlronlhajmtY/op4jlmajnmoTmnIDmlrDmraPlvI/niYjkuZ/mmK/ph4fnlKhDaHJvbWl1bSA0NeWGheaguOS6hiovXHJcbiAgICAvLyBjb25zdCBlbGVtZW50U2V0TGVuZ3RoID0gZWxlbWVudFNldC5sZW5ndGg7XHJcbiAgICAvKiBpZiAoZWxlbWVudFNldExlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHRleHRhcmVhJyk7XHJcbiAgICB9ICovXHJcbiAgICAvLyB0ZXN0YXJlYUVsZVNldC5hZGQoZWxlbWVudFNldCk7XHJcbiAgICAvKiBjb25zdCB1c2VyT3B0aW9uID0ge1xyXG4gICAgICB1c2VyV2luZG93SGVpZ2h0OiAxMjAsXHJcbiAgICAgIHVzZXJTZWxlY3RUZXh0QXJlYTogJ2xhc3QnLFxyXG4gICAgfTsgKi9cclxuICAgIGNvbnN0IG1haW5FbW90aW9uTWVudSA9IGNyZWF0ZU1lbnUubWFpbigpO1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpICE9PSBudWxsKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGVudCcpLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1zeW50YXg6IFsxLCBcIkZvck9mU3RhdGVtZW50XCJdICovXHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnRTaW5nbGUgb2YgZWxlbWVudFNldCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50U2luZ2xlKTtcclxuICAgICAgZWxlbWVudFNpbmdsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWluRW1vdGlvbk1lbnUsIGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuY29uc3QgaW1hZ2VwYXRoID0gJzE0ODU0MTI4MTAnOyAvLyBUaGlzIGlzIGZha2UuICBHbG9iYWwgVmFyaWFibGUuXHJcbmZ1bihpbWFnZXBhdGgpO1xyXG4iXX0=
