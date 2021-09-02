<template>

  <div class="index-container">
    <div class="tips">这里用于checkbox组件的测试</div>
    <div>
<!--      <Checkbox :checkboxObject="checkboxObject1">选中禁用</Checkbox>-->
      <Checkbox :checkboxObject="checkboxObject2">选中按钮</Checkbox>
<!--      <Checkbox :checkboxObject="checkboxObject3">禁用未选</Checkbox>-->
      <Checkbox :checkboxObject="checkboxObject4" @handleCheckboxEvent="handleCheckboxEvent">普通按钮</Checkbox>
    </div>
  </div>

</template>


<script lang="ts">


import { defineComponent, ref, reactive, toRefs } from "vue";
import Checkbox from "@/components/Checkbox/checkbox.vue";
import { CheckboxProps } from "./checkbox.vue";
export default defineComponent({
  name: "testCheckbox",
  components: {
    Checkbox
  },
  setup () {
    let checkboxObject1 = reactive<CheckboxProps>({
      checked: true,
      disabled: true
    });
    let checkboxObject2 = reactive<CheckboxProps>({
      checked: true,
      disabled: false
    });
    let checkboxObject3 = reactive<CheckboxProps>({
      checked: false,
      disabled: true
    });
    const checkboxObject4 = reactive<CheckboxProps>({
      checked: false,
      disabled: false
    });
    const handleCheckboxEvent = (event: Event, status: boolean) => {
      console.log("status", status);
      checkboxObject4.checked = status;
      console.log("checkboxObject4", checkboxObject4);
    }

    return {
      checkboxObject1,
      checkboxObject2,
      checkboxObject3,
      checkboxObject4,
      handleCheckboxEvent
    }
  }
});

</script>


<style lang="scss" scoped>

</style>
