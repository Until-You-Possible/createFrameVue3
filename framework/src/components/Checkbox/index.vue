<template>

  <div class="index-container">
    <div class="tips">这里用于checkbox组件的测试</div>
    <div>
      <Checkbox></Checkbox>
    </div>
  </div>

</template>


<script lang="ts">

import { defineComponent }  from "vue";
import Checkbox from "@/components/Checkbox/checkbox.vue";
export default defineComponent({
  name: "testCheckbox",
  components: {
    Checkbox
  },
  setup () {

  }
});

</script>


<style lang="scss" scoped>

</style>
