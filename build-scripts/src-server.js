import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3010;
const app = express();
const compiler = webpack(config);
console.log("99"); 

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  console.log("100"); 
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/menus', function(req, res) {
   console.log("101"); 
   res.json([
    {"id": 1, "name":"Books", "description":"A list of books", "link":"http://google.com"},
    {"id": 2, "name":"Authors", "description":"A list of authors", "link":"http://google.com"},
    {"id": 3, "name":"Clubs", "description":"A list of clubs", "link":"http://google.com"}
  ])
});

app.get('/user/:id', function(req, res) {
   console.log("201"); 
   console.log(req.params);
    console.log(req.query);
   let id = 0;

   id = Number.parseInt(req.params.id);
  console.log("20111 = "+id);  
   if ( id === 1 ) {
     res.json([
       {"user_id": 1, "uname":"Brando"},
     ])
   } else if ( id ===2 ) {
     res.json([
       {"user_id": 2, "uname":"Jacki"},
     ])
   } else {
      res.json([ "Unknow user" ]);
   }
});

app.get('/users', function(req, res) {
   console.log("202"); 
   res.json([
    {"user_id": 1, "uname":"Brando"},
    {"user_id": 2, "uname":"Jacki"},
    {"user_id": 3, "uname":"Ginjer"},
    {"user_id": 4, "uname":"Mona"},
  ])
});

app.listen(port, function(err) {
   console.log("102"); 
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});