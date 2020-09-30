<template>
  <section class="member-content">
    <div class="container">
      Member
    </div>
  </section>
</template>
<script>
export default {
  name: 'Member',
  components: {},
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          title: 'Test'
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">

</style>