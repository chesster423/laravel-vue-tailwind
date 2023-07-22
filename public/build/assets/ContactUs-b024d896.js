import { ac as render, a as mapGetters, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, C as withDirectives, ad as vModelText, d as createVNode } from "./vendor-506bc2e6.js";
import { F as Faqs } from "./FAQS-f91939b2.js";
import { _ as _export_sfc, A as AppFooter } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
import "./AppAccordion-58070a4d.js";
const _sfc_main = {
  name: "About",
  components: {
    ChatBubbleLeftEllipsisIcon: render,
    Faqs,
    AppFooter
  },
  props: {},
  data() {
    return {
      companyLogo: "images/logo.png",
      logoImageAlt: "Company Logo",
      video: window.location.origin + "/videos/contact-us.mp4",
      contact: {
        full_name: null,
        email: null,
        contact_number: null,
        details: null
      }
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  }
};
const _hoisted_1 = {
  id: "contactUs",
  class: "mx-auto"
};
const _hoisted_2 = { class: "banner-section" };
const _hoisted_3 = {
  controls: "",
  class: "banner"
};
const _hoisted_4 = {
  autoplay: "",
  muted: "",
  playsinline: ""
};
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "contact-form-section container mx-auto" };
const _hoisted_7 = { class: "mx-auto lg:w-4/6" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "text-4xl font-bold" }, "CONTACT US")
], -1);
const _hoisted_9 = { class: "mt-8 text-center lg:float-right lg:w-2/6" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", { class: "mb-8 text-xl font-medium text-white" }, " HOW CAN WE HELP YOU? ", -1);
const _hoisted_11 = { class: "grid grid-flow-row gap-5 rounded-lg bg-white p-10" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("button", { class: "rounded bg-black p-5 text-white" }, " Enquire Now ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_footer = resolveComponent("app-footer");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("section", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("video", _hoisted_4, [
          createBaseVNode("source", {
            src: $data.video,
            type: "video/mp4"
          }, null, 8, _hoisted_5)
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("div", _hoisted_9, [
              _hoisted_10,
              createBaseVNode("div", _hoisted_11, [
                withDirectives(createBaseVNode("input", {
                  id: "model",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.contact.full_name = $event),
                  type: "text",
                  class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  placeholder: "Full Name",
                  required: ""
                }, null, 512), [
                  [vModelText, $data.contact.full_name]
                ]),
                withDirectives(createBaseVNode("input", {
                  id: "model",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.contact.email = $event),
                  type: "email",
                  class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  placeholder: "Email",
                  required: ""
                }, null, 512), [
                  [vModelText, $data.contact.email]
                ]),
                withDirectives(createBaseVNode("input", {
                  id: "model",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.contact.contact_number = $event),
                  type: "text",
                  class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  placeholder: "Phone Number",
                  required: ""
                }, null, 512), [
                  [vModelText, $data.contact.contact_number]
                ]),
                withDirectives(createBaseVNode("textarea", {
                  id: "overview",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.contact.details = $event),
                  class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                  placeholder: "Tell Us About You"
                }, null, 512), [
                  [vModelText, $data.contact.details]
                ]),
                _hoisted_12
              ])
            ])
          ])
        ])
      ])
    ]),
    createVNode(_component_app_footer, { "footer-class": "bg-black pt-10" })
  ]);
}
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ContactUs as default
};
