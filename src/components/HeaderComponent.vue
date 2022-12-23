<template>
  <header class="header container">
    <div class="row">
      <div class="header__logo logo col-sm">
        <img src="@/assets/logo.png" alt="logo" class="logo__img">
      </div>
      <nav class="header__menu-block col-sm">
        <ul class="header__menu list-inline">
          <li class="header__menu-item header__menu-item_text list-inline-item text-muted"><u>вход</u></li>
          <li class="header__menu-item list-inline-item text-muted">/</li>
          <li class="header__menu-item header__menu-item_text list-inline-item text-muted"><u>регистрация</u></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  },
  data(){
    return{}
  },
  methods: {
    openModal(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .logo{
    width: 120px;
    height: 120px;
  }
  .logo__img{
    widows: 120px;
    height: 120px;
  }

  .header__menu-block{
    display: flex;
    text-align: right;
    height: 120px;
  }

  .header__menu{
    margin: auto 0 auto 70%;
  }

  .header__menu-item_text{
    cursor: pointer;
  }

  @import'~bootstrap/dist/css/bootstrap.css'
</style>
