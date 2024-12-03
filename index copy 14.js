function solution(value) {

  console.log(typeof value === "object");
  console.log(Object.keys(value).length);

  if (
    value === "" ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === "object" && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }

}

console.log('===== 작업영역 begin =====');
console.log(solution([]));
console.log('===== 작업영역 end =====');
