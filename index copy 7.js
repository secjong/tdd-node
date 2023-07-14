

function solution(cancelItem) {
  let strDay = "- ";
  let dayFormat = `${cancelItem.day.replace(/(\d{4})(\d{2})(\d{2})/g, "$2/$3")} (${cancelItem.dy})`;
  let cancelPer = 100 - Number(cancelItem.cancelRate);
  let time = '';

  // 트립일레븐, 고니랩 취소가능시간 처리
  if (false || false || false) {
    strDay += cancelItem.cancelDay === 0 ? '입실 당일' : `입실 ${cancelItem.cancelDay}일 전`;
    strDay += cancelItem.day ? `(${cancelItem.day.replace(/(\d{4})(\d{2})(\d{2})/g, "$2/$3")}) ` : '';
    strDay += `24시 전까지 ${cancelPer}% 환불`

    return strDay;
  }
  
  // 이 외 취소가능일시 처리
  strDay += cancelItem.cancelDay === 0 ? '입실 당일' : `입실 ${cancelItem.cancelDay}일 전`;
  strDay += `[${dayFormat}]`;
  if (cancelItem.dy == '토') {
    time += `오전 10시`;
  } else {
    if (cancelItem.dy != '일') {
      time += `17시`;
    }
  }

  return `${strDay}${time}까지 ${cancelPer}% 환불`;
}

console.log('===== 작업영역 begin =====');
const cancelItem = {
  "day": "20220318",
  "holidayYn": "N",
  "dy": "금",
  "isHhsn": "N",
  "msg": "입실 4일전(2022.03.18)까지: 100% 환불",
  "cancelDay": 4,
  "cancelRate": 0
};
console.log(solution(cancelItem));
console.log('===== 작업영역 end =====');
