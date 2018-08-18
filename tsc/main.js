"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emotion = require("./emotion");
var containers = document.getElementsByTagName('textarea');
var reserveData = [
    {
        groupEmotions: [
            {
                itemAddress: ['出售贴sell=售价', '引用', '隐藏hide=神秘等级', '插入代码', '删除线', '跑马灯', '文字颜色', '粗体', '下划线', '斜体', '水平线', '背景色', '插入图片',],
                itemDescription: [],
            },
        ],
        groupTitle: '快捷',
        groupType: Emotion.GroupType.Plain,
    },
    {
        groupEmotions: [
            {
                itemAddress: ['(￣∇￣)', '(￣3￣)', '(￣ｰ￣)', '(￣ . ￣)', '(￣︿￣)', '(￣︶￣)', '(*´ω`*)', '(・ω・)', '(⌒▽⌒)', '(￣▽￣）', '(=・ω・=)', '(｀・ω・´)', '(〜￣△￣)〜', '(･∀･)', '(°∀°)ﾉ', '(￣3￣)'],
                itemDescription: [],
            },
        ],
        groupTitle: '颜文字',
        groupType: Emotion.GroupType.Plain,
    },
];
var uniquePrefix = 'eddie32';
var cssStyles = {
    mainView: "#" + uniquePrefix + "0000 {font: 12px/28px \"Hiragino Sans GB\",\"Microsoft YaHei\",\"Arial\",\"sans-serif\"; margin-bottom: 5px; liststyle: none}",
    stageView: "#" + uniquePrefix + "stage {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:4px;margin-bottom:4px; border:1px solid #ff4351; position:relative; z-index:200; }",
    menuView: "#" + uniquePrefix + "menu {cursor:pointer;display:inline-block;cursor:pointer; text-align:center; padding: 0 8px; font: 12px/30px \"Hiragino Sans GB\",\"Microsoft YaHei\",\"Arial\",\"sans-serif\";background-color: #ff4351;border-color: #ff4351;color: #fff; }",
};
var app = new Emotion.EmotionPlugin(uniquePrefix, reserveData, cssStyles);
containers.item(0).parentNode.insertBefore(app.appInstance, containers.item(0));
//# sourceMappingURL=main.js.map