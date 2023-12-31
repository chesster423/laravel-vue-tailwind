import { c as commonjsGlobal, g as getDefaultExportFromCjs } from "./__commonjsHelpers__-7a7fcd32.js";
import { aS as require$$0 } from "./vendor-506bc2e6.js";
var vueSliderComponent_umd_min = { exports: {} };
(function(module, exports) {
  (function(t, e) {
    module.exports = e(require$$0);
  })("undefined" !== typeof self ? self : commonjsGlobal, function(t) {
    return function() {
      var e = { 388: function(t2, e2) {
        var r2, n2, i2;
        (function(o, a) {
          n2 = [], r2 = a, i2 = "function" === typeof r2 ? r2.apply(e2, n2) : r2, void 0 === i2 || (t2.exports = i2);
        })("undefined" !== typeof self && self, function() {
          function t3() {
            var e3 = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (!e3 && "currentScript" in document && document.currentScript)
              return document.currentScript;
            if (e3 && e3.get !== t3 && document.currentScript)
              return document.currentScript;
            try {
              throw new Error();
            } catch (f) {
              var r3, n3, i3, o = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, a = /@([^@]*):(\d+):(\d+)\s*$/gi, s = o.exec(f.stack) || a.exec(f.stack), l = s && s[1] || false, u = s && s[2] || false, c = document.location.href.replace(document.location.hash, ""), d = document.getElementsByTagName("script");
              l === c && (r3 = document.documentElement.outerHTML, n3 = new RegExp("(?:[^\\n]+?\\n){0," + (u - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), i3 = r3.replace(n3, "$1").trim());
              for (var h = 0; h < d.length; h++) {
                if ("interactive" === d[h].readyState)
                  return d[h];
                if (d[h].src === l)
                  return d[h];
                if (l === c && d[h].innerHTML && d[h].innerHTML.trim() === i3)
                  return d[h];
              }
              return null;
            }
          }
          return t3;
        });
      }, 905: function(t2, e2, r2) {
        r2.r(e2);
        var n2 = r2(117), i2 = r2.n(n2), o = r2(488), a = r2.n(o), s = a()(i2());
        s.push([t2.id, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]), e2["default"] = s;
      }, 121: function(t2, e2, r2) {
        r2.r(e2);
        var n2 = r2(117), i2 = r2.n(n2), o = r2(488), a = r2.n(o), s = a()(i2());
        s.push([t2.id, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]), e2["default"] = s;
      }, 207: function(t2, e2, r2) {
        r2.r(e2);
        var n2 = r2(117), i2 = r2.n(n2), o = r2(488), a = r2.n(o), s = a()(i2());
        s.push([t2.id, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]), e2["default"] = s;
      }, 488: function(t2) {
        t2.exports = function(t3) {
          var e2 = [];
          return e2.toString = function() {
            return this.map(function(e3) {
              var r2 = "", n2 = "undefined" !== typeof e3[5];
              return e3[4] && (r2 += "@supports (".concat(e3[4], ") {")), e3[2] && (r2 += "@media ".concat(e3[2], " {")), n2 && (r2 += "@layer".concat(e3[5].length > 0 ? " ".concat(e3[5]) : "", " {")), r2 += t3(e3), n2 && (r2 += "}"), e3[2] && (r2 += "}"), e3[4] && (r2 += "}"), r2;
            }).join("");
          }, e2.i = function(t4, r2, n2, i2, o) {
            "string" === typeof t4 && (t4 = [[null, t4, void 0]]);
            var a = {};
            if (n2)
              for (var s = 0; s < this.length; s++) {
                var l = this[s][0];
                null != l && (a[l] = true);
              }
            for (var u = 0; u < t4.length; u++) {
              var c = [].concat(t4[u]);
              n2 && a[c[0]] || ("undefined" !== typeof o && ("undefined" === typeof c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = o), r2 && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = r2) : c[2] = r2), i2 && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = i2) : c[4] = "".concat(i2)), e2.push(c));
            }
          }, e2;
        };
      }, 117: function(t2) {
        t2.exports = function(t3) {
          return t3[1];
        };
      }, 831: function(t2, e2) {
        e2.Z = (t3, e3) => {
          const r2 = t3.__vccOpts || t3;
          for (const [n2, i2] of e3)
            r2[n2] = i2;
          return r2;
        };
      }, 466: function(t2, e2, r2) {
        var n2 = r2(905);
        n2.__esModule && (n2 = n2.default), "string" === typeof n2 && (n2 = [[t2.id, n2, ""]]), n2.locals && (t2.exports = n2.locals);
        var i2 = r2(959).Z;
        i2("50bc1720", n2, true, { sourceMap: false, shadowMode: false });
      }, 18: function(t2, e2, r2) {
        var n2 = r2(121);
        n2.__esModule && (n2 = n2.default), "string" === typeof n2 && (n2 = [[t2.id, n2, ""]]), n2.locals && (t2.exports = n2.locals);
        var i2 = r2(959).Z;
        i2("10aa5f36", n2, true, { sourceMap: false, shadowMode: false });
      }, 631: function(t2, e2, r2) {
        var n2 = r2(207);
        n2.__esModule && (n2 = n2.default), "string" === typeof n2 && (n2 = [[t2.id, n2, ""]]), n2.locals && (t2.exports = n2.locals);
        var i2 = r2(959).Z;
        i2("1772934e", n2, true, { sourceMap: false, shadowMode: false });
      }, 959: function(t2, e2, r2) {
        function n2(t3, e3) {
          for (var r3 = [], n3 = {}, i3 = 0; i3 < e3.length; i3++) {
            var o2 = e3[i3], a2 = o2[0], s2 = o2[1], l2 = o2[2], u2 = o2[3], c2 = { id: t3 + ":" + i3, css: s2, media: l2, sourceMap: u2 };
            n3[a2] ? n3[a2].parts.push(c2) : r3.push(n3[a2] = { id: a2, parts: [c2] });
          }
          return r3;
        }
        r2.d(e2, { Z: function() {
          return p;
        } });
        var i2 = "undefined" !== typeof document;
        if ("undefined" !== typeof DEBUG && DEBUG && !i2)
          throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var o = {}, a = i2 && (document.head || document.getElementsByTagName("head")[0]), s = null, l = 0, u = false, c = function() {
        }, d = null, h = "data-vue-ssr-id", f = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function p(t3, e3, r3, i3) {
          u = r3, d = i3 || {};
          var a2 = n2(t3, e3);
          return m(a2), function(e4) {
            for (var r4 = [], i4 = 0; i4 < a2.length; i4++) {
              var s2 = a2[i4], l2 = o[s2.id];
              l2.refs--, r4.push(l2);
            }
            e4 ? (a2 = n2(t3, e4), m(a2)) : a2 = [];
            for (i4 = 0; i4 < r4.length; i4++) {
              l2 = r4[i4];
              if (0 === l2.refs) {
                for (var u2 = 0; u2 < l2.parts.length; u2++)
                  l2.parts[u2]();
                delete o[l2.id];
              }
            }
          };
        }
        function m(t3) {
          for (var e3 = 0; e3 < t3.length; e3++) {
            var r3 = t3[e3], n3 = o[r3.id];
            if (n3) {
              n3.refs++;
              for (var i3 = 0; i3 < n3.parts.length; i3++)
                n3.parts[i3](r3.parts[i3]);
              for (; i3 < r3.parts.length; i3++)
                n3.parts.push(y(r3.parts[i3]));
              n3.parts.length > r3.parts.length && (n3.parts.length = r3.parts.length);
            } else {
              var a2 = [];
              for (i3 = 0; i3 < r3.parts.length; i3++)
                a2.push(y(r3.parts[i3]));
              o[r3.id] = { id: r3.id, refs: 1, parts: a2 };
            }
          }
        }
        function v() {
          var t3 = document.createElement("style");
          return t3.type = "text/css", a.appendChild(t3), t3;
        }
        function y(t3) {
          var e3, r3, n3 = document.querySelector("style[" + h + '~="' + t3.id + '"]');
          if (n3) {
            if (u)
              return c;
            n3.parentNode.removeChild(n3);
          }
          if (f) {
            var i3 = l++;
            n3 = s || (s = v()), e3 = g.bind(null, n3, i3, false), r3 = g.bind(null, n3, i3, true);
          } else
            n3 = v(), e3 = k.bind(null, n3), r3 = function() {
              n3.parentNode.removeChild(n3);
            };
          return e3(t3), function(n4) {
            if (n4) {
              if (n4.css === t3.css && n4.media === t3.media && n4.sourceMap === t3.sourceMap)
                return;
              e3(t3 = n4);
            } else
              r3();
          };
        }
        var b = function() {
          var t3 = [];
          return function(e3, r3) {
            return t3[e3] = r3, t3.filter(Boolean).join("\n");
          };
        }();
        function g(t3, e3, r3, n3) {
          var i3 = r3 ? "" : n3.css;
          if (t3.styleSheet)
            t3.styleSheet.cssText = b(e3, i3);
          else {
            var o2 = document.createTextNode(i3), a2 = t3.childNodes;
            a2[e3] && t3.removeChild(a2[e3]), a2.length ? t3.insertBefore(o2, a2[e3]) : t3.appendChild(o2);
          }
        }
        function k(t3, e3) {
          var r3 = e3.css, n3 = e3.media, i3 = e3.sourceMap;
          if (n3 && t3.setAttribute("media", n3), d.ssrId && t3.setAttribute(h, e3.id), i3 && (r3 += "\n/*# sourceURL=" + i3.sources[0] + " */", r3 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i3)))) + " */"), t3.styleSheet)
            t3.styleSheet.cssText = r3;
          else {
            while (t3.firstChild)
              t3.removeChild(t3.firstChild);
            t3.appendChild(document.createTextNode(r3));
          }
        }
      }, 927: function(e2) {
        e2.exports = t;
      } }, r = {};
      function n(t2) {
        var i2 = r[t2];
        if (void 0 !== i2)
          return i2.exports;
        var o = r[t2] = { id: t2, exports: {} };
        return e[t2].call(o.exports, o, o.exports, n), o.exports;
      }
      !function() {
        n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2["default"];
          } : function() {
            return t2;
          };
          return n.d(e2, { a: e2 }), e2;
        };
      }(), function() {
        n.d = function(t2, e2) {
          for (var r2 in e2)
            n.o(e2, r2) && !n.o(t2, r2) && Object.defineProperty(t2, r2, { enumerable: true, get: e2[r2] });
        };
      }(), function() {
        n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        };
      }(), function() {
        n.r = function(t2) {
          "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        };
      }(), function() {
        n.p = "";
      }();
      var i = {};
      return function() {
        if (n.d(i, { default: function() {
          return St;
        } }), "undefined" !== typeof window) {
          var t2 = window.document.currentScript, e2 = n(388);
          t2 = e2(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: e2 });
          var r2 = t2 && t2.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          r2 && (n.p = r2[1]);
        }
        var o = n(927);
        function a(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        var s = { key: 0, class: "vue-slider-marks" };
        function l(t3, e3, r3, n2, i2, l2) {
          var u2 = (0, o.resolveComponent)("vue-slider-mark"), c2 = (0, o.resolveComponent)("vue-slider-dot");
          return (0, o.openBlock)(), (0, o.createElementBlock)("div", (0, o.mergeProps)({ ref: "container", class: t3.containerClasses, style: t3.containerStyles, onClick: e3[2] || (e3[2] = function() {
            return t3.clickHandle && t3.clickHandle.apply(t3, arguments);
          }), onTouchstartPassive: e3[3] || (e3[3] = function() {
            return t3.dragStartOnProcess && t3.dragStartOnProcess.apply(t3, arguments);
          }), onMousedownPassive: e3[4] || (e3[4] = function() {
            return t3.dragStartOnProcess && t3.dragStartOnProcess.apply(t3, arguments);
          }) }, t3.$attrs), [(0, o.createElementVNode)("div", { class: "vue-slider-rail", style: (0, o.normalizeStyle)(t3.railStyle) }, [((0, o.openBlock)(true), (0, o.createElementBlock)(o.Fragment, null, (0, o.renderList)(t3.processArray, function(e4, r4) {
            return (0, o.renderSlot)(t3.$slots, "process", (0, o.normalizeProps)((0, o.guardReactiveProps)(e4)), function() {
              return [((0, o.openBlock)(), (0, o.createElementBlock)("div", { class: "vue-slider-process", key: "process-".concat(r4), style: (0, o.normalizeStyle)(e4.style) }, null, 4))];
            });
          }), 256)), t3.sliderMarks && t3.control ? ((0, o.openBlock)(), (0, o.createElementBlock)("div", s, [((0, o.openBlock)(true), (0, o.createElementBlock)(o.Fragment, null, (0, o.renderList)(t3.control.markList, function(r4, n3) {
            return (0, o.renderSlot)(t3.$slots, "mark", (0, o.normalizeProps)((0, o.guardReactiveProps)(r4)), function() {
              var i3;
              return [((0, o.openBlock)(), (0, o.createBlock)(u2, { key: "mark-".concat(n3), mark: r4, hideLabel: t3.hideLabel, style: (0, o.normalizeStyle)((i3 = {}, a(i3, t3.isHorizontal ? "height" : "width", "100%"), a(i3, t3.isHorizontal ? "width" : "height", t3.tailSize), a(i3, t3.mainDirection, "".concat(r4.pos, "%")), i3)), stepStyle: t3.stepStyle, stepActiveStyle: t3.stepActiveStyle, labelStyle: t3.labelStyle, labelActiveStyle: t3.labelActiveStyle, onPressLabel: e3[0] || (e3[0] = function(e4) {
                return t3.clickable && t3.setValueByPos(e4);
              }) }, { step: (0, o.withCtx)(function() {
                return [(0, o.renderSlot)(t3.$slots, "step", (0, o.normalizeProps)((0, o.guardReactiveProps)(r4)))];
              }), label: (0, o.withCtx)(function() {
                return [(0, o.renderSlot)(t3.$slots, "label", (0, o.normalizeProps)((0, o.guardReactiveProps)(r4)))];
              }), _: 2 }, 1032, ["mark", "hideLabel", "style", "stepStyle", "stepActiveStyle", "labelStyle", "labelActiveStyle"]))];
            });
          }), 256))])) : (0, o.createCommentVNode)("", true), ((0, o.openBlock)(true), (0, o.createElementBlock)(o.Fragment, null, (0, o.renderList)(t3.dots, function(r4, n3) {
            var i3;
            return (0, o.openBlock)(), (0, o.createBlock)(c2, (0, o.mergeProps)({ ref_for: true, ref: "dot-".concat(n3), key: "dot-".concat(n3), value: r4.value, disabled: r4.disabled, focus: r4.focus, "dot-style": [r4.style, r4.disabled ? r4.disabledStyle : null, r4.focus ? r4.focusStyle : null], tooltip: r4.tooltip || t3.tooltip, "tooltip-style": [t3.tooltipStyle, r4.tooltipStyle, r4.disabled ? r4.tooltipDisabledStyle : null, r4.focus ? r4.tooltipFocusStyle : null], "tooltip-formatter": Array.isArray(t3.sliderTooltipFormatter) ? t3.sliderTooltipFormatter[n3] : t3.sliderTooltipFormatter, "tooltip-placement": t3.tooltipDirections[n3], style: [t3.dotBaseStyle, (i3 = {}, a(i3, t3.mainDirection, "".concat(r4.pos, "%")), a(i3, "transition", "".concat(t3.mainDirection, " ").concat(t3.animateTime, "s")), i3)], onDragStart: function() {
              return t3.dragStart(n3);
            }, role: "slider", "aria-valuenow": r4.value, "aria-valuemin": t3.min, "aria-valuemax": t3.max, "aria-orientation": t3.isHorizontal ? "horizontal" : "vertical", tabindex: "0", onFocus: function() {
              return t3.focus(r4, n3);
            }, onBlur: e3[1] || (e3[1] = function() {
              return t3.blur();
            }) }, t3.dotAttrs), { dot: (0, o.withCtx)(function() {
              return [(0, o.renderSlot)(t3.$slots, "dot", (0, o.normalizeProps)((0, o.guardReactiveProps)(r4)))];
            }), tooltip: (0, o.withCtx)(function() {
              return [(0, o.renderSlot)(t3.$slots, "tooltip", (0, o.normalizeProps)((0, o.guardReactiveProps)(r4)))];
            }), _: 2 }, 1040, ["value", "disabled", "focus", "dot-style", "tooltip", "tooltip-style", "tooltip-formatter", "tooltip-placement", "style", "onDragStart", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "onFocus"]);
          }), 128))], 4), (0, o.renderSlot)(t3.$slots, "default", { value: t3.getValue() })], 16);
        }
        var u = ["aria-valuetext"], c = { class: "vue-slider-dot-tooltip-text" };
        function d(t3, e3, r3, n2, i2, a2) {
          var s2;
          return (0, o.openBlock)(), (0, o.createElementBlock)("div", { ref: "dot", class: (0, o.normalizeClass)(t3.dotClasses), "aria-valuetext": null === (s2 = t3.tooltipValue) || void 0 === s2 ? void 0 : s2.toString(), onMousedownPassive: e3[0] || (e3[0] = function() {
            return t3.dragStart && t3.dragStart.apply(t3, arguments);
          }), onTouchstartPassive: e3[1] || (e3[1] = function() {
            return t3.dragStart && t3.dragStart.apply(t3, arguments);
          }) }, [(0, o.renderSlot)(t3.$slots, "dot", {}, function() {
            return [(0, o.createElementVNode)("div", { class: (0, o.normalizeClass)(t3.handleClasses), style: (0, o.normalizeStyle)(t3.dotStyle) }, null, 6)];
          }), "none" !== t3.tooltip ? ((0, o.openBlock)(), (0, o.createElementBlock)("div", { key: 0, class: (0, o.normalizeClass)(t3.tooltipClasses) }, [(0, o.renderSlot)(t3.$slots, "tooltip", {}, function() {
            return [(0, o.createElementVNode)("div", { class: (0, o.normalizeClass)(t3.tooltipInnerClasses), style: (0, o.normalizeStyle)(t3.tooltipStyle) }, [(0, o.createElementVNode)("span", c, (0, o.toDisplayString)(t3.tooltipValue), 1)], 6)];
          })], 2)) : (0, o.createCommentVNode)("", true)], 42, u);
        }
        n(466);
        var h = (0, o.defineComponent)({ name: "VueSliderDot", emits: ["drag-start"], props: { value: { type: [String, Number], default: 0 }, tooltip: { type: String, required: true }, tooltipPlacement: { type: String, validator: function(t3) {
          return ["top", "right", "bottom", "left"].indexOf(t3) > -1;
        }, required: true }, tooltipFormatter: { type: [String, Function] }, focus: { type: Boolean, default: false }, disabled: { type: Boolean, default: false }, dotStyle: { type: Object }, tooltipStyle: { type: Object } }, computed: { dotClasses: function() {
          return ["vue-slider-dot", { "vue-slider-dot-hover": "hover" === this.tooltip || "active" === this.tooltip, "vue-slider-dot-disabled": this.disabled, "vue-slider-dot-focus": this.focus }];
        }, handleClasses: function() {
          return ["vue-slider-dot-handle", { "vue-slider-dot-handle-disabled": this.disabled, "vue-slider-dot-handle-focus": this.focus }];
        }, tooltipClasses: function() {
          return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-show": this.showTooltip }];
        }, tooltipInnerClasses: function() {
          return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-inner-disabled": this.disabled, "vue-slider-dot-tooltip-inner-focus": this.focus }];
        }, showTooltip: function() {
          switch (this.tooltip) {
            case "always":
              return true;
            case "none":
              return false;
            case "focus":
            case "active":
              return !!this.focus;
            default:
              return false;
          }
        }, tooltipValue: function() {
          return this.tooltipFormatter ? "string" === typeof this.tooltipFormatter ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value;
        } }, methods: { dragStart: function() {
          if (this.disabled)
            return false;
          this.$emit("drag-start");
        } } }), f = n(831);
        const p = (0, f.Z)(h, [["render", d]]);
        var m = p;
        function v(t3, e3, r3, n2, i2, a2) {
          return (0, o.openBlock)(), (0, o.createElementBlock)("div", { class: (0, o.normalizeClass)(t3.marksClasses) }, [(0, o.renderSlot)(t3.$slots, "step", {}, function() {
            return [(0, o.createElementVNode)("div", { class: (0, o.normalizeClass)(t3.stepClasses), style: (0, o.normalizeStyle)([t3.stepStyle, t3.mark.style || {}, t3.mark.active && t3.stepActiveStyle ? t3.stepActiveStyle : {}, t3.mark.active && t3.mark.activeStyle ? t3.mark.activeStyle : {}]) }, null, 6)];
          }), t3.hideLabel ? (0, o.createCommentVNode)("", true) : (0, o.renderSlot)(t3.$slots, "label", { key: 0 }, function() {
            return [(0, o.createElementVNode)("div", { class: (0, o.normalizeClass)(t3.labelClasses), style: (0, o.normalizeStyle)([t3.labelStyle, t3.mark.labelStyle || {}, t3.mark.active && t3.labelActiveStyle ? t3.labelActiveStyle : {}, t3.mark.active && t3.mark.labelActiveStyle ? t3.mark.labelActiveStyle : {}]), onClick: e3[0] || (e3[0] = function() {
              return t3.labelClickHandle && t3.labelClickHandle.apply(t3, arguments);
            }) }, (0, o.toDisplayString)(t3.mark.label), 7)];
          })], 2);
        }
        n(18);
        var y = (0, o.defineComponent)({ name: "VueSliderMark", emits: ["press-label"], props: { mark: { type: Object, required: true }, hideLabel: { type: Boolean }, stepStyle: { type: Object, default: function() {
          return {};
        } }, stepActiveStyle: { type: Object, default: function() {
          return {};
        } }, labelStyle: { type: Object, default: function() {
          return {};
        } }, labelActiveStyle: { type: Object, default: function() {
          return {};
        } } }, computed: { marksClasses: function() {
          return ["vue-slider-mark", { "vue-slider-mark-active": this.mark.active }];
        }, stepClasses: function() {
          return ["vue-slider-mark-step", { "vue-slider-mark-step-active": this.mark.active }];
        }, labelClasses: function() {
          return ["vue-slider-mark-label", { "vue-slider-mark-label-active": this.mark.active }];
        } }, methods: { labelClickHandle: function(t3) {
          t3.stopPropagation(), this.$emit("press-label", this.mark.pos);
        } } });
        const b = (0, f.Z)(y, [["render", v]]);
        var g, k = b, S = function(t3) {
          return "number" === typeof t3 ? "".concat(t3, "px") : t3;
        }, x = function(t3) {
          var e3 = document.documentElement, r3 = document.body, n2 = t3.getBoundingClientRect(), i2 = { y: n2.top + (window.pageYOffset || e3.scrollTop) - (e3.clientTop || r3.clientTop || 0), x: n2.left + (window.pageXOffset || e3.scrollLeft) - (e3.clientLeft || r3.clientLeft || 0) };
          return i2;
        }, P = function(t3, e3, r3) {
          var n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, i2 = "targetTouches" in t3 ? t3.targetTouches[0] : t3, o2 = x(e3), a2 = { x: i2.pageX - o2.x, y: i2.pageY - o2.y };
          return { x: r3 ? e3.offsetWidth * n2 - a2.x : a2.x, y: r3 ? e3.offsetHeight * n2 - a2.y : a2.y };
        };
        (function(t3) {
          t3[t3["PAGE_UP"] = 33] = "PAGE_UP", t3[t3["PAGE_DOWN"] = 34] = "PAGE_DOWN", t3[t3["END"] = 35] = "END", t3[t3["HOME"] = 36] = "HOME", t3[t3["LEFT"] = 37] = "LEFT", t3[t3["UP"] = 38] = "UP", t3[t3["RIGHT"] = 39] = "RIGHT", t3[t3["DOWN"] = 40] = "DOWN";
        })(g || (g = {}));
        var w = function(t3, e3) {
          if (e3.hook) {
            var r3 = e3.hook(t3);
            if ("function" === typeof r3)
              return r3;
            if (!r3)
              return null;
          }
          switch (t3.keyCode) {
            case g.UP:
              return function(t4) {
                return "ttb" === e3.direction ? t4 - 1 : t4 + 1;
              };
            case g.RIGHT:
              return function(t4) {
                return "rtl" === e3.direction ? t4 - 1 : t4 + 1;
              };
            case g.DOWN:
              return function(t4) {
                return "ttb" === e3.direction ? t4 + 1 : t4 - 1;
              };
            case g.LEFT:
              return function(t4) {
                return "rtl" === e3.direction ? t4 + 1 : t4 - 1;
              };
            case g.END:
              return function() {
                return e3.max;
              };
            case g.HOME:
              return function() {
                return e3.min;
              };
            case g.PAGE_UP:
              return function(t4) {
                return t4 + 10;
              };
            case g.PAGE_DOWN:
              return function(t4) {
                return t4 - 10;
              };
            default:
              return null;
          }
        };
        function O(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function D(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var n2 = e3[r3];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
          }
        }
        function E(t3, e3, r3) {
          return e3 && D(t3.prototype, e3), r3 && D(t3, r3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
        }
        function R(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        var A, V, j = function() {
          function t3(e3) {
            O(this, t3), R(this, "num", void 0), this.num = e3;
          }
          return E(t3, [{ key: "decimal", value: function(t4, e3) {
            var r3 = this.num, n2 = this.getDecimalLen(r3), i2 = this.getDecimalLen(t4), o2 = 0;
            switch (e3) {
              case "+":
                o2 = this.getExponent(n2, i2), this.num = (this.safeRoundUp(r3, o2) + this.safeRoundUp(t4, o2)) / o2;
                break;
              case "-":
                o2 = this.getExponent(n2, i2), this.num = (this.safeRoundUp(r3, o2) - this.safeRoundUp(t4, o2)) / o2;
                break;
              case "*":
                this.num = this.safeRoundUp(this.safeRoundUp(r3, this.getExponent(n2)), this.safeRoundUp(t4, this.getExponent(i2))) / this.getExponent(n2 + i2);
                break;
              case "/":
                o2 = this.getExponent(n2, i2), this.num = this.safeRoundUp(r3, o2) / this.safeRoundUp(t4, o2);
                break;
              case "%":
                o2 = this.getExponent(n2, i2), this.num = this.safeRoundUp(r3, o2) % this.safeRoundUp(t4, o2) / o2;
                break;
            }
            return this;
          } }, { key: "plus", value: function(t4) {
            return this.decimal(t4, "+");
          } }, { key: "minus", value: function(t4) {
            return this.decimal(t4, "-");
          } }, { key: "multiply", value: function(t4) {
            return this.decimal(t4, "*");
          } }, { key: "divide", value: function(t4) {
            return this.decimal(t4, "/");
          } }, { key: "remainder", value: function(t4) {
            return this.decimal(t4, "%");
          } }, { key: "toNumber", value: function() {
            return this.num;
          } }, { key: "getDecimalLen", value: function(t4) {
            var e3 = "".concat(t4).split("e");
            return ("".concat(e3[0]).split(".")[1] || "").length - (e3[1] ? +e3[1] : 0);
          } }, { key: "getExponent", value: function(t4, e3) {
            return Math.pow(10, void 0 !== e3 ? Math.max(t4, e3) : t4);
          } }, { key: "safeRoundUp", value: function(t4, e3) {
            return Math.round(t4 * e3);
          } }]), t3;
        }();
        function C(t3, e3) {
          return L(t3) || M(t3, e3) || H(t3, e3) || B();
        }
        function B() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function M(t3, e3) {
          var r3 = null == t3 ? null : "undefined" !== typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (null != r3) {
            var n2, i2, o2 = [], a2 = true, s2 = false;
            try {
              for (r3 = r3.call(t3); !(a2 = (n2 = r3.next()).done); a2 = true)
                if (o2.push(n2.value), e3 && o2.length === e3)
                  break;
            } catch (l2) {
              s2 = true, i2 = l2;
            } finally {
              try {
                a2 || null == r3["return"] || r3["return"]();
              } finally {
                if (s2)
                  throw i2;
              }
            }
            return o2;
          }
        }
        function L(t3) {
          if (Array.isArray(t3))
            return t3;
        }
        function N(t3, e3) {
          var r3 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t3);
            e3 && (n2 = n2.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r3.push.apply(r3, n2);
          }
          return r3;
        }
        function z(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? N(Object(r3), true).forEach(function(e4) {
              X(t3, e4, r3[e4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : N(Object(r3)).forEach(function(e4) {
              Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
            });
          }
          return t3;
        }
        function I(t3) {
          return $(t3) || F(t3) || H(t3) || T();
        }
        function T() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function H(t3, e3) {
          if (t3) {
            if ("string" === typeof t3)
              return U(t3, e3);
            var r3 = Object.prototype.toString.call(t3).slice(8, -1);
            return "Object" === r3 && t3.constructor && (r3 = t3.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t3) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? U(t3, e3) : void 0;
          }
        }
        function F(t3) {
          if ("undefined" !== typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"])
            return Array.from(t3);
        }
        function $(t3) {
          if (Array.isArray(t3))
            return U(t3);
        }
        function U(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function _(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function W(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var n2 = e3[r3];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
          }
        }
        function G(t3, e3, r3) {
          return e3 && W(t3.prototype, e3), r3 && W(t3, r3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
        }
        function X(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        (function(t3) {
          t3[t3["VALUE"] = 1] = "VALUE", t3[t3["INTERVAL"] = 2] = "INTERVAL", t3[t3["MIN"] = 3] = "MIN", t3[t3["MAX"] = 4] = "MAX", t3[t3["ORDER"] = 5] = "ORDER";
        })(V || (V = {}));
        var q = (A = {}, X(A, V.VALUE, 'The type of the "value" is illegal'), X(A, V.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), X(A, V.MIN, 'The "value" must be greater than or equal to the "min".'), X(A, V.MAX, 'The "value" must be less than or equal to the "max".'), X(A, V.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), A), Z = function() {
          function t3(e3) {
            _(this, t3), X(this, "dotsPos", []), X(this, "dotsValue", []), X(this, "data", void 0), X(this, "enableCross", void 0), X(this, "fixed", void 0), X(this, "max", void 0), X(this, "min", void 0), X(this, "interval", void 0), X(this, "minRange", void 0), X(this, "maxRange", void 0), X(this, "order", void 0), X(this, "marks", void 0), X(this, "included", void 0), X(this, "process", void 0), X(this, "adsorb", void 0), X(this, "dotOptions", void 0), X(this, "onError", void 0), X(this, "cacheRangeDir", {}), this.data = e3.data, this.max = e3.max, this.min = e3.min, this.interval = e3.interval, this.order = e3.order, this.marks = e3.marks, this.included = e3.included, this.process = e3.process, this.adsorb = e3.adsorb, this.dotOptions = e3.dotOptions, this.onError = e3.onError, this.order ? (this.minRange = e3.minRange || 0, this.maxRange = e3.maxRange || 0, this.enableCross = e3.enableCross, this.fixed = e3.fixed) : ((e3.minRange || e3.maxRange || !e3.enableCross || e3.fixed) && this.emitError(V.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = true, this.fixed = false), this.setValue(e3.value);
          }
          return G(t3, [{ key: "setValue", value: function(t4) {
            this.setDotsValue(Array.isArray(t4) ? I(t4) : [t4], true);
          } }, { key: "setDotsValue", value: function(t4, e3) {
            this.dotsValue = t4, e3 && this.syncDotsPos();
          } }, { key: "setDotsPos", value: function(t4) {
            var e3 = this, r3 = this.order ? I(t4).sort(function(t5, e4) {
              return t5 - e4;
            }) : t4;
            this.dotsPos = r3, this.setDotsValue(r3.map(function(t5) {
              return e3.getValueByPos(t5);
            }), this.adsorb);
          } }, { key: "getValueByPos", value: function(t4) {
            var e3 = this.parsePos(t4);
            if (this.included) {
              var r3 = 100;
              this.markList.forEach(function(n2) {
                var i2 = Math.abs(n2.pos - t4);
                i2 < r3 && (r3 = i2, e3 = n2.value);
              });
            }
            return e3;
          } }, { key: "syncDotsPos", value: function() {
            var t4 = this;
            this.dotsPos = this.dotsValue.map(function(e3) {
              return t4.parseValue(e3);
            });
          } }, { key: "markList", get: function() {
            var t4 = this;
            if (!this.marks)
              return [];
            var e3 = function(e4, r3) {
              var n2 = t4.parseValue(e4);
              return z({ pos: n2, value: e4, label: e4, active: t4.isActiveByPos(n2) }, r3);
            };
            return true === this.marks ? this.getValues().map(function(t5) {
              return e3(t5);
            }) : "[object Object]" === Object.prototype.toString.call(this.marks) ? Object.keys(this.marks).sort(function(t5, e4) {
              return +t5 - +e4;
            }).map(function(r3) {
              var n2 = t4.marks[r3];
              return e3(r3, "string" !== typeof n2 ? n2 : { label: n2 });
            }) : Array.isArray(this.marks) ? this.marks.map(function(t5) {
              return e3(t5);
            }) : "function" === typeof this.marks ? this.getValues().map(function(e4) {
              return { value: e4, result: t4.marks(e4) };
            }).filter(function(t5) {
              var e4 = t5.result;
              return !!e4;
            }).map(function(t5) {
              var r3 = t5.value, n2 = t5.result;
              return e3(r3, n2);
            }) : [];
          } }, { key: "getRecentDot", value: function(t4) {
            var e3 = this.dotsPos.map(function(e4) {
              return Math.abs(e4 - t4);
            });
            return e3.indexOf(Math.min.apply(Math, I(e3)));
          } }, { key: "getIndexByValue", value: function(t4) {
            return this.data ? this.data.indexOf(t4) : new j(+t4).minus(this.min).divide(this.interval).toNumber();
          } }, { key: "getValueByIndex", value: function(t4) {
            return t4 < 0 ? t4 = 0 : t4 > this.total && (t4 = this.total), this.data ? this.data[t4] : new j(t4).multiply(this.interval).plus(this.min).toNumber();
          } }, { key: "setDotPos", value: function(t4, e3) {
            t4 = this.getValidPos(t4, e3).pos;
            var r3 = t4 - this.dotsPos[e3];
            if (r3) {
              var n2 = new Array(this.dotsPos.length);
              this.fixed ? n2 = this.getFixedChangePosArr(r3, e3) : this.minRange || this.maxRange ? n2 = this.getLimitRangeChangePosArr(t4, r3, e3) : n2[e3] = r3, this.setDotsPos(this.dotsPos.map(function(t5, e4) {
                return t5 + (n2[e4] || 0);
              }));
            }
          } }, { key: "getFixedChangePosArr", value: function(t4, e3) {
            var r3 = this;
            return this.dotsPos.forEach(function(n2, i2) {
              if (i2 !== e3) {
                var o2 = r3.getValidPos(n2 + t4, i2), a2 = o2.pos, s2 = o2.inRange;
                s2 || (t4 = Math.min(Math.abs(a2 - n2), Math.abs(t4)) * (t4 < 0 ? -1 : 1));
              }
            }), this.dotsPos.map(function(e4) {
              return t4;
            });
          } }, { key: "getLimitRangeChangePosArr", value: function(t4, e3, r3) {
            var n2 = this, i2 = [{ index: r3, changePos: e3 }], o2 = e3;
            return [this.minRange, this.maxRange].forEach(function(a2, s2) {
              if (!a2)
                return false;
              var l2 = 0 === s2, u2 = e3 > 0, c2 = 0;
              c2 = l2 ? u2 ? 1 : -1 : u2 ? -1 : 1;
              var d2 = function(t5, e4) {
                var r4 = Math.abs(t5 - e4);
                return l2 ? r4 < n2.minRangeDir : r4 > n2.maxRangeDir;
              }, h2 = r3 + c2, f2 = n2.dotsPos[h2], p2 = t4;
              while (n2.isPos(f2) && d2(f2, p2)) {
                var m2 = n2.getValidPos(f2 + o2, h2), v2 = m2.pos;
                i2.push({ index: h2, changePos: v2 - f2 }), h2 += c2, p2 = v2, f2 = n2.dotsPos[h2];
              }
            }), this.dotsPos.map(function(t5, e4) {
              var r4 = i2.filter(function(t6) {
                return t6.index === e4;
              });
              return r4.length ? r4[0].changePos : 0;
            });
          } }, { key: "isPos", value: function(t4) {
            return "number" === typeof t4;
          } }, { key: "getValidPos", value: function(t4, e3) {
            var r3 = this.valuePosRange[e3], n2 = true;
            return t4 < r3[0] ? (t4 = r3[0], n2 = false) : t4 > r3[1] && (t4 = r3[1], n2 = false), { pos: t4, inRange: n2 };
          } }, { key: "parseValue", value: function(t4) {
            if (this.data)
              t4 = this.data.indexOf(t4);
            else if ("number" === typeof t4 || "string" === typeof t4) {
              if (t4 = +t4, t4 < this.min)
                return this.emitError(V.MIN), 0;
              if (t4 > this.max)
                return this.emitError(V.MAX), 0;
              if ("number" !== typeof t4 || t4 !== t4)
                return this.emitError(V.VALUE), 0;
              t4 = new j(t4).minus(this.min).divide(this.interval).toNumber();
            }
            var e3 = new j(t4).multiply(this.gap).toNumber();
            return e3 < 0 ? 0 : e3 > 100 ? 100 : e3;
          } }, { key: "parsePos", value: function(t4) {
            var e3 = Math.round(t4 / this.gap);
            return this.getValueByIndex(e3);
          } }, { key: "isActiveByPos", value: function(t4) {
            return this.processArray.some(function(e3) {
              var r3 = C(e3, 2), n2 = r3[0], i2 = r3[1];
              return t4 >= n2 && t4 <= i2;
            });
          } }, { key: "getValues", value: function() {
            if (this.data)
              return this.data;
            for (var t4 = [], e3 = 0; e3 <= this.total; e3++)
              t4.push(new j(e3).multiply(this.interval).plus(this.min).toNumber());
            return t4;
          } }, { key: "getRangeDir", value: function(t4) {
            return t4 ? new j(t4).divide(new j(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
          } }, { key: "emitError", value: function(t4) {
            this.onError && this.onError(t4, q[t4]);
          } }, { key: "processArray", get: function() {
            if (this.process) {
              if ("function" === typeof this.process)
                return this.process(this.dotsPos);
              if (1 === this.dotsPos.length)
                return [[0, this.dotsPos[0]]];
              if (this.dotsPos.length > 1)
                return [[Math.min.apply(Math, I(this.dotsPos)), Math.max.apply(Math, I(this.dotsPos))]];
            }
            return [];
          } }, { key: "total", get: function() {
            var t4 = 0;
            return t4 = this.data ? this.data.length - 1 : new j(this.max).minus(this.min).divide(this.interval).toNumber(), t4 - Math.floor(t4) !== 0 ? (this.emitError(V.INTERVAL), 0) : t4;
          } }, { key: "gap", get: function() {
            return 100 / this.total;
          } }, { key: "minRangeDir", get: function() {
            return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
          } }, { key: "maxRangeDir", get: function() {
            return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
          } }, { key: "getDotRange", value: function(t4, e3, r3) {
            if (!this.dotOptions)
              return r3;
            var n2 = Array.isArray(this.dotOptions) ? this.dotOptions[t4] : this.dotOptions;
            return n2 && void 0 !== n2[e3] ? this.parseValue(n2[e3]) : r3;
          } }, { key: "valuePosRange", get: function() {
            var t4 = this, e3 = this.dotsPos, r3 = [];
            return e3.forEach(function(n2, i2) {
              r3.push([Math.max(t4.minRange ? t4.minRangeDir * i2 : 0, t4.enableCross ? 0 : e3[i2 - 1] || 0, t4.getDotRange(i2, "min", 0)), Math.min(t4.minRange ? 100 - t4.minRangeDir * (e3.length - 1 - i2) : 100, t4.enableCross ? 100 : e3[i2 + 1] || 100, t4.getDotRange(i2, "max", 100))]);
            }), r3;
          } }, { key: "dotsIndex", get: function() {
            var t4 = this;
            return this.dotsValue.map(function(e3) {
              return t4.getIndexByValue(e3);
            });
          } }]), t3;
        }();
        function Y(t3, e3) {
          if (!(t3 instanceof e3))
            throw new TypeError("Cannot call a class as a function");
        }
        function K(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var n2 = e3[r3];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
          }
        }
        function J(t3, e3, r3) {
          return e3 && K(t3.prototype, e3), r3 && K(t3, r3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
        }
        function Q(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        var tt = function() {
          function t3(e3) {
            Y(this, t3), Q(this, "map", void 0), Q(this, "states", 0), this.map = e3;
          }
          return J(t3, [{ key: "add", value: function(t4) {
            this.states |= t4;
          } }, { key: "delete", value: function(t4) {
            this.states &= ~t4;
          } }, { key: "toggle", value: function(t4) {
            this.has(t4) ? this.delete(t4) : this.add(t4);
          } }, { key: "has", value: function(t4) {
            return !!(this.states & t4);
          } }]), t3;
        }();
        n(631);
        function et(t3) {
          return it(t3) || nt(t3) || dt(t3) || rt();
        }
        function rt() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function nt(t3) {
          if ("undefined" !== typeof Symbol && null != t3[Symbol.iterator] || null != t3["@@iterator"])
            return Array.from(t3);
        }
        function it(t3) {
          if (Array.isArray(t3))
            return ht(t3);
        }
        function ot(t3) {
          return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          }, ot(t3);
        }
        function at(t3, e3) {
          var r3 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t3);
            e3 && (n2 = n2.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r3.push.apply(r3, n2);
          }
          return r3;
        }
        function st(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var r3 = null != arguments[e3] ? arguments[e3] : {};
            e3 % 2 ? at(Object(r3), true).forEach(function(e4) {
              lt(t3, e4, r3[e4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r3)) : at(Object(r3)).forEach(function(e4) {
              Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(r3, e4));
            });
          }
          return t3;
        }
        function lt(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        function ut(t3, e3) {
          return pt(t3) || ft(t3, e3) || dt(t3, e3) || ct();
        }
        function ct() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function dt(t3, e3) {
          if (t3) {
            if ("string" === typeof t3)
              return ht(t3, e3);
            var r3 = Object.prototype.toString.call(t3).slice(8, -1);
            return "Object" === r3 && t3.constructor && (r3 = t3.constructor.name), "Map" === r3 || "Set" === r3 ? Array.from(t3) : "Arguments" === r3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? ht(t3, e3) : void 0;
          }
        }
        function ht(t3, e3) {
          (null == e3 || e3 > t3.length) && (e3 = t3.length);
          for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
            n2[r3] = t3[r3];
          return n2;
        }
        function ft(t3, e3) {
          var r3 = null == t3 ? null : "undefined" !== typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
          if (null != r3) {
            var n2, i2, o2 = [], a2 = true, s2 = false;
            try {
              for (r3 = r3.call(t3); !(a2 = (n2 = r3.next()).done); a2 = true)
                if (o2.push(n2.value), e3 && o2.length === e3)
                  break;
            } catch (l2) {
              s2 = true, i2 = l2;
            } finally {
              try {
                a2 || null == r3["return"] || r3["return"]();
              } finally {
                if (s2)
                  throw i2;
              }
            }
            return o2;
          }
        }
        function pt(t3) {
          if (Array.isArray(t3))
            return t3;
        }
        var mt = { None: 0, Drag: 2, Focus: 4 }, vt = 4, yt = (0, o.defineComponent)({ name: "VueSlider", components: { VueSliderDot: m, VueSliderMark: k }, emits: ["change", "drag-start", "dragging", "drag-end", "error", "update:modelValue"], data: function() {
          return { control: null, states: new tt(mt), scale: 1, focusDotIndex: 0 };
        }, props: { modelValue: { type: [Number, String, Array], default: 0 }, silent: { type: Boolean, default: false }, direction: { type: String, default: "ltr", validator: function(t3) {
          return ["ltr", "rtl", "ttb", "btt"].indexOf(t3) > -1;
        } }, width: { type: [Number, String] }, height: { type: [Number, String] }, dotSize: { type: [Number, Array], default: 14 }, contained: { type: Boolean, default: false }, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, interval: { type: Number, default: 1 }, disabled: { type: Boolean, default: false }, clickable: { type: Boolean, default: true }, dragOnClick: { type: Boolean, default: false }, duration: { type: Number, default: 0.5 }, data: { type: [Object, Array] }, dataValue: { type: String, default: "value" }, dataLabel: { type: String, default: "label" }, lazy: { type: Boolean, default: false }, tooltip: { type: String, default: "active", validator: function(t3) {
          return ["none", "always", "focus", "hover", "active"].indexOf(t3) > -1;
        } }, tooltipPlacement: { type: [String, Array], validator: function(t3) {
          return (Array.isArray(t3) ? t3 : [t3]).every(function(t4) {
            return ["top", "right", "bottom", "left"].indexOf(t4) > -1;
          });
        } }, tooltipFormatter: { type: [String, Array, Function] }, useKeyboard: { type: Boolean, default: true }, keydownHook: { type: Function }, enableCross: { type: Boolean, default: true }, fixed: { type: Boolean, default: false }, order: { type: Boolean, default: true }, minRange: { type: Number }, maxRange: { type: Number }, marks: { type: [Boolean, Object, Array, Function], default: false }, process: { type: [Boolean, Function], default: true }, zoom: { type: Number }, included: { type: Boolean }, adsorb: { type: Boolean }, hideLabel: { type: Boolean }, dotOptions: { type: [Object, Array] }, dotAttrs: { type: Object }, railStyle: { type: Object }, processStyle: { type: Object }, dotStyle: { type: Object }, tooltipStyle: { type: Object }, stepStyle: { type: Object }, stepActiveStyle: { type: Object }, labelStyle: { type: Object }, labelActiveStyle: { type: Object } }, computed: { isHorizontal: function() {
          return "ltr" === this.direction || "rtl" === this.direction;
        }, isReverse: function() {
          return "rtl" === this.direction || "btt" === this.direction;
        }, tailSize: function() {
          return S((this.isHorizontal ? this.height : this.width) || vt);
        }, containerClasses: function() {
          return ["vue-slider", ["vue-slider-".concat(this.direction)], { "vue-slider-disabled": this.disabled }];
        }, containerStyles: function() {
          var t3 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], e3 = ut(t3, 2), r3 = e3[0], n2 = e3[1], i2 = this.width ? S(this.width) : this.isHorizontal ? "auto" : S(vt), o2 = this.height ? S(this.height) : this.isHorizontal ? S(vt) : "auto";
          return { padding: this.contained ? "".concat(n2 / 2, "px ").concat(r3 / 2, "px") : this.isHorizontal ? "".concat(n2 / 2, "px 0") : "0 ".concat(r3 / 2, "px"), width: i2, height: o2 };
        }, processArray: function() {
          var t3 = this;
          return this.control.processArray.map(function(e3, r3) {
            var n2, i2 = ut(e3, 3), o2 = i2[0], a2 = i2[1], s2 = i2[2];
            if (o2 > a2) {
              var l2 = [a2, o2];
              o2 = l2[0], a2 = l2[1];
            }
            var u2 = t3.isHorizontal ? "width" : "height";
            return { start: o2, end: a2, index: r3, style: st(st((n2 = {}, lt(n2, t3.isHorizontal ? "height" : "width", "100%"), lt(n2, t3.isHorizontal ? "top" : "left", 0), lt(n2, t3.mainDirection, "".concat(o2, "%")), lt(n2, u2, "".concat(a2 - o2, "%")), lt(n2, "transitionProperty", "".concat(u2, ",").concat(t3.mainDirection)), lt(n2, "transitionDuration", "".concat(t3.animateTime, "s")), n2), t3.processStyle), s2) };
          });
        }, dotBaseStyle: function() {
          var t3, e3 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], r3 = ut(e3, 2), n2 = r3[0], i2 = r3[1];
          return t3 = this.isHorizontal ? lt({ transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), WebkitTransform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), top: "50%" }, "ltr" === this.direction ? "left" : "right", "0") : lt({ transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), WebkitTransform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), left: "50%" }, "btt" === this.direction ? "bottom" : "top", "0"), st({ width: "".concat(n2, "px"), height: "".concat(i2, "px") }, t3);
        }, mainDirection: function() {
          switch (this.direction) {
            case "ltr":
              return "left";
            case "rtl":
              return "right";
            case "btt":
              return "bottom";
            case "ttb":
              return "top";
            default:
              return "left";
          }
        }, tooltipDirections: function() {
          var t3 = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
          return Array.isArray(t3) ? t3 : this.dots.map(function() {
            return t3;
          });
        }, dots: function() {
          var t3 = this;
          return this.control.dotsPos.map(function(e3, r3) {
            return st({ pos: e3, index: r3, value: t3.control.dotsValue[r3], focus: t3.states.has(mt.Focus) && t3.focusDotIndex === r3, disabled: t3.disabled, style: t3.dotStyle }, (Array.isArray(t3.dotOptions) ? t3.dotOptions[r3] : t3.dotOptions) || {});
          });
        }, animateTime: function() {
          return this.states.has(mt.Drag) ? 0 : this.duration;
        }, canSort: function() {
          return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
        }, sliderData: function() {
          var t3 = this;
          return this.isObjectArrayData(this.data) ? this.data.map(function(e3) {
            return e3[t3.dataValue];
          }) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data;
        }, sliderMarks: function() {
          var t3 = this;
          return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function(e3) {
            var r3 = { label: e3 };
            return t3.data.some(function(n2) {
              return n2[t3.dataValue] === e3 && (r3.label = n2[t3.dataLabel], true);
            }), r3;
          } : this.isObjectData(this.data) ? this.data : void 0;
        }, sliderTooltipFormatter: function() {
          var t3 = this;
          if (this.tooltipFormatter)
            return this.tooltipFormatter;
          if (this.isObjectArrayData(this.data))
            return function(e4) {
              var r3 = "" + e4;
              return t3.data.some(function(n2) {
                return n2[t3.dataValue] === e4 && (r3 = n2[t3.dataLabel], true);
              }), r3;
            };
          if (this.isObjectData(this.data)) {
            var e3 = this.data;
            return function(t4) {
              return e3[t4];
            };
          }
        }, isNotSync: function() {
          var t3 = this.control.dotsValue;
          return Array.isArray(this.modelValue) ? this.modelValue.length !== t3.length || this.modelValue.some(function(e3, r3) {
            return e3 !== t3[r3];
          }) : this.modelValue !== t3[0];
        }, dragRange: function() {
          var t3 = this.dots[this.focusDotIndex - 1], e3 = this.dots[this.focusDotIndex + 1];
          return [t3 ? t3.pos : -1 / 0, e3 ? e3.pos : 1 / 0];
        } }, watch: { modelValue: function() {
          this.control && !this.states.has(mt.Drag) && this.isNotSync && this.control.setValue(this.modelValue);
        } }, methods: { isObjectData: function(t3) {
          return !!t3 && "[object Object]" === Object.prototype.toString.call(t3);
        }, isObjectArrayData: function(t3) {
          return !!t3 && Array.isArray(t3) && t3.length > 0 && "object" === ot(t3[0]);
        }, bindEvent: function() {
          document.addEventListener("touchmove", this.dragMove, { passive: false }), document.addEventListener("touchend", this.dragEnd, { passive: false }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle);
        }, unbindEvent: function() {
          document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle);
        }, setScale: function() {
          this.scale = new j(Math.floor(this.isHorizontal ? this.$el.offsetWidth : this.$el.offsetHeight)).multiply(this.zoom || 1).divide(100).toNumber();
        }, initControl: function() {
          var t3 = this;
          this.control = new Z({ value: this.modelValue, data: this.sliderData, enableCross: this.enableCross, fixed: this.fixed, max: this.max, min: this.min, interval: this.interval, minRange: this.minRange, maxRange: this.maxRange, order: this.order, marks: this.sliderMarks, included: this.included, process: this.process, adsorb: this.adsorb, dotOptions: this.dotOptions, onError: this.emitError }), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach(function(e3) {
            t3.$watch(e3, function(r3) {
              if ("data" === e3 && Array.isArray(t3.control.data) && Array.isArray(r3) && t3.control.data.length === r3.length && r3.every(function(e4, r4) {
                return e4 === t3.control.data[r4];
              }))
                return false;
              switch (e3) {
                case "data":
                case "dataLabel":
                case "dataValue":
                  t3.control.data = t3.sliderData;
                  break;
                case "mark":
                  t3.control.marks = t3.sliderMarks;
                  break;
                default:
                  t3.control[e3] = r3;
              }
              ["data", "max", "min", "interval"].indexOf(e3) > -1 && t3.control.syncDotsPos();
            });
          });
        }, syncValueByPos: function() {
          var t3 = this.control.dotsValue;
          if (this.isDiff(t3, Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue])) {
            var e3 = 1 === t3.length ? t3[0] : et(t3);
            this.$emit("change", e3, this.focusDotIndex), this.$emit("update:modelValue", e3);
          }
        }, isDiff: function(t3, e3) {
          return t3.length !== e3.length || t3.some(function(t4, r3) {
            return t4 !== e3[r3];
          });
        }, emitError: function(t3, e3) {
          this.silent || console.error("[VueSlider error]: ".concat(e3)), this.$emit("error", t3, e3);
        }, dragStartOnProcess: function(t3) {
          if (this.dragOnClick) {
            this.setScale();
            var e3 = this.getPosByEvent(t3), r3 = this.control.getRecentDot(e3);
            if (this.dots[r3].disabled)
              return;
            this.dragStart(r3), this.control.setDotPos(e3, this.focusDotIndex), this.lazy || this.syncValueByPos();
          }
        }, dragStart: function(t3) {
          this.focusDotIndex = t3, this.setScale(), this.states.add(mt.Drag), this.states.add(mt.Focus), this.$emit("drag-start", this.focusDotIndex);
        }, dragMove: function(t3) {
          if (!this.states.has(mt.Drag))
            return false;
          t3.preventDefault();
          var e3 = this.getPosByEvent(t3);
          this.isCrossDot(e3), this.control.setDotPos(e3, this.focusDotIndex), this.lazy || this.syncValueByPos();
          var r3 = this.control.dotsValue;
          this.$emit("dragging", 1 === r3.length ? r3[0] : et(r3), this.focusDotIndex);
        }, isCrossDot: function(t3) {
          if (this.canSort) {
            var e3 = this.focusDotIndex, r3 = t3;
            if (r3 > this.dragRange[1] ? (r3 = this.dragRange[1], this.focusDotIndex++) : r3 < this.dragRange[0] && (r3 = this.dragRange[0], this.focusDotIndex--), e3 !== this.focusDotIndex) {
              var n2 = this.$refs["dot-".concat(this.focusDotIndex)];
              n2 && n2.$el && n2.$el.focus(), this.control.setDotPos(r3, e3);
            }
          }
        }, dragEnd: function(t3) {
          var e3 = this;
          if (!this.states.has(mt.Drag))
            return false;
          setTimeout(function() {
            e3.lazy && e3.syncValueByPos(), e3.included && e3.isNotSync ? e3.control.setValue(e3.modelValue) : e3.control.syncDotsPos(), e3.states.delete(mt.Drag), e3.useKeyboard && !("targetTouches" in t3) || e3.states.delete(mt.Focus), e3.$emit("drag-end", e3.focusDotIndex);
          });
        }, blurHandle: function(t3) {
          if (!this.states.has(mt.Focus) || !this.$refs.container || this.$refs.container.contains(t3.target))
            return false;
          this.states.delete(mt.Focus);
        }, clickHandle: function(t3) {
          if (!this.clickable || this.disabled)
            return false;
          if (!this.states.has(mt.Drag)) {
            this.setScale();
            var e3 = this.getPosByEvent(t3);
            this.setValueByPos(e3);
          }
        }, focus: function(t3) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          t3.disabled || (this.states.add(mt.Focus), this.focusDotIndex = e3);
        }, blur: function() {
          this.states.delete(mt.Focus);
        }, getValue: function() {
          var t3 = this.control.dotsValue;
          return 1 === t3.length ? t3[0] : t3;
        }, getIndex: function() {
          var t3 = this.control.dotsIndex;
          return 1 === t3.length ? t3[0] : t3;
        }, setValue: function(t3) {
          this.control.setValue(Array.isArray(t3) ? et(t3) : [t3]), this.syncValueByPos();
        }, setIndex: function(t3) {
          var e3 = this, r3 = Array.isArray(t3) ? t3.map(function(t4) {
            return e3.control.getValueByIndex(t4);
          }) : this.control.getValueByIndex(t3);
          this.setValue(r3);
        }, setValueByPos: function(t3) {
          var e3 = this, r3 = this.control.getRecentDot(t3);
          if (this.disabled || this.dots[r3].disabled)
            return false;
          this.focusDotIndex = r3, this.control.setDotPos(t3, r3), this.syncValueByPos(), this.useKeyboard && this.states.add(mt.Focus), setTimeout(function() {
            e3.included && e3.isNotSync ? e3.control.setValue(e3.modelValue) : e3.control.syncDotsPos();
          });
        }, keydownHandle: function(t3) {
          var e3 = this;
          if (!this.useKeyboard || !this.states.has(mt.Focus))
            return false;
          var r3 = this.included && this.marks, n2 = w(t3, { direction: this.direction, max: r3 ? this.control.markList.length - 1 : this.control.total, min: 0, hook: this.keydownHook });
          if (n2) {
            t3.preventDefault();
            var i2 = -1, o2 = 0;
            r3 ? (this.control.markList.some(function(t4, r4) {
              return t4.value === e3.control.dotsValue[e3.focusDotIndex] && (i2 = n2(r4), true);
            }), i2 < 0 ? i2 = 0 : i2 > this.control.markList.length - 1 && (i2 = this.control.markList.length - 1), o2 = this.control.markList[i2].pos) : (i2 = n2(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), o2 = this.control.parseValue(this.control.getValueByIndex(i2))), this.isCrossDot(o2), this.control.setDotPos(o2, this.focusDotIndex), this.syncValueByPos();
          }
        }, getPosByEvent: function(t3) {
          return P(t3, this.$el, this.isReverse, this.zoom)[this.isHorizontal ? "x" : "y"] / this.scale;
        }, renderSlot: function(t3, e3, r3) {
          var n2 = this.$slots[t3];
          return n2 ? n2(e3) : r3;
        } }, created: function() {
          this.initControl();
        }, mounted: function() {
          this.bindEvent();
        }, beforeUnmount: function() {
          this.unbindEvent();
        } });
        const bt = (0, f.Z)(yt, [["render", l]]);
        var gt = bt;
        gt.VueSliderMark = k, gt.VueSliderDot = m;
        var kt = gt, St = kt;
      }(), i = i["default"], i;
    }();
  });
})(vueSliderComponent_umd_min);
var vueSliderComponent_umd_minExports = vueSliderComponent_umd_min.exports;
const VueSlider = /* @__PURE__ */ getDefaultExportFromCjs(vueSliderComponent_umd_minExports);
export {
  VueSlider as V
};
