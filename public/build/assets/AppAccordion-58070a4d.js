import { o as openBlock, c as createElementBlock, e as createBaseVNode, Z as renderSlot, n as normalizeClass, C as withDirectives, F as vShow } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
const _sfc_main = {
  props: {
    componentName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isOpen: true
    };
  },
  mounted() {
    this.setOpenStatus();
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    setOpenStatus() {
      if (this.componentName == "faqs") {
        this.isOpen = false;
      }
    }
  }
};
const _hoisted_1 = ["aria-expanded"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 1.2l-7 7-7-7",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("button", {
      class: "flex items-center space-x-3",
      "aria-expanded": $data.isOpen,
      onClick: _cache[0] || (_cache[0] = ($event) => $options.toggleAccordion())
    }, [
      renderSlot(_ctx.$slots, "title"),
      (openBlock(), createElementBlock("svg", {
        class: normalizeClass(["w-3 transform transition-all duration-200", {
          "rotate-180": $data.isOpen,
          "rotate-0": !$data.isOpen
        }]),
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 16 10",
        "aria-hidden": "true"
      }, _hoisted_3, 2))
    ], 8, _hoisted_1),
    withDirectives(createBaseVNode("div", null, [
      renderSlot(_ctx.$slots, "content")
    ], 512), [
      [vShow, $data.isOpen]
    ])
  ]);
}
const AppAccordion = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AppAccordion as A
};
