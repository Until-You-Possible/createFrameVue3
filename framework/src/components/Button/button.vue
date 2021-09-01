<template>

  <div class="button-container">
    <div @click="buttonClick" class="content">
      <div :class="classesRef">{{textRef}}</div>
    </div>
  </div>

</template>


<script lang="ts">


import { defineComponent, PropType, ref, toRefs,
  onMounted,
  onUnmounted,
  computed,
  Text
} from 'vue';
import HandleButtonClass from "@/components/Button/buttonTypes";
// 枚举基本的一些属性
// 基本尺寸
export interface ButtonProps  {
  size? : string,
  type? : string,
  text? : string,
  disabled? : string,
  click?: () => void
}




export default defineComponent({
  name: "button",
  inheritAttrs: false,
  props: {
    size: String,
    type: String,
    text: String,
    disabled: String
  },
  setup (props, context) {
    console.log("props", props);
    // const { disabled } = props;
    let disabled: Boolean;
    const textRef = ref<string | undefined>("");
    const classesRef = ref<string | undefined>("");
    onMounted(() => {
      const handleButtonClass  = new HandleButtonClass(props);
      textRef.value = handleButtonClass.getText();
      if (disabled) {
        classesRef.value = handleButtonClass.getDisabled();
      } else {
        classesRef.value = handleButtonClass.makeALlClasses();
      }
    });
    // 点击事件
    const buttonClick = (event: Event) => {
      if (disabled) {
        event.preventDefault();
        return false;
      }
      context.emit("click", event, "234");
    }
    return {
      textRef,
      classesRef,
      buttonClick
    }
  }
});


</script>

<style lang="scss" scoped>

.button-container {
  margin-top: 30px;
  display: inline-block;
  margin-right: 10px;
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
  min-width: 100px;
  border-radius: 4px;
  border: 1px solid #ccc;
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

.btn-lg {
  font-size:  $btn-font-size;
  padding: $btn-padding-y-lg  $btn-padding-x-lg;
}

.btn-sm {
  font-size:  $btn-font-size;
  padding: $btn-padding-y-sm $btn-padding-x-sm;
}
.btn-disabled {
  pointer-events: none;
  background: #ccc;
  cursor: not-allowed !important;
}

</style>
