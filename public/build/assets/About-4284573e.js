import { ac as render, a as mapGetters, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, J as Fragment, K as renderList, d as createVNode, L as createStaticVNode } from "./vendor-506bc2e6.js";
import { _ as _export_sfc, A as AppFooter } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "About",
  components: {
    ChatBubbleLeftEllipsisIcon: render,
    AppFooter
  },
  props: {},
  data() {
    return {
      companyLogo: "images/logo.png",
      logoImageAlt: "Company Logo",
      video: window.location.origin + "/videos/about-us.mp4",
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
    }),
    aboutImages() {
      return this.$store.getters.getAboutData.images;
    },
    socials() {
      return this.$store.getters.getSocials;
    }
  }
};
const _hoisted_1 = {
  id: "about",
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
  loop: "",
  playsinline: ""
};
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "social-section container mx-auto" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, [
  /* @__PURE__ */ createBaseVNode("h1", { class: "font-bold" }, "ABOUT US")
], -1);
const _hoisted_8 = { class: "mx-auto mb-8 mt-12 flex items-center justify-center gap-3 lg:gap-5" };
const _hoisted_9 = ["href"];
const _hoisted_10 = ["src"];
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<section class="about-carsona-description container mx-auto mt-10 lg:mt-0"><div class="mx-auto p-5 text-center lg:w-8/12 lg:text-center"><p class="mb-4">We have one vision. Seamless.</p><p class="mb-4"> Carsona is powered by a sophisticated algorithm that focuses on your lifestyle and interests to find the perfect car for you. </p><p class="mb-4"> Welcome to Carsona – where transparency, innovation, and you converge. </p></div></section>', 1);
const _hoisted_12 = { class: "container mx-auto" };
const _hoisted_13 = { class: "mx-auto p-5 lg:w-8/12" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h1", { class: "mb-3 text-sm font-medium lg:text-xl" }, "OUR MEDIA", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h1", { class: "mb-5 text-sm font-medium lg:text-base" }, " IGNITION MAGAZINE FEATURE ", -1);
const _hoisted_16 = ["src"];
const _hoisted_17 = ["src"];
const _hoisted_18 = ["src"];
const _hoisted_19 = { class: "carousel-section mt-10" };
const _hoisted_20 = { class: "container mx-auto" };
const _hoisted_21 = { class: "mx-auto flex grid grid-cols-4 items-center p-5 lg:w-8/12" };
const _hoisted_22 = ["src"];
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
          _hoisted_7,
          createBaseVNode("div", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.socials, (val, index) => {
              return openBlock(), createElementBlock("a", {
                key: index,
                href: val.url,
                target: "_blank",
                class: "rounded-full bg-white p-2"
              }, [
                createBaseVNode("img", {
                  src: val.image,
                  class: "w-3"
                }, null, 8, _hoisted_10)
              ], 8, _hoisted_9);
            }), 128))
          ])
        ])
      ])
    ]),
    _hoisted_11,
    createBaseVNode("section", _hoisted_12, [
      createBaseVNode("div", _hoisted_13, [
        _hoisted_14,
        _hoisted_15,
        createBaseVNode("img", {
          src: $options.aboutImages[0],
          class: "hidden lg:block"
        }, null, 8, _hoisted_16),
        createBaseVNode("img", {
          src: $options.aboutImages[1],
          class: "lg:hidden"
        }, null, 8, _hoisted_17),
        createBaseVNode("img", {
          src: $options.aboutImages[2],
          class: "lg:hidden"
        }, null, 8, _hoisted_18)
      ])
    ]),
    createBaseVNode("section", _hoisted_19, [
      createBaseVNode("div", _hoisted_20, [
        createBaseVNode("div", _hoisted_21, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.carouselImages, (item, index) => {
            return openBlock(), createElementBlock("img", {
              key: index,
              class: "mx-auto",
              src: item
            }, null, 8, _hoisted_22);
          }), 128))
        ])
      ])
    ]),
    createVNode(_component_app_footer, { "footer-class": "bg-black pt-10" })
  ]);
}
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  About as default
};
