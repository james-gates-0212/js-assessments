const sortIntervals = ([aStart, aEnd], [bStart, bEnd]) =>
  aStart > bStart || (aStart === bStart && aEnd > bEnd)
    ? 1
    : -1;

const doIntersect = ([aStart, aEnd], [bStart, bEnd]) =>
  aStart <= bEnd && aEnd >= bStart;

const combineIntervals = (
  [aStart, aEnd],
  [bStart, bEnd],
) => [Math.min(aStart, bStart), Math.max(aEnd, bEnd)];

const solution = (intervals) =>
  intervals
    .sort(sortIntervals)
    .reduce(
      (merged, currentSeg) =>
        merged.some((seg) => doIntersect(seg, currentSeg))
          ? merged.map((seg) =>
              doIntersect(seg, currentSeg)
                ? combineIntervals(seg, currentSeg)
                : seg,
            )
          : [...merged, currentSeg],
      [],
    );

(() => {
  console.log(
    solution([
      [2, 4],
      [9, 13],
      [3, 5],
      [1, 3],
      [5, 7],
      [1, 2],
    ]),
  );
})();
