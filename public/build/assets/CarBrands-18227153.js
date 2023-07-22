import { C as CircleSvg, _ as _export_sfc } from "./app-a3809c34.js";
import { az as render, aF as render$1, aC as render$2, a as mapGetters, b as mapActions, Q as axios, h as hooks, r as resolveComponent, y as resolveDirective, o as openBlock, c as createElementBlock, C as withDirectives, z as createBlock, w as withCtx, e as createBaseVNode, J as Fragment, K as renderList, D as createCommentVNode, ad as vModelText, B as toDisplayString, d as createVNode, H as pushScopeId, I as popScopeId } from "./vendor-506bc2e6.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Users",
  components: {
    ChevronRightIcon: render,
    PlusIcon: render$1,
    CircleSvg,
    PencilSquareIcon: render$2
  },
  props: {
    showingForm: { type: Boolean, default: false }
  },
  setup() {
    return {};
  },
  data() {
    return {
      car_brands: [],
      dataReady: false,
      showCreateUserForm: false,
      showModal: false,
      brandName: null,
      showCreateCarBrandsForm: false,
      carBrandData: {}
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
    this.getCarBrands();
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    showModalForm() {
      this.showModal = true;
    },
    async createCarBrand() {
      await axios.post("../api/car_brands", { brand_name: this.brandName }).then((response) => {
        if (response.status === 200) {
          this.showModal = false;
          this.brandName = null;
          this.popToast({
            message: "Car brand added!",
            timer: 5e3,
            icon: "success"
          });
          this.getCarBrands();
        }
      }).catch((error) => {
        this.popToast({
          message: error.response.data.message,
          timer: 5e3,
          icon: "error"
        });
      });
    },
    async updateCarBrand() {
      await axios.post("../api/update_car_brand", this.carBrandData).then((response) => {
        this.popToast({
          message: "Car brand saved!",
          timer: 5e3,
          icon: "success"
        });
        this.carBrandData = {};
        this.brandName = null;
        this.showModal = false;
      }).catch((error) => {
        this.popToast({
          message: error.response.data.message,
          timer: 5e3,
          icon: "error"
        });
      });
    },
    closeModal() {
      this.carBrandData = {};
      this.brandName = null;
      this.showModal = false;
    },
    async getCarBrands() {
      this.dataReady = false;
      await axios.get("../api/car_brands").then((response) => {
        this.dataReady = true;
        this.car_brands = response.data;
      });
    },
    parseDisplayDate(date) {
      return hooks(date).format("MMM Do YYYY, h:mma");
    },
    editCarBrand(data) {
      this.carBrandData = data;
      this.brandName = data.brand_name;
    }
  }
};
const CarBrands_vue_vue_type_style_index_0_scoped_d0cb14e9_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-d0cb14e9"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "car-brands",
  class: "bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Create New User", -1));
