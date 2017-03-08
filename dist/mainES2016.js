(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* eslint linebreak-style: ["error", "windows"] */

/* eslint-disable strict */

'use strict';

const fun = (imagepath = '1485412810') => {
  const versionNo = '4.2.2';
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
  const biliEM = emAddrArrayHandler(1, 17, 'http://o6smnd6uw.bkt.clouddn.com/xds/2233 (', ').gif');
  emAddrArrayHandler(1, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds/', '.png', biliEM);
  emAddrArrayHandler(0, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds/bilibiliTV (', ').png', biliEM);
  // tora酱
  emAddrArrayHandler(1, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds2/0', '.jpg', biliEM, true);
  // 阿卡林 from 摇曳百合
  const AkariSmile = emAddrArrayHandler(1, 21, 'http://o6smnd6uw.bkt.clouddn.com/xds2/akari', '.gif');
  emAddrArrayHandler(1, 72, 'http://o6smnd6uw.bkt.clouddn.com/xds3/akari', '.png', AkariSmile);
  // New Game
  const NewGame = emAddrArrayHandler(2, 64, 'http://o6smnd6uw.bkt.clouddn.com/xds4/0xx', '.png');
  // ACFUN
  const ACSmile4 = emAddrArrayHandler(1, 51, 'http://o6smnd6uw.bkt.clouddn.com/xds6/', '.png');
  emAddrArrayHandler(1, 40, 'http://o6smnd6uw.bkt.clouddn.com/xds5/', '.gif', ACSmile4, true);
  // KF 内置
  const KFSmileURL = emAddrArrayHandler(1, 49, `${typeof imagepath !== 'undefined' ? imagepath : ''}/post/smile/em/em`, '.gif', [], true);
  const KFSmileCode = emAddrArrayHandler(10, 58, '[s:', ']');
  // lovelive专用小
  const LoveliveSmalltargetURL = emAddrArrayHandler(1, 41, 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive2nd', '.png');
  emAddrArrayHandler(1, 41, 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive', '.png', LoveliveSmalltargetURL);
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
      const dataType = eventTarget.getAttribute('data-retype');
      const dataKey = eventTarget.getAttribute('data-kid');
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
      subMenu.setAttribute('data-kid', subid);
      subMenu.setAttribute('data-retype', subtype);
      const subcontent = `<a class='subBut' data-kid=${subid} date-retype=${subtype}>${title}</a>`;
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

if (typeof imgpath === 'undefined') {
  let imgpath = '1485412810';
}
fun(imgpath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8uNi4wLjJAYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7O0FBRUE7O0FBR0EsTUFBTSxNQUFNLENBQUMsWUFBWSxZQUFiLEtBQThCO0FBQ3hDLFFBQU0sWUFBWSxPQUFsQjtBQUNFOzs7Ozs7OztBQVFBO0FBQ0YsV0FBUyxrQkFBVCxDQUE0QixXQUE1QixFQUF5QyxXQUF6QyxFQUFzRCxTQUF0RCxFQUNFLFNBREYsRUFDYSxZQUFZLEVBRHpCLEVBQzZCLGNBQWMsS0FEM0MsRUFDa0Q7QUFDaEQsUUFBSSxXQUFXLEVBQWY7QUFDQSxRQUFJLGFBQWEsQ0FBakI7QUFDQSxTQUFLLElBQUksSUFBSSxXQUFiLEVBQTBCLElBQUksV0FBOUIsRUFBMkMsS0FBSyxDQUFoRCxFQUFtRDtBQUNqRCxtQkFBYSxDQUFiO0FBQ0EsVUFBSSxXQUFKLEVBQWlCO0FBQ2YscUJBQWMsSUFBSSxDQUFMLEdBQVcsQ0FBWCxHQUFrQixJQUFHLENBQUUsRUFBcEM7QUFDRDtBQUNELGlCQUFZLEdBQUUsU0FBVSxHQUFFLFVBQVcsR0FBRSxTQUFVLEVBQWpEO0FBQ0EsZ0JBQVUsSUFBVixDQUFlLFFBQWY7QUFDRDtBQUNELFdBQU8sU0FBUDtBQUNEO0FBQ0M7O0FBR0E7QUFDRixRQUFNLFNBQVMsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLDZDQUExQixFQUNtQixPQURuQixDQUFmO0FBRUEscUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQTBCLHVDQUExQixFQUFtRSxNQUFuRSxFQUEyRSxNQUEzRTtBQUNBLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQixtREFBMUIsRUFDcUIsT0FEckIsRUFDOEIsTUFEOUI7QUFFRTtBQUNGLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQix5Q0FBMUIsRUFDcUIsTUFEckIsRUFDNkIsTUFEN0IsRUFD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QVIsQ0FBcUIsYUFBckIsRUFBb0MsT0FBcEM7QUFDQSxZQUFNLGFBQWMsOEJBQTZCLEtBQU0sZ0JBQWUsT0FBUSxJQUFHLEtBQU0sTUFBdkY7QUFDQSxjQUFRLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxjQUFRLFNBQVIsR0FBb0IsVUFBcEI7QUFDQSxhQUFPLE9BQVA7QUFDRDs7QUE3RGdCLEdBQW5COztBQWlFQSxNQUFJLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUFpQyxZQUFZLElBQWpELEVBQXVEO0FBQ3JEO0FBQ0EsVUFBTSxVQUFVLFNBQVMsb0JBQVQsQ0FBOEIsVUFBOUIsQ0FBaEI7QUFDQTtBQUNBO0FBQ0EsVUFBTSxrQkFBa0IsV0FBVyxJQUFYLEVBQXhCO0FBQ0EsUUFBSSxTQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLE1BQThDLElBQWxELEVBQXdEO0FBQ3RELGVBQVMsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEMsS0FBMUMsQ0FBZ0QsUUFBaEQsR0FBMkQsUUFBM0Q7QUFDRDtBQUNELFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxRQUFRLE1BQTVCLEVBQW9DLEtBQUssQ0FBekMsRUFBNEM7QUFDMUM7QUFDQSxZQUFNLGNBQWMsUUFBUSxJQUFSLENBQWEsQ0FBYixDQUFwQjtBQUNBO0FBQ0Esa0JBQVksVUFBWixDQUF1QixZQUF2QixDQUFvQyxlQUFwQyxFQUFxRCxXQUFyRDtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0k7Ozs7QUFJQTtBQUNBOzs7QUFHSjtBQUNBOzs7QUFHQTtBQUNBOzs7OztBQUtBO0FBQ0E7Ozs7QUFJRDtBQUNGLENBcFpEOztBQXNaQSxJQUFHLE9BQU8sT0FBUCxLQUFtQixXQUF0QixFQUFtQztBQUMvQixNQUFJLFVBQVUsWUFBZDtBQUNIO0FBQ0QsSUFBSSxPQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGVzbGludCBsaW5lYnJlYWstc3R5bGU6IFtcImVycm9yXCIsIFwid2luZG93c1wiXSAqL1xyXG5cclxuLyogZXNsaW50LWRpc2FibGUgc3RyaWN0ICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5cclxuY29uc3QgZnVuID0gKGltYWdlcGF0aCA9ICcxNDg1NDEyODEwJykgPT4ge1xyXG4gIGNvbnN0IHZlcnNpb25ObyA9ICc0LjIuMic7XHJcbiAgICAvKiBBZGRyZXNzIGZ1bmN0aW9uXHJcbiAgICAgKiBzdGFydE51bWJlcjogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBzdGFydCBudW1iZXI7XHJcbiAgICAgKiBsZW5ndGhBcnJheTogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBhZGRyQXJyYXkgbGVuZ3RoO1xyXG4gICAgICogc3RyUHJlZml4OiBzdHJpbmcsIGFkZHJlc3MgUHJlZml4O1xyXG4gICAgICogc3RyU3VmZml4OiBzdHJpbmcsIGFkZHJlc3MgU3VmZml4O1xyXG4gICAgICogbGVhZGluZ1plcm86IGJvb2xlbiwgdHJ1ZSBmb3IgbGVhZGluZyB6ZXJvIGluIG51bWJlcjtcclxuICAgICAqIGFkZHJBcnJheTogYXJyYXksIGFkZHJlc3MgYXJyYXksIGRlZmF1bHQgZm9yIGVtcHR5O1xyXG4gICAgICovXHJcbiAgICAvLyDliJvlu7rooajmg4XljIXmlbDnu4TnmoTlh73mlbBcclxuICBmdW5jdGlvbiBlbUFkZHJBcnJheUhhbmRsZXIoc3RhcnROdW1iZXIsIGxlbmd0aEFycmF5LCBzdHJQcmVmaXgsXHJcbiAgICBzdHJTdWZmaXgsIGFkZHJBcnJheSA9IFtdLCBsZWFkaW5nWmVybyA9IGZhbHNlKSB7XHJcbiAgICBsZXQgYWRkclRlbXAgPSAnJztcclxuICAgIGxldCBhZGRyTnVtYmVyID0gMDtcclxuICAgIGZvciAobGV0IGogPSBzdGFydE51bWJlcjsgaiA8IGxlbmd0aEFycmF5OyBqICs9IDEpIHtcclxuICAgICAgYWRkck51bWJlciA9IGo7XHJcbiAgICAgIGlmIChsZWFkaW5nWmVybykge1xyXG4gICAgICAgIGFkZHJOdW1iZXIgPSAoaiA+IDkpID8gKGopIDogKGAwJHtqfWApO1xyXG4gICAgICB9XHJcbiAgICAgIGFkZHJUZW1wID0gYCR7c3RyUHJlZml4fSR7YWRkck51bWJlcn0ke3N0clN1ZmZpeH1gO1xyXG4gICAgICBhZGRyQXJyYXkucHVzaChhZGRyVGVtcCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRkckFycmF5O1xyXG4gIH1cclxuICAgIC8qIOihqOaDheWMheWcsOWdgOaVsOaNriAqL1xyXG5cclxuXHJcbiAgICAvLyBC56uZXHJcbiAgY29uc3QgYmlsaUVNID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE3LCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzLzIyMzMgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcpLmdpZicpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCAxNCwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkcy8nLCAnLnBuZycsIGJpbGlFTSk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDAsIDE0LCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzL2JpbGliaWxpVFYgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJykucG5nJywgYmlsaUVNKTtcclxuICAgIC8vIHRvcmHphbFcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTQsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMyLzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcuanBnJywgYmlsaUVNLCB0cnVlKTtcclxuICAgIC8vIOmYv+WNoeaelyBmcm9tIOaRh+abs+eZvuWQiFxyXG4gIGNvbnN0IEFrYXJpU21pbGUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMjEsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMyL2FrYXJpJywgJy5naWYnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNzIsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMzL2FrYXJpJywgJy5wbmcnLCBBa2FyaVNtaWxlKTtcclxuICAgIC8vIE5ldyBHYW1lXHJcbiAgY29uc3QgTmV3R2FtZSA9IGVtQWRkckFycmF5SGFuZGxlcigyLCA2NCwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczQvMHh4JywgJy5wbmcnKTtcclxuICAgIC8vIEFDRlVOXHJcbiAgY29uc3QgQUNTbWlsZTQgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNTEsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHM2LycsICcucG5nJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQwLCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzNS8nLCAnLmdpZicsIEFDU21pbGU0LCB0cnVlKTtcclxuICAgIC8vIEtGIOWGhee9rlxyXG4gIGNvbnN0IEtGU21pbGVVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDksIGAke3R5cGVvZiBpbWFnZXBhdGggIT09ICd1bmRlZmluZWQnID8gaW1hZ2VwYXRoIDogJyd9L3Bvc3Qvc21pbGUvZW0vZW1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5naWYnLCBbXSwgdHJ1ZSk7XHJcbiAgY29uc3QgS0ZTbWlsZUNvZGUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMTAsIDU4LCAnW3M6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXScpO1xyXG4gICAgLy8gbG92ZWxpdmXkuJPnlKjlsI9cclxuICBjb25zdCBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQxLCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20vbG92ZWxpdmUvTG92ZWxpdmUybmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgNDEsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS9sb3ZlbGl2ZS9Mb3ZlbGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnLCBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMKTtcclxuICAgIC8vIGtm5b+r5o235Luj56CBKOmcgOimgeaUueWGmeino+aehOi1i+WAvClcclxuICBjb25zdCBmdW5jdGlvbkRlc2NyaXB0aW9uID0gWyflh7rllK7otLRzZWxsPeWUruS7tycsICflvJXnlKgnLCAn6ZqQ6JePaGlkZT3npZ7np5jnrYnnuqcnLCAn5o+S5YWl5Luj56CBJywgJ+WIoOmZpOe6vycsICfot5Hpqaznga8nLCAn5paH5a2X6aKc6ImyJywgJ+eyl+S9kycsXHJcbiAgICAn5LiL5YiS57q/JywgJ+aWnOS9kycsICfmsLTlubPnur8nLCAn6IOM5pmv6ImyJywgJ+aPkuWFpeWbvueJhyddO1xyXG4gIGNvbnN0IGRlZmF1bHRGdW5jdGlvbiA9IFsnW3NlbGw9MTAwXVsvc2VsbF0nLCAnW3F1b3RlXVsvcXVvdGVdJywgJ1toaWRlPTEwMF1bL2hpZGVdJywgJ1tjb2RlXVsvY29kZV0nLFxyXG4gICAgJ1tzdHJpa2VdWy9zdHJpa2VdJywgJ1tmbHldWy9mbHldJywgJ1tjb2xvcj0jMDBGRjAwXVsvY29sb3JdJywgJ1tiXVsvYl0nLCAnW3VdWy91XScsICdbaV1bL2ldJyxcclxuICAgICdbaHJdJywgJ1tiYWNrY29sb3I9XVsvYmFja2NvbG9yXScsICdbaW1nXVsvaW1nXSddO1xyXG4gICAgLy8g6aKc5paH5a2XXHJcbiAgY29uc3QgZW1vamkgPSBbJyjil4/jg7sgOCDjg7vil48pJyxcclxuICAgICfilbAo4LmR4peVIOKWvSDil5XguZEp4pWvJywgJyjjgp3PieODuyknLCAn44Cc4pmq4pmqJywgJyjvvp/QlO++n+KJoe++n9CU776fKScsICco77y+b++8vinvvoknLCAnKHx8fO++n9CU776fKScsICcoYM61wrQgKScsICco4pWs776f0LTvvp8pJywgJyh8fHzvvp/QtO++nyknLCAnKO+/o+KIh++/oyknLCAnKO+/ozPvv6MpJywgJyjvv6PvvbDvv6MpJywgJyjvv6MgLiDvv6MpJywgJyjvv6PvuL/vv6MpJywgJyjvv6PvuLbvv6MpJywgJygqwrTPiWAqKScsICco44O7z4njg7spJywgJyjijJLilr3ijJIpJywgJyjvv6Pilr3vv6PvvIknLCAnKD3jg7vPieODuz0pJywgJyjvvYDjg7vPieODu8K0KScsICco44Cc77+j4paz77+jKeOAnCcsICco772l4oiA772lKScsXHJcbiAgICAnKMKw4oiAwrAp776JJywgJyjvv6Mz77+jKScsICfila4o77+j4pa977+jKeKVrScsICcoIMK0X+OCne+9gCknLCAn44Gu44Ou44GuJywgJyjvvonYgjwg4LmR77yJ6K+25Zi/4piG772eJywgJygmbHQ7XyZsdDspJywgJygmZ3Q7XyZndDspJywgJyg7wqxfwqwpJywgJyjilpTilqHilpQpLycsICco776f0JTvvp/iiaHvvp/QtO++nykhPycsICfOoyjvvp/QtO++nzspJywgJ86jKCDvv6PilqHvv6N8fCknLFxyXG4gICAgJyjCtO+8m8+J77ybYCknLCAn77yIL1TQlFQpLycsICcoXuODu8+J44O7XiApJywgJyjvvaHvvaXPie+9pe+9oSknLCAnKOKXj++/oyjvvbQp77+j4pePKScsICfOtT3OtT0o44OO4omn4oiH4ommKeODjicsICcowrTvvaVf772lYCknLCAnKC1fLSMpJywgJ++8iO+/o+OBuO+/o++8iScsICco77+jzrUoI++/oykgzqMnLCAn44O9KGDQlMK0Ke++iScsICco4pWvwrDlj6PCsCnila8o4pS04oCU4pS0JywgJ++8iCMtXy0p4pSv4pSB4pSvJywgJ18oOjPjgI3iiKApXycsICco56yRKScsICco5rGXKScsICco5rOjKScsICco6Ium56yRKScsICcowrTjg7vPieODu2ApJywgJyjila/CsOKWocKw77yJ4pWv77i1IOKUu+KUgeKUuycsICco4pWv4oC14pah4oCyKeKVr++4teKUu+KUgeKUuycsICcoIMK0z4FgKScsICcoIO++n8+J776fKScsICcob+++n8+J776fbyknLCAnKOOAgF7PiV4pJywgJyjvvaHil5XiiIDil5XvvaEpJywgJy8oIOKXleKAv+KAv+KXlSApXFxcXCcsICfOtdmpKCDCuuKIgMK6ICnbttC3JywgJyjvv6POtSgj77+jKeKYhuKVsOKVrijvv6Pilr3vv6MvLy8pJyxcclxuICAgICfvvIjil4/CtDPvvYDvvIl+4pmqJywgJ18oOtC344CN4oigKV8nLCAn0YXQvtGA0L7RiNC+IScsICfvvLwoXm9eKe+8jycsICco4oCizIXngazigKLMhSApJywgJyjvvp/QlO++nyknLCAn44G+44Gj44Gf44GP44CB5bCP5a2m55Sf44Gv5pyA6auY44Gg44Gc77yB77yBJywgJ861Pc61Pc61PeKUjyjjgpzjg63jgpw7KeKUmycsXHJcbiAgICAnKO+8m8Kw44G7wrApJywgJ+KOneKJp+KPneKPneKJpuKOoCcsICfjg70o4py/776f4pa9776fKeODjicsICfnhJTjgavoiJ7jgYTkuIrjgYzjgovjgrnjg5Hjg7zjgq/jgojjgIHpgqrmgqrjgarnlbDmgKfkuqTpmpvjgavjgIHlpKnnvbDjgpLkuI7jgYjvvIEnLCAnfOKAos+J4oCiYCknXTtcclxuXHJcblxyXG4gIGNvbnN0IE1lbnVMaXN0ID0ge1xyXG4gICAgaXRlbTQ6IHsgZGF0YXR5cGU6ICdpbWFnZUxpbmsnLCB0aXRsZTogJ+WbuuaciScsIGFkZHI6IEtGU21pbGVVUkwsIHJlZjogS0ZTbWlsZUNvZGUgfSxcclxuICAgIGl0ZW0xOiB7IGRhdGF0eXBlOiAncGxhaW4nLCB0aXRsZTogJ+W/q+aNtycsIGFkZHI6IGRlZmF1bHRGdW5jdGlvbiwgcmVmOiBmdW5jdGlvbkRlc2NyaXB0aW9uIH0sXHJcbiAgICBpdGVtMjogeyBkYXRhdHlwZTogJ3BsYWluJywgdGl0bGU6ICfpopzmloflrZcnLCBhZGRyOiBlbW9qaSB9LFxyXG4gICAgaXRlbTU6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQUNGVU4nLCBhZGRyOiBBQ1NtaWxlNCB9LFxyXG4gICAgaXRlbTY6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAn5bi455SoJywgYWRkcjogTmV3R2FtZSB9LCAgLy9cclxuICAgIGl0ZW03OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0FrYXJpJywgYWRkcjogQWthcmlTbWlsZSB9LCAvLyBBa2FyaVxyXG4gICAgaXRlbTg6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnQmlsaUJpbGknLCBhZGRyOiBiaWxpRU0gfSwgLy8gQuermVxyXG4gICAgaXRlbTM6IHsgZGF0YXR5cGU6ICdpbWFnZScsIHRpdGxlOiAnTG92ZUxpdmUnLCBhZGRyOiBMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMIH0sXHJcbiAgfTtcclxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiovXHJcbiAgICAvKiBFdmVudCDlh73mlbAgKi9cclxuICBjb25zdCBFdmVudFV0aWwgPSB7XHJcbiAgICBnZXRFdmVudChldmVudCkge1xyXG4gICAgICByZXR1cm4gZXZlbnQgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgfSxcclxuICAgIGdldFRhcmdldChldmVudCkge1xyXG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgcHJldmVudERlZmF1bHQoZXZlbnQpIHtcclxuICAgICAgaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAgLy8gRE9NMlxyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KGBvbiR7dHlwZX1gLCBoYW5kbGVyKTsgIC8vIElFXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFtgb24ke3R5cGV9YF0gPSBoYW5kbGVyOyAgLy8gRE9NIDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xyXG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgLy8gRE9NMlxyXG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcclxuICAgICAgICBlbGVtZW50LmRldGFjaEV2ZW50KGBvbiR7dHlwZX1gLCBoYW5kbGVyKTsgLy8gSUVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50W2BvbiR7dHlwZX1gXSA9IG51bGw7IC8vIERPTSAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduKi9cclxuICAgIC8qIEVsZW1lbnQg5Ye95pWwKi9cclxuICBjb25zdCBFbGVVdGlsID0ge1xyXG4gICAgY3JlYXRlKGVsZSkge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdElEKGVsZSkge1xyXG4gICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3Qoc2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgfSxcclxuICB9O1xyXG4gICAgLyog5qih5Z2XKi9cclxuICBjb25zdCBtb3VzZU92ZXJBY3Rpb24gPSB7XHJcbiAgICBzaG93SW1nKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgIC8qIGlmICghZXZlbnRUYXJnZXQuc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xyXG4gICAgICB9Ki9cclxuICAgICAgY29uc3QgbGFyZ2VWaWV3Q29udGFpbmVyID0gRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jyk7XHJcbiAgICAgIGNvbnN0IFtzY3JvbGxUb3BWYWx1ZSwgc2Nyb2xsTGVmdFZhbHVlXSA9IFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XTtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW1nIHNyYz0ke2V2ZW50VGFyZ2V0LnNyY30gLz5gO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZICsgc2Nyb2xsVG9wVmFsdWUgKyAyMH1weGA7XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCArIHNjcm9sbExlZnRWYWx1ZX1weGA7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coW2V2ZW50LmNsaWVudFksZXZlbnQuY2xpZW50WF0pO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS50b3AsXHJcbiAgICAgICAgICAgICAgLy8gRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUubGVmdF0pO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdKTtcclxuICAgIH0sXHJcbiAgICBjbGVhckltZygpIHtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBhdHRhY2hBY3Rpb24gPSB7XHJcbiAgICBhdHRhY2hFbW90aW9uKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgbGV0IGFkZHJlc3NUYXJnZXQgPSAnJztcclxuICAgICAgbGV0IGVtb3Rpb25BZGRyZXNzID0gJyc7XHJcbiAgICAgIGlmIChldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpID09PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50VGFyZ2V0LnNyYykge1xyXG4gICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LnNyYztcclxuICAgICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAnaW1hZ2UnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpZ24nKTtcclxuICAgICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAncGxhaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpO1xyXG4gICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAncGxhaW4nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RUZXh0QXJlYSA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCBvdmFsdWUgPSBzZWxlY3RUZXh0QXJlYS52YWx1ZTtcclxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgLy8gY29uc3QgZW5kUG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uRW5kO1xyXG4gICAgICBzZWxlY3RUZXh0QXJlYS52YWx1ZSA9IGAke292YWx1ZS5zbGljZSgwLCBzdGFydFBvcyl9JHtlbW90aW9uQWRkcmVzc30ke292YWx1ZS5zbGljZShzdGFydFBvcyl9YDtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZW1vdGlvbkFkZHJlc3MpO1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3NQYXJzZShhZGRTdHIsIHBhdHRlcm4pIHtcclxuICAgICAgbGV0IHN0cmluZ1JldHVybiA9ICcnO1xyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgIHN0cmluZ1JldHVybiA9IGBbaW1nXSR7YWRkU3RyfVsvaW1nXWA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdwbGFpbicpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBkZWNvZGVVUkkoYWRkU3RyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0dGVybiA9PT0gJ2ltYWdlTGluaycpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBhZGRTdHI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cmluZ1JldHVybjtcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVJdGVtcyA9IHtcclxuICAgIGNyZWF0ZUNvbnRhaW5lcihrZXkpIHtcclxuICAgICAgY29uc3QgSXRlbUNvbnRhaW5lciA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgSXRlbUNvbnRhaW5lci5pZCA9IGBlZGRpZTMyJHtrZXl9YDtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93JykuYXBwZW5kQ2hpbGQoSXRlbUNvbnRhaW5lcik7XHJcbiAgICAgIHJldHVybiBJdGVtQ29udGFpbmVyO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUltYWdlcyhrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTWVudUxpc3Rba2V5XSk7XHJcbiAgICAgIGNvbnN0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZGl2RWxlbWVudCA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9ICdjbGlja0l0ZW0nO1xyXG4gICAgICAgIGNvbnN0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3ZlciA9IG1vdXNlT3ZlckFjdGlvbi5zaG93SW1nO1xyXG4gICAgICAgIGltZ0l0ZW0ub25tb3VzZW91dCA9IG1vdXNlT3ZlckFjdGlvbi5jbGVhckltZztcclxuXHJcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZVBsYWluVGV4dChrZXkpIHtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgY29uc3QgdHh0TGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgdHh0TGVuZ3RoID0gdHh0TGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdHh0TGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCB0eHRJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgICB0eHRJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7IG1hcmdpbjogMTBweCAxMHB4Oyc7XHJcbiAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHt0eHRMaXN0W2tdfTwvYT5gO1xyXG4gICAgICAgIGlmIChNZW51TGlzdFtrZXldLnJlZikge1xyXG4gICAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHtNZW51TGlzdFtrZXldLnJlZltrXX08L2E+YDtcclxuICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHh0SXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgdHh0SXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6IDEwcHggMTBweDp3aWR0aDogNTBweDsnO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHR4dEl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSW1hZ2VMaW5rKGtleSkge1xyXG4gICAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICBjb25zdCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCByZWZMaXN0ID0gTWVudUxpc3Rba2V5XS5yZWY7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICBpbWdJdGVtLmRhdGFzZXQubGluayA9IHJlZkxpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7JztcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGNsZWFyTWVudSA9IHtcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICBjb25zdCB0b2dnbGVXaW5kb3cgPSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKTtcclxuICAgICAgdG9nZ2xlV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGNvbnN0IHRvZ1dpbkNoaWxkcmVuID0gdG9nZ2xlV2luZG93LmNoaWxkTm9kZXM7XHJcbiAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSB0b2dXaW5DaGlsZHJlbi5sZW5ndGg7IGogPCBsZW47IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9nV2luQ2hpbGRyZW5bal0pO1xyXG4gICAgICAgIHRvZ1dpbkNoaWxkcmVuW2pdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBleHBhbmRNZW51ID0ge1xyXG4gICAgaW5pdChldmVudCkge1xyXG4gICAgICBjbGVhck1lbnUuY2xlYXIoKTtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLndpZHRoID0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJykuc3R5bGUud2lkdGg7XHJcbiAgICAgIGNvbnN0IGRhdGFUeXBlID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJldHlwZScpO1xyXG4gICAgICBjb25zdCBkYXRhS2V5ID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWtpZCcpO1xyXG4gICAgICBpZiAoRWxlVXRpbC5zZWxlY3QoYCNlZGRpZTMyJHtkYXRhS2V5fWApKSB7XHJcbiAgICAgICAgRWxlVXRpbC5zZWxlY3QoYCNlZGRpZTMyJHtkYXRhS2V5fWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGlmIChkYXRhS2V5ID09PSAnaXRlbTEnKSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICAgICAgZWxzZSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGF0YVR5cGUgPT09ICdwbGFpbicpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVQbGFpblRleHQoZGF0YUtleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdpbWFnZScpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZXMoZGF0YUtleSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09ICdpbWFnZUxpbmsnKSB7XHJcbiAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VMaW5rKGRhdGFLZXkpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgY3JlYXRlTWVudSA9IHtcclxuICAgIGRlZmF1bHRJRDogJ2Vtb3Rpb24wMDAwJyxcclxuICAgIG1haW4oKSB7XHJcbiAgICAgICAgICAgIC8qIG1haW4gbWVudSovXHJcbiAgICAgIGNvbnN0IG1haW5NZW51ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICBtYWluTWVudS5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9J2xhcmdlVmlldyc+PC9zcGFuPjxzcGFuIGNsYXNzPSdzdWJNZW51JyB0aXRsZT0n5Li76I+c5Y2VIHZlcnNpb24gJHt2ZXJzaW9uTm99Jz48Yj7ikajlm6fikag8L2I+PC9zcGFuPmA7XHJcbiAgICAgIG1haW5NZW51LmlkID0gY3JlYXRlTWVudS5kZWZhdWx0SUQ7XHJcbiAgICAgIGNvbnN0IE1lbnVMZW5ndGggPSBPYmplY3Qua2V5cyhNZW51TGlzdCkubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1lbnVMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGNvbnN0IE1lbnVLZXkgPSBPYmplY3Qua2V5cyhNZW51TGlzdClbaV07XHJcbiAgICAgICAgY29uc3QgTWVudVRpdGxlID0gTWVudUxpc3RbTWVudUtleV0udGl0bGU7XHJcbiAgICAgICAgY29uc3QgTWVudVR5cGUgPSBNZW51TGlzdFtNZW51S2V5XS5kYXRhdHlwZTtcclxuICAgICAgICAvLyBpZiAoIU1lbnVUeXBlIHx8ICFNZW51VGl0bGUpIGNvbnNvbGUubG9nKGBkYXRhZXJyb3IgICR7TWVudUtleX1gKTtcclxuICAgICAgICBjb25zdCB0ZXN0TWVudSA9IGNyZWF0ZU1lbnUuc3VicyhNZW51VGl0bGUsIGV4cGFuZE1lbnUuaW5pdCwgTWVudUtleSwgTWVudVR5cGUpO1xyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKHRlc3RNZW51KTtcclxuICAgICAgfVxyXG4gICAgICAgICAgICAvKiBjbG9zZSBidXR0b24qL1xyXG4gICAgICBjb25zdCBjbG9zZUJ0biA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICdbeF0nO1xyXG4gICAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnc3ViTWVudSc7XHJcbiAgICAgIGNsb3NlQnRuLmlkID0gJ2Nsb3NlRU0nO1xyXG4gICAgICBjbG9zZUJ0bi5vbmNsaWNrID0gY2xlYXJNZW51LmNsZWFyO1xyXG4gICAgICBjbG9zZUJ0bi5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyJztcclxuICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICAgICAgICAvKiBkcm9wZG93biBib3gqL1xyXG4gICAgICBjb25zdCBpdGVtV2luZG93ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICBpdGVtV2luZG93LmlkID0gJ3RvZ2dsZVdpbmRvdyc7XHJcbiAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGl0ZW1XaW5kb3cpO1xyXG4gICAgICAgICAgICAvKiBjc3Mgc3R5bGUqL1xyXG4gICAgICBjb25zdCBzdHlsZUl0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnc3R5bGUnKTtcclxuICAgICAgc3R5bGVJdGVtLmlubmVySFRNTCA9IGAjZW1vdGlvbjAwMDAge3BhZGRpbmc6NXB4IDVweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgICBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8xNnB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJ30gXFxcclxuICAgICAgICAgICAgICAgICNsYXJnZVZpZXd7cG9zaXRpb246YWJzb2x1dGU7IGJhY2tncm91bmQ6ICNmZmY7ei1pbmRleDo1MDAwOyBvcGFjaXR5OiAwLjh9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3IGltZ3t3aWR0aDogMjAwcHg7IGhlaWdodDoyMDBweDt9IFxcXHJcbiAgICAgICAgICAgICAgICAjdG9nZ2xlV2luZG93IGF7cGFkZGluZzogNXB4IDVweDtsaW5lLWhlaWdodDoyfSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyB7aGVpZ2h0OiAxMDBweDsgcGFkZGluZzogM3B4IDNweDsgb3ZlcmZsb3cteDogYXV0bzsgbWFyZ2luLXRvcDo2cHg7IFxcXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjZweDsgYm9yZGVyOjFweCBzb2xpZCAjZmY0MzUxOyBkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7IHotaW5kZXg6MjAwOyB9XFxcclxuICAgICAgICAgICAgICAgIC5jbGlja0l0ZW17ZGlzcGxheTppbmxpbmUtYmxvY2s7IHotaW5kZXg6MzAwO31cclxuICAgICAgICAgICAgICAgIGEuc3ViQnV0e3RleHQtZGVjb3JhdGlvbjogbm9uZTtjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICAuRW1ze2N1cnNvcjpwb2ludGVyO3dpZHRoOiA1MHB4O2hlaWdodDogNTBweDtkaXNwbGF5OmlubGluZS1ibG9jazsgIHotaW5kZXg6NDAwO30gXFxcclxuICAgICAgICAgICAgICAgIGEuc3ViQnV0OmhvdmVye2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIGEudHh0QnRuRW1vdGlvbnt0ZXh0LWRlY29yYXRpb246bm9uZTt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb246aG92ZXJ7YmFja2dyb3VuZDojZmY3NjgwOyBjb2xvcjojZmZmOyB9IFxcXHJcbiAgICAgICAgICAgICAgICAuc3ViTWVudXtkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcjsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6IDhweCA4cHg7IFxcXHJcbiAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE2cHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnO1xcXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MzUxO2JvcmRlci1jb2xvcjogI2ZmNDM1MTtjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICAuc3ViTWVudTpob3ZlciwgLnN1Yk1lbnU6Zm9jdXMsIC5zdWJNZW51OnZpc2l0ZWR7YmFja2dyb3VuZC1jb2xvcjogI2ZmNzY4MDtib3JkZXItY29sb3I6ICNmZjc2ODA7Y29sb3I6ICNmZmY7fWA7XHJcbiAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKHN0eWxlSXRlbSk7XHJcbiAgICAgIHJldHVybiBtYWluTWVudTtcclxuICAgIH0sXHJcbiAgICBzdWJzKHRpdGxlLCBmdW5jLCBzdWJpZCwgc3VidHlwZSkge1xyXG4gICAgICBjb25zdCBzdWJNZW51ID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgc3ViTWVudS5pZCA9IHN1YmlkO1xyXG4gICAgICBzdWJNZW51LmNsYXNzTmFtZSA9ICdzdWJNZW51JztcclxuICAgICAgc3ViTWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2lkJywgc3ViaWQpO1xyXG4gICAgICBzdWJNZW51LnNldEF0dHJpYnV0ZSgnZGF0YS1yZXR5cGUnLCBzdWJ0eXBlKTtcclxuICAgICAgY29uc3Qgc3ViY29udGVudCA9IGA8YSBjbGFzcz0nc3ViQnV0JyBkYXRhLWtpZD0ke3N1YmlkfSBkYXRlLXJldHlwZT0ke3N1YnR5cGV9PiR7dGl0bGV9PC9hPmA7XHJcbiAgICAgIHN1Yk1lbnUub25jbGljayA9IGZ1bmM7XHJcbiAgICAgIHN1Yk1lbnUudGl0bGUgPSB0aXRsZTtcclxuICAgICAgc3ViTWVudS5pbm5lckhUTUwgPSBzdWJjb250ZW50O1xyXG4gICAgICByZXR1cm4gc3ViTWVudTtcclxuICAgIH0sXHJcblxyXG4gIH07XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAhPSBudWxsKSB7XHJcbiAgICAvLyBsZXQgdGVzdGFyZWFFbGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgdGVzdFNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGVzdFNldCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0Lml0ZW0oMCkpO1xyXG4gICAgY29uc3QgbWFpbkVtb3Rpb25NZW51ID0gY3JlYXRlTWVudS5tYWluKCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250ZW50JykgIT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250ZW50Jykuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgIH1cclxuICAgIGZvciAobGV0IHcgPSAwOyB3IDwgdGVzdFNldC5sZW5ndGg7IHcgKz0gMSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0Lml0ZW0odykpO1xyXG4gICAgICBjb25zdCBlbGVtZW50VGVzdCA9IHRlc3RTZXQuaXRlbSh3KTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobWFpbkVtb3Rpb25NZW51KTtcclxuICAgICAgZWxlbWVudFRlc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFpbkVtb3Rpb25NZW51LCBlbGVtZW50VGVzdCk7XHJcbiAgICB9XHJcbiAgICAvLyBOb2RlTGlzdC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgLy8gSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBBcnJheS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIC8vIGNvbnN0IGVsZW1lbnRTZXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpKTtcclxuICAgICAgICAvKiDlhbzlrrnmgKfpl67popggQnkg5Za15ouJ5biD5LiBMjAxNy4wMS4zMDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWXmlrnms5Xov5Tlm57nmoTmmK9IVE1MQ29sbGVjdGlvblxyXG7lnKjovoPmlrDniYjnmoRGaXJlZm945Lit77yMSFRNTENvbGxlY3Rpb27mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOaJgOS7peWPr+S7peeUqGZvci4uLm9m5b6q546vXHJcbuiAjOWcqENocm9tZeS4re+8iOaIkeWPquWcqOS9v+eUqENocm9taXVtIDUw5YaF5qC455qE5rWP6KeI5Zmo5LiL5rWL6K+V6L+H77yJ77yMSFRNTENvbGxlY3Rpb27kuI3mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOS4jeWPr+eUqOebtOaOpeS9v+eUqGZvci4uLm9m5b6q546vXHJcbuaJgOS7peW7uuiurualvOS4u+i/mOaYr+eUqOiAgeaWueazleWQpyovXHJcbiAgICAgICAgLy8gU29sdXRpb24gc3RhY2tmbG93OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNzU0MzE1L2ZvcmVhY2gtbG9vcC1mb3ItaHRtbGNvbGxlY3Rpb24tZWxlbWVudHNcclxuICAgICAgICAvKiDov5jmnIlBcnJheS5mcm9t5pa55rOV56Gu5a6e6IO96Kej5YazQ2hyb21l5LiLSFRNTENvbGxlY3Rpb27kuI3og73nlKhmb3IuLi5vZuW+queOr+eahOmXrumimO+8jOS4jei/h0Nocm9tZSA0NeaJjeW8gOWni+aUr+aMgUFycmF5LmZyb23mlrnms5Vcclxu6Iul5oOz5YW85a655Lul5YmN55qE5rWP6KeI5Zmo55qE6K+d77yM5Y+v5Lul55SoZm9yLi4uaW7lvqrnjq/vvIzmiJbogIXliqDkuKpiYWJlbC1wb2x5ZmlsbOiEmuacrFxyXG7lvZPnhLbkvaDkuI3mg7Plhbzlrrnkvb/nlKhDaHJvbWl1bSA0NeS7peWJjeWGheaguOeahOa1j+iniOWZqOS5n+ayoeWkmuWkp+mXrumimO+8jOeOsOWcqOWbveWGheW4guWcuuS7vemineacgOWkmkNocm9taXVt5aWX5aOz5rWP6KeI5ZmoLS0zNjDlronlhajmtY/op4jlmajnmoTmnIDmlrDmraPlvI/niYjkuZ/mmK/ph4fnlKhDaHJvbWl1bSA0NeWGheaguOS6hiovXHJcbiAgICAvLyBjb25zdCBlbGVtZW50U2V0TGVuZ3RoID0gZWxlbWVudFNldC5sZW5ndGg7XHJcbiAgICAvKiBpZiAoZWxlbWVudFNldExlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHRleHRhcmVhJyk7XHJcbiAgICB9ICovXHJcbiAgICAvLyB0ZXN0YXJlYUVsZVNldC5hZGQoZWxlbWVudFNldCk7XHJcbiAgICAvKiBjb25zdCB1c2VyT3B0aW9uID0ge1xyXG4gICAgICB1c2VyV2luZG93SGVpZ2h0OiAxMjAsXHJcbiAgICAgIHVzZXJTZWxlY3RUZXh0QXJlYTogJ2xhc3QnLFxyXG4gICAgfTsgKi9cclxuXHJcbiAgICAvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1zeW50YXg6IFsxLCBcIkZvck9mU3RhdGVtZW50XCJdICovXHJcbiAgICAvKiBmb3IgKGNvbnN0IGVsZW1lbnRTaW5nbGUgb2YgZWxlbWVudFNldCkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFNpbmdsZSk7XHJcbiAgICAgIGVsZW1lbnRTaW5nbGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFpbkVtb3Rpb25NZW51LCBlbGVtZW50U2luZ2xlKTtcclxuICAgIH0gKi9cclxuICB9XHJcbn07XHJcblxyXG5pZih0eXBlb2YgaW1ncGF0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGxldCBpbWdwYXRoID0gJzE0ODU0MTI4MTAnO1xyXG59XHJcbmZ1bihpbWdwYXRoKTtcclxuIl19
