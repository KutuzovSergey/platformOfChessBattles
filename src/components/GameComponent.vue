<template>
  <div class="container">
    <div class="row content">
      <div class="col-3">
        <div class="chat">
          <div class="chat__headline">
            <span>чат</span>
          </div>
          <div class="chat__field">
            <div class="chat__message chat__message-first">
              <span>Привет</span>
            </div>
            <div class="chat__message chat__message-second">
              <span>Хочу трахаться</span>
            </div>
            <div class="chat__message chat__message-second">
              <span>Жёстко! Но не с тобой, у тебя не стоит :) Придётся найти когото с твёрдым членом.</span>
            </div>
            <div class="chat__message chat__message-first">
              <span>Зачем тогда мне об этом пишешь?</span>
            </div>
            <div class="chat__message chat__message-second">
              <span>Хочу, что бы на это посмотрел</span>
            </div>
            <div class="chat__message chat__message-second">
              <span>А ещё отбить тебе яйца) Не стоит же нормально, зачем они тебе? А так хоть я развликусь! Буду бить и давить твой мешочек прямо пока мен трахать будут, согласен?</span>
            </div>
            <div class="chat__message chat__message-first">
              <span>Да, почему бы и нет)</span>
            </div>
          </div>
          <div class="input-group">
            <textarea type="text" class="form-control chat__textarea" placeholder="написать сообщение" rows="1"></textarea>
            <button class="btn btn-outline-secondary chat__button" type="button">Отправить</button>
          </div>
        </div>
      </div>
      <div class="col-7 container">
        <div class="row">
          <div class="col-2">

            <div class="gamer-block">
              <div class="gamer">
                <div class="gamer__photo">
                  <img src="@/assets/user/userUnknown.png" alt="unknown">
                </div>
                <div class="gamer__name"> 
                  <span>Бешеный</span>
                </div>
              </div>

              <div class="gamer">
                <div class="gamer__photo">
                  <img src="@/assets/user/user.png" alt="user">
                </div>
                <div class="gamer__name"> 
                  <span>Нимфоманка</span>
                </div>
              </div>
            </div>

          </div>
          <div class="col-10">
            <ChessboardComponent />
          </div>
        </div>
      </div>
      <div class="col-2">

        <div class="killed">
          <div class="killed__image">
            <img src="@/assets/figures/pawn_black.png" alt="figure">
          </div>
          <div class="killed__number">
            <span>2</span>
          </div>
        </div>

        <div class="killed">
          <div class="killed__image">
            <img src="@/assets/figures/pawn_black.png" alt="figure">
          </div>
          <div class="killed__number">
            <span>2</span>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import ChessboardComponent from '@/components/ChessboardComponent.vue' 

export default {
  name: 'UserContentComponent',
  components:{
    ChessboardComponent,
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

.chat{

  &__headline{
    width: 100%;
    height: auto;

  }

  &__headline>span{
    display: block;
    margin: auto;
    text-align: center;
  }

  &__field{
    width: 100%;
    height: 400px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    // justify-content: flex-end;
    padding: 0.5rem 0.5rem 0 0.5rem;
    border-radius: 0.357rem 0.375rem 0 0;
    background-color: #e8e5e5;
    border: 1px solid #000000;
  }

  &__message{
    margin: 10px 0;
    padding: 10px;
    width: 90%;
  }

  &__message-first{
    margin-left: 10%;
    border-right: 2px solid #4e4a53;
    border-radius: 0 0.375rem 0 0;
    background-color: #4333fb97;
  }

  &__message-first>span{
    width: 100%;
    display: block;
    text-align: right;
  }

  &__message-second{
    border-left: 2px solid #4e4a53;
    border-radius: 0 0 0 0.375rem;
    background-color: #33fb6297;
  }

  &__message-second>span{
    width: 100%;
    display: block;
    text-align: left;
  }

  &__textarea{
    resize: none;
    border-radius: 0 0 0 0.375rem;
    border-bottom: 1px solid #000000;
    border-left: 1px solid #000000;
  }

  &__button{
    border-radius: 0 0 0.375rem 0;
    border-bottom: 1px solid #000000;
    border-right: 1px solid #000000;
  }
}

.gamer-block{
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.gamer{
  width: 100%;
  height: 100px;

  &__photo{
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
  }

  &__photo>img{
    width: 100%;
    height: auto;
  }

  &__name{
    width: 100%;
    height: auto;
    margin-top: 10px;
  }

  &__name>span{
    display: block;
    margin: auto;
    text-align: center;
  }
}

.killed{
  display: flex;

  &__image{
    width: 50px;
    height: 50px;
  }

  &__image>img{
    width: 50px;
    height: 50px;
  }
}
  @import'~bootstrap/dist/css/bootstrap.css'
</style>
