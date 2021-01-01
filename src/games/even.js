import { getRandomNumber } from '../helpers.js';
import runGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeGame = () => {
  const question = getRandomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(rule, makeGame);
