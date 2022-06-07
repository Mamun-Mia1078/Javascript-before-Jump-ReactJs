function getIphone(bilpassed) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(bilpassed){
                resolve('yah huu I got Iphone ')
            }else{
                reject(new Error('loss loss jibon joubon sob loss  I dont get Iphone'))
            }
        },2000)
    })
}
getIphone(false)
.then((result) => {
    console.log(result)
})
.catch((failed) => {
    console.log(failed.message)
})