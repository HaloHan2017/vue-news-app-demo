<template>
  <div>
    <form v-if="isLogin">
      <h2>登录</h2>
      <div>用户名：</div>
      <label>
        <input type="text" v-model="username">
      </label>
      <div>密码：</div>
      <label>
        <input type="password" v-model="password">
      </label>
      <br>
      <button type="button" @click="login()">登录</button>
      <button type="button" @click="reg()">注册</button>
    </form>
    <form v-else>
      <h2>注册</h2>
      <div>用户名：</div>
      <label>
        <input type="text" v-model="username">
      </label>
      <div>密码：</div>
      <label>
        <input type="password" v-model="password">
      </label>
      <div>确认密码：</div>
      <label>
        <input type="password" v-model="repeatPassword">
      </label>
      <br>
      <button type="button" @click="addUser()">注册</button>
      <button type="button" @click="cancel()">取消</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      isLogin: true,
      username: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('username') === this.username && localStorage.getItem('password') === this.password) {
        alert('登录成功，将跳转到主界面')
        this.$router.push('/home/list')
      } else {
        alert('用户名密码不正确')
      }
    },
    reg () {
      this.isLogin = false
    },
    addUser () {
      if (this.username === '' || this.password === '') {
        alert('请输入完整信息')
        return
      }
      if (this.password === this.repeatPassword) {
        localStorage.setItem('username', this.username)
        localStorage.setItem('password', this.password)
        alert('注册成功，将跳转到登录界面')
        this.username = ''
        this.password = ''
        this.isLogin = true
      } else {
        alert('两次密码不一致')
      }
    },
    cancel () {
      this.isLogin = true
    }
  }
}
</script>

<style scoped>

</style>
