// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     4.3.6
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
  const versionNo = '4.3.6';
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
    const testSet = document.getElementsByTagName('textarea');
    // console.log(testSet);
    // console.log(testSet.item(0));
    const mainEmotionMenu = createMenu.main();
    if (document.getElementById('editor-content') !== null) {
      document.getElementById('editor-content').style.position = 'static';
    }
    for (let w = 0; w < testSet.length; w += 1) {
      // console.log(testSet.item(w));
      const elementTest = testSet.item(w);
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
// 
fun(imgpath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFHQSxNQUFNLE1BQU0sQ0FBQyxZQUFZLEVBQWIsS0FBb0I7QUFDOUIsUUFBTSxZQUFZLE9BQWxCO0FBQ0U7Ozs7Ozs7O0FBUUE7QUFDRixXQUFTLGtCQUFULENBQTRCLFdBQTVCLEVBQXlDLFdBQXpDLEVBQXNELFNBQXRELEVBQ0UsU0FERixFQUNhLFlBQVksRUFEekIsRUFDNkIsY0FBYyxLQUQzQyxFQUNrRDtBQUNoRCxRQUFJLFdBQVcsRUFBZjtBQUNBLFFBQUksYUFBYSxDQUFqQjtBQUNBLFNBQUssSUFBSSxJQUFJLFdBQWIsRUFBMEIsSUFBSSxXQUE5QixFQUEyQyxLQUFLLENBQWhELEVBQW1EO0FBQ2pELG1CQUFhLENBQWI7QUFDQSxVQUFJLFdBQUosRUFBaUI7QUFDZixxQkFBYyxJQUFJLENBQUwsR0FBVyxDQUFYLEdBQWtCLElBQUcsQ0FBRSxFQUFwQztBQUNEO0FBQ0QsaUJBQVksR0FBRSxTQUFVLEdBQUUsVUFBVyxHQUFFLFNBQVUsRUFBakQ7QUFDQSxnQkFBVSxJQUFWLENBQWUsUUFBZjtBQUNEO0FBQ0QsV0FBTyxTQUFQO0FBQ0Q7QUFDQzs7QUFHQTtBQUNGLFFBQU0sU0FBUyxtQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsMkVBQTFCLEVBQ21CLE9BRG5CLENBQWY7QUFFQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsaURBQTFCLEVBQTZFLE1BQTdFLEVBQXFGLE1BQXJGO0FBQ0EscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLGlGQUExQixFQUNxQixPQURyQixFQUM4QixNQUQ5QjtBQUVFO0FBQ0YscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLGtFQUExQixFQUNxQixNQURyQixFQUM2QixNQUQ3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QVEsRUFBUixHQUFhLEtBQWI7QUFDQSxjQUFRLFNBQVIsR0FBb0IsU0FBcEI7QUFDQSxZQUFNLGFBQWMsOEJBQTZCLEtBQU0sY0FBYSxPQUFRLElBQUcsS0FBTSxNQUFyRjtBQUNBLGNBQVEsT0FBUixHQUFrQixJQUFsQjtBQUNBLGNBQVEsS0FBUixHQUFnQixLQUFoQjtBQUNBLGNBQVEsU0FBUixHQUFvQixVQUFwQjtBQUNBLGFBQU8sT0FBUDtBQUNEOztBQTNEZ0IsR0FBbkI7O0FBK0RBLE1BQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFlBQVksSUFBakQsRUFBdUQ7QUFDckQ7QUFDQSxVQUFNLFVBQVUsU0FBUyxvQkFBVCxDQUE4QixVQUE5QixDQUFoQjtBQUNBO0FBQ0E7QUFDQSxVQUFNLGtCQUFrQixXQUFXLElBQVgsRUFBeEI7QUFDQSxRQUFJLFNBQVMsY0FBVCxDQUF3QixnQkFBeEIsTUFBOEMsSUFBbEQsRUFBd0Q7QUFDdEQsZUFBUyxjQUFULENBQXdCLGdCQUF4QixFQUEwQyxLQUExQyxDQUFnRCxRQUFoRCxHQUEyRCxRQUEzRDtBQUNEO0FBQ0QsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFFBQVEsTUFBNUIsRUFBb0MsS0FBSyxDQUF6QyxFQUE0QztBQUMxQztBQUNBLFlBQU0sY0FBYyxRQUFRLElBQVIsQ0FBYSxDQUFiLENBQXBCO0FBQ0E7QUFDQSxrQkFBWSxVQUFaLENBQXVCLFlBQXZCLENBQW9DLGVBQXBDLEVBQXFELFdBQXJEO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDSTs7OztBQUlBO0FBQ0E7OztBQUdKO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7OztBQUlEO0FBQ0YsQ0FuWkQ7QUFvWkEsTUFBTSxZQUFZLFlBQWxCLEMsQ0FBZ0M7QUFDaEMsSUFBSSxTQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGVzbGludCBsaW5lYnJlYWstc3R5bGU6IFtcImVycm9yXCIsIFwid2luZG93c1wiXSAqL1xyXG5cclxuXHJcbmNvbnN0IGZ1biA9IChpbWFnZXBhdGggPSAnJykgPT4ge1xyXG4gIGNvbnN0IHZlcnNpb25ObyA9ICc0LjIuMic7XHJcbiAgICAvKiBBZGRyZXNzIGZ1bmN0aW9uXHJcbiAgICAgKiBzdGFydE51bWJlcjogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBzdGFydCBudW1iZXI7XHJcbiAgICAgKiBsZW5ndGhBcnJheTogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBhZGRyQXJyYXkgbGVuZ3RoO1xyXG4gICAgICogc3RyUHJlZml4OiBzdHJpbmcsIGFkZHJlc3MgUHJlZml4O1xyXG4gICAgICogc3RyU3VmZml4OiBzdHJpbmcsIGFkZHJlc3MgU3VmZml4O1xyXG4gICAgICogbGVhZGluZ1plcm86IGJvb2xlbiwgdHJ1ZSBmb3IgbGVhZGluZyB6ZXJvIGluIG51bWJlcjtcclxuICAgICAqIGFkZHJBcnJheTogYXJyYXksIGFkZHJlc3MgYXJyYXksIGRlZmF1bHQgZm9yIGVtcHR5O1xyXG4gICAgICovXHJcbiAgICAvLyDliJvlu7rooajmg4XljIXmlbDnu4TnmoTlh73mlbBcclxuICBmdW5jdGlvbiBlbUFkZHJBcnJheUhhbmRsZXIoc3RhcnROdW1iZXIsIGxlbmd0aEFycmF5LCBzdHJQcmVmaXgsXHJcbiAgICBzdHJTdWZmaXgsIGFkZHJBcnJheSA9IFtdLCBsZWFkaW5nWmVybyA9IGZhbHNlKSB7XHJcbiAgICBsZXQgYWRkclRlbXAgPSAnJztcclxuICAgIGxldCBhZGRyTnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGogPSBzdGFydE51bWJlcjsgaiA8IGxlbmd0aEFycmF5OyBqICs9IDEpIHtcclxuICAgICAgYWRkck51bWJlciA9IGo7XHJcbiAgICAgIGlmIChsZWFkaW5nWmVybykge1xyXG4gICAgICAgIGFkZHJOdW1iZXIgPSAoaiA+IDkpID8gKGopIDogKGAwJHtqfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZHJUZW1wID0gYCR7c3RyUHJlZml4fSR7YWRkck51bWJlcn0ke3N0clN1ZmZpeH1gO1xyXG4gICAgICBhZGRyQXJyYXkucHVzaChhZGRyVGVtcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRkckFycmF5O1xyXG4gIH1cclxuICAgIC8qIOihqOaDheWMheWcsOWdgOaVsOaNriAqL1xyXG5cclxuXHJcbiAgICAvLyBC56uZXHJcbiAgY29uc3QgYmlsaUVNID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE3LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0JpbGlCaWxpLzIyMzMgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcpLmdpZicpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCAxNCwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9CaWxpYmlsaS94ZHMvJywgJy5wbmcnLCBiaWxpRU0pO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigwLCAxNCwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9CaWxpQmlsaS9iaWxpYmlsaVRWICgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcpLnBuZycsIGJpbGlFTSk7XHJcbiAgICAvLyB0b3Jh6YWxXHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCAnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL3RvcmEvMCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5qcGcnLCBiaWxpRU0sIHRydWUpO1xyXG4gICAgLy8g6Zi/5Y2h5p6XIGZyb20g5pGH5puz55m+5ZCIXHJcbiAgY29uc3QgQWthcmlTbWlsZSA9IGVtQWRkckFycmF5SGFuZGxlcigxLCAyMSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9EeW5hbWljL2FrYXJpJywgJy5naWYnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNzIsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvYWthcmkvYWthcmknLCAnLnBuZycsIEFrYXJpU21pbGUpO1xyXG4gICAgLy8gTmV3IEdhbWUga2bmianlsZVcclxuICBjb25zdCBOZXdHYW1lID0gZW1BZGRyQXJyYXlIYW5kbGVyKDIsIDY0LCAnaHR0cDovL25la29oYW5kLm1vZS9zcHNtaWxlLzAxU29yYS8weHgnLCAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCAyMCwgJ2h0dHA6Ly9zcy5uZWtvaGFuZC5tb2UvQXNvdXJjZS9FbW90aW9uUGljL0tGRU0gKCcsICcpLmdpZicsIE5ld0dhbWUpO1xyXG4gICAgLy8gQUNGVU5cclxuICBjb25zdCBBQ1NtaWxlNCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA1MSwgJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC9BQ0ZVTi9OZXcvJywgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDAsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQUNGVU4vTmltaW5nLycsICcuZ2lmJywgQUNTbWlsZTQsIHRydWUpO1xyXG4gICAgLy8gS0Yg5YaF572uXHJcbiAgY29uc3QgS0ZTbWlsZVVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA0OSwgYCR7dHlwZW9mIGltYWdlcGF0aCAhPT0gJ3VuZGVmaW5lZCcgPyBpbWFnZXBhdGggOiAnJ30vcG9zdC9zbWlsZS9lbS9lbWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmdpZicsIFtdLCB0cnVlKTtcclxuICBjb25zdCBLRlNtaWxlQ29kZSA9IGVtQWRkckFycmF5SGFuZGxlcigxMCwgNTgsICdbczonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICddJyk7XHJcbiAgICAvLyBsb3ZlbGl2ZeS4k+eUqOWwj1xyXG4gIGNvbnN0IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDEsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDIvU21hbGwvTG92ZWxpdmUybmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDEsICdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvU21hbGwvTG92ZWxpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcucG5nJywgTG92ZWxpdmVTbWFsbHRhcmdldFVSTCk7XHJcbiAgICAvLyBrZuW/q+aNt+S7o+eggSjpnIDopoHmlLnlhpnop6PmnoTotYvlgLwpXHJcbiAgY29uc3QgZnVuY3Rpb25EZXNjcmlwdGlvbiA9IFsn5Ye65ZSu6LS0c2VsbD3llK7ku7cnLCAn5byV55SoJywgJ+makOiXj2hpZGU956We56eY562J57qnJywgJ+aPkuWFpeS7o+eggScsICfliKDpmaTnur8nLCAn6LeR6ams54GvJywgJ+aWh+Wtl+minOiJsicsICfnspfkvZMnLFxyXG4gICAgJ+S4i+WIkue6vycsICfmlpzkvZMnLCAn5rC05bmz57q/JywgJ+iDjOaZr+iJsicsICfmj5LlhaXlm77niYcnXTtcclxuICBjb25zdCBkZWZhdWx0RnVuY3Rpb24gPSBbJ1tzZWxsPTEwMF1bL3NlbGxdJywgJ1txdW90ZV1bL3F1b3RlXScsICdbaGlkZT0xMDBdWy9oaWRlXScsICdbY29kZV1bL2NvZGVdJyxcclxuICAgICdbc3RyaWtlXVsvc3RyaWtlXScsICdbZmx5XVsvZmx5XScsICdbY29sb3I9IzAwRkYwMF1bL2NvbG9yXScsICdbYl1bL2JdJywgJ1t1XVsvdV0nLCAnW2ldWy9pXScsXHJcbiAgICAnW2hyXScsICdbYmFja2NvbG9yPV1bL2JhY2tjb2xvcl0nLCAnW2ltZ11bL2ltZ10nXTtcclxuICAgIC8vIOminOaWh+Wtl1xyXG4gIGNvbnN0IGVtb2ppID0gWyco4peP44O7IDgg44O74pePKScsXHJcbiAgICAn4pWwKOC5keKXlSDilr0g4peV4LmRKeKVrycsICco44Kdz4njg7spJywgJ+OAnOKZquKZqicsICco776f0JTvvp/iiaHvvp/QlO++nyknLCAnKO+8vm/vvL4p776JJywgJyh8fHzvvp/QlO++nyknLCAnKGDOtcK0ICknLCAnKOKVrO++n9C0776fKScsICcofHx8776f0LTvvp8pJywgJyjvv6PiiIfvv6MpJywgJyjvv6Mz77+jKScsICco77+j772w77+jKScsICco77+jIC4g77+jKScsICco77+j77i/77+jKScsICco77+j77i277+jKScsICcoKsK0z4lgKiknLCAnKOODu8+J44O7KScsICco4oyS4pa94oySKScsICco77+j4pa977+j77yJJywgJyg944O7z4njg7s9KScsICco772A44O7z4njg7vCtCknLCAnKOOAnO+/o+KWs++/oynjgJwnLCAnKO+9peKIgO+9pSknLFxyXG4gICAgJyjCsOKIgMKwKe++iScsICco77+jM++/oyknLCAn4pWuKO+/o+KWve+/oynila0nLCAnKCDCtF/jgp3vvYApJywgJ+OBruODruOBricsICco776J2II8IOC5ke+8ieivtuWYv+KYhu+9nicsICcoJmx0O18mbHQ7KScsICcoJmd0O18mZ3Q7KScsICcoO8KsX8KsKScsICco4paU4pah4paUKS8nLCAnKO++n9CU776f4omh776f0LTvvp8pIT8nLCAnzqMo776f0LTvvp87KScsICfOoygg77+j4pah77+jfHwpJyxcclxuICAgICcowrTvvJvPie+8m2ApJywgJ++8iC9U0JRUKS8nLCAnKF7jg7vPieODu14gKScsICco772h772lz4nvvaXvvaEpJywgJyjil4/vv6Mo7720Ke+/o+KXjyknLCAnzrU9zrU9KOODjuKJp+KIh+KJpinjg44nLCAnKMK0772lX++9pWApJywgJygtXy0jKScsICfvvIjvv6Pjgbjvv6PvvIknLCAnKO+/o861KCPvv6MpIM6jJywgJ+ODvShg0JTCtCnvvoknLCAnKOKVr8Kw5Y+jwrAp4pWvKOKUtOKAlOKUtCcsICfvvIgjLV8tKeKUr+KUgeKUrycsICdfKDoz44CN4oigKV8nLCAnKOeskSknLCAnKOaxlyknLCAnKOazoyknLCAnKOiLpueskSknLCAnKMK044O7z4njg7tgKScsICco4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLsnLCAnKOKVr+KAteKWoeKAsinila/vuLXilLvilIHilLsnLCAnKCDCtM+BYCknLCAnKCDvvp/Pie++nyknLCAnKG/vvp/Pie++n28pJywgJyjjgIBez4leKScsICco772h4peV4oiA4peV772hKScsICcvKCDil5XigL/igL/il5UgKVxcXFwnLCAnzrXZqSggwrriiIDCuiAp27bQtycsICco77+jzrUoI++/oynimIbilbDila4o77+j4pa977+jLy8vKScsXHJcbiAgICAn77yI4pePwrQz772A77yJfuKZqicsICdfKDrQt+OAjeKIoClfJywgJ9GF0L7RgNC+0YjQviEnLCAn77y8KF5vXinvvI8nLCAnKOKAosyF54Gs4oCizIUgKScsICco776f0JTvvp8pJywgJ+OBvuOBo+OBn+OBj+OAgeWwj+WtpueUn+OBr+acgOmrmOOBoOOBnO+8ge+8gScsICfOtT3OtT3OtT3ilI8o44Kc44Ot44KcOynilJsnLFxyXG4gICAgJyjvvJvCsOOBu8KwKScsICfijp3iiafij53ij53iiabijqAnLCAn44O9KOKcv+++n+KWve++nynjg44nLCAn54SU44Gr6Iie44GE5LiK44GM44KL44K544OR44O844Kv44KI44CB6YKq5oKq44Gq55Ww5oCn5Lqk6Zqb44Gr44CB5aSp572w44KS5LiO44GI77yBJywgJ3zigKLPieKAomApJ107XHJcblxyXG5cclxuICBjb25zdCBNZW51TGlzdCA9IHtcclxuICAgIGl0ZW00OiB7IGRhdGF0eXBlOiAnaW1hZ2VMaW5rJywgdGl0bGU6ICflm7rmnIknLCBhZGRyOiBLRlNtaWxlVVJMLCByZWY6IEtGU21pbGVDb2RlIH0sXHJcbiAgICBpdGVtMTogeyBkYXRhdHlwZTogJ3BsYWluJywgdGl0bGU6ICflv6vmjbcnLCBhZGRyOiBkZWZhdWx0RnVuY3Rpb24sIHJlZjogZnVuY3Rpb25EZXNjcmlwdGlvbiB9LFxyXG4gICAgaXRlbTI6IHsgZGF0YXR5cGU6ICdwbGFpbicsIHRpdGxlOiAn6aKc5paH5a2XJywgYWRkcjogZW1vamkgfSxcclxuICAgIGl0ZW01OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0FDRlVOJywgYWRkcjogQUNTbWlsZTQgfSxcclxuICAgIGl0ZW02OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ+W4uOeUqCcsIGFkZHI6IE5ld0dhbWUgfSwgIC8vXHJcbiAgICBpdGVtNzogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdBa2FyaScsIGFkZHI6IEFrYXJpU21pbGUgfSwgLy8gQWthcmlcclxuICAgIGl0ZW04OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0JpbGlCaWxpJywgYWRkcjogYmlsaUVNIH0sIC8vIELnq5lcclxuICAgIGl0ZW0zOiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0xvdmVMaXZlJywgYWRkcjogTG92ZWxpdmVTbWFsbHRhcmdldFVSTCB9LFxyXG4gIH07XHJcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24qL1xyXG4gICAgLyogRXZlbnQg5Ye95pWwICovXHJcbiAgY29uc3QgRXZlbnRVdGlsID0ge1xyXG4gICAgZ2V0RXZlbnQoZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcclxuICAgIH0sXHJcbiAgICBnZXRUYXJnZXQoZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIHByZXZlbnREZWZhdWx0KGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xyXG4gICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgIC8vIERPTTJcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChgb24ke3R5cGV9YCwgaGFuZGxlcik7ICAvLyBJRVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRbYG9uJHt0eXBlfWBdID0gaGFuZGxlcjsgIC8vIERPTSAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcclxuICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7IC8vIERPTTJcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudChgb24ke3R5cGV9YCwgaGFuZGxlcik7IC8vIElFXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFtgb24ke3R5cGV9YF0gPSBudWxsOyAvLyBET00gMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiovXHJcbiAgICAvKiBFbGVtZW50IOWHveaVsCovXHJcbiAgY29uc3QgRWxlVXRpbCA9IHtcclxuICAgIGNyZWF0ZShlbGUpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RJRChlbGUpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZSk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0KHNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIH0sXHJcbiAgfTtcclxuICAgIC8qIOaooeWdlyovXHJcbiAgY29uc3QgbW91c2VPdmVyQWN0aW9uID0ge1xyXG4gICAgc2hvd0ltZyhldmVudCkge1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAvKiBpZiAoIWV2ZW50VGFyZ2V0LnNyYykge1xyXG4gICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcclxuICAgICAgfSovXHJcbiAgICAgIGNvbnN0IGxhcmdlVmlld0NvbnRhaW5lciA9IEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpO1xyXG4gICAgICBjb25zdCBbc2Nyb2xsVG9wVmFsdWUsIHNjcm9sbExlZnRWYWx1ZV0gPSBbZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdF07XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtldmVudFRhcmdldC5zcmN9IC8+YDtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSArIHNjcm9sbFRvcFZhbHVlICsgMjB9cHhgO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFggKyBzY3JvbGxMZWZ0VmFsdWV9cHhgO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtldmVudC5jbGllbnRZLGV2ZW50LmNsaWVudFhdKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhbRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUudG9wLFxyXG4gICAgICAgICAgICAgIC8vIEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLmxlZnRdKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhbZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XSk7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJJbWcoKSB7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgYXR0YWNoQWN0aW9uID0ge1xyXG4gICAgYXR0YWNoRW1vdGlvbihldmVudCkge1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgIGxldCBhZGRyZXNzVGFyZ2V0ID0gJyc7XHJcbiAgICAgIGxldCBlbW90aW9uQWRkcmVzcyA9ICcnO1xyXG4gICAgICBpZiAoZXZlbnRUYXJnZXQuYXR0cmlidXRlcy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBpZiAoZXZlbnRUYXJnZXQuc3JjKSB7XHJcbiAgICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuc3JjO1xyXG4gICAgICAgICAgZW1vdGlvbkFkZHJlc3MgPSBhdHRhY2hBY3Rpb24uYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsICdpbWFnZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZTtcclxuICAgICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAncGxhaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZTtcclxuICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ3BsYWluJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0VGV4dEFyZWEgPSBFbGVVdGlsLnNlbGVjdCgndGV4dGFyZWEnKTtcclxuICAgICAgY29uc3Qgb3ZhbHVlID0gc2VsZWN0VGV4dEFyZWEudmFsdWU7XHJcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgIC8vIGNvbnN0IGVuZFBvcyA9IHNlbGVjdFRleHRBcmVhLnNlbGVjdGlvbkVuZDtcclxuICAgICAgc2VsZWN0VGV4dEFyZWEudmFsdWUgPSBgJHtvdmFsdWUuc2xpY2UoMCwgc3RhcnRQb3MpfSR7ZW1vdGlvbkFkZHJlc3N9JHtvdmFsdWUuc2xpY2Uoc3RhcnRQb3MpfWA7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVtb3Rpb25BZGRyZXNzKTtcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzUGFyc2UoYWRkU3RyLCBwYXR0ZXJuKSB7XHJcbiAgICAgIGxldCBzdHJpbmdSZXR1cm4gPSAnJztcclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdpbWFnZScpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBgW2ltZ10ke2FkZFN0cn1bL2ltZ11gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAncGxhaW4nKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gZGVjb2RlVVJJKGFkZFN0cik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdpbWFnZUxpbmsnKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gYWRkU3RyO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdHJpbmdSZXR1cm47XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlSXRlbXMgPSB7XHJcbiAgICBjcmVhdGVDb250YWluZXIoa2V5KSB7XHJcbiAgICAgIGNvbnN0IEl0ZW1Db250YWluZXIgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIEl0ZW1Db250YWluZXIuaWQgPSBgZWRkaWUzMiR7a2V5fWA7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLmFwcGVuZENoaWxkKEl0ZW1Db250YWluZXIpO1xyXG4gICAgICByZXR1cm4gSXRlbUNvbnRhaW5lcjtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZXMoa2V5KSB7XHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE1lbnVMaXN0W2tleV0pO1xyXG4gICAgICBjb25zdCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCBpbWdMZW5ndGggPSBpbWdMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpbWdMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGRpdkVsZW1lbnQgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgPSAnY2xpY2tJdGVtJztcclxuICAgICAgICBjb25zdCBpbWdJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ2ltZycpO1xyXG4gICAgICAgIGltZ0l0ZW0uc3JjID0gaW1nTGlzdFtrXTtcclxuICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdFbXMnO1xyXG4gICAgICAgIGltZ0l0ZW0ub25jbGljayA9IGF0dGFjaEFjdGlvbi5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgIGltZ0l0ZW0ub25tb3VzZW92ZXIgPSBtb3VzZU92ZXJBY3Rpb24uc2hvd0ltZztcclxuICAgICAgICBpbWdJdGVtLm9ubW91c2VvdXQgPSBtb3VzZU92ZXJBY3Rpb24uY2xlYXJJbWc7XHJcblxyXG4gICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2RWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVQbGFpblRleHQoa2V5KSB7XHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgIGNvbnN0IHR4dExpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IHR4dExlbmd0aCA9IHR4dExpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHR4dExlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgdHh0SXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgICAgdHh0SXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyOyBtYXJnaW46IDEwcHggMTBweDsnO1xyXG4gICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYDxhIGRhdGEtc2lnbj0ke2VuY29kZVVSSSh0eHRMaXN0W2tdKX0gY2xhc3M9J3R4dEJ0bkVtb3Rpb24nPiR7dHh0TGlzdFtrXX08L2E+YDtcclxuICAgICAgICBpZiAoTWVudUxpc3Rba2V5XS5yZWYpIHtcclxuICAgICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYDxhIGRhdGEtc2lnbj0ke2VuY29kZVVSSSh0eHRMaXN0W2tdKX0gY2xhc3M9J3R4dEJ0bkVtb3Rpb24nPiR7TWVudUxpc3Rba2V5XS5yZWZba119PC9hPmA7XHJcbiAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR4dEl0ZW0ub25jbGljayA9IGF0dGFjaEFjdGlvbi5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgIHR4dEl0ZW0uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOiAxMHB4IDEwcHg6d2lkdGg6IDUwcHg7JztcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHRJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUltYWdlTGluayhrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgY29uc3QgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgcmVmTGlzdCA9IE1lbnVMaXN0W2tleV0ucmVmO1xyXG4gICAgICBjb25zdCBpbWdMZW5ndGggPSBpbWdMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpbWdMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgaW1nSXRlbS5kYXRhc2V0LmxpbmsgPSByZWZMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uc3JjID0gaW1nTGlzdFtrXTtcclxuICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdFbXMnO1xyXG4gICAgICAgIGltZ0l0ZW0ub25jbGljayA9IGF0dGFjaEFjdGlvbi5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgIGltZ0l0ZW0uc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogNTBweCAhaW1wb3J0YW50O2hlaWdodDogNTBweCAhaW1wb3J0YW50Oyc7XHJcbiAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nSXRlbSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBjbGVhck1lbnUgPSB7XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgY29uc3QgdG9nZ2xlV2luZG93ID0gRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jyk7XHJcbiAgICAgIHRvZ2dsZVdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBjb25zdCB0b2dXaW5DaGlsZHJlbiA9IHRvZ2dsZVdpbmRvdy5jaGlsZE5vZGVzO1xyXG4gICAgICBmb3IgKGxldCBqID0gMCwgbGVuID0gdG9nV2luQ2hpbGRyZW4ubGVuZ3RoOyBqIDwgbGVuOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZ1dpbkNoaWxkcmVuW2pdKTtcclxuICAgICAgICB0b2dXaW5DaGlsZHJlbltqXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3QgZXhwYW5kTWVudSA9IHtcclxuICAgIGluaXQoZXZlbnQpIHtcclxuICAgICAgY2xlYXJNZW51LmNsZWFyKCk7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS53aWR0aCA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpLnN0eWxlLndpZHRoO1xyXG4gICAgICBjb25zdCBkYXRhVHlwZSA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMl0ubm9kZVZhbHVlO1xyXG4gICAgICBjb25zdCBkYXRhS2V5ID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS5ub2RlVmFsdWU7XHJcbiAgICAgIGlmIChFbGVVdGlsLnNlbGVjdChgI2VkZGllMzIke2RhdGFLZXl9YCkpIHtcclxuICAgICAgICBFbGVVdGlsLnNlbGVjdChgI2VkZGllMzIke2RhdGFLZXl9YCkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaWYgKGRhdGFLZXkgPT09ICdpdGVtMScpIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICBlbHNlIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ3BsYWluJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZVBsYWluVGV4dChkYXRhS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlcyhkYXRhS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ2ltYWdlTGluaycpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZUxpbmsoZGF0YUtleSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBjcmVhdGVNZW51ID0ge1xyXG4gICAgZGVmYXVsdElEOiAnZW1vdGlvbjAwMDAnLFxyXG4gICAgbWFpbigpIHtcclxuICAgICAgICAgICAgLyogbWFpbiBtZW51Ki9cclxuICAgICAgY29uc3QgbWFpbk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIG1haW5NZW51LmlubmVySFRNTCA9IGA8c3BhbiBpZD0nbGFyZ2VWaWV3Jz48L3NwYW4+PHNwYW4gY2xhc3M9J3N1Yk1lbnUnIHRpdGxlPSfkuLvoj5zljZUgdmVyc2lvbiAke3ZlcnNpb25Ob30nPjxiPuKRqOWbp+KRqDwvYj48L3NwYW4+YDtcclxuICAgICAgbWFpbk1lbnUuaWQgPSBjcmVhdGVNZW51LmRlZmF1bHRJRDtcclxuICAgICAgY29uc3QgTWVudUxlbmd0aCA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KS5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWVudUxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgTWVudUtleSA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KVtpXTtcclxuICAgICAgICBjb25zdCBNZW51VGl0bGUgPSBNZW51TGlzdFtNZW51S2V5XS50aXRsZTtcclxuICAgICAgICBjb25zdCBNZW51VHlwZSA9IE1lbnVMaXN0W01lbnVLZXldLmRhdGF0eXBlO1xyXG4gICAgICAgIC8vIGlmICghTWVudVR5cGUgfHwgIU1lbnVUaXRsZSkgY29uc29sZS5sb2coYGRhdGFlcnJvciAgJHtNZW51S2V5fWApO1xyXG4gICAgICAgIGNvbnN0IHRlc3RNZW51ID0gY3JlYXRlTWVudS5zdWJzKE1lbnVUaXRsZSwgZXhwYW5kTWVudS5pbml0LCBNZW51S2V5LCBNZW51VHlwZSk7XHJcbiAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQodGVzdE1lbnUpO1xyXG4gICAgICB9XHJcbiAgICAgICAgICAgIC8qIGNsb3NlIGJ1dHRvbiovXHJcbiAgICAgIGNvbnN0IGNsb3NlQnRuID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJ1t4XSc7XHJcbiAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdzdWJNZW51JztcclxuICAgICAgY2xvc2VCdG4uaWQgPSAnY2xvc2VFTSc7XHJcbiAgICAgIGNsb3NlQnRuLm9uY2xpY2sgPSBjbGVhck1lbnUuY2xlYXI7XHJcbiAgICAgIGNsb3NlQnRuLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXInO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgICAgIC8qIGRyb3Bkb3duIGJveCovXHJcbiAgICAgIGNvbnN0IGl0ZW1XaW5kb3cgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIGl0ZW1XaW5kb3cuaWQgPSAndG9nZ2xlV2luZG93JztcclxuICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoaXRlbVdpbmRvdyk7XHJcbiAgICAgICAgICAgIC8qIGNzcyBzdHlsZSovXHJcbiAgICAgIGNvbnN0IHN0eWxlSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdzdHlsZScpO1xyXG4gICAgICBzdHlsZUl0ZW0uaW5uZXJIVE1MID0gYCNlbW90aW9uMDAwMCB7cGFkZGluZzo1cHggNXB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAgIFxcXHJcbiAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE2cHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnfSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlld3twb3NpdGlvbjphYnNvbHV0ZTsgYmFja2dyb3VuZDogI2ZmZjt6LWluZGV4OjUwMDA7IG9wYWNpdHk6IDAuOH0gXFxcclxuICAgICAgICAgICAgICAgICNsYXJnZVZpZXcgaW1ne3dpZHRoOiAyMDBweDsgaGVpZ2h0OjIwMHB4O30gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cgYXtwYWRkaW5nOiA1cHggNXB4O2xpbmUtaGVpZ2h0OjJ9IFxcXHJcbiAgICAgICAgICAgICAgICAjdG9nZ2xlV2luZG93IHtoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAzcHggM3B4OyBvdmVyZmxvdy14OiBhdXRvOyBtYXJnaW4tdG9wOjZweDsgXFxcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NnB4OyBib3JkZXI6MXB4IHNvbGlkICNmZjQzNTE7IGRpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTsgei1pbmRleDoyMDA7IH1cXFxyXG4gICAgICAgICAgICAgICAgLmNsaWNrSXRlbXtkaXNwbGF5OmlubGluZS1ibG9jazsgei1pbmRleDozMDA7fVxyXG4gICAgICAgICAgICAgICAgYS5zdWJCdXR7dGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIC5FbXN7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6IDUwcHg7aGVpZ2h0OiA1MHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOyAgei1pbmRleDo0MDA7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS5zdWJCdXQ6aG92ZXJ7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9ue3RleHQtZGVjb3JhdGlvbjpub25lO30gXFxcclxuICAgICAgICAgICAgICAgIGEudHh0QnRuRW1vdGlvbjpob3ZlcntiYWNrZ3JvdW5kOiNmZjc2ODA7IGNvbG9yOiNmZmY7IH0gXFxcclxuICAgICAgICAgICAgICAgIC5zdWJNZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyOyB0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzogOHB4IDhweDsgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZic7XFxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQzNTE7Ym9yZGVyLWNvbG9yOiAjZmY0MzUxO2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIC5zdWJNZW51OmhvdmVyLCAuc3ViTWVudTpmb2N1cywgLnN1Yk1lbnU6dmlzaXRlZHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NjgwO2JvcmRlci1jb2xvcjogI2ZmNzY4MDtjb2xvcjogI2ZmZjt9YDtcclxuICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtKTtcclxuICAgICAgcmV0dXJuIG1haW5NZW51O1xyXG4gICAgfSxcclxuICAgIHN1YnModGl0bGUsIGZ1bmMsIHN1YmlkLCBzdWJ0eXBlKSB7XHJcbiAgICAgIGNvbnN0IHN1Yk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICBzdWJNZW51LmlkID0gc3ViaWQ7XHJcbiAgICAgIHN1Yk1lbnUuY2xhc3NOYW1lID0gJ3N1Yk1lbnUnO1xyXG4gICAgICBjb25zdCBzdWJjb250ZW50ID0gYDxhIGNsYXNzPSdzdWJCdXQnIGRhdGEta2lkPSR7c3ViaWR9IGRhdGUtdHlwZT0ke3N1YnR5cGV9PiR7dGl0bGV9PC9hPmA7XHJcbiAgICAgIHN1Yk1lbnUub25jbGljayA9IGZ1bmM7XHJcbiAgICAgIHN1Yk1lbnUudGl0bGUgPSB0aXRsZTtcclxuICAgICAgc3ViTWVudS5pbm5lckhUTUwgPSBzdWJjb250ZW50O1xyXG4gICAgICByZXR1cm4gc3ViTWVudTtcclxuICAgIH0sXHJcblxyXG4gIH07XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAhPSBudWxsKSB7XHJcbiAgICAvLyBsZXQgdGVzdGFyZWFFbGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgdGVzdFNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGVzdFNldCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0Lml0ZW0oMCkpO1xyXG4gICAgY29uc3QgbWFpbkVtb3Rpb25NZW51ID0gY3JlYXRlTWVudS5tYWluKCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250ZW50JykgIT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250ZW50Jykuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgIH1cclxuICAgIGZvciAobGV0IHcgPSAwOyB3IDwgdGVzdFNldC5sZW5ndGg7IHcgKz0gMSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0Lml0ZW0odykpO1xyXG4gICAgICBjb25zdCBlbGVtZW50VGVzdCA9IHRlc3RTZXQuaXRlbSh3KTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobWFpbkVtb3Rpb25NZW51KTtcclxuICAgICAgZWxlbWVudFRlc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFpbkVtb3Rpb25NZW51LCBlbGVtZW50VGVzdCk7XHJcbiAgICB9XHJcbiAgICAvLyBOb2RlTGlzdC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgLy8gSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBBcnJheS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIC8vIGNvbnN0IGVsZW1lbnRTZXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpKTtcclxuICAgICAgICAvKiDlhbzlrrnmgKfpl67popggQnkg5Za15ouJ5biD5LiBMjAxNy4wMS4zMDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWXmlrnms5Xov5Tlm57nmoTmmK9IVE1MQ29sbGVjdGlvblxyXG7lnKjovoPmlrDniYjnmoRGaXJlZm945Lit77yMSFRNTENvbGxlY3Rpb27mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOaJgOS7peWPr+S7peeUqGZvci4uLm9m5b6q546vXHJcbuiAjOWcqENocm9tZeS4re+8iOaIkeWPquWcqOS9v+eUqENocm9taXVtIDUw5YaF5qC455qE5rWP6KeI5Zmo5LiL5rWL6K+V6L+H77yJ77yMSFRNTENvbGxlY3Rpb27kuI3mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOS4jeWPr+eUqOebtOaOpeS9v+eUqGZvci4uLm9m5b6q546vXHJcbuaJgOS7peW7uuiurualvOS4u+i/mOaYr+eUqOiAgeaWueazleWQpyovXHJcbiAgICAgICAgLy8gU29sdXRpb24gc3RhY2tmbG93OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNzU0MzE1L2ZvcmVhY2gtbG9vcC1mb3ItaHRtbGNvbGxlY3Rpb24tZWxlbWVudHNcclxuICAgICAgICAvKiDov5jmnIlBcnJheS5mcm9t5pa55rOV56Gu5a6e6IO96Kej5YazQ2hyb21l5LiLSFRNTENvbGxlY3Rpb27kuI3og73nlKhmb3IuLi5vZuW+queOr+eahOmXrumimO+8jOS4jei/h0Nocm9tZSA0NeaJjeW8gOWni+aUr+aMgUFycmF5LmZyb23mlrnms5Vcclxu6Iul5oOz5YW85a655Lul5YmN55qE5rWP6KeI5Zmo55qE6K+d77yM5Y+v5Lul55SoZm9yLi4uaW7lvqrnjq/vvIzmiJbogIXliqDkuKpiYWJlbC1wb2x5ZmlsbOiEmuacrFxyXG7lvZPnhLbkvaDkuI3mg7Plhbzlrrnkvb/nlKhDaHJvbWl1bSA0NeS7peWJjeWGheaguOeahOa1j+iniOWZqOS5n+ayoeWkmuWkp+mXrumimO+8jOeOsOWcqOWbveWGheW4guWcuuS7vemineacgOWkmkNocm9taXVt5aWX5aOz5rWP6KeI5ZmoLS0zNjDlronlhajmtY/op4jlmajnmoTmnIDmlrDmraPlvI/niYjkuZ/mmK/ph4fnlKhDaHJvbWl1bSA0NeWGheaguOS6hiovXHJcbiAgICAvLyBjb25zdCBlbGVtZW50U2V0TGVuZ3RoID0gZWxlbWVudFNldC5sZW5ndGg7XHJcbiAgICAvKiBpZiAoZWxlbWVudFNldExlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHRleHRhcmVhJyk7XHJcbiAgICB9ICovXHJcbiAgICAvLyB0ZXN0YXJlYUVsZVNldC5hZGQoZWxlbWVudFNldCk7XHJcbiAgICAvKiBjb25zdCB1c2VyT3B0aW9uID0ge1xyXG4gICAgICB1c2VyV2luZG93SGVpZ2h0OiAxMjAsXHJcbiAgICAgIHVzZXJTZWxlY3RUZXh0QXJlYTogJ2xhc3QnLFxyXG4gICAgfTsgKi9cclxuXHJcbiAgICAvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1zeW50YXg6IFsxLCBcIkZvck9mU3RhdGVtZW50XCJdICovXHJcbiAgICAvKiBmb3IgKGNvbnN0IGVsZW1lbnRTaW5nbGUgb2YgZWxlbWVudFNldCkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFNpbmdsZSk7XHJcbiAgICAgIGVsZW1lbnRTaW5nbGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFpbkVtb3Rpb25NZW51LCBlbGVtZW50U2luZ2xlKTtcclxuICAgIH0gKi9cclxuICB9XHJcbn07XHJcbmNvbnN0IGltYWdlcGF0aCA9ICcxNDg1NDEyODEwJzsgLy8gVGhpcyBpcyBmYWtlLiAgR2xvYmFsIFZhcmlhYmxlLlxyXG5mdW4oaW1hZ2VwYXRoKTtcclxuIl19
