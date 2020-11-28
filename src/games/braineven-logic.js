export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const brainEven = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  question() {
    const brainEvenQuestion = getRandomNumber(1, 100);
    brainEven.correctAnswer = brainEvenQuestion % 2 === 0 ? 'yes' : 'no';
    return brainEvenQuestion;
  },
};
