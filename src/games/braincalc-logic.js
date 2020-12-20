import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const getAnswer = (number1, number2, operator) => {
  const num1 = Number(number1);
  const num2 = Number(number2);
  let answer;
  if (operator === '*') {
    answer = String(num1 * num2);
  } else if (operator === '+') {
    answer = String(num1 + num2);
  } else if (operator === '-') {
    answer = String(num1 - num2);
  }
  return answer;
};

const rules = 'What is the result of the expression?';

const makeGame = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const answer = getAnswer(randomNumber1, randomNumber2, randomOperator);
  const questionAnswerArray = [question, answer];
  return questionAnswerArray;
};

export default () => runGame(rules, makeGame);
