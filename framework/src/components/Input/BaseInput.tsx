
import { defineComponent, onMounted, PropType, ref } from 'vue';
import PropTypes from "@/util/vueTypes";
import classes from "@/util/classes";
// import InputProps  from "@/components/Input/commonInput.vue";
import "./input.scss";


//
// export interface InputProps {
//   defaultValue: PropTypes.string,
//   type: PropTypes.string,
//   placeholder: PropTypes.string,
//   disabled: PropTypes.looseBool,
//   readonly: PropTypes.looseBool,
//   maxlength: PropTypes.number,
//   onPressEnter: PropTypes.func,
//   onKeydown: PropTypes.func,
//   onKeyup: PropTypes.func,
//   onFocus: PropTypes.func,
//   onBlur: PropTypes.func,
//   onChange: PropTypes.func,
//   onInput: PropTypes.func,
//   autofocus: PropTypes.looseBool,
//   allowClear: PropTypes.looseBool
// }

//  将属性统一处理后穿给input
//  对事件的处理

const BaseInput = defineComponent({
  props: {
    inputData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleInput () {
      console.log("input");
    }
  },
  setup(props, context) {
    let classString = ref<String>("");
    let { inputData } = props;
    const handleClasses = () => {
      return classes({
        ['g-input']: true,
        ['g-input-width']: inputData.width,
        ['g-input-disabled']: inputData.disabled
      });
    }
    onMounted(() => {
      classString.value = handleClasses();
    });
    const handleInput = (event: Event) => {
      context.emit("handleInputEvent", event);
    }
    const handlePressEnter = (event: KeyboardEvent) => {
      // event.keyCode
      // event.code
      if (event.key === "Enter") {
        context.emit("handlePressEvent", event);
      }
    }
    const handleBlur = (event: FocusEvent) => {
      context.emit("handleBlurEvent", event);
    }
    return () => (
       <input
          placeholder={inputData.placeholder}
          type={inputData.type}
          value={inputData.defaultValue}
          disabled={inputData.disabled}
          class={classString.value}
          max = {inputData.maxlength}
          onBlur = { handleBlur }
          onKeypress = { handlePressEnter }
          onInput = { handleInput } />
    )
  }
});

export default BaseInput;
