import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const getProgression = (start, step, stepsCount) => {
  const result = [];
  for (let i = start; result.length < stepsCount; i += step) {
    result.push(i);
  }
  return result;
};

const rule = 'What number is missing in the progression?';

const createGame = () => {
  const start = getRandomNumber(1, 40);
  const step = getRandomNumber(2, 11);
  const stepsCount = getRandomNumber(5, 10);
  const progression = getProgression(start, step, stepsCount);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runGame(rule, createGame);
