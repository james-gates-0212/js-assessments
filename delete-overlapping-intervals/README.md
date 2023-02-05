# Delete Overlapping Intervals

You are given a two-dimensional array `intervals`, as an argument.
Each element of `intervals` represent an arbitrary interval, such as `[start, end]`.
There are overlapping intervals in `intervals` and you need to combine the intervals so that they do not overlap.

More specifically, the overlapping intervals are like below:

```javascript
intervals = [
  [1, 3],
  [2, 4],
  [5, 7],
];
```

In this example, `[1, 3]` which is `intervals[0]` and `[2, 4]` which is `intervals[1]` are overlapping intervals.
By combining `intervals[0]` and `intervals[1]`, you can get `[1, 4]`.

So output will be like below:

```console
[ [1, 4], [5, 7] ]
```
