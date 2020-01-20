var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('/');
});

app.listen(3000, function(){
  console.log('server on');
});




/* app.js test */

function fizzBuzz() {
  for(i=0; i<100; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      console.log("fizzBuzz");
    } else if(i%3 === 0) {
      console.log("Fizz");
      } else if (i%5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
    }
  }
}
