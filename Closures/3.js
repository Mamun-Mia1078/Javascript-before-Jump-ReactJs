function stopWatch(){
    var startTime = date.now();
    function getDelay(){
        console.log(date.now() - startTime);
    }
    return getDelay;
}
var timer = stopWatch();
for (var i =0; i<100000000; i++){
    var a = Math.random()*1000000;
}
timer();
console.dir(timer);