function f(str) {
  if (!str) {
    return str;
  }

  const codeA = 'A'.charCodeAt(0);

  const reAlphabets = /[A-Za-z]/g;

  const fnReplacer = (substr) => {
    const offset =
      substr.toUpperCase().charCodeAt(0) - codeA;
    return String.fromCharCode(
      substr.charCodeAt(0) + 25 - 2 * offset,
    );
  };

  return str.replace(reAlphabets, fnReplacer);
}

function solution(str) {
  console.log({
    input: str,
    output: f(str),
  });
}

(() => {
  solution('acp123!@#');

  solution(
    'Errors in strategy cannot be correct through tactical maneuvers',
  );
})();
