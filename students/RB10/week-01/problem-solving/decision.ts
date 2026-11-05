// Case A: amount_minor = 2500, captured = true
// Case B: amount_minor = 0, captured = true
// Case C: amount_minor = 2500, captured = false
// Case D: amount_minor = 0, captured = false
// Case E: amount_minor = "2500", captured = true

function getPaymentLabel(
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

console.log(getPaymentLabel(2500, true));
console.log(getPaymentLabel(0, true));
console.log(getPaymentLabel(2500, false));
console.log(getPaymentLabel(0, false));
console.log(getPaymentLabel('2500', true));
