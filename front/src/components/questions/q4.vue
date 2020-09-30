<template>
  <div class="quesion">
    <h2 v-html="txt[lg].h2">How Much Do You Weigh?</h2>
    <h3>{{weigh}} {{weigh_type}}</h3>

    <div class="range-wrap" >
      <label v-html="txt[lg].label"></label>
      <input name="kg" type="range" min="20" max="200" value="20" step="1" @input="q4Weigh">
    </div>

    <button class="btn" :class="'btn-'+this.$store.state.gender" @click="q4" v-html="txt[lg].btn"></button>
  </div>
</template>
<script>
export default {
  name: 'q4',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h2: 'Votre poids actuel',
          btn: 'Continuez',
          label: 'Kilogrammes'
        }
      },
      weigh: 0,
      weigh_type: 'kg',
      isValid: false,
    }
  },
  methods: {
    q4Weigh(e){
      this.weigh = e.target.value;
      this.isValid = true;
    },
    q4(e){
      if( this.isValid ){
        this.$store.state.weigh = this.weigh+' '+this.weigh_type;
        setTimeout(()=>{
          this.$store.state.q = 5;
        }, 250);
        this.$store.state.progress = 68;
      } else {
        alert('Veuillez préciser votre poids');
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.variants{
  display: flex;
  align-items: center;
  justify-content: center;
  li{
    padding: 0 15px;
  }
  input{
    margin-right: 10px;
  }
  label{
    font-weight: 500;
    font-size: 16px;
  }
}
h3{
  color:rgb(33, 37, 41);
  font-family:"Fjalla One", sans-serif;
  font-size:32px;
  text-align: center;
}
</style>
