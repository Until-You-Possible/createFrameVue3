<template>

  <div class="g-checkbox-container">
    <div>
      <label class="g-checkbox-wrapper">
        <span class="g-checkbox">
          <input type="checkbox" class="g-checkbox-input">
          <span class="g-checkbox-inner"></span>
        </span>
        <span>checkbox</span>
      </label>

      <label class="g-checkbox-wrapper">
        <span class="g-checkbox g-checkbox-checked">
          <input checked type="checkbox" class="g-checkbox-input">
          <span class="g-checkbox-inner"></span>
        </span>
        <span>checkbox</span>
      </label>
    </div>
  </div>

</template>


<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "checkbox",
  setup () {

  }
})



</script>

<style lang="scss" scoped>

@import "./checkbox.scss";

</style>
