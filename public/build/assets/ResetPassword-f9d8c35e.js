import { E as Errors } from "./Errors-65c5ea2a.js";
import { S as Success } from "./Success-45eef610.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-a3809c34.js";
import { ak as render, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, z as createBlock, D as createCommentVNode, G as withModifiers, n as normalizeClass, C as withDirectives, ad as vModelText, d as createVNode, w as withCtx, E as createTextVNode } from "./vendor-506bc2e6.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  components: {
    Errors,
    Success,
    CircleSvg,
    CheckCircleIcon: render
  },
  props: {
    useErrors: { type: Boolean, default: false },
    useSuccess: { type: Boolean, default: false },
    token: { type: String, required: true },
    email: { type: String, required: true }
  },
  data() {
    return {
      form: {
        password: "",
        password_confirmation: ""
      },
      errors: null,
      success: null,
      loading: false
    };
  },
  created() {
  },
  methods: {
    ...mapActions({
      resetPassword: "auth/resetPassword",
      popToast: "toast/popToast"
    }),
    async reset() {
      this.loading = true;
      this.errors = null;
      this.success = null;
      try {
        await this.resetPassword({
          email: this.email,
          token: this.token,
          ...this.form
        }).then((response) => {
          this.loading = false;
          this.success = response;
          this.popToast({
            message: `${response} redirecting ...`,
            timer: 1e4,
            icon: "success"
          });
          setTimeout(() => {
            this.$router.push({ name: "login" });
          }, 1e3);
        });
      } catch (e) {
        if (e.response && e.response.status === 422) {
          this.errors = e.response.data.errors;
          this.popToast({
            message: Object.values(e.response.data.errors).flat().toString(),
            timer: 1e4,
            icon: "error"
          });
        } else if (e.response && e.response.status === 401) {
          this.errors = { message: e.response.data.message };
          this.popToast({
            message: "Unauthorized",
            timer: 1e4,
            icon: "error"
          });
        } else {
          this.popToast({
            message: "An error occured",
            timer: 1e4,
            icon: "error"
          });
        }
        this.loading = false;
      }
    }
  }
};
const _hoisted_1 = { class: "mx-auto max-w-screen-md text-gray-900" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = { class: "w-auto border" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b p-4 font-semibold text-gray-700" }, " Reset your password ", -1);
const _hoisted_6 = { class: "bg-white p-4" };
const _hoisted_7 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_8 = ["disabled"];
const _hoisted_9 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_10 = ["disabled"];
const _hoisted_11 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-end" };
const _hoisted_12 = { class: "mt-3 flex w-full items-center justify-between sm:mt-0 sm:w-8/12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Success = resolveComponent("Success");
  const _component_Errors = resolveComponent("Errors");
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            $props.useSuccess && $data.success ? (openBlock(), createBlock(_component_Success, {
              key: 0,
              content: $data.success,
              onClose: _cache[0] || (_cache[0] = ($event) => $data.success = null)
            }, null, 8, ["content"])) : createCommentVNode("", true),
            $props.useErrors && $data.errors ? (openBlock(), createBlock(_component_Errors, {
              key: 1,
              content: $data.errors,
              onClose: _cache[1] || (_cache[1] = ($event) => $data.errors = null)
            }, null, 8, ["content"])) : createCommentVNode("", true),
            createBaseVNode("form", {
              class: "mx-auto w-full md:w-10/12 md:p-4",
              onSubmit: _cache[4] || (_cache[4] = withModifiers((...args) => $options.reset && $options.reset(...args), ["prevent"]))
            }, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("label", {
                  for: "password",
                  class: normalizeClass(["w-4/12", {
                    "text-red-500": $data.errors && $data.errors.errors && $data.errors.errors.password
                  }])
                }, " Password ", 2),
                withDirectives(createBaseVNode("input", {
                  id: "password",
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.password = $event),
                  type: "password",
                  name: "password",
                  autocomplete: "on",
                  class: normalizeClass([{
                    "border-red-500": $data.errors && $data.errors.errors && $data.errors.errors.password
                  }, "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),
                  disabled: $data.loading
                }, null, 10, _hoisted_8), [
                  [vModelText, $data.form.password]
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("label", {
                  for: "password_confirmation",
                  class: normalizeClass(["w-4/12", {
                    "text-red-500": $data.errors && $data.errors.errors && $data.errors.errors.password_confirmation
                  }])
                }, " Confirm Password ", 2),
                withDirectives(createBaseVNode("input", {
                  id: "password_confirmation",
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.password_confirmation = $event),
                  type: "password",
                  name: "password_confirmation",
                  class: normalizeClass([{
                    "border-red-500": $data.errors && $data.errors.errors && $data.errors.errors.password_confirmation
                  }, "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),
                  disabled: $data.loading
                }, null, 10, _hoisted_10), [
                  [vModelText, $data.form.password_confirmation]
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createVNode(_component_AppButton, {
                    loading: $data.loading,
                    disabled: $data.loading || $data.success,
                    text: $data.loading ? "Send Email" : "Send Email",
                    "btn-class": "uppercase leading-snug inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg ",
                    type: "submit"
                  }, {
                    text: withCtx(() => [
                      !$data.loading && $data.success ? (openBlock(), createBlock(_component_CheckCircleIcon, {
                        key: 0,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
                        key: 1,
                        class: "mr-2 h-5 w-5"
                      })) : createCommentVNode("", true),
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "text"])
                ])
              ])
            ], 32)
          ])
        ])
      ])
    ])
  ]);
}
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ResetPassword as default
};
