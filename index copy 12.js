function factorial(n) {
  if (n === 0 || n === 1) {
    return 1n;
  }
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(n) {
  let num = factorial(n).toString();
  let count = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === '0') {
      count++;
    } else {
      break;
    }
  }
  return count;
}

console.log('===== 작업영역 begin =====');
console.log(solution(10));
console.log('===== 작업영역 end =====');
