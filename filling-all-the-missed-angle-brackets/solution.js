const solution = (angles) => {
  let missedAngles = angles;
  while (/<>/.test(missedAngles)) {
    missedAngles = missedAngles.replace(/<>/g, '');
  }
  const missedOpens = missedAngles.replace(/</g, '').length;
  const missedCloses = missedAngles.replace(
    />/g,
    '',
  ).length;
  return `${'<'.repeat(missedOpens)}${angles}${'>'.repeat(
    missedCloses,
  )}`;
};

(() => {
  console.log(solution('><<><'));
})();
