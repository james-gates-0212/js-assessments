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

  const distinctTransactions = new Set(transactions);

  Array.from(distinctTransactions).map(
    computeTotal(taxRate),
  );

  return numCalls;
};

(() => {
  console.log(solution([3, 4, 3, 7, 4, 9], 2.5));
})();
