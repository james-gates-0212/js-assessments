function g(str) {
  const letterFrequencies = {};

  let codeA = 'a'.charCodeAt(0);
  const codeZ = 'z'.charCodeAt(0);

  while (codeA <= codeZ) {
    const letter = String.fromCharCode(codeA++);

    letterFrequencies[letter] = str.replace(
      new RegExp(`[^${letter}]`, 'gi'),
      '',
    ).length;
  }

  return letterFrequencies;
}

(() => {
  console.log(g('Hello there! Apple!'));
})();
