<template>

  <div class="g-checkbox-container">
    <div>
      <label class="g-checkbox-wrapper">
        <span class="g-checkbox" :class="{'g-checkbox-checked': checkboxRef}">
          <input :disabled="disabledRef" @change="checkboxChange" v-model="checkboxRef" type="checkbox" class="g-checkbox-input">
          <span class="g-checkbox-inner"></span>
        </span>
        <span class="g-checkbox-text">
          <slot></slot>
        </span>
      </label>

      <label class="g-checkbox-wrapper">
        <span class="g-checkbox g-checkbox-disabled g-checkbox-checked">
          <input :disabled="disabledRef" @change="checkboxChange" v-model="checkboxRef" type="checkbox" class="g-checkbox-input">
          <span class="g-checkbox-inner"></span>
        </span>
        <span class="g-checkbox-text">
          <slot></slot>
        </span>
      </label>
    </div>
  </div>

</template>


<script lang="ts">
// 能考虑的问题
// - 对checkbox的细节思考
// - 是否选中（根据默认的传值）
//  - 是否自动选中
//  - change的时候触发函数
//  - checked的时候触发函数
//  - 禁用状态，根绝传值
// - 默认禁用行为
// - 再非disabled的情况下 得到一个布尔值

import { defineComponent, ref, onMounted, watch, PropType } from "vue";

export interface CheckboxProps {
  checked: boolean,
  disabled?: boolean
}

export default defineComponent({
  name: "IndexCheckbox",
  props: {
    checkboxObject: {
      type: Object as PropType<CheckboxProps>,
      require: true,
      default: () => {}
    }
  },
  setup (props, context) {
    console.log("props", props.checkboxObject);
    const checkboxRef = ref<Boolean>(false);
    const disabledRef = ref<Boolean | undefined>(false);
    checkboxRef.value = props.checkboxObject.checked;
    disabledRef.value = props.checkboxObject.disabled;
    const checkboxChange = (event: Event) => {
      console.log("event", event);
    }
    watch(checkboxRef ,(newValue, oldValue) => {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    });

    return {
      checkboxRef,
      disabledRef,
      checkboxChange
    }
  }
})



</script>

<style lang="scss" scoped>

@import "./checkbox.scss";

</style>
