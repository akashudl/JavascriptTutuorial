// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){// we can use as property while calling function it is not required to give parenthish
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);