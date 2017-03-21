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
          addressTarget = eventTarget.getAttribute('data-sign');
          emotionAddress = attachAction.addressParse(addressTarget, 'plain');
        }
      } else {
        addressTarget = eventTarget.getAttribute('data-link');
        emotionAddress = attachAction.addressParse(addressTarget, 'plain');
      }
      const selectTextArea = EleUtil.select('textarea');
      const ovalue = selectTextArea.value;
      const startPos = selectTextArea.selectionStart;
      // const endPos = selectTextArea.selectionEnd;
      selectTextArea.value = `${ovalue.slice(0, startPos)}${emotionAddress}${ovalue.slice(startPos)}`;
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

    createImages(key) {

      const outerContainer = EleUtil.selectID(`eddie32${key}`);
      console.log(MenuList[key]);
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

      const outerContainer = EleUtil.selectID(`eddie32${key}`);
      outerContainer.innerHTML = '';
      const txtList = MenuList[key].addr;
      const txtLength = txtList.length;
      for (let k = 0; k < txtLength; k += 1) {
        console.log(txtLength);
        const txtItem = EleUtil.create('a');
        txtItem.className = 'txtBtnEmotion';
        txtItem.setAttribute('data-sign', `${encodeURI(txtList[k])}`);
        txtItem.innerHTML = `${txtList[k]}`;
        if (MenuList[key].ref) {
          txtItem.innerHTML = `${MenuList[key].ref[k]}`;
          EleUtil.selectID('toggleWindow').style.height = '50px';
        }
        txtItem.onclick = attachAction.attachEmotion;
        outerContainer.appendChild(txtItem);
      }
    },
    createImageLink(key) {

      const outerContainer = EleUtil.selectID(`eddie32${key}`);
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
    main() {
      /* main menu*/
      const mainMenu = EleUtil.create('div');
      mainMenu.innerHTML = `<span id='largeView'></span>`;
      mainMenu.id = 'emotion0000';
      const MenuLength = Object.keys(MenuList).length;
      for (let i = 0; i < MenuLength; i += 1) {
        const MenuKey = Object.keys(MenuList)[i];
        const MenuTitle = MenuList[MenuKey].title;
        const MenuType = MenuList[MenuKey].datatype;
        // if (!MenuType || !MenuTitle) console.log(`data error:  ${MenuKey}`);
        const testMenu = createMenu.subs(MenuTitle, expandMenu.init, MenuKey, MenuType);
        mainMenu.appendChild(testMenu);
      }
      /* close button*/
      const closeBtn = EleUtil.create('a');
      closeBtn.innerHTML = 'x';
      closeBtn.className = 'subMenu';
      closeBtn.id = 'closeEM';
      closeBtn.onclick = clearMenu.clear;
      closeBtn.style.cssText = 'cursor:pointer';
      mainMenu.appendChild(closeBtn);
      /* dropdown box*/
      const itemWindow = EleUtil.create('div');
      itemWindow.id = 'toggleWindow';
      mainMenu.appendChild(itemWindow);
      for (let ww = 0; ww < MenuLength; ww += 1) {
        let itemEddie32 = EleUtil.create('div');
        let MenuKey = Object.keys(MenuList)[ww];
        itemEddie32.id = `eddie32${MenuKey}`;
        itemEddie32.style.display = 'none';
        itemWindow.appendChild(itemEddie32);
      }
      /* css style*/
      const styleItem = EleUtil.create('style');
      styleItem.innerHTML = `#emotion0000 { font: 12px/28px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif'; \
                margin-bottom: 5px; } \
                #largeView{position:absolute; background: #fff; z-index:5000; opacity: 0.8;} \
                #largeView img{width: 200px; height:200px;} \
                #toggleWindow {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:4px; \
                margin-bottom:4px; border:1px solid #ff4351; display:none;position:relative; z-index:200; }\
                .clickItem{display:inline-block; z-index:300;}
                a.subMenu{cursor:pointer;display:inline-block;cursor:pointer; \
                	text-align:center; padding: 0 8px; \
                font: 12px/30px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif';\
                background-color: #ff4351;border-color: #ff4351;color: #fff;} \
                .Ems{cursor:pointer;width: 50px;height: 50px;display:inline-block;  z-index:400;} \
                a.txtBtnEmotion{display: inline-block; text-decoration:none; \ 
                	cursor: pointer;
                	padding:0 8px; font: 12px/24px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif'} \
                a.txtBtnEmotion:hover{background:#ff7680; color:#fff; } \
                a.subMenu:hover, a.subMenu:focus, a.subMenu:visited{background-color: #ff7680;border-color: #ff7680;color: #fff;}`;
      mainMenu.appendChild(styleItem);
      return mainMenu;
    },
    subs(title, func, subid, subtype) {
      const subMenu = EleUtil.create('a');
      subMenu.id = subid;
      subMenu.className = 'subMenu';
      subMenu.setAttribute('data-kid', subid);
      subMenu.setAttribute('data-retype', subtype);
      subMenu.onclick = func;
      subMenu.title = title;
      subMenu.innerHTML = `${title}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBOztBQUVBOztBQUdBLE1BQU0sTUFBTSxDQUFDLFlBQVksWUFBYixLQUE4QjtBQUN4QyxRQUFNLFlBQVksT0FBbEI7QUFDRTs7Ozs7Ozs7QUFRQTtBQUNGLFdBQVMsa0JBQVQsQ0FBNEIsV0FBNUIsRUFBeUMsV0FBekMsRUFBc0QsU0FBdEQsRUFDRSxTQURGLEVBQ2EsWUFBWSxFQUR6QixFQUM2QixjQUFjLEtBRDNDLEVBQ2tEO0FBQ2hELFFBQUksV0FBVyxFQUFmO0FBQ0EsUUFBSSxhQUFhLENBQWpCO0FBQ0EsU0FBSyxJQUFJLElBQUksV0FBYixFQUEwQixJQUFJLFdBQTlCLEVBQTJDLEtBQUssQ0FBaEQsRUFBbUQ7QUFDakQsbUJBQWEsQ0FBYjtBQUNBLFVBQUksV0FBSixFQUFpQjtBQUNmLHFCQUFjLElBQUksQ0FBTCxHQUFXLENBQVgsR0FBa0IsSUFBRyxDQUFFLEVBQXBDO0FBQ0Q7QUFDRCxpQkFBWSxHQUFFLFNBQVUsR0FBRSxVQUFXLEdBQUUsU0FBVSxFQUFqRDtBQUNBLGdCQUFVLElBQVYsQ0FBZSxRQUFmO0FBQ0Q7QUFDRCxXQUFPLFNBQVA7QUFDRDtBQUNDOztBQUdBO0FBQ0YsUUFBTSxTQUFTLG1CQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQiw2Q0FBMUIsRUFDbUIsT0FEbkIsQ0FBZjtBQUVBLHFCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUEwQix1Q0FBMUIsRUFBbUUsTUFBbkUsRUFBMkUsTUFBM0U7QUFDQSxxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIsbURBQTFCLEVBQ3FCLE9BRHJCLEVBQzhCLE1BRDlCO0FBRUU7QUFDRixxQkFBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsRUFBMEIseUNBQTFCLEVBQ3FCLE1BRHJCLEVBQzZCLE1BRDdCLEVBQ3FDLElBRHJD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QVIsQ0FBcUIsYUFBckIsRUFBb0MsT0FBcEM7QUFDQSxjQUFRLE9BQVIsR0FBa0IsSUFBbEI7QUFDQSxjQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxjQUFRLFNBQVIsR0FBcUIsR0FBRSxLQUFNLEVBQTdCO0FBQ0EsYUFBTyxPQUFQO0FBQ0Q7O0FBbEVnQixHQUFuQjs7QUFzRUEsTUFBSSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsWUFBWSxJQUFqRCxFQUF1RDtBQUNyRDtBQUNBLFVBQU0sVUFBVSxTQUFTLG9CQUFULENBQThCLFVBQTlCLENBQWhCO0FBQ0E7QUFDQTtBQUNBLFVBQU0sa0JBQWtCLFdBQVcsSUFBWCxFQUF4QjtBQUNBLFFBQUksU0FBUyxjQUFULENBQXdCLGdCQUF4QixNQUE4QyxJQUFsRCxFQUF3RDtBQUN0RCxlQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDLEtBQTFDLENBQWdELFFBQWhELEdBQTJELFFBQTNEO0FBQ0Q7QUFDRCxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksUUFBUSxNQUE1QixFQUFvQyxLQUFLLENBQXpDLEVBQTRDO0FBQzFDO0FBQ0EsWUFBTSxjQUFjLFFBQVEsSUFBUixDQUFhLENBQWIsQ0FBcEI7QUFDQTtBQUNBLGtCQUFZLFVBQVosQ0FBdUIsWUFBdkIsQ0FBb0MsZUFBcEMsRUFBcUQsV0FBckQ7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNJOzs7O0FBSUE7QUFDQTs7O0FBR0o7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7QUFLQTtBQUNBOzs7O0FBSUQ7QUFDRixDQWxaRDs7QUFvWkEsSUFBRyxPQUFPLE9BQVAsS0FBbUIsV0FBdEIsRUFBbUM7QUFDL0IsTUFBSSxVQUFVLFlBQWQ7QUFDSDtBQUNELElBQUksT0FBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBlc2xpbnQgbGluZWJyZWFrLXN0eWxlOiBbXCJlcnJvclwiLCBcIndpbmRvd3NcIl0gKi9cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIHN0cmljdCAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbmNvbnN0IGZ1biA9IChpbWFnZXBhdGggPSAnMTQ4NTQxMjgxMCcpID0+IHtcclxuICBjb25zdCB2ZXJzaW9uTm8gPSAnNC4yLjInO1xyXG4gICAgLyogQWRkcmVzcyBmdW5jdGlvblxyXG4gICAgICogc3RhcnROdW1iZXI6IG51bWJlciwgaW5kaWNhdGluZyB0aGUgc3RhcnQgbnVtYmVyO1xyXG4gICAgICogbGVuZ3RoQXJyYXk6IG51bWJlciwgaW5kaWNhdGluZyB0aGUgYWRkckFycmF5IGxlbmd0aDtcclxuICAgICAqIHN0clByZWZpeDogc3RyaW5nLCBhZGRyZXNzIFByZWZpeDtcclxuICAgICAqIHN0clN1ZmZpeDogc3RyaW5nLCBhZGRyZXNzIFN1ZmZpeDtcclxuICAgICAqIGxlYWRpbmdaZXJvOiBib29sZW4sIHRydWUgZm9yIGxlYWRpbmcgemVybyBpbiBudW1iZXI7XHJcbiAgICAgKiBhZGRyQXJyYXk6IGFycmF5LCBhZGRyZXNzIGFycmF5LCBkZWZhdWx0IGZvciBlbXB0eTtcclxuICAgICAqL1xyXG4gICAgLy8g5Yib5bu66KGo5oOF5YyF5pWw57uE55qE5Ye95pWwXHJcbiAgZnVuY3Rpb24gZW1BZGRyQXJyYXlIYW5kbGVyKHN0YXJ0TnVtYmVyLCBsZW5ndGhBcnJheSwgc3RyUHJlZml4LFxyXG4gICAgc3RyU3VmZml4LCBhZGRyQXJyYXkgPSBbXSwgbGVhZGluZ1plcm8gPSBmYWxzZSkge1xyXG4gICAgbGV0IGFkZHJUZW1wID0gJyc7XHJcbiAgICBsZXQgYWRkck51bWJlciA9IDA7XHJcbiAgICBmb3IgKGxldCBqID0gc3RhcnROdW1iZXI7IGogPCBsZW5ndGhBcnJheTsgaiArPSAxKSB7XHJcbiAgICAgIGFkZHJOdW1iZXIgPSBqO1xyXG4gICAgICBpZiAobGVhZGluZ1plcm8pIHtcclxuICAgICAgICBhZGRyTnVtYmVyID0gKGogPiA5KSA/IChqKSA6IChgMCR7an1gKTtcclxuICAgICAgfVxyXG4gICAgICBhZGRyVGVtcCA9IGAke3N0clByZWZpeH0ke2FkZHJOdW1iZXJ9JHtzdHJTdWZmaXh9YDtcclxuICAgICAgYWRkckFycmF5LnB1c2goYWRkclRlbXApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkZHJBcnJheTtcclxuICB9XHJcbiAgICAvKiDooajmg4XljIXlnLDlnYDmlbDmja4gKi9cclxuXHJcblxyXG4gICAgLy8gQuermVxyXG4gIGNvbnN0IGJpbGlFTSA9IGVtQWRkckFycmF5SGFuZGxlcigxLCAxNywgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkcy8yMjMzICgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKS5naWYnKTtcclxuICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTQsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHMvJywgJy5wbmcnLCBiaWxpRU0pO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigwLCAxNCwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkcy9iaWxpYmlsaVRWICgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcpLnBuZycsIGJpbGlFTSk7XHJcbiAgICAvLyB0b3Jh6YWxXHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE0LCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzMi8wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLmpwZycsIGJpbGlFTSwgdHJ1ZSk7XHJcbiAgICAvLyDpmL/ljaHmnpcgZnJvbSDmkYfmm7Pnmb7lkIhcclxuICBjb25zdCBBa2FyaVNtaWxlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDIxLCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzMi9ha2FyaScsICcuZ2lmJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDcyLCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzMy9ha2FyaScsICcucG5nJywgQWthcmlTbWlsZSk7XHJcbiAgICAvLyBOZXcgR2FtZVxyXG4gIGNvbnN0IE5ld0dhbWUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMiwgNjQsICdodHRwOi8vbzZzbW5kNnV3LmJrdC5jbG91ZGRuLmNvbS94ZHM0LzB4eCcsICcucG5nJyk7XHJcbiAgICAvLyBBQ0ZVTlxyXG4gIGNvbnN0IEFDU21pbGU0ID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDUxLCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20veGRzNi8nLCAnLnBuZycpO1xyXG4gIGVtQWRkckFycmF5SGFuZGxlcigxLCA0MCwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL3hkczUvJywgJy5naWYnLCBBQ1NtaWxlNCwgdHJ1ZSk7XHJcbiAgICAvLyBLRiDlhoXnva5cclxuICBjb25zdCBLRlNtaWxlVVJMID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQ5LCBgJHt0eXBlb2YgaW1hZ2VwYXRoICE9PSAndW5kZWZpbmVkJyA/IGltYWdlcGF0aCA6ICcnfS9wb3N0L3NtaWxlL2VtL2VtYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZ2lmJywgW10sIHRydWUpO1xyXG4gIGNvbnN0IEtGU21pbGVDb2RlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEwLCA1OCwgJ1tzOicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ10nKTtcclxuICAgIC8vIGxvdmVsaXZl5LiT55So5bCPXHJcbiAgY29uc3QgTG92ZWxpdmVTbWFsbHRhcmdldFVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLCA0MSwgJ2h0dHA6Ly9vNnNtbmQ2dXcuYmt0LmNsb3VkZG4uY29tL2xvdmVsaXZlL0xvdmVsaXZlMm5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcucG5nJyk7XHJcbiAgZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDQxLCAnaHR0cDovL282c21uZDZ1dy5ia3QuY2xvdWRkbi5jb20vbG92ZWxpdmUvTG92ZWxpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcucG5nJywgTG92ZWxpdmVTbWFsbHRhcmdldFVSTCk7XHJcbiAgICAvLyBrZuW/q+aNt+S7o+eggSjpnIDopoHmlLnlhpnop6PmnoTotYvlgLwpXHJcbiAgY29uc3QgZnVuY3Rpb25EZXNjcmlwdGlvbiA9IFsn5Ye65ZSu6LS0c2VsbD3llK7ku7cnLCAn5byV55SoJywgJ+makOiXj2hpZGU956We56eY562J57qnJywgJ+aPkuWFpeS7o+eggScsICfliKDpmaTnur8nLCAn6LeR6ams54GvJywgJ+aWh+Wtl+minOiJsicsICfnspfkvZMnLFxyXG4gICAgJ+S4i+WIkue6vycsICfmlpzkvZMnLCAn5rC05bmz57q/JywgJ+iDjOaZr+iJsicsICfmj5LlhaXlm77niYcnXTtcclxuICBjb25zdCBkZWZhdWx0RnVuY3Rpb24gPSBbJ1tzZWxsPTEwMF1bL3NlbGxdJywgJ1txdW90ZV1bL3F1b3RlXScsICdbaGlkZT0xMDBdWy9oaWRlXScsICdbY29kZV1bL2NvZGVdJyxcclxuICAgICdbc3RyaWtlXVsvc3RyaWtlXScsICdbZmx5XVsvZmx5XScsICdbY29sb3I9IzAwRkYwMF1bL2NvbG9yXScsICdbYl1bL2JdJywgJ1t1XVsvdV0nLCAnW2ldWy9pXScsXHJcbiAgICAnW2hyXScsICdbYmFja2NvbG9yPV1bL2JhY2tjb2xvcl0nLCAnW2ltZ11bL2ltZ10nXTtcclxuICAgIC8vIOminOaWh+Wtl1xyXG4gIGNvbnN0IGVtb2ppID0gWyco4peP44O7IDgg44O74pePKScsXHJcbiAgICAn4pWwKOC5keKXlSDilr0g4peV4LmRKeKVrycsICco44Kdz4njg7spJywgJ+OAnOKZquKZqicsICco776f0JTvvp/iiaHvvp/QlO++nyknLCAnKO+8vm/vvL4p776JJywgJyh8fHzvvp/QlO++nyknLCAnKGDOtcK0ICknLCAnKOKVrO++n9C0776fKScsICcofHx8776f0LTvvp8pJywgJyjvv6PiiIfvv6MpJywgJyjvv6Mz77+jKScsICco77+j772w77+jKScsICco77+jIC4g77+jKScsICco77+j77i/77+jKScsICco77+j77i277+jKScsICcoKsK0z4lgKiknLCAnKOODu8+J44O7KScsICco4oyS4pa94oySKScsICco77+j4pa977+j77yJJywgJyg944O7z4njg7s9KScsICco772A44O7z4njg7vCtCknLCAnKOOAnO+/o+KWs++/oynjgJwnLCAnKO+9peKIgO+9pSknLFxyXG4gICAgJyjCsOKIgMKwKe++iScsICco77+jM++/oyknLCAn4pWuKO+/o+KWve+/oynila0nLCAnKCDCtF/jgp3vvYApJywgJ+OBruODruOBricsICco776J2II8IOC5ke+8ieivtuWYv+KYhu+9nicsICcoJmx0O18mbHQ7KScsICcoJmd0O18mZ3Q7KScsICcoO8KsX8KsKScsICco4paU4pah4paUKS8nLCAnKO++n9CU776f4omh776f0LTvvp8pIT8nLCAnzqMo776f0LTvvp87KScsICfOoygg77+j4pah77+jfHwpJyxcclxuICAgICcowrTvvJvPie+8m2ApJywgJ++8iC9U0JRUKS8nLCAnKF7jg7vPieODu14gKScsICco772h772lz4nvvaXvvaEpJywgJyjil4/vv6Mo7720Ke+/o+KXjyknLCAnzrU9zrU9KOODjuKJp+KIh+KJpinjg44nLCAnKMK0772lX++9pWApJywgJygtXy0jKScsICfvvIjvv6Pjgbjvv6PvvIknLCAnKO+/o861KCPvv6MpIM6jJywgJ+ODvShg0JTCtCnvvoknLCAnKOKVr8Kw5Y+jwrAp4pWvKOKUtOKAlOKUtCcsICfvvIgjLV8tKeKUr+KUgeKUrycsICdfKDoz44CN4oigKV8nLCAnKOeskSknLCAnKOaxlyknLCAnKOazoyknLCAnKOiLpueskSknLCAnKMK044O7z4njg7tgKScsICco4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLsnLCAnKOKVr+KAteKWoeKAsinila/vuLXilLvilIHilLsnLCAnKCDCtM+BYCknLCAnKCDvvp/Pie++nyknLCAnKG/vvp/Pie++n28pJywgJyjjgIBez4leKScsICco772h4peV4oiA4peV772hKScsICcvKCDil5XigL/igL/il5UgKVxcXFwnLCAnzrXZqSggwrriiIDCuiAp27bQtycsICco77+jzrUoI++/oynimIbilbDila4o77+j4pa977+jLy8vKScsXHJcbiAgICAn77yI4pePwrQz772A77yJfuKZqicsICdfKDrQt+OAjeKIoClfJywgJ9GF0L7RgNC+0YjQviEnLCAn77y8KF5vXinvvI8nLCAnKOKAosyF54Gs4oCizIUgKScsICco776f0JTvvp8pJywgJ+OBvuOBo+OBn+OBj+OAgeWwj+WtpueUn+OBr+acgOmrmOOBoOOBnO+8ge+8gScsICfOtT3OtT3OtT3ilI8o44Kc44Ot44KcOynilJsnLFxyXG4gICAgJyjvvJvCsOOBu8KwKScsICfijp3iiafij53ij53iiabijqAnLCAn44O9KOKcv+++n+KWve++nynjg44nLCAn54SU44Gr6Iie44GE5LiK44GM44KL44K544OR44O844Kv44KI44CB6YKq5oKq44Gq55Ww5oCn5Lqk6Zqb44Gr44CB5aSp572w44KS5LiO44GI77yBJywgJ3zigKLPieKAomApJ107XHJcblxyXG5cclxuICBjb25zdCBNZW51TGlzdCA9IHtcclxuICAgIGl0ZW00OiB7IGRhdGF0eXBlOiAnaW1hZ2VMaW5rJywgdGl0bGU6ICflm7rmnIknLCBhZGRyOiBLRlNtaWxlVVJMLCByZWY6IEtGU21pbGVDb2RlIH0sXHJcbiAgICBpdGVtMTogeyBkYXRhdHlwZTogJ3BsYWluJywgdGl0bGU6ICflv6vmjbcnLCBhZGRyOiBkZWZhdWx0RnVuY3Rpb24sIHJlZjogZnVuY3Rpb25EZXNjcmlwdGlvbiB9LFxyXG4gICAgaXRlbTI6IHsgZGF0YXR5cGU6ICdwbGFpbicsIHRpdGxlOiAn6aKc5paH5a2XJywgYWRkcjogZW1vamkgfSxcclxuICAgIGl0ZW01OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0FDRlVOJywgYWRkcjogQUNTbWlsZTQgfSxcclxuICAgIGl0ZW02OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ+W4uOeUqCcsIGFkZHI6IE5ld0dhbWUgfSwgIC8vXHJcbiAgICBpdGVtNzogeyBkYXRhdHlwZTogJ2ltYWdlJywgdGl0bGU6ICdBa2FyaScsIGFkZHI6IEFrYXJpU21pbGUgfSwgLy8gQWthcmlcclxuICAgIGl0ZW04OiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0JpbGlCaWxpJywgYWRkcjogYmlsaUVNIH0sIC8vIELnq5lcclxuICAgIGl0ZW0zOiB7IGRhdGF0eXBlOiAnaW1hZ2UnLCB0aXRsZTogJ0xvdmVMaXZlJywgYWRkcjogTG92ZWxpdmVTbWFsbHRhcmdldFVSTCB9LFxyXG4gIH07XHJcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24qL1xyXG4gICAgLyogRXZlbnQg5Ye95pWwICovXHJcbiAgY29uc3QgRXZlbnRVdGlsID0ge1xyXG4gICAgZ2V0RXZlbnQoZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcclxuICAgIH0sXHJcbiAgICBnZXRUYXJnZXQoZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIHByZXZlbnREZWZhdWx0KGV2ZW50KSB7XHJcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xyXG4gICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xyXG4gICAgICBpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgIC8vIERPTTJcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChgb24ke3R5cGV9YCwgaGFuZGxlcik7ICAvLyBJRVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRbYG9uJHt0eXBlfWBdID0gaGFuZGxlcjsgIC8vIERPTSAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVIYW5kbGVyKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpIHtcclxuICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7IC8vIERPTTJcclxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudChgb24ke3R5cGV9YCwgaGFuZGxlcik7IC8vIElFXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFtgb24ke3R5cGV9YF0gPSBudWxsOyAvLyBET00gMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiovXHJcbiAgICAvKiBFbGVtZW50IOWHveaVsCovXHJcbiAgY29uc3QgRWxlVXRpbCA9IHtcclxuICAgIGNyZWF0ZShlbGUpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RJRChlbGUpIHtcclxuICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZSk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0KHNlbGVjdG9yKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIH0sXHJcbiAgfTtcclxuICAgIC8qIOaooeWdlyovXHJcbiAgY29uc3QgbW91c2VPdmVyQWN0aW9uID0ge1xyXG4gICAgc2hvd0ltZyhldmVudCkge1xyXG4gICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAvKiBpZiAoIWV2ZW50VGFyZ2V0LnNyYykge1xyXG4gICAgICAgIHJldHVybiAndW5kZWZpbmVkJztcclxuICAgICAgfSovXHJcbiAgICAgIGNvbnN0IGxhcmdlVmlld0NvbnRhaW5lciA9IEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpO1xyXG4gICAgICBjb25zdCBbc2Nyb2xsVG9wVmFsdWUsIHNjcm9sbExlZnRWYWx1ZV0gPSBbZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdF07XHJcbiAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtldmVudFRhcmdldC5zcmN9IC8+YDtcclxuICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSArIHNjcm9sbFRvcFZhbHVlICsgMjB9cHhgO1xyXG4gICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFggKyBzY3JvbGxMZWZ0VmFsdWV9cHhgO1xyXG5cclxuICAgIH0sXHJcbiAgICBjbGVhckltZygpIHtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBhdHRhY2hBY3Rpb24gPSB7XHJcbiAgICBhdHRhY2hFbW90aW9uKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgbGV0IGFkZHJlc3NUYXJnZXQgPSAnJztcclxuICAgICAgbGV0IGVtb3Rpb25BZGRyZXNzID0gJyc7XHJcbiAgICAgIGlmIChldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpID09PSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50VGFyZ2V0LnNyYykge1xyXG4gICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LnNyYztcclxuICAgICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAnaW1hZ2UnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zaWduJyk7XHJcbiAgICAgICAgICBlbW90aW9uQWRkcmVzcyA9IGF0dGFjaEFjdGlvbi5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwgJ3BsYWluJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGluaycpO1xyXG4gICAgICAgIGVtb3Rpb25BZGRyZXNzID0gYXR0YWNoQWN0aW9uLmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCAncGxhaW4nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzZWxlY3RUZXh0QXJlYSA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpO1xyXG4gICAgICBjb25zdCBvdmFsdWUgPSBzZWxlY3RUZXh0QXJlYS52YWx1ZTtcclxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgLy8gY29uc3QgZW5kUG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uRW5kO1xyXG4gICAgICBzZWxlY3RUZXh0QXJlYS52YWx1ZSA9IGAke292YWx1ZS5zbGljZSgwLCBzdGFydFBvcyl9JHtlbW90aW9uQWRkcmVzc30ke292YWx1ZS5zbGljZShzdGFydFBvcyl9YDtcclxuICAgICAgICAgICAgICBcclxuICAgIH0sXHJcbiAgICBhZGRyZXNzUGFyc2UoYWRkU3RyLCBwYXR0ZXJuKSB7XHJcbiAgICAgIGxldCBzdHJpbmdSZXR1cm4gPSAnJztcclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdpbWFnZScpIHtcclxuICAgICAgICBzdHJpbmdSZXR1cm4gPSBgW2ltZ10ke2FkZFN0cn1bL2ltZ11gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXR0ZXJuID09PSAncGxhaW4nKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gZGVjb2RlVVJJKGFkZFN0cik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdHRlcm4gPT09ICdpbWFnZUxpbmsnKSB7XHJcbiAgICAgICAgc3RyaW5nUmV0dXJuID0gYWRkU3RyO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdHJpbmdSZXR1cm47XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcblxyXG4gIGNvbnN0IGNyZWF0ZUl0ZW1zID0ge1xyXG5cclxuICAgIGNyZWF0ZUltYWdlcyhrZXkpIHtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gRWxlVXRpbC5zZWxlY3RJRChgZWRkaWUzMiR7a2V5fWApO1xyXG4gICAgICBjb25zb2xlLmxvZyhNZW51TGlzdFtrZXldKTtcclxuICAgICAgY29uc3QgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgY29uc3QgaW1nTGVuZ3RoID0gaW1nTGlzdC5sZW5ndGg7XHJcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaW1nTGVuZ3RoOyBrICs9IDEpIHtcclxuICAgICAgICBjb25zdCBkaXZFbGVtZW50ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gJ2NsaWNrSXRlbSc7XHJcbiAgICAgICAgY29uc3QgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICBpbWdJdGVtLnNyYyA9IGltZ0xpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAnRW1zJztcclxuICAgICAgICBpbWdJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICBpbWdJdGVtLm9ubW91c2VvdmVyID0gbW91c2VPdmVyQWN0aW9uLnNob3dJbWc7XHJcbiAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3V0ID0gbW91c2VPdmVyQWN0aW9uLmNsZWFySW1nO1xyXG5cclxuICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlUGxhaW5UZXh0KGtleSkge1xyXG4gICAgICBcclxuICAgICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBFbGVVdGlsLnNlbGVjdElEKGBlZGRpZTMyJHtrZXl9YCk7XHJcbiAgICAgIG91dGVyQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBjb25zdCB0eHRMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCB0eHRMZW5ndGggPSB0eHRMaXN0Lmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0eHRMZW5ndGg7IGsgKz0gMSkge1xyXG4gICAgICBcdGNvbnNvbGUubG9nKHR4dExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdHh0SXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdhJyk7XHJcbiAgICAgICAgdHh0SXRlbS5jbGFzc05hbWUgPSAndHh0QnRuRW1vdGlvbic7XHJcbiAgICAgICAgdHh0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2lnbicsIGAke2VuY29kZVVSSSh0eHRMaXN0W2tdKX1gKVxyXG4gICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYCR7dHh0TGlzdFtrXX1gO1xyXG4gICAgICAgIGlmIChNZW51TGlzdFtrZXldLnJlZikge1xyXG4gICAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgJHtNZW51TGlzdFtrZXldLnJlZltrXX1gO1xyXG4gICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0eHRJdGVtLm9uY2xpY2sgPSBhdHRhY2hBY3Rpb24uYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0eHRJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUltYWdlTGluayhrZXkpIHtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gRWxlVXRpbC5zZWxlY3RJRChgZWRkaWUzMiR7a2V5fWApO1xyXG4gICAgICBjb25zdCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICBjb25zdCByZWZMaXN0ID0gTWVudUxpc3Rba2V5XS5yZWY7XHJcbiAgICAgIGNvbnN0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGltZ0xlbmd0aDsgayArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICBpbWdJdGVtLmRhdGFzZXQubGluayA9IHJlZkxpc3Rba107XHJcbiAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgIGltZ0l0ZW0uY2xhc3NOYW1lID0gJ0Vtcyc7XHJcbiAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gYXR0YWNoQWN0aW9uLmF0dGFjaEVtb3Rpb247XHJcbiAgICAgICAgaW1nSXRlbS5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7JztcclxuICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIGNvbnN0IGNsZWFyTWVudSA9IHtcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICBjb25zdCB0b2dnbGVXaW5kb3cgPSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKTtcclxuICAgICAgdG9nZ2xlV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGNvbnN0IHRvZ1dpbkNoaWxkcmVuID0gdG9nZ2xlV2luZG93LmNoaWxkTm9kZXM7XHJcbiAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSB0b2dXaW5DaGlsZHJlbi5sZW5ndGg7IGogPCBsZW47IGogKz0gMSkge1xyXG4gICAgICAgIHRvZ1dpbkNoaWxkcmVuW2pdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCBleHBhbmRNZW51ID0ge1xyXG4gICAgaW5pdChldmVudCkge1xyXG4gICAgICBjbGVhck1lbnUuY2xlYXIoKTtcclxuICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLndpZHRoID0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJykuc3R5bGUud2lkdGg7XHJcbiAgICAgIGNvbnN0IGRhdGFUeXBlID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJldHlwZScpO1xyXG4gICAgICBjb25zdCBkYXRhS2V5ID0gZXZlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWtpZCcpO1xyXG4gICAgICBpZiAoRWxlVXRpbC5zZWxlY3QoYCNlZGRpZTMyJHtkYXRhS2V5fWApKSB7XHJcbiAgICAgICAgRWxlVXRpbC5zZWxlY3QoYCNlZGRpZTMyJHtkYXRhS2V5fWApLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGlmIChkYXRhS2V5ID09PSAnaXRlbTEnKSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICAgICAgZWxzZSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhVHlwZSA9PT0gJ3BsYWluJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZVBsYWluVGV4dChkYXRhS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ2ltYWdlJykge1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlcyhkYXRhS2V5KTtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gJ2ltYWdlTGluaycpIHtcclxuICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZUxpbmsoZGF0YUtleSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBjcmVhdGVNZW51ID0ge1xyXG4gICAgbWFpbigpIHtcclxuICAgICAgICAgICAgLyogbWFpbiBtZW51Ki9cclxuICAgICAgY29uc3QgbWFpbk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgIG1haW5NZW51LmlubmVySFRNTCA9IGA8c3BhbiBpZD0nbGFyZ2VWaWV3Jz48L3NwYW4+YDtcclxuICAgICAgbWFpbk1lbnUuaWQgPSAnZW1vdGlvbjAwMDAnO1xyXG4gICAgICBjb25zdCBNZW51TGVuZ3RoID0gT2JqZWN0LmtleXMoTWVudUxpc3QpLmxlbmd0aDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNZW51TGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBjb25zdCBNZW51S2V5ID0gT2JqZWN0LmtleXMoTWVudUxpc3QpW2ldO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUaXRsZSA9IE1lbnVMaXN0W01lbnVLZXldLnRpdGxlO1xyXG4gICAgICAgIGNvbnN0IE1lbnVUeXBlID0gTWVudUxpc3RbTWVudUtleV0uZGF0YXR5cGU7XHJcbiAgICAgICAgLy8gaWYgKCFNZW51VHlwZSB8fCAhTWVudVRpdGxlKSBjb25zb2xlLmxvZyhgZGF0YSBlcnJvcjogICR7TWVudUtleX1gKTtcclxuICAgICAgICBjb25zdCB0ZXN0TWVudSA9IGNyZWF0ZU1lbnUuc3VicyhNZW51VGl0bGUsIGV4cGFuZE1lbnUuaW5pdCwgTWVudUtleSwgTWVudVR5cGUpO1xyXG4gICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKHRlc3RNZW51KTtcclxuICAgICAgfVxyXG4gICAgICAgICAgICAvKiBjbG9zZSBidXR0b24qL1xyXG4gICAgICBjb25zdCBjbG9zZUJ0biA9IEVsZVV0aWwuY3JlYXRlKCdhJyk7XHJcbiAgICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICd4JztcclxuICAgICAgY2xvc2VCdG4uY2xhc3NOYW1lID0gJ3N1Yk1lbnUnO1xyXG4gICAgICBjbG9zZUJ0bi5pZCA9ICdjbG9zZUVNJztcclxuICAgICAgY2xvc2VCdG4ub25jbGljayA9IGNsZWFyTWVudS5jbGVhcjtcclxuICAgICAgY2xvc2VCdG4uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcic7XHJcbiAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICAgICAgLyogZHJvcGRvd24gYm94Ki9cclxuICAgICAgY29uc3QgaXRlbVdpbmRvdyA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgaXRlbVdpbmRvdy5pZCA9ICd0b2dnbGVXaW5kb3cnO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChpdGVtV2luZG93KTtcclxuICAgICAgICBmb3IgKGxldCB3dz0wOyB3dyA8IE1lbnVMZW5ndGg7IHd3ICs9IDEgKXtcclxuICAgICAgICAgICAgbGV0IGl0ZW1FZGRpZTMyID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgICAgICBsZXQgTWVudUtleSA9IE9iamVjdC5rZXlzKE1lbnVMaXN0KVt3d107XHJcbiAgICAgICAgICAgIGl0ZW1FZGRpZTMyLmlkID0gYGVkZGllMzIke01lbnVLZXl9YDtcclxuICAgICAgICAgICAgaXRlbUVkZGllMzIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaXRlbVdpbmRvdy5hcHBlbmRDaGlsZChpdGVtRWRkaWUzMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAvKiBjc3Mgc3R5bGUqL1xyXG4gICAgICBjb25zdCBzdHlsZUl0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnc3R5bGUnKTtcclxuICAgICAgc3R5bGVJdGVtLmlubmVySFRNTCA9IGAjZW1vdGlvbjAwMDAgeyBmb250OiAxMnB4LzI4cHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnOyBcXFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3e3Bvc2l0aW9uOmFic29sdXRlOyBiYWNrZ3JvdW5kOiAjZmZmOyB6LWluZGV4OjUwMDA7IG9wYWNpdHk6IDAuODt9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3IGltZ3t3aWR0aDogMjAwcHg7IGhlaWdodDoyMDBweDt9IFxcXHJcbiAgICAgICAgICAgICAgICAjdG9nZ2xlV2luZG93IHtoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAzcHggM3B4OyBvdmVyZmxvdy14OiBhdXRvOyBtYXJnaW4tdG9wOjRweDsgXFxcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NHB4OyBib3JkZXI6MXB4IHNvbGlkICNmZjQzNTE7IGRpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTsgei1pbmRleDoyMDA7IH1cXFxyXG4gICAgICAgICAgICAgICAgLmNsaWNrSXRlbXtkaXNwbGF5OmlubGluZS1ibG9jazsgei1pbmRleDozMDA7fVxyXG4gICAgICAgICAgICAgICAgYS5zdWJNZW51e2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyOyBcXFxyXG4gICAgICAgICAgICAgICAgXHR0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzogMCA4cHg7IFxcXHJcbiAgICAgICAgICAgICAgICBmb250OiAxMnB4LzMwcHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnO1xcXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MzUxO2JvcmRlci1jb2xvcjogI2ZmNDM1MTtjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICAuRW1ze2N1cnNvcjpwb2ludGVyO3dpZHRoOiA1MHB4O2hlaWdodDogNTBweDtkaXNwbGF5OmlubGluZS1ibG9jazsgIHotaW5kZXg6NDAwO30gXFxcclxuICAgICAgICAgICAgICAgIGEudHh0QnRuRW1vdGlvbntkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHRleHQtZGVjb3JhdGlvbjpub25lOyBcXCBcclxuICAgICAgICAgICAgICAgIFx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgXHRwYWRkaW5nOjAgOHB4OyBmb250OiAxMnB4LzI0cHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnfSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9uOmhvdmVye2JhY2tncm91bmQ6I2ZmNzY4MDsgY29sb3I6I2ZmZjsgfSBcXFxyXG4gICAgICAgICAgICAgICAgYS5zdWJNZW51OmhvdmVyLCBhLnN1Yk1lbnU6Zm9jdXMsIGEuc3ViTWVudTp2aXNpdGVke2JhY2tncm91bmQtY29sb3I6ICNmZjc2ODA7Ym9yZGVyLWNvbG9yOiAjZmY3NjgwO2NvbG9yOiAjZmZmO31gO1xyXG4gICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChzdHlsZUl0ZW0pO1xyXG4gICAgICByZXR1cm4gbWFpbk1lbnU7XHJcbiAgICB9LFxyXG4gICAgc3Vicyh0aXRsZSwgZnVuYywgc3ViaWQsIHN1YnR5cGUpIHtcclxuICAgICAgY29uc3Qgc3ViTWVudSA9IEVsZVV0aWwuY3JlYXRlKCdhJyk7XHJcbiAgICAgIHN1Yk1lbnUuaWQgPSBzdWJpZDtcclxuICAgICAgc3ViTWVudS5jbGFzc05hbWUgPSAnc3ViTWVudSc7XHJcbiAgICAgIHN1Yk1lbnUuc2V0QXR0cmlidXRlKCdkYXRhLWtpZCcsIHN1YmlkKTtcclxuICAgICAgc3ViTWVudS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmV0eXBlJywgc3VidHlwZSk7XHJcbiAgICAgIHN1Yk1lbnUub25jbGljayA9IGZ1bmM7XHJcbiAgICAgIHN1Yk1lbnUudGl0bGUgPSB0aXRsZTtcclxuICAgICAgc3ViTWVudS5pbm5lckhUTUwgPSBgJHt0aXRsZX1gO1xyXG4gICAgICByZXR1cm4gc3ViTWVudTtcclxuICAgIH0sXHJcblxyXG4gIH07XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAhPSBudWxsKSB7XHJcbiAgICAvLyBsZXQgdGVzdGFyZWFFbGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgdGVzdFNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGVzdFNldCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0Lml0ZW0oMCkpO1xyXG4gICAgY29uc3QgbWFpbkVtb3Rpb25NZW51ID0gY3JlYXRlTWVudS5tYWluKCk7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250ZW50JykgIT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250ZW50Jykuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcclxuICAgIH1cclxuICAgIGZvciAobGV0IHcgPSAwOyB3IDwgdGVzdFNldC5sZW5ndGg7IHcgKz0gMSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0U2V0Lml0ZW0odykpO1xyXG4gICAgICBjb25zdCBlbGVtZW50VGVzdCA9IHRlc3RTZXQuaXRlbSh3KTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobWFpbkVtb3Rpb25NZW51KTtcclxuICAgICAgZWxlbWVudFRlc3QucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFpbkVtb3Rpb25NZW51LCBlbGVtZW50VGVzdCk7XHJcbiAgICB9XHJcbiAgICAvLyBOb2RlTGlzdC5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgLy8gSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBBcnJheS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIC8vIGNvbnN0IGVsZW1lbnRTZXQgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0ZXh0YXJlYScpKTtcclxuICAgICAgICAvKiDlhbzlrrnmgKfpl67popggQnkg5Za15ouJ5biD5LiBMjAxNy4wMS4zMDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWXmlrnms5Xov5Tlm57nmoTmmK9IVE1MQ29sbGVjdGlvblxyXG7lnKjovoPmlrDniYjnmoRGaXJlZm945Lit77yMSFRNTENvbGxlY3Rpb27mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOaJgOS7peWPr+S7peeUqGZvci4uLm9m5b6q546vXHJcbuiAjOWcqENocm9tZeS4re+8iOaIkeWPquWcqOS9v+eUqENocm9taXVtIDUw5YaF5qC455qE5rWP6KeI5Zmo5LiL5rWL6K+V6L+H77yJ77yMSFRNTENvbGxlY3Rpb27kuI3mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOS4jeWPr+eUqOebtOaOpeS9v+eUqGZvci4uLm9m5b6q546vXHJcbuaJgOS7peW7uuiurualvOS4u+i/mOaYr+eUqOiAgeaWueazleWQpyovXHJcbiAgICAgICAgLy8gU29sdXRpb24gc3RhY2tmbG93OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNzU0MzE1L2ZvcmVhY2gtbG9vcC1mb3ItaHRtbGNvbGxlY3Rpb24tZWxlbWVudHNcclxuICAgICAgICAvKiDov5jmnIlBcnJheS5mcm9t5pa55rOV56Gu5a6e6IO96Kej5YazQ2hyb21l5LiLSFRNTENvbGxlY3Rpb27kuI3og73nlKhmb3IuLi5vZuW+queOr+eahOmXrumimO+8jOS4jei/h0Nocm9tZSA0NeaJjeW8gOWni+aUr+aMgUFycmF5LmZyb23mlrnms5Vcclxu6Iul5oOz5YW85a655Lul5YmN55qE5rWP6KeI5Zmo55qE6K+d77yM5Y+v5Lul55SoZm9yLi4uaW7lvqrnjq/vvIzmiJbogIXliqDkuKpiYWJlbC1wb2x5ZmlsbOiEmuacrFxyXG7lvZPnhLbkvaDkuI3mg7Plhbzlrrnkvb/nlKhDaHJvbWl1bSA0NeS7peWJjeWGheaguOeahOa1j+iniOWZqOS5n+ayoeWkmuWkp+mXrumimO+8jOeOsOWcqOWbveWGheW4guWcuuS7vemineacgOWkmkNocm9taXVt5aWX5aOz5rWP6KeI5ZmoLS0zNjDlronlhajmtY/op4jlmajnmoTmnIDmlrDmraPlvI/niYjkuZ/mmK/ph4fnlKhDaHJvbWl1bSA0NeWGheaguOS6hiovXHJcbiAgICAvLyBjb25zdCBlbGVtZW50U2V0TGVuZ3RoID0gZWxlbWVudFNldC5sZW5ndGg7XHJcbiAgICAvKiBpZiAoZWxlbWVudFNldExlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHRleHRhcmVhJyk7XHJcbiAgICB9ICovXHJcbiAgICAvLyB0ZXN0YXJlYUVsZVNldC5hZGQoZWxlbWVudFNldCk7XHJcbiAgICAvKiBjb25zdCB1c2VyT3B0aW9uID0ge1xyXG4gICAgICB1c2VyV2luZG93SGVpZ2h0OiAxMjAsXHJcbiAgICAgIHVzZXJTZWxlY3RUZXh0QXJlYTogJ2xhc3QnLFxyXG4gICAgfTsgKi9cclxuXHJcbiAgICAvKiBlc2xpbnQgbm8tcmVzdHJpY3RlZC1zeW50YXg6IFsxLCBcIkZvck9mU3RhdGVtZW50XCJdICovXHJcbiAgICAvKiBmb3IgKGNvbnN0IGVsZW1lbnRTaW5nbGUgb2YgZWxlbWVudFNldCkge1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFNpbmdsZSk7XHJcbiAgICAgIGVsZW1lbnRTaW5nbGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFpbkVtb3Rpb25NZW51LCBlbGVtZW50U2luZ2xlKTtcclxuICAgIH0gKi9cclxuICB9XHJcbn07XHJcblxyXG5pZih0eXBlb2YgaW1ncGF0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGxldCBpbWdwYXRoID0gJzE0ODU0MTI4MTAnO1xyXG59XHJcbmZ1bihpbWdwYXRoKTtcclxuIl19
