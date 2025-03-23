import readlineSync from 'readline-sync';


export function game(userName, question, func) {
    console.log(`${question}`);
        let correctAnswersCount = 0;
            while (correctAnswersCount < 3) {
    
            const [expression, correctAnswer] = func();

            console.log(`Question: ${expression}`);
            const userAnswer = readlineSync.question('Your answer:').toLowerCase();
    
            if (userAnswer !== correctAnswer) {
                console.log('\'' + userAnswer + '\' is wrong answer ;(. Correct answer was \'' + correctAnswer + '\'.');
                console.log('Let\'s try again, ' + userName + '!');
                return;
            } else {
                console.log('Correct!');
                correctAnswersCount += 1;
            }
          }
      
        if (correctAnswersCount === 3) {
            console.log(`Congratulations, ${userName}!`);
            return
        }
    }
    
    // welcomeUser();