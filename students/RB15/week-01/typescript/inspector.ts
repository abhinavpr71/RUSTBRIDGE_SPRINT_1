type PaymentEvent = {
  provider_event_id: string;
  event_type: string;
  amount_minor: number;
  currency: string;
  occurred_at: string;
};

const paymentEvent: PaymentEvent = {
  provider_event_id: 'sandbox_1',
  event_type: 'payment.captured',
  amount_minor: 15000,
  currency: 'INR',
  occurred_at: '2026-01-01T10:00:00.000Z',
};

function eventSummary(): string {
  return `${paymentEvent.provider_event_id} ${paymentEvent.event_type} ${paymentEvent.amount_minor}`;
}

console.log(paymentEvent.provider_event_id);
console.log(paymentEvent.event_type);
console.log(paymentEvent.amount_minor);

console.log(eventSummary());
