import { a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, J as Fragment, K as renderList, d as createVNode, w as withCtx, L as createStaticVNode, n as normalizeClass, B as toDisplayString } from "./vendor-506bc2e6.js";
import { V as VueSlider } from "./vue-slider-component.umd.min-41c0f0df.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Funnel1",
  components: {
    VueSlider
  },
  props: {},
  data() {
    return {
      companyLogo: "images/logo.png",
      logoImageAlt: "Company Logo",
      drop: false
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
  },
  methods: {
    ...mapActions({
      setFunnelData: "funnel/setFunnelData"
    }),
    closeDrop() {
      this.drop = false;
    },
    setAge(age) {
      this.funnel_data.ageRange = age;
    },
    setData() {
      this.setFunnelData(this.funnel_data);
    }
  }
};
const _hoisted_1 = { class: "mx-auto pt-8" };
const _hoisted_2 = { class: "funnel-container container mx-auto px-5 pb-20 lg:px-0" };
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12"><div class="funnel-progress-bar h-3 w-full"><div class="funnel-progress funnel-bg h-3 w-0"></div></div></div><div class="grid-rows-12 grid grid-flow-row px-2 lg:px-0"><h1 class="funnel-header-1 mt-5 text-center"> Let’s start off with the basics? </h1><p class="funnel-label mt-5 text-center"> Let’s start off with some basic details to build your recommendations </p></div><div class="grid-rows-12 mb-10 mt-8 grid grid-flow-row text-center lg:mt-12"><h1 class="funnel-header-2 mb-5 mt-5">What’s your age?</h1><p>Select an option that best reflects your age group.</p></div>', 3);
const _hoisted_6 = { class: "mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-6/12 lg:grid-flow-row lg:grid-cols-2 lg:gap-x-10 lg:gap-x-14 lg:gap-y-8 lg:p-0" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "mx-auto flex items-center lg:ml-20" };
const _hoisted_9 = { class: "" };
const _hoisted_10 = ["checked"];
const _hoisted_11 = { class: "" };
const _hoisted_12 = { class: "ml-4 text-sm lg:ml-8 lg:text-xl" };
const _hoisted_13 = { class: "funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150" };
const _hoisted_14 = { class: "grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("button", { class: "funnel-button-3 bg-white" }, "Back", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("div", _hoisted_6, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.ages, (val, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: normalizeClass(["funnel-button-2 mx-auto flex w-full items-center py-4 lg:py-8", { "funnel-button-active": _ctx.funnel_data.ageRange === val }]),
            onClick: ($event) => $options.setAge(val)
          }, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("input", {
                  type: "checkbox",
                  checked: _ctx.funnel_data.ageRange === val,
                  class: "h-5 w-5 cursor-pointer rounded"
                }, null, 8, _hoisted_10)
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("label", _hoisted_12, toDisplayString(val), 1)
              ])
            ])
          ], 10, _hoisted_7);
        }), 128))
      ])
    ]),
    createBaseVNode("div", _hoisted_13, [
      createBaseVNode("div", _hoisted_14, [
        createVNode(_component_router_link, {
          to: { name: "step-1" },
          class: "whitespace-nowrap text-right text-base font-medium",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            _hoisted_15
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_router_link, {
          to: { name: "step-2" },
          class: "whitespace-nowrap text-base text-white",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            createBaseVNode("button", {
              class: "funnel-button-3",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.setData())
            }, "Next")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ])
  ]);
}
const Funnel1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Funnel1 as default
};
