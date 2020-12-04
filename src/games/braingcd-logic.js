import { getRandomNumber } from "./braineven-logic.js";

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
  rules: "Find the greatest common divisor of given numbers.",
  question() {
    let number1;
    let number2;
    let correctAnswer = 1;
    const coll = makeArray();

    while (correctAnswer < 2) {
      number1 = coll[getRandomNumber(0, coll.length - 1)];
      number2 = coll[getRandomNumber(0, coll.length - 1)];
      correctAnswer = checkNumbers(number1, number2);
      if (number1 === number2) {
        correctAnswer === 1;
      }
    }
    brainGcd.correctAnswer = String(correctAnswer);
    return `${number1} ${number2}`;
  },
};

export default brainGcd;
