"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./utils");
var GroupType;
(function (GroupType) {
    GroupType[GroupType["ImageLink"] = 0] = "ImageLink";
    GroupType[GroupType["Plain"] = 1] = "Plain";
    GroupType[GroupType["Image"] = 2] = "Image";
    GroupType[GroupType["User"] = 3] = "User";
})(GroupType = exports.GroupType || (exports.GroupType = {}));
var EmotionMenuItem = /** @class */ (function () {
    function EmotionMenuItem() {
    }
    return EmotionMenuItem;
}());
exports.EmotionMenuItem = EmotionMenuItem;
var EmotionMenu = /** @class */ (function () {
    function EmotionMenu() {
    }
    return EmotionMenu;
}());
exports.EmotionMenu = EmotionMenu;
var CssStyles = /** @class */ (function () {
    function CssStyles() {
    }
    return CssStyles;
}());
exports.CssStyles = CssStyles;
var EmotionPlugin = /** @class */ (function () {
    function EmotionPlugin(name, data, css, targetTextarea) {
        this.targetInstance = targetTextarea;
        this.divPrefix = name;
        this.appInstance = document.createElement('div');
        this.Popup = document.createElement('div');
        this.Popup.id = this.divPrefix + "ppp";
        this.Popup.innerHTML = "<div style=\"display: block; width: 100%; padding: 10px;\"><h3>\u6BCF\u4E2A\u8868\u60C5\u4E00\u884C</h3><textarea id=\"eddie32pqp\" style=\"overflow-x: auto; width: 90%;\" rows=\"12\" ></textarea><button id=\"" + this.divPrefix + "ppp1\">\u786E\u8BA4</button><button id=\"" + this.divPrefix + "ppp2\">\u53D6\u6D88</button>";
        this.appInstance.id = this.divPrefix + "0000";
        this.appInstance.appendChild(this.Popup);
        this.EmotionMenu = data;
        this.EmotionStyles = css;
        this.loadMenus();
        this.loadMenuData(data);
        this.loadStage();
        this.loadStyles(css);
        // console.log(window.getComputedStyle(this.targetInstance, null).getPropertyValue('width'));
        this.stageInstance.style.width = window.getComputedStyle(this.targetInstance, null).getPropertyValue('width');
    }
    EmotionPlugin.prototype.loadStyles = function (css) {
        var styleInstance = document.createElement('style');
        styleInstance.innerHTML = utils.join(css);
        this.appInstance.appendChild(styleInstance);
    };
    EmotionPlugin.prototype.loadMenus = function () {
        var menu = document.createElement('div');
        menu.id = this.divPrefix + "menu";
        this.appInstance.appendChild(menu);
        this.menuInstance = menu;
    };
    EmotionPlugin.prototype.loadStage = function () {
        var _this = this;
        var stage = document.createElement('div');
        stage.id = this.divPrefix + "stage";
        stage.addEventListener('click', function (e) { return _this.stageEmitter(e); });
        this.appInstance.appendChild(stage);
        this.stageInstance = stage;
    };
    EmotionPlugin.prototype.stageEmitter = function (e) {
        var target = e.target;
        var scrollPos = this.targetInstance.scrollTop;
        var curValue = this.targetInstance.value;
        var caretPos = this.targetInstance.selectionStart;
        var front = curValue.substring(0, caretPos);
        var back = curValue.substring(this.targetInstance.selectionEnd, curValue.length);
        if (e.target instanceof HTMLSpanElement) {
            console.log('span element');
            if (e.target.id === this.divPrefix + "add") {
                this.addUserDefinedEmotions(e);
            }
            if (e.target.id === this.divPrefix + "delete") {
                this.deleteUserDefinedEmotions();
            }
        }
        if (e.target instanceof HTMLAnchorElement) {
            this.targetInstance.value = front + decodeURI(target.dataset.sign) + back;
            caretPos = caretPos + decodeURI(target.dataset.sign).length;
        }
        if (e.target instanceof HTMLImageElement) {
            if (e.target.dataset.link !== '') {
                this.targetInstance.value = front + ("" + e.target.dataset.link) + back;
                caretPos = caretPos + 6;
            }
            else {
                this.targetInstance.value = front + ("[img]" + e.target.src + "[/img]") + back;
                caretPos = caretPos + e.target.src.length + 11;
            }
        }
        this.targetInstance.selectionStart = caretPos;
        this.targetInstance.selectionEnd = caretPos;
        this.targetInstance.focus();
        this.targetInstance.scrollTop = scrollPos;
    };
    EmotionPlugin.prototype.loadMenuData = function (item) {
        var _this = this;
        var ulContainer = document.createElement('ul');
        item.forEach(function (mi) {
            var listItem = document.createElement('li');
            var clickItem = document.createElement('a');
            listItem.className = _this.divPrefix + "00001";
            clickItem.title = mi.groupTitle;
            clickItem.dataset.loadtype = "" + mi.groupType;
            clickItem.addEventListener('click', function (e) { return _this.expandMenu(e, mi, listItem.className); });
            clickItem.innerHTML = "<span class=\"t\">" + mi.groupTitle + "</span>";
            listItem.appendChild(clickItem);
            ulContainer.appendChild(listItem);
        });
        this.menuInstance.appendChild(ulContainer);
    };
    EmotionPlugin.prototype.expandMenu = function (e, menuItem, className) {
        var _this = this;
        this.clearStage();
        this.toggleStage(e, className);
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
                        imageItem.dataset.link = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : '';
                        imageItem.className = 'Ems';
                        _this.stageInstance.appendChild(imageItem);
                    });
                });
                break;
            case GroupType.User:
                console.log('user');
                var addBtn = document.createElement('span');
                addBtn.innerHTML = ' [增加表情] ';
                addBtn.id = this.divPrefix + "add";
                addBtn.addEventListener('click', function (et) { return _this.toggleInputWindow(et); });
                this.stageInstance.appendChild(addBtn);
                var deleteBtn = document.createElement('span');
                deleteBtn.innerHTML = ' [(功能未开发)] ';
                deleteBtn.id = this.divPrefix + "btn";
                this.stageInstance.appendChild(deleteBtn);
                var clearBtn = document.createElement('span');
                clearBtn.innerHTML = ' [清空表情] ';
                clearBtn.id = this.divPrefix + "clear";
                clearBtn.addEventListener('click', this.clearUserDefinedEmotions.bind(this));
                this.stageInstance.appendChild(clearBtn);
                this.loadUserDefinedEmotions();
                break;
            default:
                console.log('default');
        }
    };
    EmotionPlugin.prototype.clearStage = function () {
        this.stageInstance.innerHTML = '';
    };
    EmotionPlugin.prototype.toggleStage = function (e, className) {
        var listElems = document.querySelectorAll("." + className);
        var target = e.target;
        if (target instanceof HTMLSpanElement) {
            target = target.parentElement;
        }
        if (target.className && target.className.includes('active')) {
            target.className = '';
        }
        else {
            listElems.forEach(function (elem) {
                elem.querySelector('a').className = '';
            });
            target.className = 'active';
        }
        if (!target.className.includes('active') && this.stageInstance.style.display && this.stageInstance.style.display !== 'none') {
            this.stageInstance.style.display = 'none';
        }
        else {
            this.stageInstance.style.display = 'block';
        }
    };
    EmotionPlugin.prototype.toggleInputWindow = function (e) {
        var _this = this;
        e.stopPropagation();
        e.preventDefault();
        var confirmBtn = document.getElementById(this.divPrefix + "ppp1");
        var cBclone = confirmBtn.cloneNode(true);
        cBclone.addEventListener('click', function (e1) { return _this.addUserDefinedEmotions(e1); });
        confirmBtn.parentNode.replaceChild(cBclone, confirmBtn);
        var cancelBtn = document.getElementById(this.divPrefix + "ppp2");
        var cCclone = cancelBtn.cloneNode(true);
        cCclone.addEventListener('click', function (e2) { return _this.toggleInputWindow(e2); });
        cancelBtn.parentNode.replaceChild(cCclone, cancelBtn);
        this.closeWindow();
    };
    EmotionPlugin.prototype.closeWindow = function () {
        var wm = document.getElementById(this.divPrefix + "ppp");
        console.log(wm.style.display);
        if (wm.style.display && wm.style.display !== 'none') {
            wm.style.display = 'none';
        }
        else {
            wm.style.display = 'block';
            this.loadUserDefinedEmotions();
        }
    };
    EmotionPlugin.prototype.addUserDefinedEmotions = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var tra = document.getElementById(this.divPrefix + "pqp");
        console.log(tra.value, 'dasfsdd');
        utils.addEmotions(tra.value.split('\n'));
        tra.value = '';
        this.closeWindow();
        return;
    };
    EmotionPlugin.prototype.deleteUserDefinedEmotions = function () {
        return;
    };
    EmotionPlugin.prototype.loadUserDefinedEmotions = function () {
        var contents = utils.readEmotions("" + this.divPrefix);
        var outerContainer = document.querySelector("#" + this.divPrefix + "outer");
        if (outerContainer) {
            document.querySelector("#" + this.divPrefix + "outer").innerHTML = '';
        }
        else {
            outerContainer = document.createElement('div');
            outerContainer.id = this.divPrefix + "outer";
        }
        contents.forEach(function (elem) {
            outerContainer.appendChild(elem);
        });
        this.stageInstance.appendChild(outerContainer);
    };
    EmotionPlugin.prototype.clearUserDefinedEmotions = function () {
        if (window.confirm('Clear ALL Emotion Caches?')) {
            for (var i = 0; i < window.localStorage.length; i += 1) {
                var key = window.localStorage.key(i);
                if (key.includes("" + this.divPrefix)) {
                    window.localStorage.removeItem(key);
                }
            }
            this.loadUserDefinedEmotions();
        }
    };
    return EmotionPlugin;
}());
exports.EmotionPlugin = EmotionPlugin;
//# sourceMappingURL=emotion.js.map