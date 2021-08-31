<template>

  <div class="button-index-container">
     <div class="tips">这里用于button组件的测试</div>
     <div class="components-container">
       <Button  type="default" size="small" text="default" />
       <Button  type="primary" size="small" text="primary" />
       <Button  type="dashed"  size="small" text="dashed" />
       <Button  type="warning" size="small" text="warning" />
       <Button  type="warning" size="large" text="large warning" />
       <Button  type="primary" size="large" text="large primary" />
       <Button  type="dashed"  size="large" text="large dashed" />
       <Button  type="primary" disabled="disabled"  size="large" text="large disbaled" />
     </div>
  </div>

</template>


<script lang="ts">

import { defineComponent } from 'vue';
import Button from "@/components/Button/button.vue";

export default defineComponent({
  name: 'buttonIndex',
  components: {
    Button
  }
});


</script>


<style lang="scss">

.button-index-container {
  .tips {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
}

</style>
