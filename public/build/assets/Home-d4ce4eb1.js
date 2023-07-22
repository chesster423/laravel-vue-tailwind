import { m as mapState, a as mapGetters, ab as initFlowbite, b as mapActions, o as openBlock, c as createElementBlock, e as createBaseVNode, J as Fragment, K as renderList, B as toDisplayString, H as pushScopeId, I as popScopeId, ac as render, r as resolveComponent, d as createVNode, w as withCtx, L as createStaticVNode, E as createTextVNode } from "./vendor-506bc2e6.js";
import { F as Faqs } from "./FAQS-f91939b2.js";
import { t as track, _ as _export_sfc, A as AppFooter } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
import "./AppAccordion-58070a4d.js";
const _sfc_main$1 = {
  name: "Blank",
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      blank: "Blank"
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
    }),
    featuresData() {
      return this.$store.getters.getHomeData.featuresData;
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    initFlowbite();
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    track
  }
};
const AppCarousel_vue_vue_type_style_index_0_scoped_84b2aefc_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-84b2aefc"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  id: "controls-carousel",
  class: "relative w-full",
  "data-carousel": "slide"
};
const _hoisted_2$1 = { class: "relative h-72 overflow-hidden rounded-lg md:h-96" };
const _hoisted_3$1 = { class: "absolute left-1/2 top-1/2 block w-3/5 -translate-x-1/2 -translate-y-1/2" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "title text-center font-bold text-white lg:font-normal" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_7$1 = {
  class: "text-center text-sm text-white",
  style: { "line-height": "1.6", "font-size": "11px" }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("div", _hoisted_2$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.featuresData, (val, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "duration-700 ease-in-out",
            "data-carousel-item": ""
          }, [
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("img", {
                src: val.img,
                alt: "...",
                class: "mx-auto w-4/5"
              }, null, 8, _hoisted_4$1),
              createBaseVNode("p", _hoisted_5$1, toDisplayString(val.title), 1),
              _hoisted_6$1,
              createBaseVNode("p", _hoisted_7$1, toDisplayString(val.text), 1)
            ])
          ]);
        }), 128))
      ])
    ])
  ]);
}
const AppCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-84b2aefc"]]);
const _sfc_main = {
  name: "Home",
  components: {
    ChatBubbleLeftEllipsisIcon: render,
    Faqs,
    AppFooter,
    AppCarousel
  },
  props: {},
  data() {
    return {
      companyLogo: "images/logo.png",
      logoImageAlt: "Company Logo",
      video: window.location.origin + "/videos/home.mp4",
      featureImages: [
        window.location.origin + "/images/home/microchip.png",
        window.location.origin + "/images/home/clock.png",
        window.location.origin + "/images/home/key.png"
      ],
      backgroundImages: {
        carsona: window.location.origin + "/images/home/pattern-car-bg.png",
        pattern: window.location.origin + "/images/home/pattern-bg.png"
      },
      carouselImages: [
        window.location.origin + "/images/home/carousel-capricorn.png",
        window.location.origin + "/images/home/carousel-pluseight.png",
        window.location.origin + "/images/home/carousel-spacecubed.png",
        window.location.origin + "/images/home/carousel-techstars.png"
      ],
      testamentImages: [
        window.location.origin + "/images/home/person-adam.jpg",
        window.location.origin + "/images/home/person-bec.png",
        window.location.origin + "/images/home/person-javaid.jpg"
      ]
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    }),
    featuresData() {
      return this.$store.getters.getHomeData.featuresData;
    }
  }
};
const _hoisted_1 = {
  id: "homepage",
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
const _hoisted_6 = { class: "funnel-link-container" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", null, "Your next drive is a few clicks away.", -1);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<section class="home-carsona-description container mx-auto mt-10 lg:mt-0"><div class="mx-auto gap-5 p-5 font-bold lg:grid lg:w-8/12 lg:grid-cols-3"><div class="lg:mt-0"><div class="mx-auto h-16 w-16 rounded-full border border-2 border-black p-5 text-center lg:mx-0"><p>1</p></div><br><p class="text-center lg:mt-4 lg:pr-10 lg:text-left"> Find your perfect car, that matches your needs with our &#39;Find your Carsona&#39; algorithm. </p></div><div class="mt-10 lg:mt-0"><div class="mx-auto h-16 w-16 rounded-full border border-2 border-black p-5 text-center lg:mx-0"><p>2</p></div><br><p class="text-center lg:mt-4 lg:pr-10 lg:text-left"> Save your favourites and view listing! </p></div><div class="mt-10 lg:mt-0"><div class="mx-auto h-16 w-16 rounded-full border border-2 border-black p-5 text-center lg:mx-0"><p>3</p></div><br><p class="text-center lg:mt-4 lg:pr-10 lg:text-left"> Get the best prices and discounts tailored to you! COMING SOON </p></div></div></section>', 1);
const _hoisted_9 = { class: "mt-10 bg-black lg:hidden" };
const _hoisted_10 = { class: "container mx-auto" };
const _hoisted_11 = { class: "mt-10 hidden bg-black lg:block" };
const _hoisted_12 = { class: "container mx-auto" };
const _hoisted_13 = { class: "features-container mx-auto grid gap-5 px-5 py-10 lg:w-8/12 lg:grid-cols-3 lg:px-0" };
const _hoisted_14 = ["src"];
const _hoisted_15 = {
  class: "title mx-auto text-white",
  style: { "letter-spacing": "0.12em" }
};
const _hoisted_16 = {
  class: "mx-auto w-5/6 text-white",
  style: { "line-height": "1.6", "font-size": "13px" }
};
const _hoisted_17 = { class: "mt-10" };
const _hoisted_18 = { class: "container mx-auto" };
const _hoisted_19 = { class: "mx-auto grid grid-cols-2 p-5 lg:w-8/12" };
const _hoisted_20 = { class: "mx-auto" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-8" }, "CARSONA: [NOUN]", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-8 font-semibold italic" }, " “The combination of ones persona and lifestyle choices that are accurately matched to a vehicle and or transport amenities.” ", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-8" }, "Make the right choice.", -1);
const _hoisted_24 = { class: "mx-auto" };
const _hoisted_25 = ["src"];
const _hoisted_26 = { class: "carousel-section mt-10" };
const _hoisted_27 = { class: "container mx-auto" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("label", { class: "carousel-heading block pt-5 text-center" }, "AS SEEN ON", -1);
const _hoisted_29 = { class: "carousel-slider" };
const _hoisted_30 = { class: "mx-auto flex grid grid-cols-4 items-center px-5 lg:w-8/12" };
const _hoisted_31 = ["src"];
const _hoisted_32 = { class: "testaments-section mt-10" };
const _hoisted_33 = { class: "container mx-auto" };
const _hoisted_34 = { class: "mx-auto grid gap-10 p-5 lg:w-8/12 lg:grid-cols-3" };
const _hoisted_35 = { class: "testament-container lg:w-100 mx-auto w-80 p-10 text-center lg:text-left" };
const _hoisted_36 = ["src"];
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("p", { class: "testament mb-4 italic" }, ` "It was a completely different and unique experience choosing a car with Carsona. I didn't feel the usual pressure of the dealership buying process and I was confident it was the car for me. Everyone should use this." `, -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Adam "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" Innovations Manager ")
], -1);
const _hoisted_39 = { class: "testament-container testament-container lg:w-100 mx-auto w-80 p-10 text-center lg:text-left" };
const _hoisted_40 = ["src"];
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", { class: "testament mb-4 italic" }, ' "I bought a car this year and honestly I had no idea where to start. What brand or features to look for. I felt pretty powerless in the process. Carsona would have been really helpful in pointing me in the right direction. I will definitely be using this in the future" ', -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Bec "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" Photographer ")
], -1);
const _hoisted_43 = { class: "testament-container testament-container lg:w-100 mx-auto w-80 p-10 text-center lg:text-left" };
const _hoisted_44 = ["src"];
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("p", { class: "testament mb-4 italic" }, " “This is a game changer for first time buyers, having a car matched to your lifestyle, no pressure from target driven salespeople or questionable car yards. Welcome to the future of car buying, this is only going to get better!” ", -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode(" Javaid "),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createTextVNode(" Accountant ")
], -1);
const _hoisted_47 = { class: "mt-10 mt-10 bg-black" };
const _hoisted_48 = { class: "container mx-auto pt-10 lg:w-5/12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_app_carousel = resolveComponent("app-carousel");
  const _component_faqs = resolveComponent("faqs");
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
          createVNode(_component_router_link, {
            to: { name: "step-1" },
            class: "whitespace-nowrap rounded-full border-slate-50 p-4 px-8 text-center text-base font-medium drop-shadow-md"
          }, {
            default: withCtx(() => [
              createTextVNode(" FIND YOUR CARSONA ")
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _hoisted_8,
    createBaseVNode("section", _hoisted_9, [
      createBaseVNode("div", _hoisted_10, [
        createVNode(_component_app_carousel)
      ])
    ]),
    createBaseVNode("section", _hoisted_11, [
      createBaseVNode("div", _hoisted_12, [
        createBaseVNode("div", _hoisted_13, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.featuresData, (val, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "mx-auto text-center"
            }, [
              createBaseVNode("img", {
                src: val.img,
                class: "mx-auto"
              }, null, 8, _hoisted_14),
              createBaseVNode("p", _hoisted_15, toDisplayString(val.title), 1),
              createBaseVNode("p", _hoisted_16, toDisplayString(val.text), 1)
            ]);
          }), 128))
        ])
      ])
    ]),
    createBaseVNode("section", _hoisted_17, [
      createBaseVNode("div", _hoisted_18, [
        createBaseVNode("div", _hoisted_19, [
          createBaseVNode("div", _hoisted_20, [
            _hoisted_21,
            _hoisted_22,
            _hoisted_23,
            createVNode(_component_router_link, {
              to: { name: "step-1" },
              class: "find-your-carsona whitespace-nowrap text-base font-medium hover:text-gray-900 dark:hover:text-gray-400"
            }, {
              default: withCtx(() => [
                createTextVNode(" FIND YOUR CARSONA ")
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("img", {
              src: $data.backgroundImages.carsona
            }, null, 8, _hoisted_25)
          ])
        ])
      ])
    ]),
    createBaseVNode("section", _hoisted_26, [
      createBaseVNode("div", _hoisted_27, [
        _hoisted_28,
        createBaseVNode("div", _hoisted_29, [
          createBaseVNode("div", _hoisted_30, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.carouselImages, (item, index) => {
              return openBlock(), createElementBlock("img", {
                key: index,
                class: "mx-auto",
                src: item
              }, null, 8, _hoisted_31);
            }), 128))
          ])
        ])
      ])
    ]),
    createBaseVNode("section", _hoisted_32, [
      createBaseVNode("div", _hoisted_33, [
        createBaseVNode("div", _hoisted_34, [
          createBaseVNode("div", _hoisted_35, [
            createBaseVNode("img", {
              src: $data.testamentImages[0],
              class: "mx-auto"
            }, null, 8, _hoisted_36),
            _hoisted_37,
            _hoisted_38
          ]),
          createBaseVNode("div", _hoisted_39, [
            createBaseVNode("img", {
              src: $data.testamentImages[1],
              class: "mx-auto"
            }, null, 8, _hoisted_40),
            _hoisted_41,
            _hoisted_42
          ]),
          createBaseVNode("div", _hoisted_43, [
            createBaseVNode("img", {
              src: $data.testamentImages[2],
              class: "mx-auto"
            }, null, 8, _hoisted_44),
            _hoisted_45,
            _hoisted_46
          ])
        ])
      ])
    ]),
    createBaseVNode("section", _hoisted_47, [
      createBaseVNode("div", _hoisted_48, [
        createVNode(_component_faqs)
      ])
    ]),
    createVNode(_component_app_footer, { "footer-class": "bg-black pt-10" })
  ]);
}
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Home as default
};
