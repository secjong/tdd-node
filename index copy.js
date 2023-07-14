const RESIZE = {
  //원본
  IMAGE: '//trimg.interpark.com/g/',
  ETC: '//trimg-archive.interpark.com/ar/',
  //600*410
  GOODS_IMAGE: '//trimg.interpark.com/r/c600410/',
  //300*204
  GOODS_RECOMMEND_IMAGE: '//trimg.interpark.com/r/c300204/',
  //130*130
  GOODS_GOLDAX_IMAGE: '//trimg.interpark.com/r/c192150/',
  //150*150
  USER_REVIEW: '//trimg.interpark.com/r/c150150/',
  //74*74
  GOODS_MAP: '//trimg.interpark.com/r/c7474/',
  //600*630
  MAIN_BANNER: '//trimg.interpark.com/r/c600630/',
};

function getResizedImage(url, type) {
  if (url && type) {
    url = url.substr(0, 1) == '/' ? url.substr(1) : url;
    return url.toString().indexOf('http') > -1 ? url : `${RESIZE[type]}${url}`;
  }
}

function solution() {
  // const imgUrl = getResizedImage('/testImg.png', 'GOODS_IMAGE')
  // console.log(imgUrl)
  // const imgUrl2 = getResizedImage('testImg.png', 'GOODS_IMAGE')
  // console.log(imgUrl2)

  const imgUrl1 =
    'https://imgp2.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg';
  const imgUrl2 =
    'http://imgp2.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg';
  const imgUrl3 =
    'imgp2.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg';
  const imgUrl4 = '/tr/fit/place/28552/place_28552_20201123173105_0.jpg';
  const imgUrl5 = 'tr/fit/place/28552/place_28552_20201123173105_0.jpg';
  const imgUrl6 = '/Product/Housing/Hotel/17000717/17000717_01.jpg'; // /checkinnow/category 썸네일
  const imgUrl7 =
    '/r/i/0/44/97/F03_GIM017000250_4497d6cd771a95f4ad5f5712d8cb38a3.jpg'; // /checkinnow/category 금도끼 패키지 객실 썸네일
  const imgUrl8 = 'http://imgp.interpark.com/tr/activity/TC100/15846809729906'; // 주변 액티비티에 이렇게 오는 경우도 있음
  const imgUrl9 =
    'http://trimg.interpark.com/r/c570388/r/i/0/3e/b7/F01_GIM015000210_3eb7ed5509fd94526a1476b9b12b1325.JPG'; // .최근 가장 많이 예약된... 이렇게 오는 경우도 있음
  const imgUrl10 =
    'http://tourimage.interpark.com/product/tour/00161/AAA/280/AAA12323_3_590.jpg'; // 추천여행상품(제휴이미지)
  const imgUrl11 = '/r/d/0/2018/10/17/432318d396c0fc47d3cf06314fd38cb8.png';
  const imgUrl12 =
    '/s/i/0/0b/c3/F01_GI0002000466_0bc33a990c4957a6aeb16d938bde5133.jpg'; // 스테이징에서 안나오는 이미지 테스트
  const imgUrl13 = null;
  const imgUrl14 = '';
  // console.log(getResizedImagePath(imgUrl1, {w: 400, h: 100}))
  // console.log(getResizedImagePath(imgUrl2))
  // console.log(getResizedImagePath(imgUrl3))
  // console.log(getResizedImagePath(imgUrl4))
  // console.log(getResizedImagePath(imgUrl5))
  // console.log(getResizedImagePath(imgUrl14, {w: 180, h: 223}));

  const imgUrl15 = '//trimg.interpark.com/r/c600410/testimg.png';
  const imgUrl16 = '/Product/Housing/hotel/15000220/15000220_02.jpg';
  const imgUrl17 = '/Product/Housing/Voucher/19000027/19000027_01.jpg'; // plan 테스트
  const imgUrl18 =
    'trimg.interpark.com/r/c600410/r/i/1/5a/8a/F01_GV0002000327_5a8ab42ef70dd2232c3073aaa28336d8.jpg';
  const imgUrl19 =
    'http://trimg.interpark.com/g/r/i/0/d8/ea/F03_GI0002001928_d8ea52c5275aea7463966540c4eed66e.JPG';
  const imgUrl20 =
    'https://trimg.interpark.com/g/Product/Housing/Hotel/15000466/15000466_09.jpg';
  const imgUrl21 = '/Product/Housing/Condo/18000263/18000263_17.jpg';
  const imgUrl22 = '/r/i/1/12/d9/F01_GIM000041889_12d9abd24a35ef085df6066e63f63a65.jpg';
  const imgUrl23 = '//imgp.interpark.com/tr/fit/place/50177/50177_20201015134750054.jpg';
  const imgUrl24 = '/r/i/1/12/d9/F01_GIM000041889_12d9abd24a35ef085df6066e63f63a65.jpg';
  const option = {w: 240};

  // console.log(getResizedImagePath(imgUrl19, option));
  console.log(getResizedImagePath(imgUrl24, option));
}

