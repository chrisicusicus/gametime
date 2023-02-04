

let backbutton = document.getElementById('option1');


function shroomieGet(){
let div = document.getElementById('shroomie1');
document.getElementById("NarratorText").innerHTML="You found one!";

    if (div.style.display = 'none'){
        div.style.display = 'inline-block';


    }
    alert("you got a shroomie!");

    
}

function onload(){
    let shroomed = document.getElementbyid('shroomie1');
    let shroomkey = window.localStorage.key(1);
    if (shroomed.style.display = 'inline-block'){
        window.localStorage.setitem('shroomkey','Hungry Shroomie');

    }
}