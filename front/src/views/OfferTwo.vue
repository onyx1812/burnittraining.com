<template>
  <OfferTwoMan v-if="this.$store.state.gender === 'male'" />
  <OfferTwoWoman v-else-if="this.$store.state.gender === 'female'"/>
  <div v-else>ERROR 404</div>
</template>
<script>
import OfferTwoMan from '@/components/OfferTwoMan.vue'
import OfferTwoWoman from '@/components/OfferTwoWoman.vue'
export default {
  name: 'OfferTwo',
  components: {
    OfferTwoMan,
    OfferTwoWoman
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
