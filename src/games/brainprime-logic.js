import {
  getRandomNumber, isNumberPrime, getPrimeNumbers, excludePrimeNumbers,
} from '../helpers.js';
import runGame from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeGame = () => {
  const primeNumbers = getPrimeNumbers(2, 100);
  const notPrimeNumbers = excludePrimeNumbers(1, 40);
  const brainPrimeArray = primeNumbers.concat(notPrimeNumbers);
  const question = brainPrimeArray[getRandomNumber(0, brainPrimeArray.length - 1)];
  const answer = isNumberPrime(question) ? 'yes' : 'no';
  const questionAnswerArray = [question, answer];
  return questionAnswerArray;
};

export default () => runGame(rules, makeGame);
