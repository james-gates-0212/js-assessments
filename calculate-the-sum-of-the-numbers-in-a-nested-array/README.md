# Calculate the sum of the numbers in a nested array

You need to calculate the sum of the numbers in an array. However, the array contains nested arrays, whose numbers you must also count. These nested arrays may also have further arrays recursively nested in them, and so on. You do not know how deep the nesting continues. If the list is empty, return zero.

The arrays may also contain data that is not of the type number(`string`, `BigInt`, `object`, etc), which you should ignore.

## Examples

```javascript
nestedSum([1, 2, [3, [4], 5, '6'], 6]); // should == 21
nestedSum([2, [[[[[3]]]]]]); // should == 5
nestedSum([]); // should == 0
```

## Execute

```bash
node solution.js
```
