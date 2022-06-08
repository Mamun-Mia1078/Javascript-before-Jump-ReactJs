const student = {
    id: 1078,
    name: "Muzammel Hoque Mamun",
    cgpa: 3.50,
    language: {
        fluent:'Bangla',
        conversational:'English'
    }
}
const{
    id,language,name
} = student
console.log(name);
console.log(language);
console.log(language.conversational);