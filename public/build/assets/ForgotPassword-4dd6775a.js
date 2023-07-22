import { S as Success } from "./Success-45eef610.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-a3809c34.js";
import { aj as render, ak as render$1, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, z as createBlock, D as createCommentVNode, G as withModifiers, n as normalizeClass, C as withDirectives, ad as vModelText, d as createVNode, w as withCtx, E as createTextVNode } from "./vendor-506bc2e6.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  components: {
    Success,
    Errors,
    CircleSvg,
    PaperAirplaneIcon: render,
    CheckCircleIcon: render$1
  },
  props: {
    useErrors: { type: Boolean, default: false },
    useSuccess: { type: Boolean, default: false }
  },
  data() {
    return {
      form: {
        email: ""
      },
      errors: null,
      success: null,
      loading: false
    };
  },
  methods: {
    ...mapActions({
      forgotPassword: "auth/forgotPassword",
      popToast: "toast/popToast"
    }),
    async send() {
      this.loading = true;
      this.errors = null;
      this.success = null;
      try {
        await this.forgotPassword(this.form).then((response) => {
          this.loading = false;
          this.success = response;
          this.popToast({
            message: response,
            timer: 1e4,
            icon: "success"
          });
        });
      } catch (e) {
        if (e.response && e.response.status === 422) {
          this.errors = { message: e.response.data.message };
          this.popToast({
            message: e.response.data.message,
            timer: 1e4,
            icon: "error"
          });
        } else if (e.response && e.response.status === 401) {
          this.errors = { message: e.response.data.message };
          this.popToast({
            message: "Invalid Email",
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
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b p-4 font-semibold text-gray-700" }, " Forgot your Password? ", -1);
const _hoisted_6 = { class: "bg-white p-4" };
const _hoisted_7 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_8 = ["disabled"];
const _hoisted_9 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-end" };
const _hoisted_10 = { class: "mt-3 flex w-full items-center justify-between sm:mt-0 sm:w-8/12" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "fa fa-reply fa-fw" }, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Success = resolveComponent("Success");
  const _component_Errors = resolveComponent("Errors");
  const _component_PaperAirplaneIcon = resolveComponent("PaperAirplaneIcon");
  const _component_CheckCircleIcon = resolveComponent("CheckCircleIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_router_link = resolveComponent("router-link");
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
              onSubmit: _cache[3] || (_cache[3] = withModifiers((...args) => $options.send && $options.send(...args), ["prevent"]))
            }, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("label", {
                  for: "Email",
                  class: normalizeClass(["w-4/12", {
                    "text-red-500": $data.errors && $data.errors.errors && $data.errors.errors.email
                  }])
                }, " Email ", 2),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.email = $event),
                  type: "email",
                  name: "email",
                  class: normalizeClass([{
                    "border-red-500": $data.errors && $data.errors.errors && $data.errors.errors.email
                  }, "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),
                  disabled: $data.loading
                }, null, 10, _hoisted_8), [
                  [vModelText, $data.form.email]
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_AppButton, {
                    loading: $data.loading,
                    disabled: $data.loading || $data.success,
                    text: $data.loading ? "Send Email" : "Send Email",
                    "btn-class": "uppercase leading-snug inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg ",
                    type: "submit"
                  }, {
                    text: withCtx(() => [
                      !$data.loading && !$data.success ? (openBlock(), createBlock(_component_PaperAirplaneIcon, {
                        key: 0,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      !$data.loading && $data.success ? (openBlock(), createBlock(_component_CheckCircleIcon, {
                        key: 1,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
                        key: 2,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      createTextVNode(" Send Email ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "text"]),
                  createVNode(_component_router_link, {
                    to: { name: "login" },
                    class: "text-sm font-bold text-blue-500 hover:underline"
                  }, {
                    default: withCtx(() => [
                      _hoisted_11,
                      createTextVNode(" Go back ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ], 32)
          ])
        ])
      ])
    ])
  ]);
}
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ForgotPassword as default
};
