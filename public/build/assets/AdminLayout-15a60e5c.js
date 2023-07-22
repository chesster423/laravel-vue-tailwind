import { f as render, g as render$1, i as render$2, p as render$3, q as render$4, s as render$5, t as render$6, v as render$7, as as render$8, x as ue, m as mapState, a as mapGetters, b as mapActions, r as resolveComponent, y as resolveDirective, o as openBlock, c as createElementBlock, e as createBaseVNode, n as normalizeClass, D as createCommentVNode, z as createBlock, w as withCtx, d as createVNode, C as withDirectives, F as vShow, E as createTextVNode, G as withModifiers, at as render$9, au as render$a, aq as render$b, av as render$c, aw as render$d, ax as render$e, ay as render$f, B as toDisplayString } from "./vendor-506bc2e6.js";
import { _ as _export_sfc, A as AppFooter } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$2 = {
  name: "AdminNavBar",
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
const _hoisted_2$2 = { class: "flex h-20 w-full items-center justify-between border-b bg-white px-6 dark:bg-slate-800" };
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
const _hoisted_13$1 = { class: "my-1 mr-5 mt-2 w-full py-2 sm:flex sm:items-center" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Toggle Theme", -1);
const _hoisted_15 = ["src", "alt"];
const _hoisted_16 = {
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
  const _component_Switch = resolveComponent("Switch");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_CogIcon = resolveComponent("CogIcon");
  const _component_ArrowLeftOnRectangleIcon = resolveComponent("ArrowLeftOnRectangleIcon");
  const _directive_tippy = resolveDirective("tippy");
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
            to: { name: "dashboard" },
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
        createBaseVNode("div", _hoisted_13$1, [
          withDirectives((openBlock(), createElementBlock("span", {
            class: normalizeClass(
              $data.loading ? "default disabled cursor-pointer" : "cursor-pointer"
            ),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.toggleTheme())
          }, [
            createVNode(_component_Switch, {
              modelValue: $data.form.theme_dark,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.theme_dark = $event),
              class: normalizeClass([$data.form.theme_dark ? "bg-gray-500" : "bg-gray-400", "relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"])
            }, {
              default: withCtx(() => [
                _hoisted_14,
                createBaseVNode("span", {
                  "aria-hidden": "true",
                  class: normalizeClass([
                    $data.form.theme_dark ? "translate-x-5 bg-gray-800" : "translate-x-0 bg-white",
                    "pointer-events-none inline-block h-[22px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
                  ])
                }, null, 2)
              ]),
              _: 1
            }, 8, ["modelValue", "class"])
          ], 2)), [
            [_directive_tippy, "Toggle Theme " + ($data.form.theme_dark ? "Light" : "Dark")]
          ])
        ]),
        _ctx.user && _ctx.user.avatar ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.user.avatar,
          alt: _ctx.user.name,
          class: "h-8 w-8 cursor-pointer rounded-full border shadow-lg",
          onClick: _cache[4] || (_cache[4] = ($event) => $data.dropDownOpen = !$data.dropDownOpen)
        }, null, 8, _hoisted_15)) : (openBlock(), createBlock(_component_UserCircleIcon, {
          key: 1,
          class: "float-right ml-2 mt-0 h-8 w-8 cursor-pointer",
          onClick: _cache[5] || (_cache[5] = ($event) => $data.dropDownOpen = !$data.dropDownOpen)
        }))
      ])
    ]),
    createBaseVNode("div", _hoisted_16, [
      withDirectives(createBaseVNode("div", {
        class: "absolute right-5 z-10 flex w-auto flex-col whitespace-nowrap rounded border bg-white shadow-md dark:bg-slate-900",
        onClick: _cache[7] || (_cache[7] = ($event) => $data.dropDownOpen = !$data.dropDownOpen)
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
          onClick: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.logout && _ctx.logout(...args), ["prevent"]))
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
const AdminNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
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
    appName: { type: String, default: "Workflow" }
  },
  setup() {
    return {};
  },
  data() {
    return {
      companyLogo: window.location.origin + "/images/logo.png",
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
const _hoisted_1$1 = { class: "mb-8 flex h-20 w-full items-center border-b px-4" };
const _hoisted_2$1 = { class: "flex justify-center lg:w-0 lg:flex-1" };
const _hoisted_3$1 = ["src", "alt"];
const _hoisted_4 = { class: "sr-only text-3xl font-semibold text-blue-400" };
const _hoisted_5 = { class: "mb-4 px-4" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "Admin", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "Users", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "Cars Brands", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "Cars", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "Roles", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "Permissions", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "Server Info", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("span", { class: "" }, "App Settings", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_BuildingLibraryIcon = resolveComponent("BuildingLibraryIcon");
  const _component_UsersIcon = resolveComponent("UsersIcon");
  const _component_CubeIcon = resolveComponent("CubeIcon");
  const _component_TruckIcon = resolveComponent("TruckIcon");
  const _component_ShieldCheckIcon = resolveComponent("ShieldCheckIcon");
  const _component_ShieldExclamationIcon = resolveComponent("ShieldExclamationIcon");
  const _component_ServerStackIcon = resolveComponent("ServerStackIcon");
  const _component_CogIcon = resolveComponent("CogIcon");
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
      _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
        key: 0,
        to: { name: "admin" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              $options.currentRouteName == "admin" ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_BuildingLibraryIcon, { class: "mb-1 mr-2 h-6 w-6" }),
            _hoisted_6
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 1,
        to: { name: "users" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_UsersIcon, { class: "mb-1 mr-2 h-6 w-6" }),
            _hoisted_7
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 2,
        to: { name: "car-brands" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_CubeIcon, { class: "mr-2 h-6 w-6" }),
            _hoisted_8
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 3,
        to: { name: "cars" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_TruckIcon, { class: "mr-2 h-6 w-6" }),
            _hoisted_9
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 4,
        to: { name: "roles" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_ShieldCheckIcon, { class: "mr-2 h-6 w-6" }),
            _hoisted_10
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 5,
        to: { name: "permissions" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_ShieldExclamationIcon, { class: "mr-2 h-6 w-6" }),
            _hoisted_11
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 6,
        to: { name: "phpinfo" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_ServerStackIcon, { class: "mr-2 h-6 w-6" }),
            _hoisted_12
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createBlock(_component_router_link, {
        key: 7,
        to: { name: "app-settings" },
        onClick: _ctx.toggleSidebar
      }, {
        default: withCtx(({ isActive }) => [
          createBaseVNode("div", {
            class: normalizeClass([
              "flex h-10 w-full items-center rounded-lg pl-4 text-blue-400",
              isActive ? "cursor-default bg-gray-200 text-blue-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-blue-200 dark:hover:bg-gray-900" : "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            ])
          }, [
            createVNode(_component_CogIcon, { class: "mr-2 h-6 w-6" }),
            _hoisted_13
          ], 2)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true)
    ])
  ], 2);
}
const AdminSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "AdminLayout",
  components: {
    AdminNavBar,
    AdminSidebar,
    AppFooter
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
  const _component_AdminSidebar = resolveComponent("AdminSidebar");
  const _component_AdminNavBar = resolveComponent("AdminNavBar");
  const _component_router_view = resolveComponent("router-view");
  const _component_AppFooter = resolveComponent("AppFooter");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_AdminSidebar, {
        class: normalizeClass(_ctx.fullScreenSideBarOpen ? "" : "lg:hidden")
      }, null, 8, ["class"]),
      createBaseVNode("div", {
        id: "main-content",
        class: normalizeClass([
          "min-h-screen w-full bg-white pl-0 dark:bg-slate-800",
          (_ctx.sideBarOpen ? "overlay " : " ") + (_ctx.fullScreenSideBarOpen ? "lg:pl-64" : "")
        ])
      }, [
        createVNode(_component_AdminNavBar),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_router_view)
        ]),
        createVNode(_component_AppFooter, {
          class: "sticky top-[100vh] w-full",
          "footer-class": "border-slate-900/5 dark:border-slate-700",
          "border-class": ""
        })
      ], 2)
    ])
  ]);
}
const AdminLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AdminLayout as default
};
