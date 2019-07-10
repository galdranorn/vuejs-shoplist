<template>
  <div id="app">
    <Shoplist />
  </div>
</template>

<script>
import Shoplist from './components/Shoplist.vue'

export default {
  name: 'app',
  components: {
    Shoplist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
