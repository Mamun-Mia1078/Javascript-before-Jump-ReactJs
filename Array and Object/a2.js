const numbers = [22,33,44,44,45,99,25];
let array2 = [222,334,644,444,845,999,225];
var name =['red','green','yellow','blue'];
const mixed =[26,'its mixed array', true , undefined, null, {a:1 , b:2}];
let value ; 
value = numbers.length;
value = Array.isArray(numbers);
value = numbers[2];
value = numbers.indexOf(45); // how to know array index number
value = [0];
numbers [0]= 21546321; // insert value
numbers.push(100); // add the in end 
numbers.unshift(200); // add value of starting value and shift remove the value 
numbers.pop()// remove the value
numbers.splice(1,3) // bad deowa 1 theke shuru hobe 3 giye sesh hobe 
numbers.reverse(); // opposite all value 

value = numbers.concat(array2); //add two array


console.log(numbers); 

console.log(value);
