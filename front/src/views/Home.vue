<template>
  <Quiz />
</template>
<script>
import Quiz from '@/components/Quiz.vue'
export default {
  name: 'Home',
  components: {
    Quiz
  },
  mounted(){
    if( this.$route.query.report === 'qwerty123456'){
      this.$router.push('/report');
    }
  }
}
</script>
