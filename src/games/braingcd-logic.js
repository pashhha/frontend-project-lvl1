import { getRandomNumber } from './braineven-logic.js';

const makeArray = () => {
  const array = [];
  for (let i = 1; i <= 60; i += 1) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) array.push(i);
  }
  return array;
};

const checkNumbers = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    num1 > num2 ? (num1 %= num2) : (num2 %= num1);
  }
  return num1 + num2;
};

const brainGcd = {
  rules: 'Find the greatest common divisor of given numbers.',
  question() {
    let number1;
    let number2;
    const coll = makeArray();

    while (number1 === number2) {
      number1 = coll[getRandomNumber(0, coll.length)];
      number2 = coll[getRandomNumber(0, coll.length)];
    }

    brainGcd.correctAnswer = String(checkNumbers(number1, number2));
    return `${number1} ${number2}`;
  },
};

export default brainGcd;
