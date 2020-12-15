import {
  getRandomNumber, isNumberPrime, getPrimeNumbers, getNotPrimeNumbers,
} from '../helpers.js';
import runGame from '../index.js';

const primeNumbers = getPrimeNumbers(2, 100);
const notPrimeNumbers = getNotPrimeNumbers(2, 100);
const brainPrimeArray = primeNumbers.concat(notPrimeNumbers);

const brainPrime = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  question() {
    const brainPrimeQuestion = brainPrimeArray[getRandomNumber(0, brainPrimeArray.length - 1)];
    brainPrime.correctAnswer = isNumberPrime(brainPrimeQuestion) ? 'yes' : 'no';
    return brainPrimeQuestion;
  },
};

export default () => runGame(brainPrime);
