import { a as mapGetters, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, d as createVNode, w as withCtx } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const fourZeroFour = "https://carsona.com.au/build/assets/404-fd20b56e.png";
const plugs = "https://carsona.com.au/build/assets/plugs-12bd3189.png";
const _sfc_main = {
  name: "NotFound",
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      //
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
    document.getElementById("plugs").src = plugs;
    document.getElementById("fourZeroFour").src = fourZeroFour;
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {}
};
const _hoisted_1 = { class: "flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 dark:bg-white md:gap-28 md:px-44 md:py-20 lg:flex-row lg:px-24 lg:py-24" };
const _hoisted_2 = { class: "relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24" };
const _hoisted_3 = { class: "relative" };
const _hoisted_4 = { class: "absolute" };
const _hoisted_5 = { class: "" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h1", { class: "my-2 text-2xl font-bold text-gray-800" }, " Looks like you've found the doorway to the great nothing ", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "my-7 text-gray-800" }, " Sorry about that! Please visit our hompage to get where you need to go. ", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    id: "fourZeroFour",
    alt: "404"
  })
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    id: "plugs",
    alt: "plugs"
  })
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = resolveComponent("AppButton");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            _hoisted_7,
            createVNode(_component_router_link, {
              to: _ctx.authenticated ? { name: "dashboard" } : { name: "home" }
            }, {
              default: withCtx(() => [
                createVNode(_component_AppButton, {
                  primary: "",
                  text: "Take me there!",
                  class: "px-8 py-4 sm:w-full lg:w-auto"
                })
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ]),
        _hoisted_8
      ])
    ]),
    _hoisted_9
  ]);
}
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NotFound as default
};
