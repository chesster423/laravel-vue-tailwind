import { a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, J as Fragment, K as renderList, d as createVNode, w as withCtx, L as createStaticVNode, n as normalizeClass, C as withDirectives, aT as vModelCheckbox, B as toDisplayString } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Funnel3",
  components: {},
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + "/images/logo.png",
      logoImageAlt: "Company Logo",
      drop: false
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      personal_preferences: "funnel/getPersonalPreferences",
      funnel_data: "funnel/getFunnelData"
    })
  },
  mounted() {
    this.scrollToTop();
  },
  methods: {
    ...mapActions({
      setFunnelData: "funnel/setFunnelData"
    }),
    closeDrop() {
      this.drop = false;
    },
    selectPersonalPreference(val) {
      if (!(this.personal_preferences.filter((value) => value.selected).length >= 3 && val.selected == false)) {
        val.selected = !val.selected;
      }
    },
    setData() {
      const obj = {
        personal_preferences: this.personal_preferences
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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<div class="grid-rows-12 mx-auto my-10 grid grid-flow-row lg:w-6/12"><div class="funnel-progress-bar h-3 w-full"><div class="funnel-progress funnel-bg h-3 w-2/6"></div></div></div><div class="grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12 lg:px-8"><h1 class="funnel-header-1 mt-5 text-center"> What are your priorities? </h1><p class="funnel-label mb-5 mt-5 text-center lg:text-left"> Select up to 3 options. We will prioritize your recommendations by vehicles with the features that best reflect your priorities. </p></div>', 2);
const _hoisted_5 = { class: "mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-6/12 lg:grid-flow-row lg:grid-cols-2 lg:gap-x-10 lg:gap-x-14 lg:gap-y-8 lg:p-0" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "hidden lg:block" };
const _hoisted_8 = ["onUpdate:modelValue", "checked", "disabled"];
const _hoisted_9 = { class: "" };
const _hoisted_10 = { class: "text-sm lg:ml-8 lg:text-xl" };
const _hoisted_11 = { class: "funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150" };
const _hoisted_12 = { class: "grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("button", { class: "funnel-button-3 bg-white" }, "Back", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("div", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.personal_preferences, (val, key) => {
          return openBlock(), createElementBlock("div", {
            key: val.value,
            class: normalizeClass(["funnel-button-2 mx-auto flex w-full cursor-pointer items-center py-4 lg:py-8", { "funnel-button-active": val.selected }]),
            onClick: ($event) => $options.selectPersonalPreference(val)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["mx-auto lg:ml-20 lg:flex lg:items-center", {
                "opacity-10": _ctx.personal_preferences.filter((value) => value.selected).length >= 3 && val.selected == false
              }])
            }, [
              createBaseVNode("div", _hoisted_7, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": ($event) => val.selected = $event,
                  type: "checkbox",
                  checked: val.selected,
                  disabled: _ctx.personal_preferences.filter((value) => value.selected).length >= 3 && val.selected != true,
                  class: "mx-auto block h-5 w-5 cursor-pointer rounded lg:ml-0"
                }, null, 8, _hoisted_8), [
                  [vModelCheckbox, val.selected]
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("label", _hoisted_10, toDisplayString(val.car_text), 1)
              ])
            ], 2)
          ], 10, _hoisted_6);
        }), 128))
      ])
    ]),
    createBaseVNode("div", _hoisted_11, [
      createBaseVNode("div", _hoisted_12, [
        createVNode(_component_router_link, {
          to: { name: "step-2" },
          class: "whitespace-nowrap text-right text-base font-medium",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            _hoisted_13
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_router_link, {
          to: { name: "step-4" },
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
const Funnel3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Funnel3 as default
};
