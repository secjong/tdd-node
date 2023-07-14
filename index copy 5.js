const util = {
  getDistanceString(lat1, lon1, lat2, lon2) {
    const distance = this.getDistanceByGeo(lat1, lon1, lat2, lon2);
    if (distance == 0) return '';
    if (distance < 1) return parseInt(distance * 1000) + 'm';
    return parseInt(distance) + 'km';
  },
  getDistanceByGeo(lat1, lon1, lat2, lon2) {
    var startLatRads = this.degreesToRadians(lat1);
    var startLongRads = this.degreesToRadians(lon1);
    var destLatRads = this.degreesToRadians(lat2);
    var destLongRads = this.degreesToRadians(lon2);
    var Radius = 6371; //지구의 반경(km)
    var distance =
      Math.acos(
        Math.sin(startLatRads) * Math.sin(destLatRads) +
          Math.cos(startLatRads) *
            Math.cos(destLatRads) *
            Math.cos(startLongRads - destLongRads)
      ) * Radius;
    return distance;
  },
  degreesToRadians(degrees) {
    const radians = (degrees * Math.PI) / 180;
    return radians;
  },
};

function solution() {
  const location = {
    latitude: 37.50506410016768,
    longitude: 127.0571256316018,
  };
  const target = {
    latitude: 37.51267374403223,
    longitude: 127.05885120356186,
  };
  const result = util.getDistanceString(
    location.latitude,
    location.longitude,
    target.latitude,
    target.longitude
  );
  console.log(result);
}

console.log('===== 작업영역 begin =====');
solution();
console.log('===== 작업영역 end =====');
