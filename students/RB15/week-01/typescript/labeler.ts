function labelPayment(
  amount_minor: number | string,
  captured: boolean,
): string {
  if (amount_minor === 0) {
    return 'zero amount';
  } else if (captured === true) {
    return 'captured';
  } else {
    return 'not captured';
  }
}

console.log(labelPayment(2500, true));
console.log(labelPayment(0, true));
console.log(labelPayment(2500, false));
console.log(labelPayment(0, false));
console.log(labelPayment('2500', true));
