const path = require('path');
const express = require('express');
const getChallenges = require('./scripts/helpers.js').getChallenges;
let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.get('/challenges/*', function(req, res) {
  res.json(getChallenges(req.originalUrl));
});

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT + '...');
});