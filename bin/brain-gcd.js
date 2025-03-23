import { getUserName } from '../src/getUserName.js';
import { game } from '../src/game.js';

function start() {
    const name = getUserName()
    game(name,'What number is missing in the progression?', getRandomEx);
};


function p(s,d) {
    const p = Math.floor(Math.random() * 100);
    return p 
}

function d(s,v) {
    const d = Math.floor(Math.random() * 100);
    return d
}

function getResult(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}


function getRandomEx() {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const num1 = p(1, 100);
    const num2 = d(1, 100);
    const expression = [a, b]
    const correctAnswer = getResult(num1,num2);
    return [expression, correctAnswer]; 

}


start();