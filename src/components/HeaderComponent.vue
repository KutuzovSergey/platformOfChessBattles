<template>
  <header class="header container-fluid">
    <div class="row">
      <div class="header__logo logo col-sm">
        <img src="@/assets/logo.png" alt="logo" class="logo__img">
      </div>
      <nav class="header__menu-block col-sm">
        <ul class="header__menu list-inline">
          <li class="header__menu-item list-inline-item text-muted align-middle"><u>вход</u></li>
          <li class="header__menu-item list-inline-item text-muted">/</li>
          <li class="header__menu-item list-inline-item text-muted"><u>регистрация</u></li>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .logo{
    width: 160px;
    height: 160px;
  }
  .logo__img{
    widows: 160px;
    height: 160px;
  }

  .header__menu-block{
    height: 160px;
  }

  .header__menu{
    height: 160px;
  }

  @import'~bootstrap/dist/css/bootstrap.css'
</style>
