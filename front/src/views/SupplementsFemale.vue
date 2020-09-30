<template>
  <section class="suplements-content">
    <div class="container">
      SupplementsFemale
    </div>
  </section>
</template>
<script>
export default {
  name: 'SupplementsFemale',
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