document.getElementById("mobile").onclick = function(){
  document.querySelector("nav").classList.toggle("open");
};

function showOverlay() {
  document.getElementById("overlay-wrapper").style.display = "block";
}

function hideOverlay() {
  document.getElementById("overlay-wrapper").style.display = "none";  
}

// Bindings
document.body.onmouseleave = showOverlay;
document.getElementById("overlay-close").onclick = hideOverlay;

// FIXED!
document.body.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    if(charCode == 27) {
      hideOverlay();
    }
};

setTimeout(showOverlay, 5000);