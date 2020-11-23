import readlineSync from 'readline-sync';

const isNumberEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

export default () => {
  let rightAnswerCount = 0;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rightAnswerCount < 3) {
    const randomNumber = Math.round(getRandomNumber(1, 100));

    const getAnswer = readlineSync.question(`Question: ${randomNumber}: `);

    if (getAnswer === isNumberEven(randomNumber)) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      return console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${isNumberEven(randomNumber)}.
                Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
