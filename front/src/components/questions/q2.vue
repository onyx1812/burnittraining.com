<template>
  <div class="quesion">
    <h2 v-html="txt[lg].h2"></h2>
    <div class="row">
      <div class="col-6 col-md-4" v-for="age in ages">
        <button :class="'btn btn-icon btn-age btn-img btn-'+gender" @click="q2" :value="age.value">
          <img :src="age.img" :alt="age.value">
          <span>{{ age.value }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'q2',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h2: 'Votre âge',
        }
      },
      gender: this.$store.state.gender,
      ages: [
        {
          img: require(`@/assets/img/q2/${this.$store.state.gender}_1.png`),
          value: `Moins de 20 ans`
        },
        {
          img: require(`@/assets/img/q2/${this.$store.state.gender}_2.png`),
          value: `Entre 20 et 29 ans`
        },
        {
          img: require(`@/assets/img/q2/${this.$store.state.gender}_3.png`),
          value: `Entre 30 et 39 ans`
        },
        {
          img: require(`@/assets/img/q2/${this.$store.state.gender}_4.png`),
          value: `Entre 40 et 49 ans`
        },
        {
          img: require(`@/assets/img/q2/${this.$store.state.gender}_5.png`),
          value: `Entre 50 et 59 ans`
        },
        {
          img: require(`@/assets/img/q2/${this.$store.state.gender}_6.png`),
          value: `60 ans et plus`
        }
      ]
    }
  },
  methods: {
    q2(e){
      e.preventDefault();
      this.$store.state.age = e.target.value;
      this.$store.state.progress = 36;
      setTimeout(()=>{
        this.$store.state.q = 3;
      }, 250);
    }
  }
}
</script>
