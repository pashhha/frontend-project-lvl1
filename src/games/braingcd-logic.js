import { getRandomNumber, excludePrimeNumbers } from '../helpers.js';
import runGame from '../index.js';

const findGcd = (number1, number2) => number2 === 0 ? Math.abs(number1) : findGcd(number2, number1 % number2);
  

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
