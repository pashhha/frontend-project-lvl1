export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const isNumberPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const getPrimeNumbers = (start, end) => {
  const primes = [];
  for (let i = start; i <= end; i += 1) {
    if (isNumberPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

export const getCompositeNumbers = (start, end) => {
  const composite = [];
  for (let i = start; i <= end; i += 1) {
    if (isNumberPrime(i) === false) {
      composite.push(i);
    }
  }
  return composite;
};
