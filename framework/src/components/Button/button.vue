<template>

  <div class="button-container">
    <div class="content">
      <div :class="classesRef">{{typeRef}}</div>
    </div>
  </div>

</template>


<script lang="ts">


import { defineComponent, PropType, ref, toRefs,
  onMounted, onUnmounted,
  computed
} from 'vue';
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
    const { type, size, text } = props;
    console.log("props", props);
    if (!text) return;
    const typeRef = ref<string | undefined>("primary") || "";
    const sizeRef = ref<string | undefined>("medium");
    const textRef = ref<string | undefined>("");
    const classesRef = ref<string | undefined>("btn");
    onMounted(() => {
      typeRef.value = type;
      sizeRef.value = size;
      textRef.value = text;
    });

    const classes = computed(() => {
      const prefixName = "btn";
      let sizeClass = prefixName + "-" + sizeRef.value;
      let typeClass = prefixName + "-" +  typeRef.value;
      classesRef.value = "btn" + " "+ sizeClass + " " + typeClass;
    });
    // classesRef.value = classes;
    console.log("classes", classes.value);

    return {
      typeRef,
      sizeRef,
      textRef,
      classesRef
    }
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

</style>
