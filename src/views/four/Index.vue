<template>
  <div class="four">
    <p>实施采买-结果</p>
    <div>
      <tabel name="name">
        <tr>
          <tb>角马能源有限公司</tb>
          <tb>角马能源有限公司角马能源有限公司</tb>
        </tr>
        <tr>
          <tb>角马能源有限公司1</tb>
          <tb>角马能源有限公司1</tb>
        </tr>
        <tr>
          <tb>角马能源有限公司11</tb>
          <tb>角马能源有限公司1角马能源有限公司1</tb>
        </tr>
        <tr>
          <tb>角马能源有限公司111</tb>
          <tb>角马能源有限公司1角马能源有限公司1</tb>
        </tr>
      </tabel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped lang="scss">
.four {
  width: 100%;
  margin-top: 48px;
  padding: 0 100px;
  p {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    padding-top: 12px;
    border-bottom: 1px solid #c8cdd1;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }
  tb {
    margin: 12px;
  }
}
</style>
