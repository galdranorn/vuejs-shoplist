<template>
  <div class="shoplist">
    <div class="holder">

      <form @submit.prevent="addProduct">
        <input type="text" placeholder="Enter what you want to buy..." v-model="product" v-validate="'min:3'" name="product"/>
        <transition name="alert-in"> <!-- custom animation -->
          <p class="alert" v-if="errors.has('product')">{{ errors.first('product') }}</p>
        </transition>
      </form>
      <ul class="shoplist" v-if="shoplist.length>0">
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown"> <!-- animate.css -->
          <li v-for="(data, index) in shoplist" :key='index'>
            <span class="fa fa-minus-circle" v-on:click="removeProduct(index)" />
            {{ data.product }}
          </li>
        </transition-group>
      </ul>
      <p v-else>There is no products on the shoplist</p>
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
      })
    },
    removeProduct(id) {
      this.shoplist.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

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

  /* custom animation */
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% { transform: scale(0); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
  }

</style>
