const solution = (optionRule) => {
  const stack = [];
  let currentRule = optionRule;
  const groupPattern = /\([^\(\)]+\)/g;
  const delimiters = ['OR', 'AND'];

  const convert = (groupRule) => {
    for (const delimiter of delimiters) {
      const regDelimiter = new RegExp(
        `[ ]*${delimiter}[ ]*`,
      );
      if (!regDelimiter.test(groupRule)) {
        continue;
      }
      stack.push({
        [delimiter]: groupRule
          .split(regDelimiter)
          .map((rule) => {
            const option = Number(rule.replace(/\D/g, ''));

            return (
              (/^#\d+#$/.test(rule) && stack[option - 1]) ||
              option
            );
          }),
      });
      break;
    }
  };

  while (groupPattern.test(currentRule)) {
    currentRule = currentRule.replace(
      groupPattern,
      (match) => {
        convert(match.substring(1, match.length - 1));
        return `#${stack.length}#`;
      },
    );
  }

  convert(currentRule);

  return stack.pop();
};

(() => {
  console.log(
    JSON.stringify(
      solution(
        '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})',
      ),
      null,
      2,
    ),
  );
})();
