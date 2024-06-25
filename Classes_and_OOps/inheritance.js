console.log('hello from inheritance.js'); // just to check

class User {
    constructor(username){
        this.username = username
    }

    logMe(){  // ye ekk method hai jo ki hamne banaya hai iss method ka kaam hai ki jo bhi user aaya hai uske username ko print krwana 
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{ // this line means that Teacher class (jo ki child class hai) abb User class(jo ki parent class hai) ki properties ko bhi use krr skti hai
    constructor(username, email, password){
        super(username);  // super keyword ka mtlb hai ki : pehle hame agar koi method ya property ko use krna hota tha jo ki kisi or method mai define hai tab hame function calling ke parameter mai ekk optional 'this' ko bhi send krna padta tha but abb with the help of 'super' keyword super keyword inside andr hee apne saath 'this' ko lejadega and uss username ko la dega hame abb iss chij ka load lene ki jrurat nhi hai
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(masalaChai instanceof User);
console.log(chai instanceof User);
console.log(Teacher instanceof User);
