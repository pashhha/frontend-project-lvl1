import readlineSync from "readline-sync";

export default (game) => {
  let correctAnswerCount = 3;
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name?: ");
  console.log(`Hello, ${name}!`);
  console.log(game.rules);

  while (correctAnswerCount > 0) {
    const userAnswer = readlineSync.question(`Question: ${game.question()} `);

    if (userAnswer == game.correctAnswer) {
      console.log("Correct!");
      correctAnswerCount -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(.`);
      console.log(`Correct answer was ${game.correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
