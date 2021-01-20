/*
* what-is-my-referer.js
* https://github.com/Nimityx/omnitools/blob/main/src/assets/what-is-my-referer.js
* https://github.com/Nimityx/omnitools/blob/main/src/what-is-my-referer.html
* https://nimityx.github.io/omnitools/what-is-my-referer.html
* 
* By Nimityx, https://github.com/Nimityx
*
* License : https://github.com/Nimityx/omnitools/blob/main/LICENSE (AGPL-3.0)
* source  : https://github.com/Nimityx/omnitools
*/
if (document.referer == null) {
  document.getElementById("referer").innerHTML = "No referer / hidden";
} else {
  document.getElementById("referer").innerHTML = document.referer;
}
