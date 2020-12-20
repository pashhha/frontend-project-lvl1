import readlineSync from 'readline-sync';

export default (rules, makeGame) => {
  let correctAnswerCount = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  while (correctAnswerCount > 0) {
    const questionAnswerArray = makeGame();
    const question = questionAnswerArray[0];
    const correctAnswer = questionAnswerArray[1];
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCount -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(`);
      console.log(`Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
