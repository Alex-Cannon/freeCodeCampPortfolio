---
title: "Regular Expressions: Match Single Characters Not Specified"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

#### { My Solution }
```
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```