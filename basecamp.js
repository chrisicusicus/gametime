
// function Char1Change(){
// document.getElementById(char1).src=("./assets/char1.jpg");
// }

// function optionBox2(){
//     onclick(bgChange);
// }

// function chardiv(){
//     if(document.getElementById('char1').style.display=='none'){
//         document.getElementById('char1').style.display=='block'
//     }
// }

// function chardiv(){
//     document.getElementById('chardiv').addEventListener('click', char1);
//     function char1(){
//         document.getElementById('chardiv').style
//     }
// }

let characterDiv = document.getElementById('chardiv');

characterDiv.onclick = function() {
  let div = document.getElementById('char1');
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  } else {
    div.style.display = 'block';
  }

};
