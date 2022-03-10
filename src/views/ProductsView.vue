<template>
  <h1 class="my-5">商品列表</h1>
  <!-- 商品列表 -->
  <div class="container">
    <div class="row row-cols-4 g-3">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card h-100" style="width: 18rem">
          <img :src="product.imageUrl" class="card-img-top" alt="..." />
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
            <router-link :to="`/product/${product.id}`" class="btn btn-primary"
              >產品簡介</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    // 取得購物車商品資料
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
