---
title: "Regular Expressions: Match Beginning String Patterns"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.

#### { My Solution }
```
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
```