const solution = (word, cipher) => {
  if (
    !/^[a-z]+$/.test(word) ||
    !word ||
    !cipher ||
    cipher.length !== 26
  ) {
    return '';
  }
  let result = '';
  const aCode = 'a'.charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    const index = word.charCodeAt(i) - aCode;
    if (index < 0 || index >= cipher.length) {
      continue;
    }
    result += cipher.charAt(index);
  }
  return result;
};

(() => {
  console.log(
    solution('helloworld', 'zyxwvutsrqponmlkjihgfedcba'),
  );
})();
