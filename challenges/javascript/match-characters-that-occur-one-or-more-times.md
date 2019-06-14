---
title: "Regular Expressions: Match Characters that Occur One or More Times"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.

#### { My Solution }
```
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);
```