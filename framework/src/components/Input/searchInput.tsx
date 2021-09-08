

import { defineComponent } from "vue";
import Button from "@/components/Button/button.vue";
import BaseInput from "@/components/Input/BaseInput";

// 最终渲染一个带搜索按钮的input
const SearchInput = defineComponent({
  name: "searchInputCom",
  setup () {
    return () => {
      return <div>
        <BaseInput />
        <Button />
      </div>
    }
  }
});


export default SearchInput;
