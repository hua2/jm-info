<template>
  <JmFullDialog v-if="show" @close="show = false">
    <div class="search-result">
      <div
        class="search-content"
        :class="show ? 'slide-in-top' : 'slide-out-top'"
      >
        <p>实施采买-条件设定</p>
        <div class="flex">
          <Condition style="width: 60%" />
          <SecondRight style="width: 40%" />
        </div>
      </div>
    </div>
  </JmFullDialog>
</template>

<script>
import JmFullDialog from "@/components/JmFullDialog/index";
import Condition from "@/views/home/components/condition/Index";
import SecondRight from "@/views/home/components/SecondRight";
export default {
  name: "SearchResultDialog",
  components: { SecondRight, Condition, JmFullDialog },
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
  .slide-out-top {
    -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  @-webkit-keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
      transform: translateY(-1000px);
      opacity: 0;
    }
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
