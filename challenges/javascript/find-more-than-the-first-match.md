---
title: "Regular Expressions: Find More Than the First Match"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

#### { My Solution }
```
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```