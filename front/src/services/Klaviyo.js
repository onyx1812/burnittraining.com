import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8001';

export default {
  async identify(data) {
    let res = await axios.post(api+'/klaviyo/identify', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}