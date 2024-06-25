console.log('hello from static prop.'); //just for check
// Prop. => short form mai abse ham properties ko 'prop' hee bolege

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // gives error.  to access this remove the static keyword from that function which we are trying to access.


// NOTE : we can ONLY call a 'STATIC' method/function inside the class only.
// static methods/functions cannot be accessed outside the class even the class objects also not allowed to access the static methods/functions