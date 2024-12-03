/**
 * 빈값여부 반환
 * 빈 Map, 빈 Set, [], {} : 비어있는 값으로 처리한다.
 * 주의: 공백 문자열(" "), `false`, `0`은 비어있는 값으로 간주되지 않는다.
 * @param value 확인할 값
 * @returns 값이 비어있는지 여부
 */
// type EmptyValue = null | undefined | '' | [] | {} | Map<never, never> | Set<never>;

export const isEmpty = (value: unknown): value is never => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && value === '') ||
    (Array.isArray(value) && value.length === 0) ||
    ((value instanceof Map || value instanceof Set) && value.size === 0) || // Map, Set 검사
    (Object.getPrototypeOf(value) === Object.prototype &&
      Object.keys(value).length === 0) // object 검사
  );
};

function solution(value) {
  if (isEmpty(value)) {
    value.
    return true;
  } else {
    return false;
  }
}

console.log('===== 작업영역 begin =====');

const m = new Map([
  ['a', 'a'],
  ['b', 'b'],
]);
const m2 = new Map();
const s = new Set([1, 2, 3]);
const s2 = new Set();

console.log(solution(s2));
console.log('===== 작업영역 end =====');

let o: Record<never, never> = {name: "sejong"};
let o2: {} = {name: "sejong"};
