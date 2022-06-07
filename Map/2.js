const number = [10,20,30,40,50,60];
const names = ['Akib','Jabed','Masum','Nasir'];
const obj = [
  {name: 'Humayun Ahmed',availabeBooks:10},
  {name: 'Marzuk',availabeBooks:20},
  {name: 'Humauyun Azad',availabeBooks:30},
  {name: 'Rabindronath',availabeBooks:40},
  {name: 'Kazi Nazrul Islam',availabeBooks:50},
  {name: 'Shamsur Rahman',availabeBooks:60},

  
];
// const newName = names.map(name => {
//   return name.toLocaleUpperCase();
// });

// console.log(newName);
const newObject = obj.map(item =>{
    return item.name;
});
console.log(obj);
console.log(newObject);
