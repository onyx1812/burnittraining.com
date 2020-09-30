<template>
  <div class="offer offer-two">
    <section class="s1">
      <div class="container">
        <div class="col">
          <h5>WARNING:</h5>
          <h3>Do not hit your “Back” Button</h3>
          <h4>Pressing your “back” button can cause you to accidentally double order!</h4>
        </div>
        <div class="col">
          <Video :mp4="require(`@/assets/video/${this.$store.state.q6}.mp4`)" />
        </div>
      </div>
    </section>
    <section class="s2">
      <div class="container">
        <div class="col">
          <img src="@/assets/img/content-1.jpg" alt="">
        </div>
        <div class="col">
          <h4>This FREE gift is 100% optional,</h4>
          <p>but the majority of our members consider their V Shred University membership their secret weapon because it’s packed with advanced tips that personal advice that we couldn’t possibly jam into a normal program</p>
        </div>
      </div>
    </section>
    <section class="s3">
      <div class="container">
        <h3>This is how you get the body you want FAST!</h3>
        <p><b>You will be part of our private V Shred community where you get to directly ask Vince questions</b></p>
        <p>This is where we pack premium content you flat out won’t see anywhere else and it’s updated constantly.</p>
        <p><b>Each month we provide a brand new workout</b></p>
        <p>that matches the fitness goals you selected for you to follow so you keep shocking your body. Never walk into the gym without a specific game plan again and never hit a plateau again. These workouts are designed for you to take to the gym with you and follow along right from your phone. (You won’t see these workouts anywhere else, only my premium guys get these).</p>
        <p><b>Each month we provide a new meal plan</b></p>
        <p>template to follow based on the goals you selected. You won’t have to stress about what to eat, just print your new plan each month and blindly follow it. (You won’t see these diet plans anywhere else, only my premium guys get these).</p>
        <p><b>Interact with countless other people you are on the same mission as you.</b></p>
        <p>Chat with beginners to advanced members who share pure gold advice to keep you from getting stuck in plateaus, answer any question when you are confused, and keep you highly motivated</p>
      </div>
    </section>
    <section class="s4">
      <div class="container">
      <h3>Our gift to you! 30 Day 100% FREE Trial of V Shred University</h3>
      <ul>
        <li>
          To thank you for purchasing our 90 day program
          <span>and because we are so confident you will be a absolutely mind blown by V Shred University, we are going to put our money where our mouth is…. We are going to give you a 30 day test run of our flagship program absolutely free.</span>
        </li>
        <li>
          All you have to do is check the box above to agree to the terms
          <span>and click the “Add to Order” button. That’s it. You’ll get instant access to V Shred University for 30 days!</span>
        </li>
        <li>
          Give it a test run. If you are completely blown out of the water by the badassness contained in your
          <span>30 day test drive and you want to keep receiving access, it’s only $9.95 per month after that.</span>
        </li>
        <li>
          If by some odd chance you aren’t 100% blown away, simply cancel anytime during your
          <span>free 30 trial and you won’t be billed a penny.</span>
        </li>
        <li>
          Click the “Add to Cart” button below
          <span>to gain instant access to your 100% FREE 30 Day trial of V Shred University!</span>
        </li>
      </ul>
      </div>
    </section>
    <section class="s5">
      <div class="container">
        <div class="price price-normaly"><span>Normally $9.95 per month but</span></div>
        <div class="price price-now">
          Now it’s <span>0</span>
        </div>
        <p>Terms and Conditions: 30 day 100% FREE trial of V Shred University. If you fall in love during the 30 days and want to keep the membership going, it will only cost you $9.95 per month. If you don’t cancel your membership, your first billing cycle will begin 30 days from today’s date. You can cancel your membership at anytime.</p>
        <div class="checkbox">
          <input type="checkbox" name="agree" id="agree" v-model="agree">
          <label for="agree">I agree to the payment terms of this recurring product.</label>
        </div>
        <button @click="submitOfferTwo" :class="agree ? 'btn btn-yes':'btn btn-yes btn-disable'">Yes! I want to start my FREE Month!</button>
        <button @click="goToOfferThree" :class="agree ? 'btn btn-no btn-disable':'btn btn-no'">(No thanks. I know this is my ONLY opportunity to get access to this free 1 month trial and I don’t care that I’m missing out. I understand that if I leave this page and decline this special offer, the V Shred University Members free trial likely won’t be available ever again. I want to pass on this forever).</button>
      </div>
    </section>
    <div v-if="loader" class="loader"></div>
  </div>
