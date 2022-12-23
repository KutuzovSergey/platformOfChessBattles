<template>
  <div class="home">
    <HeaderComponent />
    <HomeContentComponent />
    <FooterComponent />
    <LoginComponent v-if="login" />
    <RegistrationComponent v-if="registration" />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import HomeContentComponent from '@/components/HomeContentComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import RegistrationComponent from '@/components/RegistrationComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    HomeContentComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
  },
  data(){
    return {
      login: false,
      registration: false
    }
  }
}
</script>

<style lang="scss">
.home{
  height: 100%;
}
.modal__window{
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.459);
}
.modal-window_body{
  margin: auto;
}
.modal-window-head{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
}

.modal__window-button{
  text-transform: uppercase;
}

.modal__window-label{
  margin: 0;
}

.modal__window-button{
  margin: 10px auto;
  display: block;
}
</style>
