<template>
  <JmFullDialog v-if="show" @close="show = false">
    <div class="search-result">
      <div class="search-content slide-in-top">
        <p>实施采买-条件设定</p>
        <div class="flex">
          <Condition />
          <SecondRight />
        </div>
      </div>
    </div>
  </JmFullDialog>
</template>

<script>
import JmFullDialog from "@/components/JmFullDialog/index";
import SecondRight from "@/views/home/components/SecondRight";
import Condition from "@/views/home/components/Condition";
export default {
  name: "SearchResultDialog",
  components: { Condition, SecondRight, JmFullDialog },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped lang="scss">
.search-result {
  .slide-in-top {
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-top {
    0% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  p {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    padding-top: 12px;
    border-bottom: 1px solid #c8cdd1;
  }
}
</style>
