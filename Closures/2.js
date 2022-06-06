function bankAccount(initialBalance){
    var balence = initialBalance;
    return function(){
        return balence;
    };
}
var account = bankAccount(1000000);
console.log(account());
// we want know the balence but if we call balece return funtion we get eror bcz of that we declar the funtion  globally
// its a closure