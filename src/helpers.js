export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const getArray = (begin, end) => {
  const coll = [];
  for (let i = begin; i <= end; i += 1) {
    coll.push(i);
  }
  return coll;
};

export const excludePrimeNumbers = (array) => {
  const coll = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      coll.push(i);
    }
  }
  return coll;
};

export const isNumberPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getProgressionArray = () => {
  const arrayStep = getRandomNumber(2, 11);
  const arrayStepsCount = getRandomNumber(5, 10);
  let arrayBegin = getRandomNumber(1, 40);
  const arrayEnd = arrayBegin + (arrayStepsCount * arrayStep);
  const array = [];
  while (arrayBegin <= arrayEnd) {
    array.push(arrayBegin);
    arrayBegin += arrayStep;
  }
  return array;
};

export const getPrimeNumbers = (min, max) => {
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

export const getNotPrimeNumbers = (min, max) => {
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

export const findGreatestCommonDivisor = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    num1 > num2 ? (num1 %= num2) : (num2 %= num1);
  }
  return num1 + num2;
};
