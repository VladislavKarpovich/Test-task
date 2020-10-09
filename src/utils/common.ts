export const numberWithCommas = (num: number) => {
  const pattern = /(-?\d+)(\d{3})/;
  let str = num + "";

  while (pattern.test(str)) {
    str = str.replace(pattern, "$1,$2");
  }
  return str;
};
