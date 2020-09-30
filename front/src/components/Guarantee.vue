<template>
  <section class="guarantee">
    <div class="container">
      <img src="@/assets/img/back-logo.png">
      <div class="info">
        <h3>{{ txt[lg].g1 }}</h3>
        <h2>{{ txt[lg].g2 }}</h2>
        <p>{{ txt[lg].g3 }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Guarantee',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          g1: 'Ma garantie 30 jours',
          g2: 'Remboursement garantie',
          g3: `Nous vous garantissons que nos programmes fonctionnent. Essayez le pendant 30 jours et si vous n'êtes pas satisfait du résultat, nous vous remboursons. La seule chose que vous devez alors faire c'est de nous envoyer un email avec votre demande.`
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.guarantee{
  background: url('../assets/img/back-bg.jpg') no-repeat center center/cover;
  .container{
    padding: 30px;
    @media(min-width:768px){
      padding: 100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.info{
  padding-left: 0;
  @media(min-width:768px){
    padding-left: 50px;
  }
}
h3{
  font-family: 'Oswald', sans-serif;
  color: #fff;
  font-weight: 400;
  margin-bottom: 0;
  font-size: 26px;
  line-height: 1;
  @media(min-width:768px){
    font-size: 36px;
  }
}
h2{
  font-family: 'Oswald', sans-serif;
  color: #ff0000;
  line-height: 1.4;
  font-weight: 700;
  margin: 0 0 15px;
  font-size: 30px;
  @media(min-width:768px){
    margin: 0 0 30px;
    font-size: 60px;
  }
}
p{
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 1.4;
  @media(min-width:768px){
    font-size: 24px;
  }
}
</style>
