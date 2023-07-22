import { A as AppRecommendedCars } from "./AppRecommendedCars-f8b27d75.js";
import { a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, E as createTextVNode, d as createVNode } from "./vendor-506bc2e6.js";
import { _ as _export_sfc, r as router } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Funnel8",
  components: {
    AppRecommendedCars
  },
  props: {},
  data() {
    return {
      isMounted: false,
      refreshImage: window.location.origin + "/images/icons/refresh.svg",
      companyLogo: window.location.origin + "/images/logo.png",
      logoImageAlt: "Company Logo"
    };
  },
  computed: {
    ...mapGetters({
      funnel_data: "funnel/getFunnelData",
      selectedPersonalities: "funnel/getSelectedPersonalities",
      personalPreference: "funnel/getSelectedPersonalPreferences",
      selectedVehicleTypes: "funnel/getSelectedVehicleType",
      selectedActivities: "funnel/getSelectedActivities",
      selectedFuelTypes: "funnel/getSelectedFuelTypes"
    }),
    payload() {
      const payload = {
        ...this.funnel_data
      };
      payload.personalities = this.selectedPersonalities;
      payload.personal_preferences = this.personalPreference;
      payload.preferredVehicleTypes = this.selectedVehicleTypes;
      payload.activities = this.selectedActivities;
      payload.fuel_types = this.selectedFuelTypes;
      return payload;
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      resetFunnelData: "funnel/resetFunnelData"
    }),
    checkAuth() {
      if (!this.authenticated) {
        router.push({ name: "mid-register" });
      }
    }
  }
};
const _hoisted_1 = { class: "pb-5 lg:pb-10" };
const _hoisted_2 = { class: "grid-rows-12 mx-auto grid grid-flow-row gap-5 lg:w-6/12" };
const _hoisted_3 = { class: "grid-rows-12 grid hidden grid-flow-row" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", { class: "funnel-header-1 mt-5 text-center" }, "We’ve found your match!", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "funnel-label text-center" }, " Save your faves and compare them later. ", -1);
const _hoisted_7 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_recommended_cars = resolveComponent("app-recommended-cars");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("img", {
          src: $data.companyLogo,
          class: "mx-auto",
          alt: $data.logoImageAlt
        }, null, 8, _hoisted_4)
      ]),
      _hoisted_5,
      _hoisted_6,
      createBaseVNode("a", {
        class: "mx-auto flex cursor-pointer items-center",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.resetFunnelData && _ctx.resetFunnelData(...args))
      }, [
        createBaseVNode("img", {
          src: $data.refreshImage,
          width: 15,
          class: "mr-2"
        }, null, 8, _hoisted_7),
        createTextVNode(" Restart ")
      ])
    ]),
    createVNode(_component_app_recommended_cars, { payload: $options.payload }, null, 8, ["payload"])
  ]);
}
const Funnel8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Funnel8 as default
};
