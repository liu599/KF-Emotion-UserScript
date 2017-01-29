(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var fun = function fun() {
    var imagepath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


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

    //B站
    var biliEM = emAddrArrayHandler(1, 17, 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/2233 (', ').gif');
    emAddrArrayHandler(1, 14, 'http://smile.nekohand.moe/blogAcc/Bilibili/xds/', '.png', biliEM);
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
    var KFSmileURL = emAddrArrayHandler(1, 49, (typeof imagepath != 'undefined' ? imagepath : '') + '/post/smile/em/em', '.gif', [], true);
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

        NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
        HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
        var elementSet = Array.from(document.getElementsByTagName('textarea'));
        /*兼容性问题 By 喵拉布丁2017.01.30: document.getElementsByTagName方法返回的是HTMLCollection
        在较新版的Firefox中，HTMLCollection支持Iterator接口，所以可以用for...of循环
        而在Chrome中（我只在使用Chromium 50内核的浏览器下测试过），HTMLCollection不支持Iterator接口，不可用直接使用for...of循环
        所以建议楼主还是用老方法吧*/
        // Solution stackflow: http://stackoverflow.com/questions/22754315/foreach-loop-for-htmlcollection-elements
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
var imagepath = '1485412810';
fun(imagepath);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFDQSxJQUFNLE1BQU0sU0FBTixHQUFNLEdBQWtCO0FBQUEsUUFBakIsU0FBaUIsdUVBQVAsRUFBTzs7O0FBRTFCLFFBQU0sWUFBWSxPQUFsQjtBQUNBOzs7Ozs7OztBQVFBO0FBQ0EsYUFBUyxrQkFBVCxDQUE0QixXQUE1QixFQUF5QyxXQUF6QyxFQUFzRCxTQUF0RCxFQUFpRSxTQUFqRSxFQUFpSDtBQUFBLFlBQXBDLFNBQW9DLHVFQUF4QixFQUF3QjtBQUFBLFlBQXBCLFdBQW9CLHVFQUFOLEtBQU07O0FBQzdHLFlBQUksV0FBVyxFQUFmO0FBQUEsWUFBbUIsYUFBYSxDQUFoQztBQUNBLGFBQUksSUFBSSxJQUFFLFdBQVYsRUFBc0IsSUFBRSxXQUF4QixFQUFvQyxHQUFwQyxFQUF3QztBQUNwQyx5QkFBYSxDQUFiO0FBQ0EsZ0JBQUcsV0FBSCxFQUFlO0FBQ1gsNkJBQWMsSUFBRSxDQUFILEdBQU8sQ0FBUCxTQUFlLENBQTVCO0FBQ0g7QUFDRCw0QkFBYyxTQUFkLEdBQTBCLFVBQTFCLEdBQXVDLFNBQXZDO0FBQ0Esc0JBQVUsSUFBVixDQUFlLFFBQWY7QUFDSDtBQUNELGVBQU8sU0FBUDtBQUNIO0FBQ0Q7O0FBSUE7QUFDQSxRQUFJLFNBQVMsbUJBQW1CLENBQW5CLEVBQXNCLEVBQXRCLEVBQXlCLDJFQUF6QixFQUNtQixPQURuQixDQUFiO0FBRUEsdUJBQW1CLENBQW5CLEVBQXFCLEVBQXJCLEVBQXdCLGlEQUF4QixFQUEwRSxNQUExRSxFQUFpRixNQUFqRjtBQUNBLHVCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUF5QixpRkFBekIsRUFDbUIsT0FEbkIsRUFDMkIsTUFEM0I7QUFFQTtBQUNBLHVCQUFtQixDQUFuQixFQUFzQixFQUF0QixFQUF5QixrRUFBekIsRUFDbUIsTUFEbkIsRUFD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QixhQUE2Qjs7QUFDbEM7QUFDQSw4QkFBYyxVQUFkLENBQXlCLFlBQXpCLENBQXNDLGVBQXRDLEVBQXVELGFBQXZEO0FBQ0g7QUF4QmlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF5QnJEO0FBQ0osQ0E3WkQ7QUE4WkEsSUFBTSxZQUFZLFlBQWxCO0FBQ0EsSUFBSyxTQUFMIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgZnVuID0gKGltYWdlcGF0aD0nJykgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZlcnNpb25ObyA9ICc0LjIuMic7XHJcbiAgICAvKiBBZGRyZXNzIGZ1bmN0aW9uXHJcbiAgICAgKiBzdGFydE51bWJlcjogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBzdGFydCBudW1iZXI7XHJcbiAgICAgKiBsZW5ndGhBcnJheTogbnVtYmVyLCBpbmRpY2F0aW5nIHRoZSBhZGRyQXJyYXkgbGVuZ3RoO1xyXG4gICAgICogc3RyUHJlZml4OiBzdHJpbmcsIGFkZHJlc3MgUHJlZml4O1xyXG4gICAgICogc3RyU3VmZml4OiBzdHJpbmcsIGFkZHJlc3MgU3VmZml4O1xyXG4gICAgICogbGVhZGluZ1plcm86IGJvb2xlbiwgdHJ1ZSBmb3IgbGVhZGluZyB6ZXJvIGluIG51bWJlcjtcclxuICAgICAqIGFkZHJBcnJheTogYXJyYXksIGFkZHJlc3MgYXJyYXksIGRlZmF1bHQgZm9yIGVtcHR5O1xyXG4gICAgICovXHJcbiAgICAvLyDliJvlu7rooajmg4XljIXmlbDnu4TnmoTlh73mlbBcclxuICAgIGZ1bmN0aW9uIGVtQWRkckFycmF5SGFuZGxlcihzdGFydE51bWJlciwgbGVuZ3RoQXJyYXksIHN0clByZWZpeCwgc3RyU3VmZml4LCAgYWRkckFycmF5ID0gW10sIGxlYWRpbmdaZXJvID0gZmFsc2Upe1xyXG4gICAgICAgIGxldCBhZGRyVGVtcCA9ICcnLCBhZGRyTnVtYmVyID0gMDtcclxuICAgICAgICBmb3IobGV0IGo9c3RhcnROdW1iZXI7ajxsZW5ndGhBcnJheTtqKyspe1xyXG4gICAgICAgICAgICBhZGRyTnVtYmVyID0gajtcclxuICAgICAgICAgICAgaWYobGVhZGluZ1plcm8pe1xyXG4gICAgICAgICAgICAgICAgYWRkck51bWJlciA9IChqPjkpPyhqKTooYDAke2p9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWRkclRlbXAgPSBgJHtzdHJQcmVmaXh9JHthZGRyTnVtYmVyfSR7c3RyU3VmZml4fWA7XHJcbiAgICAgICAgICAgIGFkZHJBcnJheS5wdXNoKGFkZHJUZW1wKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFkZHJBcnJheTtcclxuICAgIH1cclxuICAgIC8qIOihqOaDheWMheWcsOWdgOaVsOaNriAqL1xyXG5cclxuXHJcblxyXG4gICAgLy9C56uZXHJcbiAgICBsZXQgYmlsaUVNID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEsIDE3LCdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQmlsaUJpbGkvMjIzMyAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJykuZ2lmJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSwxNCwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0JpbGliaWxpL3hkcy8nLCcucG5nJyxiaWxpRU0pO1xyXG4gICAgZW1BZGRyQXJyYXlIYW5kbGVyKDAsIDE0LCdodHRwOi8vc21pbGUubmVrb2hhbmQubW9lL2Jsb2dBY2MvTG92ZWxpdmVFbW90aW9uMDEvRW1Db2wvQmlsaUJpbGkvYmlsaWJpbGlUViAoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnKS5wbmcnLGJpbGlFTSk7XHJcbiAgICAvLyB0b3Jh6YWxXHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSwgMTQsJ2h0dHA6Ly9zbWlsZS5uZWtvaGFuZC5tb2UvYmxvZ0FjYy9Mb3ZlbGl2ZUVtb3Rpb24wMS9FbUNvbC90b3JhLzAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICcuanBnJyxiaWxpRU0sdHJ1ZSk7XHJcbiAgICAvL+mYv+WNoeaelyBmcm9tIOaRh+abs+eZvuWQiFxyXG4gICAgbGV0IEFrYXJpU21pbGUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSwyMSwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0R5bmFtaWMvYWthcmknLCcuZ2lmJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSw3MiwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL2FrYXJpL2FrYXJpJywnLnBuZycsQWthcmlTbWlsZSk7XHJcbiAgICAvLyBOZXcgR2FtZSBrZuaJqeWxlVxyXG4gICAgbGV0IE5ld0dhbWUgPSBlbUFkZHJBcnJheUhhbmRsZXIoMiw2NCwnaHR0cDovL25la29oYW5kLm1vZS9zcHNtaWxlLzAxU29yYS8weHgnLCcucG5nJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSwyMCwnaHR0cDovL3NzLm5la29oYW5kLm1vZS9Bc291cmNlL0Vtb3Rpb25QaWMvS0ZFTSAoJywnKS5naWYnLCBOZXdHYW1lKTtcclxuICAgIC8vIEFDRlVOXHJcbiAgICBsZXQgQUNTbWlsZTQgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSw1MSwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0FDRlVOL05ldy8nLCcucG5nJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSw0MCwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL0VtQ29sL0FDRlVOL05pbWluZy8nLCcuZ2lmJyxBQ1NtaWxlNCx0cnVlKTtcclxuICAgIC8vIEtGIOWGhee9rlxyXG4gICAgbGV0IEtGU21pbGVVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSw0OSxgJHt0eXBlb2YgaW1hZ2VwYXRoICE9ICd1bmRlZmluZWQnID8gaW1hZ2VwYXRoIDogJyd9L3Bvc3Qvc21pbGUvZW0vZW1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5naWYnLFtdLHRydWUpO1xyXG4gICAgbGV0IEtGU21pbGVDb2RlID0gZW1BZGRyQXJyYXlIYW5kbGVyKDEwLDU4LGBbczpgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICddJyk7XHJcbiAgICAvLyBsb3ZlbGl2ZeS4k+eUqOWwj1xyXG4gICAgbGV0IExvdmVsaXZlU21hbGx0YXJnZXRVUkwgPSBlbUFkZHJBcnJheUhhbmRsZXIoMSw0MSwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAyL1NtYWxsL0xvdmVsaXZlMm5kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcucG5nJyk7XHJcbiAgICBlbUFkZHJBcnJheUhhbmRsZXIoMSw0MSwnaHR0cDovL3NtaWxlLm5la29oYW5kLm1vZS9ibG9nQWNjL0xvdmVsaXZlRW1vdGlvbjAxL1NtYWxsL0xvdmVsaXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAnLnBuZycsTG92ZWxpdmVTbWFsbHRhcmdldFVSTCk7XHJcbiAgICAvLyBrZuW/q+aNt+S7o+eggSjpnIDopoHmlLnlhpnop6PmnoTotYvlgLwpXHJcbiAgICBsZXQgZnVuY3Rpb25EZXNjcmlwdGlvbiA9IFsn5Ye65ZSu6LS0c2VsbD3llK7ku7cnLCflvJXnlKgnLCAn6ZqQ6JePaGlkZT3npZ7np5jnrYnnuqcnLCfmj5LlhaXku6PnoIEnLCfliKDpmaTnur8nLCfot5Hpqaznga8nLCfmloflrZfpopzoibInLCfnspfkvZMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+S4i+WIkue6vycsJ+aWnOS9kycsJ+awtOW5s+e6vycsJ+iDjOaZr+iJsicsJ+aPkuWFpeWbvueJhyddO1xyXG4gICAgbGV0IGRlZmF1bHRGdW5jdGlvbiA9IFsnW3NlbGw9MTAwXVsvc2VsbF0nLCdbcXVvdGVdWy9xdW90ZV0nLCdbaGlkZT0xMDBdWy9oaWRlXScsJ1tjb2RlXVsvY29kZV0nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAnW3N0cmlrZV1bL3N0cmlrZV0nLCdbZmx5XVsvZmx5XScsJ1tjb2xvcj0jMDBGRjAwXVsvY29sb3JdJywnW2JdWy9iXScsJ1t1XVsvdV0nLCdbaV1bL2ldJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1tocl0nLCAnW2JhY2tjb2xvcj1dWy9iYWNrY29sb3JdJywnW2ltZ11bL2ltZ10nXTtcclxuICAgIC8vIOminOaWh+Wtl1xyXG4gICAgbGV0IGVtb2ppID0gWyco4peP44O7IDgg44O74pePKScsXHJcbiAgICAgICAgICAgICAgICAgJ+KVsCjguZHil5Ug4pa9IOKXleC5kSnila8nLCco44Kdz4njg7spJywn44Cc4pmq4pmqJywnKO++n9CU776f4omh776f0JTvvp8pJywgJyjvvL5v77y+Ke++iScgLCAnKHx8fO++n9CU776fKScsICcoYM61wrQgKScsICAnKOKVrO++n9C0776fKScsICcofHx8776f0LTvvp8pJyAsICco77+j4oiH77+jKScsICco77+jM++/oyknLCAnKO+/o++9sO+/oyknLCAnKO+/oyAuIO+/oyknLCAnKO+/o++4v++/oyknLCAnKO+/o++4tu+/oyknLCAnKCrCtM+JYCopJywgJyjjg7vPieODuyknLCco4oyS4pa94oySKScsJyjvv6Pilr3vv6PvvIknLCcoPeODu8+J44O7PSknLCco772A44O7z4njg7vCtCknLCco44Cc77+j4paz77+jKeOAnCcsJyjvvaXiiIDvvaUpJyxcclxuICAgICAgICAgICAgICAgICAnKMKw4oiAwrAp776JJywnKO+/ozPvv6MpJywn4pWuKO+/o+KWve+/oynila0nLCcoIMK0X+OCne+9gCknLCfjga7jg67jga4nLCco776J2II8IOC5ke+8ieivtuWYv+KYhu+9nicsJygmbHQ7XyZsdDspJywnKCZndDtfJmd0OyknLCcoO8KsX8KsKScsJyjilpTilqHilpQpLycsJyjvvp/QlO++n+KJoe++n9C0776fKSE/JywnzqMo776f0LTvvp87KScsJ86jKCDvv6PilqHvv6N8fCknLFxyXG4gICAgICAgICAgICAgICAgICcowrTvvJvPie+8m2ApJywn77yIL1TQlFQpLycsJyhe44O7z4njg7teICknLCco772h772lz4nvvaXvvaEpJywnKOKXj++/oyjvvbQp77+j4pePKScsJ861Pc61PSjjg47iiafiiIfiiaYp44OOJywnKMK0772lX++9pWApJywnKC1fLSMpJywn77yI77+j44G477+j77yJJywnKO+/o861KCPvv6MpIM6jJywn44O9KGDQlMK0Ke++iScsJyjila/CsOWPo8KwKeKVryjilLTigJTilLQnLCfvvIgjLV8tKeKUr+KUgeKUrycsJ18oOjPjgI3iiKApXycsJyjnrJEpJywnKOaxlyknLCco5rOjKScsJyjoi6bnrJEpJywgJyjCtOODu8+J44O7YCknLCAnKOKVr8Kw4pahwrDvvInila/vuLUg4pS74pSB4pS7JywnKOKVr+KAteKWoeKAsinila/vuLXilLvilIHilLsnLCAnKCDCtM+BYCknLCAnKCDvvp/Pie++nyknLCAnKG/vvp/Pie++n28pJywgJyjjgIBez4leKScsICco772h4peV4oiA4peV772hKScsICcvKCDil5XigL/igL/il5UgKVxcXFwnLCfOtdmpKCDCuuKIgMK6ICnbttC3JywnKO+/o861KCPvv6Mp4piG4pWw4pWuKO+/o+KWve+/oy8vLyknLFxyXG4gICAgICAgICAgICAgICAgICfvvIjil4/CtDPvvYDvvIl+4pmqJywgJ18oOtC344CN4oigKV8nLCfRhdC+0YDQvtGI0L4hJywn77y8KF5vXinvvI8nLCco4oCizIXngazigKLMhSApJywgJyjvvp/QlO++nyknLCfjgb7jgaPjgZ/jgY/jgIHlsI/lrabnlJ/jga/mnIDpq5jjgaDjgZzvvIHvvIEnLCfOtT3OtT3OtT3ilI8o44Kc44Ot44KcOynilJsnLFxyXG4gICAgICAgICAgICAgICAgICco77ybwrDjgbvCsCknLCdcdOKOneKJp+KPneKPneKJpuKOoCcsJ+ODvSjinL/vvp/ilr3vvp8p44OOJywn54SU44Gr6Iie44GE5LiK44GM44KL44K544OR44O844Kv44KI44CB6YKq5oKq44Gq55Ww5oCn5Lqk6Zqb44Gr44CB5aSp572w44KS5LiO44GI77yBJywnfOKAos+J4oCiYCknXTtcclxuXHJcblxyXG4gICAgbGV0IE1lbnVMaXN0ID0ge1xyXG4gICAgICAgIGl0ZW00OntkYXRhdHlwZTonaW1hZ2VMaW5rJywgdGl0bGU6J+WbuuaciScsYWRkcjpLRlNtaWxlVVJMLCByZWY6S0ZTbWlsZUNvZGV9LFxyXG4gICAgICAgIGl0ZW0xOntkYXRhdHlwZToncGxhaW4nLHRpdGxlOiflv6vmjbcnLGFkZHI6ZGVmYXVsdEZ1bmN0aW9uLCByZWY6ZnVuY3Rpb25EZXNjcmlwdGlvbn0sXHJcbiAgICAgICAgaXRlbTI6e2RhdGF0eXBlOidwbGFpbicsdGl0bGU6J+minOaWh+WtlycsIGFkZHI6ZW1vaml9LFxyXG4gICAgICAgIGl0ZW01OntkYXRhdHlwZTonaW1hZ2UnLHRpdGxlOidBQ0ZVTicsYWRkcjpBQ1NtaWxlNH0sXHJcbiAgICAgICAgaXRlbTY6e2RhdGF0eXBlOidpbWFnZScsdGl0bGU6J+W4uOeUqCcsYWRkcjpOZXdHYW1lfSwgIC8vXHJcbiAgICAgICAgaXRlbTc6e2RhdGF0eXBlOidpbWFnZScsdGl0bGU6J0FrYXJpJyxhZGRyOkFrYXJpU21pbGV9LCAvL0FrYXJpXHJcbiAgICAgICAgaXRlbTg6e2RhdGF0eXBlOidpbWFnZScsdGl0bGU6J0JpbGlCaWxpJyxhZGRyOmJpbGlFTX0sIC8vQuermVxyXG4gICAgICAgIGl0ZW0zOntkYXRhdHlwZTonaW1hZ2UnLHRpdGxlOidMb3ZlTGl2ZScsYWRkcjpMb3ZlbGl2ZVNtYWxsdGFyZ2V0VVJMfVxyXG4gICAgfTtcclxuXHJcbiAgICAvKiBFdmVudCDlh73mlbAgKi9cclxuICAgIGNvbnN0IEV2ZW50VXRpbCA9IHtcclxuICAgICAgICBnZXRFdmVudDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQgPyBldmVudCA6IHdpbmRvdy5ldmVudDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFRhcmdldDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpe1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKXtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkSGFuZGxlcjogZnVuY3Rpb24oZWxlbWVudCwgdHlwZSwgaGFuZGxlcil7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTsgIC8vRE9NMlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgaGFuZGxlcik7ICAvL0lFXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50WydvbicgKyB0eXBlXSA9IGhhbmRsZXI7ICAvL0RPTSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUhhbmRsZXI6IGZ1bmN0aW9uKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIpe1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7IC8vRE9NMlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgdHlwZSwgaGFuZGxlcik7IC8vSUVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbJ29uJyArIHR5cGVdID0gbnVsbDsgLy9ET00gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qRWxlbWVudCDlh73mlbAqL1xyXG4gICAgY29uc3QgRWxlVXRpbCA9IHtcclxuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKGVsZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RJRDogZnVuY3Rpb24oZWxlKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLypDb29raWXlpITnkIYqL1xyXG4gICAgY29uc3QgQ29va2llVXRpbCA9IHtcclxuICAgICAgICBnZXRDb29raWVzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgQ29va2llT2JqID0ge307XHJcbiAgICAgICAgICAgIGxldCB0aGlzQ29va2llID0gZG9jdW1lbnQuY29va2llO1xyXG4gICAgICAgICAgICBpZih0aGlzQ29va2llID09PSAnJykgcmV0dXJuIENvb2tpZU9iajtcclxuICAgICAgICAgICAgbGV0IGxpc3RPYmogPSB0aGlzQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wLCBsZW49bGlzdE9iai5sZW5ndGg7aTxsZW47aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCB3ID0gbGlzdE9ialtpXS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQod1swXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCcnKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQod1sxXSk7XHJcbiAgICAgICAgICAgICAgICBDb29raWVPYmpbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQ29va2llT2JqO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXNDb29raWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0Q29va2llczogZnVuY3Rpb24obmFtZSx2YWx1ZSxwYXRoLGlEYXksZG9tYWluLHNlY3VyZSl7XHJcbiAgICAgICAgICAgIGxldCBvRGF0ZT1uZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBvRGF0ZS5zZXREYXRlKG9EYXRlLmdldERhdGUoKStpRGF5KTtcclxuICAgICAgICAgICAgbGV0IGNvb2tpZSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChuYW1lKX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWA7XHJcbiAgICAgICAgICAgIGlmIChpRGF5KSB7XHJcbiAgICAgICAgICAgICAgICBgJHtjb29raWV9O2V4cGlyZXM9JHtvRGF0ZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBgJHtjb29raWV9O3BhdGg9JHtwYXRofWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xyXG4gICAgICAgICAgICAgICAgYCR7Y29va2llfTtkb21haW49JHtkb21haW59YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VjdXJlKSB7XHJcbiAgICAgICAgICAgICAgICBgJHtjb29raWV9O3NlY3VyZT0ke3NlY3VyZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyrmqKHlnZcqL1xyXG4gICAgY29uc3QgY3JlYXRlSXRlbXMgPSB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgICAgICBsZXQgSXRlbUNvbnRhaW5lciA9IEVsZVV0aWwuY3JlYXRlKCdkaXYnKTtcclxuICAgICAgICAgICAgSXRlbUNvbnRhaW5lci5pZCA9IGBlZGRpZTMyJHtrZXl9YDtcclxuICAgICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0PScxMDBweCc7XHJcbiAgICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLmFwcGVuZENoaWxkKEl0ZW1Db250YWluZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gSXRlbUNvbnRhaW5lcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZUltYWdlczpmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgICAgICBsZXQgb3V0ZXJDb250YWluZXIgPSBjcmVhdGVJdGVtcy5jcmVhdGVDb250YWluZXIoa2V5KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhNZW51TGlzdFtrZXldKTtcclxuICAgICAgICAgICAgbGV0IGltZ0xpc3QgPSBNZW51TGlzdFtrZXldLmFkZHI7XHJcbiAgICAgICAgICAgIGxldCBpbWdMZW5ndGggPSBpbWdMaXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKGxldCBrPTA7azxpbWdMZW5ndGg7aysrKXtcclxuICAgICAgICAgICAgICAgIGxldCBkaXZFbGVtZW50ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgPSAnY2xpY2tJdGVtJztcclxuICAgICAgICAgICAgICAgIGxldCBpbWdJdGVtID0gRWxlVXRpbC5jcmVhdGUoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAnRW1zJztcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0ub25jbGljayA9IGV4cGFuZE1lbnUuYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0ub25tb3VzZW92ZXIgPSBtb3VzZU92ZXJBY3Rpb24uc2hvd0ltZztcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0ub25tb3VzZW91dCA9bW91c2VPdmVyQWN0aW9uLmNsZWFySW1nO1xyXG4gICAgICAgICAgICAgICAgLy9pbWdJdGVtLnN0eWxlLmNzc1RleHQgPSAnY3Vyc29yOnBvaW50ZXI7cGFkZGluZzogMTBweCAxMHB4OndpZHRoOiA3NXB4O2hlaWdodDogNzVweDsnO1xyXG4gICAgICAgICAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICAgICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVQbGFpblRleHQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgIGxldCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICAgICAgICBsZXQgdHh0TGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgICAgICAgbGV0IHR4dExlbmd0aCA9IHR4dExpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IobGV0IGs9MDtrPHR4dExlbmd0aDtrKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHR4dEl0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnc3BhbicpO1xyXG4gICAgICAgICAgICAgICAgdHh0SXRlbS5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyOyBtYXJnaW46IDEwcHggMTBweDsnO1xyXG4gICAgICAgICAgICAgICAgdHh0SXRlbS5pbm5lckhUTUwgPSBgPGEgZGF0YS1zaWduPSR7ZW5jb2RlVVJJKHR4dExpc3Rba10pfSBjbGFzcz0ndHh0QnRuRW1vdGlvbic+JHt0eHRMaXN0W2tdfTwvYT5gO1xyXG4gICAgICAgICAgICAgICAgaWYoTWVudUxpc3Rba2V5XS5yZWYpe1xyXG4gICAgICAgICAgICAgICAgICAgIHR4dEl0ZW0uaW5uZXJIVE1MID0gYDxhIGRhdGEtc2lnbj0ke2VuY29kZVVSSSh0eHRMaXN0W2tdKX0gY2xhc3M9J3R4dEJ0bkVtb3Rpb24nPiR7TWVudUxpc3Rba2V5XS5yZWZba119PC9hPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jykuc3R5bGUuaGVpZ2h0PSc1MHB4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHR4dEl0ZW0ub25jbGljayA9IGV4cGFuZE1lbnUuYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICAgICAgICAgIHR4dEl0ZW0uc3R5bGUuY3NzVGV4dCA9ICdjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOiAxMHB4IDEwcHg6d2lkdGg6IDUwcHg7JztcclxuICAgICAgICAgICAgICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHR4dEl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVJbWFnZUxpbms6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgICAgIGxldCBvdXRlckNvbnRhaW5lciA9IGNyZWF0ZUl0ZW1zLmNyZWF0ZUNvbnRhaW5lcihrZXkpO1xyXG4gICAgICAgICAgICBsZXQgaW1nTGlzdCA9IE1lbnVMaXN0W2tleV0uYWRkcjtcclxuICAgICAgICAgICAgbGV0IHJlZkxpc3QgPSBNZW51TGlzdFtrZXldLnJlZjtcclxuICAgICAgICAgICAgbGV0IGltZ0xlbmd0aCA9IGltZ0xpc3QubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IodmFyIGs9MDtrPGltZ0xlbmd0aDtrKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZ0l0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpbWdJdGVtLmRhdGFzZXQubGluayA9ICByZWZMaXN0W2tdO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5zcmMgPSBpbWdMaXN0W2tdO1xyXG4gICAgICAgICAgICAgICAgaW1nSXRlbS5jbGFzc05hbWUgPSAnRW1zJztcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0ub25jbGljayA9IGV4cGFuZE1lbnUuYXR0YWNoRW1vdGlvbjtcclxuICAgICAgICAgICAgICAgIGltZ0l0ZW0uc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogNTBweCAhaW1wb3J0YW50O2hlaWdodDogNTBweCAhaW1wb3J0YW50Oyc7XHJcbiAgICAgICAgICAgICAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBtb3VzZU92ZXJBY3Rpb24gPSB7XHJcbiAgICAgICAgc2hvd0ltZzogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBsZXQgZXZlbnRUYXJnZXQgPSBFdmVudFV0aWwuZ2V0VGFyZ2V0KGV2ZW50KTtcclxuICAgICAgICAgICAgaWYoIWV2ZW50VGFyZ2V0LnNyYyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbGFyZ2VWaWV3Q29udGFpbmVyID0gRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jyk7XHJcbiAgICAgICAgICAgIGxldCBbc2Nyb2xsVG9wVmFsdWUsc2Nyb2xsTGVmdFZhbHVlXSA9IFtkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnRdO1xyXG4gICAgICAgICAgICBsYXJnZVZpZXdDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7ZXZlbnRUYXJnZXQuc3JjfSAvPmA7XHJcbiAgICAgICAgICAgIGxhcmdlVmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFkgKyBzY3JvbGxUb3BWYWx1ZSArIDIwfXB4YDtcclxuICAgICAgICAgICAgbGFyZ2VWaWV3Q29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYICsgc2Nyb2xsTGVmdFZhbHVlfXB4YDtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhbZXZlbnQuY2xpZW50WSxldmVudC5jbGllbnRYXSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coW0VsZVV0aWwuc2VsZWN0SUQoJ2xhcmdlVmlldycpLnN0eWxlLnRvcCxFbGVVdGlsLnNlbGVjdElEKCdsYXJnZVZpZXcnKS5zdHlsZS5sZWZ0XSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coW2RvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJJbWc6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgRWxlVXRpbC5zZWxlY3RJRCgnbGFyZ2VWaWV3Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXhwYW5kTWVudSA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGNyZWF0ZU1lbnUuY2xlYXIoKTtcclxuICAgICAgICAgICAgbGV0IGV2ZW50VGFyZ2V0ID0gRXZlbnRVdGlsLmdldFRhcmdldChldmVudCk7XHJcbiAgICAgICAgICAgIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBFbGVVdGlsLnNlbGVjdElEKCd0b2dnbGVXaW5kb3cnKS5zdHlsZS53aWR0aD0gRWxlVXRpbC5zZWxlY3QoJ3RleHRhcmVhJykuc3R5bGUud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBkYXRhVHlwZSA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMl0ubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgZGF0YUtleSA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0ubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICBpZihFbGVVdGlsLnNlbGVjdCgnI2VkZGllMzInK2RhdGFLZXkpKXtcclxuICAgICAgICAgICAgICAgIEVsZVV0aWwuc2VsZWN0KCcjZWRkaWUzMicrZGF0YUtleSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhS2V5ID09ICdpdGVtMScpIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodD0nNTBweCc7XHJcbiAgICAgICAgICAgICAgICBlbHNlIEVsZVV0aWwuc2VsZWN0SUQoJ3RvZ2dsZVdpbmRvdycpLnN0eWxlLmhlaWdodD0nMTAwcHgnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGFUeXBlID09J3BsYWluJyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVQbGFpblRleHQoZGF0YUtleSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFUeXBlID09J2ltYWdlJyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtcy5jcmVhdGVJbWFnZXMoZGF0YUtleSk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGRhdGFUeXBlID09ICdpbWFnZUxpbmsnKXtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1zLmNyZWF0ZUltYWdlTGluayhkYXRhS2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0YWNoRW1vdGlvbjogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IEV2ZW50VXRpbC5nZXRUYXJnZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhZGRyZXNzVGFyZ2V0ID0gJycsIGVtb3Rpb25BZGRyZXNzPScnO1xyXG4gICAgICAgICAgICBpZihldmVudFRhcmdldC5hdHRyaWJ1dGVzLmxlbmd0aD09Mil7XHJcbiAgICAgICAgICAgICAgICBpZihldmVudFRhcmdldC5zcmMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NUYXJnZXQgPSBldmVudFRhcmdldC5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1vdGlvbkFkZHJlc3M9ZXhwYW5kTWVudS5hZGRyZXNzUGFyc2UoYWRkcmVzc1RhcmdldCwnaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1RhcmdldCA9IGV2ZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtb3Rpb25BZGRyZXNzPWV4cGFuZE1lbnUuYWRkcmVzc1BhcnNlKGFkZHJlc3NUYXJnZXQsJ3BsYWluJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRUYXJnZXQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzVGFyZ2V0ID0gZXZlbnRUYXJnZXQuYXR0cmlidXRlc1swXS5ub2RlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbW90aW9uQWRkcmVzcz1leHBhbmRNZW51LmFkZHJlc3NQYXJzZShhZGRyZXNzVGFyZ2V0LCdwbGFpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RUZXh0QXJlYSA9IEVsZVV0aWwuc2VsZWN0KCd0ZXh0YXJlYScpO1xyXG4gICAgICAgICAgICBjb25zdCBvdmFsdWUgPSBzZWxlY3RUZXh0QXJlYS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBzZWxlY3RUZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgY29uc3QgZW5kUG9zID0gc2VsZWN0VGV4dEFyZWEuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgICAgICBzZWxlY3RUZXh0QXJlYS52YWx1ZSA9IGAke292YWx1ZS5zbGljZSgwLCBzdGFydFBvcyl9JHtlbW90aW9uQWRkcmVzc30ke292YWx1ZS5zbGljZShzdGFydFBvcyl9YDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbW90aW9uQWRkcmVzcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRyZXNzUGFyc2U6IGZ1bmN0aW9uKGFkZFN0ciwgcGF0dGVybil7XHJcbiAgICAgICAgICAgIGxldCBzdHJpbmdSZXR1cm49Jyc7XHJcbiAgICAgICAgICAgIGlmKHBhdHRlcm4gPT09ICdpbWFnZScpe1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nUmV0dXJuID0gYFtpbWddJHthZGRTdHJ9Wy9pbWddYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwYXR0ZXJuID09PSAncGxhaW4nKXtcclxuICAgICAgICAgICAgICAgIHN0cmluZ1JldHVybiA9ICBkZWNvZGVVUkkoYWRkU3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihwYXR0ZXJuID09PSAnaW1hZ2VMaW5rJyl7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmdSZXR1cm4gPSAgYWRkU3RyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdSZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNyZWF0ZU1lbnUgPSB7XHJcbiAgICAgICAgZGVmYXVsdElEOiAnZW1vdGlvbjAwMDAnLFxyXG4gICAgICAgIG1haW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8qbWFpbiBtZW51Ki9cclxuICAgICAgICAgICAgbGV0IG1haW5NZW51ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgICAgICBtYWluTWVudS5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9J2xhcmdlVmlldyc+PC9zcGFuPjxzcGFuIGNsYXNzPSdzdWJNZW51JyB0aXRsZT0n5Li76I+c5Y2VIHZlcnNpb24gJHt2ZXJzaW9uTm99Jz48Yj7ikajlm6fikag8L2I+PC9zcGFuPmA7XHJcbiAgICAgICAgICAgIG1haW5NZW51LmlkID0gY3JlYXRlTWVudS5kZWZhdWx0SUQ7XHJcbiAgICAgICAgICAgIGxldCBNZW51TGVuZ3RoID0gT2JqZWN0LmtleXMoTWVudUxpc3QpLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxNZW51TGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBNZW51S2V5ID0gT2JqZWN0LmtleXMoTWVudUxpc3QpW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgTWVudVRpdGxlID0gTWVudUxpc3RbTWVudUtleV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBNZW51VHlwZSA9IE1lbnVMaXN0W01lbnVLZXldLmRhdGF0eXBlO1xyXG4gICAgICAgICAgICAgICAgaWYoIU1lbnVUeXBlIHx8ICFNZW51VGl0bGUpIGNvbnNvbGUubG9nKCdkYXRhZXJyb3IgICcrTWVudUtleSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0TWVudSA9IGNyZWF0ZU1lbnUuc3VicyhNZW51VGl0bGUsZXhwYW5kTWVudS5pbml0LE1lbnVLZXksIE1lbnVUeXBlKTtcclxuICAgICAgICAgICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKHRlc3RNZW51KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKmNsb3NlIGJ1dHRvbiovXHJcbiAgICAgICAgICAgIGxldCBjbG9zZUJ0biA9IEVsZVV0aWwuY3JlYXRlKCdzcGFuJyk7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLmlubmVySFRNTCA9ICdbeF0nO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGFzc05hbWU9ICdzdWJNZW51JztcclxuICAgICAgICAgICAgY2xvc2VCdG4uaWQgPSAnY2xvc2VFTSc7XHJcbiAgICAgICAgICAgIGNsb3NlQnRuLm9uY2xpY2sgPSBjcmVhdGVNZW51LmNsZWFyO1xyXG4gICAgICAgICAgICBjbG9zZUJ0bi5zdHlsZS5jc3NUZXh0ID0gJ2N1cnNvcjpwb2ludGVyJztcclxuICAgICAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICAgICAgICAvKmRyb3Bkb3duIGJveCovXHJcbiAgICAgICAgICAgIGxldCBpdGVtV2luZG93ID0gRWxlVXRpbC5jcmVhdGUoJ2RpdicpO1xyXG4gICAgICAgICAgICBpdGVtV2luZG93LmlkID0gJ3RvZ2dsZVdpbmRvdyc7XHJcbiAgICAgICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGl0ZW1XaW5kb3cpO1xyXG4gICAgICAgICAgICAvKmNzcyBzdHlsZSovXHJcbiAgICAgICAgICAgIGxldCBzdHlsZUl0ZW0gPSBFbGVVdGlsLmNyZWF0ZSgnc3R5bGUnKTtcclxuICAgICAgICAgICAgc3R5bGVJdGVtLmlubmVySFRNTCA9IGAjZW1vdGlvbjAwMDAge3BhZGRpbmc6NXB4IDVweDsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgICBcXFxyXG4gICAgICAgICAgICAgICAgZm9udDogMTJweC8xNnB4ICdIaXJhZ2lubyBTYW5zIEdCJywnTWljcm9zb2Z0IFlhSGVpJywnQXJpYWwnLCdzYW5zLXNlcmlmJ30gXFxcclxuICAgICAgICAgICAgICAgICNsYXJnZVZpZXd7cG9zaXRpb246YWJzb2x1dGU7IGJhY2tncm91bmQ6ICNmZmY7ei1pbmRleDo1MDAwOyBvcGFjaXR5OiAwLjh9IFxcXHJcbiAgICAgICAgICAgICAgICAjbGFyZ2VWaWV3IGltZ3t3aWR0aDogMjAwcHg7IGhlaWdodDoyMDBweDt9IFxcXHJcbiAgICAgICAgICAgICAgICAjdG9nZ2xlV2luZG93IGF7cGFkZGluZzogNXB4IDVweDtsaW5lLWhlaWdodDoyfSBcXFxyXG4gICAgICAgICAgICAgICAgI3RvZ2dsZVdpbmRvdyB7aGVpZ2h0OiAxMDBweDsgcGFkZGluZzogM3B4IDNweDsgb3ZlcmZsb3cteDogYXV0bzsgbWFyZ2luLXRvcDo2cHg7IFxcXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjZweDsgYm9yZGVyOjFweCBzb2xpZCAjZmY0MzUxOyBkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7IHotaW5kZXg6MjAwOyB9XFxcclxuICAgICAgICAgICAgICAgIC5jbGlja0l0ZW17ZGlzcGxheTppbmxpbmUtYmxvY2s7IHotaW5kZXg6MzAwO31cclxuICAgICAgICAgICAgICAgIGEuc3ViQnV0e3RleHQtZGVjb3JhdGlvbjogbm9uZTtjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICAuRW1ze2N1cnNvcjpwb2ludGVyO3dpZHRoOiA1MHB4O2hlaWdodDogNTBweDtkaXNwbGF5OmlubGluZS1ibG9jazsgIHotaW5kZXg6NDAwO30gXFxcclxuICAgICAgICAgICAgICAgIGEuc3ViQnV0OmhvdmVye2NvbG9yOiAjZmZmO30gXFxcclxuICAgICAgICAgICAgICAgIGEudHh0QnRuRW1vdGlvbnt0ZXh0LWRlY29yYXRpb246bm9uZTt9IFxcXHJcbiAgICAgICAgICAgICAgICBhLnR4dEJ0bkVtb3Rpb246aG92ZXJ7YmFja2dyb3VuZDojZmY3NjgwOyBjb2xvcjojZmZmOyB9IFxcXHJcbiAgICAgICAgICAgICAgICAuc3ViTWVudXtkaXNwbGF5OmlubGluZS1ibG9jaztjdXJzb3I6cG9pbnRlcjsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6IDhweCA4cHg7IFxcXHJcbiAgICAgICAgICAgICAgICBmb250OiAxMnB4LzE2cHggJ0hpcmFnaW5vIFNhbnMgR0InLCdNaWNyb3NvZnQgWWFIZWknLCdBcmlhbCcsJ3NhbnMtc2VyaWYnO1xcXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MzUxO2JvcmRlci1jb2xvcjogI2ZmNDM1MTtjb2xvcjogI2ZmZjt9IFxcXHJcbiAgICAgICAgICAgICAgICAuc3ViTWVudTpob3ZlciwgLnN1Yk1lbnU6Zm9jdXMsIC5zdWJNZW51OnZpc2l0ZWR7YmFja2dyb3VuZC1jb2xvcjogI2ZmNzY4MDtib3JkZXItY29sb3I6ICNmZjc2ODA7Y29sb3I6ICNmZmY7fWA7XHJcbiAgICAgICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKHN0eWxlSXRlbSk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYWluTWVudTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1YnM6IGZ1bmN0aW9uKHRpdGxlLGZ1bmMsc3ViaWQsc3VidHlwZSl7XHJcbiAgICAgICAgICAgIGxldCBzdWJNZW51ID0gRWxlVXRpbC5jcmVhdGUoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3ViTWVudS5pZCA9IHN1YmlkO1xyXG4gICAgICAgICAgICBzdWJNZW51LmNsYXNzTmFtZT0gJ3N1Yk1lbnUnO1xyXG4gICAgICAgICAgICBsZXQgc3ViY29udGVudCA9IGA8YSBjbGFzcz0nc3ViQnV0JyBkYXRhLWtpZD0ke3N1YmlkfSBkYXRlLXR5cGU9JHtzdWJ0eXBlfT4ke3RpdGxlfTwvYT5gO1xyXG4gICAgICAgICAgICBzdWJNZW51Lm9uY2xpY2sgPSBmdW5jO1xyXG4gICAgICAgICAgICBzdWJNZW51LnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuaW5uZXJIVE1MID0gc3ViY29udGVudDtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Yk1lbnU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhcjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlV2luZG93ID0gRWxlVXRpbC5zZWxlY3RJRCgndG9nZ2xlV2luZG93Jyk7XHJcbiAgICAgICAgICAgIHRvZ2dsZVdpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBjb25zdCB0b2dXaW5DaGlsZHJlbiA9IHRvZ2dsZVdpbmRvdy5jaGlsZE5vZGVzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqPTAsIGxlbiA9IHRvZ1dpbkNoaWxkcmVuLmxlbmd0aCA7ajxsZW47aisrKXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codG9nV2luQ2hpbGRyZW5bal0pO1xyXG4gICAgICAgICAgICAgICAgdG9nV2luQ2hpbGRyZW5bal0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIC8vbGV0IHRlc3RhcmVhRWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuXHJcbiAgICAgICAgTm9kZUxpc3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBBcnJheS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgICAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGxldCBlbGVtZW50U2V0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGV4dGFyZWEnKSk7XHJcbiAgICAgICAgLyrlhbzlrrnmgKfpl67popggQnkg5Za15ouJ5biD5LiBMjAxNy4wMS4zMDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWXmlrnms5Xov5Tlm57nmoTmmK9IVE1MQ29sbGVjdGlvblxyXG7lnKjovoPmlrDniYjnmoRGaXJlZm945Lit77yMSFRNTENvbGxlY3Rpb27mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOaJgOS7peWPr+S7peeUqGZvci4uLm9m5b6q546vXHJcbuiAjOWcqENocm9tZeS4re+8iOaIkeWPquWcqOS9v+eUqENocm9taXVtIDUw5YaF5qC455qE5rWP6KeI5Zmo5LiL5rWL6K+V6L+H77yJ77yMSFRNTENvbGxlY3Rpb27kuI3mlK/mjIFJdGVyYXRvcuaOpeWPo++8jOS4jeWPr+eUqOebtOaOpeS9v+eUqGZvci4uLm9m5b6q546vXHJcbuaJgOS7peW7uuiurualvOS4u+i/mOaYr+eUqOiAgeaWueazleWQpyovXHJcbiAgICAgICAgLy8gU29sdXRpb24gc3RhY2tmbG93OiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIyNzU0MzE1L2ZvcmVhY2gtbG9vcC1mb3ItaHRtbGNvbGxlY3Rpb24tZWxlbWVudHNcclxuICAgICAgICBsZXQgZWxlbWVudFNldExlbmd0aCA9IGVsZW1lbnRTZXQubGVuZ3RoO1xyXG4gICAgICAgIGlmKGVsZW1lbnRTZXRMZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHRleHRhcmVhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGVzdGFyZWFFbGVTZXQuYWRkKGVsZW1lbnRTZXQpO1xyXG4gICAgICAgIGxldCB1c2VyT3B0aW9uID0ge1xyXG4gICAgICAgICAgICB1c2VyV2luZG93SGVpZ2h0OiAxMjAsXHJcbiAgICAgICAgICAgIHVzZXJTZWxlY3RUZXh0QXJlYTogJ2xhc3QnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IG1haW5FbW90aW9uTWVudSA9IGNyZWF0ZU1lbnUubWFpbigpO1xyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnRTaW5nbGUgb2YgZWxlbWVudFNldCkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnRTaW5nbGUpO1xyXG4gICAgICAgICAgICBlbGVtZW50U2luZ2xlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1haW5FbW90aW9uTWVudSwgZWxlbWVudFNpbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5jb25zdCBpbWFnZXBhdGggPSAnMTQ4NTQxMjgxMCc7XHJcbmZ1biAoaW1hZ2VwYXRoKTtcclxuIl19
