function solution(dateStr) {
  // 2016-06-27T00:00:00 => 2016.06.27
  const regExp = /^(\d{4})([.\-/])(\d{2})\2(\d{2}).*/;
  const result = dateStr.replace(regExp, `$1.$3.$4`);
  console.log(result);
}

console.log('===== 작업영역 begin =====');
solution('2016.06.27T00:00:00');
console.log('===== 작업영역 end =====');
