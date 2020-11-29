import { getRandomNumber } from './braineven-logic.js';

export const getRandomArrayValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const brainCalc = {
  rules: "What is the result of the expression?",
  question() {
    const operators = ['+', '-', '*'];
    let number1;
    let number2;

    const operator = getRandomArrayValue(operators);
    if(operator === '*') {
      number1 = getRandomNumber(1, 10);
      number2 = getRandomNumber(1, 10);
    } else {
    number1 = getRandomNumber(31, 70);
    number2 = getRandomNumber(1, 30);
    };
    let answer = [number1, number2, operator];
    brainCalc.correctAnswer = eval(answer[0] + answer[2] + answer[1]);
    return `${number1} ${operator} ${number2} =` ;
  },
};
