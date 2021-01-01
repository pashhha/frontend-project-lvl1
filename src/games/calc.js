import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const getAnswer = (number1, number2, operator) => {
  let result;
  switch (operator) {
    case '*':
      result = number1 * number2;
      break;
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    default:
      return null;
  }
  return result;
};

const rule = 'What is the result of the expression?';

const makeGame = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = String(getAnswer(randomNumber1, randomNumber2, randomOperator));
  return [question, answer];
};

export default () => runGame(rule, makeGame);
