import readlineSync from "readline-sync"

export function hello() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    if (name) {
        console.log(`Hello, ${name}`);
    } else {
        console.log('Name cannot be empty.');
    }
};

