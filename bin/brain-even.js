import { getUserName } from '../src/getUserName.js';
import { game } from '../src/game.js';

function start() {
    const name = getUserName()
    game(name,'What number is missing in the progression?', getRandomEx);
};


 function getRandomEx() {

    const p = (number) => number % 2 === 0;
    const randomNumber = () => Math.floor(Math.random() * 100);
    const expression = randomNumber(p) ? 'yes' : 'no';
    const correctAnswer = randomNumber();

    return [correctAnswer,expression ]
}



start();
