import { a as mapGetters, b as mapActions, Q as axios, y as resolveDirective, o as openBlock, c as createElementBlock, C as withDirectives, n as normalizeClass, D as createCommentVNode, al as render, r as resolveComponent, e as createBaseVNode, G as withModifiers, ad as vModelText, B as toDisplayString, d as createVNode, w as withCtx, E as createTextVNode, z as createBlock } from "./vendor-506bc2e6.js";
import { t as track, _ as _export_sfc, C as CircleSvg, r as router } from "./app-a3809c34.js";
import "./vue-axios.esm.min-fa86a92f.js";
const _sfc_main$1 = {
  name: "SocialiteLogins",
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      loading: false,
      window: {},
      authWindowTitle: "Authentication Login"
    };
  },
  computed: {
    ...mapGetters({
      logins: "auth/logins",
      token: "auth/token"
    }),
    socialLoginsEnabled() {
      if (Object.values(this.logins).find((v) => v == "1")) {
        return true;
      }
      return false;
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    window.addEventListener("message", this.onMessage, false);
  },
  beforeUnmount() {
    window.removeEventListener("message", this.onMessage);
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast",
      fetchOauthUrl: "auth/fetchOauthUrl",
      saveToken: "auth/saveToken",
      getUser: "auth/getUser",
      getUserByToken: "auth/getUserByToken"
    }),
    track,
    async socialiteLogin(provider) {
      this.track(`Social Login Provider Clicked: ${provider}`);
      this.loading = true;
      try {
        await axios.get("/sanctum/csrf-cookie").then((response) => {
        });
        const url = await this.fetchOauthUrl({ provider }).then((response) => {
          this.loading = false;
          return response;
        });
        this.window = this.openWindow(url, this.authWindowTitle);
      } catch (e) {
        this.track(
          `Social Login Provider Failed to Login: ${provider}`,
          "error",
          "auth-error"
        );
        this.popToast({
          message: "Failed to log in.",
          timer: 1e4,
          icon: "error"
        });
        this.window.close();
        this.loading = false;
      }
    },
    async onMessage(e) {
      const self = this;
      if (e.origin !== window.origin || !e.data.token) {
        return;
      }
      self.popToast({
        message: "Successfully logged in",
        timer: 2500,
        icon: "success"
      });
      self.track(
        "Social Login Provider Logged in Successfully",
        "login",
        "social login success"
      );
      await axios.get("/sanctum/csrf-cookie").then((response) => {
      });
      await self.saveToken({ token: e.data.token }).then((response) => {
        self.getUserByToken({ token: e.data.token }).then(() => {
          setTimeout(() => {
            self.$router.push({ name: "dashboard" });
          }, 1);
        });
      });
    },
    openWindow(url, title, options = {}) {
      if (typeof url === "object") {
        options = url;
        url = "";
      }
      options = {
        url,
        title,
        width: 600,
        height: 720,
        ...options
      };
      const dualScreenLeft = window.screenLeft !== void 0 ? window.screenLeft : window.screen.left;
      const dualScreenTop = window.screenTop !== void 0 ? window.screenTop : window.screen.top;
      const width = window.innerWidth || document.documentElement.clientWidth;
      const height = window.innerHeight || document.documentElement.clientHeight;
      options.left = width / 2 - options.width / 2 + dualScreenLeft;
      options.top = height / 2 - options.height / 2 + dualScreenTop;
      const optionsStr = Object.keys(options).reduce((acc, key) => {
        acc.push(`${key}=${options[key]}`);
        return acc;
      }, []).join(",");
      const newWindow = window.open(url, title, optionsStr);
      if (window.focus) {
        newWindow.focus();
      }
      return newWindow;
    }
  }
};
const _hoisted_1$1 = { class: "flex flex-wrap justify-around" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _ctx.logins.facebook == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(["fa-brands fa-square-facebook fa-3x mb-2 mr-3 cursor-pointer text-blue-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.socialiteLogin("facebook"))
    }, null, 2)), [
      [_directive_tippy, "Facebook"]
    ]) : createCommentVNode("", true),
    _ctx.logins.twitter == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(["fa-brands fa-twitter fa-3x mb-2 mr-3 cursor-pointer text-blue-300 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[1] || (_cache[1] = ($event) => $options.socialiteLogin("twitter"))
    }, null, 2)), [
      [_directive_tippy, "Twitter"]
    ]) : createCommentVNode("", true),
    _ctx.logins.instagram == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass(["fa-brands fa-instagram fa-3x mb-2 mr-3 cursor-pointer text-gray-700 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[2] || (_cache[2] = ($event) => $options.socialiteLogin("instagram"))
    }, null, 2)), [
      [_directive_tippy, "Instagram"]
    ]) : createCommentVNode("", true),
    _ctx.logins.github == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 3,
      class: normalizeClass(["fa-brands fa-github fa-3x mb-2 mr-3 cursor-pointer text-gray-800 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[3] || (_cache[3] = ($event) => $options.socialiteLogin("github"))
    }, null, 2)), [
      [_directive_tippy, "GitHub"]
    ]) : createCommentVNode("", true),
    _ctx.logins.youtube == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 4,
      class: normalizeClass(["fa-brands fa-youtube fa-3x mb-2 mr-3 cursor-pointer text-red-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[4] || (_cache[4] = ($event) => $options.socialiteLogin("youtube"))
    }, null, 2)), [
      [_directive_tippy, "YouTube"]
    ]) : createCommentVNode("", true),
    _ctx.logins.google == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 5,
      class: normalizeClass(["fa-brands fa-google fa-3x mb-2 mr-3 cursor-pointer text-red-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[5] || (_cache[5] = ($event) => $options.socialiteLogin("google"))
    }, null, 2)), [
      [_directive_tippy, "Google"]
    ]) : createCommentVNode("", true),
    _ctx.logins.linkedin == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 6,
      class: normalizeClass(["fa-brands fa-linkedin fa-3x mb-2 mr-3 cursor-pointer text-blue-700 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[6] || (_cache[6] = ($event) => $options.socialiteLogin("linkedin"))
    }, null, 2)), [
      [_directive_tippy, "LinkedIn"]
    ]) : createCommentVNode("", true),
    _ctx.logins.twitch == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 7,
      class: normalizeClass(["fa-brands fa-twitch fa-3x mb-2 mr-3 cursor-pointer text-blue-600 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[7] || (_cache[7] = ($event) => $options.socialiteLogin("twitch"))
    }, null, 2)), [
      [_directive_tippy, "Twitch"]
    ]) : createCommentVNode("", true),
    _ctx.logins.apple == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 8,
      class: normalizeClass(["fa-brands fa-apple fa-3x mb-2 mr-3 cursor-pointer text-gray-800 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[8] || (_cache[8] = ($event) => $options.socialiteLogin("apple"))
    }, null, 2)), [
      [_directive_tippy, "Apple"]
    ]) : createCommentVNode("", true),
    _ctx.logins.microsoft == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 9,
      class: normalizeClass(["fa-brands fa-microsoft fa-3x mb-2 mr-3 cursor-pointer text-blue-300 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[9] || (_cache[9] = ($event) => $options.socialiteLogin("microsoft"))
    }, null, 2)), [
      [_directive_tippy, "Microsoft"]
    ]) : createCommentVNode("", true),
    _ctx.logins.tiktok == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 10,
      class: normalizeClass(["fa-brands fa-tiktok fa-3x mb-2 mr-3 cursor-pointer text-pink-600 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[10] || (_cache[10] = ($event) => $options.socialiteLogin("tiktok"))
    }, null, 2)), [
      [_directive_tippy, "TikTok"]
    ]) : createCommentVNode("", true),
    _ctx.logins.zoho == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 11,
      class: normalizeClass(["fas fa-z fa-3x mb-2 mr-3 cursor-pointer text-yellow-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[11] || (_cache[11] = ($event) => $options.socialiteLogin("zoho"))
    }, null, 2)), [
      [_directive_tippy, "Zoho"]
    ]) : createCommentVNode("", true),
    _ctx.logins.stackexchange == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 12,
      class: normalizeClass(["fa-brands fa-stack-exchange fa-3x mb-2 mr-3 cursor-pointer text-blue-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[12] || (_cache[12] = ($event) => $options.socialiteLogin("stackexchange"))
    }, null, 2)), [
      [_directive_tippy, "StackExchange"]
    ]) : createCommentVNode("", true),
    _ctx.logins.gitlab == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 13,
      class: normalizeClass(["fa-brands fa-square-gitlab fa-3x mb-2 mr-3 cursor-pointer text-orange-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[13] || (_cache[13] = ($event) => $options.socialiteLogin("gitlab"))
    }, null, 2)), [
      [_directive_tippy, "GitLab"]
    ]) : createCommentVNode("", true),
    _ctx.logins.reddit == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 14,
      class: normalizeClass(["fa-brands fa-square-reddit fa-3x mb-2 mr-3 cursor-pointer text-orange-700 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[14] || (_cache[14] = ($event) => $options.socialiteLogin("reddit"))
    }, null, 2)), [
      [_directive_tippy, "GitLab"]
    ]) : createCommentVNode("", true),
    _ctx.logins.snapchat == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 15,
      class: normalizeClass(["fa-brands fa-square-snapchat fa-3x mb-2 mr-3 cursor-pointer text-yellow-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[15] || (_cache[15] = ($event) => $options.socialiteLogin("snapchat"))
    }, null, 2)), [
      [_directive_tippy, "Snapchat"]
    ]) : createCommentVNode("", true),
    _ctx.logins.meetup == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 16,
      class: normalizeClass(["fa-brands fa-meetup fa-3x mb-2 mr-3 cursor-pointer text-red-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[16] || (_cache[16] = ($event) => $options.socialiteLogin("meetup"))
    }, null, 2)), [
      [_directive_tippy, "Meetup"]
    ]) : createCommentVNode("", true),
    _ctx.logins.atlassian == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 17,
      class: normalizeClass(["fa-brands fa-atlassian fa-3x mb-2 mr-3 cursor-pointer text-blue-800 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[17] || (_cache[17] = ($event) => $options.socialiteLogin("atlassian"))
    }, null, 2)), [
      [_directive_tippy, "Atlassian"]
    ]) : createCommentVNode("", true)
  ]);
}
const SocialiteLogins = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "Login",
  components: {
    ArrowRightOnRectangleIcon: render,
    CircleSvg,
    SocialiteLogins
  },
  props: {
    showSmLogin: { type: Boolean, default: true },
    isFunnelPage: { type: Boolean, default: false },
    redirectToFunnel: { type: Boolean, default: false }
  },
  setup() {
    return {};
  },
  data() {
    return {
      loginImage: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp",
      loginImageAlt: "Login Image",
      form: {
        email: "",
        password: ""
      },
      errors: null,
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      logins: "auth/logins",
      user: "auth/user"
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
  watch: {},
  mounted() {
  },
  methods: {
    ...mapActions({
      appLogin: "auth/login",
      popToast: "toast/popToast"
    }),
    async login() {
      this.loading = true;
      this.errors = null;
      try {
        await this.appLogin(this.form).then((response) => {
          this.loading = false;
          if (this.isFunnelPage || this.$route.params.redirect) {
            router.push({ name: "step-8" });
          } else {
            if (this.user.roles[0].slug == "super.admin") {
              router.push({ name: "admin" });
            } else {
              router.push({ name: "user" });
            }
          }
        });
      } catch (e) {
        if (e.status === 422) {
          this.errors = e.data.errors;
          this.popToast({
            message: Object.values(this.errors).flat().toString(),
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
const _hoisted_1 = { class: "mx-auto mt-10 max-w-7xl px-4 text-gray-800 sm:px-6" };
const _hoisted_2 = { class: "g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center" };
const _hoisted_3 = { class: "shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = { class: "mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12" };
const _hoisted_6 = { class: "mb-6 md:mt-16 lg:mt-12" };
const _hoisted_7 = ["disabled"];
const _hoisted_8 = {
  key: 0,
  class: "mt-1 text-sm text-red-500"
};
const _hoisted_9 = { class: "mb-6" };
const _hoisted_10 = ["disabled"];
const _hoisted_11 = {
  key: 0,
  class: "mt-1 text-sm text-red-500"
};
const _hoisted_12 = { class: "mb-6 flex items-center justify-between" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "form-group form-check" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "exampleCheck2",
    type: "checkbox",
    class: "form-check-input float-left mr-2 mt-1 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
  }),
  /* @__PURE__ */ createBaseVNode("label", {
    class: "form-check-label mt-1 inline-block cursor-pointer text-gray-800 dark:text-gray-100",
    for: "exampleCheck2"
  }, "Remember me")
], -1);
const _hoisted_14 = { class: "text-center lg:text-left" };
const _hoisted_15 = { class: "mb-0 mt-4 pt-1 text-sm" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", { class: "mr-2 cursor-default text-gray-700 dark:text-gray-300" }, " Don't have an account? ", -1);
const _hoisted_17 = {
  key: 0,
  class: "mt-5"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "mx-4 mb-0 text-center font-semibold" }, "Or")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", { class: "mb-3 font-bold text-gray-700" }, "Login with", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ArrowRightOnRectangleIcon = resolveComponent("ArrowRightOnRectangleIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_SocialiteLogins = resolveComponent("SocialiteLogins");
  return openBlock(), createElementBlock("section", null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("img", {
            src: $data.loginImage,
            class: "w-full",
            alt: $data.loginImageAlt
          }, null, 8, _hoisted_4)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("form", {
            onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.login && $options.login(...args), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("label", {
                for: "email",
                class: normalizeClass(["text-small mb-2 inline-block hidden", { "text-red-500": $data.errors && $data.errors.email }])
              }, " E-mail Address ", 2),
              withDirectives(createBaseVNode("input", {
                id: "email",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.email = $event),
                type: "text",
                class: normalizeClass(["form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none", { "border-red-500": $data.errors && $data.errors.email }]),
                disabled: $data.loading,
                placeholder: "Email Address"
              }, null, 10, _hoisted_7), [
                [vModelText, $data.form.email]
              ]),
              $data.errors && $data.errors.email ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString($data.errors.email[0]), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("label", {
                for: "password",
                class: normalizeClass(["text-small mb-2 inline-block hidden", { "text-red-500": $data.errors && $data.errors.password }])
              }, " Password ", 2),
              withDirectives(createBaseVNode("input", {
                id: "password",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.password = $event),
                type: "password",
                autocomplete: "on",
                class: normalizeClass(["form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none", { "border-red-500": $data.errors && $data.errors.password }]),
                disabled: $data.loading,
                placeholder: "Password"
              }, null, 10, _hoisted_10), [
                [vModelText, $data.form.password]
              ]),
              $data.errors && $data.errors.password ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString($data.errors.password[0]), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createVNode(_component_router_link, {
                to: { name: "forgot-password" },
                class: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Forgot password? ")
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(_component_AppButton, {
                primary: "",
                loading: $data.loading,
                disabled: $data.loading,
                text: $data.loading ? "Login" : "Login",
                "btn-class": "leading-snug px-7 py-3 text-sm uppercase leading-snug shadow-md",
                type: "submit"
              }, {
                text: withCtx(() => [
                  !$data.loading ? (openBlock(), createBlock(_component_ArrowRightOnRectangleIcon, {
                    key: 0,
                    class: "mr-2 h-6 w-6"
                  })) : createCommentVNode("", true),
                  $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
                    key: 1,
                    class: "mr-2 h-6 w-6"
                  })) : createCommentVNode("", true),
                  createTextVNode(" Login ")
                ]),
                _: 1
              }, 8, ["loading", "disabled", "text"]),
              createBaseVNode("p", _hoisted_15, [
                _hoisted_16,
                createVNode(_component_router_link, {
                  to: { name: "register" },
                  class: "font-bold text-red-500 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Register ")
                  ]),
                  _: 1
                })
              ]),
              $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_17, [
                _hoisted_18,
                _hoisted_19,
                createVNode(_component_SocialiteLogins)
              ])) : createCommentVNode("", true)
            ])
          ], 32)
        ])
      ])
    ])
  ]);
}
const AppLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AppLogin as A
};
