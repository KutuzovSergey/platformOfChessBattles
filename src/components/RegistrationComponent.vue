<template>
  <div class="modal__window">
    <div class="card modal-window_body">
      <div class="card-header modal-window-head">
        <h5 class="card-title">Регистрация</h5>
        <button type="button" class="close">
          <span>&times;</span>
        </button>
      </div>
      <form action="" class="registration card-body">
        <div class="row">
          <div class="registration__photo col-sm">
            <div class="registration__photo-imges">
              <img src="@/assets/user.png" alt="user">
            </div>
            <div class="registration__photo-button">
              <button class="btn btn-secondary">
                <img src="@/assets/icon/camera.svg" alt="camera">
              </button>
              <button class="btn btn-secondary">
                <img src="@/assets/icon/upload.svg" alt="upload">
              </button>
            </div>
          </div>
          <div class="col-sm">
            <div class="mb-3">
              <label for="name" class="form-label modal__window-label">логин</label>
              <input type="text" name="name" class="form-control">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label modal__window-label">пароль</label>
              <input type="password" name="password" class="form-control">
            </div>
            <div class="mb-3">
              <label for="repeatPassword" class="form-label modal__window-label">повторить пароль</label>
              <input type="password" name="repeatPassword" class="form-control">
            </div>
          </div>
        </div>

        <div>
          <div class="mb-3">
            <label for="name" class="form-label modal__window-label">номер</label>
            <input type="text" name="name" class="form-control">
          </div>
          <div class="mb-3">
            <label for="name" class="form-label modal__window-label">почта</label>
            <input type="text" name="name" class="form-control">
          </div>
          <div class="row">
            <div class="col-sm">
              <div>
                <span>Выберите пол</span>
              </div>
              <div class="form-check">
                <input type="radio" class="form-check-input" name="woman">
                <label class="form-check-label" for="woman">ж</label>
              </div>
              <div class="form-check">
                <input type="radio" class="form-check-input" name="male">
                <label class="form-check-label" for="male">м</label>
              </div>
              <div class="form-check">
                <input type="radio" class="form-check-input" name="third_gender">
                <label class="form-check-label" for="third_gender">другое</label>
              </div>
            </div>
            <div class="col-sm">
              <div>
                <span>Выберите страну</span>
              </div>
              <div>
                <select class="form-select" name="country" id="">
                  <option value="">Россия</option>
                  <option value="">Кыргистан</option>
                  <option value="">Казахстан</option>
                  <option value="">Украина</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <label for="agreement" class="form-check-label">Согласие на обработку персональных данных</label>
            <input class="form-check-input" type="checkbox" id="agreement">
          </div>
        </div>
        
        <button class="btn btn-secondary modal__window-button" type="submit">вход</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.registration__photo{
  width: 200px;
  height: 240px;
}

.registration__photo-imges{
  width: 200px;
  height: 200px;
}

.registration__photo-imges>img{
  width: 200px;
  height: 200px;
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
