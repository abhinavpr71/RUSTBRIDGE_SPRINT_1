# P01.1 Trace Values and a Simple Decision

## Run Command

```bash
npm run practice -- students/RB15/week-01/typescript/labeler.ts
```

## Expected vs. Actual Case Table

| input                                                     | expected       | actual         |
| :-------------------------------------------------------- | :------------- | :------------- |
| `amount_minor = 2500, captured = true`                    | `captured`     | `captured`     |
| `amount_minor = 0, captured = true` (zero)                | `zero amount`  | `zero amount`  |
| `amount_minor = 2500, captured = false`                   | `not captured` | `not captured` |
| `amount_minor = 0, captured = false`                      | `zero amount`  | `zero amount`  |
| `amount_minor = "2500", captured = true` (numeric string) | `zero amount`  | `captured`     |

<br>

**Corrected prediction (`amount_minor = "2500", captured = true`):**
I predicted `zero amount`, and the corrected prediction is `captured`.

---

**Why the code behaves this way:**

- **For zero (`0`):** `if (amount_minor === 0)` checks if the value and data type match. Since `0` and `0` are both the same number, `0 === 0` is `true` and the function returns `"zero amount"`.

- **For the numeric string (`"2500"`):** In `if (amount_minor === 0)`, `"2500"` is a `string` and `0` is a `number`. Strict equality (`===`) checks both value and type, so `"2500" === 0` is `false`. The code skips the first branch, checks `else if (captured === true)` which is `true`, and returns `"captured"`.
