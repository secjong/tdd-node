class Animal {
  constructor(age) {
    this.age = age;
  }

  move() {
    console.log('gogogo');
  }
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }

  liveBirth() {
    console.log('aaaa');
  }
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  }

  speak() {
    console.log('abc...');
  }
}

function solution() {
  const sejong = new Human(32, 'white', 'korean');

  sejong.move();
  sejong.liveBirth();
  sejong.speak();
}

console.log('===== 작업영역 begin =====');
solution();
console.log('===== 작업영역 end =====');
