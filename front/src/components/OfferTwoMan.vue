<template>
  <div class="offer offer-two">
    <section class="s1">
      <div class="container">
        <h3>WARNING: Do not hit your “Back” Button</h3>
        <h4>Pressing your “back” button can cause you to accidentally double order!</h4>
        <Video :mp4="require(`@/assets/video/${this.$store.state.q6}.mp4`)" />
        <h5><b>Vince Sant</b> - Professional Fitness Model, Certified Personal <br> Trainer, Best Selling Author and the Creator of V Shred</h5>
      </div>
    </section>
    <section class="s2">
      <div class="container">
        <div class="col">
          <img src="@/assets/img/content-1.jpg" alt="">
        </div>
        <div class="col">
          <p><span>This FREE gift is 100% optional,</span> but the majority of our members consider their V Shred University membership their secret weapon because it’s packed with advanced tips that personal advice that we couldn’t possibly jam into a normal program</p>
        </div>
      </div>
    </section>
    <section class="red-line">
      <div class="container">
        <h2>This is how you get the body you want FAST!</h2>
      </div>
    </section>
    <section class="s3">
      <div class="container">
        <ul class="col">
          <li>
            <img src="@/assets/img/i-1.png">
            <span>You will be part of our private V Shred community where you get to directly ask Vince questions.</span> This is where we pack premium content you flat out won’t see anywhere else and it’s updated constantly.
          </li>
          <li>
            <img src="@/assets/img/i-2.png">
            <span>Each month we provide a brand new workout</span> that matches the fitness goals you selected for you to follow so you keep shocking your body. Never walk into the gym without a specific game plan again and never hit a plateau again. These workouts are designed for you to take to the gym with you and follow along right from your phone. (You won’t see these workouts anywhere else, only my premium guys get these).
          </li>
          <li>
            <img src="@/assets/img/i-3.png">
            <span>Each month we provide a new meal plan</span> template to follow based on the goals you selected. You won’t have to stress about what to eat, just print your new plan each month and blindly follow it. (You won’t see these diet plans anywhere else, only my premium guys get these).
          </li>
          <li>
            <img src="@/assets/img/i-4.png">
            <span>Interact with countless other people you are on the same mission as you.</span> Chat with beginners to advanced members who share pure gold advice to keep you from getting stuck in plateaus, answer any question when you are confused, and keep you highly motivated.
          </li>
        </ul>
        <div class="col">
          <img src="@/assets/img/s-1.jpg" alt="">
        </div>
      </div>
    </section>
    <section class="red-line">
      <div class="container">
        <h2>Our gift to you! 30 Day 100% FREE Trial of V Shred University</h2>
      </div>
    </section>
    <section class="s4">
      <div class="container">
        <div class="col">
          <img src="@/assets/img/s-2.jpg" alt="">
        </div>
        <ul class="col">
          <li>
            <img src="@/assets/img/i-5.png" alt="">
            <span>To thank you for purchasing our 90 day program</span> and because we are so confident you will be a absolutely mind blown by V Shred University, we are going to put our money where our mouth is…. We are going to give you a 30 day test run of our flagship program absolutely free.
          </li>
          <li>
            <img src="@/assets/img/i-6.png" alt="">
            All you have to do is check the box above to agree to the terms and <span>click the “Add to Order” button. That’s it. You’ll get instant access to V Shred University for 30 days!</span>
          </li>
          <li>
            <img src="@/assets/img/i-7.png" alt="">
            Give it a test run. If you are completely blown out of the water by the badassness contained in your <span>30 day test drive and you want to keep receiving access, it’s only $9.95 per month after that.</span>
          </li>
          <li>
            <img src="@/assets/img/i-8.png" alt="">
            If by some odd chance you aren’t 100% blown away, simply cancel anytime during your <span>free 30 trial and you won’t be billed a penny.</span>
          </li>
          <li>
            <img src="@/assets/img/i-9.png" alt="">
            <span>Click the “Add to Cart”</span> button below to gain instant access to your 100% FREE 30 Day trial of V Shred University!
          </li>
        </ul>
      </div>
    </section>
    <section class="s5">
      <div class="container">
        <div class="s5-wrap">
          <div class="price price-now">
            <span>$0</span> <b>$9.95</b>
          </div>
          <p>Terms and Conditions: 30 day 100% FREE trial of V Shred University. If you fall in love during the 30 days and want to keep the membership going, it will only cost you $9.95 per month. If you don’t cancel your membership, your first billing cycle will begin 30 days from today’s date. You can cancel your membership at anytime.</p>
          <div class="checkbox">
            <input type="checkbox" name="agree" id="agree" v-model="agree">
            <label for="agree">I agree to the payment terms of this recurring product.</label>
          </div>
          <div class="price price-normaly"><span>Normally $9.95 per month but</span></div>
          <button @click="submitOfferTwo" :class="agree ? 'btn btn-yes':'btn btn-yes btn-disable'">Yes! I want to start my FREE Month!</button>
          <img src="@/assets/img/cards-img.jpg" alt="">
          <button @click="goToOfferThree" :class="agree ? 'btn btn-no btn-disable':'btn btn-no'">(No thanks. I know this is my ONLY opportunity to get access to this free 1 month trial and I don’t care that I’m missing out. I understand that if I leave this page and decline this special offer, the V Shred University Members free trial likely won’t be available ever again. I want to pass on this forever).</button>
        </div>
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
  name: 'OfferTwoMan',
  components: {
    Video
  },
  data(){
    return {
      loader: false,
      agree: false
    }
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
  background: #ff304e none repeat scroll 0 0;
  border-top: 5px solid #e71c3a;
  padding: 30px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  h3{
    color:rgb(255, 255, 255);
    display:block;
    font-family:"Segoe UI Bold", sans-serif;
    font-size: 32px;
    font-weight:700;
    text-align: center;
    @media(min-width:768px){
      font-size: 42px;
    }
  }
  h4{
    color:rgb(255, 255, 255);
    font-family:"Segoe UI Light";
    font-size: 20px;
    font-weight:100;
    margin-bottom: 45px;
    text-align: center;
    @media(min-width:768px){
      font-size: 30px;
      margin-bottom: 65px;
    }
  }
  .video-wrap{
    max-width: 555px !important;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  h5{
    text-align: center;
    color: #fff;
    font-size: 16px;
    @media(min-width:768px){
      font-size: 20px;
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
  p{
    font-size: 14px;
    margin-bottom: 15px;
    margin: 0 0 10px;
    @media(min-width:768px){
      font-size: 18px;
      margin-bottom: 25px;
    }
    span{
      color: #ff304e;
      font-weight: 600;
    }
  }
}
.red-line{
  background: #ff304e;
  padding: 30px 0;
  @media(min-width:768px){
    padding: 40px 0;
  }
  h2{
    color: #fff;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    @media(min-width:768px){
      font-size: 40px;
    }
  }
}
ul{
  margin-top: 30px;
  margin-bottom: 30px;
  @media(min-width:768px){
    margin-bottom: 0;
  }
  li{
    position: relative;
    color:rgb(31, 31, 31);
    display:block;
    font-family:geomanistregular, sans-serif;
    font-size: 16px;
    font-weight:100;
    padding-left: 45px;
    @media(min-width:768px){
      font-size: 20px;
      padding-left: 65px;
    }
    &:not(:first-child){
      margin-top: 30px;
    }
    span{
      color: #ff304e;
      font-weight: 700;
    }
    img{
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 30px;
      @media(min-width:768px){
        width: 50px;
      }
    }
  }
}
.s3, .s4{
  padding: 50px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      flex-wrap: wrap;
      ul{
        flex: 1 60%;
        max-width: 60%;
      }
      div{
        flex: 1 40%;
        max-width: 40%;
      }
    }
  }
}
.s5{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  &-wrap{
    border: 1px solid #ff304e;
    border-top: none;
    padding-bottom: 30px;
    @media(min-width:768px){
      padding-bottom: 60px;
    }
  }
  .price{
    margin: 0 0 20px;
    letter-spacing: -1px;
    font-family: fjalla one,sans-serif;
    font-size: 26px;
    line-height: 1;
    @media(min-width:768px){
      font-size: 36px;
    }
    &-normaly{
      text-align: center;
      span{
        display: inline-block;
        position: relative;
        color: #ff304e;
        font-family:geomanistregular, sans-serif;
        font-size: 20px;
        font-weight:700;
        @media(min-width:768px){
          font-size:30px;
        }
        &:after{
          content:"";
          background: #ff304e;
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0; top: 50%;
        }
      }
    }
    &-now{
      top: -25px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      &:before{
        content: "";
        background: #ff304e;
        width: 100%;
        height: 100px;
        display: block;
        z-index: 1;
        position: absolute;
        left: 0; top: 50%;
        transform: translate(0, -50%);
      }
      span{
        background: #fff;
        border: 5px solid #ff304e;
        border-radius: 50%;
        display: block;
        font-family: "Segoe UI Bold",sans-serif !important;
        font-size: 40px;
        font-weight: 900;
        text-align: center;
        height: 100px;
        line-height: 90px;
        width: 100px;
        z-index: 2;
        position: relative;
        color: #000;
        @media(min-width:768px){
          font-size: 60px;
          height: 150px;
          line-height: 140px;
          width: 150px;
        }
        &:before{
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 4px solid #ff304e;
          border-radius: 50%;
          width: 75px;
          height: 75px;
          @media(min-width:768px){
            width: 120px;
            height: 120px;
          }
        }
      }
      b{
        color: #fff;
        float: left;
        font-size: 40px;
        margin-left: 1rem;
        margin-top: 1rem;
        position: relative;
        z-index: 2;
        @media(min-width:768px){
          font-size: 60px;
        }
        &:before{
          content: "";
          height: 8px;
          width: 100%;
          display: block;
          position: absolute;
          left: 0;
          top: 50%;
          background: #fff;
          transform: translate(0, 0);
          z-index: 3;
          opacity: .85;
        }
      }
    }
  }
  p{
    color: #1f1f1f;
    font-size: 13px;
    margin-top: 0;
    margin-bottom: 30px;
    text-align: center;
    padding: 0 30px;
    @media(min-width:768px){
      font-size: 16px;
    }
  }
  .checkbox{
    display: block;
    text-align: center;
    margin-bottom: 30px;
    @media(max-width:767px){
      padding: 0 15px;
    }
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
      font-size: 14px;
      position: relative;
      padding-left: 30px;
      user-select: none;
      transition: padding .5s ease;
      cursor: pointer;
      display: inline-block;
      color: #ff304e;
      @media(min-width:768px){
        font-size: 18px;
      }
      &:hover{
        padding-left: 35px;
      }
      &:before, &:after{
        content:"";
        position: absolute;
        left: 0; top: 50%;
        transform: translate(0, -50%);
      }
      &:before{
        border-radius: 4px;
        background: #fff;
        border: 2px solid #ff304e;
        width: 16px; height: 16px;
      }
      &:after{
        background: #ff304e;
        width: 8px; height: 8px;
        left: 6px;
        display: none;
      }
    }
  }
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .btn{
    display: inline-block;
    margin-top: 30px;
    user-select: none;
    display: block;
    width: calc(100% - 60px );
    &-yes{
      background: #5cb85c;
      font-size: 20px;
      font-weight: 700;
      padding: 12px 28px;
      border-radius: 5px;
      box-shadow: 0 0 10px grey;
      margin-bottom: 40px;
      transition: box-shadow 1s ease, transform .5s ease;
      @media(min-width:768px){
        font-size: 30px;
      }
      &:hover{
        box-shadow: 0 0 30px grey;
        transform: scale(1.05);
      }
    }
    &-no{
      background: none;
      color: #227edb;
      padding: 0;
      font-weight: 100;
      font-size: 14px;
      line-height: 1.4;
      opacity: .8;
      text-align: center;
      text-decoration: underline;
      @media(min-width:768px){
        font-size: 18px;
      }
      &:hover{
        text-decoration: none;
        color: #000;
      }
    }
    &-disable{
      pointer-events: none;
      opacity: .7;
    }
  }
}
</style>