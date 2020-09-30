<template>
  <div class="step step-one">
    <h2>WHAT YOU GET TODAY</h2>
    <div class="table">
      <div class="table-row">
        <div class="table-label">Produit</div>
        <div class="table-value">{{item[this.$store.state.q6]}} FREE Bonuses</div>
      </div>
      <div class="table-row">
        <div class="table-label">Prix</div>
        <div class="table-value">${{price[this.$store.state.q6]}} USD One Time Payment</div>
      </div>
    </div>
    <ul class="list-options">
      <li v-for="option in options[this.$store.state.q6]">{{option}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'StepOne',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
        }
      },
      item: {
        q6_1: "Lot de 57 $ tonique en 90 jours",
        q6_2: 'Fat Loss Extreme for Her $ 57 Bundle',
        q6_3: 'Lot de 57 $ tonique en 90 jours',
        q6_4: 'Pack de 87 $ en vrac propre',
        q6_5: 'Pack de 57 $ déchiré en 90 jours',
        q6_6: 'Pack de 67 $ déchiré en 90 jours',
        q6_7: 'Fat Loss Extreme for Him 57 $ Bundle'
      },
      price: {
        q6_1: '57.00',
        q6_2: '57.00',
        q6_3: '57.00',
        q6_4: '87.00',
        q6_5: '57.00',
        q6_6: '67.00',
        q6_7: '57.00'
      },
      options: {
        q6_1: ['Toned In 90 Days', 'Six-Pack Shred', 'Recipe Guide', 'The Booty Builder', 'FREE Supplement Guide'],
        q6_2: ['Fat Loss Extreme for Her', 'Six-Pack Shred', 'Recipe Guide', 'The Booty Builder', 'FREE Supplement Guide'],
        q6_3: ['Tonifié en 90 jours', 'Six-Pack Shred', 'Guide de recettes', 'The Booty Builder', 'Guide de supplément GRATUIT'],
        q6_4: ['Clean Bulk Program', 'Six-Pack Shred', 'Recipe Guide', 'Big Arms Program', 'FREE Supplement Guide'],
        q6_5: ['Ripped In 90 Days', 'Six-Pack Shred', 'Recipe Guide', 'Big Arms Program', 'FREE Supplement Guide'],
        q6_6: ['Ripped In 90 Days', 'Six-Pack Shred', 'Recipe Guide', 'Big Arms Program', 'FREE Supplement Guide'],
        q6_7: ['Fat Loss Extreme for Him', 'Six-Pack Shred', 'Recipe Guide', 'Big Arms Program', 'FREE Supplement Guide']
      }
    }
  },
  mounted(){
    this.$store.state.amount = Number(this.price[this.$store.state.q6]);
  }
}
</script>
<style lang="scss" scoped>
.step{
  position: relative;
  &-one{
    padding-top: 15px;
    padding-bottom: 15px;
    @media(min-width:768px){
      padding-top: 50px;
      padding-bottom: 50px;
    }
    &:before{
      content:"";
      position: absolute;
      left: 10px; right: 10px;
      top: 30px; bottom: 10px;
      border: 2px solid #419bf9;
      border-radius: 10px;
      @media(min-width:768px){
        left: 25px; right: 25px;
        top: 75px; bottom: 25px;
      }
    }
  }
}
.list-options{
  padding: 0 30px;
  @media(min-width:768px){
    padding: 0 50px;
  }
  li{
    font-size: 14px;
    color: #333;
    line-height: 20px;
    &:before{
      content: "\25B6";
      font-size: 12px;
      color: #419bf9;
      display: inline-block;
      vertical-align: middle;
      margin-right: 7px;
    }
  }
}
.table{
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  padding-top: 15px;
  margin-bottom: 15px;
  @media(min-width:768px){
    padding: 0 50px;
    padding-top: 25px;
    margin-bottom: 30px;
  }
  &-row{
    flex: 1 60%;
    max-width: 60%;
    &:last-child{
      flex: 1 40%;
      max-width: 40%;
      text-align: right;
      .table-value{
        font-weight: 700;
      }
    }
  }
  &-label{
    font-family: 'Oswald', sans-serif;
    color: #333;
    font-size: 26px;
    font-weight: 700;
    border-bottom: 2px solid #ddd;
    margin-bottom: 5px;
    padding-bottom: 10px;
    @media(min-width:768px){
      font-size: 36px;
      margin-bottom: 15px;
    }
  }
  &-value{
    font-size: 16px;
    line-height: 1.2;
    padding-top: 15px;
    @media(min-width:768px){
      font-size: 27px;
    }
  }
}
</style>
