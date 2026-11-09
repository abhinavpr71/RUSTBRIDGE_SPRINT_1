## [function file](decision.ts)

## Tested cases

Case A: amount_minor = 2500, captured = true;
output:

```
Label = Captured
```

Case B: amount_minor = 0, captured = true;
output:

```
Label = Zero Amount
```

Case C: amount_minor = "2500", captured = true;
output:

```
students/RB6/week-01/problem-solving/decision.ts:15:22 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

15 console.log(decision(amount_minor, captured));
                        ~~~~~~~~~~~~


Found 1 error in students/RB6/week-01/problem-solving/decision.ts:15
```

practice run block

```

 npm run practice -- .\students\RB6\week-01\problem-solving\decision.ts
npm notice run backend-engineering-sprint-1@1.0.0 practice
npm notice run tsx .\students\RB6\week-01\problem-solving\decision.ts
Label = Captured

```
