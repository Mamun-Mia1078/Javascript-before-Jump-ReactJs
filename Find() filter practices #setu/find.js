const numbers = [1,2,3,4,5,6,7,8,9,]; 
const students = [
    { name: 'Rahim', number: 70, subject:'Math'},
    { name: 'Mamun', number: 60, subject:'Math'},
    { name: 'Rashed', number: 80, subject:'Math'},
    { name: 'Nayem', number: 90, subject:'Math'},
    { name: 'Pulak', number: 40, subject:'Math'},
    { name: 'Farid', number: 60, subject:'Math'},
    { name: 'Masud', number: 40, subject:'Math'},
    { name: 'jovan', number: 60, subject:'Math'},

];

//  const greaterThanThree = numbers.find(function(num){
//      return num>5;
// })
// find method find the return upper value 
// console.log(greaterThanThree);

const failer = students.find((exam)=>{
return exam.number<41;
})
console.log(failer.name,failer.number,failer.subject);
