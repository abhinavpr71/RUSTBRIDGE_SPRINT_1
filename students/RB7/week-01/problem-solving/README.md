## Task ID : P01.1

**Problem:** Write a function which receives `amount_minor`(number) and `captured`(boolean) as arguments and returns a label.
Labeling Rules

- if `amount_minor` is `0`,`label` is `zero amount`.
- otherwise if `captured` is `true` ,return `captured`
- otherwise return `not captured`

**Practice Code:**

```
function returnLabel(amount_minor:number,capture:boolean)
{
    if(amount_minor===0)
        return "zero amount"
    else if(capture===true)
        return "captured"
    else
        return "not captured"
}
//case A
let amount_minor=2500 ,capture=true;
//case B
//let amount_minor=0 ,capture=true;
//case C
//let amount_minor=2500 ,capture=false;
//case D
//let amount_minor=0 ,capture=false;
//case E
//let amount_minor="2500" ,capture=true;
console.log(returnLabel(amount_minor,capture))
```

**Test Cases**

| Input                               | Expected       | Actual         |
| ----------------------------------- | -------------- | -------------- |
| `amount_minor=2500,captured=true`   | `captured`     | `captured`     |
| `amount_minor=0,captured=true`      | `zero amount`  | `zero amount`  |
| `amount_minor=2500,captured=false`  | `not captured` | `not captured` |
| `amount_minor=0,captured=false`     | `zero amount`  | `zero amount`  |
| `amount_minor="2500",captured=true` | `captured`     | `captured`     |

## Prediction

My prediction for the `case E` was partially correct.I predicted that there would be a type check error since `amount_minor` is a `number` and we tried to assign it with a string which will throw a type error while typechecking however the function returns "captured" label on execution since the captured flag is true and during the run using practice script it uses tsx which wont perform any type checks.
