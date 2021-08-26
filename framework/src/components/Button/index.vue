<template>

  <div class="button-index-container">
     <div class="tips">这里用于button组件的开发和测试</div>
    <button class="btn bth-default">button</button>
    <button class="btn bth-primary btn-lg">button</button>
    <button class="btn btn-danger">button</button>
    <button disabled class="btn bth-primary">button</button>
    <button class="btn btn-link">button</button>
  </div>

</template>


<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'buttonIndex'
});


</script>


<style lang="scss">
@import "./style.scss";
.button-index-container {
  .tips {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
}

</style>
