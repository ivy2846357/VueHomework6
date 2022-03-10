<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand px-3" to="/home">前台</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/home">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/products"
              >商品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/admin"
              >前往後台</router-link
            >
          </li>
        </ul>
        <router-link to="/cart" class="btn btn-primary">結帳</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      cartProduct: {
        carts: [],
      },
      // 控制 loading 啟用 / 取消
      isLoading: false,
    };
  },
  methods: {
    // 取得購物車清單
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
        )
        .then((res) => {
          console.log(res);
          this.cartProduct = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
