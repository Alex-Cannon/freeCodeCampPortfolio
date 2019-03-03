---
title: "ES6: Mutate an Array Declared with const"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

**An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.**

#### { My Solution }
```
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  s.sort();

}
editInPlace();
```