import { a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, B as toDisplayString, D as createCommentVNode, d as createVNode, w as withCtx, L as createStaticVNode } from "./vendor-506bc2e6.js";
import { V as VueSlider } from "./vue-slider-component.umd.min-41c0f0df.js";
import { _ as _export_sfc, r as router } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const antd = "";
const _sfc_main = {
  name: "Funnel7",
  components: {
    VueSlider
  },
  props: {},
  data() {
    return {
      companyLogo: "images/logo.png",
      logoImageAlt: "Company Logo",
      drop: false,
      spendingRange: [2e4, 3e4]
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      ages: "funnel/getAges",
      funnel_data: "funnel/getFunnelData"
    })
  },
  mounted() {
    this.scrollToTop();
    this.initSpendingRange();
  },
  methods: {
    ...mapActions({
      setFunnelData: "funnel/setFunnelData"
    }),
    closeDrop() {
      this.drop = false;
    },
    initSpendingRange() {
      var _a;
      this.funnel_data.spendingRange = (_a = this.funnel_data.spendingRange) != null ? _a : this.spendingRange;
    },
    setData() {
      if (!this.authenticated) {
        router.push({ name: "mid-register" });
        return false;
      } else {
        const obj = {
          spendingRange: this.funnel_data.spendingRange
        };
        this.setFunnelData(obj);
        router.push({ name: "step-8" });
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
const _hoisted_1 = { class: "mx-auto pt-8" };
const _hoisted_2 = { class: "funnel-container container mx-auto px-5 lg:px-0" };
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12"><div class="funnel-progress-bar h-3 w-full"><div class="funnel-progress funnel-bg h-3" style="width:90%;"></div></div></div><div class="grid-rows-12 grid grid-flow-row px-8 lg:px-0"><h1 class="funnel-header-1 mt-5 text-center"> How much do you want to spend? </h1><p class="funnel-label mt-5 text-center"> Use the slider filter the results by price. </p></div>', 2);
const _hoisted_5 = {
  key: 0,
  class: "grid-rows-12 border-1 mx-auto mt-45 grid grid-flow-row border p-10 px-8 lg:mt-90 lg:w-4/12"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h1", { class: "funnel-header-2 mb-5 mt-5 text-center" }, "Budget", -1);
const _hoisted_7 = {
  key: 0,
  class: "funnel-header-3 text-center"
};
const _hoisted_8 = { class: "funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150" };
const _hoisted_9 = { class: "grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("button", { class: "funnel-button-3 bg-white" }, "Back", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_vue_slider = resolveComponent("vue-slider");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      _ctx.funnel_data.spendingRange ? (openBlock(), createElementBlock("div", _hoisted_5, [
        _hoisted_6,
        _ctx.funnel_data.spendingRange[0] ? (openBlock(), createElementBlock("p", _hoisted_7, " $" + toDisplayString(_ctx.funnel_data.spendingRange[0]) + " or less – $" + toDisplayString(_ctx.funnel_data.spendingRange[1]), 1)) : createCommentVNode("", true),
        createVNode(_component_vue_slider, {
          modelValue: _ctx.funnel_data.spendingRange,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.funnel_data.spendingRange = $event),
          class: "mt-8",
          min: 1e4,
          max: 1e5,
          "dot-style": { background: "#000000", border: "none" },
          "dot-size": 18,
          height: 10,
          interval: 1e3
        }, null, 8, ["modelValue"])
      ])) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("div", _hoisted_9, [
        createVNode(_component_router_link, {
          to: { name: "step-6" },
          class: "whitespace-nowrap text-right text-base font-medium",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            _hoisted_10
          ]),
          _: 1
        }, 8, ["onClick"]),
        createBaseVNode("button", {
          class: "funnel-button-3 text-white",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.setData())
        }, " Next ")
      ])
    ])
  ]);
}
const Funnel7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Funnel7 as default
};
