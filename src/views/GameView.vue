<template>
  <div class="game">
    <HeaderComponent />
    <GameComponent />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/HeaderComponent.vue'
import GameComponent from '@/components/GameComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'GameView',
  components: {
    HeaderComponent,
    GameComponent,
    FooterComponent,
  },
  data(){
    return {
    }
  }
}
</script>

<style lang="scss">
.home{
  height: 100%;
}
</style>
