import { C as CircleSvg, _ as _export_sfc } from "./app-a3809c34.js";
import { az as render, aF as render$1, aC as render$2, x as ue, a as mapGetters, b as mapActions, Q as axios, h as hooks, r as resolveComponent, y as resolveDirective, o as openBlock, c as createElementBlock, e as createBaseVNode, z as createBlock, w as withCtx, D as createCommentVNode, d as createVNode, C as withDirectives, ad as vModelText, J as Fragment, K as renderList, E as createTextVNode, n as normalizeClass, B as toDisplayString, H as pushScopeId, I as popScopeId } from "./vendor-506bc2e6.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Users",
  components: {
    ChevronRightIcon: render,
    PlusIcon: render$1,
    CircleSvg,
    PencilSquareIcon: render$2,
    Switch: ue
    // eslint-disable-line
  },
  props: {
    showingForm: { type: Boolean, default: false }
  },
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      showCreateUserForm: false,
      showModal: false,
      brandName: null,
      cars: [],
      filters: {},
      search: ""
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    }),
    filteredList() {
      return this.cars.filter((car) => {
        return car.model.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    this.getCars();
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
    async getCars() {
      this.dataReady = false;
      await axios.get("../api/cars", this.filters).then((response) => {
        if (response.status === 200) {
          this.cars = response.data;
          this.dataReady = true;
        }
      }).catch((error) => {
        this.popToast({
          message: error.response.data.message,
          timer: 5e3,
          icon: "error"
        });
      });
    },
    parseDisplayDate(date) {
      return hooks(date).format("MMM Do YYYY, h:mma");
    },
    async toggleCarIsActive(data) {
      const id = data.id;
      const payload = {
        car_brand_id: data.brand.id,
        model: data.model,
        vehicle_type_id: data.vehicle_type.id,
        is_active: data.is_active
      };
      await axios.post("../../api/car/" + id, payload).then((response) => {
        this.popToast({
          message: "Update successful!",
          timer: 5e3,
          icon: "success"
        });
      }).catch((error) => {
        this.popToast({
          message: error.response.data.message,
          timer: 5e3,
          icon: "error"
        });
      });
    }
  }
};
const Cars_vue_vue_type_style_index_0_scoped_6b5ecd96_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-6b5ecd96"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "car-brands",
  class: "bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
};
const _hoisted_2 = {
  class: "mb-6 text-sm font-semibold",
  "aria-label": "Breadcrumb"
};
const _hoisted_3 = { class: "inline-flex list-none p-0" };
const _hoisted_4 = { class: "flex items-center" };
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = { class: "mb-2 flex items-center gap-5" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Create New Car", -1));
const _hoisted_9 = {
  class: "min-w-full leading-normal",
  "aria-describedby": "Car Brands Table"
};
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", { class: "border-b-2 border-gray-300 bg-gray-200 text-gray-600 dark:border-gray-500 dark:bg-slate-900 dark:text-gray-200" }, [
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Brand Name "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Model "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Body Type "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Year "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Is Active "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Actions ")
  ])
], -1));
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_13 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_14 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_15 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_16 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_17 = ["onClick"];
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Toggle Theme", -1));
const _hoisted_19 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Edit Car Brand", -1));
const _hoisted_21 = { key: 1 };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("tr", { class: "bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100" }, [
  /* @__PURE__ */ createBaseVNode("td", {
    colspan: "6",
    class: "pb-10 pt-10 text-center"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "fa fa-circle-notch fa-spin fa-5x text-gray-400" })
  ])
], -1));
const _hoisted_23 = [
  _hoisted_22
];
const _hoisted_24 = {
  key: 0,
  class: "mt-5 text-center"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _component_PlusIcon = resolveComponent("PlusIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_Switch = resolveComponent("Switch");
  const _component_PencilSquareIcon = resolveComponent("PencilSquareIcon");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ol", _hoisted_3, [
        createBaseVNode("li", _hoisted_4, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "admin" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createTextVNode(" Admin ")
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("li", _hoisted_5, [
          createVNode(_component_ChevronRightIcon, { class: "ml-2 mr-2 mt-0 h-4 w-4" })
        ]),
        createBaseVNode("li", _hoisted_6, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "cars" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, " Cars ", 2)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_7, [
      withDirectives(createBaseVNode("input", {
        id: "model",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.search = $event),
        type: "text",
        class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
        placeholder: "Search car",
        required: ""
      }, null, 512), [
        [vModelText, $data.search]
      ]),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 0,
        to: { name: "create-car" }
      }, {
        default: withCtx(({ isActive }) => [
          withDirectives((openBlock(), createBlock(_component_AppButton, { class: "float-right px-2 py-2 text-sm font-medium" }, {
            text: withCtx(() => [
              $data.dataReady ? (openBlock(), createBlock(_component_PlusIcon, {
                key: 0,
                class: "ml-2 mr-2 mt-0 h-4 w-4"
              })) : createCommentVNode("", true),
              !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
                key: 1,
                class: "ml-2 mr-2 mt-0 h-4 w-4"
              })) : createCommentVNode("", true),
              _hoisted_8
            ]),
            _: 1
          })), [
            [_directive_tippy, "Create Car"]
          ])
        ]),
        _: 1
      })) : createCommentVNode("", true)
    ]),
    createBaseVNode("table", _hoisted_9, [
      _hoisted_10,
      $data.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_11, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.filteredList, (val, key) => {
          return openBlock(), createElementBlock("tr", { key }, [
            createBaseVNode("td", _hoisted_12, toDisplayString(val.brand.brand_name), 1),
            createBaseVNode("td", _hoisted_13, toDisplayString(val.model), 1),
            createBaseVNode("td", _hoisted_14, toDisplayString(val.vehicle_type.vehicle_type_name), 1),
            createBaseVNode("td", _hoisted_15, toDisplayString(val.model_year), 1),
            createBaseVNode("td", _hoisted_16, [
              createBaseVNode("span", {
                onClick: ($event) => $options.toggleCarIsActive(val)
              }, [
                createVNode(_component_Switch, {
                  modelValue: val.is_active,
                  "onUpdate:modelValue": ($event) => val.is_active = $event,
                  class: normalizeClass([val.is_active ? "bg-green-400" : "bg-gray-200", "relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"])
                }, {
                  default: withCtx(() => [
                    _hoisted_18,
                    createBaseVNode("span", {
                      "aria-hidden": "true",
                      class: normalizeClass([
                        val.is_active ? "translate-x-5 bg-white" : "translate-x-0 bg-white",
                        "pointer-events-none inline-block h-[22px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
                      ])
                    }, null, 2)
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue", "class"])
              ], 8, _hoisted_17)
            ]),
            createBaseVNode("td", _hoisted_19, [
              _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                to: { name: "edit-car", params: { id: val.id } }
              }, {
                default: withCtx(({ isActive }) => [
                  createVNode(_component_AppButton, {
                    warning: "",
                    loading: !$data.dataReady,
                    class: "mr-2 px-1 py-1 text-sm"
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
                      _hoisted_20
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 2
              }, 1032, ["to"])) : createCommentVNode("", true)
            ])
          ]);
        }), 128))
      ])) : createCommentVNode("", true),
      !$data.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_21, _hoisted_23)) : createCommentVNode("", true)
    ]),
    $data.dataReady && $data.cars.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_24, " No data found ")) : createCommentVNode("", true)
  ]);
}
const Cars = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6b5ecd96"]]);
export {
  Cars as default
};
