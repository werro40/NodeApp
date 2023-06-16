const http = require('http');
const fs= require('fs');
const _ = require('lodash');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');
  //lodash
  const num = _.random(0,20);
  console.log(num); 

  const greet = _.once(() =>{
    console.log('hello');
  });

  let path = './views/';
  switch(req.url){
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;
    case '/about-us':
        res.statusCode = 301;
        res.setHeader('Location','/about');
        res.end();
        break;
    case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
    default:
        path += '404.html';
        res.statusCode = 404;
        break;
  };

  fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err)
        res.end();
    }
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});