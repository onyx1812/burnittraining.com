<template>
  <div class="quesion">
    <h2 v-html="txt[lg].h2"></h2>
    <div class="row">
      <div class="col-6 col-md-4" v-for="active in actives">
        <button :class="'btn btn-icon btn-img btn-active btn-'+gender" @click="q5" :value="active.value">
          <img :src="active.img" alt="">
          <span>{{ active.value }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'q5',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h2: 'Décrivez-nous votre activité physique'
        }
      },
      gender: this.$store.state.gender,
      actives: [
        {
          img: require(`@/assets/img/q5/${this.$store.state.gender}_1.png`),
          value: `Légèrement actif`
        },
        {
          img: require(`@/assets/img/q5/${this.$store.state.gender}_2.png`),
          value: `Modérément actif`
        },
        {
          img: require(`@/assets/img/q5/${this.$store.state.gender}_3.png`),
          value: `Très actif`
        }
      ]
    }
  },
  methods: {
    q5(e){
      this.$store.state.active = e.target.dataset.value;
      this.$store.state.progress = 84;
      setTimeout(()=>{
        this.$store.state.q = 6;
      }, 250);
    }
  }
}
</script>
