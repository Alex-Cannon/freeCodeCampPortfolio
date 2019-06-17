const path = require('path');
const fs = require('fs');
const parser = require('markdown-parse');
const decode = require('unescape');
const Prism = require('prismjs');

let getChallenges = function (dir) {
  const basePath = path.join(__dirname, `../${dir}`);
  var content = [];

  fs.readdirSync(basePath).forEach(file => {
    content.push(fs.readFileSync(`${basePath}/${file}`, 'utf8'));
    parser(content[content.length - 1], function(err, result) {
      if (err) throw err;
      let selection = /<code>([\s\S]*)<\/code>/i;
      result.html = decode(result.html);
      let code = Prism.highlight(result.html.match(selection)[1], Prism.languages.javascript, 'javascript');
      result.html = result.html.replace(selection, '<code>' + code + '</code>');

      content[content.length - 1] = {data: result.attributes, html: result.html }; 
    });
  });

  return content;
}

module.exports = {
  getChallenges
}