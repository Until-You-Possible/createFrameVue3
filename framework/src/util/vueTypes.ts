

// 关于 vueType的文档
// https://dwightjack.github.io/vue-types/guide/validators.html#createtypes
// https://dwightjack.github.io/vue-types/advanced/custom-instance.html#introducing-createtypes
import type { CSSProperties, VNodeChild } from "vue";
import type { VueTypeValidableDef, VueTypesInterface } from "vue-types";
import { createTypes } from "vue-types";
import type { VueNode } from './type';
const PropTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  array: undefined,
  object: undefined,
  integer: undefined,
});

PropTypes.extend([
  {
    name: 'looseBool',
    getter: true,
    type: Boolean,
    default: undefined,
  },
  {
    name: 'style',
    getter: true,
    type: [String, Object],
    default: undefined,
  },
  {
    name: 'VNodeChild',
    getter: true
  },
]);

export function withUndefined<T extends { default?: any }>(type: T): T {
  type.default = undefined;
  return type;
}

export default PropTypes as VueTypesInterface & {
  readonly looseBool: VueTypeValidableDef<boolean>;
  readonly style: VueTypeValidableDef<CSSProperties>;
  readonly VNodeChild: VueTypeValidableDef<VueNode>;
};

