---
title: "ES6: Understand the Differences Between import and require"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
In the past, the function require() would be used to import the functions and code in external files and modules. While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.

ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.

Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one, countItems, in my current file. The old require() approach would force me to bring in all 20 functions. With this new import syntax, I can bring in just the desired function.

Add the appropriate import statement that will allow the current file to use the capitalizeString function. The file where this function lives is called "string_functions", and it is in the same directory as the current file.
#### { My Solution }
```
"use strict";
import { capitalizeString } from "string_functions";
capitalizeString("hello!");
```