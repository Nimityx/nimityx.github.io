/*
* space-remover.js
* https://github.com/Nimityx/omnitools/blob/main/src/assets/space-remover.js
* https://github.com/Nimityx/omnitools/blob/main/src/space-remover.html
* https://nimityx.github.io/omnitools/space-remover.html
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/Nimityx/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/Nimityx/omnitools
*/
document.querySelector("#space").onclick = function() {
  document.querySelector("#textoutput").value = document.querySelector("#textinput").value.replace(/ /g,"");
}
document.querySelector("#spacelinebreak").onclick = function() {
  document.querySelector("#textoutput").value = (document.querySelector("#textinput").value.replace(/\n/g,"")).replace(/ /g,"");
}
function sliveModeOn() {
  document.querySelector("#textoutput").value = document.querySelector("#textinput").value.replace(/ /g,"");
  document.querySelector("#textinput").onkeyup = function() {
      document.querySelector("#textoutput").value = document.querySelector("#textinput").value.replace(/ /g,"");
    }
    document.querySelector("#textinput").onkeydown = function() {
      document.querySelector("#textoutput").value = document.querySelector("#textinput").value.replace(/ /g,"");
    }
}
function slbliveModeOn() {
  document.querySelector("#textoutput").value = (document.querySelector("#textinput").value.replace(/\n/g,"")).replace(/ /g,"");
  document.querySelector("#textinput").onkeyup = function() {
      document.querySelector("#textoutput").value = (document.querySelector("#textinput").value.replace(/\n/g,"")).replace(/ /g,"");
    }
    document.querySelector("#textinput").onkeydown = function() {
      document.querySelector("#textoutput").value = (document.querySelector("#textinput").value.replace(/\n/g,"")).replace(/ /g,"");
    }
}
function liveModeOff() {
  document.querySelector("#textinput").onkeyup = function() {}
    document.querySelector("#textinput").onkeydown = function() {}
}
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input#ispace');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      sliveModeOn();
    } else {
      liveModeOff();
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input#ispacelinebreak');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      slbliveModeOn();
    } else {
      liveModeOff();
    }
  });
});
document.querySelector("#copy").onclick = function() {
    var copyText = document.querySelector("#textoutput");
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);
    document.execCommand("copy");
}
