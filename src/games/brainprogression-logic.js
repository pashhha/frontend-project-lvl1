import { getRandomNumber, getProgressionArray } from '../helpers.js';
import runGame from '../index.js';

const brainProgression = {
  rules: 'What number is missing in the progression?',
  question() {
    const progressionArray = getProgressionArray();
    const randomIndex = getRandomNumber(0, progressionArray.length - 1);
    brainProgression.correctAnswer = String(progressionArray[randomIndex]);
    progressionArray[randomIndex] = '..';
    return progressionArray.join(' ');
  },
};

export default () => runGame(brainProgression);
