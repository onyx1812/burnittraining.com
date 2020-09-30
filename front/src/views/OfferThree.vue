<template>
  <div class="offer offer-three">
    <div class="container">
      <img src="@/assets/img/coupon-scissors.png" alt="" class="scissors">
      <div class="specials">
        <h3>{{ txt[lg].h3 }}</h3>
        <h2>{{ txt[lg].h2 }}</h2>
        <div class="row">
          <div class="col">
            <h4>{{ txt[lg].h4 }}</h4>
            <ul>
              <li>{{ txt[lg].l1 }}</li>
              <li>{{ txt[lg].l2 }}</li>
              <li>{{ txt[lg].l3 }}</li>
              <li>{{ txt[lg].l4 }}</li>
            </ul>
            <h5>{{ txt[lg].h5 }}</h5>
            <div class="pricing">
              <div class="today">{{ txt[lg].today }}</div>
              <div class="original">{{ txt[lg].original }}</div>
            </div>
          </div>
          <div class="col">
            <img src="@/assets/img/prod_greens_all.png" alt="">
          </div>
        </div>
      </div>
      <h5>{{ txt[lg].want }}</h5>
      <div class="product">
        <div class="greens">GREENS</div>
        <img src="@/assets/img/guarantee-seal.webp" alt="" class="seal">
        <img src="@/assets/img/prod_greens_all.png" alt="" class="product-image">
        <select v-model="product_type" name="product_type" id="product_type">
          <option v-for="option in txt[lg].options" :value="option">{{ option }}</option>
        </select>
        <div class="price">
          <span class="amount">{{ amount }}</span>
          <span>
            <span class="per" v-html="txt[lg].per"></span>
            <span class="save" v-html="txt[lg].save"></span>
          </span>
        </div>
        <div class="normaly" v-html="txt[lg].per"></div>
        <button class="btn btn-add" @click="openShipping" v-html="txt[lg].btn_add"></button>
      </div>
      <button class="btn btn-no" @click="goToOfferThanks" v-html="txt[lg].no_thanks"></button>
      <img src="@/assets/img/guarantee.jpg" alt="" class="guarantee">
      <h5 v-html="txt[lg].f_h5_1"></h5>
      <h6 v-html="txt[lg].f_h6"></h6>
      <p v-html="txt[lg].f_p_1"></p>
      <p v-html="txt[lg].f_p_2"></p>
      <p v-html="txt[lg].f_p_3"></p>
      <p v-html="txt[lg].f_p_4"></p>
      <h5 v-html="txt[lg].f_h5_2"></h5>
      <div class="product">
        <div class="greens">GREENS</div>
        <img src="@/assets/img/guarantee-seal.webp" alt="" class="seal">
        <img src="@/assets/img/prod_greens_all.png" alt="" class="product-image">
        <select v-model="product_type" name="product_type" id="product_type">
          <option v-for="option in txt[lg].options" :value="option">{{ option }}</option>
        </select>
        <div class="price">
          <span class="amount">{{ amount }}</span>
          <span>
            <span class="per" v-html="txt[lg].per"></span>
            <span class="save" v-html="txt[lg].save"></span>
          </span>
        </div>
        <div class="normaly" v-html="txt[lg].per"></div>
        <button class="btn btn-add" @click="openShipping" v-html="txt[lg].btn_add"></button>
      </div>
    </div>
    <Shipping v-if="shipping" />
  </div>
