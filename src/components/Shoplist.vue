<template>
  <div class="shoplist">
    <div class="holder">
      <p v-if="shoplist.length>0">There is your shoplist:</p>
      <p v-else>There is no products on the shoplist</p>
      <ul>
        <li v-for="(data, index) in shoplist" :key='index'> {{ index }}. {{ data.product }}</li>
      </ul>
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
