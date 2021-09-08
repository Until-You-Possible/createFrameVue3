
<template>
  <div class="index-container">
    <div class="tips">这里用于Input组件的测试</div>
    <div class="input-component-wrapper">
      <BaseInput
        @handlePressEvent="handlePressEvent"
        @handleInputEvent="handleInputEvent"
        @handleBlurEvent="handleBlurEvent"
        :input-data="InputData" />

<!--      search learn-->
<!--      <SearchInput></SearchInput>-->
      <BasicInput></BasicInput>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import commonInput from "@/components/Input/commonInput.vue";
// import InputProps from "./commonInput";
import BaseInput from "./BaseInput";
import SearchInput from "./searchInput"
import BasicInput from "@/components/Input/BasicInput";

export default defineComponent({
  name: "InputTest",
  components: {
    commonInput,
    BaseInput,
    BasicInput,
    SearchInput
  },
  setup () {
    onMounted(() => {
      console.log("BasicInput", BasicInput);
    })
    const InputData = reactive({
      defaultValue: "",
      placeholder: "pls input the text",
      type: "text",
      width: true,
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
