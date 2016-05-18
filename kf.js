// ==UserScript==
// @name       绯月表情增强插件
// @namespace  
// @version     2.8.8
// @description KF论坛专用的回复表情, 插图扩展插件, 在发帖时快速输入自定义表情和论坛BBCODE
// @icon        https://blog.nekohand.moe/archive/favicon.ico
// @homepage    https://greasyfork.org/zh-CN/scripts/5124-%E7%BB%AF%E6%9C%88%E8%A1%A8%E6%83%85%E5%A2%9E%E5%BC%BA%E6%8F%92%E4%BB%B6
// @include     http://*gal.com/*
// @include     http://*9moe.com/*
// @include     http://*kfgal.com/*
// @match       https://sstmlt.net/*
// @match       http://www.mmy.moe/*
// @match       http://www.mddmm.com/*
// @copyright   2014-2016, eddie32
// @grant       none
// @license     MIT
// @run-at      document-end
// ==/UserScript==


/* 自定义内容*/

// 功能栏标题

var ItemTitleArray = new Array('0.kf',
                               '1.常用',
                               '2.颜',
                               '3.LL小',
                               '4.LL大',
                               '5.AC娘',
                               '6.百合',
                               '7.外',
                               '8.东方',
                               '9.Gal1',
                               '10.Gal2',
                               '11.百度扩展',
                               '12.其他ACG',
                               '13.猫咪');
                               //,'14.萝莉'
                               //,'15.北方酱'
                               //'16.北方酱2');
// 链接ID, 对应, 100101开始的整数。
var loadTitleArray = [];
var ItemLength = ItemTitleArray.length;
//for(var j=0; j<ItemLength;j++){
  // loadTitleArray[j] = 100101 + j;
//}

var loadTitleArray = new Array(100101,
                               100102,
                               100103,
                               100104,
                               100105,
                               100106,
                               100107,
                               100108,
                               100109,
                               100110,
                               100111,
                               100112,
                               100113,
                               100114);
                             //  ,100115,
                             //  100116,
                             //  100117);
                              
//不显示的元素位置
var itemDoNotShow =[];
var user=getCookie("setup");
//alert(user);
var itemDoNotShow = new Array();
if (user != ""){
    // alert(user.split(','));
    itemDoNotShow = user.split(',');
   // alert(itemDoNotShow);
    if(itemDoNotShow.length>0){
        for(var j=0; j<itemDoNotShow.length;j++){
            ItemTitleArray[itemDoNotShow[j]] = undefined;
            loadTitleArray[itemDoNotShow[j]] = undefined;
        }
    }
}



var totalNum = ItemTitleArray.length; // 功能栏数量
var textareas, textarea;
var emptyContainer;
var startPos, endPos; // 当前光标位置定位


/************************** 内置表情 *******************/
// 1:自带
websithurl = window.location.href;
console.log(websithurl.indexOf('2dgal')+1);
if(!(websithurl.indexOf('2dgal')+1)&&!(websithurl.indexOf('9moe')+1)&&!(websithurl.indexOf('kfgal')+1)){
    //console.log(websithurl.indexOf('mmy')+1);
    imgpath = '1';
}

var KFSmileURL = [];
var KFSmileTitle = [];
var KFSmileCode  = [];
for(var j = 0; j < 48; j++) {
    KFSmileURL[j] = 'http://2dgal.com/'+imgpath+'/post/smile/em/em' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    KFSmileTitle[j] = '';
    KFSmileCode[j] = '[s:'+(j+10)+']';
}


// 2: 颜文字
var emotionArray = Array("(●・ 8 ・●)", 
"╰(๑◕ ▽ ◕๑)╯",
"(﹡ˆˆ﹡)","〜♪♪",
"(ﾟДﾟ≡ﾟДﾟ)", "(＾o＾)ﾉ" , "(|||ﾟДﾟ)", "(`ε´ )",  "(╬ﾟдﾟ)"
, "(|||ﾟдﾟ)" , "(￣∇￣)", "(￣3￣)", "(￣ｰ￣)", "(￣ . ￣)", "(￣︿￣)", "(￣︶￣)", "(*´ω`*)", "(・ω・)","(⌒▽⌒)","(￣▽￣）","(=・ω・=)","(｀・ω・´)","(〜￣△￣)〜","(･∀･)",
			"(°∀°)ﾉ","(￣3￣)","╮(￣▽￣)╭","( ´_ゝ｀)","←_←","→_→","(&lt;_&lt;)"
			,"(&gt;_&gt;)","(;¬_¬)","(▔□▔)/","(ﾟДﾟ≡ﾟдﾟ)!?","Σ(ﾟдﾟ;)","Σ( ￣□￣||)",
			"(´；ω；`)","（/TДT)/","(^・ω・^ )","(｡･ω･｡)","(●￣(ｴ)￣●)","ε=ε=(ノ≧∇≦)ノ"
			,"(´･_･`)","(-_-#)","（￣へ￣）","(￣ε(#￣) Σ","ヽ(`Д´)ﾉ"
			,"(╯°口°)╯(┴—┴","（#-_-)┯━┯","_(:3」∠)_","(笑)","(汗)","(泣)"
			,"(苦笑)", "(´・ω・`)", "(╯°□°）╯︵ ┻━┻","(╯‵□′)╯︵┻━┻", "( ´ρ`)", "( ﾟωﾟ)", "(oﾟωﾟo)"
                         , "(　^ω^)", "(｡◕∀◕｡)", "/( ◕‿‿◕ )\\","ε٩( º∀º )۶з","(￣ε(#￣)☆╰╮(￣▽￣///)",
                         "（●´3｀）~♪", "_(:з」∠)_","хорошо!","＼(^o^)／","(•̅灬•̅ )", "(ﾟДﾟ)","まったく、小学生は最高だぜ！！","ε=ε=ε=┏(゜ロ゜;)┛",
                        "(；°ほ°)","もうこの国は駄目だぁ","ヽ(✿ﾟ▽ﾟ)ノ","焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！","お疲れ様でした");
