<template>
  <div class="container-fuild">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-8 col-10 mt-md-4 mt-6">
        <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
        <form id="form" class="form-signin" @submit="login">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
              v-model="username"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              v-model="password"
            />
            <label for="password">Password</label>
          </div>
          <button type="submit" class="btn btn-lg btn-primary w-100 mt-3">
            登入
          </button>
        </form>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2021~∞ - 六角學院</p>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const user = {
        username: this.username,
        password: this.password,
      };
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, user)
        .then((res) => {
          const { data } = res;
          if (data.success === true) {
            // 加入token
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)};`;
            this.$router.push('/admin/dashboard/products-list');
          } else {
            this.username = '';
            this.password = '';
          }
        })
        .catch((err) => {
          emitter.emit('alertMessage-open', err);
        });
    },
  },
};
</script>

<style lang="scss"></style>
