---
title: "Regular Expressions: Match Ending String Patterns"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use the anchor character ($) to match the string "caboose" at the end of the string caboose.

#### { My Solution }
```
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```