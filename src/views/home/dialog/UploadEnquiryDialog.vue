<template>
  <JmDialog @close="show = false" v-if="show" title="上传询价">
    <div class="upload-enquiry">
      <div class="flex justify-between items-center">
        <input type="file" />
        <button>确定</button>
      </div>
    </div>
  </JmDialog>
</template>

<script>
import JmDialog from "@/components/JmDialog/index";
export default {
  name: "UploadEnquiryDialog",
  components: { JmDialog },
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.upload-enquiry {
  input {
    width: 380px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #415058;
    padding: 6px;
  }
  button {
    color: #fff;
    background-color: #d7262e;
    width: 92.8px;
    text-align: center;
    border-radius: 2px;
    -webkit-box-shadow: none;
    box-shadow: none;
    border: none;
    padding: 0;
    height: 40px;
    line-height: 40px;
  }
}
</style>
