import { aA as render, aB as render$1, aC as render$2, aD as render$3, b as mapActions, h as hooks, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, B as toDisplayString, D as createCommentVNode, d as createVNode, w as withCtx, z as createBlock, a as mapGetters, J as Fragment, K as renderList, v as render$4, Q as axios, E as createTextVNode, C as withDirectives, ad as vModelText, n as normalizeClass, G as withModifiers, H as pushScopeId, I as popScopeId, az as render$5, y as resolveDirective } from "./vendor-506bc2e6.js";
import { P as Pagination, A as AppModal, c as clonedeep, a as PerPage } from "./default.css_vue_type_style_index_0_src_true_lang-1251d036.js";
import { C as CircleSvg, _ as _export_sfc } from "./app-a3809c34.js";
import { s as script } from "./multiselect-da0ca839.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$3 = {
  name: "RolesTableRow",
  components: {
    LockClosedIcon: render,
    LockOpenIcon: render$1,
    CircleSvg,
    PencilSquareIcon: render$2,
    TrashIcon: render$3
  },
  props: {
    role: { type: Object, required: true },
    dataReady: { type: Boolean, default: false },
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
    parseDisplayDate(date) {
      return hooks(date).format("MMM Do YYYY, h:mma");
    },
    triggerEditRole() {
      this.$emit("editRole", this.role);
    },
    triggerDeleteRole() {
      const self = this;
      const title = `<strong>Delete ${this.role.name}?</strong>`;
      const html = "Are you sure you want to <strong>Delete";
      `${this.role.name}</strong>?<h6>This will delete the role.</h6>`;
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
          this.$emit("deleteRole", this.role);
        } else if (result.isDenied) {
          self.popToast({
            message: "Cancelled",
            timer: 2e3,
            icon: "error"
          });
        }
      });
    }
  }
};
const _hoisted_1$3 = { class: "bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100" };
const _hoisted_2$3 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_3$3 = { class: "flex items-center" };
const _hoisted_4$3 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_5$3 = { class: "flex items-center whitespace-nowrap" };
const _hoisted_6$3 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_7$3 = { class: "flex items-center" };
const _hoisted_8$3 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_9$2 = { class: "flex items-center text-xs" };
const _hoisted_10$2 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_11$1 = { class: "flex items-center" };
const _hoisted_12$1 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_13$1 = { class: "flex items-center" };
const _hoisted_14$1 = {
  key: 0,
  class: "whitespace-nowrap text-xs"
};
const _hoisted_15$1 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_16$1 = { class: "flex items-center" };
const _hoisted_17$1 = {
  key: 0,
  class: "whitespace-nowrap text-xs"
};
const _hoisted_18$1 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_19$1 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_20$1 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_21$1 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_22$1 = { class: "border-b border-gray-300 px-5 py-5 text-sm dark:border-gray-500" };
const _hoisted_23$1 = { class: "flex items-center whitespace-nowrap" };
const _hoisted_24$1 = { class: "sr-only" };
const _hoisted_25$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Edit Role", -1);
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Delete Role", -1);
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LockClosedIcon = resolveComponent("LockClosedIcon");
  const _component_LockOpenIcon = resolveComponent("LockOpenIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_PencilSquareIcon = resolveComponent("PencilSquareIcon");
  const _component_TrashIcon = resolveComponent("TrashIcon");
  return openBlock(), createElementBlock("tr", _hoisted_1$3, [
    createBaseVNode("td", _hoisted_2$3, [
      createBaseVNode("div", _hoisted_3$3, toDisplayString($props.role.id), 1)
    ]),
    createBaseVNode("td", _hoisted_4$3, [
      createBaseVNode("div", _hoisted_5$3, toDisplayString($props.role.name), 1)
    ]),
    createBaseVNode("td", _hoisted_6$3, [
      createBaseVNode("div", _hoisted_7$3, toDisplayString($props.role.slug), 1)
    ]),
    createBaseVNode("td", _hoisted_8$3, [
      createBaseVNode("div", _hoisted_9$2, toDisplayString($props.role.description), 1)
    ]),
    createBaseVNode("td", _hoisted_10$2, [
      createBaseVNode("div", _hoisted_11$1, toDisplayString($props.role.level), 1)
    ]),
    createBaseVNode("td", _hoisted_12$1, [
      createBaseVNode("div", _hoisted_13$1, [
        $props.role.created_at ? (openBlock(), createElementBlock("span", _hoisted_14$1, toDisplayString($options.parseDisplayDate($props.role.created_at)), 1)) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("td", _hoisted_15$1, [
      createBaseVNode("div", _hoisted_16$1, [
        $props.role.updated_at ? (openBlock(), createElementBlock("span", _hoisted_17$1, toDisplayString($options.parseDisplayDate($props.role.updated_at)), 1)) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("td", _hoisted_18$1, [
      $props.role && $props.role.users && $props.role.users.length >= 0 ? (openBlock(), createElementBlock("div", _hoisted_19$1, toDisplayString($props.role.users.length), 1)) : createCommentVNode("", true)
    ]),
    createBaseVNode("td", _hoisted_20$1, [
      $props.role && $props.role.permissions && $props.role.permissions.length >= 0 ? (openBlock(), createElementBlock("div", _hoisted_21$1, toDisplayString($props.role.permissions.length), 1)) : createCommentVNode("", true)
    ]),
    createBaseVNode("td", _hoisted_22$1, [
      createBaseVNode("div", _hoisted_23$1, [
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
            createBaseVNode("span", _hoisted_24$1, toDisplayString($data.locked ? "Unlock" : "Lock") + " User Settings", 1)
          ]),
          _: 1
        }, 8, ["loading", "btn-class", "btn-hover-class", "btn-class-dark", "btn-hover-class-dark"]),
        createVNode(_component_AppButton, {
          warning: "",
          disabled: $data.locked,
          loading: !$props.dataReady,
          class: "mr-2 px-1 py-1 text-sm",
          onClick: $options.triggerEditRole
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
            _hoisted_25$1
          ]),
          _: 1
        }, 8, ["disabled", "loading", "onClick"]),
        createVNode(_component_AppButton, {
          danger: "",
          disabled: $data.locked || $props.role && $props.role.users && $props.role.users.length > 0,
          loading: !$props.dataReady,
          class: "mr-2 px-1 py-1 text-sm",
          onClick: $options.triggerDeleteRole
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
            _hoisted_26$1
          ]),
          _: 1
        }, 8, ["disabled", "loading", "onClick"])
      ])
    ])
  ]);
}
const RolesTableRow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "RolesTable",
  components: {
    Pagination,
    RolesTableRow
  },
  props: {
    dataReady: { type: Boolean, default: false },
    lockJiggled: { type: Boolean, default: false },
    rolesData: {
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
    }
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
    getRoles(data) {
      this.$emit("getRoles", data);
    },
    deleteRole(value) {
      this.$emit("deleteRole", value);
    },
    editRole(value) {
      this.$emit("editRole", value);
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
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Id "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Name "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Slug "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Description "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Level "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Updated At "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Updated At "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Users "),
    /* @__PURE__ */ createBaseVNode("th", { class: "whitespace-nowrap px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" }, " Permissions "),
    /* @__PURE__ */ createBaseVNode("th", { class: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider" })
  ])
], -1);
const _hoisted_4$2 = { key: 0 };
const _hoisted_5$2 = { key: 1 };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("tr", { class: "bg-gray-100 text-gray-900 dark:bg-slate-700 dark:text-gray-100" }, [
  /* @__PURE__ */ createBaseVNode("td", {
    colspan: "10",
    class: "pb-10 pt-10 text-center"
  }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "fa fa-circle-notch fa-spin fa-5x text-gray-400" })
  ])
], -1);
const _hoisted_7$2 = [
  _hoisted_6$2
];
const _hoisted_8$2 = { class: "w-full text-center" };
const _hoisted_9$1 = { colspan: "10" };
const _hoisted_10$1 = {
  key: 0,
  class: "xs:flex-row xs:justify-between flex flex-col items-center px-3 py-3 dark:bg-slate-700"
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RolesTableRow = resolveComponent("RolesTableRow");
  const _component_Pagination = resolveComponent("Pagination");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createBaseVNode("table", _hoisted_2$2, [
      _hoisted_3$2,
      $props.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_4$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.rolesData, (role) => {
          return openBlock(), createBlock(_component_RolesTableRow, {
            key: role.id,
            role,
            "data-ready": $props.dataReady,
            "lock-jiggled": $props.lockJiggled,
            onEditRole: $options.editRole,
            onDeleteRole: $options.deleteRole
          }, null, 8, ["role", "data-ready", "lock-jiggled", "onEditRole", "onDeleteRole"]);
        }), 128))
      ])) : createCommentVNode("", true),
      !$props.dataReady ? (openBlock(), createElementBlock("tbody", _hoisted_5$2, _hoisted_7$2)) : createCommentVNode("", true),
      createBaseVNode("tfoot", _hoisted_8$2, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", _hoisted_9$1, [
            $props.dataReady && $props.rolesData && $props.rolesData.length >= 1 ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
              createVNode(_component_Pagination, {
                pagination: $props.pagination,
                offset: 4,
                onPaginate: $options.getRoles
              }, null, 8, ["pagination", "onPaginate"])
            ])) : createCommentVNode("", true)
          ])
        ])
      ])
    ])
  ]);
}
const RolesTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
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
    newRole: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    role: { type: Object, default: null },
    useInlineMessage: { type: Boolean, default: false },
    availablePermissions: { type: Array, default: null }
  },
  setup() {
    return {};
  },
  data() {
    return {
      roleName: "",
      form: {
        name: null,
        slug: null,
        description: null,
        level: 0,
        permissions: []
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
    if (self.role) {
      self.form = clonedeep(self.role);
      if (self.role.name) {
        self.roleName = self.role.name;
      }
      self.form.permissions = self.form.permissions.map((el) => el.id);
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
      if (this.newRole) {
        await this.createRole();
      }
      if (!this.newRole) {
        await this.updateRole();
      }
      this.submitting = false;
    },
    formValid() {
      this.errors = null;
      if (!this.form) {
        return false;
      }
      if (!this.form.name) {
        this.errors = {};
        this.errors.name = "Missing Role Name";
      }
      if (!this.form.slug) {
        if (!this.errors) {
          this.errors = {};
        }
        this.errors.slug = "Missing Role Slug";
      }
      if (!this.errors) {
        return true;
      }
      return false;
    },
    async createRole() {
      if (!this.formValid()) {
        this.submitting = false;
        this.popToast({
          message: "Error Validating Role",
          timer: 5e3,
          icon: "error"
        });
        return;
      }
      await axios.post("/api/roles/create-role", this.form).then(({ data }) => {
        this.$emit("roleCreated", data.role);
        this.popToast({
          message: "Role Successfully Created!",
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
            message: "Error Creating Role",
            timer: 5e3,
            icon: "error"
          });
        }
        this.submitting = false;
      });
      this.submitting = false;
    },
    async updateRole() {
      const self = this;
      if (!this.formValid()) {
        this.submitting = false;
        this.popToast({
          message: "Error Validating Role",
          timer: 5e3,
          icon: "error"
        });
        return;
      }
      await axios.patch(`/api/roles/update-role/${self.role.id}`, self.form).then(({ data }) => {
        self.$emit("roleUpdated", data.role);
        self.popToast({
          message: `Role ${data.role.name} Successfully Updated!`,
          timer: 5e3,
          icon: "success"
        });
        self.submitting = false;
      }).catch(({ response }) => {
        if (response.status === 422) {
          const { errors } = response.data;
          self.errors = errors;
        } else {
          self.popToast({
            message: "Error Updating Role",
            timer: 5e3,
            icon: "error"
          });
        }
        self.submitting = false;
      });
      self.submitting = false;
    },
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
const RoleFormModal_vue_vue_type_style_index_1_scoped_3283c55c_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3283c55c"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_2$1 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "name" }, " Name ", -1));
const _hoisted_4$1 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug text-slate-300" };
const _hoisted_5$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_6$1 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "slug" }, " Slug ", -1));
const _hoisted_8$1 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_9 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_10 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "description" }, " Description ", -1));
const _hoisted_12 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_13 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_14 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "level" }, " Level ", -1));
const _hoisted_16 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_17 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_18 = { class: "flex-item relative mb-3 max-w-2xl flex-auto" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h6", null, "Role Permissions", -1));
const _hoisted_20 = {
  key: 0,
  class: "relative mb-3 mt-5 flex w-full flex-wrap items-stretch"
};
const _hoisted_21 = { class: "flex-item relative flex-auto text-xs" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", { class: "text-red-400" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "fas fa-warning fa-fw mr-1" }),
  /* @__PURE__ */ createTextVNode("Warning")
], -1));
const _hoisted_23 = { class: "font-bold" };
const _hoisted_24 = { class: "relative mb-3 mt-5 flex w-full flex-wrap items-stretch" };
const _hoisted_25 = { class: "flex-item relative flex-auto text-xs uppercase" };
const _hoisted_26 = {
  key: 0,
  class: "float-left"
};
const _hoisted_27 = { class: "text-xs font-bold" };
const _hoisted_28 = { class: "flex-item relative flex-auto text-xs uppercase" };
const _hoisted_29 = {
  key: 0,
  class: "float-right"
};
const _hoisted_30 = { class: "text-xs font-bold" };
const _hoisted_31 = { style: { "width": "100%" } };
const _hoisted_32 = {
  key: 0,
  class: "fa fa-circle-notch fa-spin ml-3"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Errors = resolveComponent("Errors");
  const _component_Multiselect = resolveComponent("Multiselect");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_AppModal = resolveComponent("AppModal");
  return openBlock(), createBlock(_component_AppModal, {
    "show-modal": $props.showingForm,
    onCloseModal: $options.closeModal
  }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString($props.newRole ? "Create Role" : "Editing Role " + $data.roleName), 1)
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
        onSubmit: _cache[6] || (_cache[6] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            _hoisted_3$1,
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
            createBaseVNode("span", _hoisted_4$1, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-lock",
                  $data.errors && $data.errors.name ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            _hoisted_7$1,
            withDirectives(createBaseVNode("input", {
              id: "slug",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.slug = $event),
              type: "text",
              placeholder: "Slug",
              name: "slug",
              class: normalizeClass([
                "relative w-full rounded border bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none",
                $data.errors && $data.errors.slug ? "border-red-500 text-red-600 placeholder-red-500 dark:text-red-600 dark:placeholder-red-600" : "border-transparent text-slate-600 placeholder-slate-300 dark:placeholder-slate-400"
              ])
            }, null, 2), [
              [vModelText, $data.form.slug]
            ]),
            createBaseVNode("span", _hoisted_8$1, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-code",
                  $data.errors && $data.errors.slug ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            _hoisted_11,
            withDirectives(createBaseVNode("textarea", {
              id: "description",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.description = $event),
              type: "text",
              placeholder: "Description",
              name: "description",
              class: normalizeClass([
                "relative w-full rounded border bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none",
                $data.errors && $data.errors.description ? "border-red-500 text-red-600 placeholder-red-500 dark:text-red-600 dark:placeholder-red-600" : "border-transparent text-slate-600 placeholder-slate-300 dark:placeholder-slate-400"
              ])
            }, null, 2), [
              [vModelText, $data.form.description]
            ]),
            createBaseVNode("span", _hoisted_12, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-pencil",
                  $data.errors && $data.errors.description ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_13, [
          createBaseVNode("div", _hoisted_14, [
            _hoisted_15,
            withDirectives(createBaseVNode("input", {
              id: "level",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.level = $event),
              type: "number",
              placeholder: "Level",
              name: "level",
              class: normalizeClass([
                "relative w-full rounded border bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none",
                $data.errors && $data.errors.level ? "border-red-500 text-red-600 placeholder-red-500 dark:text-red-600 dark:placeholder-red-600" : "border-transparent text-slate-600 placeholder-slate-300 dark:placeholder-slate-400"
              ])
            }, null, 2), [
              [vModelText, $data.form.level]
            ]),
            createBaseVNode("span", _hoisted_16, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-pencil",
                  $data.errors && $data.errors.level ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_17, [
          createBaseVNode("div", _hoisted_18, [
            _hoisted_19,
            createVNode(_component_Multiselect, {
              modelValue: $data.form.permissions,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.form.permissions = $event),
              options: $props.availablePermissions,
              "track-by": "id",
              label: "name",
              mode: "tags",
              placeholder: "Select role permissions"
            }, null, 8, ["modelValue", "options"])
          ])
        ]),
        $props.role && $props.role.users && $props.role.users.length && $props.role.users.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            _hoisted_22,
            createTextVNode(": This will affect "),
            createBaseVNode("span", _hoisted_23, toDisplayString($props.role.users.length), 1),
            createTextVNode(" User" + toDisplayString($props.role.users.length > 1 ? "s" : ""), 1)
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            $data.form.created_at ? (openBlock(), createElementBlock("div", _hoisted_26, [
              createTextVNode(" Created at: "),
              createBaseVNode("div", _hoisted_27, toDisplayString($options.parseDisplayDate($data.form.created_at)), 1)
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_28, [
            $data.form.updated_at ? (openBlock(), createElementBlock("div", _hoisted_29, [
              createTextVNode(" Updated at: "),
              createBaseVNode("div", _hoisted_30, toDisplayString($options.parseDisplayDate($data.form.updated_at)), 1)
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 32)
    ]),
    footer: withCtx(() => [
      createBaseVNode("div", _hoisted_31, [
        $data.changed ? (openBlock(), createBlock(_component_AppButton, {
          key: 0,
          disabled: $props.loading || $data.submitting || !$data.changed,
          class: "float-left border border-green-800 bg-transparent bg-transparent text-sm font-medium text-green-800 text-white shadow-md transition duration-150 ease-in-out hover:border-green-900 hover:bg-green-900 hover:text-white hover:shadow-lg focus:shadow-lg active:shadow-lg dark:hover:border-green-800 dark:hover:bg-green-800",
          onClick: $options.submit
        }, {
          text: withCtx(() => [
            createTextVNode(toDisplayString($props.newRole ? $data.submitting ? "Creating" : "Create" : $data.submitting ? "Updating" : "Update") + " ", 1),
            $data.submitting ? (openBlock(), createElementBlock("span", _hoisted_32)) : createCommentVNode("", true)
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
const RoleFormModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-3283c55c"]]);
const _sfc_main = {
  name: "Roles",
  components: {
    ChevronRightIcon: render$5,
    RolesTable,
    RoleFormModal,
    CircleSvg,
    PerPage
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      rolesData: null,
      pagination: {},
      perPage: 25,
      lockJigled: false,
      showCreateRoleForm: false,
      roleEditing: null,
      creatingNewRole: false,
      roleFormKey: 432489,
      availablePermissions: [],
      permissionsDataReady: false
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
    this.getPermissions();
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    perPageChanged(value) {
      this.perPage = parseInt(value);
      this.pagination.current_page = 1;
      this.getRoles();
    },
    async getRoles(updatedPage = null) {
      if (updatedPage) {
        this.pagination.current_page = updatedPage;
      }
      await axios.get(
        `/api/roles-complete?page=${this.pagination.current_page}&per=${this.perPage}`
      ).then(({ data }) => {
        this.rolesData = data.data;
        delete data.data;
        this.pagination = data;
        this.dataReady = true;
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Getting Roles",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
      this.dataReady = true;
    },
    async getPermissions() {
      this.permissionsDataReady = false;
      await axios.get("/api/permissions").then(({ data }) => {
        this.availablePermissions = data.permissions;
        this.permissionsDataReady = true;
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Getting Permissions",
          timer: 5e3,
          icon: "error"
        });
        this.permissionsDataReady = true;
      });
      this.permissionsDataReady = true;
    },
    async deleteRole(value) {
      await axios.delete(`/api/roles/delete/role/${value.id}`).then(({ data }) => {
        this.rolesData = this.rolesData.filter((u) => u.id != data.id);
        this.popToast({
          message: "Successfully Deleted Role!",
          timer: 5e3,
          icon: "success"
        });
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Deleting Role",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
    },
    jiggleTheLock() {
      const self = this;
      self.lockJigled = true;
      setTimeout(() => {
        self.lockJigled = false;
      }, 1);
    },
    closeRoleForm() {
      this.roleEditing = null;
      this.creatingNewRole = false;
      this.showCreateRoleForm = false;
    },
    editRole(role) {
      this.roleFormKey += 1;
      this.roleEditing = role;
      this.creatingNewRole = false;
      this.showCreateRoleForm = true;
    },
    roleUpdated(data) {
      this.rolesData = this.rolesData.map((u) => u.id !== data.id ? u : data);
      this.getRoles();
      this.jiggleTheLock();
      this.closeRoleForm();
    },
    roleCreated(data) {
      this.rolesData.push(data);
      this.getRoles();
      this.closeRoleForm();
    },
    triggerCreateRole() {
      this.roleFormKey += 1;
      this.creatingNewRole = true;
      this.showCreateRoleForm = true;
      this.roleEditing = null;
    }
  }
};
const _hoisted_1 = {
  id: "roles",
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
const _hoisted_7 = {
  key: 0,
  class: "fas fa-plus fa-fw ml-2 mr-2"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Create New Role", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _component_PerPage = resolveComponent("PerPage");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_RolesTable = resolveComponent("RolesTable");
  const _component_RoleFormModal = resolveComponent("RoleFormModal");
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
            to: { name: "roles" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, " Roles ", 2)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]),
      $data.dataReady ? (openBlock(), createBlock(_component_PerPage, {
        key: 0,
        items: $data.rolesData,
        "per-page": $data.perPage,
        class: "float-right mb-2",
        style: { "margin-top": "-0.5em" },
        onChanged: $options.perPageChanged
      }, null, 8, ["items", "per-page", "onChanged"])) : createCommentVNode("", true)
    ]),
    withDirectives((openBlock(), createBlock(_component_AppButton, {
      disabled: $data.showCreateRoleForm || !$data.dataReady,
      class: "float-right mb-2 px-2 py-2 text-sm font-medium",
      onClick: $options.triggerCreateRole
    }, {
      text: withCtx(() => [
        $data.dataReady ? (openBlock(), createElementBlock("span", _hoisted_7)) : createCommentVNode("", true),
        !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
          key: 1,
          class: "ml-2 mr-2 mt-0 h-4 w-4"
        })) : createCommentVNode("", true),
        _hoisted_8
      ]),
      _: 1
    }, 8, ["disabled", "onClick"])), [
      [_directive_tippy, "Create Role"]
    ]),
    createVNode(_component_RolesTable, {
      "roles-data": $data.rolesData,
      pagination: $data.pagination,
      "per-page": $data.perPage,
      "data-ready": $data.dataReady,
      "lock-jiggled": $data.lockJigled,
      onGetRoles: $options.getRoles,
      onEditRole: $options.editRole,
      onDeleteRole: $options.deleteRole
    }, null, 8, ["roles-data", "pagination", "per-page", "data-ready", "lock-jiggled", "onGetRoles", "onEditRole", "onDeleteRole"]),
    (openBlock(), createBlock(_component_RoleFormModal, {
      key: $data.roleFormKey,
      "showing-form": $data.showCreateRoleForm,
      role: $data.roleEditing,
      "new-role": $data.creatingNewRole,
      "available-permissions": $data.availablePermissions,
      onCloseModal: $options.closeRoleForm,
      onRoleCreated: $options.roleCreated,
      onRoleUpdated: $options.roleUpdated
    }, null, 8, ["showing-form", "role", "new-role", "available-permissions", "onCloseModal", "onRoleCreated", "onRoleUpdated"]))
  ]);
}
const Roles = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Roles as default
};
