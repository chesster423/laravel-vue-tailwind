import { _ as _export_sfc, t as track } from "./app-a3809c34.js";
import { s as render, am as render$1, an as render$2, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, d as createVNode, w as withCtx, E as createTextVNode } from "./vendor-506bc2e6.js";
import "./__commonjsHelpers__-7a7fcd32.js";
const _sfc_main = {
  components: {
    CogIcon: render,
    UserIcon: render$1,
    KeyIcon: render$2
  },
  methods: {
    track
  }
};
const _hoisted_1 = { class: "mx-auto max-w-screen-lg text-gray-900 dark:text-gray-100 md:flex md:flex-row md:items-start md:justify-between" };
const _hoisted_2 = { class: "mb-6 mr-0 w-full rounded-md border dark:border-gray-500 dark:bg-slate-800 md:mb-0 md:mr-6 md:w-4/12" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b p-4 font-semibold dark:border-gray-500" }, " Settings ", -1);
const _hoisted_4 = { class: "flex flex-col rounded-md bg-white dark:bg-slate-800" };
const _hoisted_5 = { class: "none w-full rounded-md border dark:border-gray-500" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CogIcon = resolveComponent("CogIcon");
  const _component_router_link = resolveComponent("router-link");
  const _component_UserIcon = resolveComponent("UserIcon");
  const _component_KeyIcon = resolveComponent("KeyIcon");
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        createVNode(_component_router_link, {
          to: { name: "account" },
          class: "flex items-center border-b p-4 hover:bg-slate-800 hover:text-white dark:border-gray-600 dark:hover:bg-slate-900",
          "active-class": "text-white bg-slate-600",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.track("clicked tab: Account"))
        }, {
          default: withCtx(() => [
            createVNode(_component_CogIcon, { class: "mr-3 h-5 w-5" }),
            createTextVNode(" Account ")
          ]),
          _: 1
        }),
        createVNode(_component_router_link, {
          to: { name: "profile" },
          class: "flex items-center border-b p-4 hover:bg-slate-800 hover:text-white dark:border-gray-600 dark:hover:bg-slate-900",
          "active-class": "text-white bg-slate-600",
          onClick: _cache[1] || (_cache[1] = ($event) => $options.track("clicked tab: Profile"))
        }, {
          default: withCtx(() => [
            createVNode(_component_UserIcon, { class: "mr-3 h-5 w-5" }),
            createTextVNode(" Profile ")
          ]),
          _: 1
        }),
        createVNode(_component_router_link, {
          to: { name: "password" },
          class: "flex items-center rounded-b-md p-4 hover:bg-slate-800 hover:text-white dark:hover:bg-slate-900",
          "active-class": "text-white bg-slate-600",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.track("clicked tab: Password"))
        }, {
          default: withCtx(() => [
            createVNode(_component_KeyIcon, { class: "mr-3 h-5 w-5" }),
            createTextVNode(" Password ")
          ]),
          _: 1
        })
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      createVNode(_component_router_view)
    ])
  ]);
}
const Settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Settings as default
};
