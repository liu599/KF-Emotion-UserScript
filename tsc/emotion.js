"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./utils");
var GroupType;
(function (GroupType) {
    GroupType[GroupType["ImageLink"] = 0] = "ImageLink";
    GroupType[GroupType["Plain"] = 1] = "Plain";
    GroupType[GroupType["Image"] = 2] = "Image";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
;
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
    function EmotionPlugin(name, data, css) {
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
        var stage = document.createElement('div');
        stage.id = this.divPrefix + "stage";
        this.appInstance.appendChild(stage);
        this.stageInstance = stage;
    };
    EmotionPlugin.prototype.loadMenu = function (item) {
        var _this = this;
        var ulContainer = document.createElement('ul');
        item.forEach(function (mi, index) {
            var listItem = document.createElement('li');
            var clickItem = document.createElement('a');
            listItem.className = _this.divPrefix + "00001";
            clickItem.title = mi.groupTitle;
            clickItem.dataset.loadtype = "" + mi.groupType;
            clickItem.addEventListener('click', function (e) { return _this.expandMenu(mi.groupType); });
            clickItem.href = "#";
            clickItem.innerHTML = "<span class=\"t\">" + mi.groupTitle + "</span>";
            console.log(clickItem);
            listItem.appendChild(clickItem);
            ulContainer.appendChild(listItem);
        });
        this.menuInstance.appendChild(ulContainer);
    };
    EmotionPlugin.prototype.expandMenu = function (gptype) {
        switch (gptype) {
            case GroupType.Plain:
                console.log('plain');
                break;
            case GroupType.ImageLink:
                console.log('imageLink');
                break;
            default:
                console.log('default');
        }
    };
    return EmotionPlugin;
}());
exports.EmotionPlugin = EmotionPlugin;
//# sourceMappingURL=emotion.js.map