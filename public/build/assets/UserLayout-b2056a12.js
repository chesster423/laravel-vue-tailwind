import { f as render, g as render$1, i as render$2, p as render$3, q as render$4, s as render$5, t as render$6, v as render$7, as as render$8, x as ue, m as mapState, a as mapGetters, b as mapActions, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, n as normalizeClass, D as createCommentVNode, z as createBlock, w as withCtx, d as createVNode, C as withDirectives, F as vShow, E as createTextVNode, G as withModifiers, at as render$9, au as render$a, aq as render$b, av as render$c, aw as render$d, ax as render$e, ay as render$f, B as toDisplayString } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$2 = {
  name: "UserNavBar",
  components: {
    HomeIcon: render,
    BuildingLibraryIcon: render$1,
    InformationCircleIcon: render$2,
    Bars3Icon: render$3,
    XMarkIcon: render$4,
    CogIcon: render$5,
    ArrowLeftOnRectangleIcon: render$6,
    // ChevronDownIcon,
    UserCircleIcon: render$7,
    Bars3BottomLeftIcon: render$8,
    Switch: ue
    // eslint-disable-line
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      dropDownOpen: false,
      form: {
        theme_dark: false
      },
      errors: null,
      success: "",
      loading: false
    };
  },
  computed: {
    ...mapState("sidebar", {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen
    }),
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    }),
    currentRouteName() {
      return this.$route.name;
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    this.form.theme_dark = this.user.theme_dark;
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      toggleSidebar: "sidebar/toggleSidebar",
      toggleFullScreenSidebar: "sidebar/toggleFullScreenSidebar",
      updateTheme: "auth/theme",
      popToast: "toast/popToast",
      logout: "auth/logout"
    }),
    toggleSidebarTrigger() {
      this.toggleSidebar();
      this.closeDrop();
    },
    toggleFullScreenSidebarTrigger() {
      this.toggleFullScreenSidebar();
      this.closeDrop();
    },
    closeDrop() {
      this.dropDownOpen = false;
    },
    openDrop() {
      this.dropDownOpen = true;
    },
    async toggleTheme() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.updateTheme(this.form).then((response) => {
          if (response && response.data && response.data.user && response.data.user.id) {
            this.form.theme_dark = response.data.user.theme_dark;
            this.popToast({
              message: "Theme Saved",
              timer: 2e3,
              icon: "success"
            });
          }
        });
      } catch (e) {
        this.errors = e.data;
        this.popToast({
          message: "Error Updating Theme",
          timer: 5e3,
          icon: "error"
        });
      }
      this.loading = false;
    }
  }
};
const _hoisted_1$2 = { class: "sticky top-0 z-40" };
const _hoisted_2$2 = { class: "flex h-20 w-full items-center justify-between border-b bg-black px-6 dark:bg-slate-800" };
const _hoisted_3$2 = { class: "flex" };
const _hoisted_4$1 = { class: "mr-4 inline-block flex items-center lg:hidden" };
const _hoisted_5$1 = {
  key: 0,
  class: "sr-only"
};
const _hoisted_6$1 = {
  key: 1,
  class: "sr-only"
};
const _hoisted_7$1 = { class: "hidden lg:inline-flex" };
const _hoisted_8$1 = { class: "mr-4 inline-block flex items-center" };
const _hoisted_9$1 = {
  key: 0,
  class: "sr-only"
};
const _hoisted_10$1 = {
  key: 1,
  class: "sr-only"
};
const _hoisted_11$1 = {
  as: "nav",
  class: "ml-5 flex space-x-10"
};
const _hoisted_12$1 = { class: "relative flex items-center" };
const _hoisted_13$1 = ["src", "alt"];
const _hoisted_14$1 = {
  ref: "dropMenu",
  class: "relative mt-1"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Bars3Icon = resolveComponent("Bars3Icon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_Bars3BottomLeftIcon = resolveComponent("Bars3BottomLeftIcon");
  const _component_BuildingLibraryIcon = resolveComponent("BuildingLibraryIcon");
  const _component_router_link = resolveComponent("router-link");
  const _component_HomeIcon = resolveComponent("HomeIcon");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_CogIcon = resolveComponent("CogIcon");
  const _component_ArrowLeftOnRectangleIcon = resolveComponent("ArrowLeftOnRectangleIcon");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("div", _hoisted_2$2, [
      createBaseVNode("div", _hoisted_3$2, [
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("button", {
            class: normalizeClass([
              "navbar-burger rounded text-gray-600 hover:border-white hover:text-gray-500 focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-800",
              _ctx.sideBarOpen ? "bg-slate-100 text-gray-900 dark:text-gray-100" : ""
            ]),
            onClick: _cache[0] || (_cache[0] = ($event) => $options.toggleSidebarTrigger())
          }, [
            !_ctx.sideBarOpen ? (openBlock(), createElementBlock("span", _hoisted_5$1, "Open menu")) : createCommentVNode("", true),
            _ctx.sideBarOpen ? (openBlock(), createElementBlock("span", _hoisted_6$1, "CLose menu")) : createCommentVNode("", true),
            !_ctx.sideBarOpen ? (openBlock(), createBlock(_component_Bars3Icon, {
              key: 2,
              class: "h-6 w-6",
              "aria-hidden": "true"
            })) : createCommentVNode("", true),
            _ctx.sideBarOpen ? (openBlock(), createBlock(_component_XMarkIcon, {
              key: 3,
              class: "h-6 w-6",
              "aria-hidden": "true"
            })) : createCommentVNode("", true)
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("button", {
              class: "navbar-burger rounded text-gray-600 hover:border-white hover:text-gray-500 focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-800",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.toggleFullScreenSidebarTrigger())
            }, [
              !_ctx.fullScreenSideBarOpen ? (openBlock(), createElementBlock("span", _hoisted_9$1, "Open menu")) : createCommentVNode("", true),
              _ctx.fullScreenSideBarOpen ? (openBlock(), createElementBlock("span", _hoisted_10$1, "CLose menu")) : createCommentVNode("", true),
              !_ctx.fullScreenSideBarOpen ? (openBlock(), createBlock(_component_Bars3Icon, {
                key: 2,
                class: "h-6 w-6",
                "aria-hidden": "true"
              })) : createCommentVNode("", true),
              _ctx.fullScreenSideBarOpen ? (openBlock(), createBlock(_component_Bars3BottomLeftIcon, {
                key: 3,
                class: "h-6 w-6",
                "aria-hidden": "true"
              })) : createCommentVNode("", true)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_11$1, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "admin" },
            class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
            onClick: $options.closeDrop
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, [
                createVNode(_component_BuildingLibraryIcon, { class: "float-left mr-2 h-6 w-6" })
              ], 2)
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true),
          _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
            key: 1,
            to: { name: "history" },
            class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
            onClick: $options.closeDrop
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, [
                createVNode(_component_HomeIcon, { class: "float-left mr-2 h-6 w-6" })
              ], 2)
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true),
          createVNode(_component_router_link, {
            to: { name: "about" },
            class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
            onClick: $options.closeDrop
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, [
                createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" })
              ], 2)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      createBaseVNode("div", _hoisted_12$1, [
        _ctx.user && _ctx.user.avatar ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.user.avatar,
          alt: _ctx.user.name,
          class: "h-8 w-8 cursor-pointer rounded-full border shadow-lg",
          onClick: _cache[2] || (_cache[2] = ($event) => $data.dropDownOpen = !$data.dropDownOpen)
        }, null, 8, _hoisted_13$1)) : (openBlock(), createBlock(_component_UserCircleIcon, {
          key: 1,
          class: "float-right ml-2 mt-0 h-8 w-8 cursor-pointer",
          onClick: _cache[3] || (_cache[3] = ($event) => $data.dropDownOpen = !$data.dropDownOpen)
        }))
      ])
    ]),
    createBaseVNode("div", _hoisted_14$1, [
      withDirectives(createBaseVNode("div", {
        class: "absolute right-5 z-10 flex w-auto flex-col whitespace-nowrap rounded border bg-white shadow-md dark:bg-slate-900",
        onClick: _cache[5] || (_cache[5] = ($event) => $data.dropDownOpen = !$data.dropDownOpen)
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
        _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
          key: 1,
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
          key: 2,
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
          onClick: _cache[4] || (_cache[4] = withModifiers((...args) => _ctx.logout && _ctx.logout(...args), ["prevent"]))
        }, [
          createVNode(_component_ArrowLeftOnRectangleIcon, { class: "mr-2 h-6 w-6" }),
          createTextVNode(" Logout ")
        ])
      ], 512), [
        [vShow, $data.dropDownOpen]
      ])
    ], 512)
  ]);
}
const UserNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "AdminSidebar",
  components: {
    UsersIcon: render$9,
    BuildingLibraryIcon: render$1,
    ShieldCheckIcon: render$a,
    ShieldExclamationIcon: render$b,
    ServerStackIcon: render$c,
    CogIcon: render$5,
    BookOpenIcon: render$d,
    CubeIcon: render$e,
    TruckIcon: render$f
  },
  props: {
    appName: { type: String, default: "Carsona" }
  },
  setup() {
    return {};
  },
  data() {
    return {
      companyLogo: window.location.origin + "/images/logo-2.png",
      logoImageAlt: "Company Logo"
      //
    };
  },
  computed: {
    ...mapState("sidebar", {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen
    }),
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    }),
    currentRouteName() {
      return this.$route.name;
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
  methods: {
    ...mapActions({
      toggleSidebar: "sidebar/toggleSidebar",
      toggleFullScreenSidebar: "sidebar/toggleFullScreenSidebar",
      popToast: "toast/popToast"
    })
  }
};
const _hoisted_1$1 = { class: "flex h-20 w-full items-center p-60" };
const _hoisted_2$1 = { class: "flex hidden justify-center lg:block lg:w-0 lg:flex-1" };
const _hoisted_3$1 = ["src", "alt"];
const _hoisted_4 = { class: "sr-only text-3xl font-semibold text-blue-400" };
const _hoisted_5 = { class: "mb-20 hidden text-center lg:block" };
const _hoisted_6 = { class: "text-base font-bold" };
const _hoisted_7 = { class: "text-sm text-slate-400" };
const _hoisted_8 = { class: "mb-4 px-4 text-black" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#000",
  class: "h-6 w-6"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  })
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3 text-sm font-bold text-black" }, "Dashboard", -1);
const _hoisted_11 = [
  _hoisted_9,
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "#000",
  class: "h-6 w-6"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
  })
], -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3 text-sm font-bold text-black" }, "Saved Cars", -1);
const _hoisted_14 = [
  _hoisted_12,
  _hoisted_13
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", {
    id: "main-nav",
    class: normalizeClass(["fixed z-30 h-screen w-1/2 border-r bg-white dark:bg-slate-800 md:left-0 md:top-0 md:w-1/3 lg:block lg:w-64", _ctx.sideBarOpen ? "" : "hidden"])
  }, [
    createBaseVNode("div", _hoisted_1$1, [
      createBaseVNode("div", _hoisted_2$1, [
        createVNode(_component_router_link, { to: { name: "home" } }, {
          default: withCtx(() => [
            createBaseVNode("img", {
              src: $data.companyLogo,
              class: "mx-auto",
              alt: $data.logoImageAlt
            }, null, 8, _hoisted_3$1),
            createBaseVNode("p", _hoisted_4, toDisplayString($props.appName), 1)
          ]),
          _: 1
        })
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("p", _hoisted_6, toDisplayString(_ctx.user.name), 1),
      createBaseVNode("p", _hoisted_7, toDisplayString(_ctx.user.email), 1)
    ]),
    createBaseVNode("div", _hoisted_8, [
      _ctx.authenticated && _ctx.roles && _ctx.roles.user ? (openBlock(), createBlock(_component_router_link, {
        key: 0,
        to: { name: "history" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, _hoisted_11, 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.user ? (openBlock(), createBlock(_component_router_link, {
        key: 1,
        to: { name: "saved-cars" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, _hoisted_14, 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true)
    ])
  ], 2);
}
const UserSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "UserLayout",
  components: {
    UserNavBar,
    UserSidebar
  },
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
    ...mapState("sidebar", {
      sideBarOpen: (state) => state.sideBarOpen,
      fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen
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
  methods: {}
};
const _hoisted_1 = {
  id: "main-body",
  class: "leading-normal tracking-normal"
};
const _hoisted_2 = { class: "flex flex-wrap" };
const _hoisted_3 = { class: "mb-20 bg-white dark:bg-slate-800" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UserSidebar = resolveComponent("UserSidebar");
  const _component_UserNavBar = resolveComponent("UserNavBar");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_UserSidebar, {
        class: normalizeClass(_ctx.fullScreenSideBarOpen ? "" : "lg:hidden")
      }, null, 8, ["class"]),
      createBaseVNode("div", {
        id: "main-content",
        class: normalizeClass([
          "min-h-screen w-full bg-white pl-0 dark:bg-slate-800",
          (_ctx.sideBarOpen ? "overlay " : " ") + (_ctx.fullScreenSideBarOpen ? "lg:pl-64" : "")
        ])
      }, [
        createVNode(_component_UserNavBar),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_router_view)
        ])
      ], 2)
    ])
  ]);
}
const UserLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  UserLayout as default
};
