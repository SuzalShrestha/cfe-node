const callback = (resolve, reject) => {
    const sucess = true;
    if (sucess) {
        resolve('asldilsdjadjasksd');
    }
    if (!sucess) {
        reject('Failure!');
    }
};
const promiseObject = new Promise(callback);
//then runs the callback only if the resolve function is called or promise is successfully fullfilled
promiseObject
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    })
    .finally(() => {
        console.log('Finally block');
    });
//catch runs the callback only if the reject function is called or promise is rejected
// promiseObject.catch((data) => {
//     console.log(data);
// });
//finally
