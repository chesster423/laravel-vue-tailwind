import { o as openBlock, c as createElementBlock, C as withDirectives, aG as vModelSelect, e as createBaseVNode, D as createCommentVNode, L as createStaticVNode, az as render, aH as render$1, r as resolveComponent, n as normalizeClass, G as withModifiers, d as createVNode, J as Fragment, K as renderList, E as createTextVNode, B as toDisplayString, Z as renderSlot, z as createBlock, aI as requireLodash_clonedeep } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import { g as getDefaultExportFromCjs } from "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$2 = {
  name: "PerPage",
  components: {},
  props: {
    items: { type: Array, required: true },
    perPage: { type: Number, default: 10 }
  },
  setup() {
    return {};
  },
  data() {
    return {
      per: 10,
      ready: false
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.per = this.perPage;
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {}
};
const _hoisted_1$2 = {
  key: 0,
  class: "inline-block rounded border pl-4"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("label", null, "Per Page", -1);
const _hoisted_3$2 = /* @__PURE__ */ createStaticVNode('<option value="1" class="focus:outline-none">1</option><option value="5" class="focus:outline-none">5</option><option value="10" class="focus:outline-none">10</option><option value="25" class="focus:outline-none">25</option><option value="50" class="focus:outline-none">50</option><option value="100" class="focus:outline-none">100</option><option value="1000" class="focus:outline-none">1000</option><option value="1000" class="focus:outline-none">10000</option><option value="1000000000000" class="focus:outline-none">All</option>', 9);
const _hoisted_12 = [
  _hoisted_3$2
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.items && $props.items.length >= 1 ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    withDirectives(createBaseVNode("select", {
      id: "perPage",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.per = $event),
      required: "",
      name: "perPage",
      class: "utline-0 border-0 bg-transparent text-center text-gray-600 focus:outline-0 active:outline-0 dark:text-gray-100",
      onChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("changed", $data.per))
    }, _hoisted_12, 544), [
      [vModelSelect, $data.per]
    ])
  ])) : createCommentVNode("", true);
}
const PerPage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Pagination",
  components: {
    ChevronRightIcon: render,
    ChevronLeftIcon: render$1
  },
  props: {
    pagination: { type: Object, required: true },
    offset: { type: Number, default: 4 }
  },
  computed: {
    pages() {
      if (!this.pagination.to) {
        return null;
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      const pages = [];
      for (let page = from; page <= to; page++) {
        pages.push(page);
      }
      return pages;
    },
    showPagination() {
      if (this.pages.length > 1) {
        return true;
      }
      return false;
    }
  },
  methods: {
    change(page) {
      this.$emit("paginate", page);
    }
  }
};
const _hoisted_1$1 = { class: "vue-pagination" };
const _hoisted_2$1 = {
  key: 0,
  class: "list-reset border-grey-light mb-2 flex w-auto rounded border font-sans"
};
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Previous", -1);
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Next", -1);
const _hoisted_6$1 = { class: "mb-2 text-center text-xs" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    $options.showPagination ? (openBlock(), createElementBlock("ul", _hoisted_2$1, [
      createBaseVNode("li", null, [
        createBaseVNode("span", {
          class: normalizeClass(["hover:bg-blue text-blue border-grey-light block cursor-pointer border-r px-3 py-1 hover:text-white", $props.pagination.current_page == 1 ? "disabled opacity-50" : ""]),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.change($props.pagination.current_page - 1), ["prevent"]))
        }, [
          createVNode(_component_ChevronLeftIcon, { class: "ml-2 mr-2 h-6 w-6" }),
          _hoisted_3$1
        ], 2)
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.pages, (page) => {
        return openBlock(), createElementBlock("li", { key: page }, [
          createBaseVNode("span", {
            class: normalizeClass([
              "block cursor-pointer rounded px-3 py-1",
              page == $props.pagination.current_page ? "border-blue disabled border-r bg-slate-900 text-white" : "text-blue-400 hover:bg-slate-600 hover:text-white"
            ]),
            onClick: withModifiers(($event) => $options.change(page), ["stop"])
          }, toDisplayString(page), 11, _hoisted_4$1)
        ]);
      }), 128)),
      createBaseVNode("li", null, [
        createBaseVNode("span", {
          class: normalizeClass([
            "hover:bg-blue text-blue block cursor-pointer px-3 py-1 hover:text-white",
            $props.pagination.current_page == $props.pagination.last_page ? "disabled opacity-50" : ""
          ]),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.change($props.pagination.current_page + 1), ["prevent"]))
        }, [
          createVNode(_component_ChevronRightIcon, { class: "ml-2 mr-2 h-6 w-6" }),
          _hoisted_5$1
        ], 2)
      ])
    ])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_6$1, [
      createTextVNode(" Showing page " + toDisplayString($props.pagination.current_page) + " of " + toDisplayString($props.pagination.last_page) + " ", 1),
      _hoisted_7$1,
      createTextVNode(" (Total Records: " + toDisplayString($props.pagination.total) + ") ", 1)
    ])
  ]);
}
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "AppModal",
  props: {
    showModal: { type: Boolean, default: false },
    showClose: { type: Boolean, default: true },
    modalWidthClass: {
      type: String,
      default: "min-w-[96%] sm:min-w-[60%] lg:min-w-[50%]"
    }
  },
  data() {
    return {};
  },
  computed: {
    hasTitleSlot() {
      return this.$slots.title;
    },
    hasBodySlot() {
      return this.$slots.body;
    },
    hasFooterSlot() {
      return this.$slots.footer;
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    confirmModal() {
      this.$emit("confirmModal");
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
};
const _hoisted_2 = { class: "relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-slate-600" };
const _hoisted_3 = { class: "flex items-start justify-between rounded-t p-5" };
const _hoisted_4 = { class: "text-3xl font-semibold" };
const _hoisted_5 = { class: "relative flex-auto p-6" };
const _hoisted_6 = {
  key: 0,
  class: "flex items-center justify-end p-6"
};
const _hoisted_7 = {
  key: 1,
  class: "flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6"
};
const _hoisted_8 = {
  key: 1,
  class: "fixed inset-0 z-40 bg-black opacity-25"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock("div", null, [
    $props.showModal ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createBaseVNode("div", {
        class: normalizeClass(["relative mx-auto my-6 w-auto", $props.modalWidthClass])
      }, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h3", _hoisted_4, [
              $options.hasTitleSlot ? renderSlot(_ctx.$slots, "title", { key: 0 }) : createCommentVNode("", true)
            ]),
            $props.showClose ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              text: "X",
              class: "text-1xl float-right border-0 bg-transparent text-gray-600 shadow-none outline-none hover:text-gray-800 focus:outline-none",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.closeModal())
            })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5, [
            $options.hasBodySlot ? renderSlot(_ctx.$slots, "body", { key: 0 }) : createCommentVNode("", true)
          ]),
          $options.hasFooterSlot ? (openBlock(), createElementBlock("div", _hoisted_6, [
            $options.hasFooterSlot ? renderSlot(_ctx.$slots, "footer", { key: 0 }) : createCommentVNode("", true)
          ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
            createBaseVNode("button", {
              class: "mb-1 mr-1 rounded border border-solid border-red-500 bg-transparent px-6 py-3 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-red-500 hover:text-white focus:outline-none active:bg-red-600",
              type: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.closeModal())
            }, " Close "),
            createBaseVNode("button", {
              class: "background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none",
              type: "button",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.confirmModal())
            }, " Confirm ")
          ]))
        ])
      ], 2)
    ])) : createCommentVNode("", true),
    $props.showModal ? (openBlock(), createElementBlock("div", _hoisted_8)) : createCommentVNode("", true)
  ]);
}
const AppModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var lodash_clonedeepExports = requireLodash_clonedeep();
const clonedeep = /* @__PURE__ */ getDefaultExportFromCjs(lodash_clonedeepExports);
const default_css_vue_type_style_index_0_src_true_lang = "";
export {
  AppModal as A,
  Pagination as P,
  PerPage as a,
  clonedeep as c
};
