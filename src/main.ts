import * as Emotion from './emotion';
const containers = document.getElementsByTagName('textarea');
const reserveData: Array<Emotion.EmotionMenu> = [
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
const uniquePrefix = 'eddie32';
const cssStyles: Emotion.CssStyles = {
  mainView: `#${uniquePrefix}0000 {font: 12px/28px "Hiragino Sans GB","Microsoft YaHei","Arial","sans-serif"; margin-bottom: 5px; }`,
  stageView: `#${uniquePrefix}stage {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:4px;margin-bottom:4px; border:1px solid #ff4351; position:relative; z-index:200; }`,
  menuView: `#${uniquePrefix}menu {cursor:pointer;display:inline-block;cursor:pointer; text-align:center; padding: 0 8px; font: 12px/30px "Hiragino Sans GB","Microsoft YaHei","Arial","sans-serif";background-color: #ff4351;border-color: #ff4351;color: #fff; }`,
};
const app = new Emotion.EmotionPlugin(uniquePrefix, reserveData, cssStyles);
containers.item(0).parentNode.insertBefore(app.appInstance, containers.item(0));
