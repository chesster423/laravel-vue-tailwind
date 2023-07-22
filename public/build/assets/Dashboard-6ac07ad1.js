import { ae as defineComponent, af as hyphenate, ag as h, ah as hasOwn, a as mapGetters, r as resolveComponent, y as resolveDirective, o as openBlock, c as createElementBlock, z as createBlock, w as withCtx, E as createTextVNode, B as toDisplayString, D as createCommentVNode, C as withDirectives, ai as render, m as mapState, e as createBaseVNode, d as createVNode, J as Fragment, K as renderList, n as normalizeClass } from "./vendor-506bc2e6.js";
import { R as RolesBadges } from "./RolesBadges-1d900542.js";
import { a as __vitePreload, t as track, _ as _export_sfc, g as greeting, p as providerIcon, b as parseDisplayDate } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const GithubButton = defineComponent({
  name: "github-button",
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String
  },
  render: function() {
    const props = { ref: "_" };
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key];
    }
    return h("span", [
      hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)
    ]);
  },
  mounted: function() {
    this.paint();
  },
  beforeUpdate: function() {
    this.reset();
  },
  updated: function() {
    this.paint();
  },
  beforeUnmount: function() {
    this.reset();
  },
  methods: {
    paint: function() {
      const _ = this.$el.appendChild(document.createElement("span"));
      const _this = this;
      __vitePreload(() => import(
        /* webpackMode: "eager" */
        "./buttons.esm-98bdff6e.js"
      ), true ? [] : void 0).then(function(module) {
        module.render(_.appendChild(_this.$refs._), function(el) {
          try {
            _.parentNode.replaceChild(el, _);
          } catch (_2) {
          }
        });
      });
    },
    reset: function() {
      this.$el.replaceChild(this.$refs._, this.$el.lastChild);
    }
  }
});
const _sfc_main$1 = {
  name: "GHButtons",
  components: { GithubButton },
  props: {
    serviceName: { type: String, default: "GitHub" },
    lightVariant: { type: String, default: "light" },
    // light_high_contrast
    darkVariant: { type: String, default: "dark_high_contrast" },
    // dark dark_dimmed
    ghBaseUrl: { type: String, default: "https://github.com/" },
    ghUser: { type: String, default: "jeremykenedy" },
    ghRepo: { type: String, default: "laravel-spa" },
    size: { type: String, default: "large" },
    showTips: { type: Boolean, default: false },
    showCount: { type: Boolean, default: false },
    showFollow: { type: Boolean, default: false },
    showStar: { type: Boolean, default: false },
    showFork: { type: Boolean, default: false },
    showIssue: { type: Boolean, default: false },
    showWatch: { type: Boolean, default: false },
    showSponsor: { type: Boolean, default: false },
    showDownload: { type: Boolean, default: false },
    followTitle: { type: String, default: "Follow @" },
    starIcon: { type: String, default: "octicon-star" },
    starTitle: { type: String, default: "Star" },
    forkIcon: { type: String, default: "octicon-repo-forked" },
    forkTitle: { type: String, default: "Fork" },
    issueIcon: { type: String, default: "octicon-issue-opened" },
    issueTitle: { type: String, default: "Issue" },
    watchIcon: { type: String, default: "octicon-eye" },
    watchTitle: { type: String, default: "Watch" },
    downloadIcon: { type: String, default: "octicon-download" },
    downloadTitle: { type: String, default: "Download" },
    sponsorTitle: { type: String, default: "Sponsor" },
    sponsorIcon: { type: String, default: "octicon-heart" },
    frequency: { type: String, default: "recurring" }
    // one-time
  },
  computed: {
    ...mapGetters({
      user: "auth/user"
    }),
    darkTheme() {
      if (this.user && this.user.theme_dark) {
        return true;
      }
      return false;
    },
    showCountString() {
      return this.showCount.toString();
    }
  },
  methods: {
    track
  }
};
const _hoisted_1$1 = { class: "github-buttons" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_github_button = resolveComponent("github-button");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    $props.showFollow && $props.ghUser ? (openBlock(), createBlock(_component_github_button, {
      key: 0,
      href: $props.ghBaseUrl + $props.ghUser,
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.followTitle + $props.ghUser + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.track("Clicked " + $props.followTitle + $props.ghUser + " on " + $props.serviceName))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.followTitle) + toDisplayString($props.ghUser), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-size", "data-show-count", "aria-label"])) : createCommentVNode("", true),
    $props.showStar && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 1,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo,
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.starIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[1] || (_cache[1] = ($event) => $options.track(
        "Clicked " + $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.starTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showFork && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 2,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/fork",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.forkIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.forkTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[2] || (_cache[2] = ($event) => $options.track(
        "Clicked " + $props.forkTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.forkTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showIssue && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 3,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/issues",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.issueIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.issueTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[3] || (_cache[3] = ($event) => $options.track(
        "Clicked " + $props.issueTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.issueTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? "Show " + $props.issueTitle + " for " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showWatch && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 4,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/subscription",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.watchIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.watchTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[4] || (_cache[4] = ($event) => $options.track(
        "Clicked " + $props.watchTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.watchTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.watchTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showSponsor && $props.ghUser ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 5,
      href: $props.ghBaseUrl + "sponsors/" + $props.ghUser,
      "data-icon": $props.sponsorIcon,
      "data-size": $props.size,
      "aria-label": "Sponsor @" + $props.ghUser + " on GitHub",
      class: "gh-button",
      onClick: _cache[5] || (_cache[5] = ($event) => $options.track(
        "Clicked " + $props.sponsorTitle + " " + $props.ghBaseUrl + "sponsors/" + $props.ghUser
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.sponsorTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-icon", "data-size", "aria-label"])), [
      [_directive_tippy, $props.showTips ? "Sponsor @" + $props.ghUser + " on GitHub" : null]
    ]) : createCommentVNode("", true),
    $props.showDownload && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 6,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/archive/HEAD.zip",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.downloadIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.downloadTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " directly from " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[6] || (_cache[6] = ($event) => $options.track(
        "Clicked " + $props.downloadTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " directly from " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.downloadTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.downloadTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " directly from " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true)
  ]);
}
const GHButtons = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "Dashboard",
  components: {
    RolesBadges,
    PowerIcon: render,
    GHButtons
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user
    }),
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles",
      logins: "auth/logins"
    }),
    socialLoginsEnabled() {
      if (Object.values(this.logins).find((v) => v == "1")) {
        return true;
      }
      return false;
    },
    allowedProviders() {
      const providers = [];
      for (const key in this.logins) {
        if (this.logins[key] != false && this.logins[key] != "0") {
          providers.push(key);
        }
      }
      return providers.sort();
    },
    enabledProviders() {
      const providers = [];
      this.user.providers.forEach((provider, index) => {
        const found = this.allowedProviders.find((p) => p == provider.provider);
        if (found) {
          providers.push(provider);
        }
      });
      return providers;
    },
    disabledProviders() {
      let providers = this.allowedProviders;
      this.user.providers.forEach((provider, index) => {
        providers = providers.filter((p) => p != provider.provider);
      });
      return providers;
    },
    routeName() {
      return this.$route.name;
    }
  },
  mounted() {
  },
  methods: {
    greeting,
    providerIcon,
    parseDisplayDate
  }
};
const _hoisted_1 = { class: "mx-auto max-w-screen-lg text-gray-900" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = { class: "w-auto rounded border dark:border-gray-600" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b p-4 font-semibold dark:border-gray-600 dark:text-gray-200" }, " Dashboard ", -1);
const _hoisted_6 = { class: "rounded bg-white p-4 dark:bg-slate-800 dark:text-gray-300" };
const _hoisted_7 = { class: "mb-4 mt-4 hidden text-center lg:text-2xl" };
const _hoisted_8 = {
  key: 0,
  class: "mb-6 hidden text-center"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("hr", { class: "mx-auto mb-3 w-10" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", { class: "mb-5" }, "Your Roles", -1);
const _hoisted_11 = { key: 1 };
const _hoisted_12 = {
  key: 0,
  class: "rounded-lg bg-slate-100 p-10 text-center text-gray-600 transition duration-200 ease-in-out hover:bg-slate-200 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-slate-700 hover:dark:text-white"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-lg" }, " No applications are integrated into your account. ", -1);
const _hoisted_14 = { key: 1 };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("hr", { class: "mx-auto mb-3 w-10" }, null, -1);
const _hoisted_16 = { class: "mb-5 text-center" };
const _hoisted_17 = { class: "grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" };
const _hoisted_18 = { class: "flex flex-col items-center pb-4 pl-2 pr-2 pt-4" };
const _hoisted_19 = { class: "mb-0 text-lg font-extrabold capitalize text-gray-900 dark:text-white" };
const _hoisted_20 = {
  key: 0,
  class: "mb-1 mb-3 text-gray-600 dark:text-gray-400",
  style: { "line-height": "1.2", "font-size": "0.6em" }
};
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold uppercase text-gray-700 dark:text-gray-200" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "far fa-clock" }),
  /* @__PURE__ */ createTextVNode(" First Used: ")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_23 = {
  key: 1,
  class: "mb-0 text-gray-600 dark:text-gray-400",
  style: { "line-height": "1.2", "font-size": "0.6em" }
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold uppercase text-gray-700 dark:text-gray-200" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "far fa-clock" }),
  /* @__PURE__ */ createTextVNode(" Last Used: ")
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RolesBadges = resolveComponent("RolesBadges");
  const _component_PowerIcon = resolveComponent("PowerIcon");
  const _component_router_link = resolveComponent("router-link");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("h1", _hoisted_7, toDisplayString($options.greeting()) + ", " + toDisplayString(_ctx.user && _ctx.user.name ? _ctx.user.name : "Registered User") + "! ", 1),
            _ctx.roles ? (openBlock(), createElementBlock("div", _hoisted_8, [
              _hoisted_9,
              _hoisted_10,
              createVNode(_component_RolesBadges, { roles: _ctx.roles }, null, 8, ["roles"])
            ])) : createCommentVNode("", true),
            $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_11, [
              withDirectives((openBlock(), createBlock(_component_router_link, { to: { name: "account" } }, {
                default: withCtx(() => [
                  _ctx.user.providers.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
                    createBaseVNode("div", null, [
                      createVNode(_component_PowerIcon, { class: "mb-4 ml-auto mr-auto h-12 w-12" })
                    ]),
                    _hoisted_13
                  ])) : createCommentVNode("", true),
                  _ctx.user.providers.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    _hoisted_15,
                    createBaseVNode("h3", _hoisted_16, toDisplayString(_ctx.user.providers.length) + " Application " + toDisplayString(_ctx.user.providers.length != 1 ? "s" : "") + " integrated into your account ", 1),
                    createBaseVNode("div", _hoisted_17, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($options.enabledProviders, (provider, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: provider + "_" + index,
                          class: "mb-1 w-full rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-900 hover:dark:bg-slate-700"
                        }, [
                          createBaseVNode("div", _hoisted_18, [
                            createBaseVNode("span", {
                              class: normalizeClass(["fa-4x mb-2", $options.providerIcon(provider.provider)])
                            }, null, 2),
                            createBaseVNode("h5", _hoisted_19, toDisplayString(provider.provider), 1),
                            provider.created_at ? (openBlock(), createElementBlock("div", _hoisted_20, [
                              _hoisted_21,
                              _hoisted_22,
                              createTextVNode(" " + toDisplayString($options.parseDisplayDate(provider.created_at)), 1)
                            ])) : createCommentVNode("", true),
                            provider.updated_at ? (openBlock(), createElementBlock("div", _hoisted_23, [
                              _hoisted_24,
                              _hoisted_25,
                              createTextVNode(" " + toDisplayString($options.parseDisplayDate(provider.updated_at)), 1)
                            ])) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })), [
                [_directive_tippy, "Go to application service providers"]
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ])
    ])
  ]);
}
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Dashboard as default
};
