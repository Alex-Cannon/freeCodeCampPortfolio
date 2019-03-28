---
title: "JavaScript Algorithms and Data Structures Projects: Caesars Cipher
"
certificate: "Javascript Algorithms and Data Structures"
order: 0
---
Certificate: *Javascript Algorithms and Data Structures*
#### { Instructions }
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

#### { My Solution }
```
// Returns true if a given char is a letter
function isLetter(char) {
  const ascii = char.charCodeAt(0);
  return 65 <= ascii && ascii <= 90;
}

// Returns a Decoded Letter using the ROT13 cipher
function shiftLetter(char) {
  const ascii = char.charCodeAt(0);
  if (ascii + 13 > 90) {
    return String.fromCharCode(ascii - 13);
  }
  return String.fromCharCode(ascii + 13);
}

// Decodes a given string using the ROT13 cipher
function rot13(str) {
  let chars = str.split('');
  return chars.map((char) => {
    if (isLetter(char)) {
      return shiftLetter(char);
    }
    return char;
  }).join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");
```