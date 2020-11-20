import readlineSync from 'readline-sync';

const isNumberEven = (number) => {
  return (number % 2 === 0) ? 'yes' : 'no';
}

const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

export default  () =>  {

    let rightAnswerCount = 0;

    console.log('Welcome to the Brain Games!');

    let name = readlineSync.question('May I have your name?: ');

    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    while (rightAnswerCount < 3) {

        let randomNumber = Math.round(getRandomNumber(1, 100));

        let getAnswer = readlineSync.question(`Question: ${randomNumber}: `);

        if (getAnswer === isNumberEven(randomNumber)) {
            console.log('Correct!');
            rightAnswerCount++;
        } else {
            return console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${isNumberEven(randomNumber)}.
                Let's try again, ${name}!`);
                
        }
    }
    return console.log(`Congratulations, ${name}!`);
}