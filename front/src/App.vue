<template>
  <div id="app" class="Home">
    <Header/>
    <main class="main" ref="main">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  metaInfo() {
    return {
      title: "Burnit Traning",
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: require('@/assets/img/favicon.png')
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'
        },
        {
          name: 'keywords',
          content: 'burnittraning, training, burn, fat, protein, calories'
        },
        {
          name: 'copyright',
          content: '2020 Burn it Traning, LLC. All rights reserved.'
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent'
        },
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
        },
        {
          name: 'author',
          content: 'MaxGloba'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]
    }
  },
  data(){
    return {
      footerHeight: 0,
      headerHeight: 0,
      mainHeight: 0
    }
  },
  mounted(){
    this.mainHeight = this.headerHeight + this.footerHeight;
    this.$refs.main.style.minHeight = `calc(100vh - ${this.mainHeight+1}px)`;
  }
}
</script>
<style lang="scss" src="./assets/scss/style.scss"></style>
<style lang="scss" scoped>
#app{
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
.main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  flex: 1 100%;
  width: 100%;
  .checkout & {
    min-height: 100vh;
  }
}
</style>