</template>
<script>
import Shipping from '@/components/Shipping.vue'
export default {
  name: 'OfferThree',
  components: {
    Shipping
  },
  data(){
    return {
      amount: '39.00',
      product_type: null,
      shipping: false,
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h3: `Améliorez rapidement vos défenses immunitaires`,
          h2: `Offre spéciale aujourd'hui seulement`,
          h4: `Nos compléments Greens vous aide à:`,
          l1: `Améliorer votre système immunitaire`,
          l2: `Construire un véritable bouclier antioxydant`,
          l3: `Construire un véritable bouclier antioxydant`,
          l4: `Mieux gérer votre stress`,
          h5: `Construisez une santé physique impeccable de l'intérieur vers l'extérieur`,
          today: `Prix (offre spéciale durée limitée) 39,99`,
          original: `au lieu de 67,99`,
          want: `Oui je veux améliorer mes défenses immunitaires`,
          per: `/par bouteille`,
          save: `économisez 40%!`,
          normaly: `Au lieu de <span>$67.99</span>`,
          btn_add: `Ajoutez à votre panier`,
          options: [`Régulier`, `Pêche`, `fraise`],
          no_thanks: `No thanks, I’d rather take my chances with sub-optimal fat burning and immune defense support`,
          f_h5_1: `Testez nos compléments greens 100% sans risque`,
          f_h6: `Nous sommes convaincus que nos compléments greens vous aideront à optimiser votre système immunitaire c’est pourquoi nous vous offrons une garantie de remboursement à vie.`,
          f_p_1: `Si vous n'êtes pas convaincus par ses effets rapides et par le bien être que nos compléments greens vous apporterons n'hésitez pas à nous envoyer un email et nous vous rembourserons sans vous demander de justifications`,
          f_p_2: `NSi vous commandez maintenant nous vous offrons également les frais de port`,
          f_p_3: `Sans risque, garantie de remboursement à vie et frais de port offert`,
          f_p_4: `<b>Passez commande dès maintenant pour bénéficier de notre offre spéciale.</b`,
          f_h5_2: `Oui je veux améliorer mes défenses immunitaires.`,
        }
      }
    }
  },
  beforeCreate(){
    if(this.$store.state.gender === null) this.$router.push('/');
  },
  methods: {
    openShipping(e){
      e.preventDefault();
      this.shipping = true;
    },
    goToOfferThanks(e){
      e.preventDefault();
      this.$router.push('/thank-you');
    }
  },
  created(){
    const app = document.getElementById('app');
    app.scrollIntoView();
  }
}
</script>
<style lang="scss" scoped>
.offer{
  text-align: center;
  background: #f8f9fa;
  padding-bottom: 30px;
}
.scissors{
  display: block;
}
.specials{
  background: #d4f0f9;
  padding: 20px;
  text-align: center;
  border: 5px dashed #357d98;
  h3{
    font-size: 18px;
    letter-spacing: -1px;
    line-height: 1.1;
    color: #143b68;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    @media(min-width:768px){
      font-size: 30px;
    }
  }
  h2{
    color: #cc0000;
    font-size: 40px;
    font-weight: 700;
    font-family: 'Oswald', sans-serif;
    @media(min-width:768px){
      font-size: 70px;
    }
  }
  h4{
    font-size: 18px;
    font-family: 'Oswald', sans-serif;
    color: #143b68;
    margin-bottom: 5px;
    @media(min-width:768px){
      font-size: 25px;
    }
  }
  ul{
    margin-bottom: 30px;
  }
  li{
    color: #143b68;
    line-height: 1.4;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Oswald', sans-serif;
    @media(min-width:768px){
      font-size: 18px;
    }
    &:before{
      content: "✓";
      color: #cc0000;
      font-weight: 700;
      margin-right: 5px;
      font-size: 16px;
      @media(min-width:768px){
        font-size: 20px;
      }
    }
  }
  h5{
    font-size: 16px;
    margin-bottom: 20px;
    color: #cc0000;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    @media(min-width:768px){
      font-size: 24px;
    }
  }
}
.row{
  padding: 50px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .col{
    flex: 1 100%;
    @media(min-width:768px){
      &:first-child{
        flex: 1 60%;
      }
      &:last-child{
        flex: 1 40%;
      }
    }
  }
}
.pricing{
  background: #2d2c61;
  padding: 15px;
  color: #fff;
  text-align: center;
  font-size: 1em;
  border: 2px solid #d4f0f9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  @media(min-width:768px){
    font-size: 1.5em;
    display: flex;
    justify-content: space-between;
  }
  div{
    font-weight: 700;
    font-size: 16px;
    @media(min-width:768px){
      font-size: 22px;
    }
  }
  .today{}
  .original{
    color: #f7a417;
  }
}
h5{
  color: red;
  font-size: 16px;
  letter-spacing: -1px;
  line-height: 1.1;
  text-align: center;
  font-weight: 700;
  margin: 30px 0;
  @media(min-width:768px){
    font-size: 26px;
  }
}
.product{
  box-shadow: -4px 4px 8px rgba(0,0,0, .2);
  background: #fafafa;
  padding: 15px;
  overflow: visible;
  transition: all .3s;
  position: relative;
  border: 1px solid #eee;
  height: auto !important;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 30px;
  .greens{
    line-height: 1.2;
    color: gray;
    font-size: 28px;
    font-weight: normal;
    letter-spacing: 0;
    margin-bottom: 15px;
    font-family: Oswald, sans-serif;
  }
  .seal{
    width: 100px;
    display: block;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .product-image{
    width: 100%;
    height: auto;
  }
  select{
    border-radius: 8px;
    height: 50px;
    width: 100%;
    display: block;
    background: #fff;
    border: 1px solid rgb(206, 212, 218);
    font-size: 20px;
    padding: 0 15px;
  }
  .price{
    display: flex;
    align-items: center;
    justify-content: center;
    .amount{
      color: #353535;
      font-size: 40px;
      font-weight: bold;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: -1px;
      margin-right: 15px;
      @media(min-width:768px){
        font-size: 55px;
      }
      &:before{
        content: "$";
        font-size: 60%;
        display: inline-block;
        position: relative;
        top: -10px;
      }
    }
    .per{
      display: block;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 4px;
    }
    .save{
      background: red;
      color: #fff;
      font-weight: 700;
      padding: 4px 5px;
    }
  }
  .normaly{
    margin-bottom: 30px;
    font-size: 24px;
    color: #9f9f9f;
    border-top: 2px solid #9f9f9f;
    border-bottom: 2px solid #9f9f9f;
    font-weight: 700;
    display: inline-block;
    letter-spacing: -1.5px;
    span{
      color: red;
    }
  }
  &:hover{
    box-shadow: -4px 4px 60px rgba(0,0,0, .2);
  }
}
.btn{
  &-add{
    background: red;
    width: 100%;
    color: #fff;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 600;
    transition: .5s;
    &:hover{
      transform: scale(1.05);
      box-shadow: 0 0 30px rgba(red, .4);
    }
  }
  &-no{
    background: none;
    color: red;
    margin-bottom: 30px;
    &:hover{
      text-decoration: underline;
    }
  }
}
p{
  margin-bottom: 15px;
}
</style>
