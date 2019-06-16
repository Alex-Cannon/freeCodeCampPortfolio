---
title: "Regular Expressions: Find Characters with Lazy Matching"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Fix the regex /<.*>/ to return the HTML tag h1 and not the text "h1 Winter is coming h1". Remember the wildcard . in a regular expression matches any character.

#### { My Solution }
```
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.?1*>/; // Change this line
let result = text.match(myRegex);
```