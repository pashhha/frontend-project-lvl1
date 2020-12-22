import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const getProgressionArray = (arrayBegin, step, stepCount) => {
  const arrayEnd = arrayBegin + (step * stepCount);
  const array = [];
  let i = arrayBegin;
  while (i <= arrayEnd) {
    array.push(i);
    i += step;
  }
  return array;
};

const rules = 'What number is missing in the progression?';

const makeGame = () => {
  const arrayBegin = getRandomNumber(1, 40);
  const arrayStep = getRandomNumber(2, 11);
  const stepsCount = getRandomNumber(5, 10);
  const progressionArray = getProgressionArray(arrayBegin, arrayStep, stepsCount);
  const randomIndex = getRandomNumber(0, progressionArray.length - 1);
  const answer = String(progressionArray[randomIndex]);
  progressionArray[randomIndex] = '..';
  const question = progressionArray.join(' ');

  const questionAnswerArray = [question, answer];

  return questionAnswerArray;
};

export default () => runGame(rules, makeGame);
