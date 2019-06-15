---
title: "Regular Expressions: Match Characters that Occur Zero or More Times"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your regex does not need flags, and it should not match any of the other quotes.

#### { My Solution }
```
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /a{2,}/i; // Change this line
let result = chewieQuote.match(chewieRegex);
```