/*
* screen-light.js
* https://github.com/Nimityx/omnitools/blob/main/src/assets/screen-light.js
* https://github.com/Nimityx/omnitools/blob/main/src/screen-light.html
* https://nimityx.github.io/omnitools/screen-light.html
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/Nimityx/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/Nimityx/omnitools
*/
document.querySelector("#color").onchange = function() {
    document.querySelector("#selected").innerHTML = "Color: " + document.querySelector("#color").value;
    document.querySelector("#screen").style = "height:200px;cursor:pointer;border:1px solid black;background-color:" + document.querySelector("#color").value + ";";
}
document.querySelector("#button").onclick = function(){changeset("screen")};
document.querySelector("#screen").onclick = function(){changeset("screen")};
function fullScreenRequest(id) {
  if (document.getElementById(id).requestFullscreen) {
    document.getElementById(id).requestFullscreen();
  } else if (document.getElementById(id).mozRequestFullScreen) {
    document.getElementById(id).mozRequestFullScreen();
  } else if (document.getElementById(id).webkitRequestFullscreen) {
    document.getElementById(id).webkitRequestFullscreen();
  } else if (document.getElementById(id).msRequestFullscreen) {
    document.getElementById(id).msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
function changeset(id) {
  fullScreenRequest(id);
  document.getElementById(id).setAttribute('onclick', 'reset(id)')
}
function reset(id) {
  closeFullscreen();
  document.getElementById(id).setAttribute('onclick', 'changeset(id)')
}
