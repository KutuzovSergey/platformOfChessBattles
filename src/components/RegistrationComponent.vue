<template>
  <div class="modal__window">
    <div class="card modal-window_body">
      <div class="card-header modal-window-head">
        <h5 class="card-title">Регистрация</h5>
        <button type="button" @click="closeRegistration">
          <span>&times;</span>
        </button>
      </div>
      <form @submit.prevent="sendData" class="registration card-body">
        <div class="row">
          <div class="registration__photo col-sm">
            <div class="registration__photo-imges">
              <button 
                type="button" 
                class="registration__photo-delete" 
                v-if="deletePhoto"
                @click="deletePhotoUser">
                <span>&times;</span>
              </button>
              <img src="@/assets/user/user.png" alt="user" class="registration__user">
            </div>
            <div class="registration__photo-button">
              <button class="btn btn-secondary">
                <img src="@/assets/icon/camera.svg" alt="camera">
              </button>
              <button class="btn btn-secondary" @click.prevent="downloadImg">
                <img src="@/assets/icon/upload.svg" alt="upload">
              </button>
              <input 
                type="file" 
                v-show="false" 
                id="user_photo"
                @change='getUserPhoto'>
            </div>
          </div>
          <div class="col-sm">
            <div class="mb-3">
              <label for="name" class="form-label modal__window-label">логин</label>
              <input 
                type="text" 
                name="name" 
                class="form-control" 
                v-model="registration.name">
                <span v-if="v$.registration.name.$error" class="modal__error-text">обязательное поле</span>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label modal__window-label">пароль</label>
              <input 
                type="password" 
                name="password" 
                class="form-control"
                v-model="registration.password">
                <span v-if="v$.registration.password.$error" class="modal__error-text">обязательное поле</span>
                <span v-else-if="v$.registration.password.minLength" class="modal__error-text"></span>
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label modal__window-label">повторить пароль</label>
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="confirm password" 
                class="form-control"
                v-model="registration.confirmPassword">
            </div>
          </div>
        </div>

        <div>
          <div class="mb-3">
            <label for="number" class="form-label modal__window-label">номер</label>
            <input 
              type="text" 
              name="number" 
              class="form-control"
              v-model="registration.number">
          </div>
          <div class="mb-3">
            <label for="mail" class="form-label modal__window-label">почта</label>
            <input 
              type="text" 
              name="mail" 
              class="form-control"
              v-model="registration.mail">
          </div>
          <div class="row">
            <div class="col-sm">
              <div>
                <span>Выберите пол</span>
              </div>
              <div class="form-check">
                <input 
                  type="radio" 
                  class="form-check-input" 
                  name="woman"
                  vulue="woman"
                  v-model="registration.gender">
                <label class="form-check-label" for="woman">ж</label>
              </div>
              <div class="form-check">
                <input 
                  type="radio" 
                  class="form-check-input" 
                  name="male"
                  value="male"
                  v-model="registration.gender">
                <label class="form-check-label" for="male">м</label>
              </div>
              <div class="form-check">
                <input 
                  type="radio" 
                  class="form-check-input" 
                  name="third_gender"
                  value="third_gender"
                  v-model="registration.gender">
                <label class="form-check-label" for="third_gender">другое</label>
              </div>
            </div>
            <div class="col-sm">
              <div>
                <span>Выберите страну</span>
              </div>
              <div>
                <select class="form-select" name="country" id="">
                  <option value="Eretrea">Эретрея</option>
                  <option value="Russia">Россия</option>
                  <option value="Kyrgyzstan">Кыргызстан</option>
                  <option value="Kazakhstan">Казахстан</option>
                  <option value="Tajikistan">Таджикистан</option>
                  <option value="Ukraine">Украина</option>
                  <option value="Belarus">Белоруссия</option>
                  <option value="Canada">Канада</option>
                  <option value="Australia">Австралия</option>
                  <option value="Atlantis">Атлантида</option>
                  <option value="Turkey">Турция</option>
                  <option value="Germany">Германия</option>
                  <option value="Greece">Греция</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label for="agreement" class="form-check-label">Согласие на обработку персональных данных</label>
            <input 
              class="form-check-input" 
              type="checkbox" 
              id="agreement"
              value="true" 
              v-model="registration.agreement">
          </div>
        </div>
        
        <button class="btn btn-secondary modal__window-button" type="submit">регистрация</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
  name: 'RegistrationComponent',
  props: {
    msg: String
  },
  data () {
    return {
      v$: useVuelidate(),
      accept: [ '.png', '.jpg', '.jpeg', '.gif' ],
      registration: {
        img: null,
        name: null,
        password: null,
        confirmPassword: null,
        number: null,
        mail: null,
        gender: null,
        country: null,
        agreement: false,
      },
      deletePhoto: false,
    }
  },
  methods: {
    closeRegistration () {
      this.$store.dispatch('SET_REGISTRATION', false);
    },
    sendData () {
      console.log(this.registration);

      this.v$.$validate();

      if (!this.v$.$error) {
        this.$router.push('/user');
        this.$store.dispatch('SET_REGISTRATION', false);
      }
    },
    downloadImg () {
      const input = document.getElementById('user_photo');
      const params = this.accept;

      if( Array.isArray(params) ){
        input.setAttribute('accept', params.join(','));
      }
      
      input.click();
    },
    getUserPhoto (e) {

      if (!e.target.files.length) {
        return
      }

      const files = Array.from(e.target.files);

      files.forEach( file => {

        if (!file.type.match('image')) {
          return
        }

        const reader = new FileReader();

        reader.onload = ev => {
          const img = document.querySelector('img.registration__user');
          img.src = ev.target.result;
        }

        reader.readAsDataURL(file);
        this.deletePhoto = true;
        this.registration.img = file;
      }
     );
    },
    deletePhotoUser () {
      const img = document.querySelector('img.registration__user');
      img.src = '';
      this.registration.img = null;
      this.deletePhoto = false;
    },
  },
  validations: {
    registration: {
      name: { required },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.registration__photo{
  width: 200px;
  height: 260px;
}

.registration__photo-imges{
  width: 200px;
  height: 220px;
  overflow: hidden;
  position: relative;
}

.registration__photo-imges:hover .registration__photo-delete{
  opacity: 1;
}

.registration__photo-imges>img{
  width: 200px;
  height: auto;
}

.registration__photo-delete{
  opacity: 0;
  transition: opacity .20s;
  position: absolute;
  right: 0;
  top: 0;
}
.registration__photo-button{
  width: 100%;
  display: flex;
}

.registration__photo-button>button{
  width: 100%;
}

  @import'~bootstrap/dist/css/bootstrap.css'
</style>
