import { getUserName } from '../src/getUserName.js';
import { game } from '../src/game.js';

function start() {
    const name = getUserName()
    game(name,'What is the result of the expression?', getRandomEx);
};


    function getResult(num1, num2, operator) {
        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-' : 
                return (num1 - num2).toString();
            default:
                return (num1 * num2).toString();
        }
    }

    
    function getRandomEx() {
        const operators = ['+', '-', '*'];
        const num1 = Math.floor(Math.random() * 50) + 1; 
        const num2 = Math.floor(Math.random() * 50) + 1; 
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const expression = `${num1}${operator}${num2}`;
        const answer = getResult(num1, num2, operator);
        return [expression, answer];
    }



start();