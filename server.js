const express = require('express');
const app = express();

const data = require('./data.json');

app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendfile(' index.html', { root: __dirname + "/index.html" } );
});

app.get('/timeline', function(req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))

