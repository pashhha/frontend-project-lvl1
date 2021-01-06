import readlineSync from 'readline-sync';

export default (rule, createGame) => {
  let correctAnswersCount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  while (correctAnswersCount > 0) {
    const [question, correctAnswer] = createGame();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(`);
      console.log(`Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
