document.onkeydown = overrideKeyboardEvent;
document.onkeyup = overrideKeyboardEvent;
var keyIsDown = {};

function overrideKeyboardEvent(e){
  switch(e.type){
    case "keydown":
      if(!keyIsDown[e.keyCode]){
        keyIsDown[e.keyCode] = true;
        // do key down stuff here
      }
    break;
    case "keyup":
      delete(keyIsDown[e.keyCode]);
      // do key up stuff here
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
