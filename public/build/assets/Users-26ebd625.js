import { C as CircleSvg, _ as _export_sfc } from "./app-a3809c34.js";
import { aA as render, aB as render$1, aC as render$2, aD as render$3, v as render$4, b as mapActions, h as hooks, r as resolveComponent, y as resolveDirective, o as openBlock, c as createElementBlock, e as createBaseVNode, B as toDisplayString, J as Fragment, K as renderList, D as createCommentVNode, n as normalizeClass, z as createBlock, w as withCtx, d as createVNode, C as withDirectives, a as mapGetters, Q as axios, E as createTextVNode, ad as vModelText, G as withModifiers, H as pushScopeId, I as popScopeId, az as render$5, aE as render$6 } from "./vendor-506bc2e6.js";
import { P as Pagination, A as AppModal, c as clonedeep, a as PerPage } from "./default.css_vue_type_style_index_0_src_true_lang-1251d036.js";
import { s as script } from "./multiselect-da0ca839.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$3 = {
  name: "UsersTableRow",
  components: {
    LockClosedIcon: render,
    LockOpenIcon: render$1,
    CircleSvg,
    PencilSquareIcon: render$2,
    TrashIcon: render$3,
    UserCircleIcon: render$4
  },
  props: {
    user: { type: Object, required: true },
    dataReady: { type: Boolean, default: false },
    availableRoles: { type: Array, default: null },
    lockJiggled: { type: Boolean, default: false }
  },
  setup() {
    return {};
  },
  data() {
    return {
      locked: true
    };
  },
  computed: {},
  watch: {
    lockJiggled(jiggled) {
      this.locked = true;
    }
  },
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
    roleClass(slug) {
      if (slug == "admin") {
        return "bg-orange-100 text-orange-800 dark:bg-orange-700 dark:text-gray-100";
      }
      if (slug == "super.admin") {
        return "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-gray-100";
      }
      if (slug == "user") {
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-gray-100";
      }
      if (slug == "editor") {
        return "bg-green-100 text-green-800 dark:bg-green-700 dark:text-gray-100";
      }
      if (slug == "moderator") {
        return "bg-red-100 text-red-800 dark:bg-red-700 dark:text-gray-100";
      }
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100";
    },
    parseDisplayDate(date) {
      return hooks(date).format("MMM Do YYYY, h:mma");
    },
    fireVerification() {
      const self = this;
      const verified = this.user.email_verified_at;
      let title = `<strong>Verify ${this.user.name}?</strong>`;
      let html = "Are you sure you want to <strong>Verify";
      `${this.user.name}</strong>?<small> (${this.user.email})</small>`;
      let icon = "warning";
      let confirmButtonColor = "#FF0000";
      let denyButtonColor = "#777777";
      let confirmButtonText = "Verify";
      let denyButtonText = "Cancel";
      if (verified) {
        title = `<strong>Un-Verify ${this.user.name}?</strong>`;
        html = "Are you sure you want to <strong>Un-Verify";
        `${this.user.name}</strong>?<small> (${this.user.email})</small>`;
        icon = "warning";
        confirmButtonColor = "#FF0000";
        denyButtonColor = "#777777";
        confirmButtonText = "Un-Verify";
        denyButtonText = "Cancel";
      }
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
          if (verified) {
            this.$emit("confirmUnVerifyUser", this.user);
          } else {
            this.$emit("confirmVerifyUser", this.user);
          }
        } else if (result.isDenied) {
          self.popToast({
            message: "Cancelled",
            timer: 2e3,
            icon: "error"
          });
        }
      });
    },
    triggerEditUser() {
      this.$emit("editUser", this.user);
    },
    triggerDeleteUser() {
      const self = this;
      const title = `<strong>Delete ${this.user.name}?</strong>`;
      const html = "Are you sure you want to <strong>Delete";
      `${this.user.name}</strong>?<small> (${this.user.email})</small><h6>This will delete the user.</h6>`;
      const icon = "warning";
      const confirmButtonColor = "#FF0000";
      const denyButtonColor = "#777777";
      const confirmButtonText = "Delete";
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
          this.$emit("deleteUser", this.user);
        } else if (result.isDenied) {
          self.popToast({
            message: "Cancelled",
            timer: 2e3,
            icon: "error"
          });
        }
      });
    },
    triggerUserConfirmEmail() {
      const self = this;
      const title = `<strong>Send ${this.user.name} verification email</strong>`;
      const html = "Are you sure you want to <strong>Send ";
      `${this.user.name}<small> (${this.user.email})</small> a Verification Email</strong>?<h6>This will send the user an email.</h6>`;
      const icon = "info";
      const confirmButtonColor = "#10b981";
      const denyButtonColor = "#777777";
      const confirmButtonText = "Confirm Send";
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
          this.$emit("sendUserVerification", this.user);
        } else if (result.isDenied) {
          self.popToast({
            message: "Cancelled",
            timer: 2e3,
            icon: "error"
          });
        }
      });
    },
    triggerImpersonateUser() {
      this.$emit("impersonateUserTriggered", this.user);
    }
  }
};
const _hoisted_1$3 = { class: "bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100" };
const _hoisted_2$3 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_3$3 = { class: "flex items-center" };
const _hoisted_4$3 = { class: "h-10 w-10 flex-shrink-0" };
const _hoisted_5$3 = ["src", "alt"];
const _hoisted_6$3 = { class: "ml-3" };
const _hoisted_7$3 = { class: "whitespace-nowrap text-xs" };
const _hoisted_8$2 = { class: "border-b border-gray-300 px-5 py-5 text-xs dark:border-gray-500" };
const _hoisted_9$1 = { class: "flex items-center" };
const _hoisted_10$1 = ["href"];
const _hoisted_11$1 = { class: "whitespace-nowrap border-b border-gray-300 px-5 py-5 text-xs dark:border-gray-500" };
const _hoisted_12$1 = { key: 0 };
const _hoisted_13$1 = { class: "border-b border-gray-300 px-5 py-5 text-xs dark:border-gray-500" };
const _hoisted_14$1 = {
  key: 0,
  class: "whitespace-nowrap"
};
const _hoisted_15$1 = { class: "border-b border-gray-300 px-5 py-5 text-xs dark:border-gray-500" };
const _hoisted_16$1 = { class: "relative inline-block px-3 py-1 font-semibold leading-tight" };
const _hoisted_17$1 = { class: "whitespace-nowrap" };
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("span", { class: "far fa-paper fa-fw fa-sm fa-regular fa-envelope" }, null, -1);
const _hoisted_19$1 = {
  key: 0,
  class: "far fa-circle fa-fw fa-sm"
};
const _hoisted_20$1 = {
  key: 1,
  class: "far fa-circle-check fa-fw fa-sm"
};
const _hoisted_21$1 = {
  key: 0,
  class: "inset-0 py-1"
};
const _hoisted_22$1 = { class: "whitespace-nowrap border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_23$1 = { class: "sr-only" };
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Edit User", -1);
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Delete User", -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Impersonate User", -1);
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = resolveComponent("AppButton");
  const _component_LockClosedIcon = resolveComponent("LockClosedIcon");
  const _component_LockOpenIcon = resolveComponent("LockOpenIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_PencilSquareIcon = resolveComponent("PencilSquareIcon");
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("tr", _hoisted_1$3, [
    createBaseVNode("td", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$3, [
        createBaseVNode("div", _hoisted_4$3, [
          createBaseVNode("img", {
            class: "h-full w-full rounded-full",
            src: $props.user.avatar,
            alt: $props.user.name
          }, null, 8, _hoisted_5$3)
        ]),
        createBaseVNode("div", _hoisted_6$3, [
          createBaseVNode("p", _hoisted_7$3, toDisplayString($props.user.name), 1)
        ])
      ])
    ]),
    createBaseVNode("td", _hoisted_8$2, [
      createBaseVNode("div", _hoisted_9$1, [
        createBaseVNode("a", {
          class: "whitespace-nowrap",
          href: "mailto:" + $props.user.email,
          title: "send email"
        }, toDisplayString($props.user.email), 9, _hoisted_10$1)
      ])
    ]),
    createBaseVNode("td", _hoisted_11$1, [
      createBaseVNode("p", null, [
        $props.user.roles && $props.user.roles.length ? (openBlock(), createElementBlock("span", _hoisted_12$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.user.roles, (role) => {
            return openBlock(), createElementBlock("span", {
              key: "user_" + $props.user.id + "_role_" + role.id
            }, [
              createBaseVNode("span", {
                class: normalizeClass(["m-1 inline-block cursor-default whitespace-nowrap rounded px-2.5 py-0.5 text-xs font-bold", $options.roleClass(role.slug)])
              }, toDisplayString(role.name), 3)
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("td", _hoisted_13$1, [
      $props.user.created_at ? (openBlock(), createElementBlock("p", _hoisted_14$1, toDisplayString($options.parseDisplayDate($props.user.created_at)), 1)) : createCommentVNode("", true)
    ]),
    createBaseVNode("td", _hoisted_15$1, [
      createBaseVNode("span", _hoisted_16$1, [
        createBaseVNode("div", _hoisted_17$1, [
          createBaseVNode("div", {
            class: normalizeClass([
              "inline rounded px-1 py-0",
              $props.user.email_verified_at ? "bg-green-700 text-gray-100" : "bg-red-700 text-gray-100"
            ])
          }, toDisplayString($props.user.email_verified_at ? "Verified" : "Unverified"), 3),
          !$props.user.email_verified_at ? (openBlock(), createBlock(_component_AppButton, {
            key: 0,
            disabled: $data.locked,
            loading: !$props.dataReady,
            class: "ml-2 inline-block rounded bg-transparent px-1 py-2 text-xs font-medium leading-snug leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg",
            "btn-class": "text-yellow-700 dark:bg-transparent hover:bg-gray-200",
            "btn-class-dark": "bg-transparent dark:bg-transparent dark:hover:bg-gray-900",
            onClick: $options.triggerUserConfirmEmail
          }, {
            text: withCtx(() => [
              _hoisted_18$1
            ]),
            _: 1
          }, 8, ["disabled", "loading", "onClick"])) : createCommentVNode("", true),
          createVNode(_component_AppButton, {
            disabled: $data.locked,
            loading: !$props.dataReady,
            class: "ml-1 inline-block rounded bg-transparent px-1 py-2 text-xs font-medium leading-snug leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg",
            "btn-class": "text-yellow-700 dark:bg-transparent dark:hover:bg-gray-900 hover:bg-gray-200",
            "btn-class-dark": "bg-transparent dark:bg-transparent dark:hover:bg-gray-900",
            onClick: $options.fireVerification
          }, {
            text: withCtx(() => [
              !$props.user.email_verified_at ? (openBlock(), createElementBlock("span", _hoisted_19$1)) : createCommentVNode("", true),
              $props.user.email_verified_at ? (openBlock(), createElementBlock("span", _hoisted_20$1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["disabled", "loading", "onClick"])
        ]),
        $props.user.email_verified_at ? (openBlock(), createElementBlock("div", _hoisted_21$1, toDisplayString($options.parseDisplayDate($props.user.email_verified_at)), 1)) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("td", _hoisted_22$1, [
      createVNode(_component_AppButton, {
        loading: !$props.dataReady,
        class: "mr-2 inline-block rounded px-1 py-1 text-sm font-medium leading-snug leading-snug text-gray-700 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg dark:text-white",
        "btn-class": $data.locked ? "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
        "btn-hover-class": $data.locked ? "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
        "btn-class-dark": $data.locked ? "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
        "btn-hover-class-dark": $data.locked ? "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
        onClick: _cache[0] || (_cache[0] = ($event) => $data.locked = !$data.locked)
      }, {
        text: withCtx(() => [
          $data.locked && $props.dataReady ? (openBlock(), createBlock(_component_LockClosedIcon, {
            key: 0,
            class: "ml-2 mr-2 mt-0 h-4 w-4"
          })) : createCommentVNode("", true),
          !$data.locked && $props.dataReady ? (openBlock(), createBlock(_component_LockOpenIcon, {
            key: 1,
            class: "ml-2 mr-2 mt-0 h-4 w-4"
          })) : createCommentVNode("", true),
          !$props.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
            key: 2,
            class: "mr-2 h-3 w-3"
          })) : createCommentVNode("", true),
          createBaseVNode("span", _hoisted_23$1, toDisplayString($data.locked ? "Unlock" : "Lock") + " User Settings", 1)
        ]),
        _: 1
      }, 8, ["loading", "btn-class", "btn-hover-class", "btn-class-dark", "btn-hover-class-dark"]),
      withDirectives((openBlock(), createBlock(_component_AppButton, {
        warning: "",
        disabled: $data.locked,
        loading: !$props.dataReady,
        class: "mr-2 px-1 py-1 text-sm",
        onClick: $options.triggerEditUser
      }, {
        text: withCtx(() => [
          $props.dataReady ? (openBlock(), createBlock(_component_PencilSquareIcon, {
            key: 0,
            class: "ml-2 mr-2 mt-0 h-4 w-4"
          })) : createCommentVNode("", true),
          !$props.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
            key: 1,
            class: "mr-2 h-3 w-3"
          })) : createCommentVNode("", true),
          _hoisted_24$1
        ]),
        _: 1
      }, 8, ["disabled", "loading", "onClick"])), [
        [_directive_tippy, "Edit User"]
      ]),
      withDirectives((openBlock(), createBlock(_component_AppButton, {
        danger: "",
        disabled: $data.locked,
        loading: !$props.dataReady,
        class: "mr-2 px-1 py-1 text-sm",
        onClick: $options.triggerDeleteUser
      }, {
        text: withCtx(() => [
          $props.dataReady ? (openBlock(), createBlock(_component_TrashIcon, {
            key: 0,
            class: "ml-2 mr-2 mt-0 h-4 w-4"
          })) : createCommentVNode("", true),
          !$props.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
            key: 1,
            class: "mr-2 h-3 w-3"
          })) : createCommentVNode("", true),
          _hoisted_25$1
        ]),
        _: 1
      }, 8, ["disabled", "loading", "onClick"])), [
        [_directive_tippy, "Delete User"]
      ]),
      withDirectives((openBlock(), createBlock(_component_AppButton, {
        secondary: "",
        disabled: $data.locked,
        loading: !$props.dataReady,
        class: "mr-2 px-1 py-1 text-sm",
        onClick: $options.triggerImpersonateUser
      }, {
        text: withCtx(() => [
          $props.dataReady ? (openBlock(), createBlock(_component_UserCircleIcon, {
            key: 0,
            class: "ml-2 mr-2 mt-0 h-4 w-4"
          })) : createCommentVNode("", true),
          !$props.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
            key: 1,
            class: "mr-2 h-3 w-3"
          })) : createCommentVNode("", true),
          _hoisted_26$1
        ]),
        _: 1
      }, 8, ["disabled", "loading", "onClick"])), [
        [_directive_tippy, "Impersonate User"]
      ])
    ])
  ]);
}
const UsersTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "UsersTable",
  components: {
    Pagination,
    UsersTableRow
  },
  props: {
    dataReady: { type: Boolean, default: false },
    lockJiggled: { type: Boolean, default: false },
    users: {
      type: Array,
      default() {
        return [];
      }
    },
    pagination: {
      type: Object,
      default() {
        return {};
      }
    },
    availableRoles: { type: Array, default: null }
  },
  setup() {
    return {};
  },
  data() {
    return {
      offset: 4
    };
  },
  computed: {
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
    getUsers(data) {
      this.$emit("getUsers", data);
    },
    confirmUnVerifyUser(value) {
      this.$emit("confirmUnVerifyUser", value);
    },
    confirmVerifyUser(value) {
      this.$emit("confirmVerifyUser", value);
    },
    deleteUser(value) {
      this.$emit("deleteUser", value);
    },
    editUser(value) {
      this.$emit("editUser", value);
    },
    sendUserVerification(value) {
      this.$emit("sendUserVerification", value);
    },
    impersonateUserTriggered(value) {
      this.$emit("impersonateUserTriggered", value);
    }
  }
};
const _hoisted_1$2 = {
  class: "overflow-x-scroll rounded-lg shadow",
  style: { "width": "100%" }
};
const _hoisted_2$2 = {
  class: "min-w-full leading-normal",
  "aria-describedby": "Users Table"
};
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", { class: "border-b-2 border-gray-300 bg-gray-200 text-gray-600 dark:border-gray-500 dark:bg-slate-900 dark:text-gray-200" }, [
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " User "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Email "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Role(s) "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Created at "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Status "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Actions ")
  ])
], -1);
const _hoisted_4$2 = { key: 0 };
const _hoisted_5$2 = { key: 1 };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("tr", { class: "bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100" }, [
  /* @__PURE__ */ createBaseVNode("td", {
    colspan: "6",
    class: "pb-10 pt-10 text-center"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "fa fa-circle-notch fa-spin fa-5x text-gray-400" })
  ])
], -1);
const _hoisted_7$2 = [
  _hoisted_6$2
];
const _hoisted_8$1 = {
  key: 0,
  class: "xs:flex-row xs:justify-between flex flex-col items-center px-3 py-3 dark:bg-slate-700"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_UsersTableRow = resolveComponent("UsersTableRow");
  const _component_Pagination = resolveComponent("Pagination");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("table", _hoisted_2$2, [
      _hoisted_3$2,
      $props.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_4$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.users, (user) => {
          return openBlock(), createBlock(_component_UsersTableRow, {
            key: user.id,
            user,
            "data-ready": $props.dataReady,
            "available-roles": $props.availableRoles,
            "lock-jiggled": $props.lockJiggled,
            onConfirmUnVerifyUser: $options.confirmUnVerifyUser,
            onConfirmVerifyUser: $options.confirmVerifyUser,
            onDeleteUser: $options.deleteUser,
            onEditUser: $options.editUser,
            onSendUserVerification: $options.sendUserVerification,
            onImpersonateUserTriggered: $options.impersonateUserTriggered
          }, null, 8, ["user", "data-ready", "available-roles", "lock-jiggled", "onConfirmUnVerifyUser", "onConfirmVerifyUser", "onDeleteUser", "onEditUser", "onSendUserVerification", "onImpersonateUserTriggered"]);
        }), 128))
      ])) : createCommentVNode("", true),
      !$props.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_5$2, _hoisted_7$2)) : createCommentVNode("", true)
    ]),
    $props.dataReady && $props.users && $props.users.length >= 1 ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
      createVNode(_component_Pagination, {
        pagination: $props.pagination,
        offset: 4,
        onPaginate: $options.getUsers
      }, null, 8, ["pagination", "onPaginate"])
    ])) : createCommentVNode("", true)
  ]);
}
const UsersTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "UserFormModal",
  components: {
    AppModal,
    UserCircleIcon: render$4,
    Multiselect: script,
    Errors
  },
  props: {
    showingForm: { type: Boolean, default: false },
    newUser: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    user: { type: Object, default: null },
    availableRoles: { type: Array, default: null },
    useInlineMessage: { type: Boolean, default: true }
  },
  setup() {
    return {};
  },
  data() {
    return {
      userName: "",
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        roles: [],
        theme_dark: false,
        email_verified_at: null
      },
      submitting: false,
      errors: null,
      changed: false,
      ready: false
    };
  },
  computed: {},
  watch: {
    form: {
      handler(newValue, oldValue) {
        if (this.ready) {
          this.changed = true;
        }
      },
      deep: true,
      immediate: false
    }
  },
  created() {
  },
  mounted() {
    const self = this;
    if (self.user) {
      self.form = clonedeep(self.user);
      if (self.user.name) {
        self.userName = self.user.name;
      }
      if (self.user.roles) {
        const JSON_Obj = self.user.roles;
        self.form.roles = [];
        for (const key in JSON_Obj) {
          self.form.roles.push(JSON_Obj[key].id);
        }
      }
      setTimeout(() => {
        self.ready = true;
      }, 100);
    } else {
      self.ready = true;
    }
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    parseDisplayDate(date) {
      if (date && date != true) {
        return hooks(date).format("MMM Do YYYY, h:mma");
      }
      return hooks(/* @__PURE__ */ new Date()).format("MMM Do YYYY, h:mma");
    },
    async submit() {
      this.error = null;
      this.submitting = true;
      if (this.newUser) {
        await this.createUser();
      }
      if (!this.newUser) {
        await this.updateUser();
      }
      this.submitting = false;
    },
    async createUser() {
      await axios.post("/api/users/create-user", this.form).then(({ data }) => {
        this.$emit("userCreated", data.user);
        this.popToast({
          message: "User Successfully Created!",
          timer: 5e3,
          icon: "success"
        });
        this.submitting = false;
      }).catch(({ response }) => {
        if (response.status === 422) {
          const { errors } = response.data;
          this.errors = errors;
        } else {
          this.popToast({
            message: "Error Creating User",
            timer: 5e3,
            icon: "error"
          });
        }
        this.submitting = false;
      });
      this.submitting = false;
    },
    async updateUser() {
      await axios.patch(`/api/users/update-user/${this.user.id}`, this.form).then(({ data }) => {
        this.$emit("userUpdated", data.user);
        this.popToast({
          message: `User ${data.user.name} Successfully Updated!`,
          timer: 5e3,
          icon: "success"
        });
        this.submitting = false;
      }).catch(({ response }) => {
        if (response.status === 422) {
          const { errors } = response.data;
          this.errors = errors;
        } else {
          this.popToast({
            message: "Error Updating User",
            timer: 5e3,
            icon: "error"
          });
        }
        this.submitting = false;
      });
      this.submitting = false;
    },
    toggleUserVerified() {
      if (this.form.email_verified_at) {
        this.form.email_verified_at = null;
      } else {
        this.form.email_verified_at = true;
      }
    },
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
const UserFormModal_vue_vue_type_style_index_1_scoped_0b5d070a_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-0b5d070a"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_2$1 = { class: "flex-item relative mb-3 mr-2" };
const _hoisted_3$1 = ["src", "alt"];
const _hoisted_4$1 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_5$1 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug text-slate-300" };
const _hoisted_6$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_7$1 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_8 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_9 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_10 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_11 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_12 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_13 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_14 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_15 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_16 = { class: "flex-item relative mb-3 ml-2 flex-auto" };
const _hoisted_17 = { class: "text-xs uppercase" };
const _hoisted_18 = { class: "mt-2 whitespace-nowrap text-xs" };
const _hoisted_19 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_20 = { class: "flex-item relative mb-3 ml-3 flex-auto" };
const _hoisted_21 = { class: "my-1 mr-3 w-full py-2 sm:flex sm:items-center" };
const _hoisted_22 = {
  key: 0,
  class: "fa-solid fa-fw fa-1x fa-circle-notch fa-spin absolute float-left mr-4 text-slate-600",
  style: { "left": "-1.4em", "top": "1.2em" }
};
const _hoisted_23 = { class: "mt-1 inline-block text-sm" };
const _hoisted_24 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_25 = { class: "flex-item relative flex-auto" };
const _hoisted_26 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h6", null, "User Roles", -1));
const _hoisted_27 = { class: "relative mb-3 mt-5 flex w-full flex-wrap items-stretch" };
const _hoisted_28 = { class: "flex-item relative flex-auto text-xs uppercase" };
const _hoisted_29 = {
  key: 0,
  class: "float-left"
};
const _hoisted_30 = { class: "text-xs font-bold" };
const _hoisted_31 = { class: "flex-item relative flex-auto text-xs uppercase" };
const _hoisted_32 = {
  key: 0,
  class: "float-right"
};
const _hoisted_33 = { class: "text-xs font-bold" };
const _hoisted_34 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("hr", null, null, -1));
const _hoisted_35 = { style: { "width": "100%" } };
const _hoisted_36 = {
  key: 0,
  class: "fa fa-circle-notch fa-spin ml-3"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Errors = resolveComponent("Errors");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_AppModal = resolveComponent("AppModal");
  return openBlock(), createBlock(_component_AppModal, {
    "show-modal": $props.showingForm,
    onCloseModal: $options.closeModal
  }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString($props.newUser ? "Create User" : "Editing User " + $data.userName), 1)
    ]),
    body: withCtx(() => [
      $data.errors && $props.useInlineMessage ? (openBlock(), createBlock(_component_Errors, {
        key: 0,
        content: $data.errors,
        errors: $data.errors,
        "container-class": "w-100 mb-5",
        type: "error",
        onClose: _cache[0] || (_cache[0] = ($event) => $data.errors = null)
      }, null, 8, ["content", "errors"])) : createCommentVNode("", true),
      createBaseVNode("form", {
        onSubmit: _cache[7] || (_cache[7] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            $data.form && $data.form.avatar ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: $data.form.avatar,
              alt: $data.form.name,
              class: "float-left ml-2 mr-2 mt-1 h-10 w-10 rounded-full"
            }, null, 8, _hoisted_3$1)) : (openBlock(), createBlock(_component_UserCircleIcon, {
              key: 1,
              class: "float-left ml-2 mr-2 mt-1 h-10 w-10 text-gray-500"
            }))
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            withDirectives(createBaseVNode("input", {
              id: "name",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.name = $event),
              type: "text",
              placeholder: "Name",
              name: "name",
              class: normalizeClass([
                "relative w-full rounded border bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none",
                $data.errors && $data.errors.name ? "border-red-500 text-red-600 placeholder-red-500 dark:placeholder-red-600" : "border-transparent text-slate-600 placeholder-slate-300 dark:placeholder-slate-400"
              ])
            }, null, 2), [
              [vModelText, $data.form.name]
            ]),
            createBaseVNode("span", _hoisted_5$1, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-user",
                  $data.errors && $data.errors.name ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            withDirectives(createBaseVNode("input", {
              id: "email",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.email = $event),
              type: "text",
              placeholder: "E-mail",
              name: "email",
              class: normalizeClass([
                "relative w-full rounded border bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none",
                $data.errors && $data.errors.email ? "border-red-500 text-red-600 placeholder-red-500 dark:text-red-600 dark:placeholder-red-600" : "border-transparent text-slate-600 placeholder-slate-300 dark:placeholder-slate-400"
              ])
            }, null, 2), [
              [vModelText, $data.form.email]
            ]),
            createBaseVNode("span", _hoisted_8, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-envelope",
                  $data.errors && $data.errors.email ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            withDirectives(createBaseVNode("input", {
              id: "password",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.password = $event),
              type: "password",
              placeholder: "Password",
              name: "password",
              autocomplete: "on",
              class: normalizeClass([
                "relative w-full rounded border bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none",
                $data.errors && $data.errors.password ? "border-red-500 text-red-600 placeholder-red-500 dark:text-red-600 dark:placeholder-red-600" : "border-transparent text-slate-600 placeholder-slate-300 dark:placeholder-slate-400"
              ])
            }, null, 2), [
              [vModelText, $data.form.password]
            ]),
            createBaseVNode("span", _hoisted_11, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-user-shield",
                  $data.errors && $data.errors.email ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            withDirectives(createBaseVNode("input", {
              id: "password_confirmation",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.password_confirmation = $event),
              type: "password",
              placeholder: "Password Confirmation",
              name: "password_confirmation",
              autocomplete: "on",
              class: normalizeClass([
                "relative w-full rounded border bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none",
                $data.errors && $data.errors.password ? "border-red-500 text-red-600 placeholder-red-500 dark:placeholder-red-600" : "border-transparent text-slate-600 placeholder-slate-300 dark:placeholder-slate-400"
              ])
            }, null, 2), [
              [vModelText, $data.form.password_confirmation]
            ]),
            createBaseVNode("span", _hoisted_14, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-user-shield",
                  $data.errors && $data.errors.email ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_15, [
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("h6", _hoisted_17, [
              createTextVNode(" Verified: "),
              createVNode(_component_AppButton, {
                disabled: $props.loading || $data.submitting,
                class: "float-right mb-2 ml-3 bg-yellow-600 px-1 py-0 text-sm font-medium leading-snug leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-yellow-500 hover:shadow-lg focus:shadow-lg active:shadow-lg dark:bg-yellow-500 dark:hover:bg-yellow-600",
                style: { "width": "80px" },
                onClick: $options.toggleUserVerified
              }, {
                text: withCtx(() => [
                  createTextVNode(toDisplayString($data.form && $data.form.email_verified_at ? "Un-Verify" : "Verify"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "onClick"])
            ]),
            createBaseVNode("div", _hoisted_18, toDisplayString($data.form && $data.form.email_verified_at ? $options.parseDisplayDate($data.form.email_verified_at) : "Not Verified"), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_19, [
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("span", {
                class: normalizeClass(
                  $props.loading || $data.submitting ? "default disabled cursor-pointer" : "cursor-pointer"
                ),
                onClick: _cache[5] || (_cache[5] = ($event) => $data.form.theme_dark = !$data.form.theme_dark)
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(["fa-solid fa-fw fa-2x float-left mr-4 text-slate-600 dark:text-gray-300", $data.form.theme_dark ? "fa-toggle-on" : "fa-toggle-off"])
                }, null, 2),
                $props.loading ? (openBlock(), createElementBlock("span", _hoisted_22)) : createCommentVNode("", true),
                createBaseVNode("span", _hoisted_23, toDisplayString($data.form.theme_dark ? "Dark Theme" : "Light Theme"), 1)
              ], 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            _hoisted_26,
            createVNode(_component_Multiselect, {
              modelValue: $data.form.roles,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.form.roles = $event),
              options: $props.availableRoles,
              "track-by": "id",
              label: "name",
              mode: "tags",
              placeholder: "Select user roles"
            }, null, 8, ["modelValue", "options"])
          ])
        ]),
        createBaseVNode("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            $data.form.created_at ? (openBlock(), createElementBlock("div", _hoisted_29, [
              createTextVNode(" Created at: "),
              createBaseVNode("div", _hoisted_30, toDisplayString($options.parseDisplayDate($data.form.created_at)), 1)
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_31, [
            $data.form.updated_at ? (openBlock(), createElementBlock("div", _hoisted_32, [
              createTextVNode(" Updated at: "),
              createBaseVNode("div", _hoisted_33, toDisplayString($options.parseDisplayDate($data.form.updated_at)), 1)
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 32)
    ]),
    footer: withCtx(() => [
      _hoisted_34,
      createBaseVNode("div", _hoisted_35, [
        $data.changed ? (openBlock(), createBlock(_component_AppButton, {
          key: 0,
          disabled: $props.loading || $data.submitting || !$data.changed,
          class: "float-left border border-green-800 bg-transparent bg-transparent text-sm font-medium text-green-800 text-white shadow-md transition duration-150 ease-in-out hover:border-green-900 hover:bg-green-900 hover:text-white hover:shadow-lg focus:shadow-lg active:shadow-lg dark:hover:border-green-800 dark:hover:bg-green-800",
          onClick: $options.submit
        }, {
          text: withCtx(() => [
            createTextVNode(toDisplayString($props.newUser ? $data.submitting ? "Creating" : "Create" : $data.submitting ? "Updating" : "Update") + " ", 1),
            $data.submitting ? (openBlock(), createElementBlock("span", _hoisted_36)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["disabled", "onClick"])) : createCommentVNode("", true),
        createVNode(_component_AppButton, {
          disabled: $props.loading || $data.submitting,
          class: "float-right border border-gray-700 bg-transparent bg-transparent text-sm font-medium text-gray-700 text-white shadow-md transition duration-150 ease-in-out hover:border-gray-700 hover:bg-gray-700 hover:text-white hover:shadow-lg focus:shadow-lg active:shadow-lg dark:hover:bg-gray-700",
          onClick: $options.closeModal
        }, {
          text: withCtx(() => [
            createTextVNode(toDisplayString($data.changed ? "Cancel" : "Close"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "onClick"])
      ])
    ]),
    _: 1
  }, 8, ["show-modal", "onCloseModal"]);
}
const UserFormModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-0b5d070a"]]);
const _sfc_main = {
  name: "Users",
  components: {
    ChevronRightIcon: render$5,
    PerPage,
    UsersTable,
    UserPlusIcon: render$6,
    CircleSvg,
    UserFormModal
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      users: [],
      pagination: {},
      perPage: 10,
      dataReady: false,
      showCreateUserForm: false,
      userEditing: null,
      creatingNewUser: false,
      userFormKey: 432489,
      availableRoles: [],
      rolesDataReady: false,
      lockJigled: false
    };
  },
  computed: {
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
    this.getRoles();
    this.getUsers();
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast",
      verifyResend: "auth/verifyResend",
      impersonateUser: "auth/impersonateUser"
    }),
    perPageChanged(value) {
      this.perPage = parseInt(value);
      this.pagination.current_page = 1;
      this.getUsers();
    },
    async getUsers(updatedPage = null) {
      if (updatedPage) {
        this.pagination.current_page = updatedPage;
      }
      await axios.get(
        `/api/users?page=${this.pagination.current_page}&per=${this.perPage}`
      ).then(({ data }) => {
        this.users = data.data;
        delete data.data;
        this.pagination = data;
        this.dataReady = true;
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
    async confirmUnVerifyUser(value) {
      await axios.post("/api/users/toggle-verify", {
        action: "unVerifyUser",
        user: value
      }).then(({ data }) => {
        this.users = this.users.map((u) => u.id !== data.id ? u : data);
        this.popToast({
          message: "Successfully Un-Verified!",
          timer: 5e3,
          icon: "warning"
        });
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Un-Verifying User",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
    },
    async confirmVerifyUser(value) {
      await axios.post("/api/users/toggle-verify", {
        action: "confirmVerifyUser",
        user: value
      }).then(({ data }) => {
        this.users = this.users.map((u) => u.id !== data.id ? u : data);
        this.popToast({
          message: "Successfully Verified!",
          timer: 5e3,
          icon: "success"
        });
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Verifying User",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
    },
    async deleteUser(value) {
      await axios.delete(`/api/users/delete/user/${value.id}`).then(({ data }) => {
        this.users = this.users.filter((u) => u.id != data.id);
        this.popToast({
          message: "Successfully Deleted!",
          timer: 5e3,
          icon: "success"
        });
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Deleting User",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
    },
    async getRoles() {
      this.rolesDataReady = false;
      await axios.get("/api/roles").then(({ data }) => {
        this.availableRoles = data.roles;
        this.rolesDataReady = true;
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Getting Roles",
          timer: 5e3,
          icon: "error"
        });
        this.rolesDataReady = true;
      });
    },
    triggerCreateUser() {
      this.userFormKey += 1;
      this.creatingNewUser = true;
      this.showCreateUserForm = true;
      this.userEditing = null;
    },
    triggerUpdateUser(user) {
      this.creatingNewUser = false;
      this.userEditing = user;
    },
    userCreated(data) {
      this.users.push(data);
      this.getUsers();
      this.closeUserForm();
    },
    userUpdated(data) {
      this.users = this.users.map((u) => u.id !== data.id ? u : data);
      this.getUsers();
      this.jiggleTheLock();
      this.closeUserForm();
    },
    jiggleTheLock() {
      const self = this;
      self.lockJigled = true;
      setTimeout(() => {
        self.lockJigled = false;
      }, 1);
    },
    closeUserForm() {
      this.userEditing = null;
      this.creatingNewUser = false;
      this.showCreateUserForm = false;
    },
    editUser(user) {
      this.userFormKey += 1;
      this.userEditing = user;
      this.creatingNewUser = false;
      this.showCreateUserForm = true;
    },
    async sendUserVerification(user) {
      try {
        await this.verifyResend({ id: user.id }).then((response) => {
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
      }
    },
    async impersonateUserTriggered(user) {
      try {
        await this.impersonateUser({ user }).then((response) => {
        });
      } catch (e) {
        this.popToast({
          message: "Unable To Impersonate User",
          timer: 5e3,
          icon: "error"
        });
      }
    }
  }
};
const Users_vue_vue_type_style_index_0_scoped_8114f2d7_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-8114f2d7"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "users",
  class: "bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
};
const _hoisted_2 = {
  class: "mb-6 text-sm font-semibold",
  "aria-label": "Breadcrumb"
};
const _hoisted_3 = { class: "inline-flex list-none p-0" };
const _hoisted_4 = { class: "flex items-center" };
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Create New User", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _component_PerPage = resolveComponent("PerPage");
  const _component_UserPlusIcon = resolveComponent("UserPlusIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_UsersTable = resolveComponent("UsersTable");
  const _component_UserFormModal = resolveComponent("UserFormModal");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ol", _hoisted_3, [
        createBaseVNode("li", _hoisted_4, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "admin" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createTextVNode(" Admin ")
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("li", _hoisted_5, [
          createVNode(_component_ChevronRightIcon, { class: "ml-2 mr-2 mt-0 h-4 w-4" })
        ]),
        createBaseVNode("li", _hoisted_6, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "users" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, " Users ", 2)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]),
      createVNode(_component_PerPage, {
        items: $data.users,
        "per-page": $data.perPage,
        class: "float-right mb-2",
        style: { "margin-top": "-0.5em" },
        onChanged: $options.perPageChanged
      }, null, 8, ["items", "per-page", "onChanged"])
    ]),
    withDirectives((openBlock(), createBlock(_component_AppButton, {
      disabled: $data.showCreateUserForm || !$data.dataReady,
      class: "float-right mb-2 px-2 py-2 text-sm font-medium",
      onClick: $options.triggerCreateUser
    }, {
      text: withCtx(() => [
        $data.dataReady ? (openBlock(), createBlock(_component_UserPlusIcon, {
          key: 0,
          class: "ml-2 mr-2 mt-0 h-4 w-4"
        })) : createCommentVNode("", true),
        !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
          key: 1,
          class: "ml-2 mr-2 mt-0 h-4 w-4"
        })) : createCommentVNode("", true),
        _hoisted_7
      ]),
      _: 1
    }, 8, ["disabled", "onClick"])), [
      [_directive_tippy, "Create User"]
    ]),
    createVNode(_component_UsersTable, {
      users: $data.users,
      pagination: $data.pagination,
      "per-page": $data.perPage,
      "data-ready": $data.dataReady,
      "available-roles": $data.availableRoles,
      "lock-jiggled": $data.lockJigled,
      onGetUsers: $options.getUsers,
      onConfirmUnVerifyUser: $options.confirmUnVerifyUser,
      onConfirmVerifyUser: $options.confirmVerifyUser,
      onDeleteUser: $options.deleteUser,
      onEditUser: $options.editUser,
      onSendUserVerification: $options.sendUserVerification,
      onImpersonateUserTriggered: $options.impersonateUserTriggered
    }, null, 8, ["users", "pagination", "per-page", "data-ready", "available-roles", "lock-jiggled", "onGetUsers", "onConfirmUnVerifyUser", "onConfirmVerifyUser", "onDeleteUser", "onEditUser", "onSendUserVerification", "onImpersonateUserTriggered"]),
    (openBlock(), createBlock(_component_UserFormModal, {
      key: $data.userFormKey,
      "showing-form": $data.showCreateUserForm,
      user: $data.userEditing,
      "new-user": $data.creatingNewUser,
      "available-roles": $data.availableRoles,
      onCloseModal: $options.closeUserForm,
      onUserCreated: $options.userCreated,
      onUserUpdated: $options.userUpdated
    }, null, 8, ["showing-form", "user", "new-user", "available-roles", "onCloseModal", "onUserCreated", "onUserUpdated"]))
  ]);
}
const Users = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8114f2d7"]]);
export {
  Users as default
};
