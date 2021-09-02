<template>

  <div class="g-checkbox-container">
    <div>
      <label class="g-checkbox-wrapper">
        <span class="g-checkbox" :class="{'g-checkbox-checked': checkboxRef}">
          <input @change="checkboxChange" v-model="checkboxRef" type="checkbox" class="g-checkbox-input">
          <span class="g-checkbox-inner"></span>
        </span>
        <span  class="g-checkbox-text">checkbox</span>
      </label>
    </div>
  </div>

</template>


<script lang="ts">

import { defineComponent, ref, onMounted, watch } from "vue";

export default defineComponent({
  name: "checkbox",
  setup () {
    const checkboxRef = ref<Boolean>(false);
    checkboxRef.value = false;
    const checkboxChange = (event: Event) => {
      console.log("event", event);
    }
    watch(checkboxRef ,(newValue, oldValue) => {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    });

    return {
      checkboxRef,
      checkboxChange
    }
  }
})



</script>

<style lang="scss" scoped>

@import "./checkbox.scss";

</style>
