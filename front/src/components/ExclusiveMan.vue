<template>
  <section class="exclusive">
    <div class="container">
      <img :src="require(`@/assets/img/ex-man/ex-${this.$store.state.q6}.jpg`)" alt="" width="800" :class="`ft ft-${this.$store.state.q6}`">
      <center>*Tous nos produits sont proposés sous forme digitale et disponibles dès validation de votre paiement</center>
      <ul class="ft-list" v-if="this.$store.state.q6 === 'q6_4' || this.$store.state.q6 === 'q6_7'">
        <li><img src="@/assets/img/ft-man/ft-1.jpg" alt=""></li>
        <li><img src="@/assets/img/ft-man/ft-2.jpg" alt=""></li>
        <li><img src="@/assets/img/ft-man/ft-3.jpg" alt=""></li>
        <li><img src="@/assets/img/ft-man/ft-4.jpg" alt=""></li>
      </ul>
      <ul class="ft-list" v-else>
        <li><img src="@/assets/img/ftt-man/ft-1.jpg" alt=""></li>
        <li><img src="@/assets/img/ftt-man/ft-2.jpg" alt=""></li>
        <li><img src="@/assets/img/ftt-man/ft-3.jpg" alt=""></li>
        <li><img src="@/assets/img/ftt-man/ft-4.jpg" alt=""></li>
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
  name: 'ExclusiveMan',
  data(){
    return {
      items: {
        'q6_4': '87.00',
        'q6_5': '57.00',
        'q6_6': '67.00',
        'q6_7': '67.00'
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
<style scoped lang="scss">
.exclusive{
  .ft{
    &-q6_5, &-q6_6{
      width: 100%;
    }
  }
}
</style>