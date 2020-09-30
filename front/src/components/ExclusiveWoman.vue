<template>
  <section class="exclusive">
    <div class="container">
      <img src="@/assets/img/ft-l-woman.jpg" alt="" width="100%" class="ft">
      <center>*Tous nos produits sont proposés sous forme digitale et disponibles dès validation de votre paiement</center>
      <ul class="ft-list">
        <li v-for="i in 4"><img :src="require(`@/assets/img/ftt-woman/ftt-${i}.jpg`)" alt=""></li>
      </ul>
      <strike>Prix public 230€</strike>
      <a href="#" class="link" @click="goToCheckout">Disponible uniquement pour {{items[this.$store.state.q6]}}€</a>
      <center>Paiement 100% sécurisé</center>
      <center><img src="@/assets/img/card.png" ></center>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ExclusiveWoman',
  data(){
    return {
      items: {
        'q6_1': '87.00',
        'q6_2': '57.00',
        'q6_3': '67.00'
      }
    }
  },
  methods: {
    goToCheckout(e){
      e.preventDefault();
      this.$router.push('/checkout');
    }
  }
}
</script>