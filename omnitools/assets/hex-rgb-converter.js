/*
* hex-rgb-converter.js
* https://github.com/Nimityx/omnitools/blob/main/src/assets/hex-rgb-converter.js
* https://github.com/Nimityx/omnitools/blob/main/src/hex-rgb-converter.html
* https://nimityx.github.io/omnitools/hex-rgb-converter.html
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/Nimityx/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/Nimityx/omnitools
*/
document.getElementById('swaptorgbtohex').onclick = function() {
	document.getElementById('hextorgb').style.display = "none";
    document.getElementById('rgbtohex').style.display = "block";
}
document.getElementById('swaptohextorgb').onclick = function() {
	document.getElementById('rgbtohex').style.display = "none";
	document.getElementById('hextorgb').style.display = "block";
}
document.getElementById('input1').onkeydown = function(e) {
    const regex = RegExp('[0-9a-fA-F]');
    if (!regex.test(e.key) && e.key != 'backspace') {
        e.preventDefault();
    }
}
document.getElementById('input2').oninput = function() {
    if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength)};
    if (this.value > 255) {this.value = 255};
}
document.getElementById('input3').oninput = function() {
    if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength)};
    if (this.value > 255) {this.value = 255};
}
document.getElementById('input4').oninput = function() {
    if (this.value.length > this.maxLength) {this.value = this.value.slice(0, this.maxLength)};
    if (this.value > 255) {this.value = 255};
}
document.getElementById('input1').onkeyup = function() {
	document.getElementById('output1').value = "";
    document.getElementById('output2').value = "";
    document.getElementById('output3').value = "";
    var rgbfromhex = document.getElementById('input1').value.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) });
    document.getElementById('output1').value = rgbfromhex[0];
    document.getElementById('output2').value = rgbfromhex[1];
    document.getElementById('output3').value = rgbfromhex[2];
}
var hex12 = "__";
var hex34 = "__";
var hex56 = "__";
function hexab() {
	document.getElementById('output4').value = "";
	hex12 = ("0" + parseInt(document.getElementById('input2').value).toString(16)).slice(-2);
    document.getElementById('output4').value = hex12.toString() + hex34.toString() + hex56.toString();
}
function hexcd() {
	document.getElementById('output4').value = "";
	hex34 = ("0" + parseInt(document.getElementById('input3').value).toString(16)).slice(-2);
    document.getElementById('output4').value = hex12.toString() + hex34.toString() + hex56.toString();
}
function hexef() {
	document.getElementById('output4').value = "";
	hex56 = ("0" + parseInt(document.getElementById('input4').value).toString(16)).slice(-2);
    document.getElementById('output4').value = hex12.toString() + hex34.toString() + hex56.toString();
}
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
document.querySelector("#copyrgb").onclick = function() {
	copyText("rgb(" + document.querySelector("#output1").value + "," + document.querySelector("#output2").value + "," + document.querySelector("#output3").value + ")");
    document.querySelector("#output1").select();
}
document.querySelector("#copyhex").onclick = function() {
	copyText("#" + document.querySelector("#output4").value);
    document.querySelector("#output4").select();
}
