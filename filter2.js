const numbers = [1,2,3,4,5,6,7,8,9,]; 
const students = [
    { name: 'Rahim', number: 70, subject:'Bangla'},
    { name: 'Mamun', number: 60, subject:'Math'},
    { name: 'Rashed', number: 80, subject:'English'},
    { name: 'Nayem', number: 90, subject:'Physics'},
    { name: 'Pulak', number: 40, subject:'Chemistry'},
    { name: 'Farid', number: 60, subject:'Higher math'},
    { name: 'Masud', number: 40, subject:'Biology'},
    { name: 'jovan', number: 60, subject:'English'},

];
// print the value avobe 45
const upper45 = students.filter((exam) =>{
    return exam.number >=45;
});
console.log(upper45)
// esay way to use filter method 