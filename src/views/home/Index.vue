<template>
  <div class="home">
    <Header />
    <div class="home-content">
      <h2 class="text-center">让能源更高效</h2>
      <div class="flex items-center justify-center">
        <input type="text" class="pl-16" />
        <img src="../../assets/img/search-icon.png" alt="" @click="search" />
        <div class="home-enquiry ml-16">
          <button @click="search">立即询价</button>
          <div class="home-dropdown">
            <a href="javascript:" @click="showUploadEnquiryDialog">
              <span class="ml-6">上传询价</span>
            </a>
            <a href="javascript:" @click="showUploadPicDialog">
              <span class="ml-6">上传图纸</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <UploadEnquiryDialog ref="uploadEnquiryDialog" />
    <UploadPicDialog ref="uploadPicDialog" />
    <SearchResultDialog ref="searchResultDialog" />
    <JmLoading text="正在匹配中..." v-if="isLoading" />
  </div>
</template>

<script>
import UploadEnquiryDialog from "@/views/home/dialog/UploadEnquiryDialog";
import UploadPicDialog from "@/views/home/dialog/UploadPicDialog";
import Header from "@/components/Header/index";
import JmLoading from "@/components/JmLoading/index";
import SearchResultDialog from "@/views/home/dialog/SearchResultDialog";
/**
 * 首页模块
 * @author lyh
 * @date 2019-11-21
 */

export default {
  name: "Home",
  components: {
    SearchResultDialog,
    JmLoading,
    Header,
    UploadPicDialog,
    UploadEnquiryDialog
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    showUploadEnquiryDialog() {
      this.$refs.uploadEnquiryDialog.show = true;
    },
    showUploadPicDialog() {
      this.$refs.uploadPicDialog.showPic = true;
    },
    search() {
      this.isLoading = true;
      setTimeout(() => {
        this.$refs.searchResultDialog.show = true;
        this.isLoading = false;
      }, 3000);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  /*width: 1200px;*/
  margin: 0 auto;
  padding: 0 100px;
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
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-left: -30px;
    }
    input {
      width: 420px;
      height: 40px;
      border-radius: 3px;
      border: 1px solid #d7262e;
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
