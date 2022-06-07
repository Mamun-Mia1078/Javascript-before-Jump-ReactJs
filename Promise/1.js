// how to create a promise 
// there are three type of Promise pending ,resolve , reject
// resolve = then/ reject = catch/ must kono kazer jonno finally
console.log("Assalamualaikum");
const promise1 = new Promise ((resolve,reject) =>{
    let compeletePromise = true;
    if(compeletePromise){
        resolve("Compeleted Promise1");
    }else {
        reject("not compeleted Promise1")

    }
    
});
promise1
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});
