<template>
  <div class="login-container">
    <div class="login-box">
      <h1><img class="logo" :src="src">Vue admin</h1>
      <div class="form">
        <div class="item">
          <span class="item-icon el-icon-user-solid"></span>
          <input class="item-content" type="text">
        </div>
      </div>
    </div>
    <div class="footer">2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require('@/assets/logo.png')
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
    line-height: 50px;

    h1 {
      text-align: center;
    }

    .logo {
      margin-right: 15px;
      vertical-align: middle;
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;

      .item {
        border: 2px solid rgb(139, 141, 137);
        border-radius: 10px;
        font-size: 20px;
        width: 400px;

        .item-icon {
          width: 40px;
          height: 40px;
          text-align: center;
          display: inline-block;
        }

        .item-content {
          display: inline-block;
          color: gray;
          width: 350px;
          height: 36px;
          border: none;
          background: #000;
          padding: 0;
          vertical-align: middle
        }
        .item-content:focus {
          border: none;
        }
      }
    }
  }
}
</style>