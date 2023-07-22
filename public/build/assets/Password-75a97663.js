import { b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, z as createBlock, D as createCommentVNode, G as withModifiers, C as withDirectives, ao as vModelDynamic, n as normalizeClass, d as createVNode, w as withCtx, J as Fragment, E as createTextVNode } from "./vendor-506bc2e6.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import { S as Success } from "./Success-45eef610.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  components: {
    Errors,
    Success,
    CircleSvg
  },
  data() {
    return {
      form: {
        password: "",
        password_confirmation: ""
      },
      errors: null,
      success: "",
      loading: false,
      showPassword: false,
      showConfirmPassword: false
    };
  },
  computed: {
    submitEnabled() {
      if (this.form.password && this.form.password_confirmation && this.form.password.length > 5 && this.form.password == this.form.password_confirmation) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions({
      updatePassword: "auth/password",
      popToast: "toast/popToast"
    }),
    async update() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.updatePassword(this.form).then((response) => {
          if (response && response == "Success") {
            this.form.password = "";
            this.form.password_confirmation = "";
            this.popToast({
              message: "Password Updated Successfully",
              timer: 2e3,
              icon: "success"
            });
          }
        });
      } catch (e) {
        this.errors = e.data;
        let msg = "Error Updating Password";
        if (e && e.response && e.response.data && e.response.data.message) {
          msg = e.response.data.message;
        }
        this.popToast({
          message: msg,
          timer: 5e3,
          icon: "error"
        });
      }
      this.loading = false;
    }
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "rounded-t border-b p-4 font-semibold dark:border-gray-600 dark:bg-slate-800" }, " Password ", -1);
const _hoisted_2 = { class: "bg-white p-4 dark:bg-slate-800" };
const _hoisted_3 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", {
  for: "password",
  class: "w-4/12"
}, " Password ", -1);
const _hoisted_5 = ["type"];
const _hoisted_6 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", {
  for: "password confirmation",
  class: "w-4/12"
}, " Confirm password ", -1);
const _hoisted_8 = ["type"];
const _hoisted_9 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-end" };
const _hoisted_10 = { class: "mt-3 flex w-full items-center justify-between sm:mt-0 sm:w-8/12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Success = resolveComponent("Success");
  const _component_Errors = resolveComponent("Errors");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      $data.success ? (openBlock(), createBlock(_component_Success, {
        key: 0,
        content: $data.success,
        onClose: _cache[0] || (_cache[0] = ($event) => $data.success = null)
      }, null, 8, ["content"])) : createCommentVNode("", true),
      $data.errors ? (openBlock(), createBlock(_component_Errors, {
        key: 1,
        content: $data.errors,
        onClose: _cache[1] || (_cache[1] = ($event) => $data.errors = null)
      }, null, 8, ["content"])) : createCommentVNode("", true),
      createBaseVNode("form", {
        class: "mx-auto w-full md:w-10/12 md:p-4",
        onSubmit: _cache[6] || (_cache[6] = withModifiers((...args) => $options.update && $options.update(...args), ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.password = $event),
            type: $data.showPassword ? "text" : "password",
            name: "password",
            autocomplete: "on",
            class: "ml-1 mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none dark:border-gray-600 dark:bg-slate-900 sm:mt-0 sm:w-8/12"
          }, null, 8, _hoisted_5), [
            [vModelDynamic, $data.form.password]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(["fa fa-fw ml-3", $data.showPassword ? "fa-eye" : "fa-eye-slash"]),
            style: { "width": "1.45em" },
            onClick: _cache[3] || (_cache[3] = ($event) => $data.showPassword = !$data.showPassword)
          }, null, 2)
        ]),
        createBaseVNode("div", _hoisted_6, [
          _hoisted_7,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.password_confirmation = $event),
            type: $data.showConfirmPassword ? "text" : "password",
            name: "password_confirmation",
            class: "ml-1 mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none dark:border-gray-600 dark:bg-slate-900 sm:mt-0 sm:w-8/12"
          }, null, 8, _hoisted_8), [
            [vModelDynamic, $data.form.password_confirmation]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(["fa fa-fw ml-3", $data.showConfirmPassword ? "fa-eye" : "fa-eye-slash"]),
            style: { "width": "1.45em" },
            onClick: _cache[5] || (_cache[5] = ($event) => $data.showConfirmPassword = !$data.showConfirmPassword)
          }, null, 2)
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            createVNode(_component_AppButton, {
              loading: $data.loading,
              disabled: $data.loading || !$options.submitEnabled,
              text: $data.loading ? "Update" : "Update",
              "btn-class": "uppercase leading-snug inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg ",
              type: "submit"
            }, {
              text: withCtx(() => [
                $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
                  key: 0,
                  class: "mr-2 h-5 w-5"
                })) : createCommentVNode("", true),
                createTextVNode(" Update ")
              ]),
              _: 1
            }, 8, ["loading", "disabled", "text"])
          ])
        ])
      ], 32)
    ])
  ], 64);
}
const Password = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Password as default
};
