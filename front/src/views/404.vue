<template>
  <div class="page_404">
    <h1>OOOPS! THE PAGE YOU’RE <br> LOOKING FOR INS’T HERE</h1>
    <h2>404</h2>
    <button @click="goToHome">back to Home page</button>
  </div>
</template>
<script>
export default {
  name: 'page_404',
  methods: {
    goToHome(e){
      e.preventDefault();
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.main-header, .main-footer{
  display: none !important;
}
.page_404{
  height: calc(100vh - 40px - 205px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
}
h1{
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
  position: relative;
  display: block;
  width: 100%;
  font-weight: 700;
  font-family: Georgia;
}
h2{
  font-size: 400px;
  opacity: .15;
  z-index: 1;
  left: 50%; top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  line-height: 1;
}
button{
  border-radius: 4px;
  font-size: 20px;
  padding: 20px 15px;
  z-index: 2;
  position: relative;
  display: block;
  width: 300px;
  margin-top: 50px;
  background: rgb(48, 68, 85);
  border: 4px solid rgb(48, 68, 85);
  color: #fff;
  font-weight: 600;
  transition: .5s;
  &:hover{
    background: #fff;
    color: rgb(48, 68, 85);
  }
}
</style>