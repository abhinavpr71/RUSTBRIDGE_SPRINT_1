diff --git a/students/RB6/week-01/typescript/NOTES.md b/students/RB6/week-01/typescript/NOTES.md

deleted file mode 100644

index e3b229e..0000000

--- a/students/RB6/week-01/typescript/NOTES.md

+++ /dev/null

@@ -1,15 +0,0 @@

```# T01.1:

### Command :

> npm run practice -- students/RB6/week-01/typescript/inspector.ts

### Output :

->npm notice run backend-engineering-sprint-1@1.0.0 practice
->npm notice run tsx students/RB6/week-01/typescript/inspector.ts
->Event ID: sandbox_1
->Event Type: payment.captured
->Amount: 15000
->Event Summary: payment.captured of amount 15000 INR at 2026-01-01T10:00:00.000Z by event ID sandbox_1
```

\ No newline at end of file

diff --git a/students/RB6/week-01/typescript/inspector.ts b/students/RB6/week-01/typescript/inspector.ts

deleted file mode 100644

index ec44144..0000000

--- a/students/RB6/week-01/typescript/inspector.ts

+++ /dev/null

@@ -1,28 +0,0 @@

```
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
```
