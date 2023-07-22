import { A as AppAccordion } from "./AppAccordion-58070a4d.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import { r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, w as withCtx, H as pushScopeId, I as popScopeId, e as createBaseVNode } from "./vendor-506bc2e6.js";
const _sfc_main = {
  name: "FaqsComponent",
  components: {
    AppAccordion
  },
  setup() {
    return {};
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {}
};
const FAQS_vue_vue_type_style_index_0_scoped_7ac57be9_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-7ac57be9"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "faq",
  class: "bg-dark mx-auto p-3 text-white dark:bg-slate-800",
  style: { "padding-bottom": "130px" }
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h1", { class: "text-center" }, "FAQS", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "faq-title text-xl font-semibold" }, "What is the Carsona vision?", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mb-6 mt-5" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "ml-4" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "mb-4" }, " The Carsona vision is to create a revolutionary vehicle buying experience that is seamless, convenient, and tailored to individual needs. "),
    /* @__PURE__ */ createBaseVNode("p", null, " We aim to transform the traditional car-buying process by leveraging technology, partnering with automotive industry leaders, and providing personalised solutions. ")
  ])
], -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "faq-title text-xl font-semibold" }, "What is find your Carsona?", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mb-6 mt-5" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "ml-4" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "mb-4" }, " 'Find your Carsona' is our innovative vehicle search feature designed to help you discover the perfect vehicle that matches your preferences and requirements. "),
    /* @__PURE__ */ createBaseVNode("p", null, " By going through our experience, our platform utilises advanced algorithms to generate personalised recommendations tailored specifically to you. ")
  ])
], -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "faq-title text-xl font-semibold" }, "Why do we value Transparency?", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mb-6 mt-5" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "ml-4" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "mb-4" }, " Over the past year we have conducted extensive market research in Western Australia. We engaged with automotive industry leaders, scientific, tech and business experts and most importantly you, our customers. We strive to provide clear and accurate information about our services, pricing, and processes, ensuring that you have all the information you need to make informed decisions. ")
  ])
], -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "faq-title text-xl font-semibold" }, "How do I get started?", -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "mb-6 mt-5" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "ml-4" }, [
    /* @__PURE__ */ createBaseVNode("p", { class: "mb-4" }, " Over the next few months we will continue to add more features and introduce new initiatives that could have a positive impact on your buying experience. "),
    /* @__PURE__ */ createBaseVNode("p", null, " We encourage you to follow us on our socials and spread the word. Keep and eye out for our latest updates and we continue to bring the Carsona vision to life. ")
  ])
], -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_accordion = resolveComponent("app-accordion");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_app_accordion, {
      class: "mb-5 border-t-2 border-slate-800 pt-5",
      "component-name": "faqs"
    }, {
      title: withCtx(() => [
        _hoisted_3
      ]),
      content: withCtx(() => [
        _hoisted_4
      ]),
      _: 1
    }),
    createVNode(_component_app_accordion, {
      class: "mb-5 border-t-2 border-slate-800 pt-5",
      "component-name": "faqs"
    }, {
      title: withCtx(() => [
        _hoisted_5
      ]),
      content: withCtx(() => [
        _hoisted_6
      ]),
      _: 1
    }),
    createVNode(_component_app_accordion, {
      class: "mb-5 border-t-2 border-slate-800 pt-5",
      "component-name": "faqs"
    }, {
      title: withCtx(() => [
        _hoisted_7
      ]),
      content: withCtx(() => [
        _hoisted_8
      ]),
      _: 1
    }),
    createVNode(_component_app_accordion, {
      class: "mb-5 border-t-2 border-slate-800 pt-5",
      "component-name": "faqs"
    }, {
      title: withCtx(() => [
        _hoisted_9
      ]),
      content: withCtx(() => [
        _hoisted_10
      ]),
      _: 1
    })
  ]);
}
const Faqs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7ac57be9"]]);
export {
  Faqs as F
};
