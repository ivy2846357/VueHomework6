<template>
  <h1 class="mt-5">這是購物車列表</h1>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      cartProduct: {},
    };
  },
  methods: {
    // 取得購物車商品資料
    getProduct() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.product = res.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 加入商品至購物車
    addProductToCart(id, qty = 1) {
      // 設定資料格式
      const cartProductData = {
        product_id: id,
        qty,
      };
      this.isLoading = id;
      // 加入購物車
      this.$http
        .post(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`,
          {
            data: cartProductData,
          }
        )
        .then((res) => {
          this.cartProduct = res.data.data;
          // 取消 loading
          this.isLoading = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
