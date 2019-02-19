const path = require('path');
const fs = require('fs');
const parser = require('markdown-parse');
const express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.get('/challenges/*', function(req, res) {
  fs.readdir(path.join(__dirname, req.originalUrl), (err, files) => {
    if (err) { 
      return res.send(err);
    }

    // Read files
    var content = [];
    files.forEach(file => {
      content.push(fs.readFileSync(__dirname + req.originalUrl + '/' + file, 'utf8'));
      parser(content[content.length - 1], function(err, result) {
        content[content.length - 1] = result.html;
      });
    });

    res.json(content);
  })
});

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT + '...');
});