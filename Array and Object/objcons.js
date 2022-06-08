// create constructor inside multiple obj
function Student(name,age,cgpa,language){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.language = language;
    
}
var student1 = new Student ("Rashed",24,3.33,['Bangla','English', 'Arabic']);
var student2 = new Student ("Taslima",23,3.03,['Bangla','English', 'Arabic']);
var student3 = new Student ("Akhi",20,3.22,['Bangla','English', 'Arabic']);
console.log(student2.language);