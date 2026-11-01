 interface paymentEvent {
    provider_event_id: string,
    event_type: string,
    amount_minor: number,
    currency: string,
    occurred_at: string
 }
 
 
 
 let paymentEvent1 = {
    provider_event_id: "sandbox_1",
    event_type: "payment.captured",
    amount_minor: 15000,
    currency: "INR",
    occurred_at: "2026-01-01T10:00:00.000Z"
  }

  console.log(paymentEvent1.provider_event_id)
  console.log(paymentEvent1.event_type)
  console.log(paymentEvent1.amount_minor)


function summary(provider_event_id : string , event_type : string, amount_minor : number):string {
    return `Event : ${provider_event_id} | Type : ${event_type} | Amount : ${amount_minor}`
}


console.log(summary(paymentEvent1.provider_event_id , paymentEvent1.event_type , paymentEvent1.amount_minor))
