<template>
  <div class="container">
    <div class="row content">
      <div class="col-6 content__block">
       <ChessboardComponent class="content__chessboard" />
      </div>
      <div class="col-6 content__info">
        <div class="content__headline">
          <h1>Платформа для онлайн игры в шахматы "Rubicon"</h1>
        </div>
        <div class="content__text">
          <p>Платформа "Rubicon" предназначина и разработана для онлайн игры в шахматы с реальнами людьми.</p>
          <p>Уважаемые пользователи прозьба соблюдать провила установленные администрацией сайта и элементарные нормы приличия в общение с другими пользователями!</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import ChessboardComponent from '@/components/ChessboardComponent.vue'

export default {
  name: 'HomeContentComponent',
  components:{
    ChessboardComponent
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

  &__block{
    display: flex;
    border-right: 1px solid #6c757d;
  }

  &__info{
    padding: 0 30px;
    border-left: 1px solid #6c757d;
  }

  &__chessboard{
    margin: auto;
  }
  
  &__headline{
    width: 100%;
    height: 50px;
  }

  &__headline>h1{
    margin: auto;
    text-align: center;
    font-size: 1.5rem;
  }
}
  @import'~bootstrap/dist/css/bootstrap.css'
</style>
