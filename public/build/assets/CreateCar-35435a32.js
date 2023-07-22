import { az as render, aF as render$1, aC as render$2, q as render$3, x as ue, a as mapGetters, b as mapActions, Q as axios, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, d as createVNode, w as withCtx, n as normalizeClass, D as createCommentVNode, C as withDirectives, aG as vModelSelect, J as Fragment, K as renderList, B as toDisplayString, ad as vModelText, z as createBlock, E as createTextVNode, H as pushScopeId, I as popScopeId } from "./vendor-506bc2e6.js";
import { C as CircleSvg, _ as _export_sfc } from "./app-a3809c34.js";
import { A as AppAccordion } from "./AppAccordion-58070a4d.js";
import { P as PageScrollButton } from "./default.css_vue_type_style_index_1_src_true_lang-9ed51729.js";
import { s as script } from "./multiselect-da0ca839.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "CreateCar",
  components: {
    Multiselect: script,
    ChevronRightIcon: render,
    PlusIcon: render$1,
    CircleSvg,
    PencilSquareIcon: render$2,
    AppAccordion,
    XMarkIcon: render$3,
    PageScrollButton,
    Switch: ue
    // eslint-disable-line
  },
  props: {
    showingForm: { type: Boolean, default: false }
  },
  setup() {
    return {};
  },
  data() {
    return {
      dataReady: false,
      showCreateUserForm: false,
      showModal: false,
      brandName: null,
      car: {
        images: [""],
        persona: {
          gender: null,
          ages: [],
          personalities: [],
          perks: [],
          activities: []
        },
        is_active: true
      },
      filters: {},
      carBrands: [],
      vehicleTypes: [],
      activities: []
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles",
      ages: "funnel/getAges",
      personalities: "funnel/getPersonalities",
      perks: "funnel/getPersonalPreferences",
      fuel_types: "funnel/getFuelTypes"
    }),
    activities_data() {
      const data = [];
      this.activities.forEach((v, index) => {
        const obj = {
          value: v.slug,
          label: v.activity_name
        };
        data.push(obj);
      });
      return data;
    },
    personalities_data() {
      const data = [];
      this.personalities.forEach((v, index) => {
        const obj = {
          value: v.value,
          label: v.text
        };
        data.push(obj);
      });
      return data;
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    this.getCarBrands();
    this.getVehicleTypes();
    this.getActivities();
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    resetCarAttributes() {
      this.car = {
        images: [""],
        persona: {
          gender: null,
          ages: [],
          personalities: [],
          perks: [],
          activities: []
        }
      };
    },
    showModalForm() {
      this.showModal = true;
    },
    async getCarBrands() {
      await axios.get("../../api/car_brands").then((response) => {
        this.carBrands = response.data;
      });
    },
    async getVehicleTypes() {
      await axios.get("../../api/vehicle_types").then((response) => {
        this.vehicleTypes = response.data;
      });
    },
    async getActivities() {
      await axios.get("../../api/activities").then((response) => {
        this.activities = response.data;
      });
    },
    async submit() {
      await axios.post("../../api/car", this.car).then((response) => {
        this.popToast({
          message: "Car saved!",
          timer: 5e3,
          icon: "success"
        });
        this.resetCarAttributes();
        this.scrollToTop();
      }).catch((error) => {
        this.popToast({
          message: error.response.data.message,
          timer: 5e3,
          icon: "error"
        });
      });
    },
    addMoreCarImage() {
      if (this.car.images.length >= 10) {
        this.popToast({
          message: "You can only add up to 10 images.",
          timer: 5e3,
          icon: "error"
        });
      } else {
        this.car.images.push("");
      }
    },
    removeImage(index) {
      this.car.images.splice(index, 1);
    },
    toggleActive() {
      return 0;
    }
  }
};
const CreateCar_vue_vue_type_style_index_0_scoped_3c38bc62_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3c38bc62"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  id: "create-car",
  class: "bg-white p-3 dark:bg-slate-800 dark:text-gray-200"
};
const _hoisted_2 = { class: "container p-5" };
const _hoisted_3 = { class: "gap-10 lg:grid lg:grid-cols-2" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Basic Information", -1));
const _hoisted_5 = { class: "mt-5 grid grid-flow-row" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Toggle Theme", -1));
const _hoisted_8 = { class: "ml-2" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = {
  key: 1,
  class: "text-gray-400"
};
const _hoisted_11 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-3" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "brand",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Brand", -1));
const _hoisted_13 = ["value"];
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "vehicle-type",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Vehicle Type", -1));
const _hoisted_15 = ["value"];
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "model",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Model", -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "model-year",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Year", -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "cost",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Cost", -1));
const _hoisted_19 = { class: "grid grid-flow-row" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "dealership_url",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Dealership URL", -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Dimensions", -1));
const _hoisted_23 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-3" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "dimension_length_mm",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Length(mm)", -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "dimension_width_mm",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Width(mm)", -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "dimension_height_mm",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Height(mm)", -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "dimension_ground_clearance_mm",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Ground Clearance(mm)", -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "dimension_kerb_weight_kg",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Kerb Weight(kg)", -1));
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "seat_capacity",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Seat Capacity", -1));
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "doors",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Doors", -1));
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "boot_space_l",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Boot/Load Space Min(L)", -1));
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Engine", -1));
const _hoisted_34 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-3" };
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "engine_type",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Engine Type", -1));
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "engine_size",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Size", -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "engine_config",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Config", -1));
const _hoisted_38 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "engine_cylinders",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Cylinders", -1));
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "engine_induction",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Induction", -1));
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "engine_horseppower",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Horsepower", -1));
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Drivetrain", -1));
const _hoisted_43 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-3" };
const _hoisted_44 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "drive_train_transmission",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Transmission", -1));
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "drive_train_type",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Drive Type", -1));
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_47 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Fuel", -1));
const _hoisted_48 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-3" };
const _hoisted_49 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "fuel_type2",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Fuel Type", -1));
const _hoisted_50 = ["value"];
const _hoisted_51 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "fuel_type",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Fuel Type(Deprecated)", -1));
const _hoisted_52 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "fuel_capacity_l",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Capacity", -1));
const _hoisted_53 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "fuel_RON_rating",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "RON Rating", -1));
const _hoisted_54 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "fuel_consumption_combined",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Fuel Consumption Combined", -1));
const _hoisted_55 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "fuel_co2_emission_combined",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "CO2 Emission Combined", -1));
const _hoisted_56 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_57 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Warranty", -1));
const _hoisted_58 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-3" };
const _hoisted_59 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "warranty_coverage",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Coverage", -1));
const _hoisted_60 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_61 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "ANCAP", -1));
const _hoisted_62 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-3" };
const _hoisted_63 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "ANCAP_rating",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Rating", -1));
const _hoisted_64 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_65 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Description", -1));
const _hoisted_66 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-2" };
const _hoisted_67 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "overview",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Overview", -1));
const _hoisted_68 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "positives",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Positives", -1));
const _hoisted_69 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "consideration",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Consideration", -1));
const _hoisted_70 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "verdict",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Verdict", -1));
const _hoisted_71 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_72 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Features", -1));
const _hoisted_73 = { class: "mb-6 mt-6" };
const _hoisted_74 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "features",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Specifications", -1));
const _hoisted_75 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_76 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Images", -1));
const _hoisted_77 = { class: "mb-6 mt-6" };
const _hoisted_78 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "image_url",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Image URL", -1));
const _hoisted_79 = ["onUpdate:modelValue"];
const _hoisted_80 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Remove Image", -1));
const _hoisted_81 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", { class: "mb-5" }, null, -1));
const _hoisted_82 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-xl font-semibold" }, "Persona", -1));
const _hoisted_83 = { class: "mb-6 mt-5 grid gap-6 md:grid-cols-2" };
const _hoisted_84 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "gender",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Gender", -1));
const _hoisted_85 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "male" }, "Male", -1));
const _hoisted_86 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "female" }, "Female", -1));
const _hoisted_87 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("option", { value: "na" }, "Prefer not to say", -1));
const _hoisted_88 = [
  _hoisted_85,
  _hoisted_86,
  _hoisted_87
];
const _hoisted_89 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "ages",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Ages", -1));
const _hoisted_90 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "ages",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Personalities", -1));
const _hoisted_91 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "perks",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Perks", -1));
const _hoisted_92 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", {
  for: "activities",
  class: "mb-2 block text-sm font-medium text-gray-900 dark:text-white"
}, "Activities", -1));
const _hoisted_93 = { class: "submit-btn create-submit-button-container container p-5" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_page_scroll_button = resolveComponent("page-scroll-button");
  const _component_Switch = resolveComponent("Switch");
  const _component_app_accordion = resolveComponent("app-accordion");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_Multiselect = resolveComponent("Multiselect");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_page_scroll_button),
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", null, [
          createVNode(_component_app_accordion, { class: "mb-4" }, {
            title: withCtx(() => [
              _hoisted_4
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", null, [
                    createVNode(_component_Switch, {
                      modelValue: $data.car.is_active,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.car.is_active = $event),
                      class: normalizeClass([$data.car.is_active ? "bg-green-400" : "bg-gray-200", "relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"])
                    }, {
                      default: withCtx(() => [
                        _hoisted_7,
                        createBaseVNode("span", {
                          "aria-hidden": "true",
                          class: normalizeClass([
                            $data.car.is_active ? "translate-x-5 bg-white" : "translate-x-0 bg-white",
                            "pointer-events-none inline-block h-[22px] w-[24px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
                          ])
                        }, null, 2)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "class"])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    $data.car.is_active ? (openBlock(), createElementBlock("span", _hoisted_9, "Active")) : createCommentVNode("", true),
                    !$data.car.is_active ? (openBlock(), createElementBlock("span", _hoisted_10, "Set to active")) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("div", null, [
                  _hoisted_12,
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.car.car_brand_id = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.carBrands, (val, key) => {
                      return openBlock(), createElementBlock("option", {
                        key,
                        value: val.id
                      }, toDisplayString(val.brand_name), 9, _hoisted_13);
                    }), 128))
                  ], 512), [
                    [vModelSelect, $data.car.car_brand_id]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_14,
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.car.vehicle_type_id = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList($data.vehicleTypes, (val, key) => {
                      return openBlock(), createElementBlock("option", {
                        key,
                        value: val.id
                      }, toDisplayString(val.vehicle_type_name), 9, _hoisted_15);
                    }), 128))
                  ], 512), [
                    [vModelSelect, $data.car.vehicle_type_id]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_16,
                  withDirectives(createBaseVNode("input", {
                    id: "model",
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.car.model = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    placeholder: "Model",
                    required: ""
                  }, null, 512), [
                    [vModelText, $data.car.model]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_17,
                  withDirectives(createBaseVNode("input", {
                    id: "model-year",
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.car.model_year = $event),
                    type: "tel",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    placeholder: "",
                    required: ""
                  }, null, 512), [
                    [vModelText, $data.car.model_year]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_18,
                  withDirectives(createBaseVNode("input", {
                    id: "cost",
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.car.cost = $event),
                    type: "tel",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    placeholder: "",
                    required: ""
                  }, null, 512), [
                    [vModelText, $data.car.cost]
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", null, [
                  _hoisted_20,
                  withDirectives(createBaseVNode("input", {
                    id: "dealership_url",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.car.dealership_url = $event),
                    type: "tel",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
                    placeholder: "",
                    required: ""
                  }, null, 512), [
                    [vModelText, $data.car.dealership_url]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_21,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_22
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", null, [
                  _hoisted_24,
                  withDirectives(createBaseVNode("input", {
                    id: "dimension_length_mm",
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.car.dimension_length_mm = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.dimension_length_mm]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_25,
                  withDirectives(createBaseVNode("input", {
                    id: "dimension_width_mm",
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.car.dimension_width_mm = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.dimension_width_mm]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_26,
                  withDirectives(createBaseVNode("input", {
                    id: "dimension_height_mm",
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.car.dimension_height_mm = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.dimension_height_mm]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_27,
                  withDirectives(createBaseVNode("input", {
                    id: "dimension_ground_clearance_mm",
                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.car.dimension_ground_clearance_mm = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.dimension_ground_clearance_mm]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_28,
                  withDirectives(createBaseVNode("input", {
                    id: "dimension_kerb_weight_kg",
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.car.dimension_kerb_weight_kg = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.dimension_kerb_weight_kg]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_29,
                  withDirectives(createBaseVNode("input", {
                    id: "seat_capacity",
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.car.seat_capacity = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.seat_capacity]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_30,
                  withDirectives(createBaseVNode("input", {
                    id: "doors",
                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.car.doors = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.doors]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_31,
                  withDirectives(createBaseVNode("input", {
                    id: "boot_space_l",
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.car.boot_space_l = $event),
                    type: "number",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.boot_space_l]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_32,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_33
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", null, [
                  _hoisted_35,
                  withDirectives(createBaseVNode("input", {
                    id: "engine_type",
                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.car.engine_type = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.engine_type]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_36,
                  withDirectives(createBaseVNode("input", {
                    id: "engine_size",
                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => $data.car.engine_size = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.engine_size]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_37,
                  withDirectives(createBaseVNode("input", {
                    id: "engine_config",
                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => $data.car.engine_config = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.engine_config]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_38,
                  withDirectives(createBaseVNode("input", {
                    id: "engine_cylinders",
                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => $data.car.engine_cylinders = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.engine_cylinders]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_39,
                  withDirectives(createBaseVNode("input", {
                    id: "engine_induction",
                    "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => $data.car.engine_induction = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.engine_induction]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_40,
                  withDirectives(createBaseVNode("input", {
                    id: "engine_horseppower",
                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => $data.car.engine_horseppower = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.engine_horseppower]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_41,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_42
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_43, [
                createBaseVNode("div", null, [
                  _hoisted_44,
                  withDirectives(createBaseVNode("input", {
                    id: "drive_train_transmission",
                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => $data.car.drive_train_transmission = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.drive_train_transmission]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_45,
                  withDirectives(createBaseVNode("input", {
                    id: "drive_train_type",
                    "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $data.car.drive_train_type = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.drive_train_type]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_46,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_47
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_48, [
                createBaseVNode("div", null, [
                  _hoisted_49,
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => $data.car.fuel_type2 = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.fuel_types, (val, key) => {
                      return openBlock(), createElementBlock("option", {
                        key,
                        value: val.value
                      }, toDisplayString(val.type), 9, _hoisted_50);
                    }), 128))
                  ], 512), [
                    [vModelSelect, $data.car.fuel_type2]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_51,
                  withDirectives(createBaseVNode("input", {
                    id: "fuel_type",
                    "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => $data.car.fuel_type = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.fuel_type]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_52,
                  withDirectives(createBaseVNode("input", {
                    id: "fuel_capacity_l",
                    "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => $data.car.fuel_capacity_l = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.fuel_capacity_l]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_53,
                  withDirectives(createBaseVNode("input", {
                    id: "fuel_RON_rating",
                    "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => $data.car.fuel_RON_rating = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.fuel_RON_rating]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_54,
                  withDirectives(createBaseVNode("input", {
                    id: "fuel_consumption_combined",
                    "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => $data.car.fuel_consumption_combined = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.fuel_consumption_combined]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_55,
                  withDirectives(createBaseVNode("input", {
                    id: "fuel_co2_emission_combined",
                    "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => $data.car.fuel_co2_emission_combined = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.fuel_co2_emission_combined]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_56,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_57
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_58, [
                createBaseVNode("div", null, [
                  _hoisted_59,
                  withDirectives(createBaseVNode("input", {
                    id: "warranty_coverage",
                    "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => $data.car.warranty_coverage = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.warranty_coverage]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_60,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_61
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_62, [
                createBaseVNode("div", null, [
                  _hoisted_63,
                  withDirectives(createBaseVNode("input", {
                    id: "ANCAP_rating",
                    "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => $data.car.ANCAP_rating = $event),
                    type: "text",
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.ANCAP_rating]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_64,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_65
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_66, [
                createBaseVNode("div", null, [
                  _hoisted_67,
                  withDirectives(createBaseVNode("textarea", {
                    id: "overview",
                    "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => $data.car.overview = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.overview]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_68,
                  withDirectives(createBaseVNode("textarea", {
                    id: "positives",
                    "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => $data.car.positives = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.positives]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_69,
                  withDirectives(createBaseVNode("textarea", {
                    id: "consideration",
                    "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => $data.car.consideration = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.consideration]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_70,
                  withDirectives(createBaseVNode("textarea", {
                    id: "verdict",
                    "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => $data.car.verdict = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, null, 512), [
                    [vModelText, $data.car.verdict]
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_71,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_72
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_73, [
                _hoisted_74,
                withDirectives(createBaseVNode("textarea", {
                  id: "features",
                  "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => $data.car.features = $event),
                  class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                }, null, 512), [
                  [vModelText, $data.car.features]
                ])
              ])
            ]),
            _: 1
          }),
          _hoisted_75,
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_76
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_77, [
                _hoisted_78,
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.car.images, (val, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: "mt-4 flex gap-3"
                  }, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": ($event) => $data.car.images[key] = $event,
                      type: "text",
                      class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    }, null, 8, _hoisted_79), [
                      [vModelText, $data.car.images[key]]
                    ]),
                    key > 0 ? (openBlock(), createBlock(_component_AppButton, {
                      key: 0,
                      warning: "",
                      class: "mr-2 p-3 text-sm",
                      onClick: ($event) => $options.removeImage(key)
                    }, {
                      text: withCtx(() => [
                        createVNode(_component_XMarkIcon, { class: "ml-2 mr-2 mt-0 h-4 w-4" }),
                        _hoisted_80
                      ]),
                      _: 2
                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                  ]);
                }), 128)),
                createVNode(_component_AppButton, {
                  class: "mx-auto mt-5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
                  onClick: _cache[36] || (_cache[36] = ($event) => $options.addMoreCarImage())
                }, {
                  text: withCtx(() => [
                    createTextVNode(" Add more image ")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          _hoisted_81
        ]),
        createBaseVNode("div", null, [
          createVNode(_component_app_accordion, { class: "mb-8" }, {
            title: withCtx(() => [
              _hoisted_82
            ]),
            content: withCtx(() => [
              createBaseVNode("div", _hoisted_83, [
                createBaseVNode("div", null, [
                  _hoisted_84,
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => $data.car.persona.gender = $event),
                    class: "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  }, _hoisted_88, 512), [
                    [vModelSelect, $data.car.persona.gender]
                  ])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_89,
                  createVNode(_component_Multiselect, {
                    modelValue: $data.car.persona.ages,
                    "onUpdate:modelValue": _cache[38] || (_cache[38] = ($event) => $data.car.persona.ages = $event),
                    mode: "tags",
                    "close-on-select": false,
                    searchable: true,
                    "create-option": true,
                    options: _ctx.ages
                  }, null, 8, ["modelValue", "options"])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_90,
                  createVNode(_component_Multiselect, {
                    modelValue: $data.car.persona.personalities,
                    "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => $data.car.persona.personalities = $event),
                    mode: "tags",
                    "close-on-select": false,
                    searchable: true,
                    "create-option": true,
                    label: "label",
                    options: $options.personalities_data
                  }, null, 8, ["modelValue", "options"])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_91,
                  createVNode(_component_Multiselect, {
                    modelValue: $data.car.persona.perks,
                    "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => $data.car.persona.perks = $event),
                    mode: "tags",
                    "close-on-select": false,
                    searchable: true,
                    "create-option": true,
                    label: "car_text",
                    options: _ctx.perks
                  }, null, 8, ["modelValue", "options"])
                ]),
                createBaseVNode("div", null, [
                  _hoisted_92,
                  createVNode(_component_Multiselect, {
                    modelValue: $data.car.persona.activities,
                    "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => $data.car.persona.activities = $event),
                    mode: "tags",
                    "close-on-select": false,
                    searchable: true,
                    "create-option": true,
                    label: "label",
                    options: $options.activities_data
                  }, null, 8, ["modelValue", "options"])
                ])
              ])
            ]),
            _: 1
          })
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_93, [
      createBaseVNode("button", {
        ref: "createSubmitButton",
        type: "submit",
        class: "w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto",
        onClick: _cache[42] || (_cache[42] = ($event) => $options.submit())
      }, " Submit ", 512)
    ])
  ]);
}
const CreateCar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c38bc62"]]);
export {
  CreateCar as default
};
