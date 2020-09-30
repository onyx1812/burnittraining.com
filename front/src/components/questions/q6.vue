<template>
  <div class="quesion">
    <h2 v-html="txt[lg].h2"></h2>
    <div class="row">
      <div class="col col-md-6" v-for="item in items[this.$store.state.gender]">
        <button class="btn btn-icon btn-desc" @click="q6" :value="item.value" :data-describes="item.desc">
          <span v-html="item.desc"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'q6',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h2: 'Qu’est-ce qui vous décrit le mieux ?'
        }
      },
      items: {
        female: [
          {
            value: "q6_1",
            desc: `j’ai besoin de perdre 3 à 5 kilos et de tonifier mon ventre mes fesses et mes bras`
          },
          {
            value: "q6_2",
            desc: `J’ai besoin de perdre environ 10 kilos`
          },
          {
            value: "q6_3",
            desc: `Je suis mince. J’ai besoin de me tonifier et de perdre un peu de gras à certains endroits Pour être bien`
          }
        ],
        male: [
          {
            value: "q6_4",
            desc: `Je n’arrive pas à prendre de la masse musculaire, peu importe ce que je mange ou la Façon dont je m’entraine`
          },
          {
            value: "q6_5",
            desc: `Je suis un « faux maigre », j’ai l’air mince habillé mais j’ai un peu de graisse`
          },
          {
            value: "q6_6",
            desc: `Je suis plutôt satisfait de mon apparence mais je voudrais juste perdre Un petit peu de masse graisseuse`
          },
          {
            value: "q6_7",
            desc: `Je ne suis pas content de mon apparence, je voudrais perdre du poids`
          }
        ]
      }
    }
  },
  methods: {
    q6(e){
      console.dir(e.target);
      console.log(e.target.value);
      this.$store.state.q6 = e.target.value;
      console.log(this.$store.state.q6);
      this.$store.state.describes = e.target.dataset.describes;
      this.$store.state.progress = 100;
      setTimeout(()=>{
        this.$router.push('/offer-one');
      }, 1000);
    }
  }
}
</script>
