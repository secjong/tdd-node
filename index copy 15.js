function solution(value) {
  const regExp = /to/;
  // String => search, match
  // RegExp => exec, test

  let isEnd = false; // 끝까지 검색했는지 여부
  let offsetIndex = 0;

  const result = [];
  while (!isEnd) {

    const targetValue = value.substring(offsetIndex);
    const matched = targetValue.match(regExp); // 검색 시작을 지정하여 match match 가 없을 경우 null 이다.
    
    console.log(matched);

    if (matched) {

      const matchedIndex = matched.index; // 전체 문자열에서 match 된 문자열의 시작 index
      const matchedValue = matched[0]; // match 된 문자열

      result.push({
        searchIndex: offsetIndex + matchedIndex
      });

      offsetIndex = offsetIndex + matchedIndex + matchedValue.length; // 검색 시작 지점을 찾은 지점 다음으로 세팅. 이전 offset + 검색된 위치 + 검색어 길이
      
      
    } else {
      isEnd = true; // 더이상 match 가 없으므로 빠져나감
    }

    // console.log('startIndex : ', startIndex);
    // console.log('offsetIndex : ', offsetIndex);
    // console.log('matchedValue : ', matchedValue);
    
  }
  return result;
}

console.log("===== 작업영역 begin =====");
console.log(solution("She told me not to go.")); // 4, 16
console.log("===== 작업영역 end =====");
