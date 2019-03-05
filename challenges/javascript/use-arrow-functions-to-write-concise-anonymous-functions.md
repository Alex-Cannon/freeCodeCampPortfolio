---
title: "ES6: Use Arrow Functions to Write Concise Anonymous Functions"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also make sure nothing is defined using the keyword var.

#### { My Solution }
```
const magic = () => {
  "use strict";
  return new Date();
};
```