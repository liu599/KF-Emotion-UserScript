/* eslint linebreak-style: ["error", "windows"] */

/* eslint-disable strict */

'use strict';


const fun = (imagepath = '1485412810') => {
  const versionNo = '4.5.3';
    /* Address function
     * startNumber: number, indicating the start number;
     * lengthArray: number, indicating the addrArray length;
     * strPrefix: string, address Prefix;
     * strSuffix: string, address Suffix;
     * leadingZero: boolen, true for leading zero in number;
     * addrArray: array, address array, default for empty;
     */
    // 创建表情包数组的函数
  function emAddrArrayHandler(startNumber, lengthArray, strPrefix,
    strSuffix, addrArray = [], leadingZero = false) {
    let addrTemp = '';
    let addrNumber = 0;
    for (let j = startNumber; j < lengthArray; j += 1) {
      addrNumber = j;
      if (leadingZero) {
        addrNumber = (j > 9) ? (j) : (`0${j}`);
      }
      addrTemp = `${strPrefix}${addrNumber}${strSuffix}`;
      addrArray.push(addrTemp);
    }
    return addrArray;
  }
    /* 表情包地址数据 */


    // B站
  const biliEM = emAddrArrayHandler(1, 17, 'http://o6smnd6uw.bkt.clouddn.com/xds/2233 (',
                                    ').gif');
  emAddrArrayHandler(1, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds/', '.png', biliEM);
  emAddrArrayHandler(0, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds/bilibiliTV (',
                       ').png', biliEM);
    // tora酱
  emAddrArrayHandler(1, 14, 'http://o6smnd6uw.bkt.clouddn.com/xds2/0',
                       '.jpg', biliEM, true);
    // 阿卡林 from 摇曳百合
  const AkariSmile = emAddrArrayHandler(1, 21, 'http://o6smnd6uw.bkt.clouddn.com/xds2/akari', '.gif');
  emAddrArrayHandler(1, 72, 'http://o6smnd6uw.bkt.clouddn.com/xds3/akari', '.png', AkariSmile);
    // New Game
  const NewGame = emAddrArrayHandler(2, 64, 'http://o6smnd6uw.bkt.clouddn.com/xds4/0xx', '.png');
  // princess connect
  emAddrArrayHandler(0, 20, 'http://o6smnd6uw.bkt.clouddn.com/pcrn/sticker (', ').png', NewGame);
    // ACFUN
  const ACSmile4 = emAddrArrayHandler(1, 51, 'http://o6smnd6uw.bkt.clouddn.com/xds6/', '.png');
  emAddrArrayHandler(1, 40, 'http://o6smnd6uw.bkt.clouddn.com/xds5/', '.gif', ACSmile4, true);
    // KF 内置
  const KFSmileURL = emAddrArrayHandler(1, 49, `${typeof imagepath !== 'undefined' ? imagepath : ''}/post/smile/em/em`,
                                        '.gif', [], true);
  const KFSmileCode = emAddrArrayHandler(10, 58, '[s:',
                                         ']');
    // lovelive专用小
  const LoveliveSmalltargetURL = emAddrArrayHandler(1, 41, 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive2nd',
                                                    '.png');
  emAddrArrayHandler(1, 41, 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive',
                       '.png', LoveliveSmalltargetURL);
    // kf快捷代码(需要改写解构赋值)
  const functionDescription = ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体',
    '下划线', '斜体', '水平线', '背景色', '插入图片'];
  const defaultFunction = ['[sell=100][/sell]', '[quote][/quote]', '[hide=100][/hide]', '[code][/code]',
    '[strike][/strike]', '[fly][/fly]', '[color=#00FF00][/color]', '[b][/b]', '[u][/u]', '[i][/i]',
    '[hr]', '[backcolor=][/backcolor]', '[img][/img]'];
    // 颜文字
  const emoji = ['(●・ 8 ・●)',
    '╰(๑◕ ▽ ◕๑)╯', '(ゝω・)', '〜♪♪', '(ﾟДﾟ≡ﾟДﾟ)', '(＾o＾)ﾉ', '(|||ﾟДﾟ)', '(`ε´ )', '(╬ﾟдﾟ)', '(|||ﾟдﾟ)', '(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)',
    '(°∀°)ﾉ', '(￣3￣)', '╮(￣▽￣)╭', '( ´_ゝ｀)', 'のヮの', '(ﾉ؂< ๑）诶嘿☆～', '(&lt;_&lt;)', '(&gt;_&gt;)', '(;¬_¬)', '(▔□▔)/', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', 'Σ( ￣□￣||)',
    '(´；ω；`)', '（/TДT)/', '(^・ω・^ )', '(｡･ω･｡)', '(●￣(ｴ)￣●)', 'ε=ε=(ノ≧∇≦)ノ', '(´･_･`)', '(-_-#)', '（￣へ￣）', '(￣ε(#￣) Σ', 'ヽ(`Д´)ﾉ', '(╯°口°)╯(┴—┴', '（#-_-)┯━┯', '_(:3」∠)_', '(笑)', '(汗)', '(泣)', '(苦笑)', '(´・ω・`)', '(╯°□°）╯︵ ┻━┻', '(╯‵□′)╯︵┻━┻', '( ´ρ`)', '( ﾟωﾟ)', '(oﾟωﾟo)', '(　^ω^)', '(｡◕∀◕｡)', '/( ◕‿‿◕ )\\', 'ε٩( º∀º )۶з', '(￣ε(#￣)☆╰╮(￣▽￣///)',
    '（●´3｀）~♪', '_(:з」∠)_', 'хорошо!', '＼(^o^)／', '(•̅灬•̅ )', '(ﾟДﾟ)', 'まったく、小学生は最高だぜ！！', 'ε=ε=ε=┏(゜ロ゜;)┛',
    '(；°ほ°)', '⎝≧⏝⏝≦⎠', 'ヽ(✿ﾟ▽ﾟ)ノ', '焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！', '|•ω•`)'];


  const MenuList = {
    item4: { datatype: 'imageLink', title: '固有', addr: KFSmileURL, ref: KFSmileCode },
    item1: { datatype: 'plain', title: '快捷', addr: defaultFunction, ref: functionDescription },
    item2: { datatype: 'plain', title: '颜文字', addr: emoji },
    item5: { datatype: 'image', title: 'ACFUN', addr: ACSmile4 },
    item6: { datatype: 'image', title: '常用', addr: NewGame },  //
    item7: { datatype: 'image', title: 'Akari', addr: AkariSmile }, // Akari
    item8: { datatype: 'image', title: 'BiliBili', addr: biliEM }, // B站
    item3: { datatype: 'image', title: 'LoveLive', addr: LoveliveSmalltargetURL },
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
        element.addEventListener(type, handler, false);  // DOM2
      } else if (element.attachEvent) {
        element.attachEvent(`on${type}`, handler);  // IE
      } else {
        element[`on${type}`] = handler;  // DOM 0
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
    },
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
    },
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
    },
  };
  const attachAction = {
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
      },
    attachEmotion(event) {
      const eventTarget = EventUtil.getTarget(event);
      let addressTarget = '';
      let emotionAddress = '';
      if (eventTarget.getAttribute('data-link') === null) {
        if (eventTarget.src) {
          addressTarget = eventTarget.src;
          emotionAddress = addressParse(addressTarget, 'image');
        } else {
          addressTarget = eventTarget.getAttribute('data-sign');
          emotionAddress = addressParse(addressTarget, 'plain');
        }
      } else {
        addressTarget = eventTarget.getAttribute('data-link');
        emotionAddress = addressParse(addressTarget, 'plain');
      }
      const selectTextArea = EleUtil.select('textarea');
      const ovalue = selectTextArea.value;
      const startPos = selectTextArea.selectionStart;
      selectTextArea.value = `${ovalue.slice(0, startPos)}${emotionAddress}${ovalue.slice(startPos)}`;
              
    },

  };
  

  const createItems = {

    createImages(key) {
      
      const outerContainer = EleUtil.selectID(`eddie32${key}`);
      const imgList = MenuList[key].addr;
      const imgLength = imgList.length;
      for (let k = 0; k < imgLength; k += 1) {
        const divElement = EleUtil.create('div');
        divElement.className = 'clickItem';
        const imgItem = EleUtil.create('img');
        imgItem.src = imgList[k];
        imgItem.className = 'Ems';
        imgItem.onclick = attachAction.attachEmotion;
        //imgItem.onmouseover = mouseOverAction.showImg;
        //imgItem.onmouseout = mouseOverAction.clearImg;

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
        const txtItem = EleUtil.create('a');
        txtItem.className = 'txtBtnEmotion';
        txtItem.setAttribute('data-sign', `${encodeURI(txtList[k])}`)
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
    },
  };
  const clearMenu = {
    clear() {
      const toggleWindow = EleUtil.selectID('toggleWindow');
      toggleWindow.style.display = 'none';
      const togWinChildren = toggleWindow.childNodes;
      for (let j = 0, len = togWinChildren.length; j < len; j += 1) {
        togWinChildren[j].style.display = 'none';
      }
    },
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
        if (dataKey === 'item1') EleUtil.selectID('toggleWindow').style.height = '50px';
        else EleUtil.selectID('toggleWindow').style.height = '100px';
      }
      if (dataType === 'plain') {
        createItems.createPlainText(dataKey);
      } else if (dataType === 'image') {
        createItems.createImages(dataKey);
      } else if (dataType === 'imageLink') {
        createItems.createImageLink(dataKey);
      }
    },

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
        for (let ww=0; ww < MenuLength; ww += 1 ){
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
    },

  };

  if (typeof window !== 'undefined' && document != null) {
    const testSet = document.getElementsByTagName('textarea');
    const mainEmotionMenu = createMenu.main();
    if (document.getElementById('editor-content') !== null) {
      document.getElementById('editor-content').style.position = 'static';
    }
    for (let w = 0; w < testSet.length; w += 1) {
      const elementTest = testSet.item(w);
      elementTest.parentNode.insertBefore(mainEmotionMenu, elementTest);
    }
  }
};

if(typeof imgpath === 'undefined') {
    let imgpath = '1485412810';
}
fun(imgpath);
