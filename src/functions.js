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
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