</template>
<script>
import Video from '@/components/Video.vue'
import Payment from '@/services/Payment.js'
import Orders from '@/services/Orders.js'
export default {
  name: 'OfferTwoWoman',
  components: {
    Video
  },
  data(){
    return {
      loader: false,
      agree: false
    }
  },
  beforeCreate(){
    this.$router.push('/offer-three');
  },
  methods: {
    submitOfferTwo(e){
      e.preventDefault();

      this.loader = true;

      const
        exp_year = 2000 + Number(this.$store.state.card_date.slice(-2)),
        exp_month = Number(this.$store.state.card_date.substr(0, 2));

      const data = {
        first_name: this.$store.state.first_name,
        last_name: this.$store.state.last_name,
        email: this.$store.state.email,
        phone: this.$store.state.phone,
        card_number: this.$store.state.card_number,
        exp_month: exp_month,
        exp_year: exp_year,
        card_code: this.$store.state.card_code
      }
      Payment.Subscription(data)
        .then(res => {
          this.loader = false;
          if(res.status === 'active'){
            Orders.updateSubscription({
              order_id: this.$store.state.order_id,
              subscription: 'active'
            });
            alert('Votre souscription est bien active');
            this.$router.push('/offer-three');
          } else {
            Orders.updateSubscription({
              order_id: this.$store.state.order_id,
              subscription: 'error'
            });
            alert(res.raw.message);
          }
        })
        .catch(err => {
          console.error(err);
          alert(err);
        });
    },
    goToOfferThree(e){
      e.preventDefault();
      this.$router.push('/offer-three');
    }
  }
}
</script>
<style scoped lang="scss">
.s1{
  background: url('../assets/img/banner.jpg') fixed no-repeat center center/cover;
  padding: 30px 0;
  @media(min-width:768px){
    height: calc(100vh - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  h3{
    font-weight: bold;
    color: rgb(232, 232, 232);
    font-size: 35px;
    margin: 0px;
    @media(min-width:768px){
      font-size: 55px;
    }
  }
  h4{
    font-size: 24px;
    color: #e8e8e8;
    margin: 20px 0 25px;
    font-weight: 500;
  }
  h5{
    font-size: 24px;
    font-weight: 500;
    color: #ff00f0;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      flex-wrap: wrap;
    }
    .col{
      @media(min-width:768px){
        flex: 1 50%;
        max-width: 50%;
      }
    }
  }
}
.s2{
  padding: 30px 0;
  background: #fff;
  .container{
    @media(min-width:768px){
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    & > div{
      @media(min-width:768px){
        &:first-child{
          flex: 1 40%;
          max-width: 40%;
        }
        &:last-child{
          flex: 1 60%;
          max-width: 60%;
        }
      }
    }
  }
  img{
    width: 400px;
    max-width: 100%;
  }
  h4{
    margin-top: 20px;
    margin-bottom: 10px;
    color: #ff00f0;
    font-size: 24px;
  }
  p{
    font-size: 18px;
    margin-bottom: 25px;
    margin: 0 0 10px;
  }
}
.s3{
  background: url('../assets/img/content-2-bg.webp') fixed no-repeat center center/cover;
  padding: 50px 0 40px;
  color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width:768px){
    padding: 100px 0 80px;
  }
  .container{
    @media(min-width:768px){
      padding-right: 25%;
    }
  }
  h3{
    color: #ff00f0;
    font-family: "Fjalla One", sans-serif;
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 10px;
    @media(min-width:768px){
      font-size: 36px;
    }
  }
  p{
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 10px;
    @media(min-width:768px){
      font-size: 16px;
      margin-top: 35px;
      margin-bottom: 20px;
    }
    b{
      font-size: 16px;
      @media(min-width:768px){
        font-size: 18px;
      }
    }
  }
}
.s4{
  background: url('../assets/img/content-3-bg.webp') fixed no-repeat left center/cover;
  padding: 60px 0 40px;
  color: #e8e8e8;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width:768px){
    padding: 120px 0 80px;
  }
  .container{
    @media(min-width:768px){
      padding-left: 30%;
    }
  }
  h3{
    color: #ff00f0;
    font-family: "Fjalla One", sans-serif;
    font-size: 20px;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 30px;
      margin-bottom: 30px;
    }
  }
  ul{
    li{
      font-size: 15px;
      padding-left: 25px;
      margin-top: 30px;
      font-weight: 600;
      position: relative;
      @media(min-width:768px){
        font-size: 18px;
        padding-left: 25px;
        margin-top: 50px;
      }
      &:before{
        content: "";
        width: 15px;
        height: 15px;
        background: #ff00f0;
        border-radius: 50%;
        position: absolute;
        left: 0; top: 3px;
      }
      span{
        font-weight: 400;
        font-size: 16px;
        margin-top: 10px;
        display: block;
        margin-left: -25px;
      }
    }
  }
}
.s5{
  background: url('../assets/img/purchase.png') no-repeat right bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  .container{
    @media(min-width:768px){
      padding-right: 25%;
    }
  }
  .price{
    margin: 0 0 20px;
    letter-spacing: -1px;
    font-family: fjalla one,sans-serif;
    font-size: 36px;
    line-height: 1;
    &-normaly{
      span{
        display: inline-block;
        position: relative;
        &:after{
          content:"";
          background: #ff00f0;
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0; top: 50%;
        }
      }
    }
    &-now{
      margin-top: -10px;
      span{
        color: #ff00f0;
        &:before{
          content:"$";
        }
      }
    }
  }
  p{
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 16px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  .checkbox{
    input{
      display: none;
      &:checked + label{
        &:after{
          display: block;
        }
      }
    }
    label{
      font-weight: 700;
      font-size: 16px;
      position: relative;
      padding-left: 30px;
      user-select: none;
      transition: padding .5s ease;
      cursor: pointer;
      display: block;
      @media(min-width:768px){
        font-size: 18px;
      }
      &:hover{
        padding-left: 35px;
      }
      &:before, &:after{
        content:"";
        border-radius: 50%;
        position: absolute;
        left: 0; top: 50%;
        transform: translate(0, -50%);
      }
      &:before{
        background: #ff00f0;
        width: 16px; height: 16px;
      }
      &:after{
        background: #fff;
        width: 8px; height: 8px;
        left: 4px;
        display: none;
      }
    }
  }
  .btn{
    display: inline-block;
    margin-top: 30px;
    user-select: none;
    &-yes{
      background: #ff00f0;
      font-size: 30px;
      font-weight: 700;
      padding: 12px 28px;
      border-radius: 5px;
      box-shadow: 0 0 10px grey;
      margin-bottom: 40px;
      transition: box-shadow 1s ease, transform .5s ease;
      &:hover{
        box-shadow: 0 0 30px grey;
        transform: scale(1.05);
      }
    }
    &-no{
      background: none;
      color: #428bca;
      text-align: left;
      padding: 0;
      font-weight: 100;
      font-size: 15px;
      line-height: 1.4;
      opacity: .8;
      &:hover{
        text-decoration: underline;
      }
    }
    &-disable{
      pointer-events: none;
      opacity: .4;
    }
  }
}
</style>