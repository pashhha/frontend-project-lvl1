import { getRandomNumber, getArray, excludePrimeNumbers } from '../functions.js';
import game from '../index.js';

const minArrayValue = 1;
const maxArrayValue = 60;

const array = getArray(minArrayValue, maxArrayValue);
const gcdArray = excludePrimeNumbers(array);

const findGreatestCommonDivisor = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    num1 > num2 ? (num1 %= num2) : (num2 %= num1);
  }
  return num1 + num2;
};

const brainGcd = {
  rules: 'Find the greatest common divisor of given numbers.',
  question() {
    let randomNumber1;
    let randomNumber2;
    let correctAnswer = 0;

    while (correctAnswer < 2) {
      randomNumber1 = gcdArray[getRandomNumber(0, gcdArray.length - 1)];
      randomNumber2 = gcdArray[getRandomNumber(0, gcdArray.length - 1)];
      correctAnswer = findGreatestCommonDivisor(randomNumber1, randomNumber2);
      if (randomNumber1 === randomNumber2) {
        correctAnswer === 0;
      }
    }
    brainGcd.correctAnswer = String(correctAnswer);
    return `${randomNumber1} ${randomNumber2}`;
  },
};

export default () => game(brainGcd);
