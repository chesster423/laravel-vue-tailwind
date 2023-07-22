import { m as mapState, a as mapGetters, b as mapActions, Q as axios, r as resolveComponent, o as openBlock, c as createElementBlock, B as toDisplayString, D as createCommentVNode, d as createVNode, w as withCtx, z as createBlock, E as createTextVNode, H as pushScopeId, I as popScopeId, e as createBaseVNode } from "./vendor-506bc2e6.js";
import { t as track, b as parseDisplayDate, _ as _export_sfc } from "./app-a3809c34.js";
import { A as AppRecommendedCars } from "./AppRecommendedCars-f8b27d75.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "History",
  components: {
    AppRecommendedCars
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      payload: {},
      rendered: false,
      funnelDate: "",
      fetchingData: true
    };
  },
  computed: {
    ...mapState("sidebar", {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen
    }),
    ...mapState("auth", {
      user: (state) => state.user,
      roles: (state) => state.roles,
      token: (state) => state.token,
      logins: (state) => state.logins
    }),
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    })
  },
  watch: {},
  created() {
  },
  mounted() {
    this.getUserHistory();
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    track,
    parseDisplayDate,
    async getUserHistory() {
      this.rendered = false;
      this.fetchingData = true;
      await axios.get("../api/car/user/preference/latest").then((res) => {
        const response = res.data;
        this.fetchingData = false;
        if (response.id) {
          this.rendered = true;
          const payload = {};
          this.funnelDate = this.parseDisplayDate(response.created_at);
          payload.personalities = response.personalities ? response.personalities.split(", ") : null;
          payload.personal_preferences = response.perks ? response.perks.split(", ") : null;
          payload.preferredVehicleTypes = response.vehicle_types ? response.vehicle_types.split(", ") : null;
          payload.activities = response.activities ? response.activities.split(", ") : null;
          payload.fuel_types = response.fuel_types ? response.fuel_types.split(", ") : null;
          payload.spendingRange = response.spendingRange ? response.spendingRange.split("-") : null;
          payload.viewOnly = true;
          this.payload = payload;
        }
      });
    }
  }
};
const History_vue_vue_type_style_index_0_scoped_df1eccd8_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-df1eccd8"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "lg:-p-0 container mx-auto p-5" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mt-5" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "mb-4 text-2xl font-bold" }, "Previous Results")
], -1));
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "funnel-header-1 mb-5 mt-5 text-center" }, " We’ve found your match! ", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "funnel-label mb-3 text-center" }, " Save your faves and compare them later. ", -1));
const _hoisted_6 = {
  key: 0,
  class: "text-center italic text-slate-600"
};
const _hoisted_7 = {
  key: 1,
  class: "mt-10 text-center"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "No data available", -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_app_recommended_cars = resolveComponent("app-recommended-cars");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    !$data.fetchingData && $data.rendered ? (openBlock(), createElementBlock("div", _hoisted_3, [
      _hoisted_4,
      _hoisted_5,
      $data.funnelDate ? (openBlock(), createElementBlock("p", _hoisted_6, " Last recorded: " + toDisplayString($data.funnelDate), 1)) : createCommentVNode("", true)
    ])) : createCommentVNode("", true),
    !$data.fetchingData && !$data.rendered ? (openBlock(), createElementBlock("p", _hoisted_7, [
      _hoisted_8,
      _hoisted_9,
      createVNode(_component_router_link, {
        to: { name: "step-1" },
        class: "mt-5 block text-blue-500 hover:text-blue-300"
      }, {
        default: withCtx(() => [
          createTextVNode(" Start getting your carsona now! ")
        ]),
        _: 1
      })
    ])) : createCommentVNode("", true),
    $data.rendered ? (openBlock(), createBlock(_component_app_recommended_cars, {
      key: 2,
      payload: $data.payload,
      "class-width": "lg:w-7/12"
    }, null, 8, ["payload"])) : createCommentVNode("", true)
  ]);
}
const History = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df1eccd8"]]);
export {
  History as default
};
