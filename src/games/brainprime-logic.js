import { getRandomNumber, isNumberPrime } from '../functions.js';
import game from '../index.js';

const getPrimeNumbers = (min, max) => {
  const primes = [];
  let i = min;
  for (i; i <= max; i += 1) {
    if (isNumberPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

// чтобы было сложнее определить простое это число или нет - к простым числам решил добавить
// массив из чисел которые делятся на 3 и на 7, но при этом не делятся на 2. прим. 21, 27, 33, 49

const getNotPrimeNumbers = (min, max) => {
  const notPrimes = [];
  let i = min;
  for (i; i <= max; i += 1) {
    if (i % 3 === 0 && i % 2 !== 0) {
      notPrimes.push(i);
    } else if (i % 7 === 0 && i % 2 !== 0) {
      notPrimes.push(i);
    }
  }
  return notPrimes;
};

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

export default () => game(brainPrime);
