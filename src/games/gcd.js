import { getRandomNumber, getCompositNumbers } from '../helpers.js';
import runGame from '../index.js';

const findGcd = (num1, num2) => (num2 === 0 ? Math.abs(num1) : findGcd(num2, num1 % num2));

const compositNumbers = getCompositNumbers(1, 100);

const rule = 'Find the greatest common divisor of given numbers.';

const makeGame = () => {
  const randomNumber1 = compositNumbers[getRandomNumber(0, compositNumbers.length - 1)];
  const randomNumber2 = compositNumbers[getRandomNumber(0, compositNumbers.length - 1)];
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(findGcd(randomNumber1, randomNumber2));
  return [question, answer];
};

export default () => runGame(rule, makeGame);
