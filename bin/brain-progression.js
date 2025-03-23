import { getUserName } from '../src/getUserName.js';
import { game } from '../src/game.js';

function start() {
    const name = getUserName()
    game(name,'What number is missing in the progression?', getRandomEx);
};



function getRandomNumber() {
    const w = Math.floor(Math.random() * 100) + 1;
    return w
}

function getRandomNum() {
    const e = Math.floor(Math.random() * 10) + 1;
    return e
}
function getRandomIndex() {
    const a = Math.floor(Math.random() * 9) + 1;
    return a;
}

function getRandomEx() {
    const start = getRandomNumber();
    const difference = getRandomNum();
    const length = 10; 
    let expression = [];
    const correctAnswerIndex = getRandomIndex();
    let answer = 0;
    
    for (let i = 0; i < length; i++) {
        let result = start + i * difference;
        if (correctAnswerIndex === i) {
            answer = result;
            expression.push('...');
        }else {
            expression.push(result);
        }        
    }

    const resultString = expression.join(' ');
    return [resultString,answer.toString()];
    }

start();

