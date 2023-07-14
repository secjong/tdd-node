function solution() {
  console.log(getQueryStringFromJson({a: 1, b: 2}));
}

function getQueryStringFromJson(obj) {
  return isEmpty(obj) || typeof obj !== 'object'
    ? ''
    : Object.keys(obj).reduce((acc, item, index, thisArr) => {
        acc += item + '=' + obj[item].toString();
        if (thisArr.length - 1 !== index) {
          acc += '&';
        }
        return acc;
      }, '?');
}

function isEmpty(value) {
  if (
    value == '' ||
    value == null ||
    value == undefined ||
    (value != null && typeof value == 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log('===== 작업영역 begin =====');
solution();
console.log('===== 작업영역 end =====');
