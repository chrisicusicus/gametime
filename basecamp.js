const textNarrator = document.getElementById('NarratorText')
const textOptions = document.getElementById('optionBoxes')
const optionBox1 = document.getElementById('option1')
let backbutton = document.getElementById('option1');


  function newText(){
    document.getElementById("NarratorText").innerHTML = "new text";
  }


function block() {
    let div = document.getElementById('char1');
    if (div.style.display !== 'none') {
      div.style.display = 'block';
    }
  
  };

  function option1(opt1){
    let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');
    let option3 = document.getElementById('option3');
    let option4 = document.getElementById('option4');
    let char1div = document.getElementById('char1');

    document.getElementById("NarratorText").innerHTML = "(???): Woah!  A human!  What are you doing around here??";
    if (char1div.style.display !== 'none') {
      char1div.style.display = 'block';
    }
    if(option1.style.display !== 'inline-block'){
      option1.style.display = 'none';
    }
    if(option2.style.display !== 'inline-block'){
      option2.style.display = 'none';
    }
    if(option3.style.display !== 'none') {
      option3.style.display='inline-block';
    }
    if(option4.style.display !== 'none') {
      option4.style.display = 'inline-block';
    }

    $("option1").click(function(){
      $(this).replaceWith($("option3"))
    });

  }

  function option2(opt2){
    let option3 = document.getElementById('option3');
    let option4 = document.getElementById('option4');
    let option5 = document.getElementById('option5');
    let optionBoxes = document.getElementById('optionBoxes');

    document.getElementById("NarratorText").innerHTML = "A what?  Did you hit your head or something?  Here, I have some tea boiling...";
    if(option3.style.display = 'inline-block'){
      option3.style.display = 'none';
    }
    if(option4.style.display = 'inline-block'){
      option4.style.display = 'none';
    }

    if(option4.style.display = 'none'){
      option5.style.display = 'inline-block';
    }
  }

  
function onload(){
  let shroomed = document.getElementbyid('shroomie1');
  let shroomkey = window.localStorage.key(1);
  let door = document.getElementbyId('doordiv');

  if (shroomkey=1){
    doordiv.style.display='block';
  }
  if (shroomed.style.display = 'inline-block'){
      window.localStorage.setitem('shroomkey','Hungry Shroomie');
  }
}



function onload(){
  let div = document.getElementbyid('shroomie1');
  let shroomkey = window.localStorage.key(1);
  if (div.style.display = 'inline-block'){
      window.localStorage.setitem('shroomkey','Hungry Shroomie');

  }
}




function shroomieGet(){
  let div = document.getElementById('shroomie1');
  let shroomkey = window.localStorage.key(1);
  
  document.getElementById("NarratorText").innerHTML="You found one!";
  
      if (div.style.display = 'none'){
          div.style.display = 'inline-block';
      }
      alert("you got a shroomie!");
  
      if(div.style.display = 'inline-block'){
          window.localStorage.setItem('shroomie1', 'shroomie');
      }
      
  }
  
  
  