

function solution(param) {
  const regExp = /(?:https?:)?(?:\/\/)?(?:\w|\.)+/;
  const matched = param.replace(regExp, "");
  // (https?(\/\/)?)?\s+\.\s+([/|a-zA-Z0-9])*
  return matched;
}


console.log('===== 작업영역 begin =====');
console.log(solution("https://travel.interpark.com/voucher/?mbn=tour&mln=tour_activity"));
console.log('===== 작업영역 end =====');
