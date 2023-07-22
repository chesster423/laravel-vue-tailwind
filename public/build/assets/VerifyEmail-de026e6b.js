import { f as render, a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, z as createBlock, D as createCommentVNode, B as toDisplayString, w as withCtx, E as createTextVNode, d as createVNode, n as normalizeClass } from "./vendor-506bc2e6.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import { S as Success } from "./Success-45eef610.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  components: {
    Errors,
    Success,
    CircleSvg,
    HomeIcon: render
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    hash: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      errors: null,
      success: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    })
  },
  methods: {
    ...mapActions({
      verifyResend: "auth/verifyResend",
      verifyEmail: "auth/verifyEmail",
      popToast: "toast/popToast"
    }),
    popSuccess() {
      this.$swal.fire({
        title: "Email verified!",
        text: "Set password now?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, redirect me!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.push({ name: "password" });
        } else {
          this.$router.push({ name: "dashboard" });
        }
      });
    },
    async verify() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.verifyEmail({ id: this.id, hash: this.hash }).then(
          (response) => {
            this.loading = false;
            this.success = "Email Successfully Verified. Redirecting ...";
            this.popToast({
              message: "Email Successfully Verified",
              timer: 5e3,
              icon: "success"
            });
            setTimeout(() => {
              this.$router.push({ name: "history" });
            }, 1e3);
          }
        );
      } catch (e) {
        this.errors = "An errored, please try again later";
        this.popToast({
          message: "An errored, please try again later.",
          timer: 5e3,
          icon: "error"
        });
        this.loading = false;
      }
      this.loading = false;
    },
    async resend() {
      this.loading = true;
      try {
        await this.verifyResend({ id: this.id }).then((response) => {
          this.loading = false;
          this.popToast({
            message: "Email sent.",
            timer: 5e3,
            icon: "success"
          });
        });
      } catch (e) {
        this.popToast({
          message: "An errored, please try again later.",
          timer: 5e3,
          icon: "error"
        });
        this.loading = false;
      }
    }
  }
};
const _hoisted_1 = { class: "mx-auto max-w-screen-md text-gray-900" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = { class: "w-auto rounded border-gray-300 bg-white p-3 text-gray-800 shadow dark:bg-slate-900 dark:text-gray-100" };
const _hoisted_5 = { class: "border-gray-300 p-3 pt-6 text-center font-semibold" };
const _hoisted_6 = { class: "rounded p-4" };
const _hoisted_7 = { class: "mx-auto my-1 mt-3 flex w-full items-center justify-center py-2 sm:mt-0 sm:w-8/12 md:w-10/12 md:p-4" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { class: "text-center" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Go Home", -1);
const _hoisted_11 = { key: 1 };
const _hoisted_12 = {
  key: 0,
  class: "flex items-center justify-center rounded-sm bg-blue-500 p-2 px-6 text-white hover:bg-blue-600"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_success = resolveComponent("success");
  const _component_errors = resolveComponent("errors");
  const _component_HomeIcon = resolveComponent("HomeIcon");
  const _component_router_link = resolveComponent("router-link");
  const _component_circle_svg = resolveComponent("circle-svg");
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          $data.success ? (openBlock(), createBlock(_component_success, {
            key: 0,
            content: $data.success,
            onClose: _cache[0] || (_cache[0] = ($event) => $data.success = null)
          }, null, 8, ["content"])) : createCommentVNode("", true),
          $data.errors ? (openBlock(), createBlock(_component_errors, {
            key: 1,
            content: $data.errors,
            "container-class": "w-full",
            onClose: _cache[1] || (_cache[1] = ($event) => $data.errors = null)
          }, null, 8, ["content"])) : createCommentVNode("", true),
          createBaseVNode("h5", _hoisted_5, toDisplayString(_ctx.user && _ctx.user.email_verified_at ? "Your email is already confirmed" : "Please confirm verification of your email"), 1),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _ctx.user && _ctx.user.email_verified_at ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
                    key: 0,
                    to: { name: "dashboard" },
                    class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
                    onClick: _ctx.closeDrop
                  }, {
                    default: withCtx(({ isActive }) => [
                      createVNode(_component_HomeIcon, { class: "mx-auto mb-3 h-20 w-20 text-center" }),
                      _hoisted_10
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true)
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_11, [
                $data.loading ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createTextVNode(" Verifying Email "),
                  createVNode(_component_circle_svg, { class: "ml-3 h-5 w-5" })
                ])) : (openBlock(), createBlock(_component_AppButton, {
                  key: 1,
                  disabled: $data.loading,
                  loading: $data.loading,
                  onClick: _cache[2] || (_cache[2] = ($event) => $data.errors ? $options.resend() : $options.verify())
                }, {
                  text: withCtx(() => [
                    createTextVNode(toDisplayString($data.errors ? "Oops! Resend Verification?" : "Click to Verify") + " ", 1),
                    createBaseVNode("span", {
                      class: normalizeClass(["fa-fw fa-envelope ml-2", $data.errors ? "far fa-envelope" : "fas fa-check"])
                    }, null, 2)
                  ]),
                  _: 1
                }, 8, ["disabled", "loading"]))
              ]))
            ])
          ])
        ])
      ])
    ])
  ]);
}
const VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  VerifyEmail as default
};