/**
 * CDN 이미지 호출방식 수정에 따른 추가함수
 * 1. full url인 경우 http 나 https 프로토콜 부분은 제거하고 // 만 남긴다(mixed contents 이슈 해결위함. 단, 제휴 이미지인 경우 https 를 지원하지 않는 경우 있으므로 호출부 선택적 적용 필요)
 * 2. full url이면서 trimg.interpark.com/g 에서 호스팅되는 경우는 리사이징을 위해 "/g" 대신 경로 prefix 를 붙여준다.
 * 3. full url이 아닌 경우 size 파라미터가 넘어온 경우는 //trimg.interpark.com 와 경로 prefix 를 붙여주고, size 파라미터가 안넘어온 경우는 //trimg.interpark.com 와 원본이미지 경로 "/g" 를 붙여준다.
 * ASIS:
 * http를 포함한 full url이 넘어오는 경우 그대로 불러오고, http를 포함하지 않은 경우 type에 따라서 //trimg.interpark.com 의 특정 사이즈 경로를 불러온다.
 * TOBE:
 * 무조건 full이 넘어오지만, ASIS 호환을 위해서 full url이 아닌 경우 //trimg.interpark.com 의 특정 사이즈 경로를 불러온다
 * trimg.interpark.com/g 로 full url이 넘어오는 경우에도 특정 사이즈 경로를 path prefix 해준다.
 * (ASIS처럼 type 으로 하지 않고, w, h 값으로 경로를 생성함)
 * TODO:
 * 기존 resize.js 의 함수 호출부를 모두 찾아서 직접 w, h 값을 넘기는 형태로 변경해야 함.
 * @param {string} url - 이미지 호출경로
 * @param {object} size - 원하는 리사이징 사이즈. w: 가로, h: 세로
 * @returns {string} - 원하는 리사이징 url
 */
function getResizedImagePath(url, size) {
  if (typeof url !== 'string') {
    // url 문자열이 아닌 경우 모두 빈문자열 리턴
    return '';
  }
  // 완성될 문자열 형식: //imgp.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg?w=400&h=100
  let result = null;
  let pathPrefix = '';
  /* full url 오는 경우 begin */
  // TOBE는 무조건 이 형식
  if (url.toLowerCase().startsWith('http:')) {
    // 'http://imgp.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg'
    result = url.replace('http:', '');
  }
  if (url.toLowerCase().startsWith('https:')) {
    // 'https://imgp.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg'
    result = url.replace('https:', '');
  }
  if (url.search(/^\w+(\.\w+)+(\/\w+)+\.\w+$/i) !== -1) {
    // 'imgp.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg'
    result = `//${url}`;
  }
  /* //로 시작하고, full url이 오는 경우를 발견하여 추가 begin - 2022.02.09 */
  if (url.search(/^\/\/\w+(\.\w+)+(\/\w+)+\.\w+$/i) !== -1) {
    // '//imgp.interpark.com/tr/fit/place/28552/place_28552_20201123173105_0.jpg'
    result = `${url}`;
  }
  /* //로 시작하고, full url이 오는 경우를 발견하여 추가 end */
  /* full url 오는 경우 end */
  /* path만 오는 경우 begin */
  // ASIS에 남아있을 수 있음
  if (url.search(/^(\/\w+)+\.\w+$/i) !== -1) {
    // '/tr/fit/place/28552/place_28552_20201123173105_0.jpg'
    // w 와 h 값에 따라 path 를 앞에 추가로 붙여줌
    if (
      size &&
      typeof size === 'object' &&
      typeof size.w === 'number' &&
      typeof size.h === 'number'
    ) {
      pathPrefix = `/r/c${size.w}${size.h}`;
    } else {
      pathPrefix = '/g';
    }
    result = `//trimg.interpark.com${pathPrefix}${url}`;
  }
  if (url.search(/^\w+(\/\w+)+\.\w+$/i) !== -1) {
    // 'tr/fit/place/28552/place_28552_20201123173105_0.jpg'
    // w 와 h 값에 따라 path 를 앞에 추가로 붙여줌
    if (
      size &&
      typeof size === 'object' &&
      typeof size.w === 'number' &&
      typeof size.h === 'number'
    ) {
      pathPrefix = `/r/c${size.w}${size.h}`;
    } else {
      pathPrefix = '/g';
    }
    result = `//trimg.interpark.com${pathPrefix}/${url}`;
  }
  /* path만 오는 경우 end */
  // 일치하는 패턴이 없는 경우는 잘못된 경로이므로 기본이미지 반환
  /* path만 오는 경우 end */
  // 일치하는 패턴이 없는 경우는 잘못된 경로이므로 기본이미지 반환
  return result === null
    ? '//openimage.interpark.com/tour-desktop/common/noimg_160.jpg'
    : `${result}${getQueryStringFromJson(size)}`;
}

function getQueryStringFromJson(obj) {
  return isEmpty(obj) || typeof obj !== 'object'
    ? ''
    : Object.keys(obj).reduce((acc, item, index, thisArr) => {
        acc += item + '=' + obj[item].toString();
        if (thisArr.length - 1 !== index) {
          acc += '&';
        }
        return acc;
      }, '?');
}

function isEmpty(value) {
  if (
    value == '' ||
    value == null ||
    value == undefined ||
    (value != null && typeof value == 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log('===== 작업영역 begin =====');
solution();
console.log('===== 작업영역 end =====');
