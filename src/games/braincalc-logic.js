import { getRandomNumber } from '../functions.js';
import game from '../index.js';

const brainCalc = {
  rules: 'What is the result of the expression?',
  question() {
    const operators = ['+', '-', '*'];
    let randomNumber1;
    let randomNumber2;

    const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
    switch (randomOperator) {
      case '*':
        randomNumber1 = getRandomNumber(2, 10);
        randomNumber2 = getRandomNumber(2, 10);
        brainCalc.correctAnswer = String(randomNumber1 * randomNumber2);
        break;
      case '+':
        randomNumber1 = getRandomNumber(10, 30);
        randomNumber2 = getRandomNumber(1, 20);
        brainCalc.correctAnswer = String(randomNumber1 + randomNumber2);
        break;
      case '-':
        randomNumber1 = getRandomNumber(30, 70);
        randomNumber2 = getRandomNumber(1, 30);
        brainCalc.correctAnswer = String(randomNumber1 - randomNumber2);
        break;
      default: break;
    }
    return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  },
};

export default () => game(brainCalc);
