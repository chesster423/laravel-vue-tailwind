function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  async function* g() {
  }
  ;
}
;
import { h as hooks, m as mapState, a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, w as withCtx, e as createBaseVNode, n as normalizeClass, f as render, g as render$1, i as render$2, j as render$3, k as ge, l as je, A as Ae, W as We, p as render$4, q as render$5, s as render$6, t as render$7, u as render$8, v as render$9, x as ue, y as resolveDirective, z as createBlock, B as toDisplayString, C as withDirectives, D as createCommentVNode, E as createTextVNode, F as vShow, G as withModifiers, T as Transition, H as pushScopeId, I as popScopeId, J as Fragment, K as renderList, L as createStaticVNode, M as normalizeStyle, N as resolveDynamicComponent, O as defineAsyncComponent, P as api, Q as axios, R as createStore, S as sharedMutations, U as a, V as createRouter, X as createWebHistory, Y as trackRouter, Z as renderSlot, _ as createApp, $ as init, a0 as BrowserTracing, a1 as vueRouterInstrumentation, a2 as showReportDialog, a3 as setUser, a4 as VueSweetalert2, a5 as compiled, a6 as plugin, a7 as VueSecureHTML, a8 as KonamiCode, a9 as toasty, aa as index } from "./vendor-506bc2e6.js";
import "./__commonjsHelpers__-7a7fcd32.js";
function parseDisplayDate(date) {
  return hooks(date).format("MMM Do YYYY, h:mma");
}
function capitalizeFirstLetter(str) {
  if (!str)
    return "";
  var firstCodeUnit = str[0];
  if (firstCodeUnit < "\uD800" || firstCodeUnit > "\uDFFF") {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str.slice(0, 2).toUpperCase() + str.slice(2);
}
function greeting() {
  const date = /* @__PURE__ */ new Date();
  const currentTime = date.getHours();
  let greeting2;
  if (currentTime >= 0 && currentTime <= 12) {
    greeting2 = "Good Morning";
  } else if (currentTime > 12 && currentTime <= 18) {
    greeting2 = "Good Afternoon";
  } else {
    greeting2 = "Good Evening";
  }
  return greeting2;
}
function providerIcon(provider = null) {
  if (provider.toLowerCase() == "apple") {
    return "fa-brands fa-apple text-gray-800 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "twitter") {
    return "fa-brands fa-twitter text-blue-300 dark:text-blue-200";
  }
  if (provider.toLowerCase() == "google") {
    return "fa-brands fa-google text-red-500 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "microsoft") {
    return "fa-brands fa-microsoft text-blue-300 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "tiktok") {
    return "fa-brands fa-tiktok text-pink-600 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "youtube") {
    return "fa-brands fa-youtube text-red-600 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "instagram") {
    return "fa-brands fa-instagram text-gray-800 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "facebook") {
    return "fa-brands fa-facebook text-blue-600 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "github") {
    return "fa-brands fa-github text-gray-700 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "twitch") {
    return "fa-brands fa-twitch text-blue-300 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "linkedin") {
    return "fa-brands fa-linkedin text-blue-900 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "zoho") {
    return "fas fa-z text-yellow-500 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "stackexchange") {
    return "fa-brands fa-stack-exchange text-blue-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "gitlab") {
    return "fa-brands fa-square-gitlab text-orange-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "reddit") {
    return "fa-brands fa-square-reddit text-orange-700 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "snapchat") {
    return "fa-brands fa-square-snapchat text-yellow-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "meetup") {
    return "fa-brands fa-meetup text-red-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "bitbucket") {
    return "fa-brands fa-bitbucket text-blue-800 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "atlassian") {
    return "fa-brands fa-atlassian text-blue-800 dark:text-gray-200";
  }
  return "fa-solid fa-plug-circle-check text-gray-600 dark:text-gray-200";
}
function validateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
function track(action, category = "click event", label = "clicked", value = 1) {
  let appGaEnabled = GA_ENABLED;
  if (appGaEnabled) {
    this.$gtag.event(action, {
      event_category: category,
      event_label: label,
      value
    });
  }
}
const _sfc_main$9 = {
  name: "NavLinks",
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
    })
  },
  watch: {},
  created() {
  },
  mounted() {
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
const NavLinks_vue_vue_type_style_index_0_scoped_6ca43e08_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$8 = { class: "carsona-nav-links" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_router_link, {
      to: { name: "step-1" },
      class: "ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    }, {
      default: withCtx(({ isActive }) => [
        createBaseVNode("span", {
          class: normalizeClass([
            isActive && "cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500"
          ])
        }, " FIND YOUR CARSONA ", 2)
      ]),
      _: 1
    }),
    createVNode(_component_router_link, {
      to: { name: "about" },
      class: "ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    }, {
      default: withCtx(({ isActive }) => [
        createBaseVNode("span", {
          class: normalizeClass([
            isActive && "cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500"
          ])
        }, " ABOUT US ", 2)
      ]),
      _: 1
    }),
    createVNode(_component_router_link, {
      to: { name: "contact-us" },
      class: "ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    }, {
      default: withCtx(({ isActive }) => [
        createBaseVNode("span", {
          class: normalizeClass([
            isActive && "cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500"
          ])
        }, " CONTACT US ", 2)
      ]),
      _: 1
    }),
    createVNode(_component_router_link, {
      to: { name: "faqs" },
      class: "ml-8 whitespace-nowrap text-base font-medium text-gray-500 text-white hover:text-gray-900 dark:hover:text-gray-400"
    }, {
      default: withCtx(({ isActive }) => [
        createBaseVNode("span", {
          class: normalizeClass([
            isActive && "cursor-default text-gray-800 text-white hover:text-gray-900 dark:hover:text-gray-500"
          ])
        }, " FAQS ", 2)
      ]),
      _: 1
    })
  ]);
}
const NavLinks = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-6ca43e08"]]);
const AppNav_vue_vue_type_style_index_0_scoped_132a92ba_lang = "";
const _sfc_main$8 = {
  name: "AppNav",
  components: {
    HomeIcon: render,
    BuildingLibraryIcon: render$1,
    InformationCircleIcon: render$2,
    DocumentTextIcon: render$3,
    Popover: ge,
    PopoverButton: je,
    PopoverGroup: Ae,
    PopoverPanel: We,
    Bars3Icon: render$4,
    XMarkIcon: render$5,
    CogIcon: render$6,
    ArrowLeftOnRectangleIcon: render$7,
    ChevronDownIcon: render$8,
    UserCircleIcon: render$9,
    Switch: ue,
    // eslint-disable-line
    NavLinks
  },
  props: {},
  data() {
    return {
      appName: "Carsona",
      // logo: "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600",
      drop: false,
      errors: null,
      success: "",
      loading: false,
      companyLogo: window.location.origin + "/images/logo-white.png",
      companyLogoMobile: window.location.origin + "/images/logo.png",
      logoImageAlt: "Company Logo",
      navClass: "",
      view: {
        atTopOfPage: true
      }
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles",
      currentUserToken: "auth/currentUserToken",
      impersonatorToken: "auth/impersonatorToken"
    }),
    isImpersonating() {
      if (this.currentUserToken && this.impersonatorToken) {
        return true;
      }
      return false;
    },
    currentRouteName() {
      return this.$route.name;
    },
    getNavClass() {
      const paths = ["home", "/", "about", "contact-us"];
      if (!paths.includes(this.currentRouteName)) {
        return true;
      }
      return false;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
      updateTheme: "auth/theme",
      popToast: "toast/popToast",
      leaveImpersonatingUser: "auth/leaveImpersonatingUser"
    }),
    parseDisplayDate,
    closeDrop() {
      this.drop = false;
    },
    openDrop() {
      this.drop = true;
    },
    handleScroll() {
      if (window.pageYOffset > 100) {
        if (this.view.atTopOfPage)
          this.view.atTopOfPage = false;
      } else {
        if (!this.view.atTopOfPage)
          this.view.atTopOfPage = true;
      }
    },
    async toggleTheme() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.updateTheme({ theme_dark: !this.user.theme_dark }).then(
          (response) => {
            if (response && response.data && response.data.user && response.data.user.id) {
              this.popToast({
                message: "Theme Saved",
                timer: 2e3,
                icon: "success"
              });
            }
          }
        );
      } catch (e) {
        this.errors = e.data;
        this.popToast({
          message: "Error Updating Theme",
          timer: 5e3,
          icon: "error"
        });
      }
      this.loading = false;
    },
    async leaveImpersonating() {
      try {
        await this.leaveImpersonatingUser().then((response) => {
        });
      } catch (e) {
        this.popToast({
          message: "Unable To Return To Yourself",
          timer: 5e3,
          icon: "error"
        });
      }
    }
  }
};
const _withScopeId$2 = (n) => (pushScopeId("data-v-132a92ba"), n = n(), popScopeId(), n);
const _hoisted_1$7 = { class: "mx-auto px-4 sm:px-6" };
const _hoisted_2$7 = { class: "flex items-center justify-between py-3 md:justify-start md:space-x-10" };
const _hoisted_3$4 = { class: "flex justify-start lg:w-0 lg:flex-1" };
const _hoisted_4$2 = { class: "sr-only" };
const _hoisted_5$2 = ["src", "alt"];
const _hoisted_6$2 = { class: "-my-2 -mr-2 md:hidden" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Open menu", -1));
const _hoisted_8$1 = {
  key: 0,
  class: "hidden items-center justify-end md:flex md:flex-1 lg:w-0"
};
const _hoisted_9 = {
  ref: "dropMenu",
  class: "relative ml-5"
};
const _hoisted_10 = {
  key: 0,
  class: "fa-solid fa-exclamation-circle fa-xs text-orange-600",
  style: { "position": "absolute", "top": "12px", "right": "38px" }
};
const _hoisted_11 = ["src", "alt"];
const _hoisted_12 = {
  key: 1,
  class: "hidden items-center justify-end md:flex md:flex-1 lg:w-0"
};
const _hoisted_13 = { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-gray-700 dark:bg-slate-900" };
const _hoisted_14 = { class: "px-5 pb-6 pt-5" };
const _hoisted_15 = { class: "flex items-center justify-between" };
const _hoisted_16 = { class: "sr-only" };
const _hoisted_17 = ["src", "alt"];
const _hoisted_18 = { class: "-mr-2" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Close menu", -1));
const _hoisted_20 = { class: "space-y-6 px-5 py-6" };
const _hoisted_21 = { class: "" };
const _hoisted_22 = {
  key: 0,
  class: "mb-6 text-left"
};
const _hoisted_23 = {
  key: 1,
  class: "mb-6 text-left"
};
const _hoisted_24 = { class: "mb-6 text-left" };
const _hoisted_25 = { class: "mb-6 text-left" };
const _hoisted_26 = { class: "mb-6 text-left" };
const _hoisted_27 = { class: "mb-6 text-left" };
const _hoisted_28 = { class: "mb-6 text-left" };
const _hoisted_29 = { class: "mb-7 text-left" };
const _hoisted_30 = {
  key: 2,
  class: "mb-8 text-left",
  style: { "margin-top": "-0.5em" }
};
const _hoisted_31 = ["onClick"];
const _hoisted_32 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-user-secret fa-fw ml-1 mr-2" }, null, -1));
const _hoisted_33 = { key: 0 };
const _hoisted_34 = { class: "mt-6 text-center text-base font-medium text-gray-500" };
const _hoisted_35 = { key: 1 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Bars3Icon = resolveComponent("Bars3Icon");
  const _component_PopoverButton = resolveComponent("PopoverButton");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_nav_links = resolveComponent("nav-links");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_BuildingLibraryIcon = resolveComponent("BuildingLibraryIcon");
  const _component_HomeIcon = resolveComponent("HomeIcon");
  const _component_CogIcon = resolveComponent("CogIcon");
  const _component_ArrowLeftOnRectangleIcon = resolveComponent("ArrowLeftOnRectangleIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  const _component_PopoverPanel = resolveComponent("PopoverPanel");
  const _component_Popover = resolveComponent("Popover");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createBlock(_component_Popover, {
    class: normalizeClass(["carsona-nav relative right-0 top-0 mb-4 dark:bg-slate-800", { "bg-black": $options.getNavClass, scrolled: !$data.view.atTopOfPage }])
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$7, [
          createBaseVNode("div", _hoisted_3$4, [
            createVNode(_component_router_link, {
              to: { name: "home" },
              onClick: $options.closeDrop
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_4$2, toDisplayString($data.appName), 1),
                createBaseVNode("img", {
                  src: $data.companyLogo,
                  class: "nav-logo mx-auto",
                  alt: $data.logoImageAlt
                }, null, 8, _hoisted_5$2)
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          createBaseVNode("div", _hoisted_6$2, [
            createVNode(_component_PopoverButton, {
              class: "inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800 dark:hover:bg-slate-800",
              onClick: $options.openDrop
            }, {
              default: withCtx(() => [
                _hoisted_7$1,
                createVNode(_component_Bars3Icon, {
                  class: "h-6 w-6",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          _ctx.authenticated && _ctx.user ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
            $options.isImpersonating ? withDirectives((openBlock(), createBlock(_component_AppButton, {
              key: 0,
              icon: "fa-solid fa-user-secret",
              class: "float-right mr-4 h-3 w-3 rounded",
              style: { "background": "transparent !important" },
              onClick: $options.leaveImpersonating
            }, null, 8, ["onClick"])), [
              [_directive_tippy, "Return to your account"]
            ]) : createCommentVNode("", true),
            createVNode(_component_nav_links),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", {
                class: "cursor-pointer items-center p-3 text-base font-medium tracking-wider text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
                onClick: _cache[0] || (_cache[0] = ($event) => $data.drop = !$data.drop)
              }, [
                createTextVNode(toDisplayString(_ctx.user && _ctx.user.name ? _ctx.user.name : "") + " ", 1),
                !_ctx.user.email_verified_at ? withDirectives((openBlock(), createElementBlock("span", _hoisted_10, null, 512)), [
                  [_directive_tippy, "Email Not Verified"]
                ]) : createCommentVNode("", true),
                _ctx.user && _ctx.user.avatar ? (openBlock(), createElementBlock("img", {
                  key: 1,
                  src: _ctx.user.avatar,
                  alt: _ctx.user.name,
                  class: "float-right ml-2 mt-0 h-6 w-6 rounded-full"
                }, null, 8, _hoisted_11)) : (openBlock(), createBlock(_component_UserCircleIcon, {
                  key: 2,
                  class: "float-right ml-2 mt-0 h-6 w-6"
                }))
              ]),
              withDirectives(createBaseVNode("div", {
                class: "absolute right-5 z-10 flex w-auto flex-col whitespace-nowrap rounded border bg-white shadow-md dark:bg-slate-900",
                onClick: _cache[2] || (_cache[2] = ($event) => $data.drop = !$data.drop)
              }, [
                _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
                  key: 0,
                  to: { name: "admin" }
                }, {
                  default: withCtx(({ isActive }) => [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "flex items-center rounded-t p-4 pl-8 pr-10 hover:bg-slate-800 hover:text-white",
                        isActive ? "cursor-default whitespace-nowrap bg-slate-500 text-white" : "text-gray-700"
                      ])
                    }, [
                      createVNode(_component_BuildingLibraryIcon, { class: "mr-2 h-6 w-6" }),
                      createTextVNode(" Admin ")
                    ], 2)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.authenticated && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
                  key: 1,
                  to: { name: "dashboard" }
                }, {
                  default: withCtx(({ isActive }) => [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "flex items-center p-4 pl-8 pr-10 hover:bg-slate-800 hover:text-white",
                        isActive ? _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? "cursor-default whitespace-nowrap bg-slate-500 text-white" : "cursor-default whitespace-nowrap rounded-t bg-slate-500 text-white" : _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? "text-gray-700" : "rounded-t text-gray-700"
                      ])
                    }, [
                      createVNode(_component_HomeIcon, { class: "mr-2 h-6 w-6" }),
                      createTextVNode(" Dashboard ")
                    ], 2)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.authenticated && _ctx.roles.user ? (openBlock(), createBlock(_component_router_link, {
                  key: 2,
                  to: { name: "history" }
                }, {
                  default: withCtx(({ isActive }) => [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "flex items-center p-4 pl-8 pr-10 hover:bg-slate-800 hover:text-white",
                        isActive ? _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? "cursor-default whitespace-nowrap bg-slate-500 text-white" : "cursor-default whitespace-nowrap rounded-t bg-slate-500 text-white" : _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? "text-gray-700" : "rounded-t text-gray-700"
                      ])
                    }, [
                      createVNode(_component_HomeIcon, { class: "mr-2 h-6 w-6" }),
                      createTextVNode(" Dashboard ")
                    ], 2)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
                  key: 3,
                  to: { name: "settings" }
                }, {
                  default: withCtx(({ isActive }) => [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "flex items-center p-4 pl-8 pr-10 hover:bg-slate-800 hover:text-white",
                        isActive ? "cursor-default whitespace-nowrap bg-slate-500 text-white" : "text-gray-700"
                      ])
                    }, [
                      createVNode(_component_CogIcon, { class: "mr-2 h-6 w-6" }),
                      createTextVNode(" Settings ")
                    ], 2)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "flex cursor-pointer items-center rounded-b p-4 pl-8 pr-10 text-gray-700 hover:bg-slate-800 hover:text-white",
                  onClick: _cache[1] || (_cache[1] = withModifiers(($event) => (_ctx.logout(), $options.closeDrop()), ["prevent"]))
                }, [
                  createVNode(_component_ArrowLeftOnRectangleIcon, { class: "mr-2 h-6 w-6" }),
                  createTextVNode(" Logout ")
                ])
              ], 512), [
                [vShow, $data.drop]
              ])
            ], 512)
          ])) : createCommentVNode("", true),
          !_ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_12, [
            createVNode(_component_nav_links),
            createVNode(_component_router_link, {
              to: { name: "login" },
              class: "ml-8 whitespace-nowrap text-base font-medium text-white hover:text-gray-900 dark:hover:text-gray-400",
              onClick: $options.closeDrop
            }, {
              default: withCtx(({ isActive }) => [
                createBaseVNode("span", {
                  class: normalizeClass([
                    isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                  ])
                }, " LOG IN ", 2)
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_router_link, {
              to: { name: "register" },
              onClick: $options.closeDrop
            }, {
              default: withCtx(({ isActive }) => [
                createVNode(_component_AppButton, {
                  primary: "",
                  text: "SIGN UP",
                  class: normalizeClass(["ml-8", [isActive && "opacity-60"]])
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["onClick"])
          ])) : createCommentVNode("", true)
        ])
      ]),
      createVNode(Transition, {
        "enter-active-class": "duration-200 ease-out",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-active-class": "duration-100 ease-in",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(_component_PopoverPanel, {
            focus: "",
            class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          }, {
            default: withCtx(({ close }) => [
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", _hoisted_16, toDisplayString($data.appName), 1),
                      createVNode(_component_router_link, {
                        to: { name: "home" },
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("img", {
                            src: $data.companyLogoMobile,
                            class: "nav-logo mx-auto",
                            alt: $data.logoImageAlt
                          }, null, 8, _hoisted_17)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_18, [
                      createVNode(_component_PopoverButton, { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800" }, {
                        default: withCtx(() => [
                          _hoisted_19,
                          createVNode(_component_XMarkIcon, {
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, [
                    _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createElementBlock("div", _hoisted_22, [
                      createVNode(_component_router_link, {
                        to: { name: "admin" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_HomeIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Admin ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true),
                    _ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_23, [
                      createVNode(_component_router_link, {
                        to: { name: "dashboard" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_HomeIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Dashboard ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_24, [
                      createVNode(_component_router_link, {
                        to: { name: "home" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Home ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(_component_router_link, {
                        to: { name: "step-1" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Find Your Carsona ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_router_link, {
                        to: { name: "about" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" About ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      createVNode(_component_router_link, {
                        to: { name: "contact-us" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Contact Us ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(_component_router_link, {
                        to: { name: "faqs" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" FAQS ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_29, [
                      _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
                        key: 0,
                        to: { name: "settings" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_CogIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Settings ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    $options.isImpersonating && _ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_30, [
                      createBaseVNode("div", {
                        class: "cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: ($event) => ($options.leaveImpersonating(), close())
                      }, [
                        _hoisted_32,
                        createTextVNode(" Return to your account ")
                      ], 8, _hoisted_31)
                    ])) : createCommentVNode("", true)
                  ]),
                  !_ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_33, [
                    createVNode(_component_router_link, { to: { name: "register" } }, {
                      default: withCtx(({ isActive }) => [
                        createVNode(_component_AppButton, {
                          primary: "",
                          text: "SIGN UP",
                          class: normalizeClass(["flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700", [isActive && "opacity-60"]]),
                          onClick: close
                        }, null, 8, ["class", "onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("p", _hoisted_34, [
                      createTextVNode(" Existing customer? " + toDisplayString(" ") + " "),
                      createVNode(_component_router_link, {
                        to: { name: "login" },
                        class: "whitespace-nowrap text-base font-medium text-indigo-500 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-400",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-indigo-800 hover:text-indigo-900 dark:text-indigo-500 dark:hover:text-indigo-500"
                            ])
                          }, " LOG IN ", 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ])) : createCommentVNode("", true),
                  _ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_35, [
                    createVNode(_component_AppButton, {
                      primary: "",
                      text: "Logout",
                      type: "button",
                      class: "flex w-full items-center justify-center px-4 py-2",
                      onClick: _cache[3] || (_cache[3] = withModifiers(($event) => (_ctx.logout(), $options.closeDrop()), ["prevent"]))
                    }, {
                      text: withCtx(() => [
                        createVNode(_component_ArrowLeftOnRectangleIcon, { class: "mr-2 h-6 w-6" }),
                        createTextVNode(" Logout ")
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [vShow, $data.drop]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
const AppNav = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-132a92ba"]]);
const AppFooter_vue_vue_type_style_index_0_scoped_e0cac2dd_lang = "";
const _sfc_main$7 = {
  name: "AppFooter",
  components: {},
  props: {
    footerClass: {
      type: String,
      default: "max-w-container mx-auto w-full px-4 sm:px-6 lg:px-8"
    },
    borderClass: {
      type: String,
      default: "border-slate-900/5 dark:border-slate-700"
    }
  },
  setup() {
    return {};
  },
  data() {
    return {
      company: "Carsona",
      companyLogo: window.location.origin + "/images/logo-white.png"
    };
  },
  computed: {
    theYear() {
      const startYear = "2023";
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear() + 1;
      if (currentYear == startYear) {
        return currentYear;
      }
      return `${startYear}-${currentYear}`;
    },
    socials() {
      return this.$store.getters.getSocials;
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {}
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-e0cac2dd"), n = n(), popScopeId(), n);
const _hoisted_1$6 = ["src", "alt"];
const _hoisted_2$6 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h2", { class: "mb-10 text-center text-sm leading-6 text-white" }, " Keep up to date with the latest ", -1));
const _hoisted_3$3 = { class: "mx-auto mb-8 flex items-center justify-center gap-5" };
const _hoisted_4$1 = ["href"];
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = { class: "text-center text-xs leading-6 text-slate-500 text-white dark:text-gray-300" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", {
    class: normalizeClass($props.footerClass)
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["border-t py-4", $props.borderClass])
    }, [
      createBaseVNode("img", {
        src: $data.companyLogo,
        class: "footer-logo max-auto mx-auto mb-4",
        alt: _ctx.logoImageAlt
      }, null, 8, _hoisted_1$6),
      _hoisted_2$6,
      createBaseVNode("div", _hoisted_3$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.socials, (val, index2) => {
          return openBlock(), createElementBlock("a", {
            key: index2,
            href: val.url,
            target: "_blank",
            class: "rounded-full bg-white p-2"
          }, [
            createBaseVNode("img", {
              src: val.image,
              class: "w-6"
            }, null, 8, _hoisted_5$1)
          ], 8, _hoisted_4$1);
        }), 128))
      ]),
      createBaseVNode("p", _hoisted_6$1, " © Copyright " + toDisplayString($options.theYear) + " " + toDisplayString($data.company) + ". All Rights Reserved. ", 1)
    ], 2)
  ], 2);
}
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-e0cac2dd"]]);
const _sfc_main$6 = {
  props: {
    stroke: {
      type: String,
      default: "#fff"
    },
    w: {
      type: Number,
      default: 38
    },
    h: {
      type: Number,
      default: 38
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.w} ${this.h}`;
    }
  }
};
const _hoisted_1$5 = ["width", "height", "viewBox", "stroke"];
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".8" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g>', 1);
const _hoisted_3$2 = [
  _hoisted_2$5
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    width: $props.w,
    height: $props.h,
    viewBox: $options.viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    stroke: $props.stroke
  }, _hoisted_3$2, 8, _hoisted_1$5);
}
const CircleSvg = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  name: "VerifyNotice",
  components: {
    CircleSvg
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      sent: false,
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
      popToast: "toast/popToast"
    }),
    async resend() {
      this.loading = true;
      try {
        await this.verifyResend({ id: this.id }).then((response) => {
          this.sent = true;
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
const _hoisted_1$4 = { class: "w-full bg-yellow-500 p-2 text-white opacity-90 shadow-md hover:opacity-100" };
const _hoisted_2$4 = { class: "mx-auto flex max-w-screen-lg items-center justify-between" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, [
      createBaseVNode("div", null, toDisplayString($data.loading ? "Resending verification email to " + _ctx.user.email : $data.sent ? "A verification has been sent. Please check your mail inbox!" : "Your email address is not verified. please check your mail inbox!"), 1),
      createVNode(_component_AppButton, {
        primary: "",
        loading: $data.loading,
        disabled: $data.sent,
        "btn-class": "leading-snug inline-block px-5 py-1 text-xs font-medium",
        onClick: $options.resend
      }, {
        text: withCtx(() => [
          $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
            key: 0,
            class: "mr-2 h-3 w-3"
          })) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString($data.loading ? "Sending" : $data.sent ? "Email Sent!" : "Resend link?"), 1)
        ]),
        _: 1
      }, 8, ["loading", "disabled", "onClick"])
    ])
  ]);
}
const VerifyNotice = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const OctoCat_vue_vue_type_style_index_0_scoped_53eed0c2_lang = "";
const GITHUB_BASE_URL = "https://github.com";
const _sfc_main$4 = {
  name: "OctoCat",
  props: {
    repo: {
      type: String,
      required: true
    },
    blank: {
      type: Boolean,
      default: true
    },
    showFace: {
      type: Boolean,
      default: false
    },
    animatedEye: {
      type: Boolean,
      default: false
    },
    animatedEar: {
      type: Boolean,
      default: false
    },
    animatedArm: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "left-top",
      validator(value) {
        return [
          "left-top",
          "right-top",
          "left-bottom",
          "right-bottom"
        ].includes(value);
      }
    },
    darkMode: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#64748B"
    },
    color: {
      type: String,
      default: "#ffffff"
    },
    faceColor: {
      type: String,
      default: "#64748B"
    },
    bgColorDark: {
      type: String,
      default: "#ffffff"
    },
    colorDark: {
      type: String,
      default: "#1E293B"
    },
    faceColorDark: {
      type: String,
      default: "#ffffff"
    }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    }),
    url() {
      const repo = this.repo;
      return `${GITHUB_BASE_URL}/${repo}`;
    },
    svgStyle() {
      let positionStyles = {};
      switch (this.position) {
        case "left-top":
          positionStyles = {
            top: 0,
            left: 0,
            transform: "rotate(-90deg)"
          };
          break;
        case "right-top":
          positionStyles = {
            top: 0,
            right: 0
          };
          break;
        case "left-bottom":
          positionStyles = {
            bottom: 0,
            left: 0,
            transform: "rotate(-180deg)"
          };
          break;
        case "right-bottom":
          positionStyles = {
            bottom: 0,
            right: 0,
            transform: "rotate(90deg)"
          };
          break;
      }
      return {
        fill: this.darkMode ? this.bgColorDark : this.bgColor,
        color: this.darkMode ? this.colorDark : this.color,
        position: "absolute",
        border: 0,
        ...positionStyles
      };
    },
    blankAttr() {
      return this.blank ? "_blank" : null;
    },
    relAttr() {
      return this.blank ? "noopener noreferrer" : null;
    }
  },
  methods: {
    track
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-53eed0c2"), n = n(), popScopeId(), n);
const _hoisted_1$3 = ["href", "target", "rel"];
const _hoisted_2$3 = ["fill"];
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("path", { d: "m249.578,250.294C163.683,162.067 87.406,88.123 -0.422,0.294 H 249.578z" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m194.579,71.296c-2,-4 -5.003,-7.999 -9.003,-11.999 -3.999,-3.999 -7.999,-7.003 -11.999,-9.003 -4,-14 -8.997,-16.998 -8.997,-16.998 -8,3.999 -11.005,8.999 -11.005,10.999 -6,0 -10.997,2.001 -15.997,7.001 -16,16 -10.002,29.997 -2.002,40.997 -3,0 -6.999,0.999 -10.999,4.999 L 113.579,109.297c-2,1 -5.999,-1.001 -5.999,-1.001 l 26.996,26.996c0,0 -1.999,-3.998 0,-4.998 l 14.001,-14.001c2,-3 3.002,-5.995 3.002,-7.995 11,8 23.997,14.998 40.997,-2.001 5,-5 7,-9.997 7,-15.997 -0.903,-9.744 -2.806,-14.230 -4.998,-19z"
}, null, -1));
const _hoisted_5 = ["fill"];
const _hoisted_6 = {
  key: 1,
  fill: "currentColor",
  d: "m152.148,95.779c-0.167,-0.167 -0.439,-0.167 -0.607,-6e-6 -0.669,0.669 -2.203,0.630 -3.256,-0.421 -0.151,-0.151 -0.281,-0.314 -0.390,-0.484 -0.274,-0.424 -0.425,-0.891 -0.491,-1.329 -0.013,-0.087 -0.023,-0.174 -0.030,-0.259 -0.021,-0.254 -0.014,-0.493 0.011,-0.702 0.042,-0.347 0.136,-0.610 0.243,-0.717 0.167,-0.167 0.167,-0.439 0,-0.607 -0.167,-0.167 -0.439,-0.167 -0.607,-10e-7 -0.086,0.086 -0.165,0.201 -0.234,0.337 -0.102,0.205 -0.183,0.460 -0.232,0.749 -0.049,0.288 -0.066,0.609 -0.045,0.945 0.021,0.336 0.082,0.687 0.191,1.036 0.135,0.435 0.346,0.867 0.647,1.260 0.100,0.130 0.210,0.257 0.331,0.378 0.630,0.630 1.382,0.973 2.108,1.079 0.103,0.015 0.206,0.025 0.308,0.031 0.204,0.011 0.405,0.003 0.598,-0.021 0.483,-0.062 0.922,-0.235 1.263,-0.498 0.068,-0.052 0.132,-0.109 0.192,-0.168 0.168,-0.167 0.168,-0.439 3.6e-4,-0.607z"
};
const _hoisted_7 = {
  key: 2,
  fill: "currentColor",
  d: "m150.730,91.109c-0.036,0.186 -0.036,0.378 -1e-5,0.565 0.013,0.069 0.032,0.139 0.055,0.206 0.047,0.135 0.114,0.265 0.203,0.385 0.044,0.059 0.093,0.117 0.147,0.171 0.216,0.216 0.483,0.352 0.763,0.406 0.116,0.022 0.235,0.031 0.353,0.025 0.164,-0.007 0.325,-0.053 0.480,-0.116 0.178,-0.072 0.349,-0.170 0.494,-0.315 0.577,-0.577 0.577,-1.514 1.7e-4,-2.092 -0.288,-0.288 -0.667,-0.433 -1.046,-0.433 -0.016,-2.1e-5 -0.032,0.004 -0.049,0.004 -0.111,0.003 -0.221,0.022 -0.329,0.050 -0.151,0.040 -0.299,0.098 -0.435,0.188 -0.082,0.054 -0.159,0.117 -0.232,0.189 -0.072,0.072 -0.135,0.150 -0.189,0.232 -0.108,0.163 -0.180,0.344 -0.216,0.531z"
};
const _hoisted_8 = {
  key: 3,
  fill: "currentColor",
  d: "m153.954,72.390c0.049,-0.477 0.051,-0.942 0.004,-1.387 -0.047,-0.444 -0.142,-0.869 -0.288,-1.266 -0.145,-0.397 -0.341,-0.767 -0.589,-1.103 -0.123,-0.167 -0.260,-0.327 -0.410,-0.476 -2.395,-2.395 -7.230,-1.443 -10.799,2.126 -3.569,3.569 -4.116,7.999 -1.721,10.394 0.149,0.149 0.307,0.288 0.472,0.414 0.329,0.253 0.688,0.460 1.070,0.621 0.381,0.161 0.787,0.276 1.210,0.344 0.422,0.068 0.863,0.090 1.316,0.066 0.452,-0.024 0.917,-0.095 1.388,-0.212 1.648,-0.411 3.374,-1.394 4.936,-2.956 1.561,-1.561 2.622,-3.365 3.120,-5.101 0.142,-0.496 0.239,-0.986 0.288,-1.464z"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: $options.url,
    target: $options.blankAttr,
    rel: $options.relAttr,
    class: normalizeClass(["github-corner", $props.position]),
    "aria-label": "View on GitHub",
    onClick: _cache[0] || (_cache[0] = ($event) => $options.track(`OctoCat clicked`))
  }, [
    (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: normalizeStyle($options.svgStyle),
      viewBox: "0 0 250 250",
      fill: $props.color,
      height: "80",
      width: "80"
    }, [
      _hoisted_3$1,
      _hoisted_4,
      createBaseVNode("path", {
        fill: "currentColor",
        class: normalizeClass($props.animatedArm ? "octo-arm" : ""),
        d: "m121.286,101.847c-14.999,-9 -8.999,-19 -8.999,-19 2.999,-6.999 1.999,-10.999 1.999,-10.999 -1,-7 3,-1.999 3,-1.999 4,4.999 2,11 2,11 -2.999,9.999 5,14.999 9,15.999",
        style: { "transform-origin": "130px 106px" }
      }, null, 2),
      createBaseVNode("path", {
        fill: "currentColor",
        class: normalizeClass($props.animatedEar ? "octo-ear" : ""),
        d: "m210.616,77.354c0,0 -2.997,-5 -15.997,-7 -0.014,-0.028 0.007,0.014 0,0 -0.007,-0.014 -3.990,0.468 -3.990,0.468 l 5.446,19.797 3.572,-1.284c2.015,-1.004 6.983,-3.016 10.968,-11.981z",
        style: { "transform-origin": "170px 100px" }
      }, null, 2),
      $props.showFace ? (openBlock(), createElementBlock("path", {
        key: 0,
        fill: $props.darkMode ? $props.faceColorDark : $props.faceColor,
        class: "octo-face",
        d: "m157.893,66.610c-3.695,-3.732 -7.911,-5.499 -12.189,-5.109 -4.402,0.402 -7.139,2.856 -7.874,3.598 -7.076,7.147 -5.830,16.656 3.507,26.774 1.749,1.898 3.654,3.889 5.663,5.918 1.988,2.008 3.993,3.970 5.960,5.829 11.661,11.032 19.883,7.516 24.726,2.623 4.699,-4.747 6.925,-12.647 -0.935,-20.588 -0.193,-0.195 -0.515,-0.479 -1.318,-1.179 -1.714,-1.495 -4.904,-4.280 -7.845,-7.250 -3.247,-3.280 -6.325,-6.797 -8.162,-8.899 -0.857,-0.980 -1.279,-1.464 -1.531,-1.718z"
      }, null, 8, _hoisted_5)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", _hoisted_6)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", _hoisted_7)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", _hoisted_8)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", {
        key: 4,
        fill: "currentColor",
        class: normalizeClass($props.animatedEye ? "octo-eye" : ""),
        d: "m176.110,91.594c-2.395,-2.395 -7.230,-1.443 -10.799,2.126 -3.569,3.569 -4.116,7.999 -1.721,10.394 2.395,2.395 6.825,1.848 10.394,-1.721 3.569,-3.569 4.521,-8.404 2.126,-10.799z",
        style: { "transform-origin": "170px 100px" }
      }, null, 2)) : createCommentVNode("", true)
    ], 12, _hoisted_2$3))
  ], 10, _hoisted_1$3);
}
const OctoCat = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-53eed0c2"]]);
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  components: {
    AppNav,
    VerifyNotice,
    AppFooter,
    OctoCat
  },
  computed: {
    ...mapGetters({
      darkMode: "auth/darkMode"
    }),
    currentRouteName() {
      return this.$route.name;
    },
    isAdminPage() {
      if (this.currentRouteName == "admin" || this.currentRouteName == "roles" || this.currentRouteName == "permissions" || this.currentRouteName == "settings" || this.currentRouteName == "users" || this.currentRouteName == "cars" || this.currentRouteName == "car-brands" || this.currentRouteName == "create-car" || this.currentRouteName == "edit-car" || this.currentRouteName == "app-settings" || this.currentRouteName == "phpinfo" || this.currentRouteName == "history" || this.currentRouteName == "user" || this.currentRouteName == "saved-cars" || this.currentRouteName == "car-info") {
        return true;
      }
      return false;
    },
    showOctoCat() {
      if (this.currentRouteName == "home" || this.currentRouteName == "about" || this.currentRouteName == "terms") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    })
  }
};
const _hoisted_1$2 = { class: "min-h-screen bg-white dark:bg-slate-800" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { id: "top_border" }, null, -1);
const _hoisted_3 = { class: "w-full" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VerifyNotice = resolveComponent("VerifyNotice");
  const _component_AppNav = resolveComponent("AppNav");
  const _component_router_view = resolveComponent("router-view");
  const _component_AppToast = resolveComponent("AppToast");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    _ctx.$route.name !== "home" && _ctx.$route.name !== "verify-email" && _ctx.authenticated && _ctx.user && _ctx.user.id && !_ctx.user.email_verified_at && !$options.isAdminPage ? (openBlock(), createBlock(_component_VerifyNotice, {
      key: 0,
      id: _ctx.user.id
    }, null, 8, ["id"])) : createCommentVNode("", true),
    !$options.isAdminPage ? (openBlock(), createBlock(_component_AppNav, { key: 1 })) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_router_view, {
        class: normalizeClass($options.isAdminPage ? "" : "p-0")
      }, {
        default: withCtx(({ Component }) => [
          createVNode(Transition, {
            name: "fade",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(Component)))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    createVNode(_component_AppToast)
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "https://carsona.com.au/build/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
function auth$1({ store: store2, next }) {
  if (!store2.getters["auth/authenticated"]) {
    return next({
      name: "login"
    });
  }
  return next();
}
function guest({ store: store2, next }) {
  if (store2.getters["auth/authenticated"]) {
    return next({
      name: "dashboard"
    });
  }
  return next();
}
function roleAdmin({ store: store2, next }) {
  if (!store2.getters["auth/authenticated"] || !store2.state.auth.roles.superAdmin && !store2.state.auth.roles.admin) {
    return next({
      name: "NotFound"
    });
  }
  return next();
}
const Home = () => __vitePreload(() => import(
  /* webpackChunkName: "js/HomePage" */
  "./Home-d4ce4eb1.js"
), true ? ["assets/Home-d4ce4eb1.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/FAQS-f91939b2.js","assets/AppAccordion-58070a4d.js","assets/FAQS-9ddcb98a.css","assets/Home-b4c3514f.css"] : void 0);
const About = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AboutPage" */
  "./About-4284573e.js"
), true ? ["assets/About-4284573e.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Faqs = () => __vitePreload(() => import(
  /* webpackChunkName: "js/FAQSPage" */
  "./FAQS-a29f713c.js"
), true ? ["assets/FAQS-a29f713c.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/FAQS-f91939b2.js","assets/AppAccordion-58070a4d.js","assets/FAQS-9ddcb98a.css"] : void 0);
const ContactUs = () => __vitePreload(() => import(
  /* webpackChunkName: "js/ContactUsPage" */
  "./ContactUs-b024d896.js"
), true ? ["assets/ContactUs-b024d896.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/FAQS-f91939b2.js","assets/AppAccordion-58070a4d.js","assets/FAQS-9ddcb98a.css"] : void 0);
const Terms = () => __vitePreload(() => import(
  /* webpackChunkName: "js/TermsPage" */
  "./Terms-cd9efd14.js"
), true ? ["assets/Terms-cd9efd14.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Dashboard = () => __vitePreload(() => import(
  /* webpackChunkName: "js/DashboardPage" */
  "./Dashboard-6ac07ad1.js"
), true ? ["assets/Dashboard-6ac07ad1.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/RolesBadges-1d900542.js"] : void 0);
const Login = () => __vitePreload(() => import(
  /* webpackChunkName: "js/LoginPage" */
  "./Login-43225aa0.js"
), true ? ["assets/Login-43225aa0.js","assets/AppLogin-ec70aa8d.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/vue-axios.esm.min-fa86a92f.js"] : void 0);
const ForgotPassword = () => __vitePreload(() => import(
  /* webpackChunkName: "js/ForgotPasswordPage" */
  "./ForgotPassword-4dd6775a.js"
), true ? ["assets/ForgotPassword-4dd6775a.js","assets/Success-45eef610.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Errors-65c5ea2a.js"] : void 0);
const ResetPassword = () => __vitePreload(() => import(
  /* webpackChunkName: "js/ResetPasswordPage" */
  "./ResetPassword-f9d8c35e.js"
), true ? ["assets/ResetPassword-f9d8c35e.js","assets/Errors-65c5ea2a.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Success-45eef610.js"] : void 0);
const Register = () => __vitePreload(() => import(
  /* webpackChunkName: "js/RegisterPage" */
  "./Register-77301928.js"
), true ? ["assets/Register-77301928.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Errors-65c5ea2a.js","assets/SocialiteLoginsV2-c9828ed6.js","assets/vue-axios.esm.min-fa86a92f.js"] : void 0);
const MidRegister = () => __vitePreload(() => import(
  /* webpackChunkName: "js/MidRegisterPage" */
  "./MidRegister-66a003b4.js"
), true ? ["assets/MidRegister-66a003b4.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Errors-65c5ea2a.js","assets/SocialiteLoginsV2-c9828ed6.js","assets/vue-axios.esm.min-fa86a92f.js"] : void 0);
const VerifyEmail = () => __vitePreload(() => import(
  /* webpackChunkName: "js/VerifyEmailPage" */
  "./VerifyEmail-de026e6b.js"
), true ? ["assets/VerifyEmail-de026e6b.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Errors-65c5ea2a.js","assets/Success-45eef610.js"] : void 0);
const Settings = () => __vitePreload(() => import(
  /* webpackChunkName: "js/SettingsPage" */
  "./Settings-9ca9fc9a.js"
), true ? ["assets/Settings-9ca9fc9a.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Profile = () => __vitePreload(() => import(
  /* webpackChunkName: "js/ProfilePage" */
  "./Profile-43efbb7e.js"
), true ? ["assets/Profile-43efbb7e.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Errors-65c5ea2a.js","assets/Success-45eef610.js","assets/Profile-d1b0c432.css"] : void 0);
const Password = () => __vitePreload(() => import(
  /* webpackChunkName: "js/PasswordPage" */
  "./Password-75a97663.js"
), true ? ["assets/Password-75a97663.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Errors-65c5ea2a.js","assets/Success-45eef610.js"] : void 0);
const Account = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AccountPage" */
  "./Account-e369de1e.js"
), true ? ["assets/Account-e369de1e.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/vue-axios.esm.min-fa86a92f.js","assets/Account-ad6c6345.css"] : void 0);
const NotFound = () => __vitePreload(() => import(
  /* webpackChunkName: "js/NotFoundPage" */
  "./NotFound-bb5c0b9d.js"
), true ? ["assets/NotFound-bb5c0b9d.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const AdminLayout = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AdminLayoutPage" */
  "./AdminLayout-15a60e5c.js"
), true ? ["assets/AdminLayout-15a60e5c.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Admin = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AdminPage" */
  "./Admin-491f7cc3.js"
), true ? ["assets/Admin-491f7cc3.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/RolesBadges-1d900542.js","assets/zoho-monocrome-black-11dabfe7.js","assets/Admin-ba4c199a.css"] : void 0);
const Users = () => __vitePreload(() => import(
  /* webpackChunkName: "js/UsersPage" */
  "./Users-26ebd625.js"
), true ? ["assets/Users-26ebd625.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/default.css_vue_type_style_index_0_src_true_lang-1251d036.js","assets/default-29be68ac.css","assets/multiselect-da0ca839.js","assets/Errors-65c5ea2a.js","assets/Users-90ff8e4b.css"] : void 0);
const Cars = () => __vitePreload(() => import(
  /* webpackChunkName: "js/CarsPage" */
  "./Cars-ac256ede.js"
), true ? ["assets/Cars-ac256ede.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/Cars-1e93c5cb.css"] : void 0);
const CreateCar = () => __vitePreload(() => import(
  /* webpackChunkName: "js/CreateCarPage" */
  "./CreateCar-35435a32.js"
), true ? ["assets/CreateCar-35435a32.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/AppAccordion-58070a4d.js","assets/default.css_vue_type_style_index_1_src_true_lang-9ed51729.js","assets/default-504b81f3.css","assets/multiselect-da0ca839.js","assets/CreateCar-ae759b45.css"] : void 0);
const EditCar = () => __vitePreload(() => import(
  /* webpackChunkName: "js/EditCarPage" */
  "./EditCar-7cb99085.js"
), true ? ["assets/EditCar-7cb99085.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/AppAccordion-58070a4d.js","assets/multiselect-da0ca839.js","assets/default.css_vue_type_style_index_1_src_true_lang-9ed51729.js","assets/default-504b81f3.css","assets/EditCar-4f340338.css"] : void 0);
const CarBrands = () => __vitePreload(() => import(
  /* webpackChunkName: "js/CarBrandsPage" */
  "./CarBrands-18227153.js"
), true ? ["assets/CarBrands-18227153.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/CarBrands-f8c6360b.css"] : void 0);
const Roles = () => __vitePreload(() => import(
  /* webpackChunkName: "js/RolesPage" */
  "./Roles-28124396.js"
), true ? ["assets/Roles-28124396.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/default.css_vue_type_style_index_0_src_true_lang-1251d036.js","assets/default-29be68ac.css","assets/multiselect-da0ca839.js","assets/Errors-65c5ea2a.js","assets/Roles-886fd0e6.css"] : void 0);
const Permissions = () => __vitePreload(() => import(
  /* webpackChunkName: "js/PermissionsPage" */
  "./Permissions-1b6d8081.js"
), true ? ["assets/Permissions-1b6d8081.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/default.css_vue_type_style_index_0_src_true_lang-1251d036.js","assets/default-29be68ac.css","assets/multiselect-da0ca839.js","assets/Errors-65c5ea2a.js","assets/Permissions-d0f03d41.css"] : void 0);
const AppSettings = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AppSettingsPage" */
  "./AppSettings-61b3b596.js"
), true ? ["assets/AppSettings-61b3b596.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/zoho-monocrome-black-11dabfe7.js"] : void 0);
const UserLayout = () => __vitePreload(() => import(
  /* webpackChunkName: "js/UserLayoutPage" */
  "./UserLayout-b2056a12.js"
), true ? ["assets/UserLayout-b2056a12.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const History = () => __vitePreload(() => import(
  /* webpackChunkName: "js/HistoryPage" */
  "./History-0e4bbe71.js"
), true ? ["assets/History-0e4bbe71.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/AppRecommendedCars-f8b27d75.js","assets/History-702bcfa6.css"] : void 0);
const SavedCars = () => __vitePreload(() => import(
  /* webpackChunkName: "js/SavedCarsPage" */
  "./SavedCars-554caf3c.js"
), true ? ["assets/SavedCars-554caf3c.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/SavedCars-23557773.css"] : void 0);
const CarInfo = () => __vitePreload(() => import(
  /* webpackChunkName: "js/SavedCarsPage" */
  "./CarInfo-e3eda7b0.js"
), true ? ["assets/CarInfo-e3eda7b0.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Funnel1 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel1" */
  "./Funnel1-e7043689.js"
), true ? ["assets/Funnel1-e7043689.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/vue-slider-component.umd.min-41c0f0df.js"] : void 0);
const Funnel2 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel2" */
  "./Funnel2-95f13dc6.js"
), true ? ["assets/Funnel2-95f13dc6.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Funnel3 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel3" */
  "./Funnel3-37c256fb.js"
), true ? ["assets/Funnel3-37c256fb.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Funnel4 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel4" */
  "./Funnel4-0c6cb9cc.js"
), true ? ["assets/Funnel4-0c6cb9cc.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Funnel5 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel5" */
  "./Funnel5-5e8313bb.js"
), true ? ["assets/Funnel5-5e8313bb.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/AppLogin-ec70aa8d.js","assets/vue-axios.esm.min-fa86a92f.js"] : void 0);
const Funnel6 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel6" */
  "./Funnel6-2f957554.js"
), true ? ["assets/Funnel6-2f957554.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const Funnel7 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel7" */
  "./Funnel7-a633d920.js"
), true ? ["assets/Funnel7-a633d920.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js","assets/vue-slider-component.umd.min-41c0f0df.js","assets/Funnel7-4aff49cf.css"] : void 0);
const Funnel8 = () => __vitePreload(() => import(
  /* webpackChunkName: "js/Funnel8" */
  "./Funnel8-3dd21fb4.js"
), true ? ["assets/Funnel8-3dd21fb4.js","assets/AppRecommendedCars-f8b27d75.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0);
const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/about",
    component: About,
    name: "about"
  },
  {
    path: "/faqs",
    component: Faqs,
    name: "faqs"
  },
  {
    path: "/contact-us",
    component: ContactUs,
    name: "contact-us"
  },
  {
    path: "/terms",
    component: Terms,
    name: "terms"
  },
  {
    path: "/funnels",
    name: "step-1",
    component: Funnel1
  },
  {
    path: "/funnels/step-2",
    name: "step-2",
    component: Funnel2
  },
  {
    path: "/funnels/step-3",
    name: "step-3",
    component: Funnel3
  },
  {
    path: "/funnels/step-4",
    name: "step-4",
    component: Funnel4
  },
  {
    path: "/funnels/step-5",
    name: "step-5",
    component: Funnel5
  },
  {
    path: "/funnels/step-6",
    name: "step-6",
    component: Funnel6
  },
  {
    path: "/funnels/step-7",
    name: "step-7",
    component: Funnel7
  },
  {
    path: "/funnels/step-8",
    name: "step-8",
    component: Funnel8
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    meta: {
      middleware: [auth$1]
    }
  },
  {
    path: "/user",
    component: UserLayout,
    children: [
      {
        path: "",
        name: "user",
        component: History
      },
      {
        path: "history",
        name: "history",
        component: History
      },
      {
        path: "saved-cars",
        name: "saved-cars",
        component: SavedCars
      },
      {
        path: "car-info/:id",
        name: "car-info",
        component: CarInfo
      }
    ],
    meta: {
      middleware: [auth$1]
    }
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "admin",
        component: Admin
      },
      {
        path: "users",
        name: "users",
        component: Users
      },
      {
        path: "car-brands",
        name: "car-brands",
        component: CarBrands
      },
      {
        path: "cars",
        name: "cars",
        component: Cars
      },
      {
        path: "cars/create",
        name: "create-car",
        component: CreateCar
      },
      {
        path: "cars/edit/:id",
        name: "edit-car",
        component: EditCar
      },
      {
        path: "roles",
        name: "roles",
        component: Roles
      },
      {
        path: "permissions",
        name: "permissions",
        component: Permissions
      },
      {
        path: "phpinfo",
        name: "phpinfo",
        component: defineAsyncComponent(
          () => __vitePreload(() => import("./PhpInfo-c0c387b5.js"), true ? ["assets/PhpInfo-c0c387b5.js","assets/vendor-506bc2e6.js","assets/__commonjsHelpers__-7a7fcd32.js"] : void 0)
        )
      },
      {
        path: "app-settings",
        name: "app-settings",
        component: AppSettings
      }
    ],
    meta: {
      middleware: [roleAdmin]
    }
  },
  {
    path: "/login/:redirect?",
    component: Login,
    name: "login",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    name: "forgot-password",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/reset-password/:token",
    props: (route) => ({
      token: route.params.token,
      email: route.query.email
    }),
    component: ResetPassword,
    name: "reset-password",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/register/:redirect?",
    component: Register,
    name: "register",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/mid-register",
    component: MidRegister,
    name: "mid-register",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/verify-email/:id/:hash",
    props: (route) => ({
      id: route.params.id,
      hash: route.params.hash
    }),
    component: VerifyEmail,
    name: "verify-email"
  },
  {
    path: "/settings",
    component: Settings,
    redirect: {
      name: "account"
    },
    name: "settings",
    meta: {
      middleware: [auth$1]
    },
    children: [
      {
        path: "account",
        component: Account,
        name: "account",
        meta: {
          middleware: [auth$1]
        }
      },
      {
        path: "profile",
        component: Profile,
        name: "profile",
        meta: {
          middleware: [auth$1]
        }
      },
      {
        path: "password",
        component: Password,
        name: "password",
        meta: {
          middleware: [auth$1]
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound"
  }
];
const toast = {
  namespaced: true,
  state: {
    toast: {
      icon: "success",
      message: null,
      position: "top-end",
      showConfirmButton: false,
      timer: 3e3,
      timerProgressBar: true,
      showCloseButton: false
    }
  },
  getters: {
    toast(state) {
      return state.toast;
    }
  },
  mutations: {
    SET_TOAST(state, data) {
      if (Object.prototype.hasOwnProperty.call(data, "message")) {
        state.toast.message = data.message;
      }
      if (Object.prototype.hasOwnProperty.call(data, "position")) {
        state.toast.position = data.position;
      }
      if (Object.prototype.hasOwnProperty.call(data, "icon")) {
        state.toast.icon = data.icon;
      }
      if (Object.prototype.hasOwnProperty.call(data, "showConfirmButton")) {
        state.toast.showConfirmButton = data.showConfirmButton;
      }
      if (Object.prototype.hasOwnProperty.call(data, "timer")) {
        state.toast.timer = data.timer;
      }
      if (Object.prototype.hasOwnProperty.call(data, "timerProgressBar")) {
        state.toast.timerProgressBar = data.timerProgressBar;
      }
      if (Object.prototype.hasOwnProperty.call(data, "showCloseButton")) {
        state.toast.showCloseButton = data.showCloseButton;
      }
    }
  },
  actions: {
    popToast({ commit }, toast2) {
      commit("SET_TOAST", {
        icon: "success",
        message: null,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true,
        showCloseButton: false
      });
      commit("SET_TOAST", toast2);
    },
    clearToast({ commit }) {
      commit("SET_TOAST", {
        icon: "success",
        message: null,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 0,
        timerProgressBar: true,
        showCloseButton: false
      });
    }
  }
};
const auth = {
  namespaced: true,
  state() {
    return {
      authenticated: false,
      user: null,
      roles: {
        superAdmin: false,
        admin: false,
        moderator: false,
        editor: false,
        user: false
      },
      token: api.get("token"),
      logins: {
        facebook: false,
        twitter: false,
        instagram: false,
        github: false,
        youtube: false,
        google: false,
        linkedin: false,
        twitch: false,
        apple: false,
        microsoft: false,
        tiktok: false,
        zoho: false,
        stackexchange: false,
        gitlab: false,
        reddit: false,
        snapchat: false,
        meetup: false,
        bitbucket: false,
        atlassian: false
        // NEW_PROVIDER_PLUG :: Put New Provider HERE
      },
      currentUserToken: null,
      impersonatorToken: null,
      darkMode: false
    };
  },
  getters: {
    user(state) {
      return state.user;
    },
    roles(state) {
      return state.roles;
    },
    verified(state) {
      if (state.user)
        return state.user.email_verified_at;
      return null;
    },
    id(state) {
      if (state.user)
        return state.user.id;
      return null;
    },
    authenticated(state) {
      return state.authenticated;
    },
    token(state) {
      return state.token;
    },
    logins(state) {
      return state.logins;
    },
    currentUserToken(state) {
      return state.currentUserToken;
    },
    impersonatorToken(state) {
      return state.impersonatorToken;
    },
    darkMode(state) {
      return state.darkMode;
    }
  },
  mutations: {
    SET_AUTHENTICATION(state, value = false) {
      state.authenticated = value;
    },
    SET_USER(state, payload = null) {
      const APP_GA_ENABLED2 = GA_ENABLED;
      GA_TAG;
      state.user = payload;
      if (state && state.user && state.user.id && APP_GA_ENABLED2 == 1) {
        gtag("set", {
          user_id: state.user.id
        });
      }
      if (payload && payload.roles && payload.roles.length > 0) {
        payload.roles.forEach((role, index2) => {
          if (role.name == "Super Admin") {
            state.roles.superAdmin = true;
          }
          if (role.name == "Admin") {
            state.roles.admin = true;
          }
          if (role.name == "Moderator") {
            state.roles.moderator = true;
          }
          if (role.name == "Editor") {
            state.roles.editor = true;
          }
          if (role.name == "User") {
            state.roles.user = true;
          }
        });
      } else {
        state.roles = {
          superAdmin: false,
          admin: false,
          moderator: false,
          editor: false,
          user: false
        };
      }
    },
    SET_THEME(state, payload = null) {
      if (payload) {
        document.documentElement.classList.add("dark");
        state.darkMode = true;
      } else {
        document.documentElement.classList.remove("dark");
        state.darkMode = false;
      }
    },
    SET_TOKEN(state, { token, remember }) {
      state.token = token;
      api.set("token", token, { expires: remember ? 365 : null });
    },
    SET_WORKING_TOKENS(state, payload) {
      state.currentUserToken = payload.currentUserToken;
      state.impersonatorToken = payload.impersonatorToken;
    },
    SET_LOGINS(state, payload = null) {
      if (payload) {
        state.logins = payload;
      }
    },
    LOGOUT(state) {
      state.authenticated = false;
      state.user = null;
      state.roles = {
        superAdmin: false,
        admin: false,
        moderator: false,
        editor: false,
        user: false
      };
      document.documentElement.classList.remove("dark");
      state.token = null;
      state.currentUserToken = null;
      state.impersonatorToken = null;
      api.remove("token");
      window.sessionStorage.clear();
    }
  },
  actions: {
    async login({ dispatch }, payload) {
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/api/login", payload).then((res) => dispatch("getUser")).catch((err) => {
          throw err.response;
        });
      } catch (e) {
        throw e;
      }
    },
    async register({ commit }, payload) {
      await axios.get("/sanctum/csrf-cookie");
      const res = await axios.post("/api/register", payload);
      if ((res.status == 201 || res.status == 200) && res && res.data && res.data.user && res.data.user.id) {
        commit("SET_USER", res.data.user);
        commit("SET_THEME", res.data.user.theme_dark);
        commit("SET_AUTHENTICATION", true);
        return res;
      }
      commit("LOGOUT");
      throw res.response;
    },
    async logout({ commit }) {
      await axios.post("/api/logout").then((res) => {
        commit("LOGOUT");
      }).catch((err) => {
      });
      router$1.push({ name: "home" });
    },
    async getUser({ commit }) {
      await axios.get("/api/user").then((res) => {
        if (res && res.data && res.data.id) {
          commit("SET_USER", res.data);
          commit("SET_THEME", res.data.theme_dark);
          commit("SET_AUTHENTICATION", true);
        } else {
          commit("LOGOUT");
        }
      }).catch((err) => {
        commit("LOGOUT");
        throw err.response;
      });
    },
    async getUserByToken({ commit, dispatch }, payload) {
      await axios.post("/api/user-by-token", { token: payload.token }).then((res) => {
        if (res && res.data && res.data.id) {
          commit("SET_USER", res.data);
          commit("SET_THEME", res.data.theme_dark);
          commit("SET_AUTHENTICATION", true);
        } else {
          commit("LOGOUT");
        }
      }).catch((err) => {
        commit("LOGOUT");
        throw err.response;
      });
    },
    async profile({ commit }, payload) {
      const res = await axios.patch("/api/profile", payload);
      if (res.status == 200 && res && res.data && res.data.user && res.data.user.id) {
        commit("SET_USER", res.data.user);
        commit("SET_THEME", res.data.user.theme_dark);
        commit("SET_AUTHENTICATION", true);
        return res;
      }
      throw res.response;
    },
    async theme({ commit }, payload) {
      const res = await axios.patch("/api/theme", payload);
      if (res.status == 200 && res && res.data && res.data.user && res.data.user.id) {
        commit("SET_USER", res.data.user);
        commit("SET_THEME", res.data.user.theme_dark);
        commit("SET_AUTHENTICATION", true);
        return res;
      }
      throw res.response;
    },
    async password({ dispatch }, payload) {
      const res = await axios.patch("/api/password", payload);
      if (res.status == 200 && res && res.data && res.data.message && res.data.message == "Password Updated Successfully") {
        return "Success";
      }
      throw res.response;
    },
    async verifyResend({ dispatch }, payload) {
      const res = await axios.post("/api/verify-resend", payload);
      if (res.status != 200)
        throw res;
      return res;
    },
    async verifyEmail({ dispatch }, payload) {
      const res = await axios.post(
        `/api/verify-email/${payload.id}/${payload.hash}`
      );
      if (res.status != 200)
        throw res;
      dispatch("getUser");
      return res;
    },
    async forgotPassword({ dispatch }, payload) {
      try {
        const response = await axios.post("/api/forgot-password", payload);
        if (response && response.status && response.status == 200 && response.data && response.data.message) {
          return response.data.message;
        }
        throw response;
      } catch (error) {
        throw error;
      }
    },
    async resetPassword({ dispatch }, payload) {
      try {
        const response = await axios.post("/api/reset-password", payload);
        if (response && response.status && response.status == 200 && response.data && response.data.message) {
          return response.data.message;
        }
        throw response;
      } catch (error) {
        throw error;
      }
    },
    async fetchOauthUrl(ctx, { provider }) {
      try {
        const response = await axios.post(`/api/oauth/${provider}`);
        if (response && response.data && response.data.url) {
          return response.data.url;
        }
        throw response;
      } catch (error) {
        throw error;
      }
    },
    async saveToken({ commit, dispatch }, payload) {
      commit("SET_TOKEN", payload);
    },
    async getLogins({ commit }) {
      await axios.get("/api/logins").then((res) => {
        if (res && res.data && res.data.logins) {
          commit("SET_LOGINS", res.data.logins);
        } else {
          throw res;
        }
      }).catch((err) => {
        throw err.response;
      });
    },
    async revokeProvider({ commit, dispatch }, payload) {
      return await axios.post(`/api/oauth-revoke/${payload.id}`).then((res) => {
        if (res.status && res.status == 200 && res.data && res.data.status && res.data.status == "success" && res.data.user && res.data.user.id) {
          commit("SET_USER", res.data.user);
          return res;
        }
        throw res;
      }).catch((err) => {
        throw err.response;
      });
    },
    async deleteAccount({ commit, dispatch }, payload) {
      return await axios.delete(`/api/account/${payload.id}/delete`).then((res) => {
        if (res.status && res.status == 200 && res.data && res.data.status && res.data.status == "success" && !res.data.user) {
          commit("LOGOUT");
          router$1.push({ name: "home" });
          return res;
        }
        throw res;
      }).catch((err) => {
        throw err.response;
      });
    },
    async impersonateUser({ commit, dispatch }, payload) {
      await axios.get(`/api/impersonate/take/${payload.user.id}`).then((res) => {
        if (res && res.data && res.data.data && res.data.data.token) {
          commit("LOGOUT");
          commit("SET_WORKING_TOKENS", {
            currentUserToken: res.data.data.token,
            impersonatorToken: res.data.data.impersonatorToken
          });
          dispatch("getUserByToken", { token: res.data.data.token });
          router$1.push({ name: "home" });
          dispatch(
            "toast/popToast",
            {
              message: `Stealh mode activated. You are now acting as ${payload.user.name}`,
              timer: 5e3,
              icon: "success"
            },
            { root: true }
          );
        } else {
          dispatch(
            "toast/popToast",
            {
              message: "An error occurred, you are still yourself.",
              timer: 5e3,
              icon: "error"
            },
            { root: true }
          );
        }
      }).catch((err) => {
        dispatch(
          "toast/popToast",
          {
            message: "An error occurred, you are still yourself.",
            timer: 5e3,
            icon: "error"
          },
          { root: true }
        );
        throw err.response;
      });
    },
    async leaveImpersonatingUser({ commit, dispatch }, payload) {
      await axios.get(`/api/impersonate/leave`).then((res) => {
        if (res && res.data && res.data.data && res.data.data.token) {
          commit("LOGOUT");
          dispatch("getUserByToken", { token: res.data.data.token });
          router$1.push({ name: "home" });
          dispatch(
            "toast/popToast",
            {
              message: `You wake up and realize it was all dream!`,
              timer: 5e3,
              icon: "success"
            },
            { root: true }
          );
        } else {
          dispatch(
            "toast/popToast",
            {
              message: "An error occurred, you are still are not yourself!",
              timer: 5e3,
              icon: "error"
            },
            { root: true }
          );
        }
      }).catch((err) => {
        dispatch(
          "toast/popToast",
          {
            message: "An error occurred, you are still yourself.",
            timer: 5e3,
            icon: "error"
          },
          { root: true }
        );
        throw err.response;
      });
    }
  }
};
const sidebar = {
  namespaced: true,
  state() {
    return {
      sideBarOpen: false,
      fullScreenSideBarOpen: true
    };
  },
  getters: {
    sideBarOpen: (state) => state.sideBarOpen,
    fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
    toggleFullScreenSidebar(state) {
      state.fullScreenSideBarOpen = !state.fullScreenSideBarOpen;
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
    toggleFullScreenSidebar(context) {
      context.commit("toggleFullScreenSidebar");
    }
  }
};
const funnel = {
  namespaced: true,
  state() {
    return {
      funnel_data: {
        gender: "",
        ageRange: "",
        spendingRange: [2e4, 3e4],
        email: ""
      },
      activities: [],
      vehicleTypes: [],
      ages: ["18-20", "21-24", "25-34", "35-44", "45-54", "55-64", "65+"],
      personalities: [
        {
          value: "the_explorer",
          img: window.location.origin + "/images/funnels/step-2/1-the-explorer.png",
          text: "The Explorer",
          description: "“I thrive on adventure and the rush of exploring new places.”",
          selected: false
        },
        {
          value: "the_ecocentric",
          img: window.location.origin + "/images/funnels/step-2/2-the-ecocentric.png",
          text: "The Eco-centric",
          description: "“I strive to make choices that are sustainable and Eco-friendly in all areas of my life.”",
          selected: false
        },
        {
          value: "the_tradie",
          img: window.location.origin + "/images/funnels/step-2/3-the-tradie.png",
          text: "The Tradie",
          description: "“I prioritize reliability, efficiency, and functionality when selecting my tools and equipment.”",
          selected: false
        },
        {
          img: window.location.origin + "/images/funnels/step-2/4-the-lux.png",
          text: "The Luxurious",
          value: "the_luxurious",
          description: '"I have an appreciation for the finer things in life and strive for experiences that embody luxury and sophistication.”',
          selected: false
        },
        {
          value: "the_parent",
          img: window.location.origin + "/images/funnels/step-2/5-the-parent.png",
          text: "The Parent",
          description: "‘I’m family-oriented, creating memorable experiences with my loved ones is my top priority.”",
          selected: false
        },
        {
          value: "the_thrillseeker",
          img: window.location.origin + "/images/funnels/step-2/6-the-thrill.png",
          text: "The Thrill Seeker",
          description: '"I have a thirst for speed and adrenaline that drives me to seek out the most intense experiences possible.”',
          selected: false
        }
      ],
      personal_preferences: [
        {
          value: "performance",
          text: "--",
          car_text: "Performance",
          selected: false
        },
        {
          value: "fuel_efficient",
          text: "I feel more comfortable knowing that my fuel consumption is reasonable",
          car_text: "Fuel Efficiency",
          selected: false
        },
        {
          value: "safety",
          text: "I like feeling safe in my car when I drive",
          car_text: "Safety",
          selected: false
        },
        {
          value: "warranty",
          text: "I highly value a manufacturer warranty guarantee in my decision making",
          car_text: "Warranty",
          selected: false
        },
        {
          value: "space",
          text: "I like having plenty of space in my car because I need to carry lots of stuff",
          car_text: "Cargo Space",
          selected: false
        },
        {
          value: "features",
          text: "--",
          car_text: "Features",
          selected: false
        },
        {
          value: "towing_power",
          text: "--",
          car_text: "Towing Power",
          selected: false
        },
        {
          value: "reliability",
          text: "--",
          car_text: "Reliability",
          selected: false
        },
        {
          value: "passenger_space",
          text: "--",
          car_text: "Passenger Space",
          selected: false
        },
        {
          value: "sustainability",
          text: "--",
          car_text: "Sustainability",
          selected: false
        }
        // {
        //   value: 'environment_friendly',
        //   text: 'I am conscious of the environment, I want a car that has a low impact',
        //   car_text: 'Environment Friendly',
        //   selected: false,
        // },
        // {
        //   value: 'convenience',
        //   text: 'I like the ease and convenience of my car',
        //   car_text: 'Convenience',
        //   selected: false,
        // },
      ],
      fuel_types: [
        {
          value: "petrol_diesel",
          type: "Petrol/Diesel",
          description: "Combustion Powered",
          image: window.location.origin + "/images/funnels/fuel_types/petrol_diesel.png",
          selected: false
        },
        {
          value: "hybrid",
          type: "Hybrid",
          description: "Combustion/Electric",
          image: window.location.origin + "/images/funnels/fuel_types/hybrid.png",
          selected: false
        },
        {
          value: "plugin_hybrid",
          type: "Plug-in Hybrid",
          description: "Electric/Combustion",
          image: window.location.origin + "/images/funnels/fuel_types/plugin_hybrid.png",
          selected: false
        },
        {
          value: "electric",
          type: "Electric",
          description: "Battery Powered ",
          image: window.location.origin + "/images/funnels/fuel_types/electric.png",
          selected: false
        }
      ],
      recommended_cars: []
    };
  },
  getters: {
    getFunnelData(state) {
      return state.funnel_data;
    },
    getActivities(state) {
      return state.activities;
    },
    vehicleTypes(state) {
      return state.vehicleTypes;
    },
    getAges(state) {
      return state.ages;
    },
    getFuelTypes(state) {
      return state.fuel_types;
    },
    getPersonalities(state) {
      return state.personalities;
    },
    getPersonalPreferences(state) {
      return state.personal_preferences;
    },
    recommendedCars(state) {
      return state.recommended_cars;
    },
    getSelectedPersonalities(state) {
      if (state.funnel_data.personalities) {
        const data = state.funnel_data.personalities.filter((x) => x.selected == true).map((y) => {
          return y.value;
        });
        return data;
      }
      return [];
    },
    getSelectedPersonalPreferences(state) {
      if (state.funnel_data.personal_preferences) {
        const data = state.funnel_data.personal_preferences.filter((x) => x.selected == true).map((y) => {
          return y.value;
        });
        return data;
      }
      return [];
    },
    getSelectedFuelTypes(state) {
      if (state.funnel_data.fuel_types) {
        const data = state.funnel_data.fuel_types.filter((x) => x.selected == true).map((y) => {
          return y.value;
        });
        return data;
      }
      return [];
    },
    getSelectedVehicleType(state) {
      if (state.funnel_data.preferredVehicleTypes) {
        return Object.entries(state.funnel_data.preferredVehicleTypes).filter((e) => e[1].selected == true).map((y) => {
          return y[1].id;
        });
      }
      return [];
    },
    getSelectedActivities(state) {
      if (state.funnel_data.activities) {
        return Object.entries(state.funnel_data.activities).filter((e) => e[1].selected == true).map((y) => {
          return y[1].slug;
        });
      }
      return [];
    }
  },
  mutations: {
    SET_FUNNEL_DATA(state, data) {
      state.funnel_data = {
        ...state.funnel_data,
        ...data
      };
    },
    SET_ACTIVITIES(state, data) {
      state.activities = {
        ...data,
        ...state.funnel_data.activities
      };
    },
    SET_VEHICLE_TYPES(state, data) {
      state.vehicleTypes = {
        ...data,
        ...state.funnel_data.preferredVehicleTypes
      };
    },
    SET_RECOMMENDED_CARS(state, data) {
      state.recommended_cars = data;
    },
    RESET_FUNNEL_DATA: function(state) {
      state.funnel_data = {};
      state.personalities.forEach(function(item, index2) {
        state.personalities[index2].selected = false;
      });
      state.personal_preferences.forEach(function(item, index2) {
        state.personal_preferences[index2].selected = false;
      });
      state.fuel_types.forEach(function(item, index2) {
        state.fuel_types[index2].selected = false;
      });
    }
  },
  actions: {
    async getActivities({ commit }) {
      await axios.get("/api/activities").then((res) => {
        if (res && res.data) {
          commit("SET_ACTIVITIES", res.data);
        } else {
          throw res;
        }
      }).catch((err) => {
        throw err.response;
      });
    },
    async getVehicleTypes({ commit }) {
      await axios.get("/api/vehicle_types").then((res) => {
        if (res && res.data) {
          commit("SET_VEHICLE_TYPES", res.data);
        } else {
          throw res;
        }
      });
    },
    async getRecommendedCars({ commit }, payload) {
      await axios.post("/api/car/recommended", payload).then((res) => {
        if (res && res.data) {
          commit("SET_RECOMMENDED_CARS", res.data);
        } else {
          throw res;
        }
      });
    },
    setFunnelData({ commit }, data) {
      commit("SET_FUNNEL_DATA", data);
    },
    resetFunnelData({ commit }) {
      commit("RESET_FUNNEL_DATA");
      router$1.push({ name: "step-1" });
    }
  }
};
const store = createStore({
  state: {
    homeData: {
      featuresData: [
        {
          img: window.location.origin + "/images/home/microchip.png",
          title: "Personalised to you",
          text: "Personalised to you, we use what you want to find you what you NEED."
        },
        {
          img: window.location.origin + "/images/home/clock.png",
          title: "Minutes, not hours",
          text: "Time saving tools for faster high quality research."
        },
        {
          img: window.location.origin + "/images/home/key.png",
          title: "Empowering your buy",
          text: "Let your lifestyle and interests shop for you. See your most optimal options."
        }
      ]
    },
    aboutData: {
      images: [
        window.location.origin + "/images/about-us/media-carsona.png",
        window.location.origin + "/images/about-us/carsona-mobile-1.png",
        window.location.origin + "/images/about-us/carsona-mobile-2.png"
      ]
    },
    footerData: {
      socials: [
        {
          name: "Facebook",
          title: "Visit our Facebook",
          url: "https://www.facebook.com/people/Carsona/100087266408881/",
          image: window.location.origin + "/images/icons/socials/facebook.svg"
        },
        {
          name: "Instagram",
          title: "Visit our Instagram",
          url: "https://www.instagram.com/carsona.io/",
          image: window.location.origin + "/images/icons/socials/instagram.svg"
        },
        {
          name: "Twitter",
          title: "Visit our Twitter",
          url: "https://twitter.com/Carsona_io",
          image: window.location.origin + "/images/icons/socials/twitter.svg"
        },
        {
          name: "LinkedIn",
          title: "Visit our LinkedIn",
          url: "https://www.linkedin.com/company/carsona/",
          image: window.location.origin + "/images/icons/socials/linkedin.svg"
        },
        {
          name: "Tiktok",
          title: "Visit our Tiktok",
          url: "https://www.tiktok.com/@carsona.io",
          image: window.location.origin + "/images/icons/socials/tiktok.svg"
        }
      ]
    }
  },
  getters: {
    getHomeData(state) {
      return state.homeData;
    },
    getAboutData(state) {
      return state.aboutData;
    },
    getSocials(state) {
      return state.footerData.socials;
    }
  },
  mutations: {},
  actions: {
    //
  },
  modules: {
    auth,
    toast,
    sidebar,
    funnel
  },
  plugins: [
    sharedMutations({
      predicate: ["SET_USER", "SET_AUTHENTICATION", "SET_THEME"]
    }),
    a({
      storage: window.sessionStorage
    })
  ]
});
function middlewarePipeline(context, middleware, index2) {
  const nextMiddleware = middleware[index2];
  if (!nextMiddleware) {
    return context.next;
  }
  return (params) => {
    if (params) {
      return context.next(params);
    }
    nextMiddleware({
      ...context,
      next: middlewarePipeline(context, middleware, index2 + 1)
    });
  };
}
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const { middleware } = to.meta;
  const context = {
    to,
    from,
    store,
    next
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});
trackRouter(router);
const router$1 = router;
const _sfc_main$2 = {
  name: "AppButton",
  components: {},
  props: {
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    text: { type: String, default: "" },
    icon: { type: String, default: null },
    btnClass: { type: String, default: "" },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    accent: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false }
  },
  data() {
    return {
      //
    };
  },
  computed: {
    hasTextSlot() {
      return this.$slots.text;
    },
    btnClasses() {
      let buttonClasses = `
        px-4
        py-3
        whitespace-nowrap
        rounded
        text-base
        font-medium
        leading-none
        shadow-sm
        transition
        duration-150
        ease-in-out
      `;
      if (this.primary) {
        buttonClasses += `
          text-white
          dark:text-white
          bg-indigo-600
          hover:bg-indigo-900
          dark:bg-indigo-600
          dark:hover:bg-indigo-400
          border-indigo-600
          hover:border-indigo-900
          dark:border-indigo-600
          dark:hover:border-indigo-400
          border-1
          border
        `;
      } else if (this.secondary) {
        buttonClasses += `
          text-white
          dark:text-white
          bg-slate-600
          hover:bg-slate-900
          dark:bg-slate-600
          dark:hover:bg-slate-400
          border-slate-600
          hover:border-slate-900
          dark:border-slate-600
          dark:hover:border-slate-400
          border-1
          border
        `;
      } else if (this.info) {
        buttonClasses += `
          text-white
          dark:text-white
          bg-blue-600
          hover:bg-blue-900
          dark:bg-blue-600
          dark:hover:bg-blue-400
          border-blue-600
          hover:border-blue-900
          dark:border-blue-600
          dark:hover:border-blue-400
          border-1
          border
        `;
      } else if (this.accent) {
        buttonClasses += `
          text-white
          dark:text-white
          bg-teal-600
          hover:bg-teal-900
          dark:bg-teal-600
          dark:hover:bg-teal-400
          border-teal-600
          hover:border-teal-900
          dark:border-teal-600
          dark:hover:border-teal-400
          border-1
          border
        `;
      } else if (this.success) {
        buttonClasses += `
          text-white
          dark:text-white
          bg-green-600
          hover:bg-green-900
          dark:bg-green-600
          dark:hover:bg-green-400
          border-green-600
          hover:border-green-900
          dark:border-green-600
          dark:hover:border-green-400
          border-1
          border
        `;
      } else if (this.warning) {
        buttonClasses += `
          text-white
          dark:text-white
          bg-yellow-600
          hover:bg-yellow-900
          dark:bg-yellow-600
          dark:hover:bg-yellow-400
          border-yellow-600
          hover:border-yellow-900
          dark:border-yellow-600
          dark:hover:border-yellow-400
          border-1
          border
        `;
      } else if (this.danger) {
        buttonClasses += `
          text-white
          dark:text-white
          bg-red-600
          hover:bg-red-900
          dark:bg-red-600
          dark:hover:bg-red-400
          border-red-600
          hover:border-red-900
          dark:border-red-600
          dark:hover:border-red-400
          border-1
          border
        `;
      } else if (this.transparent) {
        buttonClasses += "";
      } else {
        buttonClasses += "";
      }
      return buttonClasses;
    }
  },
  methods: {
    clickButton() {
      this.$emit("buttonClicked");
    }
  }
};
const _hoisted_1$1 = ["disabled"];
const _hoisted_2$1 = { key: 1 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([
      "button inline-flex items-center justify-center",
      ($props.loading || $props.disabled ? "opacity-50 " : "") + $options.btnClasses + " " + $props.btnClass
    ]),
    disabled: $props.loading || $props.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => $options.clickButton && $options.clickButton(...args))
  }, [
    $options.hasTextSlot ? renderSlot(_ctx.$slots, "text", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_2$1, [
      createTextVNode(toDisplayString($props.text) + " ", 1),
      $props.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["fa-fw", $props.icon])
      }, null, 2)) : createCommentVNode("", true)
    ]))
  ], 10, _hoisted_1$1);
}
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Toast",
  computed: {
    ...mapGetters({
      toast: "toast/toast"
    })
  },
  watch: {
    toast: {
      deep: true,
      handler(newVal) {
        if (newVal.message) {
          this.popToast();
        }
      }
    }
  },
  methods: {
    ...mapActions({
      clearToast: "toast/clearToast"
    }),
    async popToast() {
      await this.$swal.fire({
        toast: true,
        position: this.toast.position,
        icon: this.toast.icon,
        showConfirmButton: this.toast.showConfirmButton,
        title: this.toast.message,
        timer: this.toast.timer,
        timerProgressBar: this.toast.timerProgressBar,
        showCloseButton: this.toast.showCloseButton,
        didOpen: (toast2) => {
          toast2.addEventListener("mouseenter", this.$swal.stopTimer);
          toast2.addEventListener("mouseleave", this.$swal.resumeTimer);
          toast2.addEventListener("click", () => {
            this.$swal.close();
          });
        },
        showClass: {
          popup: ""
          // icon: ''
        },
        hideClass: {
          popup: ""
        }
      }).then((result) => result);
      this.clearToast();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div");
}
const AppToast = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "AppSwitch",
  components: {
    Switch: ue
    // eslint-disable-line
  },
  props: {
    enabled: { type: Boolean, default: false },
    enableTooltip: { type: Boolean, default: false },
    tooltipOn: { type: String, default: "Enable" },
    tooltipOff: { type: String, default: "Disable" }
  }
};
const _hoisted_1 = { class: "mt-1 inline-block" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Use setting", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Switch = resolveComponent("Switch");
  const _directive_tippy = resolveDirective("tippy");
  return withDirectives((openBlock(), createElementBlock("span", _hoisted_1, [
    createVNode(_component_Switch, {
      class: normalizeClass([
        $props.enabled ? "bg-green-600 dark:bg-green-500" : "bg-gray-400 dark:bg-gray-600",
        "relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      ])
    }, {
      default: withCtx(() => [
        _hoisted_2,
        createBaseVNode("span", {
          "aria-hidden": "true",
          class: normalizeClass([
            $props.enabled ? "translate-x-4 bg-white dark:bg-slate-800" : "translate-x-0 bg-white dark:bg-slate-800",
            "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
          ])
        }, null, 2)
      ]),
      _: 1
    }, 8, ["class"])
  ])), [
    [_directive_tippy, $props.enableTooltip ? $props.enabled ? $props.tooltipOff : $props.tooltipOn : null]
  ]);
}
const AppSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const all_min = "";
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  let sendSkipWaitingMessage;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
    {
      await (sendSkipWaitingMessage == null ? void 0 : sendSkipWaitingMessage());
    }
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox } = await __vitePreload(() => import("./workbox-window.prod.es5-bd313aa7.js"), true ? [] : void 0);
      wb = new Workbox("https://carsona.com.au/sw.js", { scope: "https://carsona.com.au/", type: "classic" });
      sendSkipWaitingMessage = async () => {
        await (wb == null ? void 0 : wb.messageSkipWaiting());
      };
      {
        {
          let onNeedRefreshCalled = false;
          const showSkipWaitingPrompt = () => {
            onNeedRefreshCalled = true;
            wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
              if (event.isUpdate)
                window.location.reload();
            });
            onNeedRefresh == null ? void 0 : onNeedRefresh();
          };
          wb.addEventListener("installed", (event) => {
            if (typeof event.isUpdate === "undefined") {
              if (typeof event.isExternal !== "undefined") {
                if (event.isExternal)
                  showSkipWaitingPrompt();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              } else {
                if (event.isExternal)
                  window.location.reload();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              }
            } else if (!event.isUpdate) {
              onOfflineReady == null ? void 0 : onOfflineReady();
            }
          });
          wb.addEventListener("waiting", showSkipWaitingPrompt);
          wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("https://carsona.com.au/sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
axios.defaults.withCredentials = true;
const app = createApp(App);
const APP_GA_TAG = GA_TAG;
const APP_GA_ENABLED = GA_ENABLED;
const VUE_APP_URL = APP_URL;
const VUE_SENTRY_DSN = SENTRY_DSN;
const VUE_SENTRY_ENABLED = SENTRY_ENABLED;
const VUE_SENTRY_FEEDBACK_ENABLED = SENTRY_FEEDBACK_ENABLED;
const VUE_ENVIRONMENT = ENVIRONMENT;
const VUE_TOASTY_ENABLED = KONAMI_TOASTY_ENABLED;
KONAMI_ASTEROIDS_ENABLED;
registerSW({
  onOfflineReady() {
  }
});
if (VUE_SENTRY_ENABLED == 1) {
  init({
    app,
    dsn: VUE_SENTRY_DSN,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: vueRouterInstrumentation(router$1),
        tracePropagationTargets: ["localhost", VUE_APP_URL, /^\//]
      })
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1,
    trackComponents: true,
    hooks: ["activate", "create", "destroy", "mount", "update"],
    environment: VUE_ENVIRONMENT,
    beforeBreadcrumb(breadcrumb, hint) {
      return breadcrumb.category === "ui.click" ? null : breadcrumb;
    },
    beforeSend(event, hint) {
      if (event.exception) {
        if (VUE_SENTRY_FEEDBACK_ENABLED) {
          showReportDialog({ eventId: event.event_id });
        }
      }
      return event;
    }
  });
}
store.dispatch("auth/getLogins").then(() => {
});
store.dispatch("auth/getUser").then(() => {
  if (VUE_SENTRY_ENABLED == 1) {
    if (store && store.state && store.state.auth && store.state.auth.user && store.state.auth.user.id && store.state.auth.user.name && store.state.auth.user.email && store.state.auth.authenticated) {
      setUser({
        id: store.state.auth.user.id,
        username: store.state.auth.user.name,
        email: store.state.auth.user.email
      });
    } else {
      setUser(null);
    }
  }
  app.use(store).use(router$1).use(VueSweetalert2).use(compiled.ClientTable, {}, "tailwind").use(plugin, {
    directive: "tippy",
    // => v-tippy
    component: "tippy",
    // => <tippy/>
    componentSingleton: "tippy-singleton",
    // => <tippy-singleton/>,
    defaultProps: {
      arrow: true,
      theme: "material",
      animation: "perspective",
      placement: "auto-end",
      allowHTML: true
    }
  }).use(VueSecureHTML).component("AppButton", AppButton).component("AppToast", AppToast).component("AppSwitch", AppSwitch);
  if (VUE_TOASTY_ENABLED == 1) {
    app.use(KonamiCode, {
      callback: function() {
        if (VUE_TOASTY_ENABLED == 1) {
          toasty().trigger();
        }
      }
    });
  }
  if (APP_GA_ENABLED == 1) {
    let UID = null;
    if (store && store.state && store.state.auth && store.state.auth.user && store.state.auth.user.id && store.state.auth.authenticated) {
      UID = store.state.auth.user.id;
    }
    app.use(index, {
      property: {
        id: APP_GA_TAG,
        params: {
          user_id: UID,
          send_page_view: true,
          linker: {
            domain: [VUE_APP_URL]
          }
        }
      }
    });
  }
  app.mount("#app");
});
export {
  AppFooter as A,
  CircleSvg as C,
  _export_sfc as _,
  __vite_legacy_guard,
  __vitePreload as a,
  parseDisplayDate as b,
  capitalizeFirstLetter as c,
  greeting as g,
  providerIcon as p,
  router$1 as r,
  track as t,
  validateEmail as v
};
