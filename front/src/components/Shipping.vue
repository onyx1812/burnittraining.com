<template>
  <section class="shipping">
    <div class="shipping-wrap">
      <h2>Tell Us Where To Ship Your Supplements! : votre commande a bien été enregistrée! Indiquez nous votre lieu de livraison.</h2>
      <form @submit="submitPaymentShipping">
        <ul class="fields">
          <li class="field">
            <label for="name">Name <span>*</span></label>
            <input type="text" name="name" v-model="name" id="name" required>
          </li>
          <li class="field">
            <label for="line1">Address Line 1 <span>*</span></label>
            <input type="text" name="line1" v-model="line1" id="line1" required>
          </li>
          <li class="field">
            <label for="line2">Address Line 2 <span>*</span></label>
            <input type="text" name="line2" v-model="line2" id="line2" required>
          </li>
          <li class="field">
            <label for="city">City <span>*</span></label>
            <input type="text" name="city" v-model="city" id="city" required>
          </li>
          <li class="field">
            <label for="state">State / Province / Region <span>*</span></label>
            <input type="text" name="state" v-model="state" id="state" required>
          </li>
          <li class="field">
            <label for="postal_code">Zip or Postal Code <span>*</span></label>
            <input type="text" name="postal_code" v-model="postal_code" id="postal_code" required>
          </li>
          <li class="field">
            <label for="country">Country <span>*</span></label>
            <input type="text" name="country" v-model="country" id="country" required>
          </li>
          <li class="field">
            <label for="phone">Phone Number (optional)</label>
            <input type="text" name="phone" v-model="phone" id="phone">
          </li>
          <li class="field field-submit">
            <input type="submit" value="Save address">
          </li>
        </ul>
      </form>
    </div>
    <div v-if="loader" class="loader"></div>
  </section>
</template>
<script>
import Payment from '@/services/Payment.js'
import Orders from '@/services/Orders.js'
export default {
  name: 'Shipping',
  data(){
    return {
      loader: false,
      name: null,
      line1: null,
      line2: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
      phone: null
    }
  },
  methods: {
    submitPaymentShipping(e){
      e.preventDefault();
      this.loader = true;

      if( this.$parent.product_type !== null ){

        const
          exp_year = 2000 + Number(this.$store.state.card_date.slice(-2)),
          exp_month = Number(this.$store.state.card_date.substr(0, 2));

        this.$store.state.amount = Number(this.$store.state.amount) + Number(this.$parent.amount);

        Orders.updateShipping({
          order_id: this.$store.state.order_id,
          shipping_name: this.name,
          city: this.city,
          country: this.country,
          line1: this.line1,
          line2: this.line2,
          zip: this.postal_code,
          state: this.state,
          notes: this.$parent.product_type
        });

        const data = {
          first_name: this.$store.state.first_name,
          last_name: this.$store.state.last_name,
          email: this.$store.state.email,
          phone: this.$store.state.phone,
          card_number: this.$store.state.card_number,
          exp_month: exp_month,
          exp_year: exp_year,
          card_code: this.$store.state.card_code,
          amount: this.$parent.amount,
          currency: 'USD',
          order_id: this.$store.state.order_id, // нужно создать ордер "Pending payment" и вытаскивать из него id
          name: this.name,
          city: this.city,
          country: this.country,
          line1: this.line1,
          line2: this.line2,
          postal_code: this.postal_code,
          state: this.state,
        }
        Payment.StripeShipp(data)
          .then(res => {
            this.loader = false;
            if(res.status === 'succeeded'){
              Orders.updateTotal({
                "order_id": this.$store.state.order_id,
                "total": this.$store.state.amount,
                "status": 'Processing'
              });
              alert('Payment succeeded!');
              this.$router.push('/thank-you');
            } else {
              alert(res.raw.message);
            }
          })
          .catch(err => {
            this.loader = false;
            console.error(err);
            alert(err);
          });
      } else {
        this.loader = true;
        this.$parent.shipping = false;
        alert('Please сhoose a taste!');
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.shipping{
  position: fixed;
  left: 0; top: 0;
  width: 100%; height: 100vh;
  z-index: 999;
  background: rgba(0,0,0, .5);
  text-align: left;
  color: #000;
  padding: 50px 15px;
  overflow-y: auto;
  &-wrap{
    background: #fff;
    border-radius: 4px;
    margin: 0 auto;
    @media(min-width:768px){
      width: 800px;
    }
  }
}
h2{
  font-size: 18px;
  font-weight:600;
  border-bottom: 1px solid #e9ecef;
  padding: 15px 15px;
  @media(min-width:768px){
    font-size: 22px;
  }
}
.fields{
  padding: 10px 15px 30px;
}
.field{
  &:not(:first-child){
    margin-top: 10px;
    @media(min-width:768px){
      margin-top: 20px;
    }
  }
  &-submit{
    text-align: right;
    border-top: 1px solid #e9ecef;
    padding-top: 15px;
  }
}
label{
  display: block;
  color: #212529;
  font-size: 12px;
  margin-bottom: 5px;
  @media(min-width:768px){
    font-size: 16px;
  }
  span{
    color: red;
  }
}
input{
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  height: 38px;
  border-radius: 4px;
  width: 100%;
  &[type="submit"]{
    width: 150px;
    display: inline-block;
    background: #0069d9;
    color: #fff;
    border-radius: 0;
    border: none;
    font-size: 16px;
  }
}
</style>
