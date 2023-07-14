const isEmpty = (value) => {
  // 객체 타입을 비교하는 방법
  // 1. Object.getPrototypeOf(m) === Map.prototype
  // 2. m.constructor === Map.prototype.constructor
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    (Object.getPrototypeOf(value) === Map.prototype && !value.size) || // Map
    (Object.getPrototypeOf(value) === Set.prototype && !value.size) || // Set
    (Object.getPrototypeOf(value) === Array.prototype && !value.length) || // Array
    (Object.getPrototypeOf(value) === Object.prototype &&
      !Object.keys(value).length) // Object
  ) {
    return true;
  } else {
    return false;
  }
};

function solution() {
  const m = new Map();
  m.set('name', 'sejong');

  const s = new Set();
  s.add('111');
  s.add('222');
  s.add('333');

  const a = [1];
  const o = {a: 'b'};

  console.log(Object.getPrototypeOf(m));
  console.log(Object.getPrototypeOf(s));
  console.log(Object.getPrototypeOf(a));
  console.log(Object.getPrototypeOf(o));

  console.log('---');

  console.log(Map.prototype);
  console.log(Set.prototype);
  console.log(Array.prototype);
  console.log(Object.prototype);

  console.log('---');

  console.log(isEmpty(m));
  console.log(isEmpty(s));
  console.log(isEmpty(a));
  console.log(isEmpty(o));

  return '';
}

console.log('===== 작업영역 begin =====');
console.log(solution());
console.log('===== 작업영역 end =====');
