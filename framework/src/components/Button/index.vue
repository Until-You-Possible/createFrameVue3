<template>

  <div class="index-container">
     <div class="tips">这里用于button组件的测试</div>
     <div class="components-container">
       <Button  type="default" size="small" text="default" @click="handleClick"/>
       <Button  type="primary" size="small" text="primary" @click="handleClick('primary')" />
       <Button  type="dashed"  size="small" text="dashed"  @click="handleClick('dashed')"/>
       <Button  type="warning" size="small" text="warning" @click="handleClick('warning')" />
       <Button  type="warning" size="large" text="large warning" @click="handleClick('large warning')" />
       <Button  type="primary" size="large" text="large primary"  @click="handleClick('large primary')"/>
       <Button  type="dashed"  size="large" text="large dashed" @click="handleClick('large dashed')" />
       <Button  type="primary" disabled="disabled"  size="large" text="large disabled"  @click="handleClick('large disabled')"/>
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
  },
  setup () {
    const handleClick = (event: any, params: string) => {
      console.log("item", event);
      console.log("params", params);
    }
    return {
      handleClick
    }
  }
});


</script>


<style lang="scss">

.index-container {
  .tips {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
}

</style>
