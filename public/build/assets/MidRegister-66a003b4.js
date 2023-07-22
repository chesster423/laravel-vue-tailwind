import { al as render, a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, z as createBlock, D as createCommentVNode, G as withModifiers, C as withDirectives, ad as vModelText, n as normalizeClass, d as createVNode, w as withCtx, E as createTextVNode } from "./vendor-506bc2e6.js";
import { C as CircleSvg, v as validateEmail, r as router, _ as _export_sfc } from "./app-a3809c34.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import { S as SocialiteLogins } from "./SocialiteLoginsV2-c9828ed6.js";
import "./__commonjsHelpers__-7a7fcd32.js";
import "./vue-axios.esm.min-fa86a92f.js";
const _sfc_main$1 = {
  components: {
    ArrowRightOnRectangleIcon: render,
    CircleSvg,
    Errors,
    SocialiteLogins
  },
  props: {
    showSmLogin: { type: Boolean, default: true },
    isFunnelPage: { type: Boolean, default: false }
  },
  data() {
    return {
      errors: null,
      loading: false,
      useInlineMessage: false
    };
  },
  computed: {
    ...mapGetters({
      logins: "auth/logins",
      funnel_data: "funnel/getFunnelData"
    }),
    socialLoginsEnabled() {
      if (!this.showSmLogin) {
        return false;
      }
      const a = Object.values(this.logins);
      const b = a.find((v) => v == "1");
      if (b) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions({
      registerApp: "auth/register",
      popToast: "toast/popToast",
      appLogin: "auth/login",
      setFunnelData: "funnel/setFunnelData"
    }),
    setData() {
      const obj = {
        email: this.funnel_data.email
      };
      if (validateEmail(obj.email)) {
        this.setFunnelData(obj);
        router.push({ name: "step-8" });
      } else {
        this.popToast({
          message: "Invalid email address!",
          timer: 5e3,
          icon: "warning"
        });
      }
    }
  }
};
const _hoisted_1$1 = { class: "mx-auto max-w-screen-md text-gray-900" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = { class: "mx-auto p-5 lg:w-4/6 lg:p-0" };
const _hoisted_5 = { class: "bg-white p-4 text-center dark:bg-slate-800" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h1", { class: "mb-4 text-lg font-bold lg:text-2xl" }, " Your matches are one step away! ", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", {
  class: "mx-auto text-justify lg:w-8700",
  style: { "letter-spacing": "-1px", "line-height": "20px" }
}, [
  /* @__PURE__ */ createTextVNode(" Carsona is helping thousands of people find the right car for their lifestyles. Join our growing community and take part in shaping our platform. "),
  /* @__PURE__ */ createBaseVNode("span", { class: "font-bold" }, "We will email your results to you, we don’t send spam emails.")
], -1);
const _hoisted_8 = { class: "my-1 w-full py-2" };
const _hoisted_9 = ["disabled"];
const _hoisted_10 = { class: "my-1 w-full rounded" };
const _hoisted_11 = { class: "mt-3 w-full" };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_15 = { class: "text-sm" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", { class: "mr-1 cursor-default text-gray-700 dark:text-gray-200" }, " Already a member? ", -1);
const _hoisted_17 = {
  key: 1,
  class: "mt-5"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300 lg:px-8" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "mx-4 mb-0 text-center font-semibold" }, "Or")
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_errors = resolveComponent("errors");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_router_link = resolveComponent("router-link");
  const _component_SocialiteLogins = resolveComponent("SocialiteLogins");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            $data.errors && $data.useInlineMessage ? (openBlock(), createBlock(_component_errors, {
              key: 0,
              content: $data.errors,
              type: "error",
              onClose: _cache[0] || (_cache[0] = ($event) => $data.errors = null)
            }, null, 8, ["content"])) : createCommentVNode("", true),
            _hoisted_6,
            _hoisted_7,
            createBaseVNode("form", {
              class: "lg:w:12/12 mx-auto mx-auto mb-4 w-full lg:px-8",
              onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.register && _ctx.register(...args), ["prevent"]))
            }, [
              createBaseVNode("div", _hoisted_8, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.funnel_data.email = $event),
                  type: "email",
                  name: "email",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.email }, "w-full rounded border border-gray-300 bg-white p-2 focus:outline-none lg:mt-3"]),
                  disabled: $data.loading,
                  placeholder: "Email Address"
                }, null, 10, _hoisted_9), [
                  [vModelText, _ctx.funnel_data.email]
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createVNode(_component_AppButton, {
                    loading: $data.loading,
                    disabled: $data.loading,
                    text: $data.loading ? "Register" : "Register",
                    "btn-class": "w-full rounded-full bg-black mb-5 text-white",
                    type: "submit",
                    onClick: _cache[2] || (_cache[2] = ($event) => $options.setData())
                  }, {
                    text: withCtx(() => [
                      $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
                        key: 0,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      !$data.loading ? (openBlock(), createElementBlock("span", _hoisted_12, "Continue")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "text"]),
                  _hoisted_13,
                  createVNode(_component_router_link, {
                    to: { name: "step-8" },
                    class: "mb-4 block text-sm font-bold text-blue-500 hover:text-blue-300"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Skip for now ")
                    ]),
                    _: 1
                  }),
                  _hoisted_14,
                  createBaseVNode("span", _hoisted_15, [
                    _hoisted_16,
                    createVNode(_component_router_link, {
                      to: { path: "/login/" + $props.isFunnelPage },
                      class: "text-sm font-bold text-blue-500 hover:text-blue-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign In ")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])
                ])
              ])
            ], 32),
            $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_17, [
              _hoisted_18,
              createVNode(_component_SocialiteLogins)
            ])) : createCommentVNode("", true)
          ])
        ])
      ])
    ])
  ]);
}
const AppMidRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    AppMidRegister
  },
  props: {
    showSmLogin: { type: Boolean, default: true }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
const _hoisted_1 = { class: "mx-auto mt-5 max-w-screen-md text-gray-900" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_mid_register = resolveComponent("app-mid-register");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_app_mid_register)
  ]);
}
const MidRegister = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  MidRegister as default
};
