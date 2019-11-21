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
        visualMap: {
          min: 0,
          max: 2500,
          show: false
        },
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
            },
            data: [
              { name: "北京", value: Math.round(Math.random() * 1000) },
              { name: "天津", value: Math.round(Math.random() * 1000) },
              { name: "湖南", value: Math.round(Math.random() * 1000) },
              { name: "安徽", value: Math.round(Math.random() * 1000) },
              { name: "山东", value: Math.round(Math.random() * 1000) },
              { name: "新疆", value: Math.round(Math.random() * 1000) }
            ]
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
    width: 620px;
    height: 500px;
  }
}
</style>
