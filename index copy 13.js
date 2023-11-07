function solution(original) {
  const targets = ['면제', '수리비', '휴차보상료', '보상한도', '무제한'];
  const originalArr = [...original];

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    console.log(originalArr.join(''));
    const startIndexOfTarget = originalArr.join('').indexOf(target); // 23
    console.log(startIndexOfTarget);
    if (startIndexOfTarget > -1) {
      const highlightedTarget = `<span class="point">${target}</span>`;
      const highlightedTargetArr = [...highlightedTarget];
      originalArr.splice(startIndexOfTarget, target.length, ...highlightedTargetArr); // 원본의 길이가 변경됨...
    }
    console.log(originalArr.join(''));
  }

}

console.log('===== 작업영역 begin =====');
console.log(solution('보상한도까지 수리비, 면책금, 휴차보상료 면제(단독/과실 100% 사고시 면책금 10~50만원)'));
console.log('===== 작업영역 end =====');


/**
   * 원하는 텍스트들을 <span class="point"> 태그로 감싸 반환
   * @param original - 전체 텍스트
   * @returns - 하이라이팅 된 문자열. span 태그가 존재하므로 dangerouslySetInnerHTML 으로 사용하여야 함
   */
const getHighlightedHtml = (original) => {
  const targets = ['면제', '무제한'];
  const originalArr = [...original]; // 초기값

  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    const startIndexOfTarget = originalArr.join('').indexOf(target);
    if (startIndexOfTarget > -1) {
      const highlightedTarget = `<span class="point">${target}</span>`;
      const highlightedTargetArr = [...highlightedTarget]; // 배열로 만든 후
      originalArr.splice(startIndexOfTarget, target.length, ...highlightedTargetArr); // 배열의 요소를 다시 풀어서 넣는다
    }
  }

  return originalArr.join('');
}