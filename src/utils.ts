// import storage from 'good-storage';
// import ObjectID = require("bson-objectid");
declare let window: any;

export function join(obj: any): string {
  let output = '';
  Object.keys(obj).forEach((keyname) => {
    output += `${obj[keyname]} `;
  });
  return output;
}
class OPT {
  public startPos: number;
  public arrLength: number;
  public strPrefix: string;
  public strSuffix: string;
  public leadingZero: boolean;
}
export function loadEmotions(options: OPT, ...rest: Array<OPT>): Array<string> {
  const ret: any = [];
  for (let i = options.startPos; i < options.arrLength; i += 1) {
    let picNumber = `${i}`;
    if (options.leadingZero) {
      picNumber = (i > 9) ? picNumber : `0${picNumber}`;
    }
    ret.push(`${options.strPrefix}${picNumber}${options.strSuffix}`);
  }
  rest.forEach(r => {
    const restRet = [];
    for (let i = r.startPos; i < r.arrLength; i += 1) {
      let picNumber = `${i}`;
      if (r.leadingZero) {
        picNumber = (i > 9) ? picNumber : `0${picNumber}`;
      }
      restRet.push(`${options.strPrefix}${picNumber}${options.strSuffix}`);
    }
    ret.concat(restRet);
  });
  return ret;
}
export function addEmotions(imageUrls: Array<string>) {
  imageUrls.forEach((url, index) => {
    let ts = new Date().getTime();
    console.log(typeAssert(url));
    let ind = url.lastIndexOf('.');
    let ext = url.substr(ind + 1);
    if (typeAssert(ext)) {
      window.localStorage.setItem(`eddie32_${ts}_${index}`, url);
    }
  });
}
function typeAssert(ext: string) {
  return [
    'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
  indexOf(ext.toLowerCase()) !== -1;
}
export function readEmotions(): Array<HTMLImageElement> {
  console.log(window.localStorage);
  const ret: Array<HTMLImageElement> = [];
  for (let i = 0; i < window.localStorage.length; i += 1) {
    let key = window.localStorage.key(i);
    let con = <HTMLImageElement> document.createElement('img');
    con.src = window.localStorage[key];
    con.dataset.link = '';
    con.className = 'Ems';
    ret.push(con);
  }
  return ret;
}
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
