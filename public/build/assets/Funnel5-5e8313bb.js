import { a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, J as Fragment, K as renderList, d as createVNode, w as withCtx, n as normalizeClass, B as toDisplayString } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import { A as AppLogin } from "./AppLogin-ec70aa8d.js";
import "./__commonjsHelpers__-7a7fcd32.js";
import "./vue-axios.esm.min-fa86a92f.js";
const _sfc_main = {
  name: "Funnel5",
  components: {
    AppLogin
  },
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + "/images/logo.png",
      logoImageAlt: "Company Logo",
      drop: false,
      basePath: window.location.origin + "/",
      showModal: false
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      fuel_types: "funnel/getFuelTypes",
      funnel_data: "funnel/getFunnelData"
    })
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    closeDrop() {
      this.drop = false;
    },
    ...mapActions({
      setFunnelData: "funnel/setFunnelData"
    }),
    setData() {
      const obj = {
        fuel_types: this.fuel_types
      };
      this.setFunnelData(obj);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
const _hoisted_1 = { class: "mx-auto pt-8" };
const _hoisted_2 = { class: "funnel-container container mx-auto px-5 lg:px-0" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "funnel-progress-bar h-3 w-full" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "funnel-progress funnel-bg h-3 w-4/6" })
  ])
], -1);
const _hoisted_4 = { class: "grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12 lg:px-0" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", { class: "funnel-header-1 mt-5 text-center" }, " What is your preferred type of fuel? ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "funnel-label mb-2 mt-2 text-center" }, " Select any or all fuel types you’re considering. ", -1);
const _hoisted_7 = { class: "mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-8/12 lg:grid-cols-2 lg:gap-10 lg:p-0" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "mx-auto" };
const _hoisted_10 = { class: "mb-2" };
const _hoisted_11 = ["src"];
const _hoisted_12 = { class: "text-center" };
const _hoisted_13 = { class: "font-600 text-base lg:ml-4 lg:text-xl" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_15 = { class: "text-xs lg:ml-4 lg:text-base" };
const _hoisted_16 = { class: "funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150" };
const _hoisted_17 = { class: "grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("button", { class: "funnel-button-3 bg-white" }, "Back", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        _hoisted_5,
        _hoisted_6,
        createBaseVNode("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fuel_types, (val, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: normalizeClass(["funnel-button-2 mx-auto w-full cursor-pointer px-3 py-4", { "funnel-button-active": val.selected }]),
              onClick: ($event) => val.selected = !val.selected
            }, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("img", {
                    src: val.image,
                    class: "mx-auto"
                  }, null, 8, _hoisted_11)
                ]),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("label", _hoisted_13, toDisplayString(val.type), 1),
                  _hoisted_14,
                  createBaseVNode("label", _hoisted_15, toDisplayString(val.description), 1)
                ])
              ])
            ], 10, _hoisted_8);
          }), 128))
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_16, [
      createBaseVNode("div", _hoisted_17, [
        createVNode(_component_router_link, {
          to: { name: "step-4" },
          class: "whitespace-nowrap text-right text-base font-medium",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            _hoisted_18
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_router_link, {
          to: { name: "step-6" },
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
const Funnel5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Funnel5 as default
};
