//Modal.js is by Cosmic Open Source Projects v0.4

//How it works?

//1. Saves your old code!
//2. Adds a script to the end and adds your prefrences to it!
//3. Redirects to it!

modaljs = function(title,body) {

  var was = document.body.innerHTML;

  document.body.innerHTML = was + "<style>.modal{font-size:20px}@media(max-width:1580px){.modal{font-size:18px}}@media(max-width:980px){.modal{font-size:16px}}</style><div id='openModal' class='modal'><div><a href='#close' title='Close' class='close'>X</a><h2 class='title'>" + title + "</h2><p class='body'>" + body + "</p></div></div>";
  window.location = "#openModal";
  document.documentElement.scrollTop = 0;

}
