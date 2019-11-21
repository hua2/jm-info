<template>
  <div class="home">
    <div class="home-header flex text-14">
      <div class="header-left flex items-center">
        <h1 class="header-logo">
          <a href="#"
            ><img alt="角马 logo" class="logo core-phone" hidden="hidden" src=""
          /></a>
        </h1>
        <div class="">
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
        <div class="home-enquiry ml-16">
          <button>立即询价</button>
          <div class="home-dropdown">
            <a href="javascript:" @click="showUploadEnquiryDialog">
              <span>上传询价</span>
            </a>
            <a href="javascript:">
              <span>上传图纸</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <UploadEnquiryDialog ref="uploadEnquiryDialog"></UploadEnquiryDialog>
  </div>
</template>

<script>
import UploadEnquiryDialog from "@/views/home/dialog/UploadEnquiryDialog";
/**
 * 首页模块
 * @author lyh
 * @date 2019-11-21
 */

export default {
  name: "Home",
  components: { UploadEnquiryDialog },
  methods: {
    showUploadEnquiryDialog() {
      this.$refs.uploadEnquiryDialog.show = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  button {
    color: #fff;
    background-color: #d7262e;
    width: 92.8px;
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
    padding: 0 16px;
    width: 100%;
    height: 80px;
    color: #415058;
    .header-left {
      width: 250px;
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
  .home-dropdown {
    line-height: 32px;
    overflow: hidden;
    color: #415058;
    cursor: pointer;
    text-align: left;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 10px 0 rgba(39, 54, 78, 0.12),
      4px 12px 40px 0 rgba(39, 54, 78, 0.12);
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    font-size: 14px;
    width: 100%;
    a {
      display: block;
      padding: 6px 8px;
      &:hover {
        background-color: #f6f7f8;
        color: #1f292e;
      }
    }
  }
  .home-enquiry {
    position: relative;
    &:hover {
      .home-dropdown {
        display: block;
      }
    }
  }
}
</style>
