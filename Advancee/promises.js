// console.log('Hello From Promises');  // just to check


//**************************** Promise1 Example (Creating Promise) ***************************************************
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve(); // Promise consumed krne ke liye isko likhna jaruri hai vrna '.then' wala function nhi chalega. IN SHORT 'resolve()' function helps in connecting our promise with '.then()' function
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');
});


// ******************************* Promise2 Example (without storing in variable we are creating the promise) **********************************
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// ****************************************************** Promise3 Example Creation ***************************************************************
const promiseThree = new Promise(function(resolve , reject){
    setTimeout( function(){
        console.log("inside promise three");
        resolve({username : "Chai" , email : "aryadishant414@gmail.com"}); // reolve ke andar kuch bhi likh skte hai ham like : arrays , objects. but mostly resolve ke andar objects hee hote hai
    } , 1000);
});

promiseThree.then(function(user){
    console.log(user);
});


// ************************************************************ Promise4 Example Creation *********************************************************
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error) {
            console.log('inside promise four');
            resolve({username : "dishant" , password : "12345"});
        } else {
            console.log('Error : Something Went Wrong!!!');
        }
        // resolve({username : "dishant" , password : "12345"}); // uppr wale ko comment krke isko uncomment krke bhi chalake dekhna kuch sikhne ko hee milega so do hit and trials
    } , 1000);
});

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(`username is : ${username}`);
}).catch(function() {
    console.log(function(error){
        console.log(error);
    });
}).finally(function(){
    console.log("The promise is either resolved or rejected");
});



// ************************************************************ Promise5 Example Creation *********************************************************
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if (!error) {
            console.log('inside promise 5');
            resolve({username: "javascript", password: "123"}); // no error means try wale block mai jaaega yeh
        } else {
            console.log('inside promise 5');
            reject('ERROR: JS went wrong'); // error aaya means ye catch wale block mai chala jaaega
        }
    }, 1000)
});

async function consumePromiseFive() { // ye ekk or alg tarika hai to consume the promise
    try {
        const response = await promiseFive; // promiseFive ke aage await islie likha hai coz hame pata hai ki promise hai too promise ko fulfill hone mai time bhi lag skta hai so isko waiting krna padd skta hai islie isko "await (mtlb wai hee hota hai')" mai daala hai
        // console.log(response);
        console.log('inside try block of consumePromise 5 ');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


//  **************************************************** Another way to consume promise ***********************************************************
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); // fetch krna mai bhi time lag skta hai so hamm iske aage bhi await laga rhe hai. fetch ke andr jo link hai wo ekk free sample API hai jisko hamm use krr skte hai to test our website
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();



// ************************************************* Another way to consume the promises **********************************************************
// isme hamm async , await ka bhi use nhi krr rhe hai direct hee 'fetch' ke through promises ko consume krr rhe hai
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// // promise.all
// // yes this is also available, kuch reading aap b kro.




// NOTES : 
/*

* Promise : The Promise is an Object. jo ki batata hai ki ya too ye promise fullfill hoga ya fiir nhi hoga.

* agr promise fullfill hua too wo 'resolve' method ke pass jaaega and agr promise fullfill nhi hua too wo 'reject' method ke pass jaaega

* agr promise fullfill hua too wo 'try' block ke andar jaaega and agr promise fullfill nhi hua too wo 'catch' block ke andar jaaega.

* finally() => ye method ka mtlb hota hai ki ya too promise fullfill hoga ya fiir nhi hoga. mtlb ki finally wala method too chalega hee chalega and ye yahi bataega ki ya too promise fullfill hua hai and ya fiir nhi hua hai


*/