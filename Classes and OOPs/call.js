function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)  // yaha par hamne optionally 'this' ko send kiya hai coz jab 'setUsername' method call hoga tab usme jo this hai uska scope too uska function khatam hone tak hee rahega uske baad too wo function cal stack se hatt jaaega islie hamne apna 'this' pass kiya hai so 'setUsernmae' method iss baar hamara wala 'this' lega jo hamne optionally pass kiya hai wo.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);