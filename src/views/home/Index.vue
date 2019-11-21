<template>
  <div class="home">
    <div class="home-header flex text-14">
      <div class="header-left flex items-center">
        <img alt="角马 logo" src="../../assets/img/logo.png" />
        <div class="ml-16">
          <a href="#" style="color: #D7262E">中文</a>
          <span class="ml-4 mr-4">/</span>
          <a class="en" href="#">EN</a>
        </div>
      </div>
      <div class="header-content">
        <ul class="flex items-center justify-between">
          <li>会员介绍</li>
          <li>信用体系</li>
          <li>技术保障</li>
          <li>帮助中心</li>
          <li><button>供应商入口</button></li>
        </ul>
      </div>
      <div class="header-right text-right">
        <span>欢迎，角马能源有限责任公司</span>
      </div>
    </div>
    <div class="home-content">
      <h2 class="text-center">让能源更高效</h2>
      <div class="flex items-center justify-center">
        <input type="text" class="pl-16" />
        <span class="ml-16"><button>立即询价</button></span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 首页模块
 * @author lyh
 * @date 2019-11-21
 */

export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  button {
    color: #fff;
    background-color: #d7262e;
    width: 92px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 2px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    padding: 0;
  }
  .home-header {
    width: 100%;
    height: 80px;
    color: #415058;
    .header-left {
      width: 350px;
      img {
        width: 50px;
        height: 36px;
      }
    }
    .header-content {
      width: 600px;
      ul {
        height: 80px;
        li {
          &:hover {
            color: #d7262e;
          }
        }
      }
    }
    .header-right {
      width: 350px;
      height: 80px;
      line-height: 80px;
    }
  }
  .home-content {
    margin-top: 200px;
    width: 100%;
    height: 400px;
    h2 {
      color: #415058;
      margin-right: 82px;
      font-weight: 400;
      letter-spacing: 6px;
      font-size: 32px;
      margin-bottom: 32px;
    }
    input {
      width: 420px;
      height: 40px;
      border-radius: 3px;
      border: 1px solid #415058;
    }
    button {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
