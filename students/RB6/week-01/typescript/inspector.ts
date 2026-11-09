export interface Event {
  readonly eventId: string;
  readonly eventType: string;
  readonly amount: number;
  readonly currency: string;
  readonly timestamp: string;
}

const e1: Event = {
  eventId: 'sandbox_1',
  eventType: 'payment.captured',
  amount: 15000,
  currency: 'INR',
  timestamp: '2026-01-01T10:00:00.000Z',
};

export function logPaymentEvent(event: Event): void {
  console.log(`Event ID: ${event.eventId}`);
  console.log(`Event Type: ${event.eventType}`);
  console.log(`Amount: ${event.amount}`);
}

export function getPaymentEventSummary(event: Event): string {
  return `Event Summary: ${event.eventType} of amount ${event.amount} ${event.currency} at ${event.timestamp} by event ID ${event.eventId}`;
}

logPaymentEvent(e1);
console.log(getPaymentEventSummary(e1));
