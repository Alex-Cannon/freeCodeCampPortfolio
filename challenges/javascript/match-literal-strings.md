---
title: "Regular Expressions: Match Literal Strings"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

#### { My Solution }
```
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```