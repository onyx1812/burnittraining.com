<template>
  <footer class="main-footer" v-if="routeName !== 'Checkout'" ref="mainFooter">
    <section class="main-footer--container">
      <div class="container">
        <div class="logo">
          <img src="@/assets/img/logo-footer.png" alt="" height="20">
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="row">
            <div class="col">
              <ul>
                <li><a href="#" target="_blank">Home</a></li>
                <li><a href="#" target="_blank">Programs</a></li>
                <li><a href="#" target="_blank">Blog</a></li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <li><a href="#" target="_blank">Privacy Policy</a></li>
                <li><a href="#" target="_blank">Terms &amp; Conditions</a></li>
                <li><a href="#" target="_blank">Help Center</a></li>
              </ul>
            </div>
          </div>
          <p>© 2020 Burnit Traning, LLC. All rights reserved. Burnit Traning, LLC is the owner of the Burnit Traning and Burnit Traning trademarks, and all related designs, trademarks, copyrights, and other intellectual property. All other trademarks are owned by their respective owners.</p>
        </div>
        <div class="col-sm-8">
          <p>Les résultats peuvent varier en fonction de votre point de départ, de vos objectifs et de vos efforts. La pratique d’une activité physique et le suivi d’un régime alimentaire sont nécessaires pour obtenir et maintenir votre perte de poids et votre prise de masse. Les témoignages présentés sur notre site ont pu, dans certains cas, utiliser plusieurs produits BurnIt et ce sur une période plus longue que les 90 jours du programme afin de maximiser leurs résultats.</p>
          <p>Consultez votre médecin et suivez l’ensemble des instructions données avant d’entamer une activité physique, un régime alimentaire ou un programme de compléments alimentaires.</p>
          <p>L’ensemble de nos contenus présentés sur notre site internet et nos programmes ne sont proposés qu’à titre informatif. Ils n’ont pas vocation à se substituer à un quelconque avis médical ou à un diagnostique réalisé par un professionnel de santé.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    routeName(){
      return this.$route.name;
    }
  },
  mounted(){
    this.$parent.footerHeight = this.$refs.mainFooter.clientHeight;
  }
}
</script>
<style lang="scss" scoped>
.main-footer{
  color: rgba(0,0,0, .5);
  background-color: #eee;
  font-family: Arial,Helvetica,sans-serif;
  overflow: hidden;
  font-size: 10px;
  width: 100%;
  height: 150px;
  &--container{
    border-bottom: 1px solid rgba(0,0,0, .5);
    margin-bottom: 5px;
  }
}
.logo{
  padding: 5px 0 0;
}
a{
  color: rgba(0,0,0, .75);
  text-decoration: none;
  &:hover{
    color: rgba(0,0,0, .75);
  }
}
ul{
  padding: 0;
  margin-bottom: 5px;
}
li{
  padding: 5px 0 0;
  font-size: 10px;
}
p{
  margin-bottom: 5px;
  &:last-child{
    margin-bottom: 0;
  }
}
</style>