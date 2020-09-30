<template>
  <div class="step step-two">
    <h3>1. {{ txt[lg].h3 }}</h3>
    <transition name="slide-fade">
      <div v-if="this.$store.state.step_two">
        <ul class="fields">
          <li class="field field-half">
            <span class="icon icon-men"></span>
            <input type="text" v-on:change="changeName" v-model="first_name" name="first_name" minlength="2" placeholder="Enter Your First Name" required>
          </li>
          <li class="field field-half">
            <span class="icon icon-men"></span>
            <input type="text" v-on:change="changeName" v-model="last_name" name="last_name" minlength="2" placeholder="Enter Your Last Name" required>
          </li>
          <li class="field">
            <span class="icon icon-email"></span>
            <input type="email" v-on:change="changeEmail" v-model="email" name="email" placeholder="Enter Your Email" required>
          </li>
          <li class="field">
            <span class="icon icon-phone"></span>
            <input type="tel" v-on:change="changePhone" v-on:input="inputPhone" v-model="phone" minlength="14" maxlength="14" placeholder="Enter Your Phone" required>
          </li>
          <li class="field">
            <a href="#" id="goTo" :class="(this.valid) ? 'btn': 'btn btn-disable'" @click="goToStepThree">{{ txt[lg].btn }}</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import Klaviyo from '@/services/Klaviyo.js'
export default {
  name: 'StepTwo',
  data(){
    return {
      lg: this.$store.state.lang,
      txt: {
        fr: {
          h3: 'Informations de facturation',
          btn: 'Suivant'
        }
      },
      valid: false,
      first_name: null,
      last_name: null,
      email: null,
      phone: null
    }
  },
  methods: {
    validation(){
      let contains = () => {
        let result = true;
        document.querySelectorAll('input').forEach(input => {
          if( input.classList.contains('no-valid') ) result = false;
        });
        return result;
      }
      if(this.first_name !== null && this.last_name !== null && this.email !== null && this.phone !== null && contains()){
        this.valid = true;
      } else {
        this.valid = false;
      }

      if(this.first_name !== null && this.last_name !== null && this.email !== null && contains()){
        Klaviyo.identify({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email
        });
      }
    },
    changeName(e){
      if(e.target.name === 'first_name'){
        this.$store.state.first_name = e.target.value;
      } else if(e.target.name === 'last_name'){
        this.$store.state.last_name = e.target.value;
      }
      if(e.target.value.length < e.target.minLength){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
      }
      this.validation();
    },
    changeEmail(e){
      const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if( !emailReg.test(e.target.value) ){
        e.target.classList.add('no-valid');
        alert('Email is wrong!');
      } else {
        e.target.classList.remove('no-valid');
        this.$store.state.email = e.target.value;
      }
      this.validation();
    },
    inputPhone(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s-)(]/g, '').split('');
      if(arr.length >= 1) arr.splice(0, 0, '(');
      if(arr.length > 4) arr.splice(4, 0, ') ');
      if(arr.length > 8) arr.splice(8, 0, '-');
      this.phone = arr.toString().replace(/[,]/g, '');
    },
    changePhone(e){
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s-)(]/g, '').split('');
      if(arr.length !== 10){
        e.target.classList.add('no-valid');
      } else {
        e.target.classList.remove('no-valid');
        this.$store.state.phone = e.target.value;
      }
      this.validation();
    },
    goToStepThree(e){
      e.preventDefault();
      if(this.$store.state.step_three){
        this.$store.state.step_three = false
      } else {
        this.$store.state.step_two = false;
        this.$store.state.step_three = true;
        setTimeout(()=>{
          document.querySelector('.step-three').scrollIntoView({block: "start", behavior: "smooth"});
        }, 250);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.step{
  position: relative;
  &-two{
    .icon{
      font-family: Arial, sans-serif;
      display: block;
      width: 46px;
      height: 46px;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 14.5px; top: 50%;
      transform: translate(0, -50%);
      &:before{
        font-size: 20px;
        color: #10253a;
      }
      &-men{
        &:before{content: "👤";}
      }
      &-email{
        &:before{content: "✉";}
      }
      &-phone{
        &:before{content: "☎";}
      }
    }
  }
}
</style>
