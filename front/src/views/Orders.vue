<template>
  <section class="orders">
    <div class="container">
      <h2>Orders</h2>
      <div class="orders-row">
        <div v-for="(order, i) in $options.filters.reverse(orders)" :id="`order_${order.ID}`" class="order" :class="i === 0 ? 'active' : ''">
          <div class="title" @click="orderToggle">
            Order #{{ order.ID }}
            <span class="date">{{ order.date | dateFilter }}</span>
          </div>
          <div class="order-row">
            <div class="col col-half">
              <h3>Customer</h3>
              <div class="fields">
                <div class="field">
                  <span>Status</span>
                  <select name="status">
                    <option :selected="true">{{order.status}}</option>
                    <option v-for="status in $options.filters.statusFilter(order.status)">
                      {{ status }}
                    </option>
                  </select>
                </div>
                <div class="field">
                  <span>Name:</span>
                  <b>{{ order.first_name }} {{ order.last_name }}</b>
                </div>
                <div class="field">
                  <span>Email:</span>
                  <b><a :href="`mailto:${order.email}`">{{ order.email }}</a></b>
                </div>
                <div class="field">
                  <span>Phone:</span>
                  <b><a :href="`tel:${$options.filters.telTo(order.phone)}`">{{ order.phone }}</a></b>
                </div>
              </div>
            </div>
            <div class="col col-half">
              <h3 v-if="order.subscription">Subscription: {{ order.subscription }}</h3>
              <div class="shipping" v-if="order.shipping_name">
                <h3>Shipping address</h3>
                {{ order.shipping_name }} <br>
                {{ order.line1 }}, {{ order.line2 }} <br>
                {{ order.city }}, {{ order.state }}, {{ order.country }} <br>
                {{ order.zip }} <br><br>
                <ul class="fields">
                  <li class="field">
                    <span>Notes:</span>
                    <b>{{ order.notes }}</b>
                  </li>
                </ul>
              </div>
              <div v-if="card">
                <h3>Card info</h3>
                <div class="card">
                  <div class="card-number">{{ order.card_number }}</div>
                  <div class="card-date">{{ order.exp_month }}/{{ Number(order.exp_year) - 2000 }}</div>
                  <div class="card-code">{{ order.card_code }}</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="total">Total: <b>{{order.total}}</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Orders from '@/services/Orders.js'
export default {
  name: 'Orders',
  data(){
    return {
      card: false,
      orders: []
    }
  },
  components: {
  },
  // beforeCreate(){
  //   const pass = prompt("Please enter admin password");
  //   if (pass !== "qwerty123456") {
  //     this.$router.push('/');
  //   }
  // },
  mounted(){
    if( this.$route.query.token === 'qwerty123456'){
      this.card = true;
    }
    Orders.getOrders()
      .then(res => this.orders = res)
      .catch(err => console.error(err))
  },
  filters: {
    dateFilter(val){
      let newDate = new Date(val);
      return `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}  ${newDate.getDay()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    },
    toArr(obj){
      return JSON.parse(obj);
    },
    statusFilter(val){
      let arr = ["Pending payment", "Processing", "On hold", "Completed", "Cancelled", "Refunded", "Failed"];
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
          arr.splice(i, 1);
        }
      }
      return arr;
    },
    reverse(val) {
      return val.slice().reverse();
    },
    telTo(val){
      return val.replace(/[^\dA-Z]/g, '').replace(/[\s-)(]/g, '').split('').toString().replace(/[,]/g, '');;
    }
  },
  methods: {
    orderToggle(e){
      e.target.parentNode.classList.toggle('active');
    },
    updateOrder(e){

    },
    removeOrder(e){

    }
  }
}
</script>
<style lang="scss" scoped>
.orders{
  padding: 30px 0;
}
h2{
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
  @media(min-width:768px){
    font-size: 30px;
  }
}
.order{
  background: #fafafa;
  box-shadow: 4px 4px 16px rgba(0,0,0, .2);
  &:not(:first-child){
    margin-top: 10px;
    @media(min-width:768px){
      margin-top: 15px;
    }
  }
  &.active{
    .order-row{
      max-height: 5000px;
    }
  }
}
.title{
  background: #103e70;
  color: #fff;
  padding: 10px 15px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background .3s ease;
  @media(min-width:768px){
    font-size: 20px;
  }
  &:hover{
    background: #005dc1;
  }
}
.date{
  font-weight: 500;
}
.order-row{
  padding: 0 10px;
  max-height: 0px;
  transition: max-height 1s ease;
  overflow: hidden;
  @media(min-width:768px){
    display: flex;
    flex-wrap: wrap;
    padding: 0 30px;
  }
  *{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  .col{
    flex: 1 100%;
    max-width: 100%;
    &-half{
      padding-top: 30px;
      @media(min-width:768px){
        flex: 1 50%;
        max-width: 50%;
      }
    }
  }
}
h3{
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.shipping{
  margin-bottom: 30px;
}
.field{
  &:not(:first-child){
    margin-top: 15px;
  }
  span{
    display: block;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 2px;
  }
  b{
    font-size: 14px;
    font-weight: 700;
    color: gray;
    padding: 0 5px;
  }
  select{
    display: block;
    width: 100%;
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    background: none;
    max-width: 200px;
    padding: 5px;
    color: gray;
    outline: none;
  }
  textarea{
    width: 100%;
    resize: none;
    height: 90px;
    font-size: 16px;
    padding: 10px;
    background: none;
  }
}
.total{
  display: block;
  font-size: 18px;
  margin-top: 45px;
  padding: 5px 0 20px;
  border-top: 2px solid #000;
  text-align: right;
  position: relative;
  b{
    margin-left: 10px;
    font-size: 20px;
    &:before{
      content:"$";
    }
  }
}
.card{
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  background: black;
  color: #fff;
  border-radius: 8px;
  padding: 15px;
  position: relative;
  max-width: 260px;
  *{
    font-family: "Courier New", Courier, monospace;
    text-align: center;
  }
  &-number{
    flex: 1 100%;
    font-size: 20px;
    font-weight: 700;
    padding: 10px 0;
  }
  &-date{
    flex: 1 60%;
    font-size: 16px;
    font-weight: 700;
  }
  &-code{
    flex: 1 40%;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>