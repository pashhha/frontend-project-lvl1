import { getRandomNumber, excludePrimeNumbers } from '../helpers.js';
import runGame from '../index.js';

const findGcd = (num1, num2) => (num2 === 0 ? Math.abs(num1) : findGcd(num2, num1 % num2));

const gcdArray = excludePrimeNumbers(1, 100);

const rules = 'Find the greatest common divisor of given numbers.';

const makeGame = () => {
  const randomNumber1 = gcdArray[getRandomNumber(0, gcdArray.length - 1)];
  const randomNumber2 = gcdArray[getRandomNumber(0, gcdArray.length - 1)];
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(findGcd(randomNumber1, randomNumber2));
  const questionAnswerArray = [question, answer];
  return questionAnswerArray;
};

export default () => runGame(rules, makeGame);
