import { defineComponent, withDirectives, ref } from "vue";

import PropTypes from "@/util/vueTypes";

import antInput from "./comps/antInputDirectives";
const BasicInput = defineComponent({
  name: "BasicInputCom",
  props: {
    value: PropTypes.string.def("")
  },
  emits: ["change", "input"],
  setup (props, { emit }) {
    const inputRef = ref(null);
    const handleChange = (event: Event) => {
      // 判断是正在输入还是change事件
      // w3c标砖文档中有提供属性
      // isComposing
      // https://w3c.github.io/uievents/#event-type-blur
      const { isComposing } = event.target as any;
      if (isComposing) {
        emit("input", event);
      } else {
        emit("input", event);
        emit("change", event);
      }
    };
    return {
      inputRef,
      focus: () => {
        if (inputRef.value) {
          // @ts-ignore
          inputRef.value.focus()
        }
      },
      blur: () => {
        if (inputRef.value) {
          // @ts-ignore
          inputRef.value.blur()
        }
      },
      handleChange
    }
  },
  return () {
    return withDirectives(
      (
        <input
          {...this.$props}
          {...this.$attrs}
          onInput={this.handleChange}
          onChange={this.handleChange}
          ref="inputRef"
        />
      ) as any,
      [[antInput]]
    )
  }
});


export default BasicInput;
