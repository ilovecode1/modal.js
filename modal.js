//Modal.js is by Cosmic Open Source Projects v0.3

//How it works?

//1. Saves your old code!
//2. Adds a script to the end and adds your prefrences to it!
//3. Redirects to it!

modaljs = function(title,body) {

  var was = document.body.innerHTML;

  document.body.innerHTML = was + "<div id='openModal' class='modal'><div><a href='javascript:window.location = '#close';window.location = '#;' title='Close' class='close'>X</a><h2>" + title + "</h2><p>" + body + "</p></div></div>";
  window.location = "#openModal";

}
