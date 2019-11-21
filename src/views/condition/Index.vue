<template>
  <div class="condition">
    <Header />
    <div class="condition-content text-center">
      <p class="mb-16">选择"开关"的检索条件</p>
      <div class="flex flex-col">
        <div>
          <label for="pet-select">仓库位置:</label>
          <select name="pets" id="pet-select">
            <option value="">北京</option>
            <option value="cat">上海</option>
            <option value="hamster">南京</option>
            <option value="parrot">天津</option>
            <option value="spider">广州</option>
          </select>
        </div>
        <div class="mt-16">
          <label for="pet-select1">仓库位置:</label>
          <select name="pets" id="pet-select1">
            <option value="">北京</option>
            <option value="cat">上海</option>
            <option value="hamster">南京</option>
            <option value="parrot">天津</option>
            <option value="spider">广州</option>
          </select>
        </div>
        <div class="mt-16">
          <label>是否支持分期:</label>
          <input
            name="yes"
            id="yes"
            type="radio"
            checked="checked"
            class="ml-16 mr-6"
          />是 <input name="yes" id="no" type="radio" class="ml-16 mr-6" />否
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/index";
export default {
  name: "Index",
  components: { Header }
};
</script>

<style scoped lang="scss">
.condition {
  margin: 0 auto;
  padding: 0 100px;
  .condition-content {
    margin-top: 200px;
    width: 100%;
    height: 400px;
    color: #415058;
    label {
    }
    select {
      width: 328px;
      height: 36px;
      line-height: 36px;
      margin-left: 16px;
      border-radius: 3px;
      background: #fff;
      border: 1px solid #415058;
    }
  }
}
</style>
