
/*
*************** Arrow Functions ******************** 
    * Arrow functions were introduced in ES6.
    * Arrow functions allow us to write shorter function syntax: 
    



    //****************** Method 1 to Write Arrow Function *******************
    // this method we use normally 
    // Steps : 
    1. first write our regular function

        ex : function greet() {
         console.log("Hello Jee");
        }

    2. remove the function keyword and function name

        after removing : 

        () {
         console.log("Hello Jee");
        }


    3. add arrow after the parenthesis

        () => {
        
            console.log("Hello Jee");
        }



    4. store it in a variable so that we can call it by its variable name

        const xyz = () => {

            console.log("Hello Jee");
            
            }
           
    So at Step 4 is our complete Arrow Function       
    
    



    // ************************ Method 2 ***************************************************
    // This method is only used when we only had a single expression of code
    // no Return Type is needed in this method

    // Steps : 

    1. Write our Regular Arrow Function
    
    ex : const xyz = () => {

            console.log("Hello Jee");
            
            }
      
            
    2. Remove the Curly braces from the Arrow Function

            const xyz = () => console.log("Hello Jee");
            
    // At step 2 is our completed Arrow Function for Single Expression of code
    
    



    // ********************************************** Method 3 ****************************************************************
    // This method is used 
           

*/


console.log('Hello from Arrow Functionnnnn');

// Normal Function
function greet() {
    console.log("Helooo Jeeeeeee1");
}
greet();


// Arrow Function by Method 1
const method1 = () => {
    console.log("Helooo Jeeeee2");
}
method1();




// Arrow Function by Method 2
// isme curly braces nahi likhe hai kyoki single expression hee hai so return type bhi nhi likhna hai. agr return type likh diya too error dega
const sqrt = (num) => num*num ;
console.log((sqrt(3)));




// Arrow Function by Method 3
// isme hamne curly braces use kiye hai so isme return type likhna padega
const sqrtTwo = (num) =>
    {
        return num*num;
    }
console.log((sqrtTwo(4)));
   