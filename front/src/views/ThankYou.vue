<template>
  <section class="thankyou-content">
    <div class="container">
      <h1>{{ txt[lg].h1 }}</h1>
      <div class="personal-data">
        <h3>{{ txt[lg].h3 }} <router-link to="member">HERE</router-link> or "MY STUFF" from the menu above!</h3>
        <ul class="data-list">
          <li>
            <b>Email:</b>
            <span>elenavarner789@gmail.com</span>
          </li>
          <li>
            <b>Password:</b>
            <span>UvAQEZAPUY</span>
          </li>
        </ul>
        <Video :mp4="require(`@/assets/video/${this.$store.state.q6}.mp4`)" />
        <h2>{{ txt[lg].h2 }}</h2>
        <p>{{ txt[lg].p }}</p>
        <div class="btn-box">
          <router-link class="btn btn-half" to="supplements-female" >{{ txt[lg].btn_female }}</router-link>
          <router-link class="btn btn-half" to="supplements-male">{{ txt[lg].btn_male }}</router-link>
        </div>
      </div>
      <div class="table-box">
        <table>
          <tbody>
            <tr>
              <td>{{ txt[lg].i1 }}</td>
              <td>$57.00</td>
            </tr>
            <tr>
              <td>{{ txt[lg].i2 }}</td>
              <td>$57.00</td>
            </tr>
            <tr>
              <td>{{ txt[lg].i3 }}</td>
              <td class="free">FREE!</td>
            </tr>
            <tr>
              <td>{{ txt[lg].i4 }}</td>
              <td class="free">FREE!</td>
            </tr>
            <tr>
              <td>{{ txt[lg].i5 }}</td>
              <td class="free">FREE!</td>
            </tr>
            <tr>
              <td>{{ txt[lg].i6 }}</td>
              <td class="free">FREE!</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">
                <span></span>
              </td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>$114.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
import Video from '@/components/Video.vue'
import Icon from '@/components/Icon.vue'
export default {
  name: 'ThankYou',
  components: {
    Video, Icon
  },
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h1: 'NOUS VOUS REMERCIONS POUR VOTRE COMMANDE!',
          h2: 'Ajoutez les compléments recommandés pour votre programme',
          h3: `Il s'agit des compléments alimentaires que nous recommandons pour votre programme. Sans être obligatoires, ils sont hautement recommandés.`,
          p: 'These are the recommended supplements for your programs. They are not required, but are highly recommended.',
          btn_female: 'Guide des compléments pour femmes',
          btn_male: 'Guide des compléments pour hommes',
          i1: `Programme sèche 90 jours`,
          i2: `Programme de diet sur mesure`,
          i3: `Programme special abdos ventre plat`,
          i4: `Programme booty builder`,
          i5: `Notre guide de recettes`,
          i6: `Compléments Greens`
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.thankyou-content{
  padding-top: 100px;
  padding-bottom: 60px;
  width: 100%;
}
.video-wrap button{
  display: none;
}
h1{
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
}
.personal-data{
  background: #fff;
  border: 1px solid #ececec;
  padding: 30px;
  border-radius: 6px;
  box-shadow: 0 23px 40px rgba(0,0,0,.2);
  max-width: 600px;
  margin: 0 auto 60px;
}
.table-box{
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 6px;
}
table{
  width: 100%;
  td{
    font-size: 14px;
    padding: 5px 30px;
    &.free{
      color: red;
    }
    &:last-child{
      text-align: right;
    }
  }
  tbody{
    tr{
      &:first-child{
        td{
          padding-top: 30px;
        }
      }
      &:last-child{
        td{
          padding-bottom: 15px;
        }
      }
    }
  }
  tfoot{
    tr{
      &:last-child{
        td{
          padding-bottom: 15px;
        }
      }
    }
    td{
      font-weight: 700;
      padding-top: 15px;
      &[colspan="2"]{
        span{
          display: block;
          background: #ececec;
          height: 1px;
        }
      }
    }
  }
}
h3{
  font-weight: 700;
  margin-bottom: 15px;
  a{
    color: #4a90e2;
    text-decoration: none;
  }
}
ul{
  display: block;
  margin-bottom: 15px;
  li{
    font-size: 12px;
    margin-top: 10px;
  }
  b{
    width: 100px;
    display: inline-block;
  }
  span{}
}
h2{
  background: #d9edf7;
  font-weight: 500;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 15px;
}
p{
  margin-bottom: 15px;
}
.btn{
  box-shadow: -2px 2px 0 #ccc;
  &:hover{
    background: #00356f;
  }
  &-half{
    width: 250px;
    font-size: 12px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
  }
  &-box{
    display: flex;
  }
}
</style>