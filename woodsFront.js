// $(".appendbtn").click(function () {
//     var template = $('#appendTemplate").html();
//     $(".appendme").append(template);
// });


const textNarrator = document.getElementById('NarratorText')
const textOptions = document.getElementById('optionBoxes')
const optionBox1 = document.getElementById('option1')

function block() {
    let div = document.getElementById('char1');
    if (div.style.display !== 'none') {
      div.style.display = 'block';
    }
    
  
  };

  function newText(){
    document.getElementById("NarratorText").innerHTML = "new text";
  }



