import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const brainCalc = {
  rules: 'What is the result of the expression?',
  question() {
    let randomNumber1;
    let randomNumber2;
    const operators = ['+', '-', '*'];
    const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

    switch (randomOperator) {
      // что-бы сделать игру более легкой для пользователей, для разных операций,
      // я задаю разные диапазоны чисел для умножения это числа от 2 до 10
      case '*':
        randomNumber1 = getRandomNumber(2, 10);
        randomNumber2 = getRandomNumber(2, 10);
        brainCalc.correctAnswer = String(randomNumber1 * randomNumber2);
        break;
        // для сложения числа от 1 до 50
      case '+':
        randomNumber1 = getRandomNumber(1, 50);
        randomNumber2 = getRandomNumber(1, 50);
        brainCalc.correctAnswer = String(randomNumber1 + randomNumber2);
        break;
        // что-бы избежать результата со знаком -,
        // превое число в вычитание от 51 до 100, второе от 1 до 50
      case '-':
        randomNumber1 = getRandomNumber(51, 100);
        randomNumber2 = getRandomNumber(1, 50);
        brainCalc.correctAnswer = String(randomNumber1 - randomNumber2);
        break;
      default: break;
    }

    return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  },
};

export default () => runGame(brainCalc);
