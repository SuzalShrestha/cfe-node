const promise1 = new Promise((resolve, reject) =>
    setTimeout(() => reject('one'), 1000)
);
const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve('two'), 2000)
);

Promise.race([promise1, promise2])
    .then((value) => console.log(value))
    .catch((value) => console.log(value)); // 'one'
