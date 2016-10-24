// incluede http module 
var http = require('http');
// declair port
var PORTGOOD = 7000;
var PORTBAD = 7500;
// function to handle
// function goodAboutU(){
function handleRequestsGood(request, response){
  response.end('You are good');
}

function handleRequestsBad(request, response){
  response.end('You are worst');
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