---
title: "Regular Expressions: Match Letters of the Alphabet"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Match all the letters in the string quoteSample.

Note
Be sure to match both upper- and lowercase letters.

#### { My Solution }
```
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gmi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```