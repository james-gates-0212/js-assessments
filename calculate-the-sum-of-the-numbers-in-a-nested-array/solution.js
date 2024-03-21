function nestedSum(arr) {
  if (!arr || !Array.isArray(arr)) {
    return 0;
  }
  return arr.flat(Infinity).reduce((prev, value) => prev + (typeof value === 'number' ? value : 0), 0);
}

(() => {
  [
    undefined,
    null,
    3,
    'abc',
    [1, 2, [3, [4], 5, '6'], 6],
    [2, [[[[[3]]]]]],
    [],
    [1, 2, 3],
    [1, 2, [4]],
    [1, [2, [3], 4], [4, [[1]]]],
    [[[[[[[[[[2]]]]]]]]], 3],
  ].forEach((arr) => {
    console.log(JSON.stringify(arr), '==', nestedSum(arr));
  });
})();
