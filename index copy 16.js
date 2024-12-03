function solution(value) {
  // const regExp = /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/;
  const regExp = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
  return value.match(regExp);
}

console.log("===== 작업영역 begin =====");
console.log(solution("00abcd11-00ab-00ab-00ab-0000abcdef11&quot")); // 4, 16
console.log("===== 작업영역 end =====");
