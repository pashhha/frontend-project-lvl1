import {
  getRandomNumber, isNumberPrime, getPrimeNumbers, getCompositNumbers,
} from '../helpers.js';
import runGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeGame = () => {
  const primeNumbers = getPrimeNumbers(2, 100);
  const compositNumbers = getCompositNumbers(1, 40);
  const brainPrimeArray = primeNumbers.concat(compositNumbers);
  const question = brainPrimeArray[getRandomNumber(0, brainPrimeArray.length - 1)];
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(rule, makeGame);
