import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const brainEven = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  question() {
    const brainEvenQuestion = getRandomNumber(1, 100);
    brainEven.correctAnswer = brainEvenQuestion % 2 === 0 ? 'yes' : 'no';
    return brainEvenQuestion;
  },
};

export default () => runGame(brainEven);
