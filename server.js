// incluede http module 
var http = require('http');
// declair port
var PORTGOOD = 7000;
var PORTBAD = 7500;
var randomPhrases = ['You are nice.', 'You smells good.', 'You are looking cute!','You are so kind'];
var randomBadPhrases = ['You are worst.', 'You smells bad.', 'You are looking ugly.', 'You are liar!'];
// function to handle
function handleRequestsGood(request, response){
  response.end(randomPhrases[Math.floor(Math.random()*randomPhrases.length)]);
}

function handleRequestsBad(request, response){
  // response.end('You are worst');
  response.end(randomBadPhrases[Math.floor(Math.random()*randomBadPhrases.length)]);
}
// instantiate our server
var serverGood = http.createServer(handleRequestsGood);
var serverBad = http.createServer(handleRequestsBad);

// Listen on port 8080 and console log message
serverGood.listen(PORTGOOD, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORTGOOD);
});
serverBad.listen(PORTBAD, function(){
  console.log("SERVER LISTENING ON: http://localhost:%s", PORTBAD);
});