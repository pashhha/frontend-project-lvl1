import { getRandomNumber, excludePrimeNumbers } from '../helpers.js';
import runGame from '../index.js';

const findGreatestCommonDivisor = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== 0 && num2 !== 0) {
    num1 > num2 ? (num1 %= num2) : (num2 %= num1);
  }
  return num1 + num2;
};

const gcdArray = excludePrimeNumbers(1, 100);

const rules = 'Find the greatest common divisor of given numbers.';

const makeGame = () => {
  const randomNumber1 = gcdArray[getRandomNumber(0, gcdArray.length - 1)];
  const randomNumber2 = gcdArray[getRandomNumber(0, gcdArray.length - 1)];

  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(findGreatestCommonDivisor(randomNumber1, randomNumber2));
  const questionAnswerArray = [question, answer];
  return questionAnswerArray;
};

export default () => runGame(rules, makeGame);
