import * as Emotion from './emotion'
const containers = document.getElementsByTagName('textarea');
const app = new Emotion.EmotionPlugin('eddie32');
containers.item(0).parentNode.insertBefore(app.appInstance, containers.item(0));
