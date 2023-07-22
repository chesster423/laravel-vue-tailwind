import { ap as render, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, Z as renderSlot, D as createCommentVNode, d as createVNode, B as toDisplayString, z as createBlock, aq as render$1, a as mapGetters, b as mapActions, n as normalizeClass, E as createTextVNode, ai as render$2, m as mapState, Q as axios, y as resolveDirective, J as Fragment, K as renderList, C as withDirectives, ar as render$3, v as render$4, H as pushScopeId, I as popScopeId } from "./vendor-506bc2e6.js";
import { t as track, _ as _export_sfc, b as parseDisplayDate, c as capitalizeFirstLetter, p as providerIcon } from "./app-a3809c34.js";
import "./vue-axios.esm.min-fa86a92f.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$6 = {
  name: "AppDeleteModal",
  components: {
    ExclamationTriangleIcon: render
  },
  props: {
    show: { type: Boolean, default: false },
    showIcon: { type: Boolean, default: true },
    showCancelButton: { type: Boolean, default: true },
    cancelText: { type: String, default: "Cancel" },
    showConfirmButton: { type: Boolean, default: true },
    confirmText: { type: String, default: "Confirm Delete" },
    title: { type: String, default: "Delete account" },
    text: {
      type: String,
      default: "Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."
    }
  },
  data() {
    return {
      blank: "AppDeleteModal"
    };
  },
  computed: {
    hasBodySlot() {
      return this.$slots.body;
    },
    hasFooterSlot() {
      return this.$slots.footer;
    }
  },
  methods: {
    track
  }
};
const _hoisted_1$4 = {
  key: 0,
  class: "relative z-10",
  "aria-labelledby": "modal-title",
  role: "dialog",
  "aria-modal": "true"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("div", { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-700 dark:bg-opacity-75" }, null, -1);
const _hoisted_3$4 = { class: "fixed inset-0 z-10 overflow-y-auto" };
const _hoisted_4$3 = { class: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" };
const _hoisted_5$2 = { class: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-slate-900 sm:my-8 sm:w-full sm:max-w-lg" };
const _hoisted_6$1 = { class: "bg-white px-4 pb-4 pt-5 dark:bg-slate-900 sm:p-6 sm:pb-4" };
const _hoisted_7$1 = {
  key: 0,
  class: "px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
};
const _hoisted_8$1 = {
  key: 1,
  class: "sm:flex sm:items-start"
};
const _hoisted_9$1 = {
  key: 0,
  class: "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
};
const _hoisted_10$1 = { class: "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left" };
const _hoisted_11$1 = {
  id: "modal-title",
  class: "mb-4 mt-0 text-lg font-medium leading-6 text-red-500 dark:text-red-400"
};
const _hoisted_12$1 = { class: "mt-2" };
const _hoisted_13$1 = { class: "text-sm text-gray-700 dark:text-gray-300" };
const _hoisted_14$1 = {
  key: 0,
  class: "px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
};
const _hoisted_15$1 = {
  key: 1,
  class: "flex justify-between px-4 py-3 sm:px-6"
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ExclamationTriangleIcon = resolveComponent("ExclamationTriangleIcon");
  const _component_AppButton = resolveComponent("AppButton");
  return $props.show ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
    _hoisted_2$4,
    createBaseVNode("div", _hoisted_3$4, [
      createBaseVNode("div", _hoisted_4$3, [
        createBaseVNode("div", _hoisted_5$2, [
          createBaseVNode("div", _hoisted_6$1, [
            $options.hasBodySlot ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
              $options.hasBodySlot ? renderSlot(_ctx.$slots, "body", { key: 0 }) : createCommentVNode("", true)
            ])) : (openBlock(), createElementBlock("div", _hoisted_8$1, [
              $props.showIcon ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                createVNode(_component_ExclamationTriangleIcon, { class: "h-6 w-6 text-red-500" })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_10$1, [
                createBaseVNode("h3", _hoisted_11$1, toDisplayString($props.title), 1),
                createBaseVNode("div", _hoisted_12$1, [
                  createBaseVNode("p", _hoisted_13$1, toDisplayString($props.text), 1)
                ])
              ])
            ]))
          ]),
          $options.hasFooterSlot ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
            $options.hasFooterSlot ? renderSlot(_ctx.$slots, "footer", { key: 0 }) : createCommentVNode("", true)
          ])) : (openBlock(), createElementBlock("div", _hoisted_15$1, [
            $props.showCancelButton ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              text: $props.cancelText,
              class: "mr-3",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("cancel"))
            }, null, 8, ["text"])) : createCommentVNode("", true),
            $props.showConfirmButton ? (openBlock(), createBlock(_component_AppButton, {
              key: 1,
              danger: "",
              text: $props.confirmText,
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("confirm"))
            }, null, 8, ["text"])) : createCommentVNode("", true)
          ]))
        ])
      ])
    ])
  ])) : createCommentVNode("", true);
}
const AppDeleteModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  name: "AccountAdministration",
  components: {
    AppDeleteModal,
    ShieldExclamationIcon: render$1
  },
  props: {},
  data() {
    return {
      showDeleteModal: false,
      readyToDelete: false,
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast",
      deleteAccount: "auth/deleteAccount"
    }),
    confirm() {
      const self = this;
      self.loading = true;
      self.deleteAccount(this.user).then((response) => {
        self.popToast({
          message: "Account deleted successfully. We will miss you!",
          timer: 5e4,
          icon: "success"
        });
        self.loading = false;
        self.showDeleteModal = false;
      }).catch((err) => {
        self.popToast({
          message: "Error deleteding account",
          timer: 1e4,
          icon: "error"
        });
        self.loading = false;
        self.showDeleteModal = false;
      });
    }
  }
};
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", { class: "mb-5 text-center text-lg text-red-500" }, "Delete Account", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-3 text-center text-red-600" }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "fa fa-exclamation-triangle fa-fw mr-3",
    "aria-hidden": "true"
  }),
  /* @__PURE__ */ createBaseVNode("strong", null, "Deleting"),
  /* @__PURE__ */ createTextVNode(" your account is "),
  /* @__PURE__ */ createBaseVNode("u", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "permanent")
  ]),
  /* @__PURE__ */ createTextVNode(" and "),
  /* @__PURE__ */ createBaseVNode("u", null, [
    /* @__PURE__ */ createBaseVNode("strong", null, "cannot")
  ]),
  /* @__PURE__ */ createTextVNode(" be undone. "),
  /* @__PURE__ */ createBaseVNode("span", {
    class: "fa fa-exclamation-triangle fa-fw ml-3",
    "aria-hidden": "true"
  })
], -1);
const _hoisted_3$3 = { class: "mb-7 text-center" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ShieldExclamationIcon = resolveComponent("ShieldExclamationIcon");
  const _component_AppSwitch = resolveComponent("AppSwitch");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_AppDeleteModal = resolveComponent("AppDeleteModal");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_ShieldExclamationIcon, { class: "mb-5 ml-auto mr-auto mt-6 h-14 w-14 text-red-500" }),
    _hoisted_1$3,
    _hoisted_2$3,
    createBaseVNode("div", {
      class: normalizeClass(["mb-4 content-center rounded p-4 text-center", $data.readyToDelete ? "font-bold text-red-500" : "text-yellow-600"])
    }, [
      createVNode(_component_AppSwitch, {
        enabled: $data.readyToDelete,
        class: normalizeClass($data.loading ? "disabled" : ""),
        disabled: $data.loading,
        onClick: _cache[0] || (_cache[0] = ($event) => $data.readyToDelete = !$data.readyToDelete)
      }, null, 8, ["enabled", "class", "disabled"]),
      createBaseVNode("h3", {
        style: { "vertical-align": "4px" },
        class: "ml-3 inline-block cursor-pointer",
        onClick: _cache[1] || (_cache[1] = ($event) => $data.readyToDelete = !$data.readyToDelete)
      }, toDisplayString($data.readyToDelete ? "Ready To Delete" : "Not Ready To Delete"), 1)
    ], 2),
    createBaseVNode("div", _hoisted_3$3, [
      createVNode(_component_AppButton, {
        danger: "",
        text: "Delete My Account",
        disabled: !$data.readyToDelete || $data.loading,
        onClick: _cache[2] || (_cache[2] = ($event) => $data.showDeleteModal = true)
      }, null, 8, ["disabled"])
    ]),
    createVNode(_component_AppDeleteModal, {
      show: $data.showDeleteModal,
      onCancel: _cache[3] || (_cache[3] = ($event) => $data.showDeleteModal = false),
      onConfirm: _cache[4] || (_cache[4] = ($event) => $options.confirm())
    }, null, 8, ["show"])
  ]);
}
const AccountAdministration = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {
  name: "AccountAuthentication",
  components: {
    PowerIcon: render$2
  },
  props: {},
  data() {
    return {
      loading: false,
      window: {},
      authWindowTitle: "Authentication Provider Authorization"
    };
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
    }
  },
  mounted() {
    window.addEventListener("message", this.onMessage, false);
  },
  beforeUnmount() {
    window.removeEventListener("message", this.onMessage);
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast",
      revokeProvider: "auth/revokeProvider",
      fetchOauthUrl: "auth/fetchOauthUrl",
      getUser: "auth/getUser"
    }),
    track,
    parseDisplayDate,
    capitalizeFirstLetter,
    providerIcon,
    providerConnected(provider, user) {
      const found = user.providers.find((p) => p.provider == provider);
      if (found) {
        return found;
      }
      return false;
    },
    triggerRevoke(provider) {
      const self = this;
      const title = "<strong>Revoke ";
      `${self.capitalizeFirstLetter(provider.provider)}?</strong>`;
      const html = `Are you sure you want to <strong>Revoke</strong><br>${self.capitalizeFirstLetter(
        provider.provider
      )} Authentication?<br><br><small><span class="far fa-clock fa-fw fa-xs mr-1"></span>First Used: ${self.parseDisplayDate(
        provider.created_at
      )}</small><br><small><span class="far fa-clock fa-fw fa-xs mr-1"></span>Last Used: ${self.parseDisplayDate(
        provider.updated_at
      )}</small>`;
      const icon = "warning";
      const confirmButtonColor = "#FF0000";
      const denyButtonColor = "#777777";
      const confirmButtonText = "Confirm Revoke";
      const denyButtonText = "Cancel";
      self.$swal.fire({
        title,
        icon,
        html,
        showCancelButton: false,
        showDenyButton: true,
        confirmButtonColor,
        denyButtonColor,
        confirmButtonText,
        denyButtonText
      }).then((result) => {
        if (result.isConfirmed) {
          self.revokeProvider(provider).then((response) => {
            self.popToast({
              message: "Provider successfully revoked",
              timer: 5e3,
              icon: "success"
            });
          }).catch((err) => {
            self.popToast({
              message: "Error revoking provider",
              timer: 1e4,
              icon: "error"
            });
          });
        } else if (result.isDenied)
          ;
      });
    },
    async triggerConnect(provider) {
      this.track(
        `Social Login Provider Clicked: ${provider}`,
        "clicked",
        "user-account"
      );
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
          `Social Provider Failed to Authorize: ${provider}`,
          "error",
          "auth-error"
        );
        this.popToast({
          message: "Failed authorize provider.",
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
      if (e.data.token && e.data.token == "cannot_add") {
        self.popToast({
          message: "Unable to authorize provider",
          timer: 5e3,
          icon: "error"
        });
      } else {
        self.popToast({
          message: "Successfully authorized provider",
          timer: 2500,
          icon: "success"
        });
        self.getUser().then((response) => {
        });
      }
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
const _hoisted_1$2 = {
  key: 0,
  class: "p-10 text-center text-gray-600"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-lg" }, "No applications are available for integration.", -1);
const _hoisted_3$2 = { key: 1 };
const _hoisted_4$2 = { class: "grid grid-cols-1 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white sm:grid-cols-2 lg:grid-cols-3" };
const _hoisted_5$1 = { class: "flex flex-col items-center pb-4 pl-2 pr-2 pt-4" };
const _hoisted_6 = { class: "mb-0 text-lg font-extrabold capitalize text-gray-900 dark:text-white" };
const _hoisted_7 = {
  key: 0,
  class: "mb-1 mb-3 text-gray-600 dark:text-gray-400",
  style: { "line-height": "1.2", "font-size": "0.6em" }
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold uppercase text-gray-700 dark:text-gray-200" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "far fa-clock" }),
  /* @__PURE__ */ createTextVNode(" First Used: ")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_10 = {
  key: 1,
  class: "mb-0 text-gray-600 dark:text-gray-400",
  style: { "line-height": "1.2", "font-size": "0.6em" }
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold uppercase text-gray-700 dark:text-gray-200" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "far fa-clock" }),
  /* @__PURE__ */ createTextVNode(" Last Used: ")
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_13 = { class: "mt-4 flex space-x-3 md:mt-3" };
const _hoisted_14 = { class: "flex flex-col items-center pb-4 pl-2 pr-2 pt-4" };
const _hoisted_15 = { class: "mb-2 text-lg font-extrabold capitalize text-gray-900 dark:text-white" };
const _hoisted_16 = { class: "mb-5 mt-4 flex space-x-3 md:mt-5" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "clear-both" }, null, -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PowerIcon = resolveComponent("PowerIcon");
  const _component_AppButton = resolveComponent("AppButton");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", null, [
    !$options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
      createBaseVNode("div", null, [
        createVNode(_component_PowerIcon, { class: "mb-4 ml-auto mr-auto h-12 w-12" })
      ]),
      _hoisted_2$2
    ])) : createCommentVNode("", true),
    $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
      createBaseVNode("div", _hoisted_4$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.enabledProviders, (provider, index) => {
          return openBlock(), createElementBlock("div", {
            key: provider + "_" + index,
            class: "mb-1 w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-900 dark:bg-gray-900"
          }, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("span", {
                class: normalizeClass(["fa-4x mb-2", $options.providerIcon(provider.provider)])
              }, null, 2),
              createBaseVNode("h5", _hoisted_6, toDisplayString(provider.provider), 1),
              provider.created_at ? (openBlock(), createElementBlock("div", _hoisted_7, [
                _hoisted_8,
                _hoisted_9,
                createTextVNode(" " + toDisplayString($options.parseDisplayDate(provider.created_at)), 1)
              ])) : createCommentVNode("", true),
              provider.updated_at ? (openBlock(), createElementBlock("div", _hoisted_10, [
                _hoisted_11,
                _hoisted_12,
                createTextVNode(" " + toDisplayString($options.parseDisplayDate(provider.updated_at)), 1)
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_13, [
                withDirectives(createVNode(_component_AppButton, {
                  danger: "",
                  text: "Revoke",
                  icon: "fa-solid fa-xmark fa-fw",
                  onClick: ($event) => $options.triggerRevoke(provider)
                }, null, 8, ["onClick"]), [
                  [
                    _directive_tippy,
                    "Disconnect " + $options.capitalizeFirstLetter(provider.provider) + " from your account."
                  ]
                ])
              ])
            ])
          ]);
        }), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.disabledProviders, (provider, index) => {
          return openBlock(), createElementBlock("div", {
            key: provider + "_" + index,
            class: "mb-1 w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-900 dark:bg-gray-900"
          }, [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("span", {
                class: normalizeClass(["fa-4x mb-2", $options.providerIcon(provider)])
              }, null, 2),
              createBaseVNode("h5", _hoisted_15, toDisplayString(provider), 1),
              createBaseVNode("div", _hoisted_16, [
                withDirectives(createVNode(_component_AppButton, {
                  accent: "",
                  text: "Connect",
                  icon: "fa-solid fa-plug-circle-plus fw-fw",
                  onClick: ($event) => $options.triggerConnect(provider)
                }, null, 8, ["onClick"]), [
                  [
                    _directive_tippy,
                    "Connect " + $options.capitalizeFirstLetter(provider) + " to your account."
                  ]
                ])
              ])
            ])
          ]);
        }), 128))
      ])
    ])) : createCommentVNode("", true),
    _hoisted_17
  ]);
}
const AccountAuthentication = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "UserDownloadData",
  components: {},
  props: {},
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user
    })
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    track,
    async triggerUserDataDownload() {
      this.loading = true;
      try {
        const response = await axios.post(`/api/user/${this.user.id}/data`);
        if (response && response.data && response.data.status && response.data.status == "success") {
          this.loading = false;
          this.userDataDownloadConfirmed();
          this.track(
            "User Triggered Data Download Successfully",
            "user actions",
            "trigger download success"
          );
        } else {
          this.loading = false;
          this.popToast({
            message: "Failed to trigger data download.",
            timer: 1e4,
            icon: "error"
          });
        }
      } catch (e) {
        this.loading = false;
        this.popToast({
          message: "Failed to trigger data download.",
          timer: 1e4,
          icon: "error"
        });
      }
    },
    userDataDownloadConfirmed() {
      this.$swal.fire({
        title: "Success!",
        icon: "success",
        html: `Your data will be ready for download shortly. <br>A download link has been sent to your email <br>${this.user.email}`,
        showCancelButton: false,
        showDenyButton: false,
        confirmButtonColor: "#008000",
        confirmButtonText: "Dismiss"
      }).then((result) => {
        if (result.isConfirmed)
          ;
        else if (result.isDenied)
          ;
      });
    }
  }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createBlock(_component_AppButton, {
    primary: "",
    text: "Process Download",
    loading: $data.loading,
    class: "inline-flex items-center justify-center px-5 py-3",
    icon: $data.loading ? "fa fa-circle-notch fa-spin" : "fa fa-download",
    onClick: _cache[0] || (_cache[0] = ($event) => $options.triggerUserDataDownload())
  }, null, 8, ["loading", "icon"]);
}
const UserDownloadData = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "AccountData",
  components: {
    UserDownloadData
  }
};
const _hoisted_1$1 = { class: "" };
const _hoisted_2$1 = { class: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "block" }, [
    /* @__PURE__ */ createTextVNode(" Your Data "),
    /* @__PURE__ */ createBaseVNode("span", { class: "text-indigo-600" }, "On Demand")
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "block text-gray-700 dark:text-gray-500" }, "Download your user data.")
], -1);
const _hoisted_4$1 = { class: "mt-8 flex lg:mt-0 lg:flex-shrink-0" };
const _hoisted_5 = { class: "inline-flex rounded-md shadow" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UserDownloadData = resolveComponent("UserDownloadData");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _hoisted_3$1,
      createBaseVNode("div", _hoisted_4$1, [
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_UserDownloadData)
        ])
      ])
    ])
  ]);
}
const AccountData = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "AccountPrivacy",
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      blank: "AccountPrivacy"
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
const AccountPrivacy_vue_vue_type_style_index_0_scoped_6c581770_lang = "";
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("h1", null, toDisplayString($data.blank), 1)
  ]);
}
const AccountPrivacy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6c581770"]]);
const Account_vue_vue_type_style_index_0_scoped_7479a1d1_lang = "";
const _sfc_main = {
  components: {
    ShieldExclamationIcon: render$1,
    CircleStackIcon: render$3,
    UserCircleIcon: render$4,
    ExclamationTriangleIcon: render,
    AccountAdministration,
    AccountAuthentication,
    AccountData,
    AccountPrivacy
  },
  data() {
    return {
      activeTab: "authentication"
    };
  },
  computed: {},
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    track,
    changeTab(tab) {
      this.activeTab = tab;
      this.track(`clicked tab: ${tab}`);
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-7479a1d1"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "rounded-t border-b p-4 font-semibold dark:border-gray-600 dark:bg-slate-800" }, " Account ", -1));
const _hoisted_2 = { class: "rounded-b-lg bg-white p-4 dark:bg-slate-800" };
const _hoisted_3 = { class: "border-b-2 border-gray-200 dark:border-gray-700" };
const _hoisted_4 = { class: "flex flex-wrap justify-evenly text-center text-sm font-medium text-gray-500 dark:text-gray-400" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_CircleStackIcon = resolveComponent("CircleStackIcon");
  const _component_ExclamationTriangleIcon = resolveComponent("ExclamationTriangleIcon");
  const _component_AccountAuthentication = resolveComponent("AccountAuthentication");
  const _component_AccountData = resolveComponent("AccountData");
  const _component_AccountPrivacy = resolveComponent("AccountPrivacy");
  const _component_AccountAdministration = resolveComponent("AccountAdministration");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("ul", _hoisted_4, [
          createBaseVNode("li", {
            class: "mr-2 cursor-pointer",
            style: { "margin-top": "3px", "margin-bottom": "-2px" },
            onClick: _cache[0] || (_cache[0] = ($event) => $options.changeTab("authentication"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass([
                "group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300",
                $data.activeTab == "authentication" ? "active border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500" : ""
              ])
            }, [
              createVNode(_component_UserCircleIcon, { class: "mr-1 h-5 w-5" }),
              createTextVNode(" Authentication ")
            ], 2)
          ]),
          createBaseVNode("li", {
            class: "mr-2 cursor-pointer",
            style: { "margin-top": "3px", "margin-bottom": "-2px" },
            onClick: _cache[1] || (_cache[1] = ($event) => $options.changeTab("data"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass([
                "group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300",
                $data.activeTab == "data" ? "active border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500" : ""
              ])
            }, [
              createVNode(_component_CircleStackIcon, { class: "mr-1 h-5 w-5" }),
              createTextVNode(" Data ")
            ], 2)
          ]),
          createBaseVNode("li", {
            class: "mr-2 cursor-pointer",
            style: { "margin-top": "3px", "margin-bottom": "-2px" },
            onClick: _cache[2] || (_cache[2] = ($event) => $options.changeTab("administration"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass([
                "group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300",
                $data.activeTab == "administration" ? "active border-red-600 text-red-600 dark:border-red-500 dark:text-red-500" : ""
              ])
            }, [
              createVNode(_component_ExclamationTriangleIcon, { class: "mr-1 h-5 w-5" }),
              createTextVNode(" Administration ")
            ], 2)
          ])
        ])
      ]),
      createBaseVNode("div", {
        class: normalizeClass([
          "rounded-b-lg bg-gray-50 p-4",
          $data.activeTab == "administration" ? "dark:bg-gray-900" : "dark:bg-gray-800"
        ])
      }, [
        $data.activeTab == "authentication" ? (openBlock(), createBlock(_component_AccountAuthentication, { key: 0 })) : createCommentVNode("", true),
        $data.activeTab == "data" ? (openBlock(), createBlock(_component_AccountData, { key: 1 })) : createCommentVNode("", true),
        $data.activeTab == "privacy" ? (openBlock(), createBlock(_component_AccountPrivacy, { key: 2 })) : createCommentVNode("", true),
        $data.activeTab == "administration" ? (openBlock(), createBlock(_component_AccountAdministration, { key: 3 })) : createCommentVNode("", true)
      ], 2)
    ])
  ], 64);
}
const Account = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7479a1d1"]]);
export {
  Account as default
};
