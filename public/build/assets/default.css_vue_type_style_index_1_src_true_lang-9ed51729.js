import { _ as _export_sfc } from "./app-a3809c34.js";
import { o as openBlock, c as createElementBlock, H as pushScopeId, I as popScopeId, e as createBaseVNode } from "./vendor-506bc2e6.js";
const _sfc_main = {
  name: "PageScrollButton",
  components: {},
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
  },
  methods: {
    onScroll() {
      this.isVisible = window.scrollY > 50;
    },
    toTop() {
      this.isVisible = false;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    },
    toBottom() {
      this.isVisible = true;
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  }
};
const PageScrollButton_vue_vue_type_style_index_0_scoped_a91e4444_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-a91e4444"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1));
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1));
const _hoisted_4 = [
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onScroll: _cache[2] || (_cache[2] = ($event) => $options.onScroll())
  }, [
    !$data.isVisible ? (openBlock(), createElementBlock("button", {
      key: 0,
      fab: "",
      fixed: "",
      bottom: "",
      right: "",
      class: "page-scroll-button cursor-pointer text-blue-400",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.toBottom && $options.toBottom(...args))
    }, _hoisted_2)) : (openBlock(), createElementBlock("button", {
      key: 1,
      fab: "",
      fixed: "",
      bottom: "",
      right: "",
      class: "page-scroll-button cursor-pointer text-blue-400",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.toTop && $options.toTop(...args))
    }, _hoisted_4))
  ], 32);
}
const PageScrollButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a91e4444"]]);
const default_css_vue_type_style_index_1_src_true_lang = "";
export {
  PageScrollButton as P
};
