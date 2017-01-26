(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var fun = function fun() {
    var imgpath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


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

        var addrTemp = '',
            addrNumber = 0;
        for (var j = startNumber; j < lengthArray; j++) {
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
    emAddrArrayHandler(0, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/bilibiliTV (', ').png', biliEM);
    // tora酱
    emAddrArrayHandler(1, 14, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/tora/0', '.jpg', biliEM, true);
    //阿卡林 from 摇曳百合
    var AkariSmile = emAddrArrayHandler(1, 21, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Dynamic/akari', '.gif');
    emAddrArrayHandler(1, 72, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/akari/akari', '.png', AkariSmile);
    // New Game kf扩展
    var NewGame = emAddrArrayHandler(2, 64, 'http://nekohand.moe/spsmile/01Sora/0xx', '.png');
    emAddrArrayHandler(1, 20, 'http://ss.nekohand.moe/Asource/EmotionPic/KFEM (', ').gif', NewGame);
    // ACFUN
    var ACSmile4 = emAddrArrayHandler(1, 51, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/New/', '.png');
    emAddrArrayHandler(1, 40, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/Niming/', '.gif', ACSmile4, true);
    // KF 内置
    var KFSmileURL = emAddrArrayHandler(1, 49, (typeof imgpath != 'undefined' ? imgpath : '') + '/post/smile/em/em', '.gif', [], true);
    var KFSmileCode = emAddrArrayHandler(10, 58, '[s:', ']');
    // lovelive专用小
    var LoveliveSmalltargetURL = emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Small/Lovelive2nd', '.png');
    emAddrArrayHandler(1, 41, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Small/Lovelive', '.png', LoveliveSmalltargetURL);
    // kf快捷代码(需要改写解构赋值)
    var functionDescription = ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体', '下划线', '斜体', '水平线', '背景色', '插入图片'];
    var defaultFunction = ['[sell=100][/sell]', '[quote][/quote]', '[hide=100][/hide]', '[code][/code]', '[strike][/strike]', '[fly][/fly]', '[color=#00FF00][/color]', '[b][/b]', '[u][/u]', '[i][/i]', '[hr]', '[backcolor=][/backcolor]', '[img][/img]'];
    // 颜文字
    var emoji = ['(●・ 8 ・●)', '╰(๑◕ ▽ ◕๑)╯', '(ゝω・)', '〜♪♪', '(ﾟДﾟ≡ﾟДﾟ)', '(＾o＾)ﾉ', '(|||ﾟДﾟ)', '(`ε´ )', '(╬ﾟдﾟ)', '(|||ﾟдﾟ)', '(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)', '╮(￣▽￣)╭', '( ´_ゝ｀)', 'のヮの', '(ﾉ؂< ๑）诶嘿☆～', '(&lt;_&lt;)', '(&gt;_&gt;)', '(;¬_¬)', '(▔□▔)/', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', 'Σ( ￣□￣||)', '(´；ω；`)', '（/TДT)/', '(^・ω・^ )', '(｡･ω･｡)', '(●￣(ｴ)￣●)', 'ε=ε=(ノ≧∇≦)ノ', '(´･_･`)', '(-_-#)', '（￣へ￣）', '(￣ε(#￣) Σ', 'ヽ(`Д´)ﾉ', '(╯°口°)╯(┴—┴', '（#-_-)┯━┯', '_(:3」∠)_', '(笑)', '(汗)', '(泣)', '(苦笑)', '(´・ω・`)', '(╯°□°）╯︵ ┻━┻', '(╯‵□′)╯︵┻━┻', '( ´ρ`)', '( ﾟωﾟ)', '(oﾟωﾟo)', '(　^ω^)', '(｡◕∀◕｡)', '/( ◕‿‿◕ )\\', 'ε٩( º∀º )۶з', '(￣ε(#￣)☆╰╮(￣▽￣///)', '（●´3｀）~♪', '_(:з」∠)_', 'хорошо!', '＼(^o^)／', '(•̅灬•̅ )', '(ﾟДﾟ)', 'まったく、小学生は最高だぜ！！', 'ε=ε=ε=┏(゜ロ゜;)┛', '(；°ほ°)', '	⎝≧⏝⏝≦⎠', 'ヽ(✿ﾟ▽ﾟ)ノ', '焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！', '|•ω•`)'];

    var MenuList = {
        item4: { datatype: 'imageLink', title: '固有', addr: KFSmileURL, ref: KFSmileCode },
        item1: { datatype: 'plain', title: '快捷', addr: defaultFunction, ref: functionDescription },
        item2: { datatype: 'plain', title: '颜文字', addr: emoji },
        item5: { datatype: 'image', title: 'ACFUN', addr: ACSmile4 },
        item6: { datatype: 'image', title: '常用', addr: NewGame }, //
        item7: { datatype: 'image', title: 'Akari', addr: AkariSmile }, //Akari
        item8: { datatype: 'image', title: 'BiliBili', addr: biliEM }, //B站
        item3: { datatype: 'image', title: 'LoveLive', addr: LoveliveSmalltargetURL }
    };

    /* Event 函数 */
    var EventUtil = {
        getEvent: function getEvent(event) {
            return event ? event : window.event;
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
                element.addEventListener(type, handler, false); //DOM2
            } else if (element.attachEvent) {
                element.attachEvent('on' + type, handler); //IE
            } else {
                element['on' + type] = handler; //DOM 0
            }
        },
        removeHandler: function removeHandler(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false); //DOM2
            } else if (element.detachEvent) {
                element.detachEvent('on' + type, handler); //IE
            } else {
                element['on' + type] = null; //DOM 0
            }
        }
    };
    /*Element 函数*/
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

    /*Cookie处理*/
    var CookieUtil = {
        getCookies: function getCookies() {
            var CookieObj = {};
            var thisCookie = document.cookie;
            if (thisCookie === '') return CookieObj;
            var listObj = thisCookie.split(';');
            for (var i = 0, len = listObj.length; i < len; i++) {
                var w = listObj[i].split('=');
                var name = decodeURIComponent(w[0].replace(/^\s+|\s+$/g, ''));
                var value = decodeURIComponent(w[1]);
                CookieObj[name] = value;
            }
            return CookieObj;
            //console.log(thisCookie);
        },
        setCookies: function setCookies(name, value, path, iDay, domain, secure) {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + iDay);
            var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            if (iDay) {
                cookie + ';expires=' + oDate;
            }
            if (path) {
                cookie + ';path=' + path;
            }
            if (domain) {
                cookie + ';domain=' + domain;
            }
            if (secure) {
                cookie + ';secure=' + secure;
            }
            document.cookie = cookie;
        }
    };
    /*模块*/
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
            //console.log(MenuList[key]);
            var imgList = MenuList[key].addr;
            var imgLength = imgList.length;
            for (var k = 0; k < imgLength; k++) {
                var divElement = EleUtil.create('div');
                divElement.className = 'clickItem';
                var imgItem = EleUtil.create('img');
                imgItem.src = imgList[k];
                imgItem.className = 'Ems';
                imgItem.onclick = expandMenu.attachEmotion;
                imgItem.onmouseover = mouseOverAction.showImg;
                imgItem.onmouseout = mouseOverAction.clearImg;
                //imgItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 75px;height: 75px;';
                divElement.appendChild(imgItem);
                outerContainer.appendChild(divElement);
            }
        },
        createPlainText: function createPlainText(key) {
            var outerContainer = createItems.createContainer(key);
            var txtList = MenuList[key].addr;
            var txtLength = txtList.length;
            for (var k = 0; k < txtLength; k++) {
                var txtItem = EleUtil.create('span');
                txtItem.style.cssText = 'cursor:pointer; margin: 10px 10px;';
                txtItem.innerHTML = '<a data-sign=' + encodeURI(txtList[k]) + ' class=\'txtBtnEmotion\'>' + txtList[k] + '</a>';
                if (MenuList[key].ref) {
                    txtItem.innerHTML = '<a data-sign=' + encodeURI(txtList[k]) + ' class=\'txtBtnEmotion\'>' + MenuList[key].ref[k] + '</a>';
                    EleUtil.selectID('toggleWindow').style.height = '50px';
                }
                txtItem.onclick = expandMenu.attachEmotion;
                txtItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 50px;';
                outerContainer.appendChild(txtItem);
            }
        },
        createImageLink: function createImageLink(key) {
            var outerContainer = createItems.createContainer(key);
            var imgList = MenuList[key].addr;
            var refList = MenuList[key].ref;
            var imgLength = imgList.length;
            for (var k = 0; k < imgLength; k++) {
                var imgItem = EleUtil.create('img');
                imgItem.dataset.link = refList[k];
                imgItem.src = imgList[k];
                imgItem.className = 'Ems';
                imgItem.onclick = expandMenu.attachEmotion;
                imgItem.style.cssText = 'width: 50px !important;height: 50px !important;';
                outerContainer.appendChild(imgItem);
            }
        }
    };
    var mouseOverAction = {
        showImg: function showImg(event) {
            var eventTarget = EventUtil.getTarget(event);
            if (!eventTarget.src) {
                return null;
            }
            var largeViewContainer = EleUtil.selectID('largeView');
            var _ref = [document.body.scrollTop, document.body.scrollLeft],
                scrollTopValue = _ref[0],
                scrollLeftValue = _ref[1];

            largeViewContainer.innerHTML = '<img src=' + eventTarget.src + ' />';
            largeViewContainer.style.display = 'block';
            largeViewContainer.style.top = event.clientY + scrollTopValue + 20 + 'px';
            largeViewContainer.style.left = event.clientX + scrollLeftValue + 'px';
            //console.log([event.clientY,event.clientX]);
            //console.log([EleUtil.selectID('largeView').style.top,EleUtil.selectID('largeView').style.left]);
            //console.log([document.body.scrollTop,document.body.scrollLeft]);
        },
        clearImg: function clearImg(event) {
            EleUtil.selectID('largeView').style.display = 'none';
        }
    };
    var expandMenu = {
        init: function init(event) {
            createMenu.clear();
            var eventTarget = EventUtil.getTarget(event);
            EleUtil.selectID('toggleWindow').style.display = 'block';
            EleUtil.selectID('toggleWindow').style.width = EleUtil.select('textarea').style.width;
            var dataType = eventTarget.attributes[2].nodeValue;
            var dataKey = eventTarget.attributes[1].nodeValue;
            if (EleUtil.select('#eddie32' + dataKey)) {
                EleUtil.select('#eddie32' + dataKey).style.display = 'block';
                if (dataKey == 'item1') EleUtil.selectID('toggleWindow').style.height = '50px';else EleUtil.selectID('toggleWindow').style.height = '100px';
                return;
            }
            if (dataType == 'plain') {
                createItems.createPlainText(dataKey);
            } else if (dataType == 'image') {
                createItems.createImages(dataKey);
            } else if (dataType == 'imageLink') {
                createItems.createImageLink(dataKey);
            }
        },
        attachEmotion: function attachEmotion(event) {
            var eventTarget = EventUtil.getTarget(event);
            //console.log(eventTarget);

            var addressTarget = '',
                emotionAddress = '';
            if (eventTarget.attributes.length == 2) {
                if (eventTarget.src) {
                    addressTarget = eventTarget.src;
                    emotionAddress = expandMenu.addressParse(addressTarget, 'image');
                } else {
                    //console.log(eventTarget.attributes);
                    addressTarget = eventTarget.attributes[0].nodeValue;
                    emotionAddress = expandMenu.addressParse(addressTarget, 'plain');
                }
            } else {
                //console.log(eventTarget.attributes);
                addressTarget = eventTarget.attributes[0].nodeValue;
                emotionAddress = expandMenu.addressParse(addressTarget, 'plain');
            }
            var selectTextArea = EleUtil.select('textarea');
            var ovalue = selectTextArea.value;
            var startPos = selectTextArea.selectionStart;
            var endPos = selectTextArea.selectionEnd;
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
    var createMenu = {
        defaultID: 'emotion0000',
        main: function main() {
            /*main menu*/
            var mainMenu = EleUtil.create('div');
            mainMenu.innerHTML = '<span id=\'largeView\'></span><span class=\'subMenu\' title=\'\u4E3B\u83DC\u5355 version ' + versionNo + '\'><b>\u2468\u56E7\u2468</b></span>';
            mainMenu.id = createMenu.defaultID;
            var MenuLength = Object.keys(MenuList).length;
            for (var i = 0; i < MenuLength; i++) {
                var MenuKey = Object.keys(MenuList)[i];
                var MenuTitle = MenuList[MenuKey].title;
                var MenuType = MenuList[MenuKey].datatype;
                if (!MenuType || !MenuTitle) console.log('dataerror  ' + MenuKey);
                var testMenu = createMenu.subs(MenuTitle, expandMenu.init, MenuKey, MenuType);
                mainMenu.appendChild(testMenu);
            }
            /*close button*/
            var closeBtn = EleUtil.create('span');
            closeBtn.innerHTML = '[x]';
            closeBtn.className = 'subMenu';
            closeBtn.id = 'closeEM';
            closeBtn.onclick = createMenu.clear;
            closeBtn.style.cssText = 'cursor:pointer';
            mainMenu.appendChild(closeBtn);
            /*dropdown box*/
            var itemWindow = EleUtil.create('div');
            itemWindow.id = 'toggleWindow';
            mainMenu.appendChild(itemWindow);
            /*css style*/
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
        },
        clear: function clear() {
            var toggleWindow = EleUtil.selectID('toggleWindow');
            toggleWindow.style.display = 'none';
            var togWinChildren = toggleWindow.childNodes;
            for (var j = 0, len = togWinChildren.length; j < len; j++) {
                //console.log(togWinChildren[j]);
                togWinChildren[j].style.display = 'none';
            }
        }
    };

    if (typeof window !== 'undefined' && document != null) {
        //let testareaEleSet = new WeakSet();
        var elementSet = document.getElementsByTagName('textarea');
        var elementSetLength = elementSet.length;
        if (elementSetLength === 0) {
            console.log('There is no textarea');
        }
        //testareaEleSet.add(elementSet);
        var userOption = {
            userWindowHeight: 120,
            userSelectTextArea: 'last'
        };
        var mainEmotionMenu = createMenu.main();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = elementSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var elementSingle = _step.value;

                //console.log(elementSingle);
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
var imgpath = '1485412810';
fun(imgpath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFDQSxJQUFNLE1BQU0sU0FBTixHQUFNLEdBQWdCO0FBQUEsUUFBZixPQUFlLHVFQUFQLEVBQU87OztBQUV4QixRQUFNLFlBQVksT0FBbEI7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBLGFBQVMsa0JBQVQsQ0FBNEIsV0FBNUIsRUFBeUMsV0FBekMsRUFBc0QsU0FBdEQsRUFBaUUsU0FBakUsRUFBaUg7QUFBQSxZQUFwQyxTQUFvQyx1RUFBeEIsRUFBd0I7QUFBQSxZQUFwQixXQUFvQix1RUFBTixLQUFNOztBQUM3RyxZQUFJLFdBQVcsRUFBZjtBQUFBLFlBQW1CLGFBQWEsQ0FBaEM7QUFDQSxhQUFJLElBQUksSUFBRSxXQUFWLEVBQXNCLElBQUUsV0FBeEIsRUFBb0MsR0FBcEMsRUFBd0M7QUFDcEMseUJBQWEsQ0FBYjtBQUNBLGdCQUFHLFdBQUgsRUFBZTtBQUNYLDZCQUFjLElBQUUsQ0FBSCxHQUFPLENBQVAsU0FBZSxDQUE1QjtBQUNIO0FBQ0QsNEJBQWMsU0FBZCxHQUEwQixVQUExQixHQUF1QyxTQUF2QztBQUNBLHNCQUFVLElBQVYsQ0FBZSxRQUFmO0FBQ0g7QUFDRCxlQUFPLFNBQVA7QUFDSDtBQUNEO0FBQ0E7QUFDQSxRQUFJLFNBQVMsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLDJFQUF6QixFQUNtQixPQURuQixDQUFiO0FBRUEsdUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLGlGQUF6QixFQUNtQixPQURuQixFQUMyQixNQUQzQjtBQUVBO0FBQ0EsdUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLGtFQUF6QixFQUNtQixNQURuQixFQUMwQixNQUQxQixFQUNpQyxJQURqQztBQUVBO0FBQ0EsUUFBSSxhQUFhLG1CQUFtQixDQUFuQixFQUFxQixFQUFyQixFQUF3Qix5RUFBeEIsRUFBa0csTUFBbEcsQ0FBakI7QUFDQSx1QkFBbUIsQ0FBbkIsRUFBcUIsRUFBckIsRUFBd0IsdUVBQXhCLEVBQWdHLE1BQWhHLEVBQXVHLFVBQXZHO0FBQ0E7QUFDQSxRQUFJLFVBQVUsbUJBQW1CLENBQW5CLEVBQXFCLEVBQXJCLEVBQXdCLHdDQUF4QixFQUFpRSxNQUFqRSxDQUFkO0FBQ0EsdUJBQW1CLENBQW5CLEVBQXFCLEVBQXJCLEVBQXdCLGtEQUF4QixFQUEyRSxPQUEzRSxFQUFvRixPQUFwRjtBQUNBO0FBQ0EsUUFBSSxXQUFXLG1CQUFtQixDQUFuQixFQUFxQixFQUFyQixFQUF3QixzRUFBeEIsRUFBK0YsTUFBL0YsQ0FBZjtBQUNBLHVCQUFtQixDQUFuQixFQUFxQixFQUFyQixFQUF3Qix5RUFBeEIsRUFBa0csTUFBbEcsRUFBeUcsUUFBekcsRUFBa0gsSUFBbEg7QUFDQTtBQUNBLFFBQUksYUFBYSxtQkFBbUIsQ0FBbkIsRUFBcUIsRUFBckIsR0FBMkIsT0FBTyxPQUFQLElBQWtCLFdBQWxCLEdBQWdDLE9BQWhDLEdBQTBDLEVBQXJFLHlCQUNtQixNQURuQixFQUMwQixFQUQxQixFQUM2QixJQUQ3QixDQUFqQjtBQUVBLFFBQUksY0FBYyxtQkFBbUIsRUFBbkIsRUFBc0IsRUFBdEIsU0FDbUIsR0FEbkIsQ0FBbEI7QUFFQTtBQUNBLFFBQUkseUJBQXlCLG1CQUFtQixDQUFuQixFQUFxQixFQUFyQixFQUF3Qix1RUFBeEIsRUFDbUIsTUFEbkIsQ0FBN0I7QUFFQSx1QkFBbUIsQ0FBbkIsRUFBcUIsRUFBckIsRUFBd0Isb0VBQXhCLEVBQ21CLE1BRG5CLEVBQzBCLHNCQUQxQjtBQUVBO0FBQ0EsUUFBSSxzQkFBc0IsQ0FBQyxZQUFELEVBQWMsSUFBZCxFQUFvQixhQUFwQixFQUFrQyxNQUFsQyxFQUF5QyxLQUF6QyxFQUErQyxLQUEvQyxFQUFxRCxNQUFyRCxFQUE0RCxJQUE1RCxFQUNDLEtBREQsRUFDTyxJQURQLEVBQ1ksS0FEWixFQUNrQixLQURsQixFQUN3QixNQUR4QixDQUExQjtBQUVBLFFBQUksa0JBQWtCLENBQUMsbUJBQUQsRUFBcUIsaUJBQXJCLEVBQXVDLG1CQUF2QyxFQUEyRCxlQUEzRCxFQUNDLG1CQURELEVBQ3FCLGFBRHJCLEVBQ21DLHlCQURuQyxFQUM2RCxTQUQ3RCxFQUN1RSxTQUR2RSxFQUNpRixTQURqRixFQUVDLE1BRkQsRUFFUywwQkFGVCxFQUVvQyxhQUZwQyxDQUF0QjtBQUdBO0FBQ0EsUUFBSSxRQUFRLENBQUMsV0FBRCxFQUNDLGFBREQsRUFDZSxPQURmLEVBQ3VCLEtBRHZCLEVBQzZCLFdBRDdCLEVBQzBDLFFBRDFDLEVBQ3FELFVBRHJELEVBQ2lFLFFBRGpFLEVBQzRFLFFBRDVFLEVBQ3NGLFVBRHRGLEVBQ21HLE9BRG5HLEVBQzRHLE9BRDVHLEVBQ3FILE9BRHJILEVBQzhILFNBRDlILEVBQ3lJLE9BRHpJLEVBQ2tKLE9BRGxKLEVBQzJKLFNBRDNKLEVBQ3NLLE9BRHRLLEVBQzhLLE9BRDlLLEVBQ3NMLE9BRHRMLEVBQzhMLFNBRDlMLEVBQ3dNLFNBRHhNLEVBQ2tOLFNBRGxOLEVBQzROLE9BRDVOLEVBRUMsUUFGRCxFQUVVLE9BRlYsRUFFa0IsU0FGbEIsRUFFNEIsU0FGNUIsRUFFc0MsS0FGdEMsRUFFNEMsYUFGNUMsRUFFMEQsYUFGMUQsRUFFd0UsYUFGeEUsRUFFc0YsUUFGdEYsRUFFK0YsUUFGL0YsRUFFd0csYUFGeEcsRUFFc0gsU0FGdEgsRUFFZ0ksV0FGaEksRUFHQyxTQUhELEVBR1csU0FIWCxFQUdxQixVQUhyQixFQUdnQyxTQUhoQyxFQUcwQyxXQUgxQyxFQUdzRCxhQUh0RCxFQUdvRSxTQUhwRSxFQUc4RSxRQUg5RSxFQUd1RixPQUh2RixFQUcrRixXQUgvRixFQUcyRyxTQUgzRyxFQUdxSCxhQUhySCxFQUdtSSxXQUhuSSxFQUcrSSxVQUgvSSxFQUcwSixLQUgxSixFQUdnSyxLQUhoSyxFQUdzSyxLQUh0SyxFQUc0SyxNQUg1SyxFQUdvTCxTQUhwTCxFQUcrTCxjQUgvTCxFQUc4TSxhQUg5TSxFQUc2TixRQUg3TixFQUd1TyxRQUh2TyxFQUdpUCxTQUhqUCxFQUc0UCxRQUg1UCxFQUdzUSxTQUh0USxFQUdpUixhQUhqUixFQUcrUixhQUgvUixFQUc2UyxvQkFIN1MsRUFJQyxVQUpELEVBSWEsVUFKYixFQUl3QixTQUp4QixFQUlrQyxTQUpsQyxFQUk0QyxVQUo1QyxFQUl3RCxPQUp4RCxFQUlnRSxpQkFKaEUsRUFJa0YsZ0JBSmxGLEVBS0MsUUFMRCxFQUtVLFNBTFYsRUFLb0IsVUFMcEIsRUFLK0IsOEJBTC9CLEVBSzhELFFBTDlELENBQVo7O0FBUUEsUUFBSSxXQUFXO0FBQ1gsZUFBTSxFQUFDLFVBQVMsV0FBVixFQUF1QixPQUFNLElBQTdCLEVBQWtDLE1BQUssVUFBdkMsRUFBbUQsS0FBSSxXQUF2RCxFQURLO0FBRVgsZUFBTSxFQUFDLFVBQVMsT0FBVixFQUFrQixPQUFNLElBQXhCLEVBQTZCLE1BQUssZUFBbEMsRUFBbUQsS0FBSSxtQkFBdkQsRUFGSztBQUdYLGVBQU0sRUFBQyxVQUFTLE9BQVYsRUFBa0IsT0FBTSxLQUF4QixFQUErQixNQUFLLEtBQXBDLEVBSEs7QUFJWCxlQUFNLEVBQUMsVUFBUyxPQUFWLEVBQWtCLE9BQU0sT0FBeEIsRUFBZ0MsTUFBSyxRQUFyQyxFQUpLO0FBS1gsZUFBTSxFQUFDLFVBQVMsT0FBVixFQUFrQixPQUFNLElBQXhCLEVBQTZCLE1BQUssT0FBbEMsRUFMSyxFQUt3QztBQUNuRCxlQUFNLEVBQUMsVUFBUyxPQUFWLEVBQWtCLE9BQU0sT0FBeEIsRUFBZ0MsTUFBSyxVQUFyQyxFQU5LLEVBTTZDO0FBQ3hELGVBQU0sRUFBQyxVQUFTLE9BQVYsRUFBa0IsT0FBTSxVQUF4QixFQUFtQyxNQUFLLE1BQXhDLEVBUEssRUFPNEM7QUFDdkQsZUFBTSxFQUFDLFVBQVMsT0FBVixFQUFrQixPQUFNLFVBQXhCLEVBQW1DLE1BQUssc0JBQXhDO0FBUkssS0FBZjs7QUFXQTtBQUNBLFFBQU0sWUFBWTtBQUNkLGtCQUFVLGtCQUFTLEtBQVQsRUFBZTtBQUNyQixtQkFBTyxRQUFRLEtBQVIsR0FBZ0IsT0FBTyxLQUE5QjtBQUNILFNBSGE7QUFJZCxtQkFBVyxtQkFBUyxLQUFULEVBQWU7QUFDdEIsbUJBQU8sTUFBTSxNQUFOLElBQWdCLE1BQU0sVUFBN0I7QUFDSCxTQU5hO0FBT2Qsd0JBQWdCLHdCQUFTLEtBQVQsRUFBZTtBQUMzQixnQkFBSSxNQUFNLGNBQVYsRUFBeUI7QUFDckIsc0JBQU0sY0FBTjtBQUNILGFBRkQsTUFFTztBQUNILHNCQUFNLFdBQU4sR0FBb0IsS0FBcEI7QUFDSDtBQUNKLFNBYmE7QUFjZCx5QkFBaUIseUJBQVMsS0FBVCxFQUFlO0FBQzVCLGdCQUFJLE1BQU0sZUFBVixFQUEwQjtBQUN0QixzQkFBTSxlQUFOO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsc0JBQU0sWUFBTixHQUFxQixJQUFyQjtBQUNIO0FBQ0osU0FwQmE7QUFxQmQsb0JBQVksb0JBQVMsT0FBVCxFQUFrQixJQUFsQixFQUF3QixPQUF4QixFQUFnQztBQUN4QyxnQkFBSSxRQUFRLGdCQUFaLEVBQTZCO0FBQ3pCLHdCQUFRLGdCQUFSLENBQXlCLElBQXpCLEVBQStCLE9BQS9CLEVBQXdDLEtBQXhDLEVBRHlCLENBQ3dCO0FBQ3BELGFBRkQsTUFFTyxJQUFJLFFBQVEsV0FBWixFQUF3QjtBQUMzQix3QkFBUSxXQUFSLENBQW9CLE9BQU8sSUFBM0IsRUFBaUMsT0FBakMsRUFEMkIsQ0FDaUI7QUFDL0MsYUFGTSxNQUVBO0FBQ0gsd0JBQVEsT0FBTyxJQUFmLElBQXVCLE9BQXZCLENBREcsQ0FDOEI7QUFDcEM7QUFDSixTQTdCYTtBQThCZCx1QkFBZSx1QkFBUyxPQUFULEVBQWtCLElBQWxCLEVBQXdCLE9BQXhCLEVBQWdDO0FBQzNDLGdCQUFJLFFBQVEsbUJBQVosRUFBZ0M7QUFDNUIsd0JBQVEsbUJBQVIsQ0FBNEIsSUFBNUIsRUFBa0MsT0FBbEMsRUFBMkMsS0FBM0MsRUFENEIsQ0FDdUI7QUFDdEQsYUFGRCxNQUVPLElBQUksUUFBUSxXQUFaLEVBQXdCO0FBQzNCLHdCQUFRLFdBQVIsQ0FBb0IsT0FBTyxJQUEzQixFQUFpQyxPQUFqQyxFQUQyQixDQUNnQjtBQUM5QyxhQUZNLE1BRUE7QUFDSCx3QkFBUSxPQUFPLElBQWYsSUFBdUIsSUFBdkIsQ0FERyxDQUMwQjtBQUNoQztBQUNKO0FBdENhLEtBQWxCO0FBd0NBO0FBQ0EsUUFBTSxVQUFVO0FBQ1osZ0JBQVEsZ0JBQVMsR0FBVCxFQUFhO0FBQ2pCLG1CQUFPLFNBQVMsYUFBVCxDQUF1QixHQUF2QixDQUFQO0FBQ0gsU0FIVztBQUlaLGtCQUFVLGtCQUFTLEdBQVQsRUFBYTtBQUNuQixtQkFBTyxTQUFTLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBUDtBQUNILFNBTlc7QUFPWixnQkFBUSxnQkFBUyxRQUFULEVBQWtCO0FBQ3RCLG1CQUFPLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFQO0FBQ0g7QUFUVyxLQUFoQjs7QUFZQTtBQUNBLFFBQU0sYUFBYTtBQUNmLG9CQUFZLHNCQUFVO0FBQ2xCLGdCQUFJLFlBQVksRUFBaEI7QUFDQSxnQkFBSSxhQUFhLFNBQVMsTUFBMUI7QUFDQSxnQkFBRyxlQUFlLEVBQWxCLEVBQXNCLE9BQU8sU0FBUDtBQUN0QixnQkFBSSxVQUFVLFdBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFkO0FBQ0EsaUJBQUksSUFBSSxJQUFFLENBQU4sRUFBUyxNQUFJLFFBQVEsTUFBekIsRUFBZ0MsSUFBRSxHQUFsQyxFQUFzQyxHQUF0QyxFQUEwQztBQUN0QyxvQkFBSSxJQUFJLFFBQVEsQ0FBUixFQUFXLEtBQVgsQ0FBaUIsR0FBakIsQ0FBUjtBQUNBLG9CQUFJLE9BQU8sbUJBQW1CLEVBQUUsQ0FBRixFQUFLLE9BQUwsQ0FBYSxZQUFiLEVBQTBCLEVBQTFCLENBQW5CLENBQVg7QUFDQSxvQkFBSSxRQUFRLG1CQUFtQixFQUFFLENBQUYsQ0FBbkIsQ0FBWjtBQUNBLDBCQUFVLElBQVYsSUFBa0IsS0FBbEI7QUFDSDtBQUNELG1CQUFPLFNBQVA7QUFDQTtBQUNILFNBZGM7QUFlZixvQkFBWSxvQkFBUyxJQUFULEVBQWMsS0FBZCxFQUFvQixJQUFwQixFQUF5QixJQUF6QixFQUE4QixNQUE5QixFQUFxQyxNQUFyQyxFQUE0QztBQUNwRCxnQkFBSSxRQUFNLElBQUksSUFBSixFQUFWO0FBQ0Esa0JBQU0sT0FBTixDQUFjLE1BQU0sT0FBTixLQUFnQixJQUE5QjtBQUNBLGdCQUFJLFNBQVksbUJBQW1CLElBQW5CLENBQVosU0FBd0MsbUJBQW1CLEtBQW5CLENBQTVDO0FBQ0EsZ0JBQUksSUFBSixFQUFVO0FBQ0gsc0JBQUgsaUJBQXFCLEtBQXJCO0FBQ0g7QUFDRCxnQkFBSSxJQUFKLEVBQVU7QUFDSCxzQkFBSCxjQUFrQixJQUFsQjtBQUNIO0FBQ0QsZ0JBQUksTUFBSixFQUFZO0FBQ0wsc0JBQUgsZ0JBQW9CLE1BQXBCO0FBQ0g7QUFDRCxnQkFBSSxNQUFKLEVBQVk7QUFDTCxzQkFBSCxnQkFBb0IsTUFBcEI7QUFDSDtBQUNELHFCQUFTLE1BQVQsR0FBa0IsTUFBbEI7QUFDSDtBQWhDYyxLQUFuQjtBQWtDQTtBQUNBLFFBQU0sY0FBYztBQUNoQix5QkFBaUIseUJBQVMsR0FBVCxFQUFhO0FBQzFCLGdCQUFJLGdCQUFnQixRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQXBCO0FBQ0EsMEJBQWMsRUFBZCxlQUE2QixHQUE3QjtBQUNBLG9CQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsTUFBdkMsR0FBOEMsT0FBOUM7QUFDQSxvQkFBUSxRQUFSLENBQWlCLGNBQWpCLEVBQWlDLFdBQWpDLENBQTZDLGFBQTdDO0FBQ0EsbUJBQU8sYUFBUDtBQUNILFNBUGU7QUFRaEIsc0JBQWEsc0JBQVMsR0FBVCxFQUFhO0FBQ3RCLGdCQUFJLGlCQUFpQixZQUFZLGVBQVosQ0FBNEIsR0FBNUIsQ0FBckI7QUFDQTtBQUNBLGdCQUFJLFVBQVUsU0FBUyxHQUFULEVBQWMsSUFBNUI7QUFDQSxnQkFBSSxZQUFZLFFBQVEsTUFBeEI7QUFDQSxpQkFBSSxJQUFJLElBQUUsQ0FBVixFQUFZLElBQUUsU0FBZCxFQUF3QixHQUF4QixFQUE0QjtBQUN4QixvQkFBSSxhQUFhLFFBQVEsTUFBUixDQUFlLEtBQWYsQ0FBakI7QUFDQSwyQkFBVyxTQUFYLEdBQXVCLFdBQXZCO0FBQ0Esb0JBQUksVUFBVSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQWQ7QUFDQSx3QkFBUSxHQUFSLEdBQWMsUUFBUSxDQUFSLENBQWQ7QUFDQSx3QkFBUSxTQUFSLEdBQW9CLEtBQXBCO0FBQ0Esd0JBQVEsT0FBUixHQUFrQixXQUFXLGFBQTdCO0FBQ0Esd0JBQVEsV0FBUixHQUFzQixnQkFBZ0IsT0FBdEM7QUFDQSx3QkFBUSxVQUFSLEdBQW9CLGdCQUFnQixRQUFwQztBQUNBO0FBQ0EsMkJBQVcsV0FBWCxDQUF1QixPQUF2QjtBQUNBLCtCQUFlLFdBQWYsQ0FBMkIsVUFBM0I7QUFDSDtBQUNKLFNBMUJlO0FBMkJoQix5QkFBaUIseUJBQVMsR0FBVCxFQUFhO0FBQzFCLGdCQUFJLGlCQUFpQixZQUFZLGVBQVosQ0FBNEIsR0FBNUIsQ0FBckI7QUFDQSxnQkFBSSxVQUFVLFNBQVMsR0FBVCxFQUFjLElBQTVCO0FBQ0EsZ0JBQUksWUFBWSxRQUFRLE1BQXhCO0FBQ0EsaUJBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLFNBQWQsRUFBd0IsR0FBeEIsRUFBNEI7QUFDeEIsb0JBQUksVUFBVSxRQUFRLE1BQVIsQ0FBZSxNQUFmLENBQWQ7QUFDQSx3QkFBUSxLQUFSLENBQWMsT0FBZCxHQUF3QixvQ0FBeEI7QUFDQSx3QkFBUSxTQUFSLHFCQUFvQyxVQUFVLFFBQVEsQ0FBUixDQUFWLENBQXBDLGlDQUFtRixRQUFRLENBQVIsQ0FBbkY7QUFDQSxvQkFBRyxTQUFTLEdBQVQsRUFBYyxHQUFqQixFQUFxQjtBQUNqQiw0QkFBUSxTQUFSLHFCQUFvQyxVQUFVLFFBQVEsQ0FBUixDQUFWLENBQXBDLGlDQUFtRixTQUFTLEdBQVQsRUFBYyxHQUFkLENBQWtCLENBQWxCLENBQW5GO0FBQ0EsNEJBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxNQUF2QyxHQUE4QyxNQUE5QztBQUNIO0FBQ0Qsd0JBQVEsT0FBUixHQUFrQixXQUFXLGFBQTdCO0FBQ0Esd0JBQVEsS0FBUixDQUFjLE9BQWQsR0FBd0IsZ0RBQXhCO0FBQ0EsK0JBQWUsV0FBZixDQUEyQixPQUEzQjtBQUNIO0FBQ0osU0EzQ2U7QUE0Q2hCLHlCQUFpQix5QkFBUyxHQUFULEVBQWE7QUFDMUIsZ0JBQUksaUJBQWlCLFlBQVksZUFBWixDQUE0QixHQUE1QixDQUFyQjtBQUNBLGdCQUFJLFVBQVUsU0FBUyxHQUFULEVBQWMsSUFBNUI7QUFDQSxnQkFBSSxVQUFVLFNBQVMsR0FBVCxFQUFjLEdBQTVCO0FBQ0EsZ0JBQUksWUFBWSxRQUFRLE1BQXhCO0FBQ0EsaUJBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLFNBQWQsRUFBd0IsR0FBeEIsRUFBNEI7QUFDeEIsb0JBQUksVUFBVSxRQUFRLE1BQVIsQ0FBZSxLQUFmLENBQWQ7QUFDQSx3QkFBUSxPQUFSLENBQWdCLElBQWhCLEdBQXdCLFFBQVEsQ0FBUixDQUF4QjtBQUNBLHdCQUFRLEdBQVIsR0FBYyxRQUFRLENBQVIsQ0FBZDtBQUNBLHdCQUFRLFNBQVIsR0FBb0IsS0FBcEI7QUFDQSx3QkFBUSxPQUFSLEdBQWtCLFdBQVcsYUFBN0I7QUFDQSx3QkFBUSxLQUFSLENBQWMsT0FBZCxHQUF3QixpREFBeEI7QUFDQSwrQkFBZSxXQUFmLENBQTJCLE9BQTNCO0FBQ0g7QUFDSjtBQTFEZSxLQUFwQjtBQTREQSxRQUFNLGtCQUFrQjtBQUNwQixpQkFBUyxpQkFBUyxLQUFULEVBQWU7QUFDcEIsZ0JBQUksY0FBYyxVQUFVLFNBQVYsQ0FBb0IsS0FBcEIsQ0FBbEI7QUFDQSxnQkFBRyxDQUFDLFlBQVksR0FBaEIsRUFBb0I7QUFDaEIsdUJBQU8sSUFBUDtBQUNIO0FBQ0QsZ0JBQUkscUJBQXFCLFFBQVEsUUFBUixDQUFpQixXQUFqQixDQUF6QjtBQUxvQix1QkFNbUIsQ0FBQyxTQUFTLElBQVQsQ0FBYyxTQUFmLEVBQXlCLFNBQVMsSUFBVCxDQUFjLFVBQXZDLENBTm5CO0FBQUEsZ0JBTWYsY0FOZTtBQUFBLGdCQU1BLGVBTkE7O0FBT3BCLCtCQUFtQixTQUFuQixpQkFBMkMsWUFBWSxHQUF2RDtBQUNBLCtCQUFtQixLQUFuQixDQUF5QixPQUF6QixHQUFtQyxPQUFuQztBQUNBLCtCQUFtQixLQUFuQixDQUF5QixHQUF6QixHQUFrQyxNQUFNLE9BQU4sR0FBZ0IsY0FBaEIsR0FBaUMsRUFBbkU7QUFDQSwrQkFBbUIsS0FBbkIsQ0FBeUIsSUFBekIsR0FBbUMsTUFBTSxPQUFOLEdBQWdCLGVBQW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsU0FmbUI7QUFnQnBCLGtCQUFVLGtCQUFTLEtBQVQsRUFBZTtBQUNyQixvQkFBUSxRQUFSLENBQWlCLFdBQWpCLEVBQThCLEtBQTlCLENBQW9DLE9BQXBDLEdBQThDLE1BQTlDO0FBQ0g7QUFsQm1CLEtBQXhCO0FBb0JBLFFBQU0sYUFBYTtBQUNmLGNBQU0sY0FBUyxLQUFULEVBQWU7QUFDakIsdUJBQVcsS0FBWDtBQUNBLGdCQUFJLGNBQWMsVUFBVSxTQUFWLENBQW9CLEtBQXBCLENBQWxCO0FBQ0Esb0JBQVEsUUFBUixDQUFpQixjQUFqQixFQUFpQyxLQUFqQyxDQUF1QyxPQUF2QyxHQUFpRCxPQUFqRDtBQUNBLG9CQUFRLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUMsS0FBakMsQ0FBdUMsS0FBdkMsR0FBOEMsUUFBUSxNQUFSLENBQWUsVUFBZixFQUEyQixLQUEzQixDQUFpQyxLQUEvRTtBQUNBLGdCQUFJLFdBQVcsWUFBWSxVQUFaLENBQXVCLENBQXZCLEVBQTBCLFNBQXpDO0FBQ0EsZ0JBQUksVUFBVSxZQUFZLFVBQVosQ0FBdUIsQ0FBdkIsRUFBMEIsU0FBeEM7QUFDQSxnQkFBRyxRQUFRLE1BQVIsQ0FBZSxhQUFXLE9BQTFCLENBQUgsRUFBc0M7QUFDbEMsd0JBQVEsTUFBUixDQUFlLGFBQVcsT0FBMUIsRUFBbUMsS0FBbkMsQ0FBeUMsT0FBekMsR0FBbUQsT0FBbkQ7QUFDQSxvQkFBRyxXQUFXLE9BQWQsRUFBdUIsUUFBUSxRQUFSLENBQWlCLGNBQWpCLEVBQWlDLEtBQWpDLENBQXVDLE1BQXZDLEdBQThDLE1BQTlDLENBQXZCLEtBQ0ssUUFBUSxRQUFSLENBQWlCLGNBQWpCLEVBQWlDLEtBQWpDLENBQXVDLE1BQXZDLEdBQThDLE9BQTlDO0FBQ0w7QUFDSDtBQUNELGdCQUFHLFlBQVcsT0FBZCxFQUFzQjtBQUNsQiw0QkFBWSxlQUFaLENBQTRCLE9BQTVCO0FBQ0gsYUFGRCxNQUVNLElBQUcsWUFBVyxPQUFkLEVBQXNCO0FBQ3hCLDRCQUFZLFlBQVosQ0FBeUIsT0FBekI7QUFDSCxhQUZLLE1BRUEsSUFBRyxZQUFZLFdBQWYsRUFBMkI7QUFDN0IsNEJBQVksZUFBWixDQUE0QixPQUE1QjtBQUNIO0FBQ0osU0FyQmM7QUFzQmYsdUJBQWUsdUJBQVMsS0FBVCxFQUFlO0FBQzFCLGdCQUFNLGNBQWMsVUFBVSxTQUFWLENBQW9CLEtBQXBCLENBQXBCO0FBQ0E7O0FBRUEsZ0JBQUksZ0JBQWdCLEVBQXBCO0FBQUEsZ0JBQXdCLGlCQUFlLEVBQXZDO0FBQ0EsZ0JBQUcsWUFBWSxVQUFaLENBQXVCLE1BQXZCLElBQStCLENBQWxDLEVBQW9DO0FBQ2hDLG9CQUFHLFlBQVksR0FBZixFQUFtQjtBQUNmLG9DQUFnQixZQUFZLEdBQTVCO0FBQ0EscUNBQWUsV0FBVyxZQUFYLENBQXdCLGFBQXhCLEVBQXNDLE9BQXRDLENBQWY7QUFDSCxpQkFIRCxNQUdLO0FBQ0Q7QUFDQSxvQ0FBZ0IsWUFBWSxVQUFaLENBQXVCLENBQXZCLEVBQTBCLFNBQTFDO0FBQ0EscUNBQWUsV0FBVyxZQUFYLENBQXdCLGFBQXhCLEVBQXNDLE9BQXRDLENBQWY7QUFDSDtBQUNKLGFBVEQsTUFVSTtBQUNBO0FBQ0EsZ0NBQWdCLFlBQVksVUFBWixDQUF1QixDQUF2QixFQUEwQixTQUExQztBQUNBLGlDQUFlLFdBQVcsWUFBWCxDQUF3QixhQUF4QixFQUFzQyxPQUF0QyxDQUFmO0FBQ0g7QUFDRCxnQkFBSSxpQkFBaUIsUUFBUSxNQUFSLENBQWUsVUFBZixDQUFyQjtBQUNBLGdCQUFNLFNBQVMsZUFBZSxLQUE5QjtBQUNBLGdCQUFNLFdBQVcsZUFBZSxjQUFoQztBQUNBLGdCQUFNLFNBQVMsZUFBZSxZQUE5QjtBQUNBLDJCQUFlLEtBQWYsUUFBMEIsT0FBTyxLQUFQLENBQWEsQ0FBYixFQUFnQixRQUFoQixDQUExQixHQUFzRCxjQUF0RCxHQUF1RSxPQUFPLEtBQVAsQ0FBYSxRQUFiLENBQXZFO0FBQ0E7QUFDQTtBQUNILFNBakRjO0FBa0RmLHNCQUFjLHNCQUFTLE1BQVQsRUFBaUIsT0FBakIsRUFBeUI7QUFDbkMsZ0JBQUksZUFBYSxFQUFqQjtBQUNBLGdCQUFHLFlBQVksT0FBZixFQUF1QjtBQUNuQix5Q0FBdUIsTUFBdkI7QUFDSDtBQUNELGdCQUFHLFlBQVksT0FBZixFQUF1QjtBQUNuQiwrQkFBZ0IsVUFBVSxNQUFWLENBQWhCO0FBQ0g7QUFDRCxnQkFBRyxZQUFZLFdBQWYsRUFBMkI7QUFDdkIsK0JBQWdCLE1BQWhCO0FBQ0g7QUFDRCxtQkFBTyxZQUFQO0FBQ0g7QUE5RGMsS0FBbkI7QUFnRUEsUUFBTSxhQUFhO0FBQ2YsbUJBQVcsYUFESTtBQUVmLGNBQU0sZ0JBQVU7QUFDWjtBQUNBLGdCQUFJLFdBQVcsUUFBUSxNQUFSLENBQWUsS0FBZixDQUFmO0FBQ0EscUJBQVMsU0FBVCxpR0FBNkYsU0FBN0Y7QUFDQSxxQkFBUyxFQUFULEdBQWMsV0FBVyxTQUF6QjtBQUNBLGdCQUFJLGFBQWEsT0FBTyxJQUFQLENBQVksUUFBWixFQUFzQixNQUF2QztBQUNBLGlCQUFJLElBQUksSUFBRSxDQUFWLEVBQVksSUFBRSxVQUFkLEVBQXlCLEdBQXpCLEVBQTZCO0FBQ3pCLG9CQUFNLFVBQVUsT0FBTyxJQUFQLENBQVksUUFBWixFQUFzQixDQUF0QixDQUFoQjtBQUNBLG9CQUFNLFlBQVksU0FBUyxPQUFULEVBQWtCLEtBQXBDO0FBQ0Esb0JBQU0sV0FBVyxTQUFTLE9BQVQsRUFBa0IsUUFBbkM7QUFDQSxvQkFBRyxDQUFDLFFBQUQsSUFBYSxDQUFDLFNBQWpCLEVBQTRCLFFBQVEsR0FBUixDQUFZLGdCQUFjLE9BQTFCO0FBQzVCLG9CQUFNLFdBQVcsV0FBVyxJQUFYLENBQWdCLFNBQWhCLEVBQTBCLFdBQVcsSUFBckMsRUFBMEMsT0FBMUMsRUFBbUQsUUFBbkQsQ0FBakI7QUFDQSx5QkFBUyxXQUFULENBQXFCLFFBQXJCO0FBQ0g7QUFDRDtBQUNBLGdCQUFJLFdBQVcsUUFBUSxNQUFSLENBQWUsTUFBZixDQUFmO0FBQ0EscUJBQVMsU0FBVCxHQUFxQixLQUFyQjtBQUNBLHFCQUFTLFNBQVQsR0FBb0IsU0FBcEI7QUFDQSxxQkFBUyxFQUFULEdBQWMsU0FBZDtBQUNBLHFCQUFTLE9BQVQsR0FBbUIsV0FBVyxLQUE5QjtBQUNBLHFCQUFTLEtBQVQsQ0FBZSxPQUFmLEdBQXlCLGdCQUF6QjtBQUNBLHFCQUFTLFdBQVQsQ0FBcUIsUUFBckI7QUFDQTtBQUNBLGdCQUFJLGFBQWEsUUFBUSxNQUFSLENBQWUsS0FBZixDQUFqQjtBQUNBLHVCQUFXLEVBQVgsR0FBZ0IsY0FBaEI7QUFDQSxxQkFBUyxXQUFULENBQXFCLFVBQXJCO0FBQ0E7QUFDQSxnQkFBSSxZQUFZLFFBQVEsTUFBUixDQUFlLE9BQWYsQ0FBaEI7QUFDQSxzQkFBVSxTQUFWO0FBaUJBLHFCQUFTLFdBQVQsQ0FBcUIsU0FBckI7QUFDQSxtQkFBTyxRQUFQO0FBQ0gsU0FqRGM7QUFrRGYsY0FBTSxjQUFTLEtBQVQsRUFBZSxJQUFmLEVBQW9CLEtBQXBCLEVBQTBCLE9BQTFCLEVBQWtDO0FBQ3BDLGdCQUFJLFVBQVUsUUFBUSxNQUFSLENBQWUsTUFBZixDQUFkO0FBQ0Esb0JBQVEsRUFBUixHQUFhLEtBQWI7QUFDQSxvQkFBUSxTQUFSLEdBQW1CLFNBQW5CO0FBQ0EsZ0JBQUksK0NBQTJDLEtBQTNDLG1CQUE4RCxPQUE5RCxTQUF5RSxLQUF6RSxTQUFKO0FBQ0Esb0JBQVEsT0FBUixHQUFrQixJQUFsQjtBQUNBLG9CQUFRLEtBQVIsR0FBZ0IsS0FBaEI7QUFDQSxvQkFBUSxTQUFSLEdBQW9CLFVBQXBCO0FBQ0EsbUJBQU8sT0FBUDtBQUNILFNBM0RjO0FBNERmLGVBQU8saUJBQVU7QUFDYixnQkFBTSxlQUFlLFFBQVEsUUFBUixDQUFpQixjQUFqQixDQUFyQjtBQUNBLHlCQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQSxnQkFBTSxpQkFBaUIsYUFBYSxVQUFwQztBQUNBLGlCQUFLLElBQUksSUFBRSxDQUFOLEVBQVMsTUFBTSxlQUFlLE1BQW5DLEVBQTJDLElBQUUsR0FBN0MsRUFBaUQsR0FBakQsRUFBcUQ7QUFDakQ7QUFDQSwrQkFBZSxDQUFmLEVBQWtCLEtBQWxCLENBQXdCLE9BQXhCLEdBQWtDLE1BQWxDO0FBQ0g7QUFDSjtBQXBFYyxLQUFuQjs7QUF1RUEsUUFBRyxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsWUFBWSxJQUFoRCxFQUFzRDtBQUNsRDtBQUNBLFlBQUksYUFBYSxTQUFTLG9CQUFULENBQThCLFVBQTlCLENBQWpCO0FBQ0EsWUFBSSxtQkFBbUIsV0FBVyxNQUFsQztBQUNBLFlBQUcscUJBQW1CLENBQXRCLEVBQXdCO0FBQ3BCLG9CQUFRLEdBQVIsQ0FBWSxzQkFBWjtBQUNIO0FBQ0Q7QUFDQSxZQUFJLGFBQWE7QUFDYiw4QkFBa0IsR0FETDtBQUViLGdDQUFvQjtBQUZQLFNBQWpCO0FBSUEsWUFBSSxrQkFBa0IsV0FBVyxJQUFYLEVBQXRCO0FBWmtEO0FBQUE7QUFBQTs7QUFBQTtBQWFsRCxpQ0FBMEIsVUFBMUIsOEhBQXNDO0FBQUEsb0JBQTdCLGFBQTZCOztBQUNsQztBQUNBLDhCQUFjLFVBQWQsQ0FBeUIsWUFBekIsQ0FBc0MsZUFBdEMsRUFBdUQsYUFBdkQ7QUFDSDtBQWhCaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCckQ7QUFDSixDQWpaRDtBQWtaQSxJQUFNLFVBQVUsWUFBaEI7QUFDQSxJQUFLLE9BQUwiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBmdW4gPSAoaW1ncGF0aD0nJykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZlcnNpb25ObyA9ICc0LjIuMic7XHJcbiAgICAvKiBBZGRyZXNzIGZ1bmN0aW9uXHJcbiAgICAgKiBzdGFydE51bWJlcjogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBzdGFydCBudW1iZXI7XHJcbiAgICAgKiBsZW5ndGhBcnJheTogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBhZGRyQXJyYXkgbGVuZ3RoO1xyXG4gICAgICogc3RyUHJlZml4OiBzdHJpbmcsIGFkZHJlc3MgUHJlZml4O1xyXG4gICAgICogc3RyU3VmZml4OiBzdHJpbmcsIGFkZHJlc3MgU3VmZml4O1xyXG4gICAgICogbGVhZGluZ1plcm86IGJvb2xlbiwgdHJ1ZSBmb3IgbGVhZGluZyB6ZXJvIGluIG51bWJlcjtcclxuICAgICAqIGFkZHJBcnJheTogYXJyYXksIGFkZHJlc3MgYXJyYXksIGRlZmF1bHQgZm9yIGVtcHR5O1xyXG4gICAgICovXHJcbiAgICAvLyDliJvlu7rooajmg4XljIXmlbDnu4TnmoTlh73mlbBcclxuICAgIGZ1bmN0aW9uIGVtQWRkckFycmF5SGFuZGxlcihzdGFydE51bWJlciwgbGVuZ3RoQXJyYXksIHN0clByZWZpeCwgc3RyU3VmZml4LCAgYWRkckFycmF5ID0gW10sIGxlYWRpbmdaZXJvID0gZmFsc2Upe1xyXG4gICAgICAgIGxldCBhZGRyVGVtcCA9ICcnLCBhZGRyTnVtYmVyID0gMDtcclxuICAgICAgICBmb3IobGV0IGo9c3RhcnROdW1iZXI7ajxsZW5ndGhBcnJheTtqKyspe1xyXG4gICAgICAgICAgICBhZGRyTnVtYmVyID0gajtcclxuICAgICAgICAgICAgaWYobGVhZGluZ1plcm8pe1xyXG4gICAgICAgICAgICAgICAgYWRkck51bWJlciA9IChqPjkpPyhqKTooYDAke2p9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkclRlbXAgPSBgJHtzdHJQcmVmaXh9JHthZGRyTnVtYmVyfSR7c3RyU3VmZml4fWA7XHJcbiAgICAgICAgICAgIGFkZHJBcnJheS5wdXNoKGFkZHJUZW1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkZHJBcnJheTtcclxuICAgIH1cclxuICAgIC8qIOihqOaDheWMheWcsOWdgOaVsOaNriAqL1xyXG4gICAgLy8gQuermVxyXG4gICAgbGV0IGJpbGlFTSA9IGVtQWRkckFycmF5SGFuZGxlcigxLCAxNywnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0JpbGlCaWxpLzIyMzMgKCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcpLmdpZicpO1xyXG4gICAgZW1BZGRyQXJyYXlIYW5kbGVyKDAsIDE0LCdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQmlsaUJpbGkvYmlsaWJpbGlUViAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnKS5wbmcnLGJpbGlFTSk7XHJcbiAgICAvLyB0b3Jh6YWxXHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTQsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC90b3JhLzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcuanBnJyxiaWxpRU0sdHJ1ZSk7XHJcbiAgICAvL+mYv+WNoeaelyBmcm9tIOaRh+abs+eZvuWQiFxyXG4gICAgbGV0IEFrYXJpU21pbGUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwyMSwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0R5bmFtaWMvYWthcmknLCcuZ2lmJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSw3MiwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL2FrYXJpL2FrYXJpJywnLnBuZycsQWthcmlTbWlsZSk7XHJcbiAgICAvLyBOZXcgR2FtZSBrZuaJqeWxlVxyXG4gICAgbGV0IE5ld0dhbWUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMiw2NCwnaHR0cDovL25la29oYW5kLm1vZS9zcHNtaWxlLzAxU29yYS8weHgnLCcucG5nJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSwyMCwnaHR0cDovL3NzLm5la29oYW5kLm1vZS9Bc291cmNlL0Vtb3Rpb25QaWMvS0ZFTSAoJywnKS5naWYnLCBOZXdHYW1lKTtcclxuICAgIC8vIEFDRlVOXHJcbiAgICBsZXQgQUNTbWlsZTQgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSw1MSwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0FDRlVOL05ldy8nLCcucG5nJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSw0MCwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0FDRlVOL05pbWluZy8nLCcuZ2lmJyxBQ1NtaWxlNCx0cnVlKTtcclxuICAgIC8vIEtGIOWGhee9rlxyXG4gICAgbGV0IEtGU21pbGVVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSw0OSxgJHt0eXBlb2YgaW1ncGF0aCAhPSAndW5kZWZpbmVkJyA/IGltZ3BhdGggOiAnJ30vcG9zdC9zbWlsZS9lbS9lbWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmdpZicsW10sdHJ1ZSk7XHJcbiAgICBsZXQgS0ZTbWlsZUNvZGUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMTAsNTgsYFtzOmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ10nKTtcclxuICAgIC8vIGxvdmVsaXZl5LiT55So5bCPXHJcbiAgICBsZXQgTG92ZWxpdmVTbWFsbHRhcmdldFVSTCA9IGVtQWRkckFycmF5SGFuZGxlcigxLDQxLCdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDIvU21hbGwvTG92ZWxpdmUybmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5wbmcnKTtcclxuICAgIGVtQWRkckFycmF5SGFuZGxlcigxLDQxLCdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvU21hbGwvTG92ZWxpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcucG5nJyxMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMKTtcclxuICAgIC8vIGtm5b+r5o235Luj56CBKOmcgOimgeaUueWGmeino+aehOi1i+WAvClcclxuICAgIGxldCBmdW5jdGlvbkRlc2NyaXB0aW9uID0gWyflh7rllK7otLRzZWxsPeWUruS7tycsJ+W8leeUqCcsICfpmpDol49oaWRlPeelnuenmOetiee6pycsJ+aPkuWFpeS7o+eggScsJ+WIoOmZpOe6vycsJ+i3kemprOeBrycsJ+aWh+Wtl+minOiJsicsJ+eyl+S9kycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn5LiL5YiS57q/Jywn5pac5L2TJywn5rC05bmz57q/Jywn6IOM5pmv6ImyJywn5o+S5YWl5Zu+54mHJ107XHJcbiAgICBsZXQgZGVmYXVsdEZ1bmN0aW9uID0gWydbc2VsbD0xMDBdWy9zZWxsXScsJ1txdW90ZV1bL3F1b3RlXScsJ1toaWRlPTEwMF1bL2hpZGVdJywnW2NvZGVdWy9jb2RlXScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdbc3RyaWtlXVsvc3RyaWtlXScsJ1tmbHldWy9mbHldJywnW2NvbG9yPSMwMEZGMDBdWy9jb2xvcl0nLCdbYl1bL2JdJywnW3VdWy91XScsJ1tpXVsvaV0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnW2hyXScsICdbYmFja2NvbG9yPV1bL2JhY2tjb2xvcl0nLCdbaW1nXVsvaW1nXSddO1xyXG4gICAgLy8g6aKc5paH5a2XXHJcbiAgICBsZXQgZW1vamkgPSBbJyjil4/jg7sgOCDjg7vil48pJyxcclxuICAgICAgICAgICAgICAgICAn4pWwKOC5keKXlSDilr0g4peV4LmRKeKVrycsJyjjgp3PieODuyknLCfjgJzimarimaonLCco776f0JTvvp/iiaHvvp/QlO++nyknLCAnKO+8vm/vvL4p776JJyAsICcofHx8776f0JTvvp8pJywgJyhgzrXCtCApJywgICco4pWs776f0LTvvp8pJywgJyh8fHzvvp/QtO++nyknICwgJyjvv6PiiIfvv6MpJywgJyjvv6Mz77+jKScsICco77+j772w77+jKScsICco77+jIC4g77+jKScsICco77+j77i/77+jKScsICco77+j77i277+jKScsICcoKsK0z4lgKiknLCAnKOODu8+J44O7KScsJyjijJLilr3ijJIpJywnKO+/o+KWve+/o++8iScsJyg944O7z4njg7s9KScsJyjvvYDjg7vPieODu8K0KScsJyjjgJzvv6PilrPvv6Mp44CcJywnKO+9peKIgO+9pSknLFxyXG4gICAgICAgICAgICAgICAgICcowrDiiIDCsCnvvoknLCco77+jM++/oyknLCfila4o77+j4pa977+jKeKVrScsJyggwrRf44Kd772AKScsJ+OBruODruOBricsJyjvvonYgjwg4LmR77yJ6K+25Zi/4piG772eJywnKCZsdDtfJmx0OyknLCcoJmd0O18mZ3Q7KScsJyg7wqxfwqwpJywnKOKWlOKWoeKWlCkvJywnKO++n9CU776f4omh776f0LTvvp8pIT8nLCfOoyjvvp/QtO++nzspJywnzqMoIO+/o+KWoe+/o3x8KScsXHJcbiAgICAgICAgICAgICAgICAgJyjCtO+8m8+J77ybYCknLCfvvIgvVNCUVCkvJywnKF7jg7vPieODu14gKScsJyjvvaHvvaXPie+9pe+9oSknLCco4peP77+jKO+9tCnvv6Pil48pJywnzrU9zrU9KOODjuKJp+KIh+KJpinjg44nLCcowrTvvaVf772lYCknLCcoLV8tIyknLCfvvIjvv6Pjgbjvv6PvvIknLCco77+jzrUoI++/oykgzqMnLCfjg70oYNCUwrQp776JJywnKOKVr8Kw5Y+jwrAp4pWvKOKUtOKAlOKUtCcsJ++8iCMtXy0p4pSv4pSB4pSvJywnXyg6M+OAjeKIoClfJywnKOeskSknLCco5rGXKScsJyjms6MpJywnKOiLpueskSknLCAnKMK044O7z4njg7tgKScsICco4pWvwrDilqHCsO+8ieKVr++4tSDilLvilIHilLsnLCco4pWv4oC14pah4oCyKeKVr++4teKUu+KUgeKUuycsICcoIMK0z4FgKScsICcoIO++n8+J776fKScsICcob+++n8+J776fbyknLCAnKOOAgF7PiV4pJywgJyjvvaHil5XiiIDil5XvvaEpJywgJy8oIOKXleKAv+KAv+KXlSApXFxcXCcsJ8612akoIMK64oiAwrogKdu20LcnLCco77+jzrUoI++/oynimIbilbDila4o77+j4pa977+jLy8vKScsXHJcbiAgICAgICAgICAgICAgICAgJ++8iOKXj8K0M++9gO+8iX7imaonLCAnXyg60LfjgI3iiKApXycsJ9GF0L7RgNC+0YjQviEnLCfvvLwoXm9eKe+8jycsJyjigKLMheeBrOKAosyFICknLCAnKO++n9CU776fKScsJ+OBvuOBo+OBn+OBj+OAgeWwj+WtpueUn+OBr+acgOmrmOOBoOOBnO+8ge+8gScsJ861Pc61Pc61PeKUjyjjgpzjg63jgpw7KeKUmycsXHJcbiAgICAgICAgICAgICAgICAgJyjvvJvCsOOBu8KwKScsJ1x04o6d4omn4o+d4o+d4omm4o6gJywn44O9KOKcv+++n+KWve++nynjg44nLCfnhJTjgavoiJ7jgYTkuIrjgYzjgovjgrnjg5Hjg7zjgq/jgojjgIHpgqrmgqrjgarnlbDmgKfkuqTpmpvjgavjgIHlpKnnvbDjgpLkuI7jgYjvvIEnLCd84oCiz4nigKJgKSddO1xyXG5cclxuXHJcbiAgICBsZXQgTWVudUxpc3QgPSB7XHJcbiAgICAgICAgaXRlbTQ6e2RhdGF0eXBlOidpbWFnZUxpbmsnLCB0aXRsZTon5Zu65pyJJyxhZGRyOktGU21pbGVVUkwsIHJlZjpLRlNtaWxlQ29kZX0sXHJcbiAgICAgICAgaXRlbTE6e2RhdGF0eXBlOidwbGFpbicsdGl0bGU6J+W/q+aNtycsYWRkcjpkZWZhdWx0RnVuY3Rpb24sIHJlZjpmdW5jdGlvbkRlc2NyaXB0aW9ufSxcclxuICAgICAgICBpdGVtMjp7ZGF0YXR5cGU6J3BsYWluJyx0aXRsZTon6aKc5paH5a2XJywgYWRkcjplbW9qaX0sXHJcbiAgICAgICAgaXRlbTU6e2RhdGF0eXBlOidpbWFnZScsdGl0bGU6J0FDRlVOJyxhZGRyOkFDU21pbGU0fSxcclxuICAgICAgICBpdGVtNjp7ZGF0YXR5cGU6J2ltYWdlJyx0aXRsZTon5bi455SoJyxhZGRyOk5ld0dhbWV9LCAgLy9cclxuICAgICAgICBpdGVtNzp7ZGF0YXR5cGU6J2ltYWdlJyx0aXRsZTonQWthcmknLGFkZHI6QWthcmlTbWlsZX0sIC8vQWthcmlcclxuICAgICAgICBpdGVtODp7ZGF0YXR5cGU6J2ltYWdlJyx0aXRsZTonQmlsaUJpbGknLGFkZHI6YmlsaUVNfSwgLy9C56uZXHJcbiAgICAgICAgaXRlbTM6e2RhdGF0eXBlOidpbWFnZScsdGl0bGU6J0xvdmVMaXZlJyxhZGRyOkxvdmVsaXZlU21hbGx0YXJnZXRVUkx9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIEV2ZW50IOWHveaVsCAqL1xyXG4gICAgY29uc3QgRXZlbnRVdGlsID0ge1xyXG4gICAgICAgIGdldEV2ZW50OiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudCA/IGV2ZW50IDogd2luZG93LmV2ZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGFyZ2V0OiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCl7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRIYW5kbGVyOiBmdW5jdGlvbihlbGVtZW50LCB0eXBlLCBoYW5kbGVyKXtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlciwgZmFsc2UpOyAgLy9ET00yXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyB0eXBlLCBoYW5kbGVyKTsgIC8vSUVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbJ29uJyArIHR5cGVdID0gaGFuZGxlcjsgIC8vRE9NIDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlSGFuZGxlcjogZnVuY3Rpb24oZWxlbWVudCwgdHlwZSwgaGFuZGxlcil7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgLy9ET00yXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRldGFjaEV2ZW50KCdvbicgKyB0eXBlLCBoYW5kbGVyKTsgLy9JRVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFsnb24nICsgdHlwZV0gPSBudWxsOyAvL0RPTSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLypFbGVtZW50IOWHveaVsCovXHJcbiAgICBjb25zdCBFbGVVdGlsID0ge1xyXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24oZWxlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdElEOiBmdW5jdGlvbihlbGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKkNvb2tpZeWkhOeQhiovXHJcbiAgICBjb25zdCBDb29raWVVdGlsID0ge1xyXG4gICAgICAgIGdldENvb2tpZXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBDb29raWVPYmogPSB7fTtcclxuICAgICAgICAgICAgbGV0IHRoaXNDb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXNDb29raWUgPT09ICcnKSByZXR1cm4gQ29va2llT2JqO1xyXG4gICAgICAgICAgICBsZXQgbGlzdE9iaiA9IHRoaXNDb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTAsIGxlbj1saXN0T2JqLmxlbmd0aDtpPGxlbjtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHcgPSBsaXN0T2JqW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh3WzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csJycpKTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh3WzFdKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZU9ialtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBDb29raWVPYmo7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpc0Nvb2tpZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRDb29raWVzOiBmdW5jdGlvbihuYW1lLHZhbHVlLHBhdGgsaURheSxkb21haW4sc2VjdXJlKXtcclxuICAgICAgICAgICAgbGV0IG9EYXRlPW5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIG9EYXRlLnNldERhdGUob0RhdGUuZ2V0RGF0ZSgpK2lEYXkpO1xyXG4gICAgICAgICAgICBsZXQgY29va2llID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YDtcclxuICAgICAgICAgICAgaWYgKGlEYXkpIHtcclxuICAgICAgICAgICAgICAgIGAke2Nvb2tpZX07ZXhwaXJlcz0ke29EYXRlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGAke2Nvb2tpZX07cGF0aD0ke3BhdGh9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XHJcbiAgICAgICAgICAgICAgICBgJHtjb29raWV9O2RvbWFpbj0ke2RvbWFpbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWN1cmUpIHtcclxuICAgICAgICAgICAgICAgIGAke2Nvb2tpZX07c2VjdXJlPSR7c2VjdXJlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKuaooeWdlyovXHJcbiAgICBjb25zdCBjcmVhdGVJdGVtcyA9IHtcclxuICAgICAgICBjcmVhdGVDb250YWluZXI6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgIGxldCBJdGVtQ29udGFpbmVyID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgICAgICBJdGVtQ29udGFpbmVyLmlkID0gYGVkZGllMzIke2tleX1gO1xyXG4gICAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQ9JzEwMHB4JztcclxuICAgICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93JykuYXBwZW5kQ2hpbGQoSXRlbUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHJldHVybiBJdGVtQ29udGFpbmVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlYXRlSW1hZ2VzOmZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgIGxldCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKE1lbnVMaXN0W2tleV0pO1xyXG4gICAgICAgICAgICBsZXQgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgICAgICAgbGV0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IobGV0IGs9MDtrPGltZ0xlbmd0aDtrKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpdkVsZW1lbnQgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSA9ICdjbGlja0l0ZW0nO1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLnNyYyA9IGltZ0xpc3Rba107XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdFbXMnO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gZXhwYW5kTWVudS5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3ZlciA9IG1vdXNlT3ZlckFjdGlvbi5zaG93SW1nO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5vbm1vdXNlb3V0ID1tb3VzZU92ZXJBY3Rpb24uY2xlYXJJbWc7XHJcbiAgICAgICAgICAgICAgICAvL2ltZ0l0ZW0uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOiAxMHB4IDEwcHg6d2lkdGg6IDc1cHg7aGVpZ2h0OiA3NXB4Oyc7XHJcbiAgICAgICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZVBsYWluVGV4dDogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICAgICAgbGV0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgICAgICAgIGxldCB0eHRMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICAgICAgICBsZXQgdHh0TGVuZ3RoID0gdHh0TGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaz0wO2s8dHh0TGVuZ3RoO2srKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdHh0SXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICB0eHRJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7IG1hcmdpbjogMTBweCAxMHB4Oyc7XHJcbiAgICAgICAgICAgICAgICB0eHRJdGVtLmlubmVySFRNTCA9IGA8YSBkYXRhLXNpZ249JHtlbmNvZGVVUkkodHh0TGlzdFtrXSl9IGNsYXNzPSd0eHRCdG5FbW90aW9uJz4ke3R4dExpc3Rba119PC9hPmA7XHJcbiAgICAgICAgICAgICAgICBpZihNZW51TGlzdFtrZXldLnJlZil7XHJcbiAgICAgICAgICAgICAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHtNZW51TGlzdFtrZXldLnJlZltrXX08L2E+YDtcclxuICAgICAgICAgICAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS5oZWlnaHQ9JzUwcHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHh0SXRlbS5vbmNsaWNrID0gZXhwYW5kTWVudS5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgICAgICAgICAgdHh0SXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyO3BhZGRpbmc6IDEwcHggMTBweDp3aWR0aDogNTBweDsnO1xyXG4gICAgICAgICAgICAgICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHh0SXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZUltYWdlTGluazogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICAgICAgbGV0IG91dGVyQ29udGFpbmVyID0gY3JlYXRlSXRlbXMuY3JlYXRlQ29udGFpbmVyKGtleSk7XHJcbiAgICAgICAgICAgIGxldCBpbWdMaXN0ID0gTWVudUxpc3Rba2V5XS5hZGRyO1xyXG4gICAgICAgICAgICBsZXQgcmVmTGlzdCA9IE1lbnVMaXN0W2tleV0ucmVmO1xyXG4gICAgICAgICAgICBsZXQgaW1nTGVuZ3RoID0gaW1nTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaz0wO2s8aW1nTGVuZ3RoO2srKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1nSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0uZGF0YXNldC5saW5rID0gIHJlZkxpc3Rba107XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLnNyYyA9IGltZ0xpc3Rba107XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLmNsYXNzTmFtZSA9ICdFbXMnO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5vbmNsaWNrID0gZXhwYW5kTWVudS5hdHRhY2hFbW90aW9uO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7JztcclxuICAgICAgICAgICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0l0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1vdXNlT3ZlckFjdGlvbiA9IHtcclxuICAgICAgICBzaG93SW1nOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGxldCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICBpZighZXZlbnRUYXJnZXQuc3JjKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsYXJnZVZpZXdDb250YWluZXIgPSBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKTtcclxuICAgICAgICAgICAgbGV0IFtzY3JvbGxUb3BWYWx1ZSxzY3JvbGxMZWZ0VmFsdWVdID0gW2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdF07XHJcbiAgICAgICAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGltZyBzcmM9JHtldmVudFRhcmdldC5zcmN9IC8+YDtcclxuICAgICAgICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSArIHNjcm9sbFRvcFZhbHVlICsgMjB9cHhgO1xyXG4gICAgICAgICAgICBsYXJnZVZpZXdDb250YWluZXIuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFggKyBzY3JvbGxMZWZ0VmFsdWV9cHhgO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFtldmVudC5jbGllbnRZLGV2ZW50LmNsaWVudFhdKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhbRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUudG9wLEVsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLmxlZnRdKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhbZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0XSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhckltZzogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBleHBhbmRNZW51ID0ge1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgY3JlYXRlTWVudS5jbGVhcigpO1xyXG4gICAgICAgICAgICBsZXQgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLndpZHRoPSBFbGVVdGlsLnNlbGVjdCgndGV4dGFyZWEnKS5zdHlsZS53aWR0aDtcclxuICAgICAgICAgICAgbGV0IGRhdGFUeXBlID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1syXS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkYXRhS2V5ID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgIGlmKEVsZVV0aWwuc2VsZWN0KCcjZWRkaWUzMicrZGF0YUtleSkpe1xyXG4gICAgICAgICAgICAgICAgRWxlVXRpbC5zZWxlY3QoJyNlZGRpZTMyJytkYXRhS2V5KS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGlmKGRhdGFLZXkgPT0gJ2l0ZW0xJykgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0PSc1MHB4JztcclxuICAgICAgICAgICAgICAgIGVsc2UgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0PScxMDBweCc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YVR5cGUgPT0ncGxhaW4nKXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZVBsYWluVGV4dChkYXRhS2V5KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVR5cGUgPT0naW1hZ2UnKXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlcyhkYXRhS2V5KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoZGF0YVR5cGUgPT0gJ2ltYWdlTGluaycpe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbXMuY3JlYXRlSW1hZ2VMaW5rKGRhdGFLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdHRhY2hFbW90aW9uOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFkZHJlc3NUYXJnZXQgPSAnJywgZW1vdGlvbkFkZHJlc3M9Jyc7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXMubGVuZ3RoPT0yKXtcclxuICAgICAgICAgICAgICAgIGlmKGV2ZW50VGFyZ2V0LnNyYyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LnNyYztcclxuICAgICAgICAgICAgICAgICAgICBlbW90aW9uQWRkcmVzcz1leHBhbmRNZW51LmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCdpbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudFRhcmdldC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1swXS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1vdGlvbkFkZHJlc3M9ZXhwYW5kTWVudS5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwncGxhaW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudFRhcmdldC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVtb3Rpb25BZGRyZXNzPWV4cGFuZE1lbnUuYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsJ3BsYWluJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNlbGVjdFRleHRBcmVhID0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG92YWx1ZSA9IHNlbGVjdFRleHRBcmVhLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IHNlbGVjdFRleHRBcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICBjb25zdCBlbmRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgIHNlbGVjdFRleHRBcmVhLnZhbHVlID0gYCR7b3ZhbHVlLnNsaWNlKDAsIHN0YXJ0UG9zKX0ke2Vtb3Rpb25BZGRyZXNzfSR7b3ZhbHVlLnNsaWNlKHN0YXJ0UG9zKX1gO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVtb3Rpb25BZGRyZXNzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZHJlc3NQYXJzZTogZnVuY3Rpb24oYWRkU3RyLCBwYXR0ZXJuKXtcclxuICAgICAgICAgICAgbGV0IHN0cmluZ1JldHVybj0nJztcclxuICAgICAgICAgICAgaWYocGF0dGVybiA9PT0gJ2ltYWdlJyl7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmdSZXR1cm4gPSBgW2ltZ10ke2FkZFN0cn1bL2ltZ11gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBhdHRlcm4gPT09ICdwbGFpbicpe1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nUmV0dXJuID0gIGRlY29kZVVSSShhZGRTdHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHBhdHRlcm4gPT09ICdpbWFnZUxpbmsnKXtcclxuICAgICAgICAgICAgICAgIHN0cmluZ1JldHVybiA9ICBhZGRTdHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ1JldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY3JlYXRlTWVudSA9IHtcclxuICAgICAgICBkZWZhdWx0SUQ6ICdlbW90aW9uMDAwMCcsXHJcbiAgICAgICAgbWFpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLyptYWluIG1lbnUqL1xyXG4gICAgICAgICAgICBsZXQgbWFpbk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1haW5NZW51LmlubmVySFRNTCA9IGA8c3BhbiBpZD0nbGFyZ2VWaWV3Jz48L3NwYW4+PHNwYW4gY2xhc3M9J3N1Yk1lbnUnIHRpdGxlPSfkuLvoj5zljZUgdmVyc2lvbiAke3ZlcnNpb25Ob30nPjxiPuKRqOWbp+KRqDwvYj48L3NwYW4+YDtcclxuICAgICAgICAgICAgbWFpbk1lbnUuaWQgPSBjcmVhdGVNZW51LmRlZmF1bHRJRDtcclxuICAgICAgICAgICAgbGV0IE1lbnVMZW5ndGggPSBPYmplY3Qua2V5cyhNZW51TGlzdCkubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPE1lbnVMZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IE1lbnVLZXkgPSBPYmplY3Qua2V5cyhNZW51TGlzdClbaV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBNZW51VGl0bGUgPSBNZW51TGlzdFtNZW51S2V5XS50aXRsZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IE1lbnVUeXBlID0gTWVudUxpc3RbTWVudUtleV0uZGF0YXR5cGU7XHJcbiAgICAgICAgICAgICAgICBpZighTWVudVR5cGUgfHwgIU1lbnVUaXRsZSkgY29uc29sZS5sb2coJ2RhdGFlcnJvciAgJytNZW51S2V5KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3RNZW51ID0gY3JlYXRlTWVudS5zdWJzKE1lbnVUaXRsZSxleHBhbmRNZW51LmluaXQsTWVudUtleSwgTWVudVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQodGVzdE1lbnUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qY2xvc2UgYnV0dG9uKi9cclxuICAgICAgICAgICAgbGV0IGNsb3NlQnRuID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgICAgICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gJ1t4XSc7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsYXNzTmFtZT0gJ3N1Yk1lbnUnO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5pZCA9ICdjbG9zZUVNJztcclxuICAgICAgICAgICAgY2xvc2VCdG4ub25jbGljayA9IGNyZWF0ZU1lbnUuY2xlYXI7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXInO1xyXG4gICAgICAgICAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgICAgIC8qZHJvcGRvd24gYm94Ki9cclxuICAgICAgICAgICAgbGV0IGl0ZW1XaW5kb3cgPSBFbGVVdGlsLmNyZWF0ZSgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1XaW5kb3cuaWQgPSAndG9nZ2xlV2luZG93JztcclxuICAgICAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoaXRlbVdpbmRvdyk7XHJcbiAgICAgICAgICAgIC8qY3NzIHN0eWxlKi9cclxuICAgICAgICAgICAgbGV0IHN0eWxlSXRlbSA9IEVsZVV0aWwuY3JlYXRlKCdzdHlsZScpO1xyXG4gICAgICAgICAgICBzdHlsZUl0ZW0uaW5uZXJIVE1MID0gYCNlbW90aW9uMDAwMCB7cGFkZGluZzo1cHggNXB4OyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAgIFxcXHJcbiAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE2cHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnfSBcXFxyXG4gICAgICAgICAgICAgICAgI2xhcmdlVmlld3twb3NpdGlvbjphYnNvbHV0ZTsgYmFja2dyb3VuZDogI2ZmZjt6LWluZGV4OjUwMDA7IG9wYWNpdHk6IDAuOH0gXFxcclxuICAgICAgICAgICAgICAgICNsYXJnZVZpZXcgaW1ne3dpZHRoOiAyMDBweDsgaGVpZ2h0OjIwMHB4O30gXFxcclxuICAgICAgICAgICAgICAgICN0b2dnbGVXaW5kb3cgYXtwYWRkaW5nOiA1cHggNXB4O2xpbmUtaGVpZ2h0OjJ9IFxcXHJcbiAgICAgICAgICAgICAgICAjdG9nZ2xlV2luZG93IHtoZWlnaHQ6IDEwMHB4OyBwYWRkaW5nOiAzcHggM3B4OyBvdmVyZmxvdy14OiBhdXRvOyBtYXJnaW4tdG9wOjZweDsgXFxcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NnB4OyBib3JkZXI6MXB4IHNvbGlkICNmZjQzNTE7IGRpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTsgei1pbmRleDoyMDA7IH1cXFxyXG4gICAgICAgICAgICAgICAgLmNsaWNrSXRlbXtkaXNwbGF5OmlubGluZS1ibG9jazsgei1pbmRleDozMDA7fVxyXG4gICAgICAgICAgICAgICAgYS5zdWJCdXR7dGV4dC1kZWNvcmF0aW9uOiBub25lO2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIC5FbXN7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6IDUwcHg7aGVpZ2h0OiA1MHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrOyAgei1pbmRleDo0MDA7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS5zdWJCdXQ6aG92ZXJ7Y29sb3I6ICNmZmY7fSBcXFxyXG4gICAgICAgICAgICAgICAgYS50eHRCdG5FbW90aW9ue3RleHQtZGVjb3JhdGlvbjpub25lO30gXFxcclxuICAgICAgICAgICAgICAgIGEudHh0QnRuRW1vdGlvbjpob3ZlcntiYWNrZ3JvdW5kOiNmZjc2ODA7IGNvbG9yOiNmZmY7IH0gXFxcclxuICAgICAgICAgICAgICAgIC5zdWJNZW51e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyOyB0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzogOHB4IDhweDsgXFxcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnSGlyYWdpbm8gU2FucyBHQicsJ01pY3Jvc29mdCBZYUhlaScsJ0FyaWFsJywnc2Fucy1zZXJpZic7XFxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQzNTE7Ym9yZGVyLWNvbG9yOiAjZmY0MzUxO2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIC5zdWJNZW51OmhvdmVyLCAuc3ViTWVudTpmb2N1cywgLnN1Yk1lbnU6dmlzaXRlZHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NjgwO2JvcmRlci1jb2xvcjogI2ZmNzY4MDtjb2xvcjogI2ZmZjt9YDtcclxuICAgICAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoc3R5bGVJdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1haW5NZW51O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ViczogZnVuY3Rpb24odGl0bGUsZnVuYyxzdWJpZCxzdWJ0eXBlKXtcclxuICAgICAgICAgICAgbGV0IHN1Yk1lbnUgPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICAgICAgICBzdWJNZW51LmlkID0gc3ViaWQ7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NOYW1lPSAnc3ViTWVudSc7XHJcbiAgICAgICAgICAgIGxldCBzdWJjb250ZW50ID0gYDxhIGNsYXNzPSdzdWJCdXQnIGRhdGEta2lkPSR7c3ViaWR9IGRhdGUtdHlwZT0ke3N1YnR5cGV9PiR7dGl0bGV9PC9hPmA7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUub25jbGljayA9IGZ1bmM7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgc3ViTWVudS5pbm5lckhUTUwgPSBzdWJjb250ZW50O1xyXG4gICAgICAgICAgICByZXR1cm4gc3ViTWVudTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGVXaW5kb3cgPSBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKTtcclxuICAgICAgICAgICAgdG9nZ2xlV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZ1dpbkNoaWxkcmVuID0gdG9nZ2xlV2luZG93LmNoaWxkTm9kZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGo9MCwgbGVuID0gdG9nV2luQ2hpbGRyZW4ubGVuZ3RoIDtqPGxlbjtqKyspe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0b2dXaW5DaGlsZHJlbltqXSk7XHJcbiAgICAgICAgICAgICAgICB0b2dXaW5DaGlsZHJlbltqXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy9sZXQgdGVzdGFyZWFFbGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgIGxldCBlbGVtZW50U2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRTZXRMZW5ndGggPSBlbGVtZW50U2V0Lmxlbmd0aDtcclxuICAgICAgICBpZihlbGVtZW50U2V0TGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBubyB0ZXh0YXJlYScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3Rlc3RhcmVhRWxlU2V0LmFkZChlbGVtZW50U2V0KTtcclxuICAgICAgICBsZXQgdXNlck9wdGlvbiA9IHtcclxuICAgICAgICAgICAgdXNlcldpbmRvd0hlaWdodDogMTIwLFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0VGV4dEFyZWE6ICdsYXN0JyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCBtYWluRW1vdGlvbk1lbnUgPSBjcmVhdGVNZW51Lm1haW4oKTtcclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50U2luZ2xlIG9mIGVsZW1lbnRTZXQpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlbGVtZW50U2luZ2xlKTtcclxuICAgICAgICAgICAgZWxlbWVudFNpbmdsZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWluRW1vdGlvbk1lbnUsIGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuY29uc3QgaW1ncGF0aCA9ICcxNDg1NDEyODEwJztcclxuZnVuIChpbWdwYXRoKTtcclxuIl19
