<template>
  <h1 class="my-5">{{ product.title }}</h1>
  <img :src="product.imageUrl" alt="product.title" />
</template>

<script>
export default {
  data() {
    return {
      product: [],
    };
  },
  methods: {
    // 取得購物車商品資料
    getProduct() {
      const { id } = this.$route.params;
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
