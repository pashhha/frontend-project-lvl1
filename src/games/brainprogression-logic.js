import { getRandomNumber } from './braineven-logic.js';

const brainProgression = {
  rules: 'What number is missing in the progression?',
  question() {
    const arrayStep = getRandomNumber(2, 11);
    const arrayStepsCount = getRandomNumber(5, 10);
    let arrayBegin = getRandomNumber(1, 40);
    const arrayEnd = arrayBegin + (arrayStepsCount * arrayStep);
    const progressionArray = [];
    while (arrayBegin <= arrayEnd) {
      progressionArray.push(arrayBegin);
      arrayBegin += arrayStep;
    }
    const randomIndex = getRandomNumber(0, progressionArray.length);
    brainProgression.correctAnswer = String(progressionArray[randomIndex]);
    progressionArray[randomIndex] = '..';
    return progressionArray.join(' ');
  },
};

export default brainProgression;
