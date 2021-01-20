/*
* url-encoder.js
* https://github.com/Nimityx/omnitools/blob/main/src/assets/url-encoder.js
* https://github.com/Nimityx/omnitools/blob/main/src/url-encoder.html
* https://nimityx.github.io/omnitools/url-encoder.html
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/Nimityx/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/Nimityx/omnitools
*/
document.querySelector("#encode").onclick = function() {
  document.querySelector("#urloutput").value = encodeURIComponent(document.querySelector("#urlinput").value);
}
function liveModeOn() {
  document.querySelector("#urloutput").value = encodeURIComponent(document.querySelector("#urlinput").value);
  document.querySelector("#urlinput").onkeyup = function() {
      document.querySelector("#urloutput").value = encodeURIComponent(document.querySelector("#urlinput").value);
    }
    document.querySelector("#urlinput").onkeydown = function() {
      document.querySelector("#urloutput").value = encodeURIComponent(document.querySelector("#urlinput").value);
    }
}
function liveModeOff() {
  document.querySelector("#urlinput").onkeyup = function() {}
    document.querySelector("#urlinput").onkeydown = function() {}
}
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      liveModeOn();
    } else {
      liveModeOff();
    }
  });
});
document.querySelector("#copy").onclick = function() {
    var copyText = document.querySelector("#urloutput");
    copyText.select();
    copyText.setSelectionRange(0, copyText.value.length);
    document.execCommand("copy");
}
