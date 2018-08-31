// ==UserScript==
// @name       绯月表情增强插件
// @namespace   https://greasyfork.org/users/5415
// @version     5.1.2
// @author      eddie32
// @description KF论坛专用的回复表情, 插图扩展插件, 在发帖时快速输入自定义表情和论坛BBCODE
// @icon        http://wx1.sinaimg.cn/small/62800f43ly8fttwqsdhc2j20e80e8t9b.jpg
// @homepage    https://github.com/liu599/KF-Emotion-UserScript
// @include     https://*miaola.info/*
// @include     https://*2dkf.com/*
// @include     https://*9moe.com/*
// @include     https://*kfgal.com/*
// @copyright   2014-2018, eddie32
// @grant       none
// @license     MIT
// @run-at      document-end
// ==/UserScript==

!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.join = function(obj) {
        var output = "";
        return Object.keys(obj).forEach(function(keyname) {
            output += obj[keyname] + " ";
        }), output;
    };
    function typeAssert(ext) {
        return -1 !== [ "png", "jpg", "jpeg", "bmp", "gif", "webp", "psd", "svg", "tiff" ].indexOf(ext.toLowerCase());
    }
    exports.loadEmotions = function(options) {
        for (var rest = [], _i = 1; _i < arguments.length; _i++) rest[_i - 1] = arguments[_i];
        for (var ret = [], i = options.startPos; i < options.arrLength; i += 1) {
            var picNumber = "" + i;
            options.leadingZero && (picNumber = i > 9 ? picNumber : "0" + picNumber), ret.push("" + options.strPrefix + picNumber + options.strSuffix);
        }
        return rest.forEach(function(r) {
            for (var restRet = [], i = r.startPos; i < r.arrLength; i += 1) {
                var picNumber = "" + i;
                r.leadingZero && (picNumber = i > 9 ? picNumber : "0" + picNumber), restRet.push("" + options.strPrefix + picNumber + options.strSuffix);
            }
            ret.concat(restRet);
        }), ret;
    }, exports.addEmotions = function(imageUrls) {
        imageUrls.forEach(function(url, index) {
            var ts = new Date().getTime(), ind = url.lastIndexOf(".");
            typeAssert(url.substr(ind + 1)) && window.localStorage.setItem("eddie32_" + ts + "_" + index, url);
        });
    }, exports.readEmotions = function(prefix) {
        for (var ret = [], i = 0; i < window.localStorage.length; i += 1) {
            var key = window.localStorage.key(i);
            if (key.includes(prefix)) {
                var con = document.createElement("img");
                con.src = window.localStorage[key], con.dataset.link = "", con.className = "Ems", 
                ret.push(con);
            }
        }
        return ret;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Emotion = __webpack_require__(2), utils = __webpack_require__(0), targetTextarea = document.getElementsByTagName("textarea").item(0), reserveData = [ {
        groupEmotions: [ {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 49,
                strPrefix: (void 0 !== window.imgpath ? window.imgpath : "") + "/post/smile/em/em",
                strSuffix: ".gif",
                leadingZero: !0
            }),
            itemDescription: utils.loadEmotions({
                startPos: 10,
                arrLength: 58,
                strPrefix: "[s:",
                strSuffix: "]",
                leadingZero: !1
            })
        } ],
        groupTitle: "KF",
        groupType: Emotion.GroupType.ImageLink
    }, {
        groupEmotions: [ {
            itemAddress: [ "[sell=100][/sell]", "[quote][/quote]", "[hide=100][/hide]", "[code][/code]", "[strike][/strike]", "[fly][/fly]", "[color=#00FF00][/color]", "[b][/b]", "[u][/u]", "[i][/i]", "[hr]", "[backcolor=][/backcolor]", "[img][/img]" ],
            itemDescription: [ "出售贴sell=售价", "引用", "隐藏hide=神秘等级", "插入代码", "删除线", "跑马灯", "文字颜色", "粗体", "下划线", "斜体", "水平线", "背景色", "插入图片" ]
        }, {
            itemAddress: [ "(●・ 8 ・●)", "╰(๑◕ ▽ ◕๑)╯", "(ゝω・)", "〜♪♪", "(ﾟДﾟ≡ﾟДﾟ)", "(＾o＾)ﾉ", "(|||ﾟДﾟ)", "(`ε´ )", "(╬ﾟдﾟ)", "(|||ﾟдﾟ)", "(￣∇￣)", "(￣3￣)", "(￣ｰ￣)", "(￣ . ￣)", "(￣︿￣)", "(￣︶￣)", "(*´ω`*)", "(・ω・)", "(⌒▽⌒)", "(￣▽￣）", "(=・ω・=)", "(｀・ω・´)", "(〜￣△￣)〜", "(･∀･)", "(°∀°)ﾉ", "(￣3￣)", "╮(￣▽￣)╭", "( ´_ゝ｀)", "のヮの", "(ﾉ؂< ๑）诶嘿☆～", "(&lt;_&lt;)", "(&gt;_&gt;)", "(;¬_¬)", "(▔□▔)/", "(ﾟДﾟ≡ﾟдﾟ)!?", "Σ(ﾟдﾟ;)", "Σ( ￣□￣||)", "(´；ω；`)", "（/TДT)/", "(^・ω・^ )", "(｡･ω･｡)", "(●￣(ｴ)￣●)", "ε=ε=(ノ≧∇≦)ノ", "(´･_･`)", "(-_-#)", "（￣へ￣）", "(￣ε(#￣) Σ", "ヽ(`Д´)ﾉ", "(╯°口°)╯(┴—┴", "（#-_-)┯━┯", "_(:3」∠)_", "(笑)", "(汗)", "(泣)", "(苦笑)", "(´・ω・`)", "(╯°□°）╯︵ ┻━┻", "(╯‵□′)╯︵┻━┻", "( ´ρ`)", "( ﾟωﾟ)", "(oﾟωﾟo)", "(　^ω^)", "(｡◕∀◕｡)", "/( ◕‿‿◕ )\\", "ε٩( º∀º )۶з", "(￣ε(#￣)☆╰╮(￣▽￣///)", "（●´3｀）~♪", "_(:з」∠)_", "хорошо!", "＼(^o^)／", "(•̅灬•̅ )", "(ﾟДﾟ)", "まったく、小学生は最高だぜ！！", "ε=ε=ε=┏(゜ロ゜;)┛", "(；°ほ°)", "⎝≧⏝⏝≦⎠", "ヽ(✿ﾟ▽ﾟ)ノ", "焔に舞い上がるスパークよ、邪悪な異性交際に、天罰を与え！", "|•ω•`)" ],
            itemDescription: []
        } ],
        groupTitle: "颜文字",
        groupType: Emotion.GroupType.Plain
    }, {
        groupEmotions: [ {
            itemAddress: utils.loadEmotions({
                startPos: 0,
                arrLength: 20,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/pcrn/sticker (",
                strSuffix: ").png",
                leadingZero: !1
            }),
            itemDescription: []
        }, {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 21,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/xds2/akari",
                strSuffix: ".gif",
                leadingZero: !1
            }),
            itemDescription: []
        }, {
            itemAddress: utils.loadEmotions({
                startPos: 2,
                arrLength: 64,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/xds4/0xx",
                strSuffix: ".png",
                leadingZero: !1
            }),
            itemDescription: []
        }, {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 41,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/lovelive/Lovelive2nd",
                strSuffix: ".png",
                leadingZero: !1
            }),
            itemDescription: []
        } ],
        groupTitle: "流行",
        groupType: Emotion.GroupType.ImageLink
    }, {
        groupEmotions: [ {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 51,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/xds6/",
                strSuffix: ".png",
                leadingZero: !1
            }),
            itemDescription: []
        }, {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 40,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/xds5/",
                strSuffix: ".gif",
                leadingZero: !0
            }),
            itemDescription: []
        } ],
        groupTitle: "A站",
        groupType: Emotion.GroupType.ImageLink
    }, {
        groupEmotions: [ {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 17,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/xds/2233 (",
                strSuffix: ").gif",
                leadingZero: !1
            }),
            itemDescription: []
        }, {
            itemAddress: utils.loadEmotions({
                startPos: 0,
                arrLength: 14,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/xds/bilibiliTV (",
                strSuffix: ").png",
                leadingZero: !1
            }),
            itemDescription: []
        } ],
        groupTitle: "B站",
        groupType: Emotion.GroupType.ImageLink
    }, {
        groupEmotions: [ {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 40,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/sticker (",
                strSuffix: ").png",
                leadingZero: !1
            }),
            itemDescription: []
        } ],
        groupTitle: "少女歌剧",
        groupType: Emotion.GroupType.ImageLink
    }, {
        groupEmotions: [ {
            itemAddress: utils.loadEmotions({
                startPos: 1,
                arrLength: 40,
                strPrefix: "http://o6smnd6uw.bkt.clouddn.com/BGD/sticker (",
                strSuffix: ").png",
                leadingZero: !1
            }),
            itemDescription: []
        } ],
        groupTitle: "バンドリ",
        groupType: Emotion.GroupType.ImageLink
    }, {
        groupEmotions: [],
        groupTitle: "自定义",
        groupType: Emotion.GroupType.User
    } ], cssStyles = {
        mainView: '#eddie320000 {font: 12px/28px "Hiragino Sans GB","Microsoft YaHei","Arial","sans-serif"; margin-bottom: 5px; }',
        stageView: "#eddie32stage {height: 100px; padding: 3px 3px; overflow-x: auto; margin-top:4px;margin-bottom:4px; border:1px solid #ff4351; position:relative; z-index:200; display: none; } #eddie32stage span { cursor: pointer }",
        menuView: '#eddie32menu {display:inline-block;cursor:pointer; text-align:center; padding: 0; font: 12px/30px "Hiragino Sans GB","Microsoft YaHei","Arial","sans-serif";background-color: #ff4351;border-color: #ff4351;color: #fff; } #eddie32menu ul { list-style-type: none; margin: 0; padding: 0; } #eddie32menu ul li { display: inline-block; text-align: middle } #eddie32menu ul li a { display: block; color: #f2f2f2; min-width: 55px; } #eddie32menu ul li a:hover, #eddie32menu ul li a.active {background-color: #ff7680;border-color: #ff7680; color: #f2f2f2;}',
        txtBtn: "a.txtBtnEmotion { display: inline-block; text-decoration: none; cursor: pointer; padding: 0 8px; font: 12px/24px 'Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif';} a.txtBtnEmotion:hover { background: #ff7680; color: #fff; }",
        imageLink: ".Ems { cursor: pointer; width: 50px; height: 50px; display: inline-block; z-index: 400;  }",
        popUp: "#eddie32ppp {position: fixed; bottom: 10px; right: 10px; z-index: 999; width: 400px; display: block; height: 300px; background: #f3f3f3; border: 1px solid #000; display: none}"
    }, app = new Emotion.EmotionPlugin("eddie32", reserveData, cssStyles, targetTextarea);
    targetTextarea.parentNode.insertBefore(app.appInstance, targetTextarea);
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var GroupType, utils = __webpack_require__(0);
    !function(GroupType) {
        GroupType[GroupType.ImageLink = 0] = "ImageLink", GroupType[GroupType.Plain = 1] = "Plain", 
        GroupType[GroupType.Image = 2] = "Image", GroupType[GroupType.User = 3] = "User";
    }(GroupType = exports.GroupType || (exports.GroupType = {}));
    var EmotionMenuItem = function() {
        return function() {};
    }();
    exports.EmotionMenuItem = EmotionMenuItem;
    var EmotionMenu = function() {
        return function() {};
    }();
    exports.EmotionMenu = EmotionMenu;
    var CssStyles = function() {
        return function() {};
    }();
    exports.CssStyles = CssStyles;
    var EmotionPlugin = function() {
        function EmotionPlugin(name, data, css, targetTextarea) {
            this.targetInstance = targetTextarea, this.divPrefix = name, this.appInstance = document.createElement("div"), 
            this.Popup = document.createElement("div"), this.Popup.id = this.divPrefix + "ppp", 
            this.Popup.innerHTML = '<div style="display: block; width: 100%; padding: 10px;"><h3>每个表情一行</h3><textarea id="eddie32pqp" style="overflow-x: auto; width: 90%;" rows="12" ></textarea><button id="' + this.divPrefix + 'ppp1">确认</button><button id="' + this.divPrefix + 'ppp2">取消</button>', 
            this.appInstance.id = this.divPrefix + "0000", this.appInstance.appendChild(this.Popup), 
            this.EmotionMenu = data, this.EmotionStyles = css, this.loadMenus(), this.loadMenuData(data), 
            this.loadStage(), this.loadStyles(css), this.stageInstance.style.width = window.getComputedStyle(this.targetInstance, null).getPropertyValue("width");
        }
        return EmotionPlugin.prototype.loadStyles = function(css) {
            var styleInstance = document.createElement("style");
            styleInstance.innerHTML = utils.join(css), this.appInstance.appendChild(styleInstance);
        }, EmotionPlugin.prototype.loadMenus = function() {
            var menu = document.createElement("div");
            menu.id = this.divPrefix + "menu", this.appInstance.appendChild(menu), this.menuInstance = menu;
        }, EmotionPlugin.prototype.loadStage = function() {
            var _this = this, stage = document.createElement("div");
            stage.id = this.divPrefix + "stage", stage.addEventListener("click", function(e) {
                return _this.stageEmitter(e);
            }), this.appInstance.appendChild(stage), this.stageInstance = stage;
        }, EmotionPlugin.prototype.stageEmitter = function(e) {
            var target = e.target, scrollPos = this.targetInstance.scrollTop, curValue = this.targetInstance.value, caretPos = this.targetInstance.selectionStart, front = curValue.substring(0, caretPos), back = curValue.substring(this.targetInstance.selectionEnd, curValue.length);
            e.target instanceof HTMLSpanElement && (e.target.id === this.divPrefix + "add" && this.addUserDefinedEmotions(e), 
            e.target.id === this.divPrefix + "delete" && this.deleteUserDefinedEmotions()), 
            e.target instanceof HTMLAnchorElement && (this.targetInstance.value = front + decodeURI(target.dataset.sign) + back, 
            caretPos += decodeURI(target.dataset.sign).length), e.target instanceof HTMLImageElement && ("" !== e.target.dataset.link ? (this.targetInstance.value = front + "" + e.target.dataset.link + back, 
            caretPos += 6) : (this.targetInstance.value = front + "[img]" + e.target.src + "[/img]" + back, 
            caretPos = caretPos + e.target.src.length + 11)), this.targetInstance.selectionStart = caretPos, 
            this.targetInstance.selectionEnd = caretPos, this.targetInstance.focus(), this.targetInstance.scrollTop = scrollPos;
        }, EmotionPlugin.prototype.loadMenuData = function(item) {
            var _this = this, ulContainer = document.createElement("ul");
            item.forEach(function(mi) {
                var listItem = document.createElement("li"), clickItem = document.createElement("a");
                listItem.className = _this.divPrefix + "00001", clickItem.title = mi.groupTitle, 
                clickItem.dataset.loadtype = "" + mi.groupType, clickItem.addEventListener("click", function(e) {
                    return _this.expandMenu(e, mi, listItem.className);
                }), clickItem.innerHTML = '<span class="t">' + mi.groupTitle + "</span>", listItem.appendChild(clickItem), 
                ulContainer.appendChild(listItem);
            }), this.menuInstance.appendChild(ulContainer);
        }, EmotionPlugin.prototype.expandMenu = function(e, menuItem, className) {
            var _this = this;
            switch (this.clearStage(), this.toggleStage(e, className), menuItem.groupType) {
              case GroupType.Plain:
                menuItem.groupEmotions.forEach(function(emotion) {
                    emotion.itemAddress.forEach(function(addr, idx) {
                        var plainTxtItem = document.createElement("a");
                        plainTxtItem.className = "txtBtnEmotion", plainTxtItem.setAttribute("data-sign", "" + encodeURI(addr)), 
                        plainTxtItem.innerHTML = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : addr, 
                        _this.stageInstance.appendChild(plainTxtItem);
                    });
                });
                break;

              case GroupType.ImageLink:
                menuItem.groupEmotions.forEach(function(emotion) {
                    emotion.itemAddress.forEach(function(addr, idx) {
                        var imageItem = document.createElement("img");
                        imageItem.src = addr, imageItem.dataset.link = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : "", 
                        imageItem.className = "Ems", _this.stageInstance.appendChild(imageItem);
                    });
                });
                break;

              case GroupType.User:
                var addBtn = document.createElement("span");
                addBtn.innerHTML = " [增加表情] ", addBtn.id = this.divPrefix + "add", addBtn.addEventListener("click", function(et) {
                    return _this.toggleInputWindow(et);
                }), this.stageInstance.appendChild(addBtn);
                var deleteBtn = document.createElement("span");
                deleteBtn.innerHTML = " [(功能未开发)] ", deleteBtn.id = this.divPrefix + "btn", this.stageInstance.appendChild(deleteBtn);
                var clearBtn = document.createElement("span");
                clearBtn.innerHTML = " [清空表情] ", clearBtn.id = this.divPrefix + "clear", clearBtn.addEventListener("click", this.clearUserDefinedEmotions.bind(this)), 
                this.stageInstance.appendChild(clearBtn), this.loadUserDefinedEmotions();
            }
        }, EmotionPlugin.prototype.clearStage = function() {
            this.stageInstance.innerHTML = "";
        }, EmotionPlugin.prototype.toggleStage = function(e, className) {
            var listElems = document.querySelectorAll("." + className), target = e.target;
            target instanceof HTMLSpanElement && (target = target.parentElement), target.className && target.className.includes("active") ? target.className = "" : (listElems.forEach(function(elem) {
                elem.querySelector("a").className = "";
            }), target.className = "active"), !target.className.includes("active") && this.stageInstance.style.display && "none" !== this.stageInstance.style.display ? this.stageInstance.style.display = "none" : this.stageInstance.style.display = "block";
        }, EmotionPlugin.prototype.toggleInputWindow = function(e) {
            var _this = this;
            e.stopPropagation(), e.preventDefault();
            var confirmBtn = document.getElementById(this.divPrefix + "ppp1"), cBclone = confirmBtn.cloneNode(!0);
            cBclone.addEventListener("click", function(e1) {
                return _this.addUserDefinedEmotions(e1);
            }), confirmBtn.parentNode.replaceChild(cBclone, confirmBtn);
            var cancelBtn = document.getElementById(this.divPrefix + "ppp2"), cCclone = cancelBtn.cloneNode(!0);
            cCclone.addEventListener("click", function(e2) {
                return _this.toggleInputWindow(e2);
            }), cancelBtn.parentNode.replaceChild(cCclone, cancelBtn), this.closeWindow();
        }, EmotionPlugin.prototype.closeWindow = function() {
            var wm = document.getElementById(this.divPrefix + "ppp");
            wm.style.display && "none" !== wm.style.display ? wm.style.display = "none" : (wm.style.display = "block", 
            this.loadUserDefinedEmotions());
        }, EmotionPlugin.prototype.addUserDefinedEmotions = function(e) {
            e.preventDefault(), e.stopPropagation();
            var tra = document.getElementById(this.divPrefix + "pqp");
            utils.addEmotions(tra.value.split("\n")), tra.value = "", this.closeWindow();
        }, EmotionPlugin.prototype.deleteUserDefinedEmotions = function() {}, EmotionPlugin.prototype.loadUserDefinedEmotions = function() {
            var contents = utils.readEmotions("" + this.divPrefix), outerContainer = document.querySelector("#" + this.divPrefix + "outer");
            outerContainer ? document.querySelector("#" + this.divPrefix + "outer").innerHTML = "" : (outerContainer = document.createElement("div")).id = this.divPrefix + "outer", 
            contents.forEach(function(elem) {
                outerContainer.appendChild(elem);
            }), this.stageInstance.appendChild(outerContainer);
        }, EmotionPlugin.prototype.clearUserDefinedEmotions = function() {
            if (window.confirm("Clear ALL Emotion Caches?")) {
                for (var i = 0; i < window.localStorage.length; i += 1) {
                    var key = window.localStorage.key(i);
                    key.includes("" + this.divPrefix) && window.localStorage.removeItem(key);
                }
                this.loadUserDefinedEmotions();
            }
        }, EmotionPlugin;
    }();
    exports.EmotionPlugin = EmotionPlugin;
} ]);