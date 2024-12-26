const fetchData = async function () {
    //error handling
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('fetch is done');
    }
};
fetchData();
const promise1 = new Promise((resolve, reject) =>
    setTimeout(() => reject('one'), 1000)
);
console.log(promise1 instanceof Promise);
