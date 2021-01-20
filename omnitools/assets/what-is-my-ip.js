/*
* what-is-my-ip.js
* https://github.com/Nimityx/omnitools/blob/main/src/assets/what-is-my-ip.js
* https://github.com/Nimityx/omnitools/blob/main/src/what-is-my-ip.html
* https://nimityx.github.io/omnitools/what-is-my-ip.html
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/Nimityx/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/Nimityx/omnitools
*/
const proxyurl = "https://cors-anywhere.herokuapp.com/";
function requestipspec(ip) {
  document.querySelector("#ip").innerHTML = ip;
    var url = "http://ip-api.com/json/" + ip + "?fields=16974545";
    fetch(proxyurl + url)
    .then(response => response.text())
    .then(contents => {
      document.querySelector("#city").innerHTML = "City: " + JSON.parse(contents).city;
        document.querySelector("#country").innerHTML = "Country: " + JSON.parse(contents).country;
        document.querySelector("#coord").innerHTML = "Coordinates: " + JSON.parse(contents).lat + ", " + JSON.parse(contents).lon;
        document.querySelector("#isp").innerHTML = "ISP: " + JSON.parse(contents).isp;
        document.querySelector("#mobile").innerHTML = "Mobile: " + JSON.parse(contents).mobile;
        document.querySelector("#proxy").innerHTML = "Proxy: " + JSON.parse(contents).proxy;
        document.querySelector("#hosting").innerHTML = "Hosting: " + JSON.parse(contents).hosting;
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
}
var url = "https://api.ipify.org/";
fetch(proxyurl + url)
.then(response => response.text())
.then(contents => requestipspec(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
