<template>
  <div class="quesion">
    <h2>{{ txt[lg].h2 }}: <span>{{height}}cm</span></h2>
    <div class="range-wrap">
      <label v-html="txt[lg].label"></label>
      <input name="cm" type="range" min="90" max="240" value="90" step="1" @input="q3RangeM">
    </div>
    <button class="btn" :class="'btn-'+this.$store.state.gender" @click="q3" v-html="txt[lg].btn"></button>
  </div>
</template>
<script>
export default {
  name: 'q3',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h2: 'Votre taille',
          btn: 'Continuez',
          label: 'En centimètres'
        }
      },
      height: 0,
      isValid: false,
    }
  },
  methods: {
    q3Type(e){
      this.$store.state.type = e.target.value;
    },
    q3RangeM(e){
      this.height = `${e.target.value}`;
      this.isValid = true;
    },
    q3(e){
      if( this.isValid ){
        this.$store.state.height = this.height;
        this.$store.state.progress = 52;
        setTimeout(()=>{
          this.$store.state.q = 4;
        }, 250);
      } else {
        alert('Veuillez préciser votre taille');
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h2 span{
  text-align: left;
  min-width: 90px;
  display: inline-block;
}
</style>
