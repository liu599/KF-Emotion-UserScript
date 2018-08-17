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
const app = new Emotion.EmotionPlugin('eddie32', reserveData);
containers.item(0).parentNode.insertBefore(app.appInstance, containers.item(0));
