import { getRandomNumber } from './braineven-logic.js';

const brainCalc = {
  rules: 'What is the result of the expression?',
  question() {
    const operators = ['+', '-', '*'];
    let number1;
    let number2;

    const operator = operators[getRandomNumber(0, operators.length)];
    switch (operator) {
      case '*':
        number1 = getRandomNumber(2, 10);
        number2 = getRandomNumber(2, 10);
        brainCalc.correctAnswer = String(number1 * number2);
        break;
      case '+':
        number1 = getRandomNumber(10, 30);
        number2 = getRandomNumber(1, 20);
        brainCalc.correctAnswer = String(number1 + number2);
        break;
      case '-':
        number1 = getRandomNumber(30, 70);
        number2 = getRandomNumber(1, 30);
        brainCalc.correctAnswer = String(number1 - number2);
        break;
      default: break;
    }
    return `${number1} ${operator} ${number2}`;
  },
};

export default brainCalc;
