<template>
  <div class="step step-for">
    <h3>3. {{ txt[lg].h3 }}</h3>
    <transition name="slide-fade">
      <div v-if="this.$store.state.step_for">
        <div class="guarantee">
          <img src="@/assets/img/arrow-flash-small.gif" >
          <input type="checkbox" v-on:change="changeGuarantee" v-model="guarantee" name="guarantee" id="guarantee">
          <label for="guarantee" v-html="txt[lg].guarantee"></label>
        </div>
        <p v-html="txt[lg].more"></p>
        <p v-html="txt[lg].tell"></p>
        <h4 v-html="txt[lg].h4"></h4>
        <div class="cart">
          <h5 v-html="txt[lg].h5"></h5>
          <table>
            <thead>
              <tr>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>pack spécial programme sèche en 90 jours</td>
                <td>1</td>
                <td>$57.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">Total:</td>
                <td>€57.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button class="btn" @click="submitOrder">{{ txt[lg].btn }}</button>
        <div class="subscribe">
          <input type="checkbox" v-on:change="changeSubscribe" v-model="subscribe" name="subscribe" id="subscribe">
          <label for="subscribe" v-html="txt[lg].subs"></label>
        </div>
      </div>
    </transition>
    <div v-if="loader" class="loader"></div>
  </div>
