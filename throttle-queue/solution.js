function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let i = 0;

function returnSlow() {
  return new Promise((resolve) => {
    const myI = i;
    i++;
    console.log('started ' + myI);
    setTimeout(() => {
      console.log('ended ' + myI);
      resolve(getRandomInt(10));
    }, getRandomInt(8) * 100 + 200);
  });
}

function throttle1(queue, acc) {
  if (queue.length) {
    const fn = queue.shift();
    return fn().then((result) => {
      // I have result and rest of queue
      const resultAcc = acc || [];
      resultAcc.push(result);

      if (!queue.length) return resultAcc;
      return throttle1(queue, resultAcc);
    });
  }
}

function throttleQ(queue, n, result) {
  let subQueue = [];

  while (queue.length && subQueue.length < n) {
    subQueue.push(queue.shift());
  }

  return Promise.all(subQueue.map((fn) => fn())).then(
    (subResult) => {
      const resultAcc = [...(result ?? []), ...subResult];
      return queue.length
        ? throttleQ(queue, n, resultAcc)
        : resultAcc;
    },
  );
}

(async () => {
  const fns = [...Array(25)].map((_, i) =>
    returnSlow.bind(null, i),
  );

  const promises = await throttleQ(fns, 6);

  const data = await Promise.all(promises);

  console.log({ data });
})();
