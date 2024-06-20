console.log('Hello from Digital Clock');

const clock = document.getElementById('clock');
// or =>  const clock = document.querySelector(#clock);


let date = new Date();
console.log(date); // prints the date according to our India Standard Time

console.log(date.toLocaleTimeString());  // ye apna wala normal Time ko print krdega


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString()); // this will print the time running clock on our console but we want to show the time clock on our Webpage
    clock.innerHTML = date.toLocaleTimeString();
} , 1000);  // this `setInterval` function is used to run the function (at time intervals set by us) i.e passed inside the parameter of setInterval Time function

