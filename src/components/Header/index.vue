<template>
  <div class="home-header flex text-14">
    <div class="header-left flex items-center">
      <img alt="角马 logo" src="../../assets/img/logo-main.png" />
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
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.home-header {
  width: 100%;
  height: 80px;
  color: #415058;
  min-width: 800px;
  justify-content: space-between;
  .header-left {
    width: 350px;
    img {
      width: 120px;
      height: 32px;
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
          &:hover {
            background: #d0021b;
          }
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
</style>
