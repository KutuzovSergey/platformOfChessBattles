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
                :class="[v$.registration.name.$error ? 'modal__error-form' : '']" 
                placeholder="никнейм"
                v-model="stete.registration.name">
                <span v-if="v$.registration.name.$error" class="modal__error-text">обязательное поле</span>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label modal__window-label">пароль</label>
              <input 
                type="password" 
                name="password" 
                class="form-control"
                :class="[v$.registration.password.minLength.$error || v$.registration.password.$error ? 'modal__error-form' : '']"
                placeholder="пароль для входа"
                v-model="stete.registration.password">
                <!-- <span v-if="v$.registration.password.$error" class="modal__error-text">обязательное поле</span> -->
                <span 
                  v-if="v$.registration.password.minLength.$invalid"
                  class="modal__error-text">пароль не может быть меньше {{v$.registration.password.minLength.$params.min}}</span>
                <span v-else-if="v$.registration.password.$error" class="modal__error-text">обязательное поле</span>
                  
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label modal__window-label">повторить пароль</label>
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="повторите пароль" 
                class="form-control"
                :class="[v$.registration.confirmPassword.sameAs.$invalid || v$.registration.confirmPassword.$error ? 'modal__error-form' : '']"
                v-model="stete.registration.confirmPassword">
                <span v-if="v$.registration.confirmPassword.sameAs.$invalid" class="modal__error-text">пароль не совпадает</span>
                <span v-else-if="v$.registration.confirmPassword.$error" class="modal__error-text">обязательное поле</span>
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
              :class="[ v$.registration.number.$error ? 'modal__error-form' : '' ]"
              placeholder="+7 (XXX) XXX-XX-ХХ"
              v-model="stete.registration.number">
            <span v-if="v$.registration.number.$error" class="modal__error-text">обязательное поле</span>
          </div>
          <div class="mb-3">
            <label for="mail" class="form-label modal__window-label">почта</label>
            <input 
              type="text" 
              name="mail" 
              class="form-control"
              :class="[ v$.registration.mail.email.$invalid || v$.registration.mail.$error ? 'modal__error-form' : '']"
              placeholder="XXXXXXXX@XXXX.XX"
              v-model="stete.registration.mail">
            <span v-if="v$.registration.mail.email.$invalid" class="modal__error-text">некорректный email</span>
            <span v-else-if="v$.registration.mail.$error" class="modal__error-text">обязательное поле</span>
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
                  name="gender"
                  id="woman"
                  vulue="woman"
                  v-model="stete.registration.gender">
                <label class="form-check-label" for="woman">ж</label>
              </div>
              <div class="form-check">
                <input 
                  type="radio" 
                  class="form-check-input" 
                  name="gender"
                  id="male"
                  value="male"
                  checked
                  v-model="stete.registration.gender">
                <label class="form-check-label" for="male">м</label>
              </div>
              <div class="form-check">
                <input 
                  type="radio" 
                  class="form-check-input" 
                  name="gender"
                  id="third_gender"
                  value="third_gender"
                  v-model="stete.registration.gender">
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
          <div class="registration__checkbox-block">
            <label 
              for="agreement"
              :class="[ v$.registration.agreement.$error ? 'modal__error-text' : '' ]"
              class="form-check-label registration__checkbox-text"
              >Согласие на обработку персональных данных</label>
            <input 
              class="form-check-input registration__checkbox"
              :class="[ v$.registration.agreement.$error ? 'modal__error-checkbox' : '' ]" 
              type="checkbox" 
              id="agreement"
              value="true" 
              v-model="stete.registration.agreement">
          </div>
        </div>
        
        <button class="btn btn-secondary modal__window-button" type="submit">регистрация</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, email, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  name: 'RegistrationComponent',
  props: {
    msg: String
  },
  setup(){
    const stete = reactive({
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
    });

    const rules = computed(() => {
      return {
        registration: {
          name: { required },
          password: { required, minLength: minLength(6) },
          confirmPassword: { required, sameAs: sameAs(stete.registration.password) },
          number: { required },
          mail: { required, email },
          agreement: { required, sameAs: sameAs(true) },
        }
      }
    });

    const v$ = useVuelidate(rules, stete);

    return {
      stete,
      v$
    }
  },
  data () {
    return {
      accept: [ '.png', '.jpg', '.jpeg', '.gif' ],
      deletePhoto: false,
    }
  },
  methods: {
    closeRegistration () {
      this.$store.dispatch('SET_REGISTRATION', false);
    },
    sendData () {
      console.log(this.v$.registration.agreement);
      // console.log(this.v$.registration.password.required);
      // console.log(this.v$.registration.email.required);

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
  // validations: {
    
  // }
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

.registration__checkbox-block{
  display: flex;
}

.registration__checkbox-text{
  margin: auto 0;
}

.registration__checkbox{
  margin: auto .5rem;
}

  @import'~bootstrap/dist/css/bootstrap.css'
</style>
