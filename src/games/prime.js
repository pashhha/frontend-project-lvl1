import {
  getRandomNumber, isNumberPrime, getPrimeNumbers, getCompositeNumbers,
} from '../helpers.js';
import runGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createGame = () => {
  const primeNumbers = getPrimeNumbers(2, 100);
  const compositeNumbers = getCompositeNumbers(1, 40);
  const numbers = primeNumbers.concat(compositeNumbers);
  const question = numbers[getRandomNumber(0, numbers.length - 1)];
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(rule, createGame);
