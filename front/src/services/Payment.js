import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8001';

export default {
  async Stripe(data) {
    let res = await axios.post(api+'/payment/stripe', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async Subscription(data) {
    let res = await axios.post(api+'/payment/subscription', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async StripeShipp(data) {
    let res = await axios.post(api+'/payment/stripeshipp', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}