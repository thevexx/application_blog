const express = require('express');
const bodyparser = require("body-parser");
const port = 8020;
const app = express();
var cors = require('cors');


app.use(cors());
app.use(bodyparser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST'); /*on donne l'access du delete put get post*/
  next();
});

const auth = require('./Server/routes/auth');
app.use('/auth',auth);

const blog = require('./Server/routes/blog');
app.use('/blog',blog);

app.listen(port, err=>{
  if (err) throw err;
  console.log(`the server is running on port ${port}`)
});

