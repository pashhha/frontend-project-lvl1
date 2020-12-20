export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const isNumberPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getPrimeNumbers = (begin, end) => {
  const primes = [];
  let i = begin;
  for (i; i <= end; i += 1) {
    if (isNumberPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

export const excludePrimeNumbers = (begin, end) => {
  const coll = [];
  for (let i = begin; i <= end; i += 1) {
    if (isNumberPrime(i) === false) {
      coll.push(i);
    }
  }
  return coll;
};
