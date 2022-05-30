const promise1 = Promise.resolve('Promise 1 Resolved');

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Promise 2 Resolved')
    },2000);
});
Promise.all([promise1,promise2]).then((res) => {
    console.log(res);
});