var express = require('express');
var path = require('path');

var app = express();

app.set("view engine", 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

var data = {count:0};
app.get('/', function(req, res){
  data.count++;
  res.render('main',data);
});

app.get('/reset', function(req, res){
  data.count = 0;
  res.render('main', data);
});

app.get('/set/count', function(req, res){
  if(req.query.count) data.count = req.query.count;
  res.render('main',data);
});

app.get('/set/:num', function(req, res){ // request parms from user
  data.count = req.parms.count;
  res.render('main', data);
});

app.listen(3000, function(){
  console.log('server on');
});

/* app.js test */

if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return ressArray;
  };
}

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
