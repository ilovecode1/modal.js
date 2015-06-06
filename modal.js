modaljs = function(title,body) {

var was = document.body.innerHTML

  document.body.innerHTML = was + "<div id='openModal' class='modal'><div><a href='#close' title='Close' class='close'>X</a><h2>" + title + "</h2><p>" + body + "</p></div></div>";
  window.location = "#openModal";

}
