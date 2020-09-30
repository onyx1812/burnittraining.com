<template>
  <section class="quiz">
    <div class="container">
      <div class="quiz-inner">
        <h1 :class="this.$store.state.gender" v-html="txt[lg].h1"></h1>
        <div class="progress">
          <progress max="100" :value="this.$store.state.progress"></progress>
        </div>
        <component v-bind:is="'q'+this.$store.state.q"></component>
      </div>
    </div>
  </section>
</template>
<script>
import q1 from './questions/q1.vue'
import q2 from './questions/q2.vue'
import q3 from './questions/q3.vue'
import q4 from './questions/q4.vue'
import q5 from './questions/q5.vue'
import q6 from './questions/q6.vue'
export default {
  name: 'Quiz',
  components: {
    q1, q2, q3, q4, q5, q6
  },
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h1: 'Découvrez quel est le meilleur régime et programme d’entrainement pour vous.'
        }
      },
      quiz:[
        {
          question: 'Are you a Woman or a Man?',
          type: 'button',
          variants: ['Woman', 'Man']
        },
        {
          question: 'What is Your Age Range?',
          type: 'button',
          variants: ['Teens', '20s', '30s', '40s', '50s', '60s']
        },
        {
          question: false,
          type: 'height',
          variants: ['Inches', 'Centimeters']
        },
        {
          question: 'How Much Do You Weigh?',
          type: 'weight',
          variants: ['Pounds', 'Kilograms']
        },
        {
          question: 'How Active Are You?',
          type: 'button',
          variants: ['lightly active', 'moderately active', 'very active']
        },
        {
          question: 'Which Best Describes You?',
          type: 'button',
          variants: ["I'm SOFT. I need to lose (5 to 10lbs)/(2 to 5kg) and tone up my stomach, butt & arms.", "I have (20lbs)/(10kg) or more FAT I realy need to lose while building sexy muscle tone.", "I'm SKINNY. I need to add some toned muscle while burning that stubborn fat in certain areas & I would look amazing."]
        },
        {
          question: 'Which Best Describes You?',
          type: 'button',
          variants: ["I can't get bigger or gain muscle, no matter how much I eat or lift.", "I'm 'skinny fat'. I look slim in clothes, but I do have body fat.", "I'm happy with my body, but need to lose one last layer of fat.", "I'm not happy with my body, and want to lose a serious amount of weight."]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.quiz{
  width: 100%;
  flex: 1 100%;
  max-width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  @media(min-width:768px){
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media(min-width:992px){
    padding-top: 100px;
    padding-bottom: 100px;
  }
  &-inner{
    background: #fff;
    padding-bottom: 15px;
    position: relative;
    width: calc(100% - 30px);
    margin: 0 auto;
    @media(min-width:992px){
      width: calc(100% - 60px);
    }
    @media(min-width:1200px){
      width: calc(100% - 100px);
    }
    &:before{
      content: "";
      display: block;
      position: absolute;
      background: rgba(255,255,255, .5);
      z-index: 0;
      left: -15px;
      width: calc(100% + 30px);
      top: -15px;
      height: calc(100% + 30px);
      @media(min-width:992px){
        left: -30px;
        width: calc(100% + 60px);
        top: -30px;
        height: calc(100% + 60px);
      }
      @media(min-width:1200px){
        left: -50px;
        width: calc(100% + 100px);
        top: -50px;
        height: calc(100% + 100px);
      }
    }
  }
}
h1{
  color: white;
  background-color: hsl(211, 75%, 25%);
  padding: 10px;
  font-family: "Fjalla One", sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  position: relative;
  z-index: 2;
  @media(min-width:768px){
    font-size: 20px;
  }
  @media(min-width: 992px){
    font-size: 28px;
    padding: 24px;
  }
  &.female{
    background-color: #f5478f;
  }
}
.progress{
  padding: 5px;
  background-color: #eee;
  border-radius: 5px;
  box-shadow: inset 0 0 10px #999;
  margin: 15px;
  position: relative;
  z-index: 2;
  @media(min-width:992px){
    padding: 10px;
  }
  progress{
    display: block;
    width: 100%;
    height: 16px;
    border:none;
    appearance: none;
    box-shadow: none;
    border-radius: .25rem;
    overflow: hidden;
    background: #e9ecef;
    transition: 1s ease;
    &[value]::-webkit-progress-value{
      background-color: #ffc107;
      background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
      background-size: 1rem 1rem;
      transition: 1s ease;
    }
    &::-webkit-progress-bar {
      background: #e9ecef;
    }
  }
}
</style>