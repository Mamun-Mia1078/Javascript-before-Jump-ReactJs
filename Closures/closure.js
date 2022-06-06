// locar variable kaz kore only scope er vitore R global variable kaz kore sob jaygay load hoyei thake 
// globaler value jekono jayga theeke change kora jay 
function temp(){
    let counter = 0;
  
  
   return function () {; // its call only own area 
   counter = counter + 1;
     }
}
// bahire theke call korar jonno clouser lagbe 
// funtion sob return kore
const add = temp();
add();
add();
// closure work like local variable 