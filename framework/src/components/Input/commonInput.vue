<template>
  <div class="g-input-wrapper">
    <input
      :placeholder="inputData.placeholder"
      :type="inputData.type"
      :value="inputData.defaultValue"
      :disabled="inputData.disabled"
      :class="classesString"
      :max="inputData.maxlength"
      @input="triggerInput"
      type="text">
    <span class="allow-clear">*</span>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType, onMounted, ref} from "vue";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons-vue';
import PropTypes from "@/util/vueTypes";
import classes from "@/util/classes";

export interface InputProps {
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.looseBool,
  readonly: PropTypes.looseBool,
  maxlength: PropTypes.number,
  onPressEnter: PropTypes.func,
  onKeydown: PropTypes.func,
  onKeyup: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  autofocus: PropTypes.looseBool,
  allowClear: PropTypes.looseBool
}


export default defineComponent({
  name:  "testCommonInput",
  props: {
    inputData: {
      type: Object as PropType<InputProps>
    }
  },
  setup (props, context) {
    let { inputData } = props;
    let classesString = ref<String>("")
    const handleClasses = () => {
      return classes({
        ['g-input']: true,
        ['g-input-width']: inputData.width,
        ['g-input-disabled']: inputData.disabled
      })
    }
    onMounted(() => {
      classesString.value = handleClasses();
    });
    return {
      classesString
    }

  }
})

</script>

<style lang="scss" scoped>

@import "./input.scss";

</style>
