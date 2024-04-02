function BracketMatcher(str) {
  if (!str) return 1;

  let opens = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') opens++;
    if (str[i] === ')') opens--;
    if (opens < 0) return 1;
  }

  return opens ? 0 : 1;
}

(() => {
  ['(hello (world))', '((hello (world))', undefined, null].forEach((str) => {
    console.log(str, '==', BracketMatcher(str));
  });
})();
