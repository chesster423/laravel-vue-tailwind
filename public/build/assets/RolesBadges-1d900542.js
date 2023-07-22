import { _ as _export_sfc } from "./app-a3809c34.js";
import { o as openBlock, c as createElementBlock, D as createCommentVNode } from "./vendor-506bc2e6.js";
const _sfc_main = {
  name: "RolesBadges",
  components: {},
  props: {
    roles: { type: Object, required: true }
  },
  setup() {
    return {};
  },
  data() {
    return {
      //
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {}
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 0,
  class: "mr-2 cursor-default rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800"
};
const _hoisted_3 = {
  key: 1,
  class: "mr-2 cursor-default rounded bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
};
const _hoisted_4 = {
  key: 2,
  class: "mr-2 cursor-default rounded bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-red-200 dark:text-red-900"
};
const _hoisted_5 = {
  key: 3,
  class: "mr-2 cursor-default rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-green-200 dark:text-green-900"
};
const _hoisted_6 = {
  key: 4,
  class: "mr-2 cursor-default rounded bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.roles ? (openBlock(), createElementBlock("div", _hoisted_1, [
    $props.roles.superAdmin ? (openBlock(), createElementBlock("span", _hoisted_2, "Super Admin")) : createCommentVNode("", true),
    $props.roles.admin ? (openBlock(), createElementBlock("span", _hoisted_3, "Admin")) : createCommentVNode("", true),
    $props.roles.moderator ? (openBlock(), createElementBlock("span", _hoisted_4, "Moderator")) : createCommentVNode("", true),
    $props.roles.editor ? (openBlock(), createElementBlock("span", _hoisted_5, "Editor")) : createCommentVNode("", true),
    $props.roles.user ? (openBlock(), createElementBlock("span", _hoisted_6, "User")) : createCommentVNode("", true)
  ])) : createCommentVNode("", true);
}
const RolesBadges = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  RolesBadges as R
};
