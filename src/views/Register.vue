<template>
  <formbg :openSimple="openSimple" :dialogMsg="dialogMsg" @closeSimple="closeSimpleDialog">
    <div class="container">
      <h1>用户注册</h1>
      <form class="form">
        <input type="text" placeholder="输入账号" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <input type="password" placeholder="请再次输入密码" v-model="repassword">
        <mu-button v-loading="loading" data-mu-loading-size="24" @click="registerSubmit()">注册</mu-button>
        <div class="link-box">
          <router-link to="/login" class="link">已有账号？去登录</router-link>
        </div>
      </form>
    </div>
  </formbg>
</template>

<script>
import formbg from '@/components/formbg'
export default {
  name: 'login',
  components: {
    formbg
  },
  data () {
    return {
      loading: false,
      username: '',
      password: '',
      repassword: '',
      openSimple: false,
      dialogMsg: ''
    }
  },
  methods: {
    registerSubmit () {
      if (this.username !== '' && this.password.length >= 6 && this.password === this.repassword) {
        this.loading = true
        this.api.register(this.username, this.password).then((response) => {
          console.log(response)
          if (response.data.success) {
            this.$router.push('/editor')
          } else {
            this.dialogMsg = response.data.message
            this.openSimple = true
          }
        }).catch((error) => {
          this.openSimple = true
          console.log(error)
        })
        this.loading = false
      } else {
        if (this.username === '') {
          this.dialogMsg = '用户名不能为空！'
        } else if (this.password.length < 6) {
          this.dialogMsg = '密码长度不能小于6！'
        } else {
          this.dialogMsg = '两次输入的密码不一致！'
        }
        this.openSimple = true
      }
    },
    closeSimpleDialog () {
      this.openSimple = false
    }
  }
}
</script>

<style lang="scss" scoped>

.container h1 {
  margin: 0;
  font-size: 40px;
  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  color: #fff;
}
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
form > input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 50px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  font-weight: 300;
}
form > input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
form > input:focus {
  background-color: white;
  width: 300px;
  color: #53e3a6;
}
form button {
  height: auto;
  line-height: normal;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background-color: #fff;
  border: 0;
  padding: 10px 15px;
  color: #53e3a6;
  border-radius: 50px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  box-shadow: none;
  display: block;
  margin: 0 auto;
}
form button:hover {
  background-color: #f5f7f9;
}
form .link-box{
  width: 250px;
  margin: 0 auto;
  text-align: right;
  margin-top: 10px;
  .link{
    color: #fff;
  }
}

</style>
