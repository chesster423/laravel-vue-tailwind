import { a as mapGetters, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, d as createVNode } from "./vendor-506bc2e6.js";
import { F as Faqs } from "./FAQS-f91939b2.js";
import { _ as _export_sfc, A as AppFooter } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
import "./AppAccordion-58070a4d.js";
const _sfc_main = {
  name: "Faq",
  components: {
    Faqs,
    AppFooter
  },
  props: {},
  data() {
    return {
      companyLogo: "images/logo.png",
      logoImageAlt: "Company Logo",
      video: window.location.origin + "/videos/about-us.mp4",
      aboutImage: window.location.origin + "/images/about-us/media-carsona.png",
      carouselImages: [
        window.location.origin + "/images/home/carousel-capricorn.png",
        window.location.origin + "/images/home/carousel-pluseight.png",
        window.location.origin + "/images/home/carousel-spacecubed.png",
        window.location.origin + "/images/home/carousel-techstars.png"
      ]
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
  id: "faqs-page",
  class: "mx-auto"
};
const _hoisted_2 = { class: "bg-black py-24 pb-48" };
const _hoisted_3 = { class: "container mx-auto pt-10 lg:w-5/12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_faqs = resolveComponent("faqs");
  const _component_app_footer = resolveComponent("app-footer");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("section", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createVNode(_component_faqs)
      ])
    ]),
    createVNode(_component_app_footer, { "footer-class": "bg-black pt-10" })
  ]);
}
const FAQS = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  FAQS as default
};
