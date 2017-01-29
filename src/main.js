'use strict';
const fun = (imagepath='') => {

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
    function emAddrArrayHandler(startNumber, lengthArray, strPrefix, strSuffix,  addrArray = [], leadingZero = false){
        let addrTemp = '', addrNumber = 0;
        for(let j=startNumber;j<lengthArray;j++){
            addrNumber = j;
            if(leadingZero){
                addrNumber = (j>9)?(j):(`0${j}`);
            }
            addrTemp = `${strPrefix}${addrNumber}${strSuffix}`;
            addrArray.push(addrTemp);
        }
        return addrArray;
    }
    /* 表情包地址数据 */



    //B站
    let biliEM = emAddrArrayHandler(1, 17,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/2233 (',
                                    ').gif');
    emAddrArrayHandler(1,14,'http://smile.nekohand.moe/blogAcc/Bilibili/xds/','.png',biliEM);
    emAddrArrayHandler(0, 14,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/bilibiliTV (',
                       ').png',biliEM);
    // tora酱
    emAddrArrayHandler(1, 14,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/tora/0',
                       '.jpg',biliEM,true);
    //阿卡林 from 摇曳百合
    let AkariSmile = emAddrArrayHandler(1,21,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Dynamic/akari','.gif');
    emAddrArrayHandler(1,72,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/akari/akari','.png',AkariSmile);
    // New Game kf扩展
    let NewGame = emAddrArrayHandler(2,64,'http://nekohand.moe/spsmile/01Sora/0xx','.png');
    emAddrArrayHandler(1,20,'http://ss.nekohand.moe/Asource/EmotionPic/KFEM (',').gif', NewGame);
    // ACFUN
    let ACSmile4 = emAddrArrayHandler(1,51,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/New/','.png');
    emAddrArrayHandler(1,40,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/Niming/','.gif',ACSmile4,true);
    // KF 内置
    let KFSmileURL = emAddrArrayHandler(1,49,`${typeof imagepath != 'undefined' ? imagepath : ''}/post/smile/em/em`,
                                        '.gif',[],true);
    let KFSmileCode = emAddrArrayHandler(10,58,`[s:`,
                                         ']');
    // lovelive专用小
    let LoveliveSmalltargetURL = emAddrArrayHandler(1,41,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Small/Lovelive2nd',
                                                    '.png');
    emAddrArrayHandler(1,41,'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Small/Lovelive',
                       '.png',LoveliveSmalltargetURL);
    // kf快捷代码(需要改写解构赋值)
    let functionDescription = ['出售贴sell=售价','引用', '隐藏hide=神秘等级','插入代码','删除线','跑马灯','文字颜色','粗体',
                               '下划线','斜体','水平线','背景色','插入图片'];
    let defaultFunction = ['[sell=100][/sell]','[quote][/quote]','[hide=100][/hide]','[code][/code]',
                           '[strike][/strike]','[fly][/fly]','[color=#00FF00][/color]','[b][/b]','[u][/u]','[i][/i]',
                           '[hr]', '[backcolor=][/backcolor]','[img][/img]'];
    // 颜文字
    let emoji = ['(●・ 8 ・●)',
                 '╰(๑◕ ▽ ◕๑)╯','(ゝω・)','〜♪♪','(ﾟДﾟ≡ﾟДﾟ)', '(＾o＾)ﾉ' , '(|||ﾟДﾟ)', '(`ε´ )',  '(╬ﾟдﾟ)', '(|||ﾟдﾟ)' , '(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)','(⌒▽⌒)','(￣▽￣）','(=・ω・=)','(｀・ω・´)','(〜￣△￣)〜','(･∀･)',
                 '(°∀°)ﾉ','(￣3￣)','╮(￣▽￣)╭','( ´_ゝ｀)','のヮの','(ﾉ؂< ๑）诶嘿☆～','(&lt;_&lt;)','(&gt;_&gt;)','(;¬_¬)','(▔□▔)/','(ﾟДﾟ≡ﾟдﾟ)!?','Σ(ﾟдﾟ;)','Σ( ￣□￣||)',
                 '(´；ω；`)','（/TДT)/','(^・ω・^ )','(｡･ω･｡)','(●￣(ｴ)￣●)','ε=ε=(ノ≧∇≦)ノ','(´･_･`)','(-_-#)','（￣へ￣）','(￣ε(#￣) Σ','ヽ(`Д´)ﾉ','(╯°口°)╯(┴—┴','（#-_-)┯━┯','_(:3」∠)_','(笑)','(汗)','(泣)','(苦笑)', '(´・ω・`)', '(╯°□°）╯︵ ┻━┻','(╯‵□′)╯︵┻━┻', '( ´ρ`)', '( ﾟωﾟ)', '(oﾟωﾟo)', '(　^ω^)', '(｡◕∀◕｡)', '/( ◕‿‿◕ )\\','ε٩( º∀º )۶з','(￣ε(#￣)☆╰╮(￣▽￣///)',
                 '（●´3｀）~♪', '_(:з」∠)_','хорошо!','＼(^o^)／','(•̅灬•̅ )', '(ﾟДﾟ)','まったく、小学生は最高だぜ！！','ε=ε=ε=┏(゜ロ゜;)┛',
                 '(；°ほ°)','	⎝≧⏝⏝≦⎠','ヽ(✿ﾟ▽ﾟ)ノ','焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！','|•ω•`)'];


    let MenuList = {
        item4:{datatype:'imageLink', title:'固有',addr:KFSmileURL, ref:KFSmileCode},
        item1:{datatype:'plain',title:'快捷',addr:defaultFunction, ref:functionDescription},
        item2:{datatype:'plain',title:'颜文字', addr:emoji},
        item5:{datatype:'image',title:'ACFUN',addr:ACSmile4},
        item6:{datatype:'image',title:'常用',addr:NewGame},  //
        item7:{datatype:'image',title:'Akari',addr:AkariSmile}, //Akari
        item8:{datatype:'image',title:'BiliBili',addr:biliEM}, //B站
        item3:{datatype:'image',title:'LoveLive',addr:LoveliveSmalltargetURL}
    };

    /* Event 函数 */
    const EventUtil = {
        getEvent: function(event){
            return event ? event : window.event;
        },
        getTarget: function(event){
            return event.target || event.srcElement;
        },
        preventDefault: function(event){
            if (event.preventDefault){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        stopPropagation: function(event){
            if (event.stopPropagation){
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        addHandler: function(element, type, handler){
            if (element.addEventListener){
                element.addEventListener(type, handler, false);  //DOM2
            } else if (element.attachEvent){
                element.attachEvent('on' + type, handler);  //IE
            } else {
                element['on' + type] = handler;  //DOM 0
            }
        },
        removeHandler: function(element, type, handler){
            if (element.removeEventListener){
                element.removeEventListener(type, handler, false); //DOM2
            } else if (element.detachEvent){
                element.detachEvent('on' + type, handler); //IE
            } else {
                element['on' + type] = null; //DOM 0
            }
        }
    };
    /*Element 函数*/
    const EleUtil = {
        create: function(ele){
            return document.createElement(ele);
        },
        selectID: function(ele){
            return document.getElementById(ele);
        },
        select: function(selector){
            return document.querySelector(selector);
        }
    };

    /*Cookie处理*/
    const CookieUtil = {
        getCookies: function(){
            let CookieObj = {};
            let thisCookie = document.cookie;
            if(thisCookie === '') return CookieObj;
            let listObj = thisCookie.split(';');
            for(let i=0, len=listObj.length;i<len;i++){
                let w = listObj[i].split('=');
                let name = decodeURIComponent(w[0].replace(/^\s+|\s+$/g,''));
                let value = decodeURIComponent(w[1]);
                CookieObj[name] = value;
            }
            return CookieObj;
            //console.log(thisCookie);
        },
        setCookies: function(name,value,path,iDay,domain,secure){
            let oDate=new Date();
            oDate.setDate(oDate.getDate()+iDay);
            let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
            if (iDay) {
                `${cookie};expires=${oDate}`;
            }
            if (path) {
                `${cookie};path=${path}`;
            }
            if (domain) {
                `${cookie};domain=${domain}`;
            }
            if (secure) {
                `${cookie};secure=${secure}`;
            }
            document.cookie = cookie;
        }
    };
    /*模块*/
    const createItems = {
        createContainer: function(key){
            let ItemContainer = EleUtil.create('div');
            ItemContainer.id = `eddie32${key}`;
            EleUtil.selectID('toggleWindow').style.height='100px';
            EleUtil.selectID('toggleWindow').appendChild(ItemContainer);
            return ItemContainer;
        },
        createImages:function(key){
            let outerContainer = createItems.createContainer(key);
            //console.log(MenuList[key]);
            let imgList = MenuList[key].addr;
            let imgLength = imgList.length;
            for(let k=0;k<imgLength;k++){
                let divElement = EleUtil.create('div');
                divElement.className = 'clickItem';
                let imgItem = EleUtil.create('img');
                imgItem.src = imgList[k];
                imgItem.className = 'Ems';
                imgItem.onclick = expandMenu.attachEmotion;
                imgItem.onmouseover = mouseOverAction.showImg;
                imgItem.onmouseout =mouseOverAction.clearImg;
                //imgItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 75px;height: 75px;';
                divElement.appendChild(imgItem);
                outerContainer.appendChild(divElement);
            }
        },
        createPlainText: function(key){
            let outerContainer = createItems.createContainer(key);
            let txtList = MenuList[key].addr;
            let txtLength = txtList.length;
            for(let k=0;k<txtLength;k++){
                let txtItem = EleUtil.create('span');
                txtItem.style.cssText = 'cursor:pointer; margin: 10px 10px;';
                txtItem.innerHTML = `<a data-sign=${encodeURI(txtList[k])} class='txtBtnEmotion'>${txtList[k]}</a>`;
                if(MenuList[key].ref){
                    txtItem.innerHTML = `<a data-sign=${encodeURI(txtList[k])} class='txtBtnEmotion'>${MenuList[key].ref[k]}</a>`;
                    EleUtil.selectID('toggleWindow').style.height='50px';
                }
                txtItem.onclick = expandMenu.attachEmotion;
                txtItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 50px;';
                outerContainer.appendChild(txtItem);
            }
        },
        createImageLink: function(key){
            let outerContainer = createItems.createContainer(key);
            let imgList = MenuList[key].addr;
            let refList = MenuList[key].ref;
            let imgLength = imgList.length;
            for(var k=0;k<imgLength;k++){
                let imgItem = EleUtil.create('img');
                imgItem.dataset.link =  refList[k];
                imgItem.src = imgList[k];
                imgItem.className = 'Ems';
                imgItem.onclick = expandMenu.attachEmotion;
                imgItem.style.cssText = 'width: 50px !important;height: 50px !important;';
                outerContainer.appendChild(imgItem);
            }
        }
    };
    const mouseOverAction = {
        showImg: function(event){
            let eventTarget = EventUtil.getTarget(event);
            if(!eventTarget.src){
                return null;
            }
            let largeViewContainer = EleUtil.selectID('largeView');
            let [scrollTopValue,scrollLeftValue] = [document.body.scrollTop,document.body.scrollLeft];
            largeViewContainer.innerHTML = `<img src=${eventTarget.src} />`;
            largeViewContainer.style.display = 'block';
            largeViewContainer.style.top = `${event.clientY + scrollTopValue + 20}px`;
            largeViewContainer.style.left = `${event.clientX + scrollLeftValue}px`;
            //console.log([event.clientY,event.clientX]);
            //console.log([EleUtil.selectID('largeView').style.top,EleUtil.selectID('largeView').style.left]);
            //console.log([document.body.scrollTop,document.body.scrollLeft]);
        },
        clearImg: function(event){
            EleUtil.selectID('largeView').style.display = 'none';
        }
    };
    const expandMenu = {
        init: function(event){
            createMenu.clear();
            let eventTarget = EventUtil.getTarget(event);
            EleUtil.selectID('toggleWindow').style.display = 'block';
            EleUtil.selectID('toggleWindow').style.width= EleUtil.select('textarea').style.width;
            let dataType = eventTarget.attributes[2].nodeValue;
            let dataKey = eventTarget.attributes[1].nodeValue;
            if(EleUtil.select('#eddie32'+dataKey)){
                EleUtil.select('#eddie32'+dataKey).style.display = 'block';
                if(dataKey == 'item1') EleUtil.selectID('toggleWindow').style.height='50px';
                else EleUtil.selectID('toggleWindow').style.height='100px';
                return;
            }
            if(dataType =='plain'){
                createItems.createPlainText(dataKey);
            }else if(dataType =='image'){
                createItems.createImages(dataKey);
            }else if(dataType == 'imageLink'){
                createItems.createImageLink(dataKey);
            }
        },
        attachEmotion: function(event){
            const eventTarget = EventUtil.getTarget(event);
            //console.log(eventTarget);

            let addressTarget = '', emotionAddress='';
            if(eventTarget.attributes.length==2){
                if(eventTarget.src){
                    addressTarget = eventTarget.src;
                    emotionAddress=expandMenu.addressParse(addressTarget,'image');
                }else{
                    //console.log(eventTarget.attributes);
                    addressTarget = eventTarget.attributes[0].nodeValue;
                    emotionAddress=expandMenu.addressParse(addressTarget,'plain');
                }
            }
            else{
                //console.log(eventTarget.attributes);
                addressTarget = eventTarget.attributes[0].nodeValue;
                emotionAddress=expandMenu.addressParse(addressTarget,'plain');
            }
            let selectTextArea = EleUtil.select('textarea');
            const ovalue = selectTextArea.value;
            const startPos = selectTextArea.selectionStart;
            const endPos = selectTextArea.selectionEnd;
            selectTextArea.value = `${ovalue.slice(0, startPos)}${emotionAddress}${ovalue.slice(startPos)}`;
            // console.log(eventTarget);
            // console.log(emotionAddress);
        },
        addressParse: function(addStr, pattern){
            let stringReturn='';
            if(pattern === 'image'){
                stringReturn = `[img]${addStr}[/img]`;
            }
            if(pattern === 'plain'){
                stringReturn =  decodeURI(addStr);
            }
            if(pattern === 'imageLink'){
                stringReturn =  addStr;
            }
            return stringReturn;
        }
    };
    const createMenu = {
        defaultID: 'emotion0000',
        main: function(){
            /*main menu*/
            let mainMenu = EleUtil.create('div');
            mainMenu.innerHTML = `<span id='largeView'></span><span class='subMenu' title='主菜单 version ${versionNo}'><b>⑨囧⑨</b></span>`;
            mainMenu.id = createMenu.defaultID;
            let MenuLength = Object.keys(MenuList).length;
            for(let i=0;i<MenuLength;i++){
                const MenuKey = Object.keys(MenuList)[i];
                const MenuTitle = MenuList[MenuKey].title;
                const MenuType = MenuList[MenuKey].datatype;
                if(!MenuType || !MenuTitle) console.log('dataerror  '+MenuKey);
                const testMenu = createMenu.subs(MenuTitle,expandMenu.init,MenuKey, MenuType);
                mainMenu.appendChild(testMenu);
            }
            /*close button*/
            let closeBtn = EleUtil.create('span');
            closeBtn.innerHTML = '[x]';
            closeBtn.className= 'subMenu';
            closeBtn.id = 'closeEM';
            closeBtn.onclick = createMenu.clear;
            closeBtn.style.cssText = 'cursor:pointer';
            mainMenu.appendChild(closeBtn);
            /*dropdown box*/
            let itemWindow = EleUtil.create('div');
            itemWindow.id = 'toggleWindow';
            mainMenu.appendChild(itemWindow);
            /*css style*/
            let styleItem = EleUtil.create('style');
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
        subs: function(title,func,subid,subtype){
            let subMenu = EleUtil.create('span');
            subMenu.id = subid;
            subMenu.className= 'subMenu';
            let subcontent = `<a class='subBut' data-kid=${subid} date-type=${subtype}>${title}</a>`;
            subMenu.onclick = func;
            subMenu.title = title;
            subMenu.innerHTML = subcontent;
            return subMenu;
        },
        clear: function(){
            const toggleWindow = EleUtil.selectID('toggleWindow');
            toggleWindow.style.display = 'none';
            const togWinChildren = toggleWindow.childNodes;
            for (let j=0, len = togWinChildren.length ;j<len;j++){
                //console.log(togWinChildren[j]);
                togWinChildren[j].style.display = 'none';
            }
        }
    };

    if(typeof window !== 'undefined' && document != null) {
        //let testareaEleSet = new WeakSet();

        NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
        HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
        let elementSet = Array.from(document.getElementsByTagName('textarea'));
        /*兼容性问题 By 喵拉布丁2017.01.30: document.getElementsByTagName方法返回的是HTMLCollection
在较新版的Firefox中，HTMLCollection支持Iterator接口，所以可以用for...of循环
而在Chrome中（我只在使用Chromium 50内核的浏览器下测试过），HTMLCollection不支持Iterator接口，不可用直接使用for...of循环
所以建议楼主还是用老方法吧*/
        // Solution stackflow: http://stackoverflow.com/questions/22754315/foreach-loop-for-htmlcollection-elements
        let elementSetLength = elementSet.length;
        if(elementSetLength===0){
            console.log('There is no textarea');
        }
        //testareaEleSet.add(elementSet);
        let userOption = {
            userWindowHeight: 120,
            userSelectTextArea: 'last',
        };
        let mainEmotionMenu = createMenu.main();
        for (let elementSingle of elementSet) {
            //console.log(elementSingle);
            elementSingle.parentNode.insertBefore(mainEmotionMenu, elementSingle);
        }
    }
};
const imagepath = '1485412810';
fun (imagepath);
