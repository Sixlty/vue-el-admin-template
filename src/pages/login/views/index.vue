<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Vue admin</h1>
      <div class="form">
        <div class="item">
          <div class="content" :class="{'has-error': isUserNameError, 'active': !isUserNameError}">
            <span class="item-icon el-icon-user-solid"></span>
            <input v-model="form.userName" placeholder="请输入账号" class="item-content" type="text" @change="userNameChange">
          </div>
          <div v-if="isUserNameError" class="error-tip">{{ userNameErrorMsg }}</div>
        </div>
        <div class="item">
          <div class="content" :class="{'has-error': isPasswordError, 'active': !isPasswordError}">
            <span class="item-icon el-icon-unlock"></span>
            <input v-model="form.password" placeholder="请输入密码" class="item-content" type="password" @change="passwordChange">
          </div>
          <div v-if="isPasswordError" class="error-tip">{{ passwordErrorMsg }}</div>
        </div>
        <div class="btn">
          <button class="login-btn">登 录</button>
        </div>
      </div>
    </div>
    <div class="footer">
      xxx出品
    </div>
  </div>
</template>

<script>
import { userNameExp, passwordExp } from '@/global/regxp'
export default {
  data() {
    return {
      src: require('@/assets/logo.png'),

      isUserNameError: false,
      userNameErrorMsg: '',
      isPasswordError: false,
      passwordErrorMsg: '',

      form: {
        userName: '',
        password: '',
      }
    }
  },
  methods: {
    userNameChange(val) {
      if(!userNameExp.test(val.target.value)) {
        this.isUserNameError = true
        this.userNameErrorMsg = '请输入正确格式的账号'
      } else {
        this.isUserNameError = false
      }
    },
    passwordChange(val) {
      if(!passwordExp.test(val.target.value)) {
        this.isPasswordError = true
        this.passwordErrorMsg = '密码格式不正确'
      } else {
        this.isPasswordError = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  .login-box {
    margin-top: 20vh;
    line-height: 40px;

    h1 {
      text-align: center;
    }

    .logo {
      width: 45px;
      margin-right: 15px;
      vertical-align: middle;
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      .item {
        width: 400px;
        padding-bottom: 25px;
        margin-bottom: 10px;
        height: 64px;

        .content {
          border: 2px solid rgb(139, 141, 137);
          background-color:rgb(31, 30, 30);
          border-radius: 10px;
          height: 40px;
          line-height: 32px;
          font-size: 20px;
          .item-icon {
            width: 40px;
            height: 25px;
            text-align: center;
            display: inline-block;
          }

          .item-content {
            display: inline-block;
            font-size: 15px;
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
            color: rgb(163, 162, 162);
            width: 350px;
            height: 25px;
            line-height: 25px;
            border: none;
            padding: 0;
            vertical-align: middle;
            background-color:rgb(31, 30, 30);
          }
          .item-content:focus {
            outline-color: rgb(31, 30, 30);
          }
        }
        .has-error {
          border-color:rgb(201, 35, 35);
        }
      }

      .active:hover, .active:focus {
        border-color: rgb(60, 150, 185);
      }

      .btn {
        margin-top: 40px;
        .login-btn {
          display: inline-block;
          width: 400px;
          background-color: rgb(60, 150, 185);
          border: none;
          border-radius: 5px;
          padding: 10px 10px;
          font-size: 15px;
          cursor: pointer;
        }

        .login-btn:focus {
          outline: none;
        }
        .login-btn:hover {
          background-color: rgb(67, 173, 214);
        }
      }
    }
    .error-tip {
      line-height: 20px;
      font-size: 14px;
      width: 400px;
      color: rgb(168, 40, 40);
    }

  }

  .footer {
    position: fixed;
    bottom: 20px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    color:rgb(139, 141, 137);
  }
}
</style>