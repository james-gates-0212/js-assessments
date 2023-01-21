# Getting the distinct transactions

Fix the below code for only the distinct transactions

```javascript
const solution = (transactions, taxRate) => {
  let numCalls = 0;

  const calculateCostAfterTax = (cost, taxRate) => {
    numCalls = numCalls + 1;
    return cost * taxRate;
  };

  const computeTotal = (taxRate) => {
    return (cost) => {
      return calculateCostAfterTax(cost, taxRate);
    };
  };

  transactions.map(computeTotal(taxRate));

  return numCalls;
};
```

e.g.:

Input

```console
transactions = [3, 4, 3, 7, 4, 9]
taxRate = 2.5
```

Output

```console
4
```

## Execute

```bash
node solution.js
```
