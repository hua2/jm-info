<template>
  <JmFullDialog v-if="show" @close="show = false">
    \
  </JmFullDialog>
</template>

<script>
import JmFullDialog from "../../../components/JmFullDialog/index";
export default {
  name: "PayDialog",
  components: { JmFullDialog },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped></style>
