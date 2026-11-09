export function decision(amount: number, captured: boolean): string {
  if (amount !== 0 && captured) {
    return 'Label = Captured';
  } else if (amount !== 0 && !captured) {
    return 'Label = Not Captured';
  } else if (amount === 0) {
    return 'Label = Zero Amount';
  } else {
    return 'Label = Invalid Input';
  }
}

let amount_minor = 2500;
let captured = true;
console.log(decision(amount_minor, captured));
