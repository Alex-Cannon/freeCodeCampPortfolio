---
title: "Regular Expressions: Match a Literal String with Different Possibilities"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".

#### { My Solution }
```
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
```