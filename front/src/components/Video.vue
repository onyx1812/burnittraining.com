<template>
  <div class="video-wrap">
    <video id="video" ref="video" width="100%">
      <source v-if="mp4" :src="mp4" type="video/mp4">
      <source v-if="ogg" :src="ogg" type="video/ogg">
    </video>
    <button @click="play">Cliquez ici pour commencer</button>
  </div>
</template>
<script>
export default {
  name: "Video",
  data(){
    return{
      time: 0
    }
  },
  props: {
    mp4: String,
    ogg: String
  },
  methods:{
    play(e){
      e.target.style.display = 'none';
      this.$refs.video.play();

      this.$refs.video.onplay = () => e.target.style.display = 'none';
      this.$refs.video.onended = () => e.target.style.display = 'block';
      this.$refs.video.onpause = () => e.target.style.display = 'block';

      let timeCounter = setInterval(()=>{
        this.time = this.$refs.video.currentTime.toFixed();
        if(this.time > 5){
          this.$parent.offerActive = true
        }
      }, 1000);
    }
  }
}
</script>
<style lang="scss" scoped>
.video-wrap{
  position: relative;
  margin-bottom: 15px;
  video{
    display: block;
    width: 100%;
    max-height: 700px;
  }
  button{
    position: absolute;
    z-index: 2;
    display: block;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    font-style:italic;
    background: none;
    border: none;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, .5);
    transition: font-size .2s ease;
    @media(min-width:768px){
      font-size: 50px;
    }
    &:hover{
      font-size: 55px;
      background: rgba(0,0,0, .2);
    }
  }
}
.thank-you .video-wrap button{
  display: none;
}
</style>