### Understanding undefined value returned from a function

#### Instructions
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

#### My solution
```
var sum = 0;

// addFive() returns undefined. Global 'sum' is modified.
function addFive() {
  sum += 5;
}
```