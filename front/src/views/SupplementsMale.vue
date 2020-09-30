<template>
  <section class="suplements-content">
    <div class="container">
      SupplementsMale
    </div>
  </section>
</template>
<script>
export default {
  name: 'SupplementsMale',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          title: 'Title'
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">

</style>