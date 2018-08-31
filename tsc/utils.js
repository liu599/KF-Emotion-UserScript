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
        console.log(typeAssert(url));
        var ind = url.lastIndexOf('.');
        var ext = url.substr(ind + 1);
        if (typeAssert(ext)) {
            window.localStorage.setItem("eddie32_" + ts + "_" + index, url);
        }
    });
}
exports.addEmotions = addEmotions;
function typeAssert(ext) {
    return [
        'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'
    ].
        indexOf(ext.toLowerCase()) !== -1;
}
function readEmotions(prefix) {
    console.log(window.localStorage);
    var ret = [];
    for (var i = 0; i < window.localStorage.length; i += 1) {
        var key = window.localStorage.key(i);
        if (key.includes(prefix)) {
            var con = document.createElement('img');
            con.src = window.localStorage[key];
            con.dataset.link = '';
            con.className = 'Ems';
            ret.push(con);
        }
    }
    return ret;
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