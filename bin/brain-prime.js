import { getUserName } from '../src/getUserName.js';
import { game } from '../src/game.js';

function start() {
    const name = getUserName()
    game(name,'What number is missing in the progression?', getRandomEx);
};


function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

function getRandomEx() {

    const expression = (Math.floor(Math.random() * 100) + 1);
    const correctAnswer = isPrime(expression) ? 'yes' : 'no';
    return [expression, correctAnswer];
}


start();








