# KF论坛表情扩展插件  

Add user-defined emotion for BBCODE forum.

KF论坛、BBCODE论坛专用的回复表情, 自定义插图的脚本。 用户在发帖时可以快速输入自定义表情和论坛BBCODE。

## 脚本地址
1. [【安装地址】](https://greasyfork.org/zh-CN/scripts/5124-%E7%BB%AF%E6%9C%88%E8%A1%A8%E6%83%85%E5%A2%9E%E5%BC%BA%E6%8F%92%E4%BB%B6)
2. [【更新地址】](https://raw.githubusercontent.com/liu599/KF-Emotion-UserScript/master/dist/kf.js)
3. [【备用地址】](http://gulp.nekohand.moe/KF-Emotion-UserScript/dist/kf.js)


## 用户脚本安装方法
1. __Firefox：__ 安装[Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/)扩展 或 [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/)扩展，重启浏览器后访问脚本下载地址安装脚本即可
2. __Chrome（及各种采用Chromium内核的浏览器，如360、搜狗、百度、猎豹、QQ浏览器等）：__  
安装[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)扩展（需翻墙），然后访问脚本下载地址安装脚本即可  
__（注意：安装脚本的时候请点击“安装”按钮，不要点“安装在Chrome”的按钮【[见251楼](http://bbs.2dkf.com/read.php?tid=508450&spid=12484531)】）__  
_（各种采用了Chromium内核的国产浏览器也可尝试到各自的应用市场里搜索Tampermonkey扩展）_
3. __Edge：__ 安装[Tampermonkey](https://www.microsoft.com/store/apps/9nblggh5162s)扩展，然后访问脚本下载地址安装脚本即可
4. __Opera：__ 安装[Violent monkey](https://addons.opera.com/extensions/details/violent-monkey/)扩展 或 [Tampermonkey](https://addons.opera.com/extensions/details/tampermonkey-beta/)扩展，然后访问脚本下载地址安装脚本即可
5. __傲游浏览器：__ 安装[暴力猴](http://extension.maxthon.cn/detail/index.php?view_id=1680)扩展，然后访问脚本下载地址安装脚本即可
6. __手机浏览器：__ [详情请见此贴](http://bbs.2dkf.com/read.php?tid=509273)

## 项目开发者部署
1. 安装nodejs环境
2. git clone至本地
3. cd到下载解压好的KF-Emotion-UserScript目录, 运行npm install安装依赖包
4. 运行`gulp --pv x.x.x`(x为1-9的数字)可以更新版本并自动打包编译为dist/kf.js(es2015兼容版本)以及dist/kfES2016.js(es2016版本)
5. 还可以启动http-server在index.html来测试效果

## 联系作者
1. 账号1: [eddie32](http://bbs.9moe.com/profile.php?uid=116467)
2. 账号2: [徳井青空](http://bbs.9moe.com/profile.php?uid=398027)


## 更新日志
1. __Version 2.0.1:__  2014.09.20版本: 正式版插件
2. __Version 3.0.1:__  2016.11.13版本: bug修复
3. __Version 4.0.0:__  2017.01.09版本: 更改脚本架构。
4. __Version 4.2.9:__  2017.01.26版本：按照ES6标准更改代码, 继续学习gulp项目管理工具。
5. __Version 4.3.0:__  2017.01.30版本: 兼容性修复, document.getElementsByTagName方法返回的是HTMLCollection。Comment from 布丁: 在较新版的Firefox中，HTMLCollection支持Iterator接口，所以可以用for...of循环而在Chrome中（我只在使用Chromium 50内核的浏览器下测试过），HTMLCollection不支持Iterator接口，不可用直接使用for...of循环。 目前采用解决方法: `Array.from`。
6. __Version 4.3.1:__  2017.01.31版本：修正因父容器`position:relative`导致放大图的位移错误。 Comment from 布丁: 还有Array.from方法确实能解决Chrome下HTMLCollection不能用for...of循环的问题，不过Chrome 45才开始支持Array.from方法, 若想兼容以前的浏览器的话，可以用for...in循环，或者加个babel-polyfill脚本。当然你不想兼容使用Chromium 45以前内核的浏览器也没多大问题，现在国内市场份额最多Chromium套壳浏览器--360安全浏览器的最新正式版也是采用Chromium 45内核了。

## 开发计划
1. 收藏功能
2. 自定义上传表情功能
3. 表情云共享: 提供用户分享表情(对表情进行评分, 下载高分表情的功能)

## 鸣谢

[【喵拉布丁】KF Online助手项目](https://github.com/miaolapd/KF_Online_Assistant)

## License
[MIT](http://opensource.org/licenses/MIT)
