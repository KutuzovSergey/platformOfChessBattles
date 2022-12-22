<template>
  <div class="modal__window">
    <div class="card modal-window_body">
      <div class="card-header modal-window-head">
        <h5 class="card-title">Войти</h5>
        <button type="button" class="close">
          <span>&times;</span>
        </button>
      </div>
      <form action="" class="login card-body">
        <div class="mb-3">
          <label for="name" class="form-label modal__window-label">логин</label>
          <input type="text" name="name" class="form-control">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label modal__window-label">пароль</label>
          <input type="password" name="password" class="form-control">
        </div>
        <button class="btn btn-secondary modal__window-button">вход</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import'~bootstrap/dist/css/bootstrap.css'
</style>
