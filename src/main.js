//var ex00000000 = (function($){



// B站和tora酱
var w4 = [];

for(var j = 0; j < 16; j++) {
   w4[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/2233 (' +
        (j+1) + ').gif';
}
for(var j = 16; j < 30; j++) {
   w4[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/BiliBili/bilibiliTV (' +
        (j+1-17) + ').png';
}
// tora酱
var w5 = [];

for(var j = 0; j < 14; j++) {
    w5[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/tora/0' +
         ((j)>=9?(j+1):('0'+(j+1))) + '.jpg';
}
w4 = w4.concat(w5);


//阿卡林
//7. Akari 摇曳百合
var ACSmile1 = [];
for(var j = 0; j < 20; j++) {
    ACSmile1[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Dynamic/akari' +
        (j+1) + '.gif';
}

var AkariSmile1 = [];
for(var j = 0; j < 71; j++) {
    AkariSmile1[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/akari/akari' +
        (j+1) + '.png';
}
AkariSmile1 = AkariSmile1.concat(ACSmile1);

// KF拓展, New Game以及巫女控
var kfaux = [];

for(var j = 0; j < 19; j++) {
    kfaux[j] = 'http://ss.nekohand.moe/Asource/EmotionPic/KFEM (' +
      (j+1) + ').gif';
}

var NG = [];

for(var j = 0; j < 62; j++) {
    NG[j] = 'http://nekohand.moe/spsmile/01Sora/0xx' +
         (j+2) + '.png';
}
NG = NG.concat(kfaux);

// ACFUN new
var ACSmile4 = [];
for(var j = 0; j < 50; j++) {
    ACSmile4[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/New/' +
        (j+1) + '.png';
}
for(var j = 50; j < 90; j++) {
   ACSmile4[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/Niming/' +
        ((j-50)>=9?(j-49):('0'+(j-49))) + '.gif';
}



// KF 内置
var KFSmileURL = [];
var KFSmileCode = [];
for(var j = 0; j < 48; j++) {
    KFSmileURL[j] = (typeof imgpath != 'undefined' ? imgpath : '') + '/post/smile/em/em' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    KFSmileCode[j] = '[s:'+(j+10)+']';
}


// lovelive专用小
var LoveliveSmalltargetURL = [];
for(var j = 0; j < 40; j++) {
    LoveliveSmalltargetURL[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Small/Lovelive2nd' +
        (j+1) + '.png';
    LoveliveSmalltargetURL[j+40] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Small/Lovelive' +
        (j+1) + '.png';
}
var MenuList = {
    item4:{datatype:'imageLink', title:'kf固有',addr:KFSmileURL, ref:KFSmileCode},
    item1:{datatype:'plain',title:'快捷',addr:["[sell=100][/sell]","[quote][/quote]","[hide=100][/hide]","[code][/code]",
                            "[strike][/strike]","[fly][/fly]","[color=#00FF00][/color]","[b][/b]","[u][/u]","[i][/i]","[hr]", "[backcolor=][/backcolor]","[img][/img]"]},
    item2:{datatype:'plain',title:'颜文字', addr:["(●・ 8 ・●)", 
"╰(๑◕ ▽ ◕๑)╯","(﹡ˆˆ﹡)","〜♪♪","(ﾟДﾟ≡ﾟДﾟ)", "(＾o＾)ﾉ" , "(|||ﾟДﾟ)", "(`ε´ )",  "(╬ﾟдﾟ)", "(|||ﾟдﾟ)" , "(￣∇￣)", "(￣3￣)", "(￣ｰ￣)", "(￣ . ￣)", "(￣︿￣)", "(￣︶￣)", "(*´ω`*)", "(・ω・)","(⌒▽⌒)","(￣▽￣）","(=・ω・=)","(｀・ω・´)","(〜￣△￣)〜","(･∀･)",
			"(°∀°)ﾉ","(￣3￣)","╮(￣▽￣)╭","( ´_ゝ｀)","←_←","→_→","(&lt;_&lt;)","(&gt;_&gt;)","(;¬_¬)","(▔□▔)/","(ﾟДﾟ≡ﾟдﾟ)!?","Σ(ﾟдﾟ;)","Σ( ￣□￣||)",
			"(´；ω；`)","（/TДT)/","(^・ω・^ )","(｡･ω･｡)","(●￣(ｴ)￣●)","ε=ε=(ノ≧∇≦)ノ","(´･_･`)","(-_-#)","（￣へ￣）","(￣ε(#￣) Σ","ヽ(`Д´)ﾉ","(╯°口°)╯(┴—┴","（#-_-)┯━┯","_(:3」∠)_","(笑)","(汗)","(泣)","(苦笑)", "(´・ω・`)", "(╯°□°）╯︵ ┻━┻","(╯‵□′)╯︵┻━┻", "( ´ρ`)", "( ﾟωﾟ)", "(oﾟωﾟo)", "(　^ω^)", "(｡◕∀◕｡)", "/( ◕‿‿◕ )\\","ε٩( º∀º )۶з","(￣ε(#￣)☆╰╮(￣▽￣///)",
                         "（●´3｀）~♪", "_(:з」∠)_","хорошо!","＼(^o^)／","(•̅灬•̅ )", "(ﾟДﾟ)","まったく、小学生は最高だぜ！！","ε=ε=ε=┏(゜ロ゜;)┛",
                        "(；°ほ°)","もうこの国は駄目だぁ","ヽ(✿ﾟ▽ﾟ)ノ","焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！","お疲れ様でした"]},
    item5:{datatype:'image',title:'ACFUN',addr:ACSmile4},
    item6:{datatype:'image',title:'常用',addr:NG},
    item7:{datatype:'image',title:'Akari',addr:AkariSmile1},
    item8:{datatype:'image',title:'BiliBili',addr:w4},
    item3:{datatype:'image',title:'LoveLive',addr:LoveliveSmalltargetURL} 
};
/* Event 函数 */
var EventUtil = { 
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
            element.attachEvent("on" + type, handler);  //IE
        } else { 
            element["on" + type] = handler;  //DOM 0 
        } 
    }, 
    removeHandler: function(element, type, handler){ 
        if (element.removeEventListener){ 
            element.removeEventListener(type, handler, false); //DOM2
        } else if (element.detachEvent){ 
            element.detachEvent("on" + type, handler); //IE
        } else { 
            element["on" + type] = null; //DOM 0 
        } 
    } 
};    
var EleUtil = {
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
var createItems = {
    createContainer: function(key){
        'use strict';
        const ItemContainer = EleUtil.create('div');
        ItemContainer.id = 'eddie32' + key;
        EleUtil.selectID("toggleWindow").appendChild(ItemContainer);
        return ItemContainer;
    },
    createImages:function(key){
        'use strict';
        const outerContainer = createItems.createContainer(key);
        //console.log(MenuList[key]);
        const imgList = MenuList[key].addr;
        const imgLength = imgList.length;
        for(var k=0;k<imgLength;k++){
            const imgItem = EleUtil.create('img');
            imgItem.src = imgList[k];
            imgItem.className = 'Ems';
            imgItem.onclick = expandMenu.attachEmotion;
            //imgItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 100px;height: 100px;';
            outerContainer.appendChild(imgItem);
        }
    },
    createPlainText: function(key){
        'use strict';
        const outerContainer = createItems.createContainer(key);
        //console.log(MenuList[key]);
        const txtList = MenuList[key].addr;
        const txtLength = txtList.length;
        for(var k=0;k<txtLength;k++){
            const txtItem = EleUtil.create('span');
            txtItem.style.cssText = "cursor:pointer; margin: 10px 10px;";
            txtItem.innerHTML = '<a data-sign='+encodeURI(txtList[k])+' class="txtBtnEmotion">'+txtList[k]+'</a>';
            txtItem.onclick = expandMenu.attachEmotion;
            txtItem.style.cssText = 'cursor:pointer;padding: 10px 10px:width: 50px;';
            outerContainer.appendChild(txtItem);
        }
    },
    createImageLink: function(key){
      //console.log(MenuList[key]);
        const outerContainer = createItems.createContainer(key);
        const imgList = MenuList[key].addr;
        const refList = MenuList[key].ref;
        const imgLength = imgList.length;
        for(var k=0;k<imgLength;k++){
            const imgItem = EleUtil.create('img');
            imgItem.dataset.link =  refList[k];
            imgItem.src = imgList[k];
            imgItem.className = 'Ems';
            imgItem.onclick = expandMenu.attachEmotion;
            imgItem.style.cssText = 'width: 50px !important;height: 50px !important;';
            outerContainer.appendChild(imgItem);
        }
    }
};
var expandMenu = {
    init: function(event){
       "use strict";
        createMenu.clear();
        const eventTarget = EventUtil.getTarget(event);
        EleUtil.selectID("toggleWindow").style.display = "block";
        const dataType = eventTarget.attributes[2].nodeValue;
        const dataKey = eventTarget.attributes[1].nodeValue;
        if(EleUtil.select("#eddie32"+dataKey)){
            console.log(EleUtil.select("#eddie32"+dataKey));
            EleUtil.select("#eddie32"+dataKey).style.display = 'block';
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
        "use strict";
        const eventTarget = EventUtil.getTarget(event);
        console.log(eventTarget);
        var emotionAddress;
        
        if(eventTarget.attributes.length==2){
            if(eventTarget.src){
                const addressTarget = eventTarget.src;
                emotionAddress = expandMenu.addressParse(addressTarget,'image');
            }else{
                console.log(eventTarget.attributes);
                const addressTarget = eventTarget.attributes[0].nodeValue;
                emotionAddress = expandMenu.addressParse(addressTarget,'plain');
            }
        }
        else{
           console.log(eventTarget.attributes);
           const addressTarget = eventTarget.attributes[0].nodeValue;
           emotionAddress = expandMenu.addressParse(addressTarget,'plain'); 
        }
        
        const selectTextArea = EleUtil.select("textarea");
        const ovalue = selectTextArea.value;
        const startPos = selectTextArea.selectionStart;
        const endPos = selectTextArea.selectionEnd;
        selectTextArea.value = ovalue.slice(0, startPos) + emotionAddress + ovalue.slice(startPos);
       // console.log(eventTarget);
       // console.log(emotionAddress);
    },
    addressParse: function(addStr, pattern){
       "use strict";
        var stringReturn;
        if(pattern === 'image'){
            stringReturn = '[img]'+addStr+'[/img]';
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
var createMenu = {
    defaultID: 'emotion0000',
    main: function(){
        "use strict";
        const mainMenu = EleUtil.create('div');
        mainMenu.innerHTML = '<span title="made by eddie32 version 4.0.0" style="cursor:pointer;"><b>囧⑨</b></span>';
        mainMenu.id = createMenu.defaultID;
       // mainMenu.style.cssText = 'padding:5px 5px;width: 780px; vertical-align: middle;  \
         //                        font: 14px/20px "Hiragino Sans GB","Microsoft YaHei","Arial","sans-serif"';
        const MenuLength = Object.keys(MenuList).length;
        for(var i=0;i<MenuLength;i++){
            const MenuKey = Object.keys(MenuList)[i];
            const MenuTitle = MenuList[MenuKey].title;
            const MenuType = MenuList[MenuKey].datatype;
            if(!MenuType || !MenuTitle) console.log('dataerror  '+MenuKey); 
            const testMenu = createMenu.subs(MenuTitle,expandMenu.init,MenuKey, MenuType);    
            mainMenu.appendChild(testMenu);
        }
        const closeBtn = EleUtil.create('span');
        closeBtn.innerHTML = '[-]';
        closeBtn.className= "subMenu";
        closeBtn.id = 'closeEM';
        closeBtn.onclick = createMenu.clear;
        mainMenu.appendChild(closeBtn);
        const itemWindow = EleUtil.create('div');
        itemWindow.id = "toggleWindow";
        //itemWindow.style.cssText = '';
        //itemWindow.style.display = 'none';
        mainMenu.appendChild(itemWindow);
        const styleItem = EleUtil.create('style');
        styleItem.innerHTML = '#emotion0000 {padding:5px 5px;width: 780px; vertical-align: middle;  \
                                 font: 14px/20px "Hiragino Sans GB","Microsoft YaHei","Arial","sans-serif"} \
                               #toggleWindow a{padding: 3px 3px;line-height:2} \
                               #toggleWindow {width: 780px; height: 120px; padding: 3px 3px; overflow: auto; margin-top:14px;display:none}\
                               a.subBut{text-decoration: none;} \
                               .Ems{cursor:pointer;padding: 10px 10px:width: 120px;height: 120px;display:inline-block;} \
                               a.subBut:hover{color: deeppink;} \
                               a.txtBtnEmotion{text-decoration:none;} \
                               a.txtBtnEmotion:hover{background: #2b2b2b;color: #fff} \
                               .subMenu{cursor:pointer; width:200px; margin-left: 7px; margin-right: 5px; margin-bottom:5px; background: #fff !important; \
                                 font: 14px/16px "Hiragino Sans GB","Microsoft YaHei","Arial","sans-serif"} \
                               .subMenu:hover{border-bottom: 2px solid deeppink}';
        mainMenu.appendChild(styleItem);
        return mainMenu;
    },
    subs: function(title,func,subid,subtype){
        "use strict";
        const subMenu = EleUtil.create('span');
        subMenu.id = subid;
        subMenu.className= "subMenu";
        const subcontent = '<a class="subBut" data-kid='+subid+' date-type=' + subtype +'>' + title + '</a>';
        //EleUtil.selectClass(".subBut").style.cssText = 'width: 30px; margin-right: 5px';
        subMenu.onclick = func;
        subMenu.title = title;
       // subMenu.dataset.hook = 'item1';
        subMenu.innerHTML = subcontent;
        return subMenu;
    },
    clear: function(){
       "use strict";
        //EleUtil.selectID("toggleWindow").innerHTML = '';
        //EleUtil.selectID("toggleWindow").style.display = "none";
        const toggleWindow = EleUtil.selectID("toggleWindow");
        const togWinChildren = toggleWindow.childNodes; 
        for (var j=0;j<togWinChildren.length;j++){
            //console.log(togWinChildren[j]);
            togWinChildren[j].style.display = 'none';
        }
    }
};
var KFE = {
    init: function(){
        "use strict";  
        const mainEmotionMenu = createMenu.main();
        //console.log(mainEmotionMenu);
        //const textareas = document.getElementsByTagName('textarea');
        //if (!textareas.length) { return; }
        const textarea = EleUtil.select("textarea");
        textarea.parentNode.insertBefore(mainEmotionMenu, textarea);
    }
};
KFE.init();
//});