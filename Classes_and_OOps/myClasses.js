// console.log('Hello from myClasses.js');  // just to check

// ES6
// mtlb ki ye jitni bhi baate ham krr rhe hai wo sab ES6 ke an=ane ke baad ki hai


// Creating our Class
// class User {
//     constructor(username , email , password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User('chai' , 'chai@gmail.com' , '123');
// console.log(chai); // agr hamari class mai hamne constructor nhi likha hai too ye line 'User' class ka ekk empty object print kregi 

// console.log(chai.encryptPassword());
// console.log(chai.username);
// console.log(chai.changeUsername());




//******************/ behind the scene (agr hamm pehle ki baat kre jab hamare pass classes nhi hoti thi 'ES6' sai pehle tab hamm kya krte the?) **********
// lets see :

function User(username , email , password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {  // in JS we know ki function is function but function is an Object also and hame pata hai ham object mai uske prototypes mai hamare khudke methods and properties add krr skta hai 
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`;
}

const tea = new User('tea' , 'tea@gmail.com' , '123');

console.log(tea.encryptPassword());
console.log(tea.username);
console.log(tea.changeUsername());