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
