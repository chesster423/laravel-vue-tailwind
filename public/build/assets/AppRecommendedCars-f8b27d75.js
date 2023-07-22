import { a as mapGetters, b as mapActions, Q as axios, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, E as createTextVNode, d as createVNode, w as withCtx, D as createCommentVNode, J as Fragment, K as renderList, C as withDirectives, n as normalizeClass, B as toDisplayString, F as vShow } from "./vendor-506bc2e6.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-a3809c34.js";
const _sfc_main = {
  name: "Funnel8",
  components: {
    CircleSvg
  },
  props: {
    payload: {
      type: Object,
      default() {
        return {};
      }
    },
    classWidth: {
      type: String,
      default: "lg:w-7/12"
    }
  },
  data() {
    return {
      drop: false,
      carImage: window.location.origin + "/images/funnels/step-6/car.jpg",
      noImage: window.location.origin + "/images/no-img.jpg",
      isLoading: true
    };
  },
  computed: {
    ...mapGetters({
      recommended_cars: "funnel/recommendedCars",
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
  mounted() {
    this.initialize();
  },
  methods: {
    ...mapActions({
      getRecommendedCars: "funnel/getRecommendedCars"
    }),
    async initialize() {
      this.isLoading = true;
      await this.getRecommendedCars(this.payload);
      this.isLoading = false;
    },
    isSaved(car) {
      if (this.authenticated) {
        return Object.keys(car.user_saved_cars).length;
      }
      return null;
    },
    async saveCar(car) {
      if (!this.authenticated) {
        this.$swal.fire({
          icon: "warning",
          title: "You need an account to save cars.",
          text: "Do you want to create an account now?",
          showCancelButton: true,
          confirmButtonText: "Yes, register now!",
          footer: '<a href="/login/true" class="text-blue-400 hover:underline">I have an account. Go to Login.</a>'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push({
              name: "register",
              params: { redirect: true }
            });
          }
        });
      } else {
        const payload = {
          car_id: car.id
        };
        await axios.post("/api/car/user/save", payload).then((res) => {
          car.user_saved_cars = res.data === 1 ? [] : res.data;
        });
      }
    },
    currencyFormat(data) {
      return new Intl.NumberFormat("en-US").format(data);
    },
    closeDrop() {
      this.drop = false;
    }
  }
};
const _hoisted_1 = { class: "mx-auto pt-8" };
const _hoisted_2 = { class: "funnel-container container mx-auto" };
const _hoisted_3 = {
  key: 0,
  class: "grid-rows-12 mx-auto mt-10 grid grid-flow-row gap-5 text-center lg:w-6/12"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_6 = {
  key: 1,
  class: "text-center"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "Getting your cars. Please wait", -1);
const _hoisted_8 = { key: 2 };
const _hoisted_9 = { class: "lg:col-span-1" };
const _hoisted_10 = ["src"];
const _hoisted_11 = ["src"];
const _hoisted_12 = { class: "col-span-2" };
const _hoisted_13 = { class: "mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5" };
const _hoisted_14 = { class: "col-span-3 col-start-1" };
const _hoisted_15 = { class: "funnel-label-2 font-medium" };
const _hoisted_16 = { class: "mt-2 text-sm font-medium" };
const _hoisted_17 = { class: "mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5" };
const _hoisted_18 = { class: "funnel-bg-light-gray col-span-2 p-1 pb-0" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", { class: "text-xs" }, "Price Range", -1);
const _hoisted_20 = { class: "text-center text-sm font-bold" };
const _hoisted_21 = { class: "funnel-bg-light-gray p-1 pb-0" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("label", { class: "text-xs" }, "Body Type", -1);
const _hoisted_23 = { class: "text-center text-sm" };
const _hoisted_24 = { class: "funnel-bg-light-gray p-1 pb-0" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("label", { class: "text-xs" }, "Drive Type", -1);
const _hoisted_26 = { class: "text-center text-sm" };
const _hoisted_27 = { class: "funnel-bg-light-gray p-1 pb-0" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("label", { class: "text-xs" }, "Fuel Efficiency", -1);
const _hoisted_29 = { class: "text-center text-sm" };
const _hoisted_30 = { class: "mt-3 grid gap-5 lg:grid-flow-col lg:grid-cols-5" };
const _hoisted_31 = { class: "lg:col-start-4" };
const _hoisted_32 = ["href"];
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("button", {
  class: "funnel-button-rounded funnel-bg-blue float-right rounded-full px-3 py-2 text-xs text-white opacity-90 hover:opacity-100",
  style: { "width": "100px" }
}, " View Listing ", -1);
const _hoisted_34 = [
  _hoisted_33
];
const _hoisted_35 = {
  key: 1,
  class: "funnel-button-rounded funnel-bg-blue float-right rounded-full px-3 py-2 text-xs text-white opacity-50",
  style: { "width": "100px" },
  disabled: ""
};
const _hoisted_36 = { class: "col-start-5" };
const _hoisted_37 = ["onClick"];
const _hoisted_38 = ["fill"];
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
}, null, -1);
const _hoisted_40 = [
  _hoisted_39
];
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-1" }, "SAVE", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _ctx.recommended_cars.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
        createTextVNode(" No cars found within your spending range. "),
        _hoisted_4,
        _hoisted_5,
        createVNode(_component_router_link, {
          to: { name: "step-7" },
          class: "whitespace-nowrap text-base font-medium underline",
          onClick: $options.closeDrop
        }, {
          default: withCtx(({ isActive }) => [
            createTextVNode(" Go back ")
          ]),
          _: 1
        }, 8, ["onClick"])
      ])) : createCommentVNode("", true),
      $data.isLoading ? (openBlock(), createElementBlock("div", _hoisted_6, [
        createVNode(_component_CircleSvg, {
          class: "mx-auto mb-5 mt-5 h-6 w-6",
          stroke: "#000"
        }),
        _hoisted_7
      ])) : createCommentVNode("", true),
      !$data.isLoading ? (openBlock(), createElementBlock("div", _hoisted_8, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.recommended_cars, (val, index) => {
          var _a;
          return withDirectives((openBlock(), createElementBlock("div", {
            key: index,
            class: normalizeClass([$props.classWidth, "border-y-1 mx-auto mt-10 gap-4 border p-5 lg:grid lg:grid-cols-3 lg:border-0"])
          }, [
            createBaseVNode("div", _hoisted_9, [
              val.images[0] ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: val.images[0]["image_url"],
                class: "rounded-lg",
                alt: "Image"
              }, null, 8, _hoisted_10)) : createCommentVNode("", true),
              !val.images[0] ? (openBlock(), createElementBlock("img", {
                key: 1,
                src: $data.noImage,
                class: "rounded-lg",
                alt: "Image"
              }, null, 8, _hoisted_11)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("label", _hoisted_15, toDisplayString(val.model), 1)
                ])
              ]),
              createBaseVNode("p", _hoisted_16, toDisplayString(val.overview), 1),
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  _hoisted_19,
                  createBaseVNode("p", _hoisted_20, " $" + toDisplayString($options.currencyFormat(val.cost)), 1)
                ]),
                createBaseVNode("div", _hoisted_21, [
                  _hoisted_22,
                  createBaseVNode("p", _hoisted_23, toDisplayString(val.vehicle_type.vehicle_type_name), 1)
                ]),
                createBaseVNode("div", _hoisted_24, [
                  _hoisted_25,
                  createBaseVNode("p", _hoisted_26, toDisplayString((_a = val.drive_type) != null ? _a : null), 1)
                ]),
                createBaseVNode("div", _hoisted_27, [
                  _hoisted_28,
                  createBaseVNode("p", _hoisted_29, toDisplayString(val.fuel_consumption_combined), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_30, [
                createBaseVNode("div", _hoisted_31, [
                  val.dealership_url && _ctx.authenticated ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: val.dealership_url,
                    target: "_blank"
                  }, _hoisted_34, 8, _hoisted_32)) : createCommentVNode("", true),
                  !val.dealership_url ? (openBlock(), createElementBlock("button", _hoisted_35, " NA ")) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("button", {
                    class: "funnel-button-rounded funnel-bg-blue flex items-center rounded-full text-xs text-white opacity-90 hover:opacity-100",
                    style: { "width": "100px", "padding": "6px 20px" },
                    onClick: ($event) => $options.saveCar(val)
                  }, [
                    (openBlock(), createElementBlock("svg", {
                      fill: $options.isSaved(val) ? "#FFF" : "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      class: "h-5 w-5"
                    }, _hoisted_40, 8, _hoisted_38)),
                    _hoisted_41
                  ], 8, _hoisted_37)
                ])
              ])
            ])
          ], 2)), [
            [vShow, index < 5]
          ]);
        }), 128))
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const AppRecommendedCars = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AppRecommendedCars as A
};
