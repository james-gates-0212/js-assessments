const solution = (tree) => {
  const makeNode = (
    values,
    offset = 0,
    index = 0,
    depth = 0,
  ) => {
    if (
      !values ||
      index >= values.length ||
      values[index] === -1
    ) {
      return null;
    }
    const left = Math.pow(2, depth) + index + offset;
    const right = Math.pow(2, depth) + index + 1 + offset;
    return {
      value: values[index],
      left: makeNode(values, 0, left, depth + 1),
      right: makeNode(values, 1, right, depth + 1),
    };
  };

  const maxDepth = (node) => {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return 1;
    }
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    return Math.max(left, right) + 1;
  };

  return maxDepth(makeNode(tree));
};

(() => {
  const tree = [
    1, 2, 3, 4, -1, 5, 6, -1, -1, -1, -1, 7, 8, -1, 9, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, -1, -1, -1, 11,
    -1,
  ];
  console.log(solution(tree));
})();
