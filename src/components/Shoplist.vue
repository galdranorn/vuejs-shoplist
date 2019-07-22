<template>
  <div class="shoplist">
    <div class="holder">

      <form @submit.prevent="addProduct">
        <input type="text" placeholder="Enter what you want to buy..." v-model="product" v-validate="'min:3'" name="product"/>
        <p class="alert" v-if="errors.has('product')">{{ errors.first('product') }}</p>
      </form>
      
      <p class="header" v-if="shoplist.length>0">There is your shoplist:</p>
      <p class="header" v-else>There is no products on the shoplist</p>
      <ul class="shoplist">
        <li v-for="(data, index) in shoplist" :key='index'>{{ data.product }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shoplist',
  data() {
    return {
      product: '',
      shoplist: [
        { "product": "cheese" },
        { "product": "beef steak" },
      ],
    }
  },
  methods: {
    addProduct() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.shoplist.push({product: this.product});
          this.product = '';
        }
        else {
          //console.log('Not valid')
        }
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

</style>
