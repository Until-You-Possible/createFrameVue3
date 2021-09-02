<template>

  <div class="g-checkbox-container">
    <div>
      <label class="g-checkbox-wrapper">
        <span class="g-checkbox" :class="classString">
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

import { defineComponent, PropType, ref, watch, onMounted } from "vue";
import classNames from "@/util/classes";

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
    const checkboxRef = ref<Boolean>(false);
    const disabledRef = ref<Boolean | undefined>(false);
    const classString = ref<String>("");
    checkboxRef.value = props.checkboxObject.checked;
    disabledRef.value = props.checkboxObject.disabled;
    onMounted(() => {
      classString.value =  classNames({
          ["g-checkbox-disabled"]: disabledRef.value,
          ["g-checkbox-checked"]: checkboxRef.value
        });
    });
    const checkboxChange = (event: Event) => {
      if (disabledRef.value) {
        event.preventDefault();
        return false;
      }
      // 处理选中和非选中的状态
      checkboxRef.value = !!checkboxRef.value;
      classString.value =  classNames({
        ["g-checkbox-checked"]: !!checkboxRef.value
      });
      context.emit("handleCheckboxEvent", event, checkboxRef.value);
    }

    return {
      checkboxRef,
      disabledRef,
      classString,
      checkboxChange
    }
  }
})



</script>

<style lang="scss" scoped>

@import "./checkbox.scss";

</style>
