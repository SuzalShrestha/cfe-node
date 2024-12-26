const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let secretNumber;
let numAttempts;

let askGuess = function () {
    numAttempts--;

    rl.question('Enter your guess! ', (answer) => {
        if (checkNum(Number(answer))) {
            console.log('You Win!!!');
            rl.close();
        } else if (numAttempts === 0) {
            console.log('You lose!!!');
            rl.close();
        } else {
            askGuess();
        }
    });
};

let checkNum = function (num) {
    if (num > secretNumber) {
        console.log('Too high!');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low!');
        return false;
    } else if (num === secretNumber) {
        console.log('Correct!');
        return true;
    } else {
        console.log('Make sure to Enter a number !!!');
        return false;
    }
};

let randomInrange = function (min, max) {
    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
};

let askRange = function () {
    rl.question('Enter a max Number! ', (max) => {
        rl.question('Enter a min Number! ', (min) => {
            secretNumber = randomInrange(min, max);

            askGuess();
        });
    });
};

let askLimit = function () {
    rl.question('Enter your limit! ', (answer) => {
        numAttempts = Number(answer);

        askRange();
    });
};

askLimit();
