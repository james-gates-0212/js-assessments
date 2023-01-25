# Create function to convert given string to the output below

Input

```console
{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})
```

Output

```json
{
  "AND": [
    1069,
    {
      "OR": [1070, 1071, 1072]
    },
    1244,
    {
      "OR": [1245, 1339]
    }
  ]
}
```

## Execute

```bash
node solution.js
```
