# Problem-Solving(P01.1)


## Table expected vs actual

| Input | Expected | Actual |
| --- | --- | --- |          
|Case A :  amount_minor = 2500, captured = true           | captured    | captured    |
|Case B :  amount_minor = 0, captured = true              | zero amount | zero amount |
|Case C :  amount_minor = 2500, captured = false          | not captured| not captured |
|Case D :  amount_minor =  0, captured = false            | zero amount | zero amount |
|Case E : amount_minor = '2500', captured = true          | not captured| captured    |


### wrong prediction = Case E : amount_minor = '2500', captured = false  (predicted "not captured")
### corrected prediction = "captured"

### why the code behave that way :
             Because the code checks if captured === true first, before it even looks at the amount.