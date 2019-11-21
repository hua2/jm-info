<template>
  <div class="china-map">
    <v-chart class="my-chart" :options="option" />
  </div>
</template>
<script>
import ECharts from "vue-echarts";
import "echarts/map/js/china.js"; // 引入中国地图数据
import "echarts/lib/chart/map";

export default {
  name: "ChinaMap",
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      option: {
        series: [
          {
            name: "test",
            type: "map",
            mapType: "china",
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            }
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.china-map {
  .my-chart {
    width: 800px;
    height: 500px;
  }
}
</style>
