document.onkeydown = overrideKeyboardEvent;
document.onkeyup = overrideKeyboardEvent;
var keyIsDown = {};

function overrideKeyboardEvent(e){
  switch(e.type){
    case "keydown":
      if(!keyIsDown[e.keyCode]){
        keyIsDown[e.keyCode] = true;
        alert("Pressed "+e.keyCode);
      }
    break;
    case "keyup":
      delete(keyIsDown[e.keyCode]);
      alert("Let go of "+e.keyCode);
    break;
  }
  disabledEventPropagation(e);
  e.preventDefault();
  return false;
}
function disabledEventPropagation(e){
  if(e){
    if(e.stopPropagation){
      e.stopPropagation();
    } else if(window.event){
      window.event.cancelBubble = true;
    }
  }
}
