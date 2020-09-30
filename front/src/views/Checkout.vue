<template>
  <section class="checkout-section">
    <header>
      <div class="container">
        <img src="@/assets/img/logo.png" alt="" class="logo">
        <h1>{{txt[lg].item[this.$store.state.q6]}}</h1>
        <span>{{ txt[lg].btn }}</span>
      </div>
    </header>
    <div class="checkout-content">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFor />
      <footer>
        <p>{{ txt[lg].foo }}</p>
        <img src="@/assets/img/card.png" >
      </footer>
    </div>
    <Safety />
  </section>
</template>
<script>
import StepOne from '@/components/StepOne.vue'
import StepTwo from '@/components/StepTwo.vue'
import StepThree from '@/components/StepThree.vue'
import StepFor from '@/components/StepFor.vue'
import Safety from '@/components/Safety.vue'
export default {
  name: 'Checkout',
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFor,
    Safety
  },
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          btn: 'ET BONUS GRATUITS',
          foo: 'Bon de commande sécurisé - 100% protégé et sûr',
          item: {
            q6_1: "Lot de 57$ tonique en 90 jours",
            q6_2: 'Fat Loss Extreme for Her $57 Bundle',
            q6_3: 'Lot de 57$ tonique en 90 jours',
            q6_4: 'Pack de 87$ en vrac propre',
            q6_5: 'Pack de 57$ déchiré en 90 jours',
            q6_6: 'Pack de 67$ déchiré en 90 jours',
            q6_7: 'Fat Loss Extreme for Him 57 $ Bundle'
          }
        }
      }
    }
  },
  beforeCreate(){
    if(this.$store.state.gender === null) this.$router.push('/');
  },
  created(){
    const app = document.getElementById('app');
    app.scrollIntoView();
  }
}
</script>
<style lang="scss" scoped>
header{
  background: url('../assets/img/header-bg.jpg') no-repeat center center / cover;
  padding: 25px 0;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  span{
    display: block;
    color: #419bf9;
    font-weight: 400;
    font-size: 26px;
  }
}
.logo{
  width: 110px;
}
.checkout{
  &-section{
    width: 100%;
  }
  &-content{
    width: 100%;
    margin: 30px auto;
    box-shadow: 0 19px 32px 8px rgba(0,0,0,.1);
    border-radius: 10px;
    @media(min-width:768px){
      width: 812px;
      margin: 90px auto;
    }
  }
}

center{
  padding: 15px 0;
}
footer{
  text-align: center;
  padding-bottom: 30px;
  p{
    margin-bottom: 10px;
  }
}
</style>