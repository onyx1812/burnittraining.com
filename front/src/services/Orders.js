import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8001';

export default {
  async getOrders(data) {
    let res = await axios.get(api+'/orders', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  },
  async create(data) {
    let res = await axios.post(api+'/orders/create', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async updateShipping(data) {
    let res = await axios.post(api+'/orders/update-shipping', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async updatePayment(data) {
    let res = await axios.post(api+'/orders/update-payment', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async updateTotal(data) {
    let res = await axios.post(api+'/orders/update-total', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async updateStatus(data) {
    let res = await axios.post(api+'/orders/update-status', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async updateSubscription(data) {
    let res = await axios.post(api+'/orders/update-subscription', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}