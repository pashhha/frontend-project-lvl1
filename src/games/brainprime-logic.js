import { getRandomNumber } from './braineven-logic.js';

const getArray = () => {
  const coll = [2, 5];

  for (let i = 2; i < 100; i += 1) {
    if (i % 3 === 0 && i % 2 !== 0) {
      coll.push(i);
    } else if (i % 7 === 0 && i % 2 !== 0) {
      coll.push(i);
    } else if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
      coll.push(i);
    }
  }
  return coll;
};

const isNumberPrime = (number) => {
  if (number === 2) {
    return 'yes';
  } else if (number === 3) {
    return 'yes';
  } else if (number === 5) {
    return 'yes';
  }else if (number === 7) {
    return 'yes';
  }else if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
    return 'yes';
  }
  return 'no';
};

const brainPrime = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  question() {
    const brainPrimeArray = getArray();
    const brainPrimeQuestion = brainPrimeArray[getRandomNumber(0, brainPrimeArray.length - 1)];
    brainPrime.correctAnswer = isNumberPrime(brainPrimeQuestion);
    return brainPrimeQuestion;
  },
};

export default brainPrime;
