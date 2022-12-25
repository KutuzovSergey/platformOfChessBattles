<template>
  <div class="container">
    <div class="row content">
      <div class="col-9">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <div class="container user">
                <div class="row">
                  <div class="col-4">
                    <div class="user__photo">
                      <img src="@/assets/user/user.png" alt="user">
                    </div>
                    <div class="user__change">
                      <button class="btn btn-secondary">изминить</button>
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="user__name">
                      <div class="user__name_block user__name_FCs">
                        <span>Елена</span>
                        <span>Абрамович</span>
                      </div>
                      <div class="user__name_block user__name_nickname">
                        <span>Игровой никнейм</span>
                        <span>Фемка</span>
                      </div>
                    </div>
                    <div class="user__rating row">
                      <div class="user__rating_image col-10">
                        <img src="@/assets/user/rating3.png" alt="rating">
                      </div>
                      <div class="col-2 user__rating-number">
                        <span>6/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="schedule"></div>
            </div>
            <div class="col-6 container">
              <div class="container user">
                <div class="row">
                  <div class="col-4">
                    <div class="user__photo">
                      <img src="@/assets/user/userUnknown.png" alt="user-unknown">
                    </div>
                    <div class="user__change">
                      <button class="btn btn-secondary">написать</button>
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="user__name">
                      <span>противник</span>
                    </div>
                    <div class="user__rating row">
                      <div class="user__rating_image col-10">
                        <img src="@/assets/user/rating1.png" alt="rating">
                      </div>
                      <div class="col-2 user__rating-number">
                        <span>1/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="schedule"></div>
            </div>
          </div>
        </div>
        <div class="finish_game">
          <button class="btn btn-secondary">начать игру</button>
        </div>
      </div>
      <div class="col-3 users">
        <div class="users__headline">
          <span>пользователи</span>
        </div>
        <div class="input-group">
          <input type="text" class="form-control users__search">
          <button class="btn btn-outline-secondary users__search" type="button">
            <img src="@/assets/icon/search.svg" alt="search">
          </button>
        </div>
        <div class="users__search-extra">
          <div class="users__search-extra-block">
            <label for="agreement" class="form-check-label users__search-extra-label">все</label>
            <input class="form-check-input users__search-extra-checkbox" type="checkbox">
          </div>
          <div class="users__search-extra-block">
            <label for="agreement" class="form-check-label users__search-extra-label">онлайн</label>
            <input class="form-check-input users__search-extra-checkbox" type="checkbox">
          </div>
        </div>
        <div class="users__list scrollspy-example">
            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="users__user row">
                <div class="users__photo-block col-3">
                  <div class="users__photo">
                    <img src="@/assets/user/user.png" alt="photo">
                  </div>
                </div>
                <div class="col-5 users__name">
                  <span>Diana</span>
                </div>
                <div class="col-2 users__rating-icon">
                  <img src="@/assets/user/rating0.png" alt="rating">
                </div>
                <div class="col-2 users__rating">
                  <span>5</span>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'UserContentComponent',
  components:{
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.content{
  margin-top: 50px;
}

.user{
  height: 230px;
  padding: 20px;
  box-shadow: 0 0 0 2px rgba(119, 118, 118, 0.2);

  &__photo{
    width: 100%;
    height: 150px;
  }

  &__change{
    width: 100%;
  }
  
  &__change>button{
    display: block;
    margin: auto;
  }

  &__name{
    height: 50px;
    display: flex;
  }

  &__name_block{
    width: 50%;
    height: 50px;
    display: flex;
    flex-direction: column;
  }

  &__rating-number{
    display: flex;
  }

  &__rating-number>span{
    margin: auto;
  }

  &__photo>img{
    width: 100%;
    height: 150px;
  }

  &__rating_image>img{
    width: 100%;
    height: auto;
  }
}

.schedule{
  width: 80%;
  height: 190px;
  margin: 30px auto 0 auto;
  background-color: dimgray;
}

.finish_game{
  width: 100%;
  height: auto;
  padding-top: 20px;
}

.finish_game>button{
  display: block;
  margin: auto;
}

.users{

  &__headline{
    width: 100%;
  }

  &__headline>span{
    display: block;
    margin: auto;
    text-align: center;
  }

  &__search{
    border-radius: 0;
  }

  &__search-extra{
    display: flex;
    width: 100%;
    height: 30px;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 0 0 0 2px rgba(119, 118, 118, 0.2);
    background-color: rgb(189, 185, 185);
  }

  &__search-extra-block{
    width: 50%;
    height: auto;
    margin: auto 0;
    padding: 0 20px;
    display: flex;
  }

  &__search-extra-checkbox{
    margin: auto 5px;
  }

  &__list{
    width: 100%;
    height: 430px;
    overflow: auto;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 0 0 0 2px rgba(119, 118, 118, 0.2);
    background-color: rgb(189, 185, 185);
  }

  &__user{
    cursor: pointer;
    background-color: #A9A9A9;
    border-bottom: 1px solid rgb(0, 0, 0);
  }

  &__user:hover{
    background-color: #D3D3D3;
  }

  &__photo-block{
    display: flex
  }

  &__photo{
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  &__photo>img{
    width: 100%;
    height: auto;
  }

  &__name{
    display: flex;
  }

  &__name>span{
    margin: auto 0;
  }

  &__rating-icon{
    display: flex;
  }

  &__rating-icon>img{
    width: 100%;
    height: auto;
    margin: auto;
  }

  &__rating{
    display: flex;
  }

  &__rating>span{
    margin: auto;
  }
}
  @import'~bootstrap/dist/css/bootstrap.css'
</style>