const _hoisted_3 = {
  class: "min-w-full leading-normal",
  "aria-describedby": "Car Brands Table"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", { class: "border-b-2 border-gray-300 bg-gray-200 text-gray-600 dark:border-gray-500 dark:bg-slate-900 dark:text-gray-200" }, [
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Brand Name "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Date Created "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Last Update "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Actions ")
  ])
], -1));
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_7 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_8 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_9 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Edit Car Brand", -1));
const _hoisted_11 = { key: 1 };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("tr", { class: "bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100" }, [
  /* @__PURE__ */ createBaseVNode("td", {
    colspan: "6",
    class: "pb-10 pt-10 text-center"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "fa fa-circle-notch fa-spin fa-5x text-gray-400" })
  ])
], -1));
const _hoisted_13 = [
  _hoisted_12
];
const _hoisted_14 = {
  key: 0,
  class: "mt-5 text-center"
};
const _hoisted_15 = {
  key: 1,
  class: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
};
const _hoisted_16 = { class: "relative mx-auto my-6 w-auto" };
const _hoisted_17 = { class: "relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-slate-600" };
const _hoisted_18 = {
  key: 0,
  class: "p-5"
};
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  class: "mb-2 block text-sm font-bold text-gray-700",
  for: "username"
}, " Brand Name ", -1));
const _hoisted_20 = {
  key: 1,
  class: "p-5"
};
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  class: "mb-2 block text-sm font-bold text-gray-700",
  for: "username"
}, " Old Brand Name ", -1));
const _hoisted_22 = ["value"];
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  class: "mb-2 block text-sm font-bold text-gray-700",
  for: "username"
}, " New Brand Name ", -1));
const _hoisted_24 = { class: "flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6" };
const _hoisted_25 = {
  key: 2,
  class: "fixed inset-0 z-40 bg-black opacity-25"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PlusIcon = resolveComponent("PlusIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_PencilSquareIcon = resolveComponent("PencilSquareIcon");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    withDirectives((openBlock(), createBlock(_component_AppButton, {
      disabled: $data.showCreateCarBrandsForm || !$data.dataReady,
      class: "float-right mb-2 px-2 py-2 text-sm font-medium",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.showModalForm())
    }, {
      text: withCtx(() => [
        $data.dataReady ? (openBlock(), createBlock(_component_PlusIcon, {
          key: 0,
          class: "ml-2 mr-2 mt-0 h-4 w-4"
        })) : createCommentVNode("", true),
        !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
          key: 1,
          class: "ml-2 mr-2 mt-0 h-4 w-4"
        })) : createCommentVNode("", true),
        _hoisted_2
      ]),
      _: 1
    }, 8, ["disabled"])), [
      [_directive_tippy, "Create Car Brand"]
    ]),
    createBaseVNode("table", _hoisted_3, [
      _hoisted_4,
      $data.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_5, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.car_brands, (val, key) => {
          return openBlock(), createElementBlock("tr", { key }, [
            createBaseVNode("td", _hoisted_6, toDisplayString(val.brand_name), 1),
            createBaseVNode("td", _hoisted_7, toDisplayString($options.parseDisplayDate(val.created_at)), 1),
            createBaseVNode("td", _hoisted_8, toDisplayString($options.parseDisplayDate(val.updated_at)), 1),
            createBaseVNode("td", _hoisted_9, [
              createVNode(_component_AppButton, {
                warning: "",
                disabled: _ctx.locked,
                loading: !$data.dataReady,
                class: "mr-2 px-1 py-1 text-sm",
                onClick: ($event) => {
                  $options.editCarBrand(val);
                  $options.showModalForm();
                }
              }, {
                text: withCtx(() => [
                  $data.dataReady ? (openBlock(), createBlock(_component_PencilSquareIcon, {
                    key: 0,
                    class: "ml-2 mr-2 mt-0 h-4 w-4"
                  })) : createCommentVNode("", true),
                  !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
                    key: 1,
                    class: "mr-2 h-3 w-3"
                  })) : createCommentVNode("", true),
                  _hoisted_10
                ]),
                _: 2
              }, 1032, ["disabled", "loading", "onClick"])
            ])
          ]);
        }), 128))
      ])) : createCommentVNode("", true),
      !$data.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_11, _hoisted_13)) : createCommentVNode("", true)
    ]),
    $data.dataReady && $data.car_brands.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_14, " No data found ")) : createCommentVNode("", true),
    $data.showModal ? (openBlock(), createElementBlock("div", _hoisted_15, [
      createBaseVNode("div", _hoisted_16, [
        createBaseVNode("div", _hoisted_17, [
          !$data.carBrandData.id ? (openBlock(), createElementBlock("div", _hoisted_18, [
            _hoisted_19,
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.brandName = $event),
              class: "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
              type: "text",
              placeholder: "Enter brand name"
            }, null, 512), [
              [vModelText, $data.brandName]
            ])
          ])) : createCommentVNode("", true),
          $data.carBrandData.id ? (openBlock(), createElementBlock("div", _hoisted_20, [
            _hoisted_21,
            createBaseVNode("input", {
              value: $data.brandName,
              class: "focus:shadow-outline mb-5 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
              type: "text",
              placeholder: "Enter new brand name",
              disabled: true
            }, null, 8, _hoisted_22),
            _hoisted_23,
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.carBrandData.brand_name = $event),
              class: "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
              type: "text",
              placeholder: "Enter new brand name"
            }, null, 512), [
              [vModelText, $data.carBrandData.brand_name]
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("button", {
              class: "mb-1 mr-1 rounded border border-solid border-red-500 bg-transparent px-6 py-3 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-red-500 hover:text-white focus:outline-none active:bg-red-600",
              type: "button",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.closeModal())
            }, " Close "),
            !$data.carBrandData.id ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none",
              type: "button",
              onClick: _cache[4] || (_cache[4] = ($event) => $options.createCarBrand())
            }, " Confirm ")) : createCommentVNode("", true),
            $data.carBrandData.id ? (openBlock(), createElementBlock("button", {
              key: 1,
              class: "background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none",
              type: "button",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.updateCarBrand())
            }, " Save changes ")) : createCommentVNode("", true)
          ])
        ])
      ])
    ])) : createCommentVNode("", true),
    $data.showModal ? (openBlock(), createElementBlock("div", _hoisted_25)) : createCommentVNode("", true)
  ]);
}
const CarBrands = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d0cb14e9"]]);
export {
  CarBrands as default
};
