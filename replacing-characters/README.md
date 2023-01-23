# Replacing characters

In this problem we are asking for implementation in JavaScript of a function, f, that encodes a String.
The function f shall accept a String as an input and return the encoded String as a return value.

The encoding algorithm replaces every character in the string with the letter that has exactly the same position when counting backwards from letter “z” (with alphabet sort order in mind.) Non-alphabet characters are ignored.

Here are three examples:

- Letter “a" is replaced by letter “z” (because “a” is the first letter of alphabet and “z” is the first letter when counted from the end of the alphabet list.)
- Letter “c” is replaced by letter “x” (because “c” is the third letter of alphabet and “x” is the third letter of alphabet when counted backwards from letter “z".)
- Letter “p” is replaced by letter “k” (because “p” is the 16th letter of alphabet and “k” is the 16th letter when counted backwards from letter “z".)

Therefore, when string “acp” is encoded, the return value is string “zxk”.

Please write and submit this function with any unit tests that you would like to include.

What would be the result of encoding the String “Errors in strategy cannot be correct through tactical maneuvers”?

## Execute

```bash
node solution.js
```
