const solution = (
  maze,
  startRow,
  startCol,
  destRow,
  destCol,
) => {
  if (
    maze[startRow][startCol] == 1 ||
    maze[destRow][destCol] == 1
  ) {
    return false;
  }

  let slots = [{ row: startRow, col: startCol }];
  let tried = [];
  let path = false;

  const steps = [
    { row: -1, col: 0 },
    { row: +1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: +1 },
  ];

  while (slots.length > 0 && !path) {
    [...slots].forEach((slot) => {
      tried.push(slot);

      slots = slots.filter(
        (s) => !(s.row == slot.row && s.col == slot.col),
      );

      for (const step of steps) {
        if (
          slot.row + step.row == destRow &&
          slot.col + step.col == destCol
        ) {
          path = true;
          return;
        }
      }

      for (const step of steps) {
        const next = {
          row: slot.row + step.row,
          col: slot.col + step.col,
        };

        if (
          next.row < 0 ||
          next.row >= maze.length ||
          next.col < 0 ||
          next.col >= maze[0].length
        ) {
          continue;
        }

        if (
          tried.find(
            (t) => t.row == next.row && t.col == next.col,
          )
        ) {
          continue;
        }

        if (maze[next.row][next.col] == 1) {
          continue;
        }

        slots.push(next);
      }
    });
  }

  return path;
};

(() => {
  const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  console.log(solution(maze, 1, 1, 2, 5));
})();
