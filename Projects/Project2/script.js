
/*

console.log('hello from BMI Generator');

// Step1 : select the form kyoki hame aage form ki hee jrurat padegi ham apna logic code form par hee apply krr rhe hai
const form = document.querySelector('form');


// this usecase will give you empty because ham form ko submit krne sai pehle hee usko store krwa rhe hai height naam ke variable mai so isko form submit hone ke baad store krwana hai
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)



// Step 2 jab form ko submit kare tab ekk event lagado
// we know ki jese hee ham form ko submit krte hai tab form backend mai "GET ya POST" method ke through submit ho jaata hai too hame filhaal form ko backend mai jaane sai rokna hai
form.addEventListener('submit' , function(e){
    e.preventDefault(); // e is the parameter of the upper anonymous function which contains the "object" that is created by default by the browser when we submit the form. so "e.preventDefault();" ka mtlab hai ki ye object ko backend mai nhi bhejna hai and jesa pehle tha wesa hee rkhna hai


    // jo user ne height and weight enter ki thi usko fetch kar rhe hai and we know input mai text aaya hai which is basically a string so iss string ko ham integer mai convert krenge by using parseInt in built function
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    // Some checks
    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please Enter a valid height';
    }

    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please Enter a valid weight';
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       
        //show the result
        results.innerHTML = `<span> BMI : ${bmi}</span>`;  // span mai islie likha hai kyoki yeh practice ham aage projects mai krenge so abhi sai aadat bana rhe hai
    }


    
});



*/



// AGian Revisisng the upper code
const form = document.querySelector('form');
const results = document.querySelector('#results');
const overViewResult = document.querySelector('#overview');
form.addEventListener('submit' , function(e){

    e.preventDefault();
    // console.log(e);  // this will give us ki hamne kya event click kiya hai. basically hamne pointer event click kiya hai so it will give the output on console as pointer evemt
    // console.log(e.target);  // this line will give us the values jo bhi 'e' ke andar hai


    const height = parseInt(document.querySelector('#height').value);
    // console.log(`Height Enter By user is : ${height}`);

    const weight = parseInt(document.querySelector('#weight').value);
    // console.log(`Weight Enter By user is : ${weight}`);

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please Enter a Valid Height';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please Enter a Valid Weight';
    }

    
    else { 
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>BMI is : ${bmi}</span>`;

        if(bmi < 18.6) {
            overViewResult.innerHTML = 'Person is Under Weight';
        }
        else if(bmi >= 18.6 && bmi <= 24.9) {
            overViewResult.innerHTML = 'Person is in Normal Range';
        }
        else {
            overViewResult.innerHTML = 'Person is Overweight';
        }
    }

  


});

