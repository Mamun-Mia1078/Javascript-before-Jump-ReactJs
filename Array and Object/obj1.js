const person = {
    Name: "Muzammel Hoque Mamun",
    age: 25,
    address: {
        city: 'comilla',
        zipcode: 1000
    },
    getBirthYear: function(){
        return 1998 - this.age;
    }
}
let value;
value = person;

value = person.address;

console.log(value);