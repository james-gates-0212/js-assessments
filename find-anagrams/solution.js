const sortWord = (word) => {
  return word.split('').sort().join('');
};

const findAnagrams = (words) => {
  let result = [];
  while (words.length) {
    const baseWord = words.shift();
    const group = [baseWord];
    const removeIndices = [];
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length !== baseWord.length) {
        continue;
      }
      if (sortWord(baseWord) === sortWord(word)) {
        group.push(word);
        removeIndices.push(i);
      }
    }
    while (removeIndices.length) {
      words.splice(removeIndices.pop(), 1);
    }
    result.push(group);
  }
  return result;
};

(() => {
  const words = [
    'eat',
    'ate',
    'tea',
    'monk',
    'konm',
    'nkom',
    'bbc',
    'cbb',
    'dell',
    'ledl',
    'llde',
  ];
  console.log(findAnagrams(words));
})();
