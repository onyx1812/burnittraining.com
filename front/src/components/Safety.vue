<template>
  <section class="safety">
    <div class="container">
      <div class="safety-list">
        <img src="@/assets/img/safety/s1.jpg">
        <img src="@/assets/img/safety/s2.jpg">
        <img src="@/assets/img/safety/s3.jpg">
      </div>
      <div class="safety-posts">
        <div class="safety-post">
          <img src="@/assets/img/safety/s4.jpg">
          <h6>100% RISK FREE</h6>
          <p>If you decide that the program isn’t right for you, just let us know and you’ll be issued a full and prompt refund, no questions asked.</p>
        </div>
        <div class="safety-post">
          <img src="@/assets/img/safety/s5.jpg">
          <h6>CREDIT CARD INFO IS 100% SAFE</h6>
          <p>All orders are through an SSL secure network. Your credit card information is never stored in any way. We respect your privacy.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Safety'
}
</script>
<style lang="scss" scoped>
.safety{
  &-list{
    display: flex;
    background: #eee;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 40px;
    @media(min-width:768px){
      padding: 50px;
    }
    img{
      @media(max-width:768px){
        width: 80px;
      }
    }
  }
}
.safety{
  &-posts{
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    padding-bottom: 30px;
    @media(min-width:768px){
      padding-top: 50px;
      padding-bottom: 100px;
    }
  }
  &-post{
    flex: 1 50%;
    max-width: 50%;
    padding: 0 10px;
    text-align: center;
    @media(min-width:768px){
      padding: 0 30px;
    }
    img{
      display: block;
      margin: 0 auto 15px;
      height: 100px;
    }
    h6{
      font-family: 'Oswald', sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 0.8em;
      margin: .5em 0;
      @media(min-width:768px){
        font-size: 1.17em;
        margin: 1em 0;
      }
    }
    p{
      margin: .5em 0;
      font-size: 11px;
      @media(min-width:768px){
        margin: 1em 0;
        font-size: 16px;
      }
    }
  }
}
</style>
