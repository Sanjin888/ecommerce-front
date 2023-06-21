import {mongooseConnect} from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';
import {Order} from "@/models/Order";

const endpointSecret = "whsec_fbbfdbbbd3f4f9f4259a5025f24f4f735878209e23c202151379314fbd4bb4ef";

export default async function handler(req,res) {
  await mongooseConnect();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId,{
          paid:true,
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}

export const config = {
  api: {bodyParser:false,}
};