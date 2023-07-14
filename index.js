function solution() {
  function test({a = "aaa", b = true}) {
    console.log(a === "aaa");
    console.log(b === true);
  }

  test();
}

console.log('===== 작업영역 begin =====');
console.log(solution());
console.log('===== 작업영역 end =====');
