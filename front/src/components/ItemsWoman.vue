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
  name: 'ItemsWoman',
  data(){
    return {
      lg: this.$store.state.lang,
      items: {
        fr: [
          {
            img: require('@/assets/img/in-woman/in-1.jpg'),
            title: 'Entrainement mobile',
            text: `Emportez avec vous votre programme ou que vous alliez ! Grace à cette version mobile emmenez votre programme d'entrainement à la maison ou à la salle. Cette version spéciale pour votre mobile vous offre une description complète de vos exercices, des vidéos explicatives, ainsi que le nombre de répétitions et le temps de récupération entre chaque exercice. Pensé pour tous types d’appareils, téléphone, tablette ou ordinateur.`
          },
          {
            img: require('@/assets/img/in-woman/in-2.jpg'),
            title: 'Intro : Entrainez votre esprit',
            text: `30% de votre réussite dépend de votre stratégie et 70% de votre mental, c'est pour cela que pendant toutes ces années de régimes et d'entrainements j'ai dû apprendre à maitriser l'art de la motivation. Dans ce programme nous partageons avec vous une partie de mes secrets qui vous aideront à vous débarrasser de vos anciennes habitudes, de vos idées reçues et de tout risque de procrastination. Objectif : vous permettre de rester motivé et vous aidez à passer le cap pour que vous atteigniez vos objectifs.`
          },
          {
            img: require('@/assets/img/in-woman/in-3.jpg'),
            title: 'Notre guide de diet 1ere partie : débutant',
            text: `Apprenez les bases de la nutrition dont tout votre régime dépendra. Comprend également un guide qui vous explique comment construire votre propre programme d'alimentation afin de vous assurer que celui-ci correspond bien à votre objectif de perte de poids ou de prise de masse`
          },
          {
            img: require('@/assets/img/in-woman/in-4.jpg'),
            title: 'Notre guide de diet 2eme partie : avance',
            text: `Apres avoir appris les bases de la diététique, découvrez l'un des plus populaire, si ce n'est le plus populaire de tous les programmes de nutrition utilises par les modèles de fitness et différents athlètes à travers le monde. Nous voulons vous apprendre comment devenir un expert dans la création de vos propres régimes et comment l'adapter pour éviter l'effet de plateau ou lorsque vous modifiez vos objectifs.`
          },
          {
            img: require('@/assets/img/in-woman/in-5.jpg'),
            title: `Les dix commandements de l'entrainement avec poids.`,
            text: `La Bible a ses 10 commandements, l'entrainements avec poids aussi. Voici les principes que vous devez suivre au quotidien lorsque vous vous entrainez afin de tirer le plus d'efficacité de vos séances en temps limite. Apprenez à vous entrainer intelligemment.`
          },
          {
            img: require('@/assets/img/in-woman/in-6.jpg'),
            title: `Notre journal d'entrainement`,
            text: `Dans notre journal d'entrainement, je vous propose un programme exact d’exercices à suivre au quotidien pendant 90 jours. Nous vous précisons les jours ou vous devez aller à la salle ou vous entrainer chez vous, les exercices à faire, le nombre de répétitions, le nombre de circuits, le temps de récupération.... Ainsi vous êtes sûr de ne jamais être perdu avec ce que vous avez à faire lors de vos séances.`
          },
          {
            img: require('@/assets/img/in-woman/in-7.jpg'),
            title: 'Notre guide de Hiit cardio',
            text: `Dans ce guide nous vous présentons les meilleurs exercices de HIIT afin de déclencher le fameux effet de post combustion. Là où la plupart des exercices ne vous font bruler des calories que lorsque vous les réalisez les exercices en intervalle training vous permettent de continuer à bruler des calories même APRES votre séance. Vous trouverez dans notre programme HIIT cardio tous nos exercices détaillés. Il s’agit surement du changement le plus CRUCIAL que vous devriez apporter à votre routine. Rappelez-vous c'est 15 à 20 minutes d'exercices par séances 3 fois par semaine et vous pouvez dire adieu au tapis de course.`
          },
          {
            img: require('@/assets/img/in-woman/in-8.jpg'),
            title: 'Outro: Tout en un',
            text: `Il s’agit de vous accompagner pour garder la motivation tout au long de notre programme pendant ces 90 jours. Nous ne voulons pas que vous abandonniez nous voulons vous voir réussir et devenir la meilleure version de vous-même.`
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
      color: #000;
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
        color: #f92ef1;
      }
      img{
        @media(min-width:768px){
          order: 2;
        }
      }
    }
  }
}
</style>
