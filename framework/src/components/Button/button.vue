<template>

  <div class="button-container">
    <div class="content">
      <div class="btn btn-default">basic</div>
      <div class="btn btn-primary">primary</div>
      <div class="btn btn-warning">warning</div>
      <div class="btn btn-link">link</div>
      <div class="btn btn-dashed">dashed</div>
    </div>
  </div>

</template>


<script lang="ts">


import { defineComponent, PropType } from 'vue';
import ButtonAllProps from "@/components/Button/buttonTypes";

const buttonAllProps = new ButtonAllProps();
console.log("buttonAllProps", buttonAllProps);
// 枚举基本的一些属性
// 基本尺寸
type ButtonProps = {
  size? : string,
  type? : string,
  text? : string,
  href? : string,
  disabled? : boolean,
  click?: () => void
}



export default defineComponent({
  name: "button",
  inheritAttrs: false,
  props: {
    type: String,
    size: String,
    text: String
  },
  setup (props, context) {
    console.log("props", props);
  }
});


</script>

<style lang="scss" scoped>

.button-container {
  margin-top: 30px;
  .content {
    padding-left: 30px;
    padding-right: 30px;
    div.btn {
      margin-right: 10px;
    }
  }
}
.btn {
  font-size:  $btn-font-size;
  padding: $btn-padding-y $btn-padding-x;
  width: 100px;
  border-radius: 4px;
}
.btn-default {
  border: 1px solid #ccc;
  &:hover {
    border-color: #0d6efd;
    cursor: pointer;
    color: #0d6efd;
  }
}

.btn-link {
  border: none;
}

.btn-warning {
  background: red;
  color: #ffffff;
}

.btn-dashed {
  border-style: dashed;
  border-color: #0d6efd;
  color: #0d6efd;
}

</style>
