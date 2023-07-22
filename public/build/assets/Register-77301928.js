import { al as render, a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, z as createBlock, D as createCommentVNode, G as withModifiers, C as withDirectives, ad as vModelText, n as normalizeClass, d as createVNode, w as withCtx, E as createTextVNode } from "./vendor-506bc2e6.js";
import { C as CircleSvg, _ as _export_sfc } from "./app-a3809c34.js";
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
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: null,
      loading: false,
      useInlineMessage: false
    };
  },
  computed: {
    ...mapGetters({
      logins: "auth/logins"
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
      appLogin: "auth/login"
    }),
    async register() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.registerApp(this.form).then((response) => {
          const payload = {
            email: this.form.email,
            password: this.form.password_confirmation
          };
          this.appLogin(payload).then((response2) => {
            this.loading = false;
            if (this.$route.params.redirect) {
              this.$router.push({ name: "step-8" });
            } else {
              this.$router.push({ name: "home" });
            }
          });
        });
      } catch (e) {
        if (e.response.status === 422) {
          this.errors = e.response.data.errors;
          this.popToast({
            message: Object.values(e.response.data.errors).flat().toString(),
            timer: 5e3,
            icon: "error"
          });
        }
        if (e.status === 401) {
          this.popToast({
            message: "Invalid Email or Password",
            timer: 5e3,
            icon: "error"
          });
        }
        this.loading = false;
      }
    }
  }
};
const _hoisted_1$1 = { class: "mx-auto max-w-screen-md text-gray-900" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = { class: "mx-auto w-auto lg:w-4/6" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b p-4 text-center font-semibold text-gray-600" }, " Personalized Dashboard ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "px-4 pt-5" }, [
  /* @__PURE__ */ createBaseVNode("p", {
    class: "mx-auto text-justify lg:w-8700",
    style: { "letter-spacing": "-1px", "line-height": "20px" }
  }, [
    /* @__PURE__ */ createTextVNode(" Carsona is helping thousands of people find the right car for their lifestyles. Join our growing community and take part in shaping our platform. "),
    /* @__PURE__ */ createBaseVNode("span", { class: "font-bold" }, "We will email your results to you, we don’t send spam emails.")
  ])
], -1);
const _hoisted_7 = { class: "rounded bg-white p-4 dark:bg-slate-800" };
const _hoisted_8 = { class: "my-1 w-full py-2" };
const _hoisted_9 = ["disabled"];
const _hoisted_10 = { class: "my-1 w-full py-2" };
const _hoisted_11 = ["disabled"];
const _hoisted_12 = { class: "my-1 w-full py-2" };
const _hoisted_13 = ["disabled"];
const _hoisted_14 = { class: "my-1 w-full py-2" };
const _hoisted_15 = ["disabled"];
const _hoisted_16 = { class: "my-1 w-full rounded" };
const _hoisted_17 = { class: "mt-3 w-full" };
const _hoisted_18 = { key: 1 };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_20 = { class: "mx-auto block text-center text-sm" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "mr-1 cursor-default text-gray-700 dark:text-gray-200" }, " Already a member? ", -1);
const _hoisted_22 = {
  key: 1,
  class: "mt-5"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300 lg:px-8" }, [
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
          _hoisted_5,
          _hoisted_6,
          createBaseVNode("div", _hoisted_7, [
            $data.errors && $data.useInlineMessage ? (openBlock(), createBlock(_component_errors, {
              key: 0,
              content: $data.errors,
              type: "error",
              onClose: _cache[0] || (_cache[0] = ($event) => $data.errors = null)
            }, null, 8, ["content"])) : createCommentVNode("", true),
            createBaseVNode("form", {
              class: "lg:w:12/12 mx-auto mx-auto mb-4 w-full lg:px-8",
              onSubmit: _cache[5] || (_cache[5] = withModifiers((...args) => $options.register && $options.register(...args), ["prevent"]))
            }, [
              createBaseVNode("div", _hoisted_8, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.name = $event),
                  type: "text",
                  name: "name",
                  autocomplete: "on",
                  disabled: $data.loading,
                  class: "w-full rounded border border-gray-300 bg-white p-2 focus:outline-none lg:mt-0",
                  placeholder: "Name"
                }, null, 8, _hoisted_9), [
                  [vModelText, $data.form.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.email = $event),
                  type: "email",
                  name: "email",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.email }, "w-full rounded border border-gray-300 bg-white p-2 focus:outline-none lg:mt-0"]),
                  disabled: $data.loading,
                  placeholder: "Email Address"
                }, null, 10, _hoisted_11), [
                  [vModelText, $data.form.email]
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.password = $event),
                  type: "password",
                  name: "password",
                  autocomplete: "on",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.password }, "w-full rounded border border-gray-300 bg-white p-2 focus:outline-none lg:mt-0"]),
                  disabled: $data.loading,
                  placeholder: "Password"
                }, null, 10, _hoisted_13), [
                  [vModelText, $data.form.password]
                ])
              ]),
              createBaseVNode("div", _hoisted_14, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.password_confirmation = $event),
                  type: "password",
                  name: "password_confirmation",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.password }, "w-full rounded border border-gray-300 bg-white p-2 focus:outline-none lg:mt-0"]),
                  disabled: $data.loading,
                  placeholder: "Confirm Password"
                }, null, 10, _hoisted_15), [
                  [vModelText, $data.form.password_confirmation]
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  createVNode(_component_AppButton, {
                    loading: $data.loading,
                    disabled: $data.loading,
                    text: $data.loading ? "Register" : "Register",
                    "btn-class": "w-full rounded-full bg-black mb-5 text-white",
                    type: "submit"
                  }, {
                    text: withCtx(() => [
                      $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
                        key: 0,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      !$data.loading ? (openBlock(), createElementBlock("span", _hoisted_18, "Submit")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "text"]),
                  _hoisted_19,
                  createBaseVNode("span", _hoisted_20, [
                    _hoisted_21,
                    createVNode(_component_router_link, {
                      to: { path: "/login/true" },
                      class: "text-sm font-bold text-blue-500 hover:text-blue-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign In ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ], 32),
            $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_22, [
              _hoisted_23,
              createVNode(_component_SocialiteLogins)
            ])) : createCommentVNode("", true)
          ])
        ])
      ])
    ])
  ]);
}
const AppRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    AppRegister
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
  const _component_app_register = resolveComponent("app-register");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_app_register)
  ]);
}
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Register as default
};
