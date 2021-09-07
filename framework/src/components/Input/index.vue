
<template>
  <div class="index-container">
    <div class="tips">这里用于Input组件的测试</div>
    <div class="input-component-wrapper">
      <BaseInput
        @handlePressEvent="handlePressEvent"
        @handleInputEvent="handleInputEvent"
        @handleBlurEvent="handleBlurEvent"
        :input-data="InputData" />
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, ref, toRefs } from "vue";
import commonInput from "@/components/Input/commonInput.vue";
import InputProps from "./commonInput";
import BaseInput from "./BaseInput"


export default defineComponent({
  name: "InputTest",
  components: {
    commonInput,
    BaseInput
  },
  setup () {
    const InputData = reactive<InputProps>({
      defaultValue: "",
      placeholder: "pls input the text",
      type: "text",
      disabled: false
    });

    const handlePressEvent = () => {
      console.log("handlePressEvent 进来了");
    }
    const handleInputEvent = () => {
      console.log("handleInputEvent 进来了");
    }
    const handleBlurEvent = () => {
      console.log("handleBlurEvent 进来了");
    }
    return {
      InputData,
      handlePressEvent,
      handleInputEvent,
      handleBlurEvent
    }
  }
})

</script>

<style lang="scss" scoped>

.index-container {
  .tips {
    margin-bottom: 20px;
  }
  .input-component-wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }
}

</style>
