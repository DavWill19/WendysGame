var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.loop = true;
  x.play(); 
} 
function poop() { 
    var rap1 = document.getElementById("rap"); 
    rap.parentNode.removeChild(rap1);
    playAudio();
    } 


function checkS(data){
    if (data.keyCode == 83){
        poop()
        return false
    };
    };
function checkKeyPress(key){
    if (key.keyCode == "83"){
        poop()
    }
}
window.addEventListener("keydown", checkKeyPress, false);


