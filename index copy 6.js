function solution(value) {
  let result = '';
  const matched = value.match(/^(\d+)세\s{1}(이상|미만)$/);
  if (matched === null) {
    return '대/소인 구분 없음';
  }
  const age = matched[1];
  const text = matched[2];

  result += age;
  if (text === '이상') {
    result += '+';
  } else if (text === '미만') {
    result += '-';
  }
  console.log(result);
  return result;
}

console.log('===== 작업영역 begin =====');
solution('ff');
console.log('===== 작업영역 end =====');
