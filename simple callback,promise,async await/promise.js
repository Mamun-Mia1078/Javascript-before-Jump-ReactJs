let myPromise = new Promise((resolveFunc,rejectFunc)=>{
    let result = 2;
    if(result == 2){
        resolveFunc('Success')
    }
    else{
        rejectFunc('Failed')
    }

});

myPromise.then((msg) => console.log('Hello this is callback ${msg}'));

// promise only used asyncronas progammaing 

