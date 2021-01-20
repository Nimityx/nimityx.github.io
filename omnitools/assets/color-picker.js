/*
* color-picker.js
* https://github.com/Nimityx/omnitools/blob/main/src/assets/color-picker.js
* https://github.com/Nimityx/omnitools/blob/main/src/color-picker.html
* https://nimityx.github.io/omnitools/color-picker.html
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/Nimityx/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/Nimityx/omnitools
*/
function copyText(a) {
  var b = document.createElement('textarea');
  c = document.getSelection();
  b.textContent = a;
  document.body.appendChild(b);
  c.removeAllRanges();
  b.select();
  document.execCommand('copy');
  c.removeAllRanges();
  document.body.removeChild(b);
}
document.querySelector("#color").onchange = function() {
    document.querySelector("#hex").innerHTML = "Hex: " + document.querySelector("#color").value;
    document.querySelector("#rgb").innerHTML = "RGB: " + "rgb(" + document.querySelector("#color").value.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) }).join(",") + ")";
    document.querySelector("#screen").style = "height:200px;cursor:pointer;border:1px solid black;background-color:" + document.querySelector("#color").value + ";";
    document.querySelector("#copyhex").onclick = function(){copyText(document.querySelector("#color").value)}
    document.querySelector("#copyrgb").onclick = function(){copyText("rgb(" + document.querySelector("#color").value.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) }).join(",") + ")")}
}
