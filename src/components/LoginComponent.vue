<template>
  <div class="modal__window">
    <div class="card modal-window_body">
      <div class="card-header modal-window-head">
        <h5 class="card-title">Войти</h5>
        <button type="button" class="close" @click="closeLogin">
          <span>&times;</span>
        </button>
      </div>
      <form @submit.prevent="sendData" class="login card-body">
        <div class="mb-3">
          <label for="name" class="form-label modal__window-label">логин</label>
          <input 
            type="text" 
            name="name" 
            v-model.trim="login.neme" 
            class="form-control">
          <span v-if="v$.login.neme.$error" class="modal__error-text">Поле не заполнено</span>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label modal__window-label">пароль</label>
          <input 
            type="password" 
            name="password" 
            v-model.trim="login.password" 
            class="form-control">
          <span v-if="v$.login.password.$error" class="modal__error-text">Пароль не может быть меньше {{v$.login.password.minLength.$params.min}}</span>
        </div>
        <button class="btn btn-secondary modal__window-button" type="submit">вход</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
  name: 'LoginComponent',
  props: {
    msg: String
  },
  // settup () {
  //   return { v$: useVuelidate() }
  // },
  data() {
    return {
      v$: useVuelidate(),
      login: {
        neme: '',
        password: '',
      }
    };
  },
  methods: {
    closeLogin () {
      this.$store.dispatch('SET_LOGIN', false);
    },
    sendData () {
      this.v$.$validate();
      
      if(!this.v$.$error){
        this.$router.push('/user');
        this.$store.dispatch('SET_LOGIN', false);
        return
      }
      
    },
  },
  validations () {
    return {
      login: {
        neme: { required },
        password: { required, minLength: minLength(6) }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import'~bootstrap/dist/css/bootstrap.css'
</style>
