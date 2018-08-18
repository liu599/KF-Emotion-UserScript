"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./utils");
var GroupType;
(function (GroupType) {
    GroupType[GroupType["ImageLink"] = 0] = "ImageLink";
    GroupType[GroupType["Plain"] = 1] = "Plain";
    GroupType[GroupType["Image"] = 2] = "Image";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
var EmotionMenuItem = (function () {
    function EmotionMenuItem() {
    }
    return EmotionMenuItem;
}());
exports.EmotionMenuItem = EmotionMenuItem;
var EmotionMenu = (function () {
    function EmotionMenu() {
    }
    return EmotionMenu;
}());
exports.EmotionMenu = EmotionMenu;
var CssStyles = (function () {
    function CssStyles() {
    }
    return CssStyles;
}());
exports.CssStyles = CssStyles;
var EmotionPlugin = (function () {
    function EmotionPlugin(name, data, css, targetTextarea) {
        this.targetInstance = targetTextarea;
        this.divPrefix = name;
        this.appInstance = document.createElement('div');
        this.appInstance.id = this.divPrefix + "0000";
        this.EmotionMenu = data;
        this.EmotionStyles = css;
        this.addStyles(css);
        this.addMenus();
        this.addStage();
        this.loadMenu(data);
    }
    EmotionPlugin.prototype.addStyles = function (css) {
        var styleInstance = document.createElement('style');
        styleInstance.innerHTML = utils.join(css);
        this.appInstance.appendChild(styleInstance);
    };
    EmotionPlugin.prototype.addMenus = function () {
        var menu = document.createElement('div');
        menu.id = this.divPrefix + "menu";
        this.appInstance.appendChild(menu);
        this.menuInstance = menu;
    };
    EmotionPlugin.prototype.addStage = function () {
        var _this = this;
        var stage = document.createElement('div');
        stage.id = this.divPrefix + "stage";
        stage.addEventListener('click', function (e) { return _this.addEmotions(e); });
        this.appInstance.appendChild(stage);
        this.stageInstance = stage;
    };
    EmotionPlugin.prototype.addEmotions = function (e) {
        console.log(e.target, e.target instanceof HTMLAnchorElement);
        var target = e.target;
        var scrollPos = this.targetInstance.scrollTop;
        var curValue = this.targetInstance.value;
        var caretPos = this.targetInstance.selectionStart;
        var front = curValue.substring(0, caretPos);
        var back = curValue.substring(this.targetInstance.selectionEnd, curValue.length);
        if (e.target instanceof HTMLAnchorElement) {
            this.targetInstance.value = front + decodeURI(target.dataset.sign) + back;
            caretPos = caretPos + decodeURI(target.dataset.sign).length;
        }
        if (e.target instanceof HTMLImageElement) {
            this.targetInstance.value = front + ("[img]" + e.target.src + "[/img]") + back;
            caretPos = caretPos + e.target.src.length + 11;
        }
        this.targetInstance.selectionStart = caretPos;
        this.targetInstance.selectionEnd = caretPos;
        this.targetInstance.focus();
        this.targetInstance.scrollTop = scrollPos;
    };
    EmotionPlugin.prototype.loadMenu = function (item) {
        var _this = this;
        var ulContainer = document.createElement('ul');
        item.forEach(function (mi) {
            var listItem = document.createElement('li');
            var clickItem = document.createElement('a');
            listItem.className = _this.divPrefix + "00001";
            clickItem.title = mi.groupTitle;
            clickItem.dataset.loadtype = "" + mi.groupType;
            clickItem.addEventListener('click', function (e) { return _this.expandMenu(e, mi); });
            clickItem.href = "#";
            clickItem.innerHTML = "<span class=\"t\">" + mi.groupTitle + "</span>";
            console.log(clickItem);
            listItem.appendChild(clickItem);
            ulContainer.appendChild(listItem);
        });
        this.menuInstance.appendChild(ulContainer);
    };
    EmotionPlugin.prototype.expandMenu = function (e, menuItem) {
        var _this = this;
        this.clearStage();
        switch (menuItem.groupType) {
            case GroupType.Plain:
                console.log('plain', e.target);
                menuItem.groupEmotions.forEach(function (emotion) {
                    emotion.itemAddress.forEach(function (addr, idx) {
                        var plainTxtItem = document.createElement('a');
                        plainTxtItem.className = 'txtBtnEmotion';
                        plainTxtItem.setAttribute('data-sign', "" + encodeURI(addr));
                        plainTxtItem.innerHTML = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : addr;
                        _this.stageInstance.appendChild(plainTxtItem);
                    });
                });
                break;
            case GroupType.ImageLink:
                console.log('imageLink');
                menuItem.groupEmotions.forEach(function (emotion) {
                    emotion.itemAddress.forEach(function (addr, idx) {
                        var imageItem = document.createElement('img');
                        imageItem.src = addr;
                        imageItem.className = 'Ems';
                        _this.stageInstance.appendChild(imageItem);
                    });
                });
                break;
            default:
                console.log('default');
        }
    };
    EmotionPlugin.prototype.clearStage = function () {
        this.stageInstance.innerHTML = '';
    };
    return EmotionPlugin;
}());
exports.EmotionPlugin = EmotionPlugin;
//# sourceMappingURL=emotion.js.map