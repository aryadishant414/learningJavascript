/*

* Call-Back Functions in Javascript
* A callback is a function passed as an argument to another function
* This technique allows a function to call another function
* A callback function can run after another function has finished


*/

console.log('hello from callBack function');
// *********************************************************** EXAMPLE 1 *************************************************************************************************
// ************* Method 1 **********************
// Call back function Example
// in this below calculate function hamne iske andar ekk function `(operation)` ko as a parameter pass kiya hai and fiir issi parameter wale function ko calculate naam ke function mai call bhi kiya hai. iss passed parameter function `(operation)` ki definition kahi or likhi hue hai at line 20 mai
// function calculate (a , b , operation) {
//     return operation(a,b);
// }


// yaha par hamne calculate naam ke function ko call kiya hai and iske paramters mai ekk `Anonymous` function ko pass kiya hai . yeh anonymous function basically upper wale operation function ki hee definition hai
// ye niche wala anonymos function jo parameter mai likha hai usko yaha call nhi kiya hai bss hamne usko pass kiya hai bss usko define yaha par hee kar diya hai. hamm chahe too isko define issse pehle bhi kar skte hai bahar kahipe 
// const result = calculate(4 , 4 , function(num1 , num2){
//     return num1 + num2;
// });
// console.log(result);



// *********** Method 2 (By Using Arrow Function)
// ************************ issi uppr wale function ko abb Arrow Function ki Help sai likhke dekhte hai **********************
// const calculate = (a , b , operation) => {
//     return operation(a , b);
// }

// // calculate function calling
// const result = calculate(5 , 5 , function(num1 , num2){
//     return num1 + num2;
// })

// console.log(result);


//************************** * Method 3 ********************** 
// Operation function ko anonymously declare nhi krenge iss baar iski bhi alag sai definition denge
// const calculate = (a , b , operation) => {
//     return operation(a , b);
// }

// const ope = function operation(num1 , num2) {
//     return num1 + num2;
// }

// const result = calculate(19 , 19 , ope);
// console.log(result);







// ******************************************************************* EXAMPLE 2 *************************************************************
// Subtraction OPeration using call back function
const calculate = (a , b , operation) => {
    return operation(a,b);
}

const subtraction = (a,b) => a-b;

const subResult = calculate(8 , 4 , subtraction);

console.log(subResult);

/* NOTE : v.imp
1. Agar parameter mai Function ko sirf pass krna hai too => just write the name of that function
Example : 
        calculate(8,3, subtraction);  // this is just passing the function as a parameter. yaha function call nhi hua hai


2. Agar parameter mai jo function pass krr rhe hai usko bhi agar parameters de diye too wo function call ho jaaega (parameter wala function)

example : 
        calculate(8 , 3 , subtraction(8,3));  // abb ye parameter wala `subtraction` function bhi call hogya hai


3. any function can only be access when it is initialized before its access      

*/







// ***************************************************** EXAMPLE 3 *****************************************************
// Multiple Operation using Call Back Function
// iss baar hamm bina arrow function ke normal function sai hee kar rhe hai isko kyoki abb hamare liye isko arrow function mai change karna halwa hai kyoki hamne sikh liya hai. agr bhul gaye ho too arrow funciton wali file dekhlo ki normal function ko arrow function mai kese change krte hai


// Multiple function definition
function multiply(a , b) {
    return a*b;
}

// yaha calculate function mai multiply function ko as a parameter sirf pass kiya hai call nhi kiya hai iss baat ka dhyan rkhna. agr parenthesis lagake parameters anadar daalte too multiply function yaha call hota
const multiResult = calculate(6 , 2 , multiply); 

console.log(multiResult);