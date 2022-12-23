<template>
  <div class="chessboard">
    <div class="chessboard__coordinatesY">
      <div class="chessboard__coordinatesY-cage chessboard__coordinatesY-border">
        <span class="chessboard__coordinatesY-text">8</span>
      </div>
      <div class="chessboard__coordinatesY-cage">
        <span class="chessboard__coordinatesY-text">7</span>
      </div>
      <div class="chessboard__coordinatesY-cage">
        <span class="chessboard__coordinatesY-text">6</span>
      </div>
      <div class="chessboard__coordinatesY-cage">
        <span class="chessboard__coordinatesY-text">5</span>
      </div>
      <div class="chessboard__coordinatesY-cage">
        <span class="chessboard__coordinatesY-text">4</span>
      </div>
      <div class="chessboard__coordinatesY-cage">
        <span class="chessboard__coordinatesY-text">3</span>
      </div>
      <div class="chessboard__coordinatesY-cage">
        <span class="chessboard__coordinatesY-text">2</span>
      </div>
      <div class="chessboard__coordinatesY-cage">
        <span class="chessboard__coordinatesY-text">1</span>
      </div>
    </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__coordinatesX">
          <span class="chessboard__coordinatesX-texst">A</span>
        </div>
      </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__coordinatesX">
          <span class="chessboard__coordinatesX-texst">B</span>
        </div>
      </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__coordinatesX">
          <span class="chessboard__coordinatesX-texst">C</span>
        </div>
      </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__coordinatesX">
          <span class="chessboard__coordinatesX-texst">D</span>
        </div>
      </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__coordinatesX">
          <span class="chessboard__coordinatesX-texst">E</span>
        </div>
      </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__coordinatesX">
          <span class="chessboard__coordinatesX-texst">F</span>
        </div>
      </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__coordinatesX">
          <span class="chessboard__coordinatesX-texst">G</span>
        </div>
      </div>
      <div class="chessboard__column">
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__cage chessboard__cage-black"></div>
        <div class="chessboard__cage chessboard__cage-white"></div>
        <div class="chessboard__coordinatesX chessboard__coordinatesX-border">
          <span class="chessboard__coordinatesX-texst">H</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ChessboardComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.chessboard{
  display: grid;
  grid-template-columns: 20px 50px 50px 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 420px;
}

.chessboard__cage{
  widows: 50px;
  height: 50px;
  border: 1px solid rgb(3, 3, 3);
}

.chessboard__cage-white{
  background-color: rgb(246, 218, 185);
}

.chessboard__cage-black{
  background-color: rgb(40, 49, 57);
}

.chessboard__coordinatesY{
  background-color: rgb(185, 201, 214);
}
.chessboard__coordinatesY-cage{
  display: flex;
  width: 20px;
  height: 50px;
  border-left: 1px solid rgb(3, 3, 3);
  border-bottom: 1px solid rgb(3, 3, 3);
}

.chessboard__coordinatesY-border{
  border-top: 1px solid rgb(3, 3, 3);
}

.chessboard__coordinatesY-text{
  margin: auto;
}

.chessboard__coordinatesX{
  display: flex;
  width: 50px;
  height: 20px;
  border-left: 1px solid rgb(3, 3, 3);
  border-bottom: 1px solid rgb(3, 3, 3);
  background-color: rgb(185, 201, 214);
}

.chessboard__coordinatesX-border{
  border-right: 1px solid rgb(3, 3, 3);
}

.chessboard__coordinatesX-texst{
  margin: auto;
}
  @import'~bootstrap/dist/css/bootstrap.css'
</style>
