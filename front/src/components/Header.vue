<template>
  <header class="main-header" v-if="routeName !== 'Checkout'" ref="mainHeader">
    <div class="container">
      <img src="@/assets/img/logo.png" alt="">
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  computed: {
    routeName(){
      return this.$route.name;
    }
  },
  mounted(){
    this.$parent.headerHeight = this.$refs.mainHeader.clientHeight;
  }
}
</script>
<style lang="scss" scoped>
.main-header{
  background: #fff;
  width: 100%;
  padding: 6px 0 0;
  border-bottom: 1px solid #b08359;
  height: 55px;
  img{
    height: auto;
    width: 150px;
    display: block;
  }
  .container{
    &:before, &:after{
      height: 0;
    }
  }
}
</style>