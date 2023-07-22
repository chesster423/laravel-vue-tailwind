import { v as render, b as mapActions, h as hooks, Q as axios, r as resolveComponent, o as openBlock, z as createBlock, w as withCtx, E as createTextVNode, B as toDisplayString, D as createCommentVNode, e as createBaseVNode, C as withDirectives, ad as vModelText, n as normalizeClass, d as createVNode, c as createElementBlock, G as withModifiers, H as pushScopeId, I as popScopeId, az as render$1, aA as render$2, aB as render$3, aC as render$4, aD as render$5, a as mapGetters, y as resolveDirective } from "./vendor-506bc2e6.js";
import { A as AppModal, c as clonedeep, a as PerPage, P as Pagination } from "./default.css_vue_type_style_index_0_src_true_lang-1251d036.js";
import { s as script } from "./multiselect-da0ca839.js";
import { E as Errors } from "./Errors-65c5ea2a.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$1 = {
  name: "PermissionFormModal",
  components: {
    AppModal,
    UserCircleIcon: render,
    Multiselect: script,
    Errors
  },
  props: {
    showingForm: { type: Boolean, default: false },
    newPermission: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    permission: { type: Object, default: null },
    useInlineMessage: { type: Boolean, default: false },
    availableRoles: { type: Array, default: null }
  },
  setup() {
    return {};
  },
  data() {
    return {
      permissionName: "",
      form: {
        name: null,
        slug: null,
        description: null,
        roles: [],
        model: "Permission"
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
    if (self.permission) {
      self.form = clonedeep(self.permission);
      if (self.permission.name) {
        self.permissionName = self.permission.name;
      }
      self.form.roles = self.form.roles.map((el) => el.id);
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
      if (this.newPermission) {
        await this.createPermission();
      } else {
        await this.updatePermission();
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
        this.errors.name = "Missing Permission Name";
      }
      if (!this.form.slug) {
        if (!this.errors) {
          this.errors = {};
        }
        this.errors.slug = "Missing Permission Slug";
      }
      if (!this.errors) {
        return true;
      }
      return false;
    },
    async createPermission() {
      if (!this.formValid()) {
        this.submitting = false;
        this.popToast({
          message: "Error Validating Permission",
          timer: 5e3,
          icon: "error"
        });
        return;
      }
      await axios.post("/api/permissions/create-permission", this.form).then(({ data }) => {
        this.$emit("permissionCreated", data.permission);
        this.popToast({
          message: "Permission Successfully Created!",
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
            message: "Error Creating Permission",
            timer: 5e3,
            icon: "error"
          });
        }
        this.submitting = false;
      });
      this.submitting = false;
    },
    async updatePermission() {
      const self = this;
      if (!this.formValid()) {
        this.submitting = false;
        this.popToast({
          message: "Error Validating Permission",
          timer: 5e3,
          icon: "error"
        });
        return;
      }
      await axios.patch(
        `/api/permissions/update-permission/${self.permission.id}`,
        self.form
      ).then(({ data }) => {
        self.$emit("permissionUpdated", data.permission);
        self.popToast({
          message: `Permission ${data.permission.name} Successfully Updated!`,
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
            message: "Error Updating Permission",
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
const PermissionFormModal_vue_vue_type_style_index_1_scoped_50b02258_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-50b02258"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_2$1 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "name" }, " Name ", -1));
const _hoisted_4$1 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug text-slate-300" };
const _hoisted_5$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_6$1 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "slug" }, " Slug ", -1));
const _hoisted_8$1 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_9$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_10$1 = { class: "flex-item relative mb-3 flex-auto" };
const _hoisted_11$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "description" }, " Description ", -1));
const _hoisted_12$1 = { class: "absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug" };
const _hoisted_13$1 = { class: "relative mb-3 flex w-full flex-wrap items-stretch" };
const _hoisted_14$1 = { class: "flex-item relative mb-3 max-w-2xl flex-auto" };
const _hoisted_15$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h6", null, "Permission Roles", -1));
const _hoisted_16$1 = {
  key: 0,
  class: "relative mb-3 mt-5 flex w-full flex-wrap items-stretch"
};
const _hoisted_17 = { class: "flex-item relative flex-auto text-xs" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("strong", { class: "text-red-400" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "fas fa-warning fa-fw mr-1" }),
  /* @__PURE__ */ createTextVNode("Warning")
], -1));
const _hoisted_19 = { class: "font-bold" };
const _hoisted_20 = { class: "relative mb-3 mt-5 flex w-full flex-wrap items-stretch" };
const _hoisted_21 = { class: "flex-item relative flex-auto text-xs uppercase" };
const _hoisted_22 = {
  key: 0,
  class: "float-left"
};
const _hoisted_23 = { class: "text-xs font-bold" };
const _hoisted_24 = { class: "flex-item relative flex-auto text-xs uppercase" };
const _hoisted_25 = {
  key: 0,
  class: "float-right"
};
const _hoisted_26 = { class: "text-xs font-bold" };
const _hoisted_27 = { style: { "width": "100%" } };
const _hoisted_28 = {
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
      createTextVNode(toDisplayString($props.newPermission ? "Create Permission" : "Editing Permission " + $data.permissionName), 1)
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
        onSubmit: _cache[5] || (_cache[5] = withModifiers(() => {
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
        createBaseVNode("div", _hoisted_9$1, [
          createBaseVNode("div", _hoisted_10$1, [
            _hoisted_11$1,
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
            createBaseVNode("span", _hoisted_12$1, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "fas fa-pencil",
                  $data.errors && $data.errors.description ? "text-red-600" : "text-slate-300"
                ])
              }, null, 2)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_13$1, [
          createBaseVNode("div", _hoisted_14$1, [
            _hoisted_15$1,
            createVNode(_component_Multiselect, {
              modelValue: $data.form.roles,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.roles = $event),
              options: $props.availableRoles,
              "track-by": "id",
              label: "name",
              mode: "tags",
              placeholder: "Select permission roles"
            }, null, 8, ["modelValue", "options"])
          ])
        ]),
        $props.permission && $props.permission.users && $props.permission.users.length && $props.permission.users.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
          createBaseVNode("div", _hoisted_17, [
            _hoisted_18,
            createTextVNode(": This will affect "),
            createBaseVNode("span", _hoisted_19, toDisplayString($props.permission.users.length), 1),
            createTextVNode(" User" + toDisplayString($props.permission.users.length > 1 ? "s" : ""), 1)
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            $data.form.created_at ? (openBlock(), createElementBlock("div", _hoisted_22, [
              createTextVNode(" Created at: "),
              createBaseVNode("div", _hoisted_23, toDisplayString($options.parseDisplayDate($data.form.created_at)), 1)
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_24, [
            $data.form.updated_at ? (openBlock(), createElementBlock("div", _hoisted_25, [
              createTextVNode(" Updated at: "),
              createBaseVNode("div", _hoisted_26, toDisplayString($options.parseDisplayDate($data.form.updated_at)), 1)
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 32)
    ]),
    footer: withCtx(() => [
      createBaseVNode("div", _hoisted_27, [
        $data.changed ? (openBlock(), createBlock(_component_AppButton, {
          key: 0,
          disabled: $props.loading || $data.submitting || !$data.changed,
          class: "float-left border border-green-800 bg-transparent bg-transparent text-sm font-medium text-green-800 text-white shadow-md transition duration-150 ease-in-out hover:border-green-900 hover:bg-green-900 hover:text-white hover:shadow-lg focus:shadow-lg active:shadow-lg dark:hover:border-green-800 dark:hover:bg-green-800",
          onClick: $options.submit
        }, {
          text: withCtx(() => [
            createTextVNode(toDisplayString($props.newPermission ? $data.submitting ? "Creating" : "Create" : $data.submitting ? "Updating" : "Update") + " ", 1),
            $data.submitting ? (openBlock(), createElementBlock("span", _hoisted_28)) : createCommentVNode("", true)
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
const PermissionFormModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-50b02258"]]);
const _sfc_main = {
  name: "Permissions",
  components: {
    ChevronRightIcon: render$1,
    PermissionFormModal,
    CircleSvg,
    LockClosedIcon: render$2,
    LockOpenIcon: render$3,
    PencilSquareIcon: render$4,
    TrashIcon: render$5,
    PerPage,
    Pagination
    // AnimatedTableLoader,
  },
  props: {
    showDownload: { type: Boolean, default: false }
  },
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      permissionsData: null,
      pagination: {},
      perPage: 25,
      showCreatePermissionForm: false,
      permissionEditing: null,
      creatingNewPermission: false,
      permissionFormKey: 432489,
      tableColumns: [
        "id",
        "name",
        "slug",
        "description",
        // 'model',
        "roles",
        "users",
        "created_at",
        "updated_at",
        "actions"
      ],
      tableOptions: {
        name: "permissionsTable",
        perPage: 25,
        uniqueKey: "id",
        highlightMatches: true,
        columnsDropdown: false,
        skin: null,
        saveState: true,
        storage: "local",
        headings: {
          actions: ""
        },
        columnsClasses: {
          id: "text-sm text-nowrap",
          name: "text-sm text-nowrap",
          slug: "text-sm text-nowrap",
          description: "text-sm text-nowrap",
          model: "text-sm text-nowrap",
          roles: "text-sm text-nowrap",
          users: "text-sm text-nowrap",
          created_at: "text-sm text-nowrap",
          updated_at: "text-sm text-nowrap",
          actions: "text-nowrap"
        },
        texts: {},
        orderBy: {
          column: "id",
          ascending: false
        },
        pagination: {
          virtual: true
        },
        sortIcon: {
          base: "ml-1 fa-fw fas",
          up: "fa-sort-up",
          down: "fa-sort-down",
          is: "fa-sort"
        },
        filterable: [
          "id",
          "name",
          "slug",
          "description",
          "model",
          "created_at",
          "updated_at",
          "roles",
          "users"
        ],
        sortable: [
          "id",
          "name",
          "slug",
          "description",
          "model",
          "created_at",
          "updated_at",
          "roles",
          "users"
        ],
        dateColumns: ["created_at", "updated_at"],
        filterByColumn: false,
        editableColumns: ["name"]
      },
      rowsUnlocked: [],
      availableRoles: [],
      rolesDataReady: false,
      permissionsTableKey: 432876
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
    this.getPermissions();
    this.getRoles();
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
      this.getPermissions();
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
    async getPermissions(updatedPage = null) {
      if (updatedPage) {
        this.pagination.current_page = updatedPage;
      }
      await axios.get(
        `/api/permissions-paginated?page=${this.pagination.current_page}&per=${this.perPage}`
      ).then(({ data }) => {
        this.permissionsData = data.data;
        delete data.data;
        this.pagination = data;
        this.dataReady = true;
        this.permissionsTableKey += 1;
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Getting Permissions",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
      this.dataReady = true;
    },
    triggerDeletePermission(row) {
      const self = this;
      const title = "<strong>Delete Permission?</strong>";
      const html = "Are you sure you want to <strong>Delete";
      `${row.name}</strong>?<h6>This will delete the Permission.</h6>`;
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
          this.deletePermission(row);
        } else if (result.isDenied) {
          self.popToast({
            message: "Cancelled",
            timer: 2e3,
            icon: "error"
          });
        }
      });
    },
    async deletePermission(value) {
      await axios.delete(`/api/permissions/delete/permission/${value.id}`).then(({ data }) => {
        this.permissionsData = this.permissionsData.filter(
          (u) => u.id != data.id
        );
        this.rowsUnlocked = this.rowsUnlocked.filter((i) => i != value.id);
        this.pagination.total = this.pagination.total - 1;
        this.getPermissions(
          this.pagination.current_page ? this.pagination.current_page : null
        );
        this.rowsUnlocked = [];
        this.popToast({
          message: "Successfully Deleted Permission!",
          timer: 5e3,
          icon: "success"
        });
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Deleting Permission",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
    },
    closePermissionForm() {
      this.permissionEditing = null;
      this.creatingNewPermission = false;
      this.showCreatePermissionForm = false;
    },
    triggerEditPermission(permission) {
      this.permissionFormKey += 1;
      this.permissionEditing = permission;
      this.creatingNewPermission = false;
      this.showCreatePermissionForm = true;
    },
    permissionUpdated(data) {
      this.permissionsData = this.permissionsData.map(
        (u) => u.id !== data.id ? u : data
      );
      this.rowsUnlocked = [];
      this.getPermissions();
      this.closePermissionForm();
    },
    permissionCreated(data) {
      this.permissionsData.push(data);
      this.rowsUnlocked = [];
      this.getPermissions();
      this.closePermissionForm();
    },
    triggerCreatePermission() {
      this.permissionFormKey += 1;
      this.creatingNewPermission = true;
      this.showCreatePermissionForm = true;
      this.permissionEditing = null;
    },
    parseDisplayDate(date) {
      return hooks(date).format("MMM Do YYYY, h:mma");
    },
    inputValid(key, row) {
      if (row[key] == "" || row[key] == null || row[key].length == 0) {
        return false;
      }
      if (row[key].length > 0) {
        return true;
      }
      return false;
    },
    async update(key, row) {
      const self = this;
      if (!this.inputValid(key, row)) {
        this.submitting = false;
        this.popToast({
          message: "Error Validating Permission",
          timer: 5e3,
          icon: "error"
        });
        return;
      }
      await axios.patch(`/api/permissions/update-permission/${row.id}`, row).then(({ data }) => {
        self.permissionUpdated(data.permission);
        self.popToast({
          message: `Permission ${data.permission.name} Successfully Updated!`,
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
            message: "Error Updating Permission",
            timer: 5e3,
            icon: "error"
          });
        }
        self.submitting = false;
      });
      self.submitting = false;
    },
    toggleLock(row, reset = false) {
      const found = this.rowsUnlocked.find((i) => i == row.id);
      if (reset) {
        this.rowsUnlocked = [];
        this.rowsUnlocked.push(row.id);
      } else if (found) {
        this.rowsUnlocked = this.rowsUnlocked.filter((i) => i != row.id);
      } else {
        this.rowsUnlocked.push(row.id);
      }
    },
    locked(row) {
      const found = this.rowsUnlocked.find((obj) => obj == row.id);
      if (found) {
        return false;
      }
      return true;
    }
  }
};
const _hoisted_1 = {
  id: "permissions",
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
const _hoisted_7 = { class: "flex justify-end" };
const _hoisted_8 = {
  key: 0,
  class: "fas fa-plus fa-fw ml-2 mr-2"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Create New Permission", -1);
const _hoisted_10 = ["onUpdate:modelValue", "readonly", "onBlur"];
const _hoisted_11 = ["onUpdate:modelValue", "readonly", "onBlur"];
const _hoisted_12 = ["onUpdate:modelValue", "readonly", "onBlur"];
const _hoisted_13 = { class: "sr-only" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Edit Permission", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Delete Permission", -1);
const _hoisted_16 = { colspan: "10" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _component_PerPage = resolveComponent("PerPage");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_LockClosedIcon = resolveComponent("LockClosedIcon");
  const _component_LockOpenIcon = resolveComponent("LockOpenIcon");
  const _component_PencilSquareIcon = resolveComponent("PencilSquareIcon");
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_Pagination = resolveComponent("Pagination");
  const _component_v_client_table = resolveComponent("v-client-table");
  const _component_PermissionFormModal = resolveComponent("PermissionFormModal");
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
            to: { name: "permissions" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, " Permissions ", 2)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]),
      $data.dataReady ? (openBlock(), createBlock(_component_PerPage, {
        key: 0,
        items: $data.permissionsData,
        "per-page": $data.perPage,
        class: "float-right mb-2",
        style: { "margin-top": "-0.5em" },
        onChanged: $options.perPageChanged
      }, null, 8, ["items", "per-page", "onChanged"])) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_7, [
      withDirectives((openBlock(), createBlock(_component_AppButton, {
        disabled: $data.showCreatePermissionForm || !$data.dataReady,
        class: "mb-2 px-2 py-2 text-sm font-medium",
        onClick: $options.triggerCreatePermission
      }, {
        text: withCtx(() => [
          $data.dataReady ? (openBlock(), createElementBlock("span", _hoisted_8)) : createCommentVNode("", true),
          !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
            key: 1,
            class: "ml-2 mr-2 mt-0 h-4 w-4"
          })) : createCommentVNode("", true),
          _hoisted_9
        ]),
        _: 1
      }, 8, ["disabled", "onClick"])), [
        [_directive_tippy, "Create Permission"]
      ]),
      $props.showDownload ? withDirectives((openBlock(), createBlock(_component_AppButton, {
        key: 0,
        class: "mb-2 ml-3 px-2 py-2 text-sm font-medium",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$refs.permissionsTable.downloadCsv(_ctx.filename = "permissions.csv"))
      }, {
        text: withCtx(() => [
          createTextVNode(" Download ")
        ]),
        _: 1
      })), [
        [_directive_tippy, "Download Data"]
      ]) : createCommentVNode("", true)
    ]),
    $data.dataReady ? (openBlock(), createBlock(_component_v_client_table, {
      ref: "permissionsTable",
      key: $data.permissionsTableKey,
      data: $data.permissionsData,
      columns: $data.tableColumns,
      options: $data.tableOptions
    }, {
      name: withCtx((props) => [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": ($event) => props.row.name = $event,
          type: "text",
          class: normalizeClass(["rounded border-0 bg-transparent text-sm", $options.locked(props.row) ? "disabled" : ""]),
          readonly: $options.locked(props.row),
          onBlur: ($event) => $options.update("name", props.row)
        }, null, 42, _hoisted_10), [
          [vModelText, props.row.name],
          [_directive_tippy, "Edit Permission Name"]
        ])
      ]),
      slug: withCtx((props) => [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": ($event) => props.row.slug = $event,
          type: "text",
          class: normalizeClass(["rounded border-0 bg-transparent text-sm", $options.locked(props.row) ? "disabled" : ""]),
          readonly: $options.locked(props.row),
          onBlur: ($event) => $options.update("slug", props.row)
        }, null, 42, _hoisted_11), [
          [vModelText, props.row.slug],
          [_directive_tippy, "Edit Permission Slug"]
        ])
      ]),
      description: withCtx((props) => [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": ($event) => props.row.description = $event,
          type: "text",
          class: normalizeClass(["rounded border-0 bg-transparent text-sm", $options.locked(props.row) ? "disabled" : ""]),
          readonly: $options.locked(props.row),
          onBlur: ($event) => $options.update("description", props.row)
        }, null, 42, _hoisted_12), [
          [vModelText, props.row.description],
          [_directive_tippy, "Edit Permission Description"]
        ])
      ]),
      roles: withCtx((props) => [
        createTextVNode(toDisplayString(props.row.roles.length), 1)
      ]),
      users: withCtx((props) => [
        createTextVNode(toDisplayString(props.row.users.length), 1)
      ]),
      created_at: withCtx((props) => [
        createTextVNode(toDisplayString(props.row.created_at ? $options.parseDisplayDate(props.row.created_at) : null), 1)
      ]),
      updated_at: withCtx((props) => [
        createTextVNode(toDisplayString(props.row.updated_at ? $options.parseDisplayDate(props.row.updated_at) : null), 1)
      ]),
      actions: withCtx((props) => [
        createVNode(_component_AppButton, {
          loading: !$data.dataReady,
          class: "mr-2 inline-block rounded px-1 py-1 text-sm font-medium leading-snug leading-snug text-gray-700 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg dark:text-white",
          "btn-class": $options.locked(props.row) ? "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
          "btn-hover-class": $options.locked(props.row) ? "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
          "btn-class-dark": $options.locked(props.row) ? "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
          "btn-hover-class-dark": $options.locked(props.row) ? "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent" : "hover:bg-transparent focus:bg-transparent active:bg-transparent dark:focus:bg-transparent dark:active:bg-transparent dark:hover:bg-transparent",
          onClick: ($event) => $options.toggleLock(props.row, false)
        }, {
          text: withCtx(() => [
            $options.locked(props.row) && $data.dataReady ? (openBlock(), createBlock(_component_LockClosedIcon, {
              key: 0,
              class: "ml-2 mr-2 mt-0 h-4 w-4"
            })) : createCommentVNode("", true),
            !$options.locked(props.row) && $data.dataReady ? (openBlock(), createBlock(_component_LockOpenIcon, {
              key: 1,
              class: "ml-2 mr-2 mt-0 h-4 w-4"
            })) : createCommentVNode("", true),
            !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
              key: 2,
              class: "mr-2 h-3 w-3"
            })) : createCommentVNode("", true),
            createBaseVNode("span", _hoisted_13, toDisplayString($options.locked(props.row) ? "Unlock" : "Lock") + " User Settings", 1)
          ]),
          _: 2
        }, 1032, ["loading", "btn-class", "btn-hover-class", "btn-class-dark", "btn-hover-class-dark", "onClick"]),
        withDirectives((openBlock(), createBlock(_component_AppButton, {
          warning: "",
          disabled: $options.locked(props.row),
          loading: !$data.dataReady,
          class: "mr-2 px-1 py-1 text-sm",
          onClick: ($event) => $options.triggerEditPermission(props.row)
        }, {
          text: withCtx(() => [
            $data.dataReady ? (openBlock(), createBlock(_component_PencilSquareIcon, {
              key: 0,
              class: "ml-2 mr-2 mt-0 h-4 w-4"
            })) : createCommentVNode("", true),
            !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
              key: 1,
              class: "mr-2 h-3 w-3"
            })) : createCommentVNode("", true),
            _hoisted_14
          ]),
          _: 2
        }, 1032, ["disabled", "loading", "onClick"])), [
          [_directive_tippy, "Edit Permission"]
        ]),
        withDirectives((openBlock(), createBlock(_component_AppButton, {
          danger: "",
          disabled: $options.locked(props.row),
          loading: !$data.dataReady,
          class: "mr-2 px-1 py-1 text-sm",
          onClick: ($event) => $options.triggerDeletePermission(props.row)
        }, {
          text: withCtx(() => [
            $data.dataReady ? (openBlock(), createBlock(_component_TrashIcon, {
              key: 0,
              class: "ml-2 mr-2 mt-0 h-4 w-4"
            })) : createCommentVNode("", true),
            !$data.dataReady ? (openBlock(), createBlock(_component_CircleSvg, {
              key: 1,
              class: "mr-2 h-3 w-3"
            })) : createCommentVNode("", true),
            _hoisted_15
          ]),
          _: 2
        }, 1032, ["disabled", "loading", "onClick"])), [
          [_directive_tippy, "Delete Permission"]
        ])
      ]),
      afterBody: withCtx(() => [
        createBaseVNode("tfoot", null, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_16, [
              createVNode(_component_Pagination, {
                pagination: $data.pagination,
                offset: 4,
                onPaginate: $options.getPermissions
              }, null, 8, ["pagination", "onPaginate"])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["data", "columns", "options"])) : createCommentVNode("", true),
    (openBlock(), createBlock(_component_PermissionFormModal, {
      key: $data.permissionFormKey,
      "showing-form": $data.showCreatePermissionForm,
      permission: $data.permissionEditing,
      "new-permission": $data.creatingNewPermission,
      "available-roles": $data.availableRoles,
      onCloseModal: $options.closePermissionForm,
      onPermissionCreated: $options.permissionCreated,
      onPermissionUpdated: $options.permissionUpdated
    }, null, 8, ["showing-form", "permission", "new-permission", "available-roles", "onCloseModal", "onPermissionCreated", "onPermissionUpdated"]))
  ]);
}
const Permissions = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Permissions as default
};
