let p1 = new Promise ((resolve,reject) =>{
    setTimeout(resolve,500,'one')
})
let p2 = new Promise ((resolve,reject) =>{
    setTimeout(resolve,3000,'two')
})
p1.then((v) =>{
    console.log(v);
})
p2.then((r) =>{
    console.log(r);
})
.catch((err) => {
    console.log(err);
})
