---
title: "Algorithm: Understanding Undefined Value Returned from a Function"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

#### { My Solution }
```
var sum = 0;

// addFive() returns undefined. Global 'sum' is modified.
function addFive() {
  sum += 5;
}
```