console.log('Hello from KEyboard Key Press Project');

const insert = document.getElementById('insert');

// window.addEventListener('keydown' , function(e){
//     insert.innerHTML = `
    
//     <table>
//     <tr>
//       <th>Key</th>
//       <th>Keycode</th> 
//       <th>Code</th>
//     </tr>
//     <tr>
//       <td>${e.key === ' ' ? 'Space' : e.key}</td>
//       <td>${e.keyCode}</td> 
//       <td>${e.code}</td>
//     </tr>
    
//   </table>
//     `;
// } , false);



// Itna uupr wala agr code nhi likhna hai and sirf print hee krwana hai ki konsi key press hue hai too fiir yeh niche wala code krlo simple it is. hamara abhi main focus hone chaiye concept par naaki jyada deep mai cheezo ko likhke khud confuse ho jaae
window.addEventListener('keydown' , function(e){

    insert.innerHTML = `
    <h1>The Pressed Key is : ${e.key === ' ' ? 'Space' : e.key}
    `

} , false);