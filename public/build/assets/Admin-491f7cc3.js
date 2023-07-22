import { az as render, a as mapGetters, b as mapActions, Q as axios, r as resolveComponent, o as openBlock, c as createElementBlock, d as createVNode, D as createCommentVNode, e as createBaseVNode, z as createBlock, w as withCtx, B as toDisplayString, n as normalizeClass, E as createTextVNode, H as pushScopeId, I as popScopeId } from "./vendor-506bc2e6.js";
import { R as RolesBadges } from "./RolesBadges-1d900542.js";
import { z as zohoLight, a as zohoDark } from "./zoho-monocrome-black-11dabfe7.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const Admin_vue_vue_type_style_index_0_scoped_7a517637_lang = "";
const _sfc_main = {
  name: "Admin",
  components: {
    ChevronRightIcon: render,
    RolesBadges
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      loading: false,
      users: [],
      rolesData: [],
      permissionsData: [],
      authSettings: [],
      analyticsData: [],
      monitoringData: [],
      GA_TAG,
      // eslint-disable-line
      GA_ENABLED,
      // eslint-disable-line
      APP_URL,
      // eslint-disable-line
      SENTRY_DSN,
      // eslint-disable-line
      SENTRY_ENABLED,
      // eslint-disable-line
      SENTRY_FEEDBACK_ENABLED
      // eslint-disable-line
      // buyersData: {
      //   type: 'line',
      //   data: {
      //     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      //     datasets: [
      //       {
      //         backgroundColor: 'rgba(99,179,237,0.4)',
      //         strokeColor: '#63b3ed',
      //         pointColor: '#fff',
      //         pointStrokeColor: '#63b3ed',
      //         data: [203, 156, 99, 251, 305, 247, 256],
      //       },
      //       {
      //         backgroundColor: 'rgba(198,198,198,0.4)',
      //         strokeColor: '#f7fafc',
      //         pointColor: '#fff',
      //         pointStrokeColor: '#f7fafc',
      //         data: [86, 97, 144, 114, 94, 108, 156],
      //       },
      //     ],
      //   },
      //   options: {
      //     legend: {
      //       display: false,
      //     },
      //     scales: {
      //       yAxes: [
      //         {
      //           gridLines: {
      //             display: false,
      //           },
      //           ticks: {
      //             display: false,
      //           },
      //         },
      //       ],
      //       xAxes: [
      //         {
      //           gridLines: {
      //             display: false,
      //           },
      //         },
      //       ],
      //     },
      //   },
      // },
      // reviewsData: {
      //   type: 'bar',
      //   data: {
      //     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      //     datasets: [
      //       {
      //         backgroundColor: 'rgba(99,179,237,0.4)',
      //         strokeColor: '#63b3ed',
      //         pointColor: '#fff',
      //         pointStrokeColor: '#63b3ed',
      //         data: [203, 156, 99, 251, 305, 247, 256],
      //       },
      //     ],
      //   },
      //   options: {
      //     legend: {
      //       display: false,
      //     },
      //     scales: {
      //       yAxes: [
      //         {
      //           gridLines: {
      //             display: false,
      //           },
      //           ticks: {
      //             display: false,
      //           },
      //         },
      //       ],
      //       xAxes: [
      //         {
      //           gridLines: {
      //             display: false,
      //           },
      //         },
      //       ],
      //     },
      //   },
      // },
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    }),
    greeting() {
      const date = /* @__PURE__ */ new Date();
      const currentTime = date.getHours();
      let greeting;
      if (currentTime >= 0 && currentTime <= 12) {
        greeting = "Good Morning";
      } else if (currentTime > 12 && currentTime <= 18) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening";
      }
      return greeting;
    },
    analyticsEnabled() {
      const found = this.analyticsData.find(
        (obj) => obj.key == "enableGoogleAnalytics"
      );
      if (found && found.val && found.val == 1) {
        return true;
      }
      return false;
    },
    analyticsTag() {
      const found = this.analyticsData.find(
        (obj) => obj.key == "appGoogleAnalyticsKey"
      );
      if (found && found.val && found.val != "") {
        return null;
      }
      return "MISSING TAG ID";
    },
    sentryEnabled() {
      const found = this.monitoringData.find(
        (obj) => obj.key == "enableSentryMonitoring"
      );
      if (found && found.val && found.val == 1) {
        return true;
      }
      return false;
    },
    sentryFormEnabled() {
      const found = this.monitoringData.find(
        (obj) => obj.key == "enableSentryMonitoringFeedbakForm"
      );
      if (found && found.val && found.val == 1) {
        return true;
      }
      return false;
    },
    sentryDSN() {
      const found = this.monitoringData.find((obj) => obj.key == "sentryIoDSN");
      if (found && found.val && found.val != "") {
        return null;
      }
      return "MISSING DSN (URL)";
    },
    zohoImgUrl() {
      if (this.user && this.user.theme_dark) {
        return zohoLight;
      } else {
        return zohoDark;
      }
    }
  },
  mounted() {
    this.getDashboardData();
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    async getDashboardData() {
      this.loading = true;
      await axios.get("/api/dashboard/data").then(({ data }) => {
        this.users = data.users;
        this.rolesData = data.roles;
        this.authSettings = data.authSettings;
        this.permissionsData = data.permissions;
        this.analyticsData = data.analytics;
        this.monitoringData = data.monitoring;
        this.dataReady = true;
        this.loading = false;
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Getting Users",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
      this.dataReady = true;
    },
    checkSettingEnabled(key = null) {
      let found = false;
      let enabled = false;
      if (key) {
        found = this.authSettings.find((obj) => obj.key == key);
        if (found && found.val == 1) {
          enabled = true;
        }
      }
      return enabled;
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-7a517637"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "admin",
  class: "bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
};
const _hoisted_2 = {
  key: 0,
  class: "float-right mb-6 text-center"
};
const _hoisted_3 = {
  class: "mb-6 text-sm font-semibold",
  "aria-label": "Breadcrumb"
};
const _hoisted_4 = { class: "inline-flex list-none p-0" };
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = { class: "mb-6 items-center justify-between lg:flex" };
const _hoisted_7 = { class: "mb-2 text-2xl font-semibold lg:mb-0" };
const _hoisted_8 = { class: "-mx-3 mb-20 flex flex-wrap" };
const _hoisted_9 = {
  key: 0,
  class: "w-full px-3 md:w-2/3 xl:w-2/3"
};
const _hoisted_10 = { class: "mb-6 flex w-full items-center rounded-lg border bg-white p-6 text-gray-600 hover:bg-gray-100 dark:border-slate-900 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-700" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fas fa-lock fa-fw fa-3x text-gray-700 dark:text-gray-300" }, null, -1));
const _hoisted_12 = { class: "text-3xl font-semibold text-gray-700 dark:text-gray-300" };
const _hoisted_13 = {
  key: 0,
  class: "fas fa-circle-notch fa-spin fa-xs"
};
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Logins Enabled", -1));
const _hoisted_15 = {
  key: 1,
  class: "w-full px-3 sm:w-1/2 md:w-1/3 xl:w-1/3"
};
const _hoisted_16 = { class: "mb-6 flex w-full items-center rounded-lg border bg-white p-6 text-gray-600 hover:bg-gray-100 dark:border-slate-900 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-700" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fas fa-user fa-fw fa-3x text-gray-700 dark:text-gray-300" }, null, -1));
const _hoisted_18 = { class: "text-3xl font-semibold text-gray-700 dark:text-gray-300" };
const _hoisted_19 = {
  key: 0,
  class: "fas fa-circle-notch fa-spin fa-xs"
};
const _hoisted_20 = { key: 1 };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Registered Users", -1));
const _hoisted_22 = {
  key: 2,
  class: "w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2"
};
const _hoisted_23 = { class: "mb-6 flex w-full items-center rounded-lg border bg-white p-6 text-gray-600 hover:bg-gray-100 dark:border-slate-900 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-700" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-google fa-fw fa-3x text-gray-700 dark:text-gray-300" }, null, -1));
const _hoisted_25 = { class: "text-3xl font-semibold text-gray-700 dark:text-gray-300" };
const _hoisted_26 = {
  key: 0,
  class: "fas fa-circle-notch fa-spin fa-xs"
};
const _hoisted_27 = { style: { "font-size": "0.25em", "line-height": "1", "margin-left": "2px", "margin-top": "-4px", "position": "absolute" } };
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Google Analytics", -1));
const _hoisted_29 = {
  key: 3,
  class: "w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2"
};
const _hoisted_30 = { class: "mb-6 flex w-full items-center rounded-lg border bg-white p-6 text-gray-600 hover:bg-gray-100 dark:border-slate-900 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-700" };
const _hoisted_31 = {
  class: "css-1mxa28m e10nushx4 float-left mr-1",
  viewBox: "0 0 65 65",
  width: "60",
  height: "65",
  style: { "margin-top": "-1px", "margin-right": "5px" }
};
const _hoisted_32 = ["fill"];
const _hoisted_33 = { class: "text-3xl font-semibold text-gray-700 dark:text-gray-300" };
const _hoisted_34 = {
  key: 0,
  class: "fas fa-circle-notch fa-spin fa-xs"
};
const _hoisted_35 = { style: { "font-size": "0.25em", "line-height": "1", "margin-left": "1px", "margin-top": "-4px", "position": "absolute" } };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-600 dark:text-gray-400" }, " Setry.io Monitoring ", -1));
const _hoisted_37 = {
  key: 4,
  class: "w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2"
};
const _hoisted_38 = { class: "mb-6 flex w-full items-center rounded-lg border bg-white p-6 text-gray-600 hover:bg-gray-100 dark:border-slate-900 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-700" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fas fa-shield-alt fa-fw fa-3x text-gray-700 dark:text-gray-300" }, null, -1));
const _hoisted_40 = { class: "text-3xl font-semibold text-gray-700 dark:text-gray-300" };
const _hoisted_41 = {
  key: 0,
  class: "fas fa-circle-notch fa-spin fa-xs"
};
const _hoisted_42 = { key: 1 };
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Roles", -1));
const _hoisted_44 = {
  key: 5,
  class: "w-full px-3 sm:w-1/2 lg:w-1/2 xl:w-1/2"
};
const _hoisted_45 = { class: "mb-6 flex w-full items-center rounded-lg border bg-white p-6 text-gray-600 hover:bg-gray-100 dark:border-slate-900 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-700" };
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "fas fa-shield-alt fa-fw fa-3x text-gray-700 dark:text-gray-300" }, null, -1));
const _hoisted_47 = { class: "text-3xl font-semibold text-gray-700 dark:text-gray-300" };
const _hoisted_48 = {
  key: 0,
  class: "fas fa-circle-notch fa-spin fa-xs"
};
const _hoisted_49 = { key: 1 };
const _hoisted_50 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-600 dark:text-gray-400" }, "Permissions", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RolesBadges = resolveComponent("RolesBadges");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.roles ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createVNode(_component_RolesBadges, { roles: _ctx.roles }, null, 8, ["roles"])
    ])) : createCommentVNode("", true),
    createBaseVNode("nav", _hoisted_3, [
      createBaseVNode("ol", _hoisted_4, [
        createBaseVNode("li", _hoisted_5, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "admin" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, " Admin ", 2)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_6, [
      createBaseVNode("p", _hoisted_7, toDisplayString($options.greeting) + ", " + toDisplayString(_ctx.user.name) + "! ", 1)
    ]),
    createBaseVNode("div", _hoisted_8, [
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createVNode(_component_router_link, { to: { name: "app-settings" } }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_10, [
              _hoisted_11,
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_12, [
                  $data.loading ? (openBlock(), createElementBlock("span", _hoisted_13)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass([
                      "fa-brands fa-square-facebook fa-fw fa-xs",
                      $options.checkSettingEnabled("enableFbLogin") ? "text-blue-600 dark:text-blue-600" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 2,
                    class: normalizeClass([
                      "fa-brands fa-twitter fa-fw fa-xs",
                      $options.checkSettingEnabled("enableTwitterLogin") ? "text-blue-300 dark:text-blue-300" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 3,
                    class: normalizeClass([
                      "fa-brands fa-instagram fa-fw fa-xs",
                      $options.checkSettingEnabled("enableInstagramLogin") ? "text-green-300 dark:text-yellow-300" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 4,
                    class: normalizeClass([
                      "fa-brands fa-github fa-fw fa-xs",
                      $options.checkSettingEnabled("enableGitHubLogin") ? "text-gray-300 dark:text-gray-300" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 5,
                    class: normalizeClass([
                      "fa-brands fa-youtube fa-fw fa-xs",
                      $options.checkSettingEnabled("enableYouTubeLogin") ? "text-red-500 dark:text-red-500" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 6,
                    class: normalizeClass([
                      "fa-brands fa-google fa-fw fa-xs",
                      $options.checkSettingEnabled("enableGoogleLogin") ? "text-green-300 dark:text-green-300" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 7,
                    class: normalizeClass([
                      "fa-brands fa-linkedin fa-fw fa-xs",
                      $options.checkSettingEnabled("enableLinkedInLogin") ? "text-blur-700 dark:text-blur-700" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 8,
                    class: normalizeClass([
                      "fa-brands fa-twitch fa-fw fa-xs",
                      $options.checkSettingEnabled("enableTwitchLogin") ? "text-blue-500 dark:text-blue-500" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 9,
                    class: normalizeClass([
                      "fa-brands fa-apple fa-fw fa-xs",
                      $options.checkSettingEnabled("enableAppleLogin") ? "text-gray-800 dark:text-gray-200" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 10,
                    class: normalizeClass([
                      "fa-brands fa-microsoft fa-fw fa-xs",
                      $options.checkSettingEnabled("enableMicrosoftLogin") ? "text-blue-300 dark:text-blue-300" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 11,
                    class: normalizeClass([
                      "fa fa-z fa-fw fa-xs",
                      $options.checkSettingEnabled("enableZoHoLogin") ? "text-yellow-600 dark:text-yellow-600" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 12,
                    class: normalizeClass([
                      "fa-brands fa-stack-exchange fa-fw fa-xs",
                      $options.checkSettingEnabled("enableStackExchangeLogin") ? "text-blue-400 dark:text-blue-400" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 13,
                    class: normalizeClass([
                      "fa-brands fa-square-gitlab fa-fw fa-xs",
                      $options.checkSettingEnabled("enableGitLabLogin") ? "text-orange-400 dark:text-orange-400" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 14,
                    class: normalizeClass([
                      "fa-brands fa-square-reddit fa-fw fa-xs",
                      $options.checkSettingEnabled("enableRedditLogin") ? "text-orange-700 dark:text-orange-700" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 15,
                    class: normalizeClass([
                      "fa-brands fa-square-snapchat fa-fw fa-xs",
                      $options.checkSettingEnabled("enableSnapchatLogin") ? "text-yellow-400 dark:text-yellow-400" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 16,
                    class: normalizeClass([
                      "fa-brands fa-meetup fa-fw fa-xs",
                      $options.checkSettingEnabled("enableMeetupLogin") ? "text-red-400 dark:text-red-400" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 17,
                    class: normalizeClass([
                      "fa-brands fa-atlassian fa-fw fa-xs",
                      $options.checkSettingEnabled("enableAtlassianLogin") ? "text-blue-800 dark:text-blue-800" : "text-gray-300 dark:text-gray-800"
                    ])
                  }, null, 2)) : createCommentVNode("", true)
                ]),
                _hoisted_14
              ])
            ])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createElementBlock("div", _hoisted_15, [
        createVNode(_component_router_link, { to: { name: "users" } }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_16, [
              _hoisted_17,
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_18, [
                  $data.loading ? (openBlock(), createElementBlock("span", _hoisted_19)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", _hoisted_20, toDisplayString($data.users.length), 1)) : createCommentVNode("", true)
                ]),
                _hoisted_21
              ])
            ])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createElementBlock("div", _hoisted_22, [
        createVNode(_component_router_link, { to: { name: "app-settings" } }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_23, [
              _hoisted_24,
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_25, [
                  $data.loading ? (openBlock(), createElementBlock("span", _hoisted_26)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass($options.analyticsEnabled ? "text-yellow-500" : "")
                  }, [
                    createTextVNode(toDisplayString($options.analyticsEnabled ? "Enabled" : "Disabled") + " ", 1),
                    createBaseVNode("div", _hoisted_27, toDisplayString($options.analyticsTag), 1)
                  ], 2)) : createCommentVNode("", true)
                ]),
                _hoisted_28
              ])
            ])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createElementBlock("div", _hoisted_29, [
        createVNode(_component_router_link, { to: { name: "app-settings" } }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_30, [
              (openBlock(), createElementBlock("svg", _hoisted_31, [
                createBaseVNode("path", {
                  d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
                  transform: "translate(11, 11)",
                  fill: _ctx.user.theme_dark ? "#ffffff" : "#362d59"
                }, null, 8, _hoisted_32)
              ])),
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_33, [
                  $data.loading ? (openBlock(), createElementBlock("span", _hoisted_34)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", {
                    key: 1,
                    class: normalizeClass($options.sentryEnabled ? "text-red-500" : "")
                  }, [
                    createTextVNode(toDisplayString($options.sentryEnabled ? "Enabled" : "Disabled") + " ", 1),
                    createBaseVNode("div", _hoisted_35, toDisplayString($options.sentryDSN) + " " + toDisplayString($options.sentryDSN && $options.sentryFormEnabled ? " / " : "") + " " + toDisplayString($options.sentryFormEnabled ? "Feedback Enabled" : ""), 1)
                  ], 2)) : createCommentVNode("", true)
                ]),
                _hoisted_36
              ])
            ])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createElementBlock("div", _hoisted_37, [
        createVNode(_component_router_link, { to: { name: "roles" } }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_38, [
              _hoisted_39,
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_40, [
                  $data.loading ? (openBlock(), createElementBlock("span", _hoisted_41)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", _hoisted_42, toDisplayString($data.rolesData.length), 1)) : createCommentVNode("", true)
                ]),
                _hoisted_43
              ])
            ])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true),
      _ctx.authenticated && _ctx.roles && _ctx.roles.superAdmin ? (openBlock(), createElementBlock("div", _hoisted_44, [
        createVNode(_component_router_link, { to: { name: "permissions" } }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_45, [
              _hoisted_46,
              createBaseVNode("div", null, [
                createBaseVNode("p", _hoisted_47, [
                  $data.loading ? (openBlock(), createElementBlock("span", _hoisted_48)) : createCommentVNode("", true),
                  !$data.loading ? (openBlock(), createElementBlock("span", _hoisted_49, toDisplayString($data.permissionsData.length), 1)) : createCommentVNode("", true)
                ]),
                _hoisted_50
              ])
            ])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const Admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a517637"]]);
export {
  Admin as default
};
