"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function join(obj) {
    var output = '';
    Object.keys(obj).forEach(function (keyname) {
        output += obj[keyname] + " ";
    });
    return output;
}
exports.join = join;
var OPT = /** @class */ (function () {
    function OPT() {
    }
    return OPT;
}());
function loadEmotions(options) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var ret = [];
    for (var i = options.startPos; i < options.arrLength; i += 1) {
        var picNumber = "" + i;
        if (options.leadingZero) {
            picNumber = (i > 9) ? picNumber : "0" + picNumber;
        }
        ret.push("" + options.strPrefix + picNumber + options.strSuffix);
    }
    rest.forEach(function (r) {
        var restRet = [];
        for (var i = r.startPos; i < r.arrLength; i += 1) {
            var picNumber = "" + i;
            if (r.leadingZero) {
                picNumber = (i > 9) ? picNumber : "0" + picNumber;
            }
            restRet.push("" + options.strPrefix + picNumber + options.strSuffix);
        }
        ret.concat(restRet);
    });
    return ret;
}
exports.loadEmotions = loadEmotions;
function addEmotions(imageUrls) {
    imageUrls.forEach(function (url, index) {
        var ts = new Date().getTime();
        window.localStorage.set("eddie32_" + ts + "_" + index, url);
    });
}
exports.addEmotions = addEmotions;
function readEmotions() {
    console.log('12312');
    console.log(window.localStorage);
    for (var i = 0; i < window.localStorage.length; i += 1) {
        var key = window.localStorage.key(i);
        console.log(window.localStorage[key]);
    }
    return [];
}
exports.readEmotions = readEmotions;
/*function serialize(val: object): string {
  return JSON.stringify(val);
}

function deserialize(val: any): any {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}*/
//# sourceMappingURL=utils.js.map