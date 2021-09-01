<template>

  <div class="index-container">
    <div class="tips">这里用于checkbox组件的测试</div>
    <div>
      <Checkbox :checkboxObject="checkboxObject">选中按钮</Checkbox>
    </div>
  </div>

</template>


<script lang="ts">


import { defineComponent, ref, reactive } from "vue";
import Checkbox from "@/components/Checkbox/checkbox.vue";
import { CheckboxProps } from "./checkbox.vue";
export default defineComponent({
  name: "testCheckbox",
  components: {
    Checkbox
  },
  setup () {
    const checkboxObject = reactive<CheckboxProps>({
      checked: true,
      disabled: true
    });
    return {
      checkboxObject
    }
  }
});

</script>


<style lang="scss" scoped>

</style>
