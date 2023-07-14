

function solution(cancelDay, {checkIn, delimiter = ''}) {
  function parseDate(yyyymmdd, delimiter) {
    if (!yyyymmdd) return "";

    let days = ["일", "월", "화", "수", "목", "금", "토"];
    const regExp = new RegExp(`/(\d{4})(\d{2})(\d{2})/g`);
    // let dateString = yyyymmdd.replace(regExp, "$1-$2-$3");
    const matched = yyyymmdd.match(regExp);
    console.log(matched);

    let date = new Date(dateString);
    date.setDate(date.getDate() - Number(cancelDay));
    return `${(date.getMonth() + 1).toString().padStart(2, "0")}월 ${date.getDate()}일 (${days[date.getDay()]})`;
  }

  console.log(checkIn);
  let strDay = "";
  let strCheckkIn = parseDate(checkIn, delimiter);

  if (Number(cancelDay) === 0) {
    strDay += `${strCheckkIn} 까지`;
  } else {
    strDay += `${cancelDay}일전 [${strCheckkIn}]까지`;
  }

  return `${strDay}`;
}

console.log('===== 작업영역 begin =====');
const cancelItem = {
  checkIn: "2022-04-28 15:00",
  delimiter: "-"
};
console.log(solution(2, cancelItem));
console.log('===== 작업영역 end =====');
