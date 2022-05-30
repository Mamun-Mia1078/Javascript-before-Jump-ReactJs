async function just(){
    return new Promise(function(resolve,reject ){
        setTimeout(() => {
            resolve('wait three seconds ')
        }, 3000);
    })
}
(async function init(){
    let data = await just();
    console.log(data);
})()