"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var EmotionPlugin = (function () {
    function EmotionPlugin(name) {
        this.divPrefix = name;
        this.appInstance = document.createElement('div');
        this.appInstance.id = this.divPrefix + "0000";
        this.addMenus();
        this.addStage();
    }
    EmotionPlugin.prototype.addMenus = function () {
        var menu = document.createElement('div');
        menu.id = this.divPrefix + "menu";
        this.appInstance.appendChild(menu);
    };
    EmotionPlugin.prototype.addStage = function () {
        var stage = document.createElement('div');
        stage.id = this.divPrefix + "stage";
        this.appInstance.appendChild(stage);
    };
    return EmotionPlugin;
}());
exports.EmotionPlugin = EmotionPlugin;
//# sourceMappingURL=emotion.js.map