<template>
  <div class="items">
    <div class="item" v-for="(item, i) in items[lg]">
      <img :src="item.img">
      <div class="item-info">
        <h3>{{item.title}}</h3>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemsMan',
  data(){
    return {
      lg: this.$store.state.lang,
      items: {
        fr: [
          {
            img: require('@/assets/img/in-man/in-1.jpg'),
            title: 'Entraînement mobile',
            text: 'Emportez avec vous votre programme à la salle ! Cette version spéciale pour votre mobile vous offre une description complète de vos exercices, des vidéos explicatives, ainsi que le nombre de répétitions et le temps de récupération entre chaque exercice. Pensez spécialement pour les mobiles même les plus petits.'
          },
          {
            img: require('@/assets/img/in-man/in-2.jpg'),
            title: 'Intro: Entraînez votre esprit',
            text: `Parce que pendant toutes ces années de régimes et d'entraînements j'ai dû apprendre à maîtriser l'art de la motivation. Ces e-mails sont ma manière de partager avec vous certains de mes secrets et de vous aider à remplacer vos mauvaises habitudes par de nouveaux réflexes.`
          },
          {
            img: require('@/assets/img/in-man/in-3.jpg'),
            title: 'Notre guide de diet 1ère partie : débutant',
            text: `Apprenez les bases de la nutrition dont tout votre régime dépendra. Comprend également un guide qui vous explique comment construire votre propre programme d'alimentation afin de vous assurer que celui-ci correspond bien à votre objectif de perte de poids ou de prise de masse.`
          },
          {
            img: require('@/assets/img/in-man/in-4.jpg'),
            title: `Notre guide de diet 2ème partie : avancé`,
            text: `Après avoir appris les bases de la diététique, découvrez l'un des plus populaire, si ce n'est le plus populaire de tous les programmes de nutrition utilisé par les modèles de fitness et différents athlètes à travers le monde. Nous voulons vous apprendre comment devenir un expert dans la création de vos propres régimes et comment l'adapter pour éviter l'effet de plateau ou lorsque vous modifiez vos objectifs. `
          },
          {
            img: require('@/assets/img/in-man/in-5.jpg'),
            title: `Les dix commandements de l'entraînement avec poids.`,
            text: `La Bible a ses 10 commandements, l'entraînement avec poids aussi. Voici les principes que vous devez suivre au quotidien lorsque vous vous entraînez afin  d’être le plus efficace possible pendant vos séances. Apprenez à soulever intelligemment.`
          },
          {
            img: require('@/assets/img/in-man/in-6.jpg'),
            title: `Notre journal d'entraînement`,
            text: `Dans notre journal d'entraînement, je vous propose un programme exact d'entraînement à suivre au quotidien pendant 90 jours. Nous vous précisons les jours où vous devez aller à la salle, les exercices à faire, le nombre de répétitions, le nombre de circuits, le temps de récupération.... Ainsi vous êtes sûr de ne jamais être perdu quand vous allez à la salle.`
          },
          {
            img: require('@/assets/img/in-man/in-7.jpg'),
            title: 'Notre guide de Hiit cardio',
            text: `Dans ce guide nous vous présentons les meilleurs exercices de HIIT afin de déclencher le fameux effet de post combustion. Là où la plupart des exercices ne vous font brûler des calories que lorsque vous vous entraînez, les exercices réalisés en intervalles training vous permettent de continuer à brûler des calories même APRES votre séance. Vous trouverez dans notre programme HIIT cardio tous nos exercices détaillés. Il s’agit sûrement du changement le plus CRUCIAL que vous devriez apporter à votre routine.`
          },
          {
            img: require('@/assets/img/in-man/in-8.jpg'),
            title: `Outro : Tout en un`,
            text: `Il s’agit de vous accompagner pour garder la motivation pour suivre notre programme pendant ces 90 jours. Nous ne voulons pas que vous abandonniez nous voulons vous voir réussir et devenir la meilleur version de vous-même.`
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.items{
  .item{
    text-align: center;
    margin: 0 auto;
    padding: 15px 0;
    background: url('../assets/img/bdr.png') no-repeat bottom center;
    @media(min-width:768px){
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      padding: 35px 0;
    }
    h3{
      color: #ff0000;
      font-size: 20px;
      line-height: 1.4;
      font-weight: 700;
      margin-bottom: 15px;
      text-transform: uppercase;
      text-align: center;
      font-family: 'Oswald', sans-serif;
      @media(min-width:768px){
        font-size: 30px;
        text-align: left;
      }
    }
    p{
      font-family: 'Lato', sans-serif;
      font-size: 16px;
      line-height: 1.4;
      color: #222222;
      @media(min-width:768px){
        font-size: 24px;
      }
    }
    &-info{
      padding: 0 10px;
      @media(min-width:768px){
        padding: 0 30px;
      }
    }
    &:nth-child(even){
      @media(min-width:768px){
        text-align: right;
      }
      h3{
        @media(min-width:768px){
          text-align: right;
        }
        color: #44b5fb;
      }
      img{
        order: 2;
      }
    }
  }
}
</style>
