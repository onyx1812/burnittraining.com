
<template>
  <div class="bonuses">
    <div class="bonus-header">
      <img src="@/assets/img/bonus-header.jpg" alt="">
    </div>
    <div class="bonus" v-for="(bonus, i) in bonuses[lg]">
      <img :src="bonus.img" >
      <div class="bonus-info">
        <h3>{{bonus.title}} <span>{{bonus.norm}}</span></h3>
        <h4>{{bonus.subtitle}}</h4>
        <p>{{bonus.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BonusWoman',
  data(){
    return {
      lg: this.$store.state.lang,
      bonuses: {
        fr: [
          {
            img: require('@/assets/img/ftt-woman/ftt-1.jpg'),
            title: 'Bonus gratuit #1:',
            norm: '(normalement à 47 euros)',
            subtitle: 'Notre pack spécial abdos ventre plat',
            text: `Pour celles qui ont TOUJOURS voulu ce fameux ventre plat plus que tout, ce programme est indispensable. Un véritable must have. Notre programme vous expliquera exactement quels sont les bons exercices à réaliser et quel plan de nutrition adopter pour faire ressorti vos abdos. Grace à nos exercices de cardio qui vous permettrons d'éliminer la dernière couche de graisse, même le bas de vos abdos apparaitront. Notre programme est conçu pour une progression de débutant à expert en passant par un niveau intermédiaire. Objectif : ventre plat.`
          },
          {
            img: require('@/assets/img/ftt-woman/ftt-2.jpg'),
            title: 'Bonus gratuit #2:',
            norm: '(normalement à 47 euros)',
            subtitle: 'Notre programme booty builder',
            text: `Obtenez enfin les fesses de vos rêves. Il s’agit d’un de nos programmes les plus demandés. Si, comme la plupart des femmes que j'ai aidée, peu importe ce que vous avez essayez, vous n'arrivez pas à obtenir ce look que vous recherchez tant. Voici le programme PARFAIT que vous devez suivre pour avoir des jolies fesses pour votre bikini ou vos jeans moulants. Pour obtenir des résultats rapides, vous DEVEZ suivre un plan d'entrainement parallèle qui se concentre sur toutes les parties de votre fessier. Chaque entrainement de ce programme est pensé, réfléchi et imaginé pour vous aider à obtenir des fesses parfaites.`
          },
          {
            img: require('@/assets/img/ftt-woman/ftt-3.jpg'),
            title: 'Bonus gratuit #3:',
            norm: '(normalement à 37 euros)',
            subtitle: 'Notre guide de recettes',
            text: `Si vous ne deviez ne manger que des blancs de poulet bouillis à l'eau, des brocolis ou autres repas fades et sans gout à chaque repas vous abandonnerez rapidement. Mais si vous aviez la possibilité de faire de bons repas qui ne vous laissent pas sur votre faim, vous seriez alors capable de tenir votre régime sur la longueur. Croyez-le nous avons plus conscience que n'importe qui d'autre et c'est exactement pour cela que nous avons travaillé en collaboration avec un véritable chef pour créer pour vous ces recettes spéciales. Elles ont toutes un super gout et surtout elles sont toutes parfaitement saines. Sachant que 80% de votre succès dépend de votre alimentation, ce guide de recette est le meilleur allie de votre réussite.`
          },
          {
            img: require('@/assets/img/ftt-woman/ftt-4.jpg'),
            title: 'Bonus gratuit #4:',
            norm: ' ',
            subtitle: 'Notre guide spécial compléments alimentaires',
            text: `La plupart des compléments sont bons à mettre à la poubelle et ne vous font que perdre votre argent. Mais certains sont efficaces et donnent des résultats fantastiques. Mais rappelez-vous que les compléments ne peuvent justement qu'être complémentaires, ils ne sont pas magiques. Ce guide vous explique et vous présente les quelques compléments qui marchent. Nous vous précisons à quel moment il faut les prendre et comment ils fonctionnent. Ainsi vous pouvez enfin arrêter de gaspiller votre argent dans des compléments inutiles et enfin obtenir des résultats.`
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.bonus-header{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  @media(min-width:768px){
    background: url('../assets/img/bu-h-bg.jpg') no-repeat 0 15px/100% auto;
  }
}
.bonus{
  border: 5px solid #f92ef1;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 0 15px 0px rgba(0,0,0,.5);
  text-align: center;
  margin: 10px auto;
  @media(min-width:768px){
    text-align: right;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
  }
  &-info{
    padding-right: 5px;
    padding-left: 5px;
    @media(min-width:768px){
      padding-right: 50px;
      padding-left: 50px;
    }
  }
  h3{
    font-family: 'Oswald', sans-serif;
    text-align: center;
    color: #f92ef1;
    font-size: 26px;
    line-height: 1.4;
    font-weight: 700;
    margin-bottom: 0;
    text-transform: uppercase;
    @media(min-width:768px){
      font-size: 36px;
      text-align: right;
    }
    span{
      color: #000;
      font-size: 90%;
    }
  }
  h4{
    font-family: 'Oswald', sans-serif;
    color: #252525;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 30px;
      line-height: 42px;
    }
  }
  p{
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    color: #222222;
    @media(min-width:768px){
      font-size: 18px;
    }
  }
  img{
    @media(max-width:767px){
      width: 200px;
    }
    @media(min-width:768px){
      order: 2;
    }
  }
  &:nth-child(even){
    @media(min-width:768px){
      text-align: left;
      h3{
        text-align: left;
      }
      img{
        order: 0;
      }
    }
  }
}
</style>
