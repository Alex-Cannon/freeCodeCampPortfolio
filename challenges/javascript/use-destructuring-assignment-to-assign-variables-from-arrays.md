---
title: "ES6: Use Destructuring Assignment to Assign Variables from Arrays"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

#### { My Solution }
```
let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [b, a];
})();
console.log(a); // should be 6
console.log(b); // should be 8
```