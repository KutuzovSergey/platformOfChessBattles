<template>
  <footer class="container">
    <div class="row footer">
      <hr class="footer__line">
      <div class="footer__block">
        <a ref="#" class="footer__text">Полика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    msg: String
  },
  data(){
    return{}
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.footer{
  margin-top: 50px;

  &__line{
    width:  60%;
    height: 5px;
    margin: auto;
    border-radius: 100%;
    box-shadow: 2px 2px 2px 1px rgba(119, 118, 118, 0.2);
    background-color: #6c757d;
  }

  &__block{
    display: flex;
    width: 100%;
    height: 100px;
  }

  &__text{
    cursor: pointer;
    margin: auto;
  }
}

  @import'~bootstrap/dist/css/bootstrap.css'
</style>
