function solution() {
  const arr = [{id: '111', paramName: 'aaa', value: 'ㅋㅋㅋ'}];
  const result = arr.map((item, index) => {
    const {id, paramName, value} = {
      id: '111',
      paramName: 'aaa',
      value: 'ㅋㅋㅋ',
    };
    if (
      !(
        item.id === id &&
        item.paramName === paramName &&
        (value === '' || item.value === value)
      )
    ) {
      return item;
    }
  });
  // const result = arr.filter((item, index) => {
  //   const {id, paramName, value} = {
  //     id: '111',
  //     paramName: 'aaa',
  //     value: 'ㅋㅋㅋ',
  //   };
  //   if (
  //     !(
  //       item.id === id &&
  //       item.paramName === paramName &&
  //       (value === '' || item.value === value)
  //     )
  //   ) {
  //     // 해당하는 원소가 아닌 경우
  //     return true;
  //   } else {
  //     // 해당하는 원소인 경우
  //     return item;
  //   }
  // });
  console.log(result);
}

console.log('===== 작업영역 begin =====');
solution();
console.log('===== 작업영역 end =====');
