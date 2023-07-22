import { A as AppLogin } from "./AppLogin-ec70aa8d.js";
import { _ as _export_sfc } from "./app-a3809c34.js";
import { r as resolveComponent, o as openBlock, z as createBlock } from "./vendor-506bc2e6.js";
import "./vue-axios.esm.min-fa86a92f.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  name: "Login",
  components: {
    AppLogin
  },
  props: {
    showSmLogin: { type: Boolean, default: true }
  },
  setup() {
    return {};
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_login = resolveComponent("app-login");
  return openBlock(), createBlock(_component_app_login);
}
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Login as default
};
