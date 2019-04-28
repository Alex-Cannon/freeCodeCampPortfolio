---
title: "ES6: Use getters and setters to Control Access to an Object"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getter and setter in the class, to obtain the temperature in Celsius scale.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

#### { My Solution }
```
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(farenheit) {
      this.farenheit = farenheit;
    }

    get temperature() {
      return 5/9 * (this.farenheit -32);
    }

    set temperature(c) {
      this.farenheit = c * 9 / 5 + 32;
    }

  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```