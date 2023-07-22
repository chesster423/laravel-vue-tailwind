import { a as mapGetters, b as mapActions, h as hooks, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, E as createTextVNode, B as toDisplayString, z as createBlock, D as createCommentVNode, G as withModifiers, C as withDirectives, ad as vModelText, d as createVNode, w as withCtx, H as pushScopeId, I as popScopeId } from "./vendor-506bc2e6.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import { S as Success } from "./Success-45eef610.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const Profile_vue_vue_type_style_index_0_scoped_eb83c7ba_lang = "";
const _sfc_main = {
  components: {
    Errors,
    Success,
    CircleSvg
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        theme_dark: false
      },
      errors: null,
      success: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      verified: "auth/verified",
      user: "auth/user"
    })
  },
  mounted() {
    this.form.name = this.user.name;
    this.form.email = this.user.email;
    this.form.theme_dark = this.user.theme_dark;
  },
  methods: {
    ...mapActions({
      updateProfile: "auth/profile",
      popToast: "toast/popToast"
    }),
    async update() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.updateProfile(this.form).then((response) => {
          if (response && response.data && response.data.user && response.data.user.id) {
            this.popToast({
              message: "Profile Updated Successfully",
              timer: 2e3,
              icon: "success"
            });
          }
        });
      } catch (e) {
        this.errors = e.data;
        this.popToast({
          message: "Error Updating Profile",
          timer: 5e3,
          icon: "error"
        });
      }
      this.loading = false;
    },
    moment() {
      return hooks();
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-eb83c7ba"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "flex items-center justify-between rounded-t border-b p-4 font-semibold dark:border-gray-600 dark:bg-slate-800" };
const _hoisted_2 = { class: "text-sm font-medium text-gray-600 dark:text-gray-400" };
const _hoisted_3 = { class: "rounded bg-white p-4 dark:border-gray-500 dark:bg-slate-800" };
const _hoisted_4 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "name",
  class: "w-4/12"
}, " Name ", -1));
const _hoisted_6 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "Email",
  class: "w-4/12"
}, " Email ", -1));
const _hoisted_8 = { class: "my-1 w-full py-2 sm:flex sm:items-center" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "Email",
  class: "w-4/12"
}, " Theme ", -1));
const _hoisted_10 = { class: "float-left ml-2 mt-1" };
const _hoisted_11 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-end" };
const _hoisted_12 = { class: "mt-3 flex w-full items-center justify-between sm:mt-0 sm:w-8/12" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Success = resolveComponent("Success");
  const _component_Errors = resolveComponent("Errors");
  const _component_AppSwitch = resolveComponent("AppSwitch");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      createTextVNode(" Profile "),
      createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.verified ? `Verified on: ${$options.moment(_ctx.verified).format("MMM Do YYYY, h:mma")}` : "Not verified !"), 1)
    ]),
    createBaseVNode("div", _hoisted_3, [
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
        onSubmit: _cache[5] || (_cache[5] = withModifiers((...args) => $options.update && $options.update(...args), ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.name = $event),
            type: "text",
            name: "name",
            class: "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none dark:border-gray-600 dark:bg-slate-900 sm:mt-0 sm:w-8/12"
          }, null, 512), [
            [vModelText, $data.form.name]
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          _hoisted_7,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.email = $event),
            type: "email",
            name: "email",
            class: "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none dark:border-gray-600 dark:bg-slate-900 sm:mt-0 sm:w-8/12"
          }, null, 512), [
            [vModelText, $data.form.email]
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          _hoisted_9,
          createVNode(_component_AppSwitch, {
            enabled: $data.form.theme_dark,
            onClick: _cache[4] || (_cache[4] = ($event) => $data.form.theme_dark = !$data.form.theme_dark)
          }, null, 8, ["enabled"]),
          createBaseVNode("div", _hoisted_10, toDisplayString($data.form.theme_dark ? "Dark" : "Light"), 1)
        ]),
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            createVNode(_component_AppButton, {
              loading: $data.loading,
              disabled: $data.loading,
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
  ]);
}
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eb83c7ba"]]);
export {
  Profile as default
};
