const express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {

});

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT + '...');
});