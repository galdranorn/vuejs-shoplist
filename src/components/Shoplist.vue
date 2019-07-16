<template>
  <div class="shoplist">
    <div class="holder">
      <p class="header" v-if="shoplist.length>0">There is your shoplist:</p>
      <p class="header" v-else>There is no products on the shoplist</p>
      <ul class="shoplist">
        <li v-for="(data, index) in shoplist" :key='index'> {{ index }}. {{ data.product }}</li>
      </ul>
      <div v-bind:class="{ alert: showAlert, 'hello': showHello }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shoplist',
  data() {
    return {
      shoplist: [
        { "product": "cheese" },
        { "product": "beef steak" },
      ],
      showAlert: true,
      showHello: false, // change to true to make background red
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .alert {
    background-color: yellow;
    width: 100%;
    height: 30px;
  }
  .hello {
    background-color: red;
    width: 100%;
    height: 30px;
  }
</style>
