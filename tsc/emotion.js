"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GroupType;
(function (GroupType) {
    GroupType[GroupType["ImageLink"] = 0] = "ImageLink";
    GroupType[GroupType["Plain"] = 1] = "Plain";
    GroupType[GroupType["Image"] = 2] = "Image";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
;
var EmotionMenu = (function () {
    function EmotionMenu() {
    }
    return EmotionMenu;
}());
exports.EmotionMenu = EmotionMenu;
var EmotionMenuItem = (function (_super) {
    __extends(EmotionMenuItem, _super);
    function EmotionMenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EmotionMenuItem;
}(EmotionMenu));
exports.EmotionMenuItem = EmotionMenuItem;
var EmotionPlugin = (function () {
    function EmotionPlugin(name, data) {
        this.divPrefix = name;
        this.appInstance = document.createElement('div');
        this.appInstance.id = this.divPrefix + "0000";
        this.addMenus();
        this.addStage();
        this.loadMenu(data);
    }
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
        var ulContainer = document.createElement('ul');
        item.forEach(function (mi, index) {
            var listItem = document.createElement('li');
            listItem.innerHTML = "<a title=\"" + mi.groupTitle + "\" data-loadtype=\"" + mi.groupType + "\" class=\"subMenu\">" + mi.groupTitle + "</a>";
            ulContainer.appendChild(listItem);
        });
        this.appInstance.appendChild(ulContainer);
    };
    return EmotionPlugin;
}());
exports.EmotionPlugin = EmotionPlugin;
//# sourceMappingURL=emotion.js.map