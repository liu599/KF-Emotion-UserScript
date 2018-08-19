"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emotion = require("./emotion");
var utils = require("./utils");
var containers = document.getElementsByTagName('textarea');
var targetTextarea = containers.item(0);
var uniquePrefix = 'eddie32';
var reserveData = [
    {
        groupEmotions: [
            {
                itemAddress: utils.loadEmotions({
                    startPos: 1,
                    arrLength: 49,
                    strPrefix: (typeof window.imgpath !== 'undefined' ? window.imgpath : '') + "/post/smile/em/em",
                    strSuffix: '.gif',
                    leadingZero: true,
                }),
                itemDescription: utils.loadEmotions({
                    startPos: 10,
                    arrLength: 58,
                    strPrefix: "[s:",
                    strSuffix: ']',
                    leadingZero: false,
                }),
            },
        ],
        groupTitle: 'KF',
        groupType: Emotion.GroupType.ImageLink,
    },
    {
        groupEmotions: [
            {
                itemAddress: ['[sell=100][/sell]', '[quote][/quote]', '[hide=100][/hide]', '[code][/code]', '[strike][/strike]', '[fly][/fly]', '[color=#00FF00][/color]', '[b][/b]', '[u][/u]', '[i][/i]', '[hr]', '[backcolor=][/backcolor]', '[img][/img]'],
                itemDescription: ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体', '下划线', '斜体', '水平线', '背景色', '插入图片'],
            },
        ],
        groupTitle: '快捷',
        groupType: Emotion.GroupType.Plain,
    },
    {
        groupEmotions: [
            {
                itemAddress: ['(●・ 8 ・●)', '╰(๑◕ ▽ ◕๑)╯', '(ゝω・)', '〜♪♪', '(ﾟДﾟ≡ﾟДﾟ)', '(＾o＾)ﾉ', '(|||ﾟДﾟ)', '(`ε´ )', '(╬ﾟдﾟ)', '(|||ﾟдﾟ)', '(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)', '╮(￣▽￣)╭', '( ´_ゝ｀)', 'のヮの', '(ﾉ؂< ๑）诶嘿☆～', '(&lt;_&lt;)', '(&gt;_&gt;)', '(;¬_¬)', '(▔□▔)/', '(ﾟДﾟ≡ﾟдﾟ)!?', 'Σ(ﾟдﾟ;)', 'Σ( ￣□￣||)', '(´；ω；`)', '（/TДT)/', '(^・ω・^ )', '(｡･ω･｡)', '(●￣(ｴ)￣●)', 'ε=ε=(ノ≧∇≦)ノ', '(´･_･`)', '(-_-#)', '（￣へ￣）', '(￣ε(#￣) Σ', 'ヽ(`Д´)ﾉ', '(╯°口°)╯(┴—┴', '（#-_-)┯━┯', '_(:3」∠)_', '(笑)', '(汗)', '(泣)', '(苦笑)', '(´・ω・`)', '(╯°□°）╯︵ ┻━┻', '(╯‵□′)╯︵┻━┻', '( ´ρ`)', '( ﾟωﾟ)', '(oﾟωﾟo)', '(　^ω^)', '(｡◕∀◕｡)', '/( ◕‿‿◕ )\\', 'ε٩( º∀º )۶з', '(￣ε(#￣)☆╰╮(￣▽￣///)', '（●´3｀）~♪', '_(:з」∠)_', 'хорошо!', '＼(^o^)／', '(•̅灬•̅ )', '(ﾟДﾟ)', 'まったく、小学生は最高だぜ！！', 'ε=ε=ε=┏(゜ロ゜;)┛', '(；°ほ°)', '⎝≧⏝⏝≦⎠', 'ヽ(✿ﾟ▽ﾟ)ノ', '焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！', '|•ω•`)'],
                itemDescription: [],
            },
        ],
        groupTitle: '颜文字',
        groupType: Emotion.GroupType.Plain,
    },
    {
        groupEmotions: [
            {
                itemAddress: utils.loadEmotions({
                    startPos: 1,
                    arrLength: 17,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds/2233 (',
                    strSuffix: ').gif',
                    leadingZero: false,
                }),
                itemDescription: [],
            },
            {
                itemAddress: utils.loadEmotions({
                    startPos: 0,
                    arrLength: 14,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds/bilibiliTV (',
                    strSuffix: ').png',
                    leadingZero: false,
                }),
                itemDescription: [],
            },
        ],
        groupTitle: 'BILIBILI',
        groupType: Emotion.GroupType.ImageLink,
    },
    {
        groupEmotions: [
            {
                itemAddress: utils.loadEmotions({
                    startPos: 0,
                    arrLength: 20,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/pcrn/sticker (',
                    strSuffix: ').png',
                    leadingZero: false,
                }),
                itemDescription: [],
            },
            {
                itemAddress: utils.loadEmotions({
                    startPos: 1,
                    arrLength: 21,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds2/akari',
                    strSuffix: '.gif',
                    leadingZero: false,
                }),
                itemDescription: [],
            },
            {
                itemAddress: utils.loadEmotions({
                    startPos: 2,
                    arrLength: 64,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds4/0xx',
                    strSuffix: '.png',
                    leadingZero: false,
                }),
                itemDescription: [],
            },
            {
                itemAddress: utils.loadEmotions({
                    startPos: 1,
                    arrLength: 41,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive2nd',
                    strSuffix: '.png',
                    leadingZero: false,
                }),
                itemDescription: [],
            },
        ],
        groupTitle: '流行',
        groupType: Emotion.GroupType.ImageLink,
    },
    {
        groupEmotions: [
            {
                itemAddress: utils.loadEmotions({
                    startPos: 1,
                    arrLength: 51,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds6/',
                    strSuffix: '.png',
                    leadingZero: false,
                }),
                itemDescription: [],
            },
            {
                itemAddress: utils.loadEmotions({
                    startPos: 1,
                    arrLength: 40,
                    strPrefix: 'http://o6smnd6uw.bkt.clouddn.com/xds5/',
                    strSuffix: '.gif',
                    leadingZero: true,
                }),
                itemDescription: [],
            },
        ],
        groupTitle: 'ACFUN',
        groupType: Emotion.GroupType.ImageLink,
    },
];
var cssStyles = {
    mainView: "#" + uniquePrefix + "0000 {font: 12px/28px \"Hiragino Sans GB\",\"Microsoft YaHei\",\"Arial\",\"sans-serif\"; margin-bottom: 5px; }",
    stageView: "#" + uniquePrefix + "stage {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:4px;margin-bottom:4px; border:1px solid #ff4351; position:relative; z-index:200; display: none }",
    menuView: "#" + uniquePrefix + "menu {display:inline-block;cursor:pointer; text-align:center; padding: 0; font: 12px/30px \"Hiragino Sans GB\",\"Microsoft YaHei\",\"Arial\",\"sans-serif\";background-color: #ff4351;border-color: #ff4351;color: #fff; } #" + uniquePrefix + "menu ul { list-style-type: none; margin: 0; padding: 0; } #" + uniquePrefix + "menu ul li { display: inline-block; text-align: middle } #" + uniquePrefix + "menu ul li a { display: block; color: #f2f2f2; min-width: 55px; } #" + uniquePrefix + "menu ul li a:hover, #" + uniquePrefix + "menu ul li a.active {background-color: #ff7680;border-color: #ff7680; color: #f2f2f2;}",
    txtBtn: "a.txtBtnEmotion { display: inline-block; text-decoration: none; cursor: pointer; padding: 0 8px; font: 12px/24px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif';} a.txtBtnEmotion:hover { background: #ff7680; color: #fff; }",
    imageLink: ".Ems { cursor: pointer; width: 50px; height: 50px; display: inline-block; z-index: 400;  }",
};
var app = new Emotion.EmotionPlugin(uniquePrefix, reserveData, cssStyles, targetTextarea);
targetTextarea.parentNode.insertBefore(app.appInstance, targetTextarea);
//# sourceMappingURL=main.js.map