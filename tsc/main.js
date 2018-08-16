"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emotion = require("./emotion");
var containers = document.getElementsByTagName('textarea');
var app = new Emotion.EmotionPlugin('eddie32');
containers.item(0).parentNode.insertBefore(app.appInstance, containers.item(0));
//# sourceMappingURL=main.js.map