</template>
<script>
import Payment from '@/services/Payment.js'
import Orders from '@/services/Orders.js'
export default {
  name: 'StepFor',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h3: 'Autres mode de paiement',
          btn: 'Paiement sécurisé',
          guarantee: `Laissez-nous garantir que le poids que vous perdez restera ... pour de bon! <br> (8/10 des nouveaux clients choisissent cette option)`,
          more: `<span class="text-red text-lg"> Il n'y a rien de plus ennuyeux que de perdre une charge de poids… puis 3-4 mois plus tard, tout recommencer! La raison pour laquelle cela se produit est que les gens se trompent dans leur alimentation. </span> Nous comprenons qu'il peut parfois être difficile de trouver le temps de préparer votre alimentation. C'est pourquoi nous aimerions vous proposer de construire votre alimentation pour vous ... et demander à l'un de nos meilleurs entraîneurs de vous guider personnellement tout au long des 4 premières semaines critiques de ce programme afin que vous obteniez les meilleurs résultats.`,
          tell: `Tout ce que vous avez à faire est de nous indiquer vos préférences alimentaires et votre poids idéal ... puis de manger quand et combien nous vous en disons. C'est tout! Pas de confusion. Pas de comptage des calories. Pas de pesée de votre nourriture. Nous faisons tout ça pour toi. Cela peut vous donner des résultats 4X meilleurs. Souhaitez-vous ajouter ce service à votre commande? Si tel est le cas, voici une réduction de 50% ...`,
          h4: `LAISSEZ-NOUS FAIRE TOUT LE TRAVAIL DE CRÉER LE RÉGIME ALIMENTAIRE PARFAIT POUR VOUS - POUR SEULEMENT UN SUPPLÉMENT DE 158 $… 57 $ AUJOURD'HUI SEULEMENT!`,
          h5: `Résumé de votre commande`,
          subs: `Si vous décidez que notre programme n’est pas adapté, faites-le nous savoir et nous effectuerons un remboursement directement.`
        }
      },
      loader: false,
      guarantee: false,
      subscribe: true
    }
  },
  methods: {
    changeGuarantee(e){
      this.$store.state.guarantee = this.guarantee;
    },
    changeSubscribe(e){
      this.$store.state.subscribe = this.subscribe;
    },
    submitOrder(e){
      e.preventDefault();
      this.loader = true;

      const
        exp_year = 2000 + Number(this.$store.state.card_date.slice(-2)),
        exp_month = Number(this.$store.state.card_date.substr(0, 2));

      if( this.$store.state.order_id ){
        const orderData = {
          "order_id": this.$store.state.order_id,
          "status": "Processing",
          "card_number": this.$store.state.card_number,
          "exp_month": exp_month,
          "exp_year": exp_year,
          "card_code": this.$store.state.card_code
        }
        Orders.create(orderData)
          .then(res => {
            this.loader = false;
            alert('Payment succeeded!');
            this.$router.push('/offer-two');
          })
          .catch(err => {
            this.loader = false;
            console.error(err);
            alert(err);
          });
      } else {

        let orderID;

        const orderData = {
          "first_name": this.$store.state.first_name,
          "last_name": this.$store.state.last_name,
          "email": this.$store.state.email,
          "phone": this.$store.state.phone,
          "status": 'Pending payment',
          "total": this.$store.state.amount,
          "card_number": this.$store.state.card_number,
          "exp_month": exp_month,
          "exp_year": exp_year,
          "card_code": this.$store.state.card_code
        }
        Orders.create(orderData)
          .then(res => {
            orderID = res.insertId;
            this.$store.state.order_id = res.insertId;
            const data = {
              first_name: this.$store.state.first_name,
              last_name: this.$store.state.last_name,
              email: this.$store.state.email,
              phone: this.$store.state.phone,
              card_number: this.$store.state.card_number,
              exp_month: exp_month,
              exp_year: exp_year,
              card_code: this.$store.state.card_code,
              amount: this.$store.state.amount,
              currency: 'USD',
              order_id: orderID,
              address: false
            }
            Payment.Stripe(data)
              .then(res => {
                this.loader = false;
                if(res.status === 'succeeded'){
                  Orders.updateStatus({
                    order_id: orderID,
                    status: 'Processing'
                  });
                  alert('Payment succeeded!')
                  this.$router.push('/offer-two');
                } else {
                  Orders.updateStatus({
                    order_id: orderID,
                    status: 'Pending payment'
                  });
                  alert(res.raw.message);
                  this.$store.state.step_for = false;
                  this.$store.state.step_three = true;
                  setTimeout(()=>{
                    document.querySelector('.step-three').scrollIntoView({block: "start", behavior: "smooth"});
                  }, 250);
                }
              })
              .catch(err => {
                this.loader = false;
                console.error(err);
                alert(err);
              });
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.step{
  position: relative;
  &-for{
    p{
      margin: 1em 25px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #333;
      .text-red{
        color: #ee1b0b;
        font-size: 20px;
        font-weight: 600;
        text-decoration: underline;
        text-align: center;
        line-height: 1.4;
      }
    }
    h4{
      color: #ee1b0b;
      font-size: 16px;
      font-weight: 600;
      text-decoration: underline;
      text-align: center;
      line-height: 1.4;
      margin: 5px;
      @media(min-width:768px){
        font-size: 24px;
        margin: 25px;
      }
    }
    .btn{
      margin-left: auto;
      margin-right: auto;
      display: block;
      margin-bottom: 30px;
    }
  }
}
.guarantee{
  background: #f4d66a;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  margin: 15px;
  @media(min-width:768px){
    padding: 25px;
    margin: 25px;
  }
  label{
    font-weight: 700;
    font-size: 18px;
    @media(min-width:768px){
      font-size: 30px;
    }
  }
  img{
    display: inline-block;
    margin-top: 8px;
    margin-right: 15px;
  }
  input[type="checkbox"]{
    height: 35px;
    width: 35px;
    border: 2px solid #212121;
    display: inline-block;
    border-radius: 0;
    margin-right: 15px;
  }
}
.cart{
  padding: 1em;
  border-radius: .5em;
  border: 1px solid #CCC;
  margin: 5px 15px;
  @media(min-width:768px){
    margin: 15px 50px;
  }
  h5{
    text-align: center;
    border-bottom: 1px solid #CCC;
    font-size: 30px;
    margin-bottom: 30px;
    margin-top: 10px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    @media(min-width:768px){
      font-size: 40px;
    }
  }
  table{
    width: 100%;
    thead{
      th{
        font-weight: 700;
        text-align: left;
        border-bottom: 1px solid #CCC;
        padding-bottom: 5px;
        font-size: 11px;
        @media(min-width:768px){
          font-size: 14px;
        }
      }
    }
    tbody{
      td{
        border-bottom: 1px solid #CCC;
        padding: 5px 0;
        font-size: 11px;
        @media(min-width:768px){
          font-size: 14px;
        }
      }
    }
    tfoot{
      td{
        font-weight: 700;
        padding-top: 5px;
        font-size: 11px;
        @media(min-width:768px){
          font-size: 14px;
        }
        &:first-child{
          text-align: right;
          padding-right: 10px;
        }
      }
    }
  }
}
.subscribe{
  margin: 0 25px 30px;
  input[type="checkbox"]{
    background: #0662ba;
    border: 10px solid #0662ba;
  }
}
</style>
