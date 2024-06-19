// console.log('hello from bahar se');
const buttons = document.querySelectorAll('.button');  // isne saare buttons ko select kardiya hai jiski bhi class button hai
const body = document.querySelector('body');


// console.log(buttons);  // this will give us the nodeList
// console.log(buttons[0]); // this will give the output as the whole 1st button ka Element
// console.log(buttons[1]); // this will give the output as the whole 2nd button ka Element
// console.log(buttons[2]); // this will give the output as the whole 3rd button ka Element
// console.log(buttons[3]); // this will give the output as the whole 4th button ka Element
// console.log(buttons[4]); // this will give us the output as undefined


buttons.forEach(function(button){
    // console.log(button); // just to check ki konsa button parameter mai aa rha hai
    button.addEventListener('click' , function(xyz){
        // console.log(xyz); // this will print ki kispe click hua hai
        // console.log(xyz.target); // this will print the exact target element
        if(xyz.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        }
        else if(xyz.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }
        else if(xyz.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
        else {
            body.style.backgroundColor = 'yellow';
        }
    });
});




// ************************** suppose mai ekk single hee button ko target krke dekhta hu *************************
// const firstButton = document.querySelector('.button');  // we know ki Query selector hame uss particular class ka first element hee deta hai
// const body = document.querySelector('body');

// firstButton.addEventListener('click' , function(item){
//     console.log(item);
//     console.log(item.target);
//     // body.style.backgroundColor = 'grey';
//        body.style.backgroundColor = item.target.id;  // or
// });

// Note : ye uppr wala code Only ekk Single button ko  hee target kar rha hai