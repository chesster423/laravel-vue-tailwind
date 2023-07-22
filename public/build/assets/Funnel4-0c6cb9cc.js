import { a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, J as Fragment, K as renderList, D as createCommentVNode, d as createVNode, w as withCtx, n as normalizeClass, C as withDirectives, aT as vModelCheckbox, B as toDisplayString } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Funnel4",
  components: {},
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + "/images/logo.png",
      logoImageAlt: "Company Logo",
      drop: false,
      basePath: window.location.origin + "/",
      loading: true
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      funnel_data: "funnel/getFunnelData",
      activities: "funnel/getActivities"
    }),
    activities_data() {
      const data = [];
      for (const key in this.activities) {
        data.push(this.activities[key]);
      }
      return data;
    }
  },
  mounted() {
    this.scrollToTop();
    this.init();
  },
  methods: {
    ...mapActions({
      getFunnelActivities: "funnel/getActivities",
      setFunnelData: "funnel/setFunnelData"
    }),
    closeDrop() {
      this.drop = false;
    },
    showDisabled(val) {
      return this.loading == false && this.activities_data.filter((value) => value.selected).length >= 3 && val.selected == false;
    },
    disableCheckbox(val) {
      return this.loading == false && this.activities_data.filter((value) => value.selected).length >= 3 && val.selected != true;
    },
    selectActivity(val) {
      if (!(this.loading == false && this.activities_data.filter((value) => value.selected).length >= 3 && val.selected == false)) {
        val.selected = !val.selected;
      }
    },
    init() {
      this.loading = true;
      this.getFunnelActivities().then((response) => {
        this.loading = false;
      });
    },
    setData() {
      const obj = {
        activities: this.activities
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
    /* @__PURE__ */ createBaseVNode("div", { class: "funnel-progress funnel-bg h-3 w-3/6" })
  ])
], -1);
const _hoisted_4 = { class: "grid-rows-12 mx-auto grid grid-flow-row gap-5" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", { class: "funnel-header-1 mt-5 text-center" }, " What are the types of activities that you do most? ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "funnel-label mb-2 mt-2 text-center" }, " Select up to 3 options and we will determine the most optimal vehicles that best reflect your lifestyle. ", -1);
const _hoisted_7 = {
  key: 0,
  class: "mx-auto mt-5 grid grid-cols-2 gap-4 lg:w-6/12 lg:grid-flow-row lg:grid-cols-2 lg:gap-x-10 lg:gap-x-14 lg:gap-y-8 lg:p-0"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "hidden lg:block" };
const _hoisted_10 = ["onUpdate:modelValue", "checked", "disabled"];
const _hoisted_11 = { class: "" };
const _hoisted_12 = { class: "text-sm lg:ml-4 lg:text-xl" };
const _hoisted_13 = { class: "funnel-bg-light-gray next-steps-container mt-45 py-6 lg:mt-150" };
const _hoisted_14 = { class: "grid-rows-12 mx-auto grid grid-flow-col gap-4 lg:w-4/12" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("button", { class: "funnel-button-3 bg-white" }, "Back", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        _hoisted_5,
        _hoisted_6,
        $data.loading == false ? (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.activities_data, (val, key) => {
            return openBlock(), createElementBlock("div", {
              key: val.id,
              class: normalizeClass(["funnel-button-2 mx-auto flex w-full cursor-pointer items-center py-4 lg:py-8", { "funnel-button-active": val.selected }]),
              onClick: ($event) => $options.selectActivity(val)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(["mx-auto lg:ml-20 lg:flex lg:items-center", { "opacity-10": $options.showDisabled(val) }])
              }, [
                createBaseVNode("div", _hoisted_9, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": ($event) => val.selected = $event,
                    type: "checkbox",
                    checked: val.selected,
                    disabled: $options.disableCheckbox(val),
                    class: "mx-auto block h-5 w-5 cursor-pointer rounded lg:ml-0"
                  }, null, 8, _hoisted_10), [
                    [vModelCheckbox, val.selected]
                  ])
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("label", _hoisted_12, toDisplayString(val.activity_name), 1)
                ])
              ], 2)
            ], 10, _hoisted_8);
          }), 128))
        ])) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("div", _hoisted_13, [
      createBaseVNode("div", _hoisted_14, [
        createVNode(_component_router_link, {
          to: { name: "step-3" },
          class: "whitespace-nowrap text-right text-base font-medium",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            _hoisted_15
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_router_link, {
          to: { name: "step-5" },
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
const Funnel4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Funnel4 as default
};
