function solution(facetDspyCategory) {
  console.log(facetDspyCategory);
  const result = [];
  for (let i = 0; i < facetDspyCategory.length; i++) {
    const count = facetDspyCategory[i].Value;
    const fullName = facetDspyCategory[i].Key;

    // CTG009_테마/놀이|CTG015_투어패스/관광지
    const is1depth = fullName.indexOf('|') > -1 ? false : true; // -1보다 크면 존재하는것 => 2depth 이상임
    if (is1depth) {
      const code = fullName.split('_')[0];
      const name = fullName.split('_')[1];
      result.push({
        text: name,
        value: code,
      });
    }
  }
  console.log(result);
}

const facetDspyCategory = [
  {
    Value: 17,
    Key: 'CTG037_현지투어/교통',
  },
  {
    Value: 15,
    Key: 'CTG037_현지투어/교통|CTG038_현지투어',
  },
  {
    Value: 2,
    Key: 'CTG037_현지투어/교통|CTG040_교통패스',
  },
  {
    Value: 9,
    Key: 'CTG002_뷔페/외식',
  },
  {
    Value: 8,
    Key: 'CTG002_뷔페/외식|CTG003_뷔페/레스토랑',
  },
  {
    Value: 1,
    Key: 'CTG002_뷔페/외식|CTG005_라운지/바',
  },
  {
    Value: 3,
    Key: 'CTG009_테마/놀이',
  },
  {
    Value: 2,
    Key: 'CTG009_테마/놀이|CTG015_투어패스/관광지',
  },
  {
    Value: 1,
    Key: 'CTG009_테마/놀이|CTG010_테마파크/어드벤처',
  },
  {
    Value: 1,
    Key: 'CTG006_뷰티/에스테틱',
  },
  {
    Value: 1,
    Key: 'CTG006_뷰티/에스테틱|CTG007_스파/테라피',
  },
  {
    Value: 1,
    Key: 'CTG031_생활/편의',
  },
  {
    Value: 1,
    Key: 'CTG031_생활/편의|CTG035_픽업/공항서비스',
  },
];

// =>
const result = [
  {
    text: '현지투어/교통',
    value: 'CTG037',
  },
  {
    text: '뷔페/외식',
    value: 'CTG002',
  },
  {
    text: '테마/놀이',
    value: 'CTG009',
  },
  {
    text: '뷰티/에스테틱',
    value: 'CTG006',
  },
  {
    text: '생활/편의',
    value: 'CTG031',
  },
];

console.log('===== 작업영역 begin =====');
solution(facetDspyCategory);
console.log('===== 작업영역 end =====');
