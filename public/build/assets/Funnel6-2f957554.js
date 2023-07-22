import { a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, J as Fragment, K as renderList, d as createVNode, w as withCtx, n as normalizeClass, B as toDisplayString } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Funnel6",
  components: {},
  props: {},
  data() {
    return {
      companyLogo: window.location.origin + "/images/logo.png",
      logoImageAlt: "Company Logo",
      drop: false,
      basePath: window.location.origin + "/"
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      vehicleTypes: "funnel/vehicleTypes",
      funnel_data: "funnel/getFunnelData"
    })
  },
  mounted() {
    this.scrollToTop();
    this.getVehicleTypes();
  },
  methods: {
    closeDrop() {
      this.drop = false;
    },
    ...mapActions({
      vehicle_types: "funnel/getVehicleTypes",
      setFunnelData: "funnel/setFunnelData"
    }),
    async getVehicleTypes() {
      await this.vehicle_types().then((response) => {
      });
    },
    closeModal() {
      this.showModal = false;
    },
    setData() {
      const obj = {
        preferredVehicleTypes: this.vehicleTypes
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
    /* @__PURE__ */ createBaseVNode("div", { class: "funnel-progress funnel-bg h-3 w-5/6" })
  ])
], -1);
const _hoisted_4 = { class: "grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12 lg:px-0" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", { class: "funnel-header-1 mt-5 text-center" }, " What is your preferred type of vehicle? ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "funnel-label mb-2 text-center" }, " Choose all the rides that fit your life. ", -1);
const _hoisted_7 = { class: "mx-auto grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-8 lg:p-5" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "p-3" };
const _hoisted_10 = { style: { height: "80px" } };
const _hoisted_11 = ["src"];
const _hoisted_12 = {
  class: "funnel-label-2 uppercase",
  style: { "font-weight": "500" }
};
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
        createBaseVNode("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.vehicleTypes, (val, key) => {
            return openBlock(), createElementBlock("div", {
              key: val.value,
              class: normalizeClass(["border-1 funnel-progress-bar mx-auto cursor-pointer border text-center lg:p-3", { "funnel-button-active": val.selected }]),
              onClick: ($event) => val.selected = !val.selected
            }, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("img", {
                    src: $data.basePath + val.img_path
                  }, null, 8, _hoisted_11)
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("p", _hoisted_12, toDisplayString(val.vehicle_type_name), 1)
                ])
              ])
            ], 10, _hoisted_8);
          }), 128))
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_13, [
      createBaseVNode("div", _hoisted_14, [
        createVNode(_component_router_link, {
          to: { name: "step-5" },
          class: "whitespace-nowrap text-right text-base font-medium",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            _hoisted_15
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_router_link, {
          to: { name: "step-7" },
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
const Funnel6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Funnel6 as default
};
