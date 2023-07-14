function solution() {
  let str1 = "nol.interpark.com";
  let str2 = "dev-nol.interpark.com";
  let str3 = "qa-nol.interpark.com";
  let str4 = "//nol.interpark.com";
  let str5 = "//dev-nol.interpark.com";
  let str6 = "//qa-nol.interpark.com";
  let str7 = "http://nol.interpark.com";
  let str8 = "http://dev-nol.interpark.com";
  let str9 = "http://qa-nol.interpark.com";
  let str10 = "https://nol.interpark.com";
  let str11 = "https://dev-nol.interpark.com";
  let str12 = "https://qa-nol.interpark.com";

  // 아래는 실패
  let str13 = "test-nol.interpark.com";
  let str14 = "devnol.interpark.com";
  let str15 = "interpark.com";
  let str16 = ".interpark.com";
  let str17 = "//test-nol.interpark.com";
  let str18 = "http://test-nol.interpark.com";
  let str19 = "https://test-nol.interpark.com";
  let str20 = "";
  let str21 = null;
  let str22;

  const regExp = /^(https?:)?(\/\/)?(dev-|qa-)?nol\.interpark\.com/i;

  [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20, str21, str22].forEach((item, index, thisArr) => {
    console.log(regExp.test(item));
  });
}

console.log('===== 작업영역 begin =====');
console.log(solution());
console.log('===== 작업영역 end =====');
