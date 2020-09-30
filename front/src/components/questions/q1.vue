<template>
  <div class="quesion">
    <h2 v-html="txt[lg].h2"></h2>
    <div class="row">
      <div class="col col-md-4 offset-md-2">
        <button class="btn btn-icon btn-female" @click="q1" value="female">
          <Icon name="fa fa-female" />
          <span v-html="txt[lg].female"></span>
        </button>
      </div>
      <div class="col col-md-4">
        <button class="btn btn-icon btn-male" @click="q1" value="male">
          <Icon name="fa fa-male" />
          <span v-html="txt[lg].male"></span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'q1',
  components: {
    Icon
  },
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h2: 'Vous êtes une Femme ou un Homme',
          male: 'HOMME',
          female: 'FEMME',
        }
      }
    }
  },
  methods: {
    q1(e){
      e.preventDefault();
      this.$store.state.gender = e.target.value;
      this.$store.state.progress = 20;
      setTimeout(()=>{
        this.$store.state.q = 2;
      }, 250);
    }
  }
}
</script>
