export function join(obj: any): string {
  let output = '';
  Object.keys(obj).forEach((keyname) => {
    output += `${obj[keyname]} `;
  });
  return output;
}
