import { a as mapGetters, b as mapActions, Q as axios, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, d as createVNode, w as withCtx, D as createCommentVNode, J as Fragment, K as renderList, E as createTextVNode, z as createBlock, B as toDisplayString, H as pushScopeId, I as popScopeId } from "./vendor-506bc2e6.js";
import { t as track, _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "SavedCars",
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      cars: [],
      rendered: false,
      noImage: window.location.origin + "/images/no-img.jpg"
    };
  },
  computed: {
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
    this.getSavedCars();
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
    async getSavedCars() {
      this.rendered = false;
      await axios.get("../api/car/user").then((res) => {
        this.rendered = true;
        this.cars = res.data;
      });
    },
    engineValue(data) {
      var _a;
      const induction = (_a = data.engine_induction) != null ? _a : "";
      return data.engine_cylinders + "cyl " + data.engine_size + " " + induction;
    },
    removeCar(id, index) {
      this.$swal.fire({
        title: "Are you sure?",
        text: "This car will be removed from the list",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
      }).then((result) => {
        if (result.isConfirmed) {
          const payload = {
            car_id: id
          };
          axios.post("/api/car/user/save", payload).then((res) => {
            if (res.data === 1) {
              this.cars.splice(index, 1);
            }
          });
        }
      });
    }
  }
};
const SavedCars_vue_vue_type_style_index_0_scoped_6fd97b5a_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6fd97b5a"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "lg:-p-0 container mx-auto p-5" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mt-5" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "mb-4 text-2xl font-bold" }, "Saved Matches")
], -1));
const _hoisted_3 = {
  key: 0,
  class: "mt-10 text-center"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "No data available", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_6 = { class: "grid gap-4 lg:grid-cols-4" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "float-right h-6 w-6"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "p-5" };
const _hoisted_12 = { class: "text-lg font-bold" };
const _hoisted_13 = { class: "mb-2 mt-2 flex items-center" };
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon-engine" }, null, -1));
const _hoisted_15 = { class: "ml-4" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-xs leading-4 text-slate-400" }, "Engine", -1));
const _hoisted_17 = { class: "text-sm font-medium" };
const _hoisted_18 = { class: "mb-2 flex items-center" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon-drive-type" }, null, -1));
const _hoisted_20 = { class: "ml-4" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-xs leading-4 text-slate-400" }, "Drive Type", -1));
const _hoisted_22 = { class: "text-sm font-medium" };
const _hoisted_23 = { class: "mb-2 flex items-center" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon-body-type" }, null, -1));
const _hoisted_25 = { class: "ml-4" };
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-xs leading-4 text-slate-400" }, "Body Type", -1));
const _hoisted_27 = { class: "text-sm font-medium" };
const _hoisted_28 = { class: "mb-2 flex items-center" };
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon-fuel-efficiency" }, null, -1));
const _hoisted_30 = { class: "ml-4" };
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-xs leading-4 text-slate-400" }, "Fuel Efficiency", -1));
const _hoisted_32 = { class: "text-sm font-medium" };
const _hoisted_33 = { class: "mt-4 grid grid-cols-2" };
const _hoisted_34 = ["href"];
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("button", {
  class: "funnel-button-rounded funnel-bg-blue rounded-full px-3 py-2 text-xs text-white opacity-90 hover:opacity-100",
  style: { "width": "100px" }
}, " View Listing ", -1));
const _hoisted_36 = [
  _hoisted_35
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createBaseVNode("div", null, [
      $data.cars.length == 0 ? (openBlock(), createElementBlock("p", _hoisted_3, [
        _hoisted_4,
        _hoisted_5,
        createVNode(_component_router_link, {
          to: { name: "step-1" },
          class: "mt-5 block text-blue-500 hover:text-blue-300"
        }, {
          default: withCtx(() => [
            createTextVNode(" Start getting your carsona now! ")
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_6, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.cars, (val, key) => {
        var _a, _b, _c, _d;
        return openBlock(), createElementBlock("div", {
          key,
          class: "border-1 cursor-pointer rounded border"
        }, [
          createBaseVNode("button", {
            class: "w-full p-2",
            onClick: ($event) => $options.removeCar(val.car.id, key)
          }, _hoisted_9, 8, _hoisted_7),
          _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "car-info", params: { id: val.car.id } }
          }, {
            default: withCtx(() => [
              createBaseVNode("img", {
                src: val.car.images[0] ? val.car.images[0].image_url : $data.noImage,
                class: "mx-auto max-h-48"
              }, null, 8, _hoisted_10)
            ]),
            _: 2
          }, 1032, ["to"])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("label", _hoisted_12, toDisplayString(val.car.model), 1),
            createBaseVNode("div", _hoisted_13, [
              _hoisted_14,
              createBaseVNode("div", _hoisted_15, [
                _hoisted_16,
                createBaseVNode("p", _hoisted_17, toDisplayString((_a = $options.engineValue(val.car)) != null ? _a : "Not specified"), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_18, [
              _hoisted_19,
              createBaseVNode("div", _hoisted_20, [
                _hoisted_21,
                createBaseVNode("p", _hoisted_22, toDisplayString((_b = val.car.drive_train_type) != null ? _b : "Not specified"), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_23, [
              _hoisted_24,
              createBaseVNode("div", _hoisted_25, [
                _hoisted_26,
                createBaseVNode("p", _hoisted_27, toDisplayString((_c = val.car.engine) != null ? _c : "Not specified"), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_28, [
              _hoisted_29,
              createBaseVNode("div", _hoisted_30, [
                _hoisted_31,
                createBaseVNode("p", _hoisted_32, toDisplayString((_d = val.car.fuel_consumption_combined) != null ? _d : "Not specified"), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_33, [
              val.car.dealership_url ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: val.car.dealership_url,
                target: "_blank"
              }, _hoisted_36, 8, _hoisted_34)) : createCommentVNode("", true)
            ])
          ])
        ]);
      }), 128))
    ])
  ]);
}
const SavedCars = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6fd97b5a"]]);
export {
  SavedCars as default
};
