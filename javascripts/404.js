$(function(){
  var link = $('#not-found-email').attr('href');
  var subject = "Broken link on kernowsoul.com";
  var body = "The following url does not exist: " + document.URL
  if(document.referrer != ""){
      body += "\nLinked to from: " + document.referrer;
  }
  var newLink = link + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  $('#not-found-email').attr('href', newLink);
})
