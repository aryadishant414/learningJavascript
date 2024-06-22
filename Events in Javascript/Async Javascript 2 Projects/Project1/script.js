console.log("Hello from Unlimted Colors");

const randomColor = function() {
    const hex = '123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i < 6 ; i++) {
        color += hex[Math.floor(Math.random() * 16)];  // jitne random values chaiye utne sai multiple krdena hai sirf 'Math.random' hame 0 sai 1 ke bich ki values degi and usko jab multiply by 16 krenge too abb 'Math.random' hame 0 sai 16 tak random value generate krke degi. NOTE : yaha '+1' isiye nhi kiya kyoki iss baar hame '0' ko bhi include krwana tha islie
    }
    return color;
}

// let intervalId;
// const startChangingColor = function() {
//     if(!intervalId) {  // means if(intervalId == NULL)
//         intervalId = setInterval(changeBgColor , 1000)
//     }
// }

// const startChangingColor = function() {

// }

// Start Changing Random Bg colors
let intervalId;
document.querySelector('#start').addEventListener('click' , function(){
    intervalId = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    } , 1000);
    console.log(`IntervalId Inside Start Button is : ${intervalId}`);
} , false);


// Stop Changing Random Bg colors
document.querySelector('#stop').addEventListener('click' , function(){
    clearInterval(intervalId);
} , false);


// for follow the good practice see the below code of 'Chai aur Code'

//generate a random color
// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += hex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };
  
//   let intervalId;
//   const startChangingColor = function () {
//     if (!intervalId) {
//       intervalId = setInterval(changeBgColor, 1000);
//     }
  
//     function changeBgColor() {
//       document.body.style.backgroundColor = randomColor();
//     }
//   };
//   const stopChangingColor = function () {
//     clearInterval(intervalId);
//     intervalId = null;
//   };
  
//   document.querySelector('#start').addEventListener('click', startChangingColor);
  
//   document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  

