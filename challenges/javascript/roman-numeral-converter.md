---
title: "JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*

#### { Instructions }
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
#### { My Solution }
```
const NUMERALS = [
    { val: 1000, letter: 'M' },
    { val: 900, letter: 'CM'},
    { val: 500, letter: 'D' },
    { val: 400, letter: 'CD'},
    { val: 100, letter: 'C' },
    { val: 90, letter: 'XC'},
    { val: 50, letter: 'L' },
    { val: 40, letter: 'XL'},
    { val: 10, letter: 'X' },
    { val: 9, letter: 'IX'},
    { val: 5, letter: 'V' },
    { val: 4, letter: 'IV'},
    { val: 1, letter: 'I' }
];

// num inheritly passed by value. Avoids mutation!
function convertToRoman(num) {
    let myNumeral = '';
    NUMERALS.forEach((numeral) => {
        let numLetters = Math.floor(num / numeral.val);
        if (numLetters > 0) {
            num -= numeral.val * Math.floor(num / numeral.val);
            while (numLetters > 0) {
                myNumeral += numeral.letter;
                numLetters -= 1;
            }
        }
    });
    return myNumeral;
}

convertToRoman(3999);
```