import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const getProgressionColl = (collBegin, collStep , stepsCount) => {
  const coll = [];
  for (let i = collBegin; coll.length < stepsCount; i += collStep) {
    coll.push(i);
  }
  return coll;
};

const rule = 'What number is missing in the progression?';

const makeGame = () => {
  const begin = getRandomNumber(1, 40);
  const step = getRandomNumber(2, 11);
  const stepsCount = getRandomNumber(5, 10);
  const progressionColl = getProgressionColl(begin, step, stepsCount);
  const randomIndex = getRandomNumber(0, progressionColl.length - 1);
  const answer = String(progressionColl[randomIndex]);
  progressionColl[randomIndex] = '..';
  const question = progressionColl.join(' ');

  return [question, answer];
};

export default () => runGame(rule, makeGame);
