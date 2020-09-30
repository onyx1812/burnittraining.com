<template>
  <div class="offer offer-one">
    <div class="container">
      <h2 v-html="txt[lg].t1"></h2>
      <Video :mp4="require(`@/assets/video/${q6}.mp4`)" />
      <h3 v-html="txt[lg].t2"></h3>
    </div>
    <section class="offer-section" v-if="offerActive">
      <div class="container">
        <div class="macros">
          <h3>{{ txt[lg].m1 }}</h3>
          <h4>{{calories}} {{ txt[lg].m2 }}</h4>
          <p>
            <span>{{ txt[lg].m3 }}:</span>
            <span><b>{{carbohydrates}}</b><i>{{carbohydrates_p}}</i></span>
          </p>
          <p>
            <span>{{ txt[lg].m4 }}:</span>
            <span><b>{{protein}}</b><i>{{protein_p}}</i></span>
          </p>
          <p>
            <span>{{ txt[lg].m5 }}:</span>
            <span><b>{{fat}}</b><i>{{fat_p}}</i></span>
          </p>
          <p>
            <span>{{ txt[lg].m6 }}:</span>
            <span><b>{{activity}}</b></span>
          </p>
        </div>
        <div :class="`crucial crucial-${this.$store.state.gender}`">
          <h2>{{ txt[lg].t3 }}</h2>
        </div>
        <ItemsMan v-if="this.$store.state.gender === 'male'" />
        <ItemsWoman  v-if="this.$store.state.gender === 'female'" />
        <BonusesMan v-if="this.$store.state.gender === 'male'" />
        <BonusesWoman  v-if="this.$store.state.gender === 'female'" />
      </div>
      <Guarantee />
      <ExclusiveMan v-if="this.$store.state.gender === 'male'" />
      <ExclusiveWoman  v-if="this.$store.state.gender === 'female'" />
    </section>
  </div>
</template>
<script>
import Video from '@/components/Video.vue'
import ItemsMan from '@/components/ItemsMan.vue'
import ItemsWoman from '@/components/ItemsWoman.vue'
import BonusesMan from '@/components/BonusesMan.vue'
import BonusesWoman from '@/components/BonusesWoman.vue'
import Guarantee from '@/components/Guarantee.vue'
import ExclusiveMan from '@/components/ExclusiveMan.vue'
import ExclusiveWoman from '@/components/ExclusiveWoman.vue'
export default {
  name: 'OfferOne',
  components: {
    Video,
    ItemsMan,
    ItemsWoman,
    BonusesMan,
    BonusesWoman,
    Guarantee,
    ExclusiveMan,
    ExclusiveWoman
  },
  data(){
    return {
      play: false,
      calories: 0,
      offerActive: false,
      carbohydrates: '158g',
      carbohydrates_p: '34.5%',
      protein: '185g',
      protein_p:'40.5%',
      fat: '51g',
      fat_p: '25%',
      activity: 'moderate',
      q6: 'q6_1',
      lg: this.$store.state.lang,
      txt: {
        fr: {
          t1: 'Dans cette vidéo, Chris Gomes, l’entraîneur des stars et auteur de programmes de fitness à succès partage RIEN qu&#39;avec vous et en fonction de vos objectifs ses 3 techniques adaptées à VOTRE type de morphologie que vous pouvez commencer à utiliser dès aujourd&#39;hui.',
          t2: '<b>Chris Gomes</b> : entraîneur des stars, auteur de programmes de fitness à succès et co-fondateur de Burn It.',
          m1: 'Vos macros quotidiennes',
          m2: 'calories par jour',
          m3: 'Glucides',
          m4: 'protéines',
          m5: 'graisses',
          m6: 'activité',
          t3: 'Voici ce que notre offre comprend',
        }
      }
    }
  },
  beforeCreate(){
    console.log(this.$store.state.weigh);
    console.log(this.$store.state.height);
    console.log(this.$store.state.age);
    if(this.$store.state.q !== 6) this.$router.push('/');
    if(this.$store.state.gender === 'male' && this.$store.state.type === 'metric') this.calories = 88.36 + (13.4 * this.$store.state.weigh) + (4.8 * this.$store.state.height) - (5.7 * this.$store.state.age);
    if(this.$store.state.gender === 'female' && this.$store.state.type === 'metric') this.calories = 447.6 + (9.2 * this.$store.state.weigh) + (3.1 * this.$store.state.height) - (4.3 * this.$store.state.age);
    if(this.$store.state.gender === 'male' && this.$store.state.type === 'imperial') this.calories = 88.362 + (13.397 * this.$store.state.weigh) + (4.799 * this.$store.state.height) - (5.677 * this.$store.state.age);
    if(this.$store.state.gender === 'female' && this.$store.state.type === 'imperial') this.calories = 447.593 + (9.247 * this.$store.state.weigh) + (3.098 * this.$store.state.height) - (4.330 * this.$store.state.age);
  },
  mounted(){
    this.q6 = this.$store.state.q6;
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');
body{
  background: #fff;
}
.Result{
  .main-header{
    background: #f8f8f8;
    border-bottom: 1px solid #e7e7e7;
  }
}
</style>
<style lang="scss" scoped>
.offer{
  width: 100%;
  flex: 1 100%;
  max-width: 100%;
  padding-bottom: 30px;
  &-inner{
    background: #fff;
    padding-bottom: 15px;
  }
}
h1{
  color: white;
  background-color: hsl(211, 75%, 25%);
  padding: 24px;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  &.woman{
    background-color: hsl(331, 63.2%, 56.3%);
  }
}
h2{
  color: #ff0000;
  font-size: 16px;
  font-weight: 700;
  padding: 30px 10px 0;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 15px;
  @media(min-width:768px){
    font-size: 24px;
    padding: 30px 50px 0;
  }
}
h3{
  font-size: 14px;
  color: rgb(102, 102, 102);
  text-align: center;
  @media(min-width:768px){
    font-size: 18px;
  }
  b{
    font-weight: 700;
  }
}


.macros{
  text-align: center;
  margin-top: 50px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  h3{
    background-color: #000;
    color: #fff;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 20px;
    font-family: 'Oswald', sans-serif;
    @media(min-width:768px){
      font-size: 36px;
    }
  }
  h4{
    text-transform: uppercase;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 20px;
    color: #252525;
    font-family: 'Oswald', sans-serif;
    @media(min-width:768px){
      font-size: 36px;
    }
  }
  p{
    color: #666;
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
    text-align: center;
    @media(min-width:768px){
      font-size: 24px;
    }
    span{
      display: inline-block;
      width: 150px;
      text-align: right;
      @media(min-width:768px){
        width: 200px;
      }
      & + span{
        text-align: left;
      }
    }
    b{
      margin-left: 5px;
      color: #252525;
    }
    i{
      color: #666;
      font-size: 80%;
      margin-left: 5px;
    }
  }
}

.crucial{
  background: no-repeat center center / 100% 100%;
  padding-top: 20px;
  padding-bottom: 40px;
  text-align: center;
  color: #fff;
  &-male{
    background-image: url('../assets/img/in-h-bg.png');
  }
  &-female{
    background-image: url('../assets/img/in-h-bg.jpg');
  }
  h2 {
    color: #fff;
    font-size: 40px;
    line-height: 1.4;
    font-weight: 700;
    margin: 0;
    font-family: 'Oswald', sans-serif;
    @media(min-width:768px){
      font-size: 60px;
    }
  }
}
</style>
