import readlineSync from 'readline-sync';

export function startGame() {

    const isEven = (number) => number % 2 === 0;

    const randomNumber = () => Math.floor(Math.random() * 100);

    const playGame = () => {
        console.log('Welcome to the Brain Games!');
        const name = readlineSync.question('May I have your name? ');
        console.log(`Hello, ${name}`);
        console.log('Answer "yes" if the number is even, otherwise answer "no".');

        let correctAnswersCount = 0;

        while (correctAnswersCount < 3) {
            const number = randomNumber();
            const correctAnswer = isEven(number) ? 'yes' : 'no';
            console.log(`Question: ${number}`);

            const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

            if (userAnswer !== correctAnswer) {
                console.log("'" + userAnswer + "' is wrong answer ;(. Correct answer was '" + correctAnswer + "'.");
                console.log("Let's try again, " + name + "!");
                return;
            } else {
                console.log('Correct!');
                correctAnswersCount += 1;
            }
        }

        console.log(`Congratulations, ${name}`);
    };

    playGame();
}
startGame()