// 3. lovelive专用小
var LoveliveSmalltargetURL = [];
var LoveliveSmalltargetTitle = [];
for(var j = 0; j < 41; j++) {
    LoveliveSmalltargetURL[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Small/Lovelive2nd' +
        (j+1) + '.png';
    LoveliveSmalltargetTitle[j] = j+1;
}

for(var j = 0; j < 40; j++) {
    LoveliveSmalltargetURL[j+41] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Small/Lovelive' +
        (j+1) + '.png';
     LoveliveSmalltargetTitle[j+41] = j+1;
}

// 4. lovelive专用大
var LoveliveBigtargetURL = [];
var LoveliveBigtargetTitle = [];
for(var j = 0; j < 41; j++) {
    LoveliveBigtargetURL[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion02/Big/Lovelive2nd' +
        (j+1) + '.png';
    LoveliveBigtargetTitle[j] = j+1;
}

for(var j = 0; j < 40; j++) {
    LoveliveBigtargetURL[j+41] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/Big/Lovelive' +
        (j+1) + '.png';
    LoveliveBigtargetTitle[j+41] = j+1;
}

// 5. 快捷输入功能
var functionEmotion = Array("[sell=1][/sell]","[quote][/quote]","[hide=1][/hide]","[code][/code]","[strike][/strike]",
                             "[fly][/fly]","[color=#00FF00][/color]","[b][/b]","[u][/u]","[i][/i]","[hr]", "[bgcolor=][/bgcolor]","[img][/img]",
                            "[img]http://data.nekohand.moe/StorageCenter/uploads/Pictures/blogAcc/smile.gif[/img]",
                            "[img]http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/doge_org.gif[/img]",
                            "[img]http://nekohand.moe/spsmile/03Sora/RlN8rQO_47.gif[/img]"
                            );
var functionDescription = Array("出售贴sell=售价","引用", "隐藏hide=神秘等级","插入代码","删除线","跑马灯","文字颜色","粗体","下划线","斜体","水平线","背景色","插入图片","精神污染","新浪狗","鬼畜笑");

// 6. AC娘

var ACSmile3 = [];
var ACSmile3Title = [];
for(var j = 0; j < 50; j++) {
    ACSmile3[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/' +
        (j+1) + '.png';
    ACSmile3Title[j] = '';
}
var ACSmile2 = [];
var ACSmile2Title = [];
for(var j = 0; j < 10; j++) {
    ACSmile2[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/' +
        (j+51) + '.jpg';
    ACSmile2Title[j] = '';
}

//7. Akari 摇曳百合
var ACSmile1 = [];
var ACSmile1Title = [];
for(var j = 0; j < 20; j++) {
    ACSmile1[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Dynamic/akari' +
        (j+1) + '.gif';
    ACSmile1Title[j] = '';
}

var AkariSmile1 = [];
var AkariSmile1Title = [];
for(var j = 0; j < 71; j++) {
    AkariSmile1[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/akari/akari' +
        (j+1) + '.png';
    AkariSmile1Title[j] = '';
}
// 8.百度
var BaiduSmile1 = [];
var BaiduSmile1Title = [];
for(var j = 0; j < 50; j++) {
    BaiduSmile1[j] = 'http://tb2.bdstatic.com/tb/editor/images/face/i_f' +
         ((j)>=9?(j+1):('0'+(j+1))) + '.png';
    BaiduSmile1Title[j] = '';
}
// 百度兔斯基
var BaiduSmile2= [];
var BaiduSmile2Title = [];
for(var j = 0; j < 40; j++) {
    BaiduSmile2[j] = 'http://tb2.bdstatic.com/tb/editor/images/tsj/t_00' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    BaiduSmile2Title[j] = '';
}
// 百度阿狸
var BaiduSmile3= [];
var BaiduSmile3Title = [];
for(var j = 0; j < 70; j++) {
    BaiduSmile3[j] = 'http://tb2.bdstatic.com/tb/editor/images/ali/ali_0' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    BaiduSmile3Title[j] = '';
}

// 多玩洋葱头
var duowanSmile =[];
var duowanSmileTitle = [];
for(var j= 0; j<69;j++){
    duowanSmile[j] = 'http://att.bbs.duowan.com/static/image/smiley/yct/yct' +
     ((j)>=9?(j+1):('0'+(j+1))) + '.gif';        
}
// 百度暴走漫画
var BaiduSmile4= [];
var BaiduSmile4Title = [];
for(var j = 0; j < 56; j++) {
    BaiduSmile4[j] = 'http://tb2.bdstatic.com/tb/editor/images/baodong/b_00' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    BaiduSmile4Title[j] = '';
}
// 百度绿豆蛙
var BaiduSmile5= [];
var BaiduSmile5Title = [];
for(var j = 0; j < 53; j++) {
    BaiduSmile5[j] = 'http://tb2.bdstatic.com/tb/editor/images/ldw/w_00' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    BaiduSmile5Title[j] = '';
}
// 百度波波
var BaiduSmile6= [];
var BaiduSmile6Title = [];
for(var j = 0; j < 63; j++) {
    BaiduSmile6[j] = 'http://tb2.bdstatic.com/tb/editor/images/bobo/B_00' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    BaiduSmile6Title[j] = '';
}
// ACFUN new
var ACSmile4 = [];
var ACSmile4Title = [];
for(var j = 0; j < 50; j++) {
    ACSmile4[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/New/' +
        (j+1) + '.png';
    ACSmile4Title[j] = '';
}
var ACSmile5 = [];
var ACSmile5Title = [];
for(var j = 0; j < 40; j++) {
    ACSmile5[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/ACFUN/Niming/' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';
    ACSmile5Title[j] = '';
}

// 东方400
var ACSmile6 = [];
var ACSmile6Title = [];

for(var j = 0; j < 398; j++) {
    ACSmile6[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/Touhou/Touhou' +
        (j+1) + '.jpg';
}



// 
// X（X=上面的数字+1）. 小仓朝日
var AsahiURL = [];
var AsahiURLTitle = [];

for(var j = 0; j < 28; j++) {
   AsahiURL[j] = 'http://aruruu.net/ADDimages/asahi/' +
        (j+1) + '.png';   // 缩略图和实际图像地址用一个就行。
   AsahiURLTitle[j] = ''; // 这个数组是鼠标滑过的提示数组
}

var RisonaURL = [];
var RisonaURLTitle = [];

for(var j = 0; j < 39; j++) {
   RisonaURL[j] = 'http://aruruu.net/ADDimages/risona/' +
        (j+1) + '.png';   // 缩略图和实际图像地址用一个就行。
   RisonaURLTitle[j] = ''; // 这个数组是鼠标滑过的提示数组
}

var RunaURL = [];
var RunaURLTitle = [];

for(var j = 0; j < 30; j++) {
   RunaURL[j] = 'http://aruruu.net/ADDimages/runa/' +
        (j+1) + '.png';   // 缩略图和实际图像地址用一个就行。
   RunaURLTitle[j] = ''; // 这个数组是鼠标滑过的提示数组
}
//萝莉们

var mc2URL = [];
for(var j = 0; j < 70; j++) {
   mc2URL[j] = 'http://static.tieba.baidu.com/tb/editor/images/ali/ali_0' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.gif';   // 缩略图和实际图像地址用一个就行。
   
}
var mc3URL = [];
for(var j = 0; j < 9; j++) {
   mc3URL[j] = 'http://blog.bi119ate5hxk.net/wp-content/smilies/b' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.png';   // 缩略图和实际图像地址用一个就行。
   
}
var mc4URL = [];
for(var j = 0; j < 9; j++) {
   mc4URL[j] = 'http://blog.bi119ate5hxk.net/wp-content/smilies/a' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.png';   // 缩略图和实际图像地址用一个就行。
   
}


// 4000w和tora酱
// 东方400
var w4 = [];

for(var j = 0; j < 36; j++) {
   w4[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/w4000/wfour' +
        (j+1) + '.jpg';
}
// 东方400
var w5 = [];

for(var j = 0; j < 14; j++) {
    w5[j] = 'http://smile.nekohand.moe/blogAcc/LoveliveEmotion01/EmCol/tora/0' +
         ((j)>=9?(j+1):('0'+(j+1))) + '.jpg';
}



//企鹅们

var Pen1 = ['http://up.twblog.org/image.php?di=6N5Z'];
var Pen1Title = [];
var Pen2 = ['http://up.twblog.org/image.php?di=N1WM'];
var Pen2Title = [];
var Pen3 = ['http://up.twblog.org/image.php?di=HFQF'];
var Pen3Title = [];
var Pen4= ['http://up.twblog.org/image.php?di=SPOW'];
var Pen4Title = [];
var Pen5 = ['http://up.twblog.org/image.php?di=8NCO'];
var Pen5Title = [];
var Pen6 = ['http://up.twblog.org/image.php?di=O9CQ'];
var Pen6Title = [];
var Pen7 = ['http://up.twblog.org/image.php?di=JKJG'];
var Pen7Title = [];
var Pen8 = ['http://up.twblog.org/image.php?di=60JH'];
var Pen8Title = [];
var Pen9 = ['http://up.twblog.org/image.php?di=SLJH'];
var Pen9Title = [];
var Pen10 = ['http://up.twblog.org/image.php?di=G83L'];
var Pen10Title = [];
var Pen11 = ['http://up.twblog.org/image.php?di=J42G'];
var Pen11Title = [];
var Pen12 = ['http://up.twblog.org/image.php?di=4Y0G'];
var Pen12Title = [];
var Pen13 = ['http://up.twblog.org/image.php?di=E7LN'];
var Pen13Title = [];
var Pen14 = ['http://up.twblog.org/image.php?di=ZLTY'];
var Pen14Title = [];
var Pen15 = ['http://up.twblog.org/image.php?di=7ZLJ'];
var Pen15Title = [];
var Pen16 = ['http://up.twblog.org/image.php?di=5H1J'];
var Pen16Title = [];
var Pen17 = ['http://up.twblog.org/image.php?di=SXWD'];
var Pen17Title = [];
var Pen18 = ['http://up.twblog.org/image.php?di=LVNG'];
var Pen18Title = [];


//雜
var Zha1 = ['http://up.twblog.org/image.php?di=84IL'];
var Zha1Title = [];
var Zha2 = ['http://up.twblog.org/image.php?di=XZVK'];
var Zha2Title = [];
var Zha3 = ['http://up.twblog.org/image.php?di=YV3X'];
var Zha3Title = [];
var Zha4 = ['http://up.twblog.org/image.php?di=57TU'];
var Zha4Title = [];

// 零之轨迹/碧之轨迹
var w6 = [];

for(var j = 0; j < 43; j++) {
    w6[j] = 'http://nekohand.moe/spsmile/01Sora/0xx' +
         (j+2) + '.png';
}


var w7 = [];

for(var j = 0; j < 47; j++) {
    w7[j] = 'http://nekohand.moe/spsmile/03Sora/RlN8rQO_' +
         ((j)>=9?(j+1):('0'+(j+1))) + '.png';
}


var w8 = [];

for(var j = 0; j < 40; j++) {
    w8[j] = 'http://aruruu.net/ADDimages/saika/' +
         (j+1) + '.png';
}

//

	// 6. 小仓朝阳
var w10 = [];

for(var j = 0; j < 40; j++) {
   w10[j] = 'http://aruruu.net/ADDimages/saika/' +
        (j+1) + '.png';
}


// 7. 艾斯豚
var w11 = [];

for(var j = 0; j < 48; j++) {
   w11[j] = 'http://aruruu.net/ADDimages/est/' +
        (j+1) + '.png';
}


// 8. 八日堂朔莉
var w12 = [];

for(var j = 0; j < 48; j++) {
   w12[j] = 'http://aruruu.net/ADDimages/sakuri/' +
        (j+1) + '.png';
}


// 9. 银条春心
var w13 = [];

for(var j = 0; j < 60; j++) {
   w13[j] = 'http://aruruu.net/ADDimages/parco/' +
        (j+1) + '.png';
}



// 10. 一丸弓
var w14 = [];

for(var j = 0; j < 14; j++) {
   w14[j] = 'http://aruruu.net/ADDimages/kyuu/' +
        (j+1) + '.png';
}



// 11. 梅宮伊瀬也
var w15 = [];

for(var j = 0; j < 14; j++) {
   w15[j] = 'http://aruruu.net/ADDimages/iseya/' +
        (j+1) + '.png';
}



// 12. 山吹九千代
var w16 = [];

for(var j = 0; j < 21; j++) {
w16[j] = 'http://aruruu.net/ADDimages/konochiyo/' +
        (j+1) + '.png';
}



// 13. 大蔵ルミネ
var w17 = [];

for(var j = 0; j < 72; j++) {
   w17[j] = 'http://aruruu.net/ADDimages/lumine/' +
        (j+1) + '.png';
}



// 14. 桜小路アトレ
var w18 = [];

for(var j = 0; j < 40; j++) {
   w18[j] = 'http://aruruu.net/ADDimages/atre/' +
        (j+1) + '.png';
}

// 偶像大师灰姑娘
var ww1 = [];

for(var j = 0; j < 40; j++) {
   ww1[j] = 'http://nekohand.moe/spsmile/05Sora/mjWwLqe_' +
        ((j)>=9?(j+1):('0'+(j+1))) + '.png';
}

// 叠加包
var ww2 = [];

for(var j = 0; j < 40; j++) {
   ww2[j] = 'http://nekohand.moe/spsmile/06Sora/special/p3p (' +
        (j+1) + ').png';
}

// 叠加包2
var ww3 = [];

for(var j = 0; j < 39; j++) {
   ww3[j] = 'http://nekohand.moe/spsmile/07/pg2 (' +
        (j+1) + ').png';
}
var ww4 = [];

for(var j = 0; j < 162; j++) {
   ww4[j] = 'http://nekohand.moe/spsmile/07/pg2 (' +
        (j+1) + ').gif';
}

var ww5 = [];

for(var j = 0; j < 10; j++) {
   ww5[j] = 'http://nekohand.moe/spsmile/07/Remilia (' +
        (j+1) + ').jpg';
}
// 罗小黑猫

var ww6 = [];

for(var j = 0; j < 93; j++) {
   ww6[j] = 'http://nekohand.moe/spsmile/07/luoxiaohei (' +
        (j+1) + ').gif';
}


// 萝莉们

var ww7 = [];

for(var j = 0; j < 26; j++) {
    ww7[j] = 'https://www.blog.nekohand.moe/emotion/(' +
          (j+1) + ').jpg';
}

// 北方酱

var ww8 = [];

for(var j = 0; j < 36; j++) {
    ww8[j] = 'https://www.blog.nekohand.moe/emotion/bei' +
      ((j)>=9?(j+1):('0'+(j+1))) + '.png';
}

var ww9 = [];

for(var j = 0; j < 137; j++) {
    ww9[j] = 'https://www.blog.nekohand.moe/emotion/bei (' +
      (j+137) + ').jpg';
}

var kfaux = [];

for(var j = 0; j < 19; j++) {
    kfaux[j] = 'http://ss.nekohand.moe/Asource/EmotionPic/KFEM (' +
      (j+1) + ').gif';
}

function loadingHandler(loadindex, target){
    
    switch (loadindex) {
        case 1: // 1:苍雪自带
        
            userInputImg(target, KFSmileURL,KFSmileCode, KFSmileTitle, returnPlainText, 30, 30);
            userInputImg(target, kfaux, kfaux, '', returnImg, 30, 30);
            userInputPlainText(target,  functionEmotion, functionDescription,returnPlainText);

            
            break;
        case 3:   // 2: 颜文字
            userInputPlainText(target,emotionArray, emotionArray, returnPlainText);
            break;
        case 4: // Lovelive大法好Small
            userInputImg(target, LoveliveSmalltargetURL, LoveliveSmalltargetURL, LoveliveSmalltargetTitle, returnImg, 90, 90);
            break;
        case 5: // Lovelive大法好Big
            userInputImg(target, LoveliveSmalltargetURL, LoveliveBigtargetURL, LoveliveBigtargetTitle, returnImg, 90, 90);
            break;
       // case 2:
         //   newElementEx = document.createElement('p');
           // newElementEx.innerHTML = "<b>快速输入出售帖, 神秘限制贴, 引用等等</b><br />";
           // target.appendChild(newElementEx);
           // userInputPlainText(target,  functionEmotion, functionDescription,returnPlainText);
           // break;
        case 6:
//            userInputImg(target, ACSmile3, ACSmile3, ACSmile3Title, returnImg, 60, 60);
            userInputImg(target, ACSmile4, ACSmile4, ACSmile4Title, returnImg, 60, 60);
            userInputImg(target, ACSmile5, ACSmile5, ACSmile5Title, returnImg, 60, 60);
            break;
        case 7:
            userInputImg(target, ACSmile2, ACSmile2, ACSmile2Title, returnImg, 50, 50);
            userInputImg(target, ACSmile1, ACSmile1, ACSmile1Title, returnImg, 50, 50);
            userInputImg(target, AkariSmile1, AkariSmile1, AkariSmile1Title, returnImg, 50, 50);
            break;
        case 2:
      //      userInputImg(target, BaiduSmile1, BaiduSmile1, BaiduSmile1Title, returnImg, 30, 30);
        //    userInputImg(target, BaiduSmile2, BaiduSmile2, BaiduSmile1Title, returnImg, 30, 30);
          //  userInputImg(target, BaiduSmile3, BaiduSmile3, BaiduSmile1Title, returnImg, 30, 30);
            //userInputImg(target, BaiduSmile4, BaiduSmile4, BaiduSmile1Title, returnImg, 30, 30);
            userInputImg(target, w6, w6, '', returnImg, 100, 100);
            userInputImg(target, w7, w7, '', returnImg, 100, 100);
            userInputImg(target, ww1, ww1, '', returnImg, 100, 100);
            break;
        case 10:
            userInputImg(target, AsahiURL, AsahiURL, AsahiURLTitle, returnImg, 80, 80);
            userInputImg(target, RisonaURL, RisonaURL, RisonaURLTitle, returnImg, 80, 80); 
            userInputImg(target, RunaURL, RunaURL, RunaURLTitle, returnImg, 80, 80); 
            userInputImg(target, w8, w8, '', returnImg, 100, 100);

     // 这个函数直接用就好了, 第1个参数不变, 第二第三个参数是地址的数组名, 第四个是Title的数组名, 后面3个是方法, 大小
            break;
        case 11:
             userInputImg(target, w17, w17, '', returnImg, 100, 100);
            userInputImg(target, w18, w18, '', returnImg, 100, 100);
            userInputImg(target, w10, w10, '', returnImg, 100, 100);
            userInputImg(target, w11, w11, '', returnImg, 100, 100);
            userInputImg(target, w12, w12, '', returnImg, 100, 100);
            userInputImg(target, w13, w13, '', returnImg, 100, 100);
            userInputImg(target, w14, w14, '', returnImg, 100, 100);
            userInputImg(target, w15, w15, '', returnImg, 100, 100);
            userInputImg(target, w16, w16, '', returnImg, 100, 100);
            

            break;
        case 8:
            
         //   userInputImg(target, mc2URL, mc2URL, '', returnImg, 50, 50);
          //  userInputImg(target, mc3URL, mc3URL, '', returnImg, 50, 50);
          //  userInputImg(target, mc4URL, mc4URL, '', returnImg, 50, 50);
            userInputImg(target, w4, w4, '', returnImg, 100, 100);
            userInputImg(target, w5, w5, '', returnImg, 100, 100);
            
            
            break;
            
            case 9:
            userInputImg(target, ACSmile6, ACSmile6, '', returnImg, 80, 100);
            break;
        case 12:
            userInputImg(target, BaiduSmile1, BaiduSmile1, '', returnImg, 30, 30);
            userInputImg(target, BaiduSmile3, BaiduSmile3, '', returnImg, 30, 30);
            userInputImg(target, ww2, ww2, '', returnImg, 50, 50);
           
            break;
            
       case 13:
            userInputImg(target, ww5, ww5, '', returnImg, 80, 80);
            userInputImg(target, ww3, ww3, '', returnImg, 80, 80);
            userInputImg(target, ww4, ww4, '', returnImg, 80, 80);
            break;
            
       case 14:
            userInputImg(target, ww6, ww6, '', returnImg, 80, 80);
            break;
    /*        
       case 15:
            userInputImg(target, ww7, ww7, '', returnImg, 80, 80);
            break;
       case 16:
            userInputImg(target, ww8, ww8, '', returnImg, 80, 80);
            break;
        case 17:
            userInputImg(target, ww9, ww9, '', returnImg, 80, 80);*/
            break;
            
            
   // case: 编号     
/*
         case xx:
            在这里添加 
            break;
*/            
//    
        default:
            emptyContainer.innerHTML = '<b style="color:orange">空白表情容器</b>';
            return;
    }
    
}
/* 自定义内容到此结束 */
/*------------------------------------*/






// 用户操作函数
function userInputPlainText(target, textBox,titleBox, func){
   var textlength = textBox.length;
    for (var j=0;j<textlength; j++){
        var newElementEx = document.createElement('a'); 
        var imgaa = document.createElement('img');
        imgaa.style.margin = "4px";
        newElementEx.onclick = func;
        newElementEx._target = textarea;
        newElementEx.style.cursor = 'pointer';
        imgaa.alt = titleBox[j];
        imgaa.useMap = textBox[j];
        target.appendChild(newElementEx);
        newElementEx.appendChild(imgaa);
   }
   target.parentNode.insertAfter(document.createElement('br'));
}

function userInputImg(target,thumbURL, targetURL, targetTitle, func, ImgWidth, ImgHeight){
    var emotionlength = targetURL.length;
    for (var i = 0; i<emotionlength; i++)
    {
        target.appendChild(
                    createButton(
                        textarea,     //对象
                        func,   //方法
                        targetTitle[i],   //提示文字
                        ImgWidth, // 缩略图宽
                        ImgHeight, //缩略图高
                        targetURL[i],thumbURL[i])); // 贴图地址和缩略图地址
    }

}


// 返回纯文本

function insertText(selector, text) {
    var target = document.querySelector(selector);
    var startPos = target.selectionStart;
    //var endPos = target.selectionEnd;
    var value = target.value;
    target.value = value.slice(0, startPos) + text + value.slice(startPos);
}


function returnPlainText(event) {
    var link, textarea, s, selectedTarget;
    link = event.currentTarget;
    textarea = link._target;
    selectedTarget = event.target;
    insertText("textarea", selectedTarget.useMap);
    // 定位光标
//    alert(startPos);
//    if(typeof textarea.selectionStart === 'number' && typeof textarea.selectionEnd === 'number'){
//        textarea.value = textarea.value.substring(0,startPos) + selectedTarget.innerHTML + textarea.value.substring(endPos, textarea.value.length);
//    }else{
//        textarea.value +=selectedTarget.useMap;
//    }
    event.preventDefault();
}

// 返回Wincode代码
function returnImg(event) {
    var link, textarea, s, selectedTarget;
    link = event.currentTarget;
    textarea = link._target;
    selectedTarget = event.target;
//    textarea.value += '[img]'+selectedTarget.useMap+'[/img]';
    var inserttext = '[img]'+selectedTarget.useMap+'[/img]';
    insertText("textarea", inserttext);
    event.preventDefault();
}

// ImgButton
function createButton(target, func, title, width, height, src, smallsrc) {
    // target: 控制对象
    // func:     方法
    // title:   提示文字
    // width,height  外观
    // src:  路径
    var img, button;
    img = document.createElement('img');
    img.width = width;
    img.height = height;
    img.style.borderTop = img.style.borderLeft = "1px solid #ccc";
    img.style.borderRight = img.style.borderBottom = "1px solid #888";
    img.style.marginRight = "2px";
    img.src = smallsrc;
    img.useMap = src;
    button = document.createElement('a');
    button._target = target;
    button.title = title;
    button.href = '#';
    button.onclick = func;
    button.style.cursor="pointer";
    button.appendChild(img);
    button.style.borderBottom = '1px solid';
    return button;       
}



// 清空容器用函数
function closeHandler(event){
    var deletTarget = document.getElementById('emotioncontainer9999');
    deletTarget.parentNode.removeChild(deletTarget);
    emptyContainer = document.createElement('div');
    emptyContainer.id = 'emotioncontainer9999';
    textarea.parentNode.insertBefore(emptyContainer, textarea);
}
function closeSetupHandler(event){
    var deletTarget = document.getElementById('setup');
    deletTarget.parentNode.removeChild(deletTarget);
}
function reSetupHandler(event){
    var deletTarget = document.getElementById('setup');
    deletTarget.parentNode.removeChild(deletTarget);
    user = prompt("请输入不想使用的表情组, 从0开始以逗号分隔, 如0,1,2,3, 可以留空表示全部显示","");
    setCookie("setup", user, 30);
    //alert(document.location.href);
   
}



//展开动作
function extendHandler(event){
    var newElement2,link,selectedTarget;
    
    /*清空当前容器*/
    closeHandler();
    
    newElement2 = document.createElement('div');
    newElement2.style.border = '1px solid #9999FF';
    //newElement2.innerHTML = '&nbsp;&nbsp;';
    newElement2.style.background = '#FCFCFC';
    newElement2.style.paddingLeft = '4px';
    newElement2.style.height = '200px';
    newElement2.style.width = textarea.style.width;
    newElement2.style.overflow = 'auto';
 //   newElement2.style.position = 'fixed';
   // newElement2.style.top = '0';
   // newElement2.style.left = '5px';
    emptyContainer.appendChild(newElement2);
    
    
    /*表情载入*/
    selectedTarget = event.target;
    var loadIndex = selectedTarget.id - '100100';
    //    alert(loadIndex);
    loadingHandler(loadIndex,newElement2);
    
    event.preventDefault();
}

//生成栏目
function createMenuItem(target,func,title, loadTitle){
    var newElement;
    newElement = document.createElement('a');
    newElement.style.height = '40px';
    newElement.style.width = '100px';
    newElement.innerHTML = '  [' +title+ ']'+'&nbsp;';
    newElement.onclick = func;
    newElement.style.cursor = 'pointer';
    newElement.id = loadTitle;
    if(title!==undefined){
    target.appendChild(newElement);
    }
}
function setupHandler(){
            /*------------------------------------*/
    var user=getCookie("setup");
    if (document.getElementById('setup')){return;}
    if (user != "") {
    newElement = document.createElement('div');
    newElement.id = 'setup';
    newElement.style.left = '43%';
    newElement.style.bottom = '100px';
    newElement.style.width = '400px';
    newElement.style.height = '50px';
    newElement.style.border = '3px solid deeppink';
    newElement.style.padding = '5px 5px';
   
    newElement.style.background = '#eee';
    newElement.innerHTML = ' ';
    document.body.appendChild(newElement);
    document.getElementById('setup').style.position = 'fixed';
    /*
    var submitform = document.createElement('fieldset');
    submitform.id = 'formsetup';
    submitform.style.margin = "10px 10px";
    submitform.innerHTML =' <legend>勾选启用的表情组</legend>';
    document.getElementById('setup').appendChild(submitform);
    for(j=0;j<ItemTitleArray.length;j++)
    {
        var checkBoxItem = document.createElement('input');
        checkBoxItem.type = 'checkbox';
        checkBoxItem.name = ItemTitleArray[j];
        checkBoxItem.value = loadTitleArray[j];
        document.getElementById('formsetup').appendChild(checkBoxItem);
        var descriptionWord = document.createElement('b');
        descriptionWord.innerHTML = ItemTitleArray[j]+'  ';
        document.getElementById('formsetup').appendChild(descriptionWord);
    }*/
    var cookienow = document.createElement('b');
    cookienow.innerHTML = user + '<br>';    
    document.getElementById('setup').appendChild(cookienow);
    var additionalInfo = document.createElement('button');
    additionalInfo.type = 'submit';
    additionalInfo.name = 'setup';
    additionalInfo.innerHTML = ' 保存并关闭 ';
    additionalInfo.onclick = closeSetupHandler;
    additionalInfo.style.cursor = 'pointer';
    document.getElementById('setup').appendChild(additionalInfo);
        
    var additionalInfo2 = document.createElement('button');
    additionalInfo2.type = 'submit';
    additionalInfo2.name = 'setup';
    additionalInfo2.innerHTML = ' 重新设定 ';
    additionalInfo2.onclick = reSetupHandler;
    additionalInfo2.style.cursor = 'pointer';
    document.getElementById('setup').appendChild(additionalInfo2);
/*    
     var additionalInfo = document.createElement('button');
    additionalInfo.type = 'submit';
    additionalInfo.name = 'setup';
    additionalInfo.value = ' 确定 ';
    additionalInfo.onclick = closeSetupHandler;
    additionalInfo.style.cursor = 'pointer';
    document.getElementById('formsetup').appendChild(additionalInfo);
    
     var additionalInfo = document.createElement('button');
    additionalInfo.type = 'submit';
    additionalInfo.name = 'setup';
    additionalInfo.value = ' 默认值 ';
    additionalInfo.onclick = closeSetupHandler;
    additionalInfo.style.cursor = 'pointer';
    document.getElementById('formsetup').appendChild(additionalInfo);
    */
        //alert("Welcome again " + user);
    } else {
       user = prompt("请输入不想使用的表情组, 从0开始以逗号分隔, 如0,1,2,3, 可以留空表示全部显示","");
       if (user != "" && user != null) {
           setCookie("setup", user, 30);
       }
    }
    
}
// 生成项目
function createMenuElement(target, listNumber){
    var newElement;
    newElement = document.createElement('div');
    newElement.style.border = '1px solid #9999FF';
    newElement.id='itemlist';
    newElement.align = 'left';
    newElement.style.paddingLeft = '4px';
    newElement.innerHTML = ' <b style="color:gold">⑨_⑨ </b> ';
    newElement.style.background = '#FCFCFC';
    newElement.style.height = '44px';
    newElement.style.width = '100%' ;
    //document.getElementById('itemlist').style.position = 'relative';
    target.parentNode.insertBefore(newElement, target);
    
    for (var i = 0; i < listNumber; i++) {
        createMenuItem(newElement,extendHandler,ItemTitleArray[i],loadTitleArray[i]);
    }
    
     var brElement = document.createElement('br');

    
    
    var additionalInfo = document.createElement('a');
    additionalInfo.innerHTML = ' <b style="color:red"> [隐藏] </b> ';
    additionalInfo.onclick = closeHandler;
    additionalInfo.style.cursor = 'pointer';
    newElement.appendChild(additionalInfo);
    //newElement.appendChild(brElement);
    var additionalInfo3 = document.createElement('a');
    additionalInfo3.innerHTML = '<b style="color:deeppink;z-index:1001;"> [禁用表情] </b>';
    additionalInfo3.onclick = setupHandler;
    additionalInfo3.style.cursor = 'pointer';
    newElement.appendChild(additionalInfo3);
    
//    var additionalInfo2 = document.createElement('b');
//    additionalInfo2.innerHTML = ' <a style="color:deeppink;text-align:right;" href="http://blog.nekohand.moe/" target="_blank"> eddie32 </a> ';
//    newElement.appendChild(additionalInfo2);
   
   
}

// 设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
     history.go(0);
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}






var KFOL = {
    init: function(){

textareas = document.getElementsByTagName('textarea');
if (!textareas.length) { return; }
        textarea = textareas[0];
        emptyContainer = document.createElement('div');
        emptyContainer.id = 'emotioncontainer9999';
        createMenuElement(textarea, totalNum); 
        textarea.parentNode.insertBefore(emptyContainer, textarea);
    }
}
KFOL.init();


