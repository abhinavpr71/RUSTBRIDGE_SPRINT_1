function returnLabel(amount_minor: number, capture: boolean) {
  if (amount_minor === 0) return 'zero amount';
  else if (capture === true) return 'captured';
  else return 'not captured';
}
//case A
let amount_minor = 2500,
  capture = true;
//case B
//let amount_minor=0 ,capture=true;
//case C
//let amount_minor=2500 ,capture=false;
//case D
//let amount_minor=0 ,capture=false;
//case E
//let amount_minor="2500" ,capture=true;
console.log(returnLabel(amount_minor, capture));
