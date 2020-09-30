<template>
  <div class="quiz">
    <div class="quiz-wrap">

      <h1>Find out EXACTLY What Diet & Training is Best For You!</h1>

      <div class="question question-1">
        <h2>Are you a Woman or a Man?</h2>
        <div class="row">
          <div class="col">
            <button class="btn btn-icon btn-woman" value="">
              <Icon name="fa fa-female" />
              <span>WOMAN</span>
            </button>
          </div>
          <div class="col">
            <button class="btn btn-icon btn-man" value="">
              <Icon name="fa fa-male" />
              <span>MAN</span>
            </button>
          </div>
        </div>
      </div>

      <div class="question question-2">
        <h2>What is Your Age Range?</h2>
        <div class="row">
          <div class="col-4">
            <button class="btn btn-icon">
              <span>teens</span>
            </button>
          </div>
          <div class="col-4">
            <button class="btn btn-icon">
              <span>20s</span>
            </button>
          </div>
          <div class="col-4">
            <button class="btn btn-icon">
              <span>30s</span>
            </button>
          </div>
          <div class="col-4">
            <button class="btn btn-icon">
              <span>40s</span>
            </button>
          </div>
          <div class="col-4">
            <button class="btn btn-icon">
              <span>50s</span>
            </button>
          </div>
          <div class="col-4">
            <button class="btn btn-icon">
              <span>60s</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'Quiz',
  components: {
    Icon
  },
  data(){
    return {

    }
  }
}
</script>
<style scoped lang="scss" src="../assets/scss/quiz.scss"></style>