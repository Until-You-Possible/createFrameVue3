
<template>
  <div class="index-container">
    <div class="tips">这里用于Input组件的测试</div>
    <div class="input-component-wrapper">
      <commonInput

        :input-data="InputData">
      </commonInput>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, ref, toRefs } from "vue";
import commonInput from "@/components/Input/commonInput.vue";
import InputProps from "./commonInput";


export default defineComponent({
  name: "InputTest",
  components: {
    commonInput
  },
  setup () {
    const InputData = reactive<InputProps>({
      defaultValue: "",
      placeholder: "pls input the text",
      type: "text",
      disabled: false
    });
    return {
      InputData
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
