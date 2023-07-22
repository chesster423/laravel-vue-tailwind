import { Q as axios, o as openBlock, c as createElementBlock, r as resolveComponent, d as createVNode } from "./vendor-506bc2e6.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main$1 = {
  components: {},
  props: {
    showSmLogin: { type: Boolean, default: true }
  },
  data() {
    return {
      id: this.$route.params.id,
      car: {}
    };
  },
  computed: {},
  mounted() {
    this.findCar();
  },
  methods: {
    async findCar() {
      await axios.get("../../../api/car/" + this.id).then((response) => {
        this.car = response.data;
      });
    }
  }
};
const _hoisted_1$1 = { class: "mx-auto mt-5 max-w-screen-md text-gray-900" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1);
}
const CarInformation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    CarInformation
  },
  props: {
    showSmLogin: { type: Boolean, default: true }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
const _hoisted_1 = { class: "mx-auto mt-5 max-w-screen-md text-gray-900" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_car_information = resolveComponent("car-information");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_car_information)
  ]);
}
const CarInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  CarInfo as default
};
