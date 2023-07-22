import { r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, n as normalizeClass, d as createVNode, D as createCommentVNode, B as toDisplayString, aK as withKeys, az as render, a as mapGetters, b as mapActions, Q as axios, a9 as toasty, y as resolveDirective, z as createBlock, w as withCtx, J as Fragment, K as renderList, E as createTextVNode, C as withDirectives } from "./vendor-506bc2e6.js";
import { _ as _export_sfc, t as track } from "./app-a3809c34.js";
import { z as zohoLight, a as zohoDark } from "./zoho-monocrome-black-11dabfe7.js";
import "./__commonjsHelpers__-7a7fcd32.js";
function asteroids() {
  function t() {
    function t2(t3, e) {
      "Object" == typeof t3 ? (this.x = t3.x, this.y = t3.y) : (this.x = t3, this.y = e);
    }
    window.ASTEROIDS || (window.ASTEROIDS = {
      enemiesKilled: 0,
      startedPlaying: (/* @__PURE__ */ new Date()).getTime()
    }), t2.prototype = {
      cp: function() {
        return new t2(this.x, this.y);
      },
      mul: function(t3) {
        return this.x *= t3, this.y *= t3, this;
      },
      mulNew: function(e) {
        return new t2(this.x * e, this.y * e);
      },
      add: function(t3) {
        return this.x += t3.x, this.y += t3.y, this;
      },
      addNew: function(e) {
        return new t2(this.x + e.x, this.y + e.y);
      },
      sub: function(t3) {
        return this.x -= t3.x, this.y -= t3.y, this;
      },
      subNew: function(e) {
        return new t2(this.x - e.x, this.y - e.y);
      },
      rotate: function(t3) {
        const e = this.x, i2 = this.y;
        return this.x = e * Math.cos(t3) - Math.sin(t3) * i2, this.y = e * Math.sin(t3) + Math.cos(t3) * i2, this;
      },
      rotateNew: function(t3) {
        return this.cp().rotate(t3);
      },
      setAngle: function(t3) {
        const e = this.len();
        return this.x = Math.cos(t3) * e, this.y = Math.sin(t3) * e, this;
      },
      setAngleNew: function(t3) {
        return this.cp().setAngle(t3);
      },
      setLength: function(t3) {
        const e = this.len();
        return e ? this.mul(t3 / e) : this.x = this.y = t3, this;
      },
      setLengthNew: function(t3) {
        return this.cp().setLength(t3);
      },
      normalize: function() {
        const t3 = this.len();
        return this.x /= t3, this.y /= t3, this;
      },
      normalizeNew: function() {
        return this.cp().normalize();
      },
      angle: function() {
        return Math.atan2(this.y, this.x);
      },
      collidesWith: function(t3) {
        return this.x > t3.x && this.y > t3.y && this.x < t3.x + t3.width && this.y < t3.y + t3.height;
      },
      len: function() {
        const t3 = Math.sqrt(this.x * this.x + this.y * this.y);
        return t3 < 5e-3 && t3 > -5e-3 ? 0 : t3;
      },
      is: function(t3) {
        return "object" == typeof t3 && this.x == t3.x && this.y == t3.y;
      },
      toString: function() {
        return "[Vector(" + this.x + ", " + this.y + ") angle: " + this.angle() + ", length: " + this.len() + "]";
      }
    };
    let i = this, s = !!window.ActiveXObject, n = s && "BackCompat" == document.compatMode, o = document.documentElement.clientWidth, a = document.documentElement.clientHeight;
    n && (o = document.body.clientWidth, a = document.body.clientHeight);
    let h = [
      [-15, -10],
      [-15, 10],
      [15, 0]
    ], l = ["HTML", "HEAD", "BODY", "SCRIPT", "TITLE", "META", "STYLE", "LINK"];
    window.ActiveXObject && (l = [
      "HTML",
      "HEAD",
      "BODY",
      "SCRIPT",
      "TITLE",
      "META",
      "STYLE",
      "LINK",
      "SHAPE",
      "LINE",
      "GROUP",
      "IMAGE",
      "STROKE",
      "FILL",
      "SKEW",
      "PATH",
      "TEXTPATH",
      "INS"
    ]);
    let c, d = ["BR", "HR"], u = s ? 20 : 40, p = s ? 10 : 20;
    function y() {
      for (var t3, e = 0; t3 = i.enemies[e]; e++)
        k(t3, "ASTEROIDSYEAHENEMY");
      const s2 = document.body.getElementsByTagName("*");
      let n2;
      for (i.enemies = [], e = 0; n2 = s2[e]; e++)
        -1 == P(l, n2.tagName.toUpperCase()) && "g_vml_" != n2.prefix && b(n2) && "ASTEROIDSYEAH" != n2.className && n2.offsetHeight > 0 && (n2.aSize = v(n2), i.enemies.push(n2), I(n2, "ASTEROIDSYEAHENEMY"), n2.aAdded || (n2.aAdded = true, i.totalEnemies++));
    }
    function m(t3) {
      return 0.0174532925 * t3;
    }
    function f(t3, e) {
      return Math.floor(Math.random() * (e + 1) + t3);
    }
    function g(t3) {
      const e = { up: 38, down: 40, left: 37, right: 39, esc: 27 };
      return e[t3] ? e[t3] : t3.charCodeAt(0);
    }
    function v(t3) {
      let e = t3, i2 = 0, s2 = 0;
      do {
        i2 += e.offsetLeft || 0, s2 += e.offsetTop || 0, e = e.offsetParent;
      } while (e);
      return {
        x: i2,
        y: s2,
        width: t3.offsetWidth || 10,
        height: t3.offsetHeight || 10
      };
    }
    function x(t3, e, i2) {
      t3.addEventListener ? t3.addEventListener(e, i2, false) : t3.attachEvent && (t3["e" + e + i2] = i2, t3[e + i2] = function() {
        t3["e" + e + i2](window.event);
      }, t3.attachEvent("on" + e, t3[e + i2]));
    }
    function E(t3, e, i2) {
      t3.removeEventListener ? t3.removeEventListener(e, i2, false) : t3.detachEvent && (t3.detachEvent("on" + e, t3[e + i2]), t3[e + i2] = null, t3["e" + e + i2] = null);
    }
    function w(t3) {
      for (var e, i2 = 0; e = window.ASTEROIDSPLAYERS[i2]; i2++)
        e.gameContainer.style.visibility = t3;
    }
    function S(t3, e) {
      w("hidden");
      let i2 = document.elementFromPoint(t3, e);
      return i2 ? (3 == i2.nodeType && (i2 = i2.parentNode), w("visible"), i2) : (w("visible"), false);
    }
    function A(e) {
      for (let s2 = (/* @__PURE__ */ new Date()).getTime(), n2 = u, o2 = 0; o2 < n2; o2++)
        i.particles.push({
          dir: new t2(
            20 * Math.random() - 10,
            20 * Math.random() - 10
          ).normalize(),
          pos: e.cp(),
          cameAlive: s2
        });
    }
    function T() {
      i.points.innerHTML = 10 * window.ASTEROIDS.enemiesKilled;
    }
    function b(t3) {
      if (t3.offsetLeft < -100 && t3.offsetWidth > 0 && t3.offsetHeight > 0)
        return false;
      if (-1 != P(d, t3.tagName))
        return true;
      if (0 == t3.offsetWidth && 0 == t3.offsetHeight)
        return false;
      for (let e = 0; e < t3.childNodes.length; e++)
        if (-1 == P(d, t3.childNodes[e].tagName) && 0 != t3.childNodes[e].childNodes.length)
          return false;
      return true;
    }
    function P(t3, e, i2) {
      if (t3.indexOf)
        return t3.indexOf(e, i2);
      for (let s2 = t3.length, n2 = i2 < 0 ? Math.max(0, s2 + i2) : i2 || 0; n2 < s2; n2++)
        if (t3[n2] === e)
          return n2;
      return -1;
    }
    function I(t3, e) {
      -1 == t3.className.indexOf(e) && (t3.className = (t3.className + " " + e).replace(/\s+/g, " ").replace(/^\s+|\s+$/g, ""));
    }
    function k(t3, e) {
      t3.className = t3.className.replace(
        new RegExp("(^|\\s)" + e + "(?:\\s|$)"),
        "$1"
      );
    }
    this.flame = { r: [], y: [] }, this.toggleBlinkStyle = function() {
      this.updated.blink.isActive ? k(document.body, "ASTEROIDSBLINK") : I(document.body, "ASTEROIDSBLINK"), this.updated.blink.isActive = !this.updated.blink.isActive;
    }, function(t3, e) {
      const i2 = document.createElement("style");
      i2.type = "text/css", i2.rel = "stylesheet", i2.id = "ASTEROIDSYEAHSTYLES";
      try {
        i2.innerHTML = t3 + "{" + e + "}";
      } catch (s2) {
        i2.styleSheet.addRule(t3, e);
      }
      document.getElementsByTagName("head")[0].appendChild(i2);
    }(".ASTEROIDSBLINK .ASTEROIDSYEAHENEMY", "outline: 2px dotted red;"), this.pos = new t2(100, 100), this.lastPos = false, this.vel = new t2(0, 0), this.dir = new t2(0, 1), this.keysPressed = {}, this.firedAt = false, this.updated = {
      enemies: false,
      flame: (/* @__PURE__ */ new Date()).getTime(),
      blink: { time: 0, isActive: false }
    }, this.scrollPos = new t2(0, 0), this.bullets = [], this.enemies = [], this.dying = [], this.totalEnemies = 0, this.particles = [], y(), (c = function() {
      i.flame.r = [[-15, -10]], i.flame.y = [[-15, -6]];
      for (var t3 = 0; t3 < 20; t3 += 2)
        i.flame.r.push([-f(2, 7) - 15, t3 - 10]);
      for (i.flame.r.push([-15, 10]), t3 = 0; t3 < 12; t3 += 2.4000000000000004)
        i.flame.y.push([-f(2, 7) - 15, t3 - 6]);
      i.flame.y.push([-15, 6]);
    })(), this.gameContainer = document.createElement("div"), this.gameContainer.className = "ASTEROIDSYEAH", document.body.appendChild(this.gameContainer), this.canvas = document.createElement("canvas"), this.canvas.setAttribute("width", o), this.canvas.setAttribute("height", a), this.canvas.className = "ASTEROIDSYEAH", this.canvas.style.width = o + "px", this.canvas.style.height = a + "px", this.canvas.style.position = "fixed", this.canvas.style.top = "0px", this.canvas.style.left = "0px", this.canvas.style.bottom = "0px", this.canvas.style.right = "0px", this.canvas.style.zIndex = "10000", "undefined" != typeof G_vmlCanvasManager ? (this.canvas = G_vmlCanvasManager.initElement(this.canvas), this.canvas.getContext || alert("This program does not yet support your browser.")) : this.canvas.getContext || alert("This program does not yet support your browser."), x(this.canvas, "mousedown", function(t3) {
      t3 = t3 || window.event;
      const e = document.createElement("span");
      e.style.position = "absolute", e.style.border = "1px solid #999", e.style.background = "white", e.style.color = "black", e.innerHTML = "Press Esc to quit", document.body.appendChild(e);
      const i2 = t3.pageX || t3.clientX + document.documentElement.scrollLeft, s2 = t3.pageY || t3.clientY + document.documentElement.scrollTop;
      e.style.left = i2 - e.offsetWidth / 2 + "px", e.style.top = s2 - e.offsetHeight / 2 + "px", setTimeout(function() {
        try {
          e.parentNode.removeChild(e);
        } catch (t4) {
        }
      }, 1e3);
    });
    const N = function() {
      s ? (o = document.documentElement.clientWidth, a = document.documentElement.clientHeight, n && (o = document.body.clientWidth, a = document.body.clientHeight), i.canvas.setAttribute("width", o), i.canvas.setAttribute("height", a)) : (i.canvas.style.display = "none", o = document.documentElement.clientWidth, a = document.documentElement.clientHeight, i.canvas.setAttribute("width", o), i.canvas.setAttribute("height", a), i.canvas.style.display = "block", i.canvas.style.width = o + "px", i.canvas.style.height = a + "px"), B = true;
    };
    if (x(window, "resize", N), this.gameContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.fillStyle = "black", this.ctx.strokeStyle = "black", document.getElementById("ASTEROIDS-NAVIGATION") ? (this.navigation = document.getElementById("ASTEROIDS-NAVIGATION"), this.points = document.getElementById("ASTEROIDS-POINTS")) : (this.navigation = document.createElement("div"), this.navigation.id = "ASTEROIDS-NAVIGATION", this.navigation.className = "ASTEROIDSYEAH", this.navigation.style.fontFamily = "Arial,sans-serif", this.navigation.style.position = "fixed", this.navigation.style.zIndex = "10001", this.navigation.style.bottom = "1em", this.navigation.style.right = "1em", this.navigation.style.textAlign = "center", this.navigation.style.background = "#005a5e", this.navigation.style.background = "rgba(0,90,94,.8)", this.navigation.style.color = "#FFFFFF", this.navigation.style.padding = "5px", this.navigation.style.borderRadius = "1px", this.gameContainer.appendChild(this.navigation), this.points = document.createElement("span"), this.points.id = "ASTEROIDS-POINTS", this.points.style.font = "28pt Arial, sans-serif", this.points.style.fontWeight = "bold", this.points.style.position = "relative", this.points.style.textAlign = "center", this.points.className = "ASTEROIDSYEAH", this.navigation.appendChild(this.points), this.highscoreLink = document.createElement("a"), this.highscoreLink.className = "ASTEROIDSYEAH", this.scoreTitle = document.createElement("div"), this.scoreTitle.style.minWidth = "100px", this.scoreTitle.style.textAlign = "center", this.scoreTitle.innerHTML = 'Score <br /><small>Press "esc" to quit</small>', this.navigation.appendChild(this.scoreTitle)), n && (this.gameContainer.style.position = this.canvas.style.position = this.navigation.style.position = "absolute"), T(), "undefined" != typeof G_vmlCanvasManager)
      for (var D, L = this.canvas.getElementsByTagName("*"), O = 0; D = L[O]; O++)
        I(D, "ASTEROIDSYEAH");
    const R = function(t3) {
      if (!(t3 = t3 || window.event).ctrlKey && !t3.shiftKey && (i.keysPressed[t3.keyCode] = true, t3.keyCode === g(" ") && (i.firedAt = 1), -1 != P(
        [
          g("up"),
          g("down"),
          g("right"),
          g("left"),
          g(" "),
          g("B"),
          g("W"),
          g("A"),
          g("S"),
          g("D")
        ],
        t3.keyCode
      ))) {
        if (t3.ctrlKey || t3.shiftKey)
          return;
        return t3.preventDefault && t3.preventDefault(), t3.stopPropagation && t3.stopPropagation(), t3.returnValue = false, t3.cancelBubble = true, false;
      }
    };
    x(document, "keydown", R);
    const C = function(t3) {
      if (t3 = t3 || window.event, -1 != P(
        [
          g("up"),
          g("down"),
          g("right"),
          g("left"),
          g(" "),
          g("W"),
          g("A"),
          g("S"),
          g("D")
        ],
        t3.keyCode || t3.which
      )) {
        if (t3.ctrlKey || t3.shiftKey)
          return;
        return t3.preventDefault && t3.preventDefault(), t3.stopPropagation && t3.stopPropagation(), t3.returnValue = false, t3.cancelBubble = true, false;
      }
    };
    x(document, "keypress", C);
    const H = function(t3) {
      if (t3 = t3 || window.event, i.keysPressed[t3.keyCode] = false, -1 != P(
        [
          g("up"),
          g("down"),
          g("right"),
          g("left"),
          g(" "),
          g("B"),
          g("W"),
          g("A"),
          g("S"),
          g("D")
        ],
        t3.keyCode
      ))
        return t3.preventDefault && t3.preventDefault(), t3.stopPropagation && t3.stopPropagation(), t3.returnValue = false, t3.cancelBubble = true, false;
    };
    x(document, "keyup", H), this.ctx.clear = function() {
      this.clearRect(0, 0, o, a);
    }, this.ctx.clear(), this.ctx.drawLine = function(t3, e, i2, s2) {
      this.beginPath(), this.moveTo(t3, e), this.lineTo(i2, s2), this.lineTo(i2 + 1, s2 + 1), this.closePath(), this.fill();
    }, this.ctx.tracePoly = function(t3) {
      this.beginPath(), this.moveTo(t3[0][0], t3[0][1]);
      for (let e = 1; e < t3.length; e++)
        this.lineTo(t3[e][0], t3[e][1]);
      this.closePath();
    };
    let Y = false;
    window.KICKASSIMG && ((Y = document.createElement("img")).src = window.KICKASSIMG), this.ctx.drawPlayer = function() {
      Y ? (this.save(), this.translate(i.pos.x, i.pos.y), this.rotate(i.dir.angle() + Math.PI / 2), this.drawImage(Y, -Y.width / 2, -Y.height / 2), this.restore()) : (this.save(), this.translate(i.pos.x, i.pos.y), this.rotate(i.dir.angle()), this.tracePoly(h), this.fillStyle = "white", this.fill(), this.tracePoly(h), this.stroke(), this.restore());
    };
    const M = 2 * Math.PI;
    this.ctx.drawBullets = function(t3) {
      for (let e = 0; e < t3.length; e++)
        this.beginPath(), this.arc(t3[e].pos.x, t3[e].pos.y, 2, 0, M, true), this.closePath(), this.fill();
    }, this.ctx.drawParticles = function(t3) {
      for (var e = this.fillStyle, i2 = 0; i2 < t3.length; i2++)
        this.fillStyle = ["red", "yellow"][f(0, 1)], this.drawLine(
          t3[i2].pos.x,
          t3[i2].pos.y,
          t3[i2].pos.x - 10 * t3[i2].dir.x,
          t3[i2].pos.y - 10 * t3[i2].dir.y
        );
      this.fillStyle = e;
    }, this.ctx.drawFlames = function(t3) {
      if (!Y) {
        this.save(), this.translate(i.pos.x, i.pos.y), this.rotate(i.dir.angle());
        const e = this.strokeStyle;
        this.strokeStyle = "red", this.tracePoly(t3.r), this.stroke(), this.strokeStyle = "yellow", this.tracePoly(t3.y), this.stroke(), this.strokeStyle = e, this.restore();
      }
    };
    try {
      window.focus();
    } catch (t3) {
    }
    A(this.pos), I(document.body, "ASTEROIDSYEAH");
    var _ = (/* @__PURE__ */ new Date()).getTime(), B = false;
    this.update = function() {
      const t3 = (/* @__PURE__ */ new Date()).getTime(), e = (t3 - _) / 1e3;
      _ = t3;
      let s2, h2 = false;
      if (t3 - this.updated.flame > 50 && (c(), this.updated.flame = t3), this.scrollPos.x = window.pageXOffset || document.documentElement.scrollLeft, this.scrollPos.y = window.pageYOffset || document.documentElement.scrollTop, this.keysPressed[g("up")] || this.keysPressed[g("W")] ? (this.vel.add(this.dir.mulNew(300 * e)), h2 = true) : this.vel.mul(0.96), (this.keysPressed[g("left")] || this.keysPressed[g("A")]) && (B = true, this.dir.rotate(m(360 * e * -1))), (this.keysPressed[g("right")] || this.keysPressed[g("D")]) && (B = true, this.dir.rotate(m(360 * e))), this.keysPressed[g(" ")] && t3 - this.firedAt > 150 && (this.bullets.unshift({
        dir: this.dir.cp(),
        pos: this.pos.cp(),
        startVel: this.vel.cp(),
        cameAlive: t3
      }), this.firedAt = t3, this.bullets.length > p && this.bullets.pop()), this.keysPressed[g("B")] ? (this.updated.enemies || (y(), this.updated.enemies = true), B = true, this.updated.blink.time += 1e3 * e, this.updated.blink.time > 250 && (this.toggleBlinkStyle(), this.updated.blink.time = 0)) : this.updated.enemies = false, this.keysPressed[g("esc")])
        return location.reload(), void W.apply(this);
      this.vel.len() > 600 && this.vel.setLength(600), this.pos.add(this.vel.mulNew(e)), this.pos.x > o ? (window.scrollTo(this.scrollPos.x + 50, this.scrollPos.y), this.pos.x = 0) : this.pos.x < 0 && (window.scrollTo(this.scrollPos.x - 50, this.scrollPos.y), this.pos.x = o), this.pos.y > a ? (window.scrollTo(this.scrollPos.x, this.scrollPos.y + 0.75 * a), this.pos.y = 0) : this.pos.y < 0 && (window.scrollTo(this.scrollPos.x, this.scrollPos.y - 0.75 * a), this.pos.y = a);
      for (var r = this.bullets.length - 1; r >= 0; r--)
        if (t3 - this.bullets[r].cameAlive > 2e3)
          this.bullets.splice(r, 1), B = true;
        else {
          const t4 = this.bullets[r].dir.setLengthNew(700 * e).add(this.bullets[r].startVel.mulNew(e));
          this.bullets[r].pos.add(t4), (s2 = this.bullets[r].pos).x > o ? s2.x = 0 : s2.x < 0 && (s2.x = o), s2.y > a ? s2.y = 0 : s2.y < 0 && (s2.y = a);
          const i2 = S(this.bullets[r].pos.x, this.bullets[r].pos.y);
          i2 && i2.tagName && -1 == P(l, i2.tagName.toUpperCase()) && b(i2) && "ASTEROIDSYEAH" != i2.className && (didKill = true, A(this.bullets[r].pos), this.dying.push(i2), this.bullets.splice(r, 1));
        }
      if (this.dying.length) {
        for (r = this.dying.length - 1; r >= 0; r--)
          try {
            this.dying[r].parentNode && window.ASTEROIDS.enemiesKilled++, this.dying[r].parentNode.removeChild(this.dying[r]);
          } catch (t4) {
          }
        T(), this.dying = [];
      }
      for (r = this.particles.length - 1; r >= 0; r--)
        this.particles[r].pos.add(
          this.particles[r].dir.mulNew(400 * e * Math.random())
        ), t3 - this.particles[r].cameAlive > 1e3 && (this.particles.splice(r, 1), B = true);
      n && (this.gameContainer.style.left = this.canvas.style.left = document.documentElement.scrollLeft + "px", this.gameContainer.style.top = this.canvas.style.top = document.documentElement.scrollTop + "px", this.navigation.style.right = "10px", this.navigation.style.top = document.documentElement.scrollTop + document.body.clientHeight - this.navigation.clientHeight - 10 + "px"), (B || 0 != this.bullets.length || 0 != this.particles.length || !this.pos.is(this.lastPos) || this.vel.len() > 0) && (this.ctx.clear(), this.ctx.drawPlayer(), h2 && this.ctx.drawFlames(i.flame), this.bullets.length && this.ctx.drawBullets(this.bullets), this.particles.length && this.ctx.drawParticles(this.particles)), this.lastPos = this.pos, B = false;
    };
    const K = setInterval(function() {
      i.update.call(i);
    }, 20);
    function W() {
      let e;
      clearInterval(K), E(document, "keydown", R), E(document, "keypress", C), E(document, "keyup", H), E(window, "resize", N), (e = document.getElementById("ASTEROIDSYEAHSTYLES")) && e.parentNode.removeChild(e), k(document.body, "ASTEROIDSYEAH"), this.highscores && this.highscores.hide(), this.gameContainer.parentNode.removeChild(this.gameContainer);
    }
  }
  if (window.ASTEROIDSPLAYERS || (window.ASTEROIDSPLAYERS = []), window.ActiveXObject && !document.createElement("canvas").getContext) {
    try {
      const t2 = document.createElement("script");
      t2.setAttribute("type", "text/xaml"), t2.textContent = '<?xml version="1.0"?><Canvas xmlns="http://schemas.microsoft.com/client/2007"></Canvas>', document.getElementsByTagName("head")[0].appendChild(t2);
    } catch (t2) {
    }
    const e = document.createElement("script");
    e.setAttribute("type", "text/javascript"), e.onreadystatechange = function() {
      "loaded" != e.readyState && "complete" != e.readyState || "undefined" != typeof G_vmlCanvasManager && (window.ASTEROIDSPLAYERS[window.ASTEROIDSPLAYERS.length] = new t());
    }, e.src = "excanvas.js", document.getElementsByTagName("head")[0].appendChild(e);
  } else
    window.ASTEROIDSPLAYERS[window.ASTEROIDSPLAYERS.length] = new t();
}
const _sfc_main$3 = {
  name: "AppSettingToggle",
  props: {
    setting: { type: Object, required: true },
    loading: { type: Boolean, default: false }
  },
  methods: {
    updateSetting() {
      const val = this.setting.val == "1" ? 0 : 1;
      const { setting } = this;
      this.$emit("updateSetting", { val, setting });
    }
  }
};
const _hoisted_1$3 = { class: "relative mb-1 flex items-center" };
const _hoisted_2$3 = {
  key: 0,
  class: "fa-solid fa-fw fa-1x fa-circle-notch fa-spin absolute float-left mr-4 text-slate-600",
  style: { "left": "-1.4em", "top": "1.2em" }
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppSwitch = resolveComponent("AppSwitch");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createBaseVNode("div", {
      class: "my-1 mr-3 w-full cursor-pointer sm:flex sm:items-center",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.updateSetting())
    }, [
      createBaseVNode("span", {
        class: normalizeClass(["mr-3", $props.loading ? "default disabled cursor-pointer" : "cursor-pointer"])
      }, [
        createVNode(_component_AppSwitch, {
          enabled: $props.setting.val && $props.setting.val == 1 ? true : false,
          "enable-tooltip": true,
          "tooltip-on": "Enable",
          "tooltip-off": "Disable"
        }, null, 8, ["enabled"]),
        $props.loading ? (openBlock(), createElementBlock("span", _hoisted_2$3)) : createCommentVNode("", true)
      ], 2),
      createBaseVNode("span", null, toDisplayString($props.setting.name) + " " + toDisplayString($props.setting.val == "1" ? "Enabled" : "Disabled"), 1)
    ])
  ]);
}
const AppSettingToggle = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "AppSettingTextInput",
  props: {
    setting: { type: Object, required: true },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    updateSetting(val) {
      const { setting } = this;
      this.$emit("updateSetting", { val, setting });
    }
  }
};
const _hoisted_1$2 = ["for"];
const _hoisted_2$2 = ["id", "name", "placeholder", "disabled", "value"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("label", {
      class: "m:w-3/12 mb-1 inline-flex w-10/12",
      for: $props.setting.key
    }, toDisplayString($props.setting.name) + ": ", 9, _hoisted_1$2),
    createBaseVNode("input", {
      id: $props.setting.key,
      type: "text",
      name: $props.setting.key,
      placeholder: $props.setting.name,
      disabled: $props.disabled || $props.loading,
      class: "w-100 mb-3 w-full border-transparent border-b-slate-400 text-slate-800 shadow-sm outline-0 focus:outline-0 active:outline-0 dark:rounded dark:border-b-slate-300",
      value: $props.setting.val,
      onBlur: _cache[0] || (_cache[0] = ($event) => $options.updateSetting($event.target.value)),
      onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => $event.target.blur(), ["enter"]))
    }, null, 40, _hoisted_2$2)
  ]);
}
const AppSettingTextInput = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "AppSettingTextarea",
  props: {
    setting: { type: Object, required: true },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    rows: { type: Number, default: 4 },
    cols: { type: Number, default: 50 }
  },
  methods: {
    updateSetting(val) {
      const { setting } = this;
      this.$emit("updateSetting", { val, setting });
    }
  }
};
const _hoisted_1$1 = ["for"];
const _hoisted_2$1 = ["id", "name", "placeholder", "disabled", "value", "rows", "cols"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("label", {
      class: "m:w-3/12 mb-1 inline-flex w-10/12",
      for: $props.setting.key
    }, toDisplayString($props.setting.name) + ": ", 9, _hoisted_1$1),
    createBaseVNode("textarea", {
      id: $props.setting.key,
      type: "text",
      name: $props.setting.key,
      placeholder: $props.setting.name,
      disabled: $props.disabled || $props.loading,
      class: "w-100 mb-3 w-full border-transparent border-b-slate-400 text-slate-800 shadow-sm outline-0 focus:outline-0 active:outline-0 dark:rounded dark:border-b-slate-300",
      value: $props.setting.val,
      rows: $props.rows,
      cols: $props.cols,
      onBlur: _cache[0] || (_cache[0] = ($event) => $options.updateSetting($event.target.value)),
      onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => $event.target.blur(), ["enter"]))
    }, null, 40, _hoisted_2$1)
  ]);
}
const AppSettingTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "AppSettings",
  components: {
    ChevronRightIcon: render,
    AppSettingToggle,
    AppSettingTextInput,
    AppSettingTextarea
  },
  props: {},
  data() {
    return {
      dataReady: false,
      authSettings: null,
      analyticsSettings: null,
      generalSettings: null,
      monitoringSettings: null,
      metaSettings: null,
      secretSettings: null,
      loading: false,
      activeTab: "Authentication",
      appGaEnabled: GA_ENABLED,
      // eslint-disable-line
      tabs: [
        { name: "Authentication", icon: "fa-solid fa-circle-user" },
        { name: "Analytics", icon: "fa-solid fa-chart-simple" },
        { name: "Monitoring", icon: "fa-solid fa-shield-halved" },
        // { name: 'General', icon: 'fa-solid fa-shield-halved' },
        { name: "App Meta", icon: "fa-solid fa-server" },
        { name: "Secrets", icon: "fa-solid fa-egg" }
      ]
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    }),
    sentryEnabled() {
      const status = this.monitoringSettings.find(
        (s) => s.key == "enableSentryMonitoring"
      );
      if (status && status.val && status.val == 1) {
        return true;
      }
      return false;
    },
    zohoImgUrl() {
      if (this.user && this.user.theme_dark) {
        return zohoLight;
      } else {
        return zohoDark;
      }
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    this.getAppSettings();
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    track,
    async getAppSettings() {
      this.dataReady = false;
      await axios.get("/api/app-settings").then(({ data }) => {
        this.authSettings = data.authSettings;
        this.analyticsSettings = data.analyticsSettings;
        this.generalSettings = data.generalSettings;
        this.monitoringSettings = data.monitoringSettings;
        this.metaSettings = data.metaSettings;
        this.secretSettings = data.secretSettings;
        this.dataReady = true;
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Getting App Settings",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
    },
    async updateSetting(newValue, setting) {
      let index = null;
      if (setting && setting.group && setting.group == "auth") {
        index = this.authSettings.map((o) => o.name).indexOf(setting.name);
      }
      if (setting && setting.group && setting.group == "analytics") {
        index = this.analyticsSettings.map((o) => o.name).indexOf(setting.name);
      }
      if (setting && setting.group && setting.group == "general") {
        index = this.generalSettings.map((o) => o.name).indexOf(setting.name);
      }
      if (setting && setting.group && setting.group == "monitoring") {
        index = this.monitoringSettings.map((o) => o.name).indexOf(setting.name);
      }
      if (setting && setting.group && setting.group == "app-meta") {
        index = this.metaSettings.map((o) => o.name).indexOf(setting.name);
      }
      if (setting && setting.group && setting.group == "secrets") {
        index = this.secretSettings.map((o) => o.name).indexOf(setting.name);
      }
      const a = setting;
      if (newValue != a.val) {
        setting.val = newValue;
        await axios.patch(`/api/app-settings/${setting.id}`, setting).then(({ data }) => {
          const message = "App Setting Updated";
          if (index !== -1) {
            if (setting && setting.group && setting.group == "auth") {
              this.authSettings[index] = data.data;
            }
            if (setting && setting.group && setting.group == "analytics") {
              this.analyticsSettings[index] = data.data;
            }
            if (setting && setting.group && setting.group == "general") {
              this.generalSettings[index] = data.data;
            }
            if (setting && setting.group && setting.group == "monitoring") {
              this.monitoringSettings[index] = data.data;
            }
            if (setting && setting.group && setting.group == "app-meta") {
              this.metaSettings[index] = data.data;
            }
            if (setting && setting.group && setting.group == "secrets") {
              this.secretSettings[index] = data.data;
            }
          }
          this.loading = false;
          this.popToast({
            message,
            timer: 5e3,
            icon: "success"
          });
          this.track(
            `App setting "${setting.name}" was updated from "${a.val}" to "${setting.val}"`,
            "app event",
            "app setting updated"
          );
        }).catch(({ response }) => {
          this.popToast({
            message: "Error Updating Setting",
            timer: 5e3,
            icon: "error"
          });
          this.loading = false;
        });
      }
    },
    changeTab(tab) {
      this.activeTab = tab;
      this.track(`clicked tab: ${tab}`);
    },
    appSettingUpdateTriggered(val) {
      this.updateSetting(val.val, val.setting);
    },
    throwTestError() {
      this.popToast({
        message: "Sentry Test Error Triggered",
        timer: 5e3,
        icon: "success"
      });
      throw new Error("Sentry Test Error");
    },
    triggerEasterEgg(egg = null) {
      if (egg == "asteroids") {
        this.asteroids();
      } else if (egg == "toasty") {
        this.toasty().trigger();
      }
    },
    asteroids,
    toasty
  }
};
const _hoisted_1 = { class: "bg-white p-3 dark:bg-slate-800 dark:text-gray-200" };
const _hoisted_2 = {
  class: "mb-6 text-sm font-semibold",
  "aria-label": "Breadcrumb"
};
const _hoisted_3 = { class: "inline-flex list-none p-0" };
const _hoisted_4 = { class: "flex items-center" };
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "pb-10 pt-10 text-center" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "fa fa-circle-notch fa-spin fa-5x" })
  ])
], -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "border-b border-gray-200 dark:border-gray-700" };
const _hoisted_12 = { class: "-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400" };
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "rounded-lg bg-gray-50 p-4 dark:bg-gray-800" };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-semibold" }, "Authentication Settings", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-3 w-10 pb-4" }, null, -1);
const _hoisted_18 = { class: "setting-group mb-3" };
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-square-facebook fa-fw text-blue-600 dark:text-blue-600" }, null, -1);
const _hoisted_22 = {
  href: "https://developers.facebook.com/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_26 = { class: "setting-group mb-3" };
const _hoisted_27 = { key: 0 };
const _hoisted_28 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-twitter fa-fw text-blue-300 dark:text-blue-300" }, null, -1);
const _hoisted_30 = {
  href: "https://apps.twitter.com/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_32 = [
  _hoisted_31
];
const _hoisted_33 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_34 = { class: "setting-group mb-3" };
const _hoisted_35 = { key: 0 };
const _hoisted_36 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-google fa-fw text-green-600 dark:text-green-500" }, null, -1);
const _hoisted_38 = {
  href: "https://console.developers.google.com/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_40 = [
  _hoisted_39
];
const _hoisted_41 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_42 = { class: "setting-group mb-3" };
const _hoisted_43 = { key: 0 };
const _hoisted_44 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-instagram fa-fw text-yellow-600 dark:text-yellow-400" }, null, -1);
const _hoisted_46 = {
  href: "https://instagram.com/developer/register/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_48 = [
  _hoisted_47
];
const _hoisted_49 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_50 = { class: "setting-group mb-3" };
const _hoisted_51 = { key: 0 };
const _hoisted_52 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-github fa-fw text-gray-100 dark:text-gray-100" }, null, -1);
const _hoisted_54 = {
  href: "https://github.com/settings/applications/new",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_56 = [
  _hoisted_55
];
const _hoisted_57 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_58 = { class: "setting-group mb-3" };
const _hoisted_59 = { key: 0 };
const _hoisted_60 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-linkedin fa-fw text-blue-600 dark:text-blue-600" }, null, -1);
const _hoisted_62 = {
  href: "https://www.linkedin.com/developers/apps/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_64 = [
  _hoisted_63
];
const _hoisted_65 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_66 = { class: "setting-group mb-3" };
const _hoisted_67 = { key: 0 };
const _hoisted_68 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-twitch fa-fw text-blue-600 dark:text-blue-600" }, null, -1);
const _hoisted_70 = {
  href: "https://dev.twitch.tv/docs/authentication/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_72 = [
  _hoisted_71
];
const _hoisted_73 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_74 = { class: "setting-group mb-3" };
const _hoisted_75 = { key: 0 };
const _hoisted_76 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-youtube fa-fw text-red-500 dark:text-red-500" }, null, -1);
const _hoisted_78 = {
  href: "https://developers.google.com/youtube/v3/getting-started",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_80 = [
  _hoisted_79
];
const _hoisted_81 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_82 = { class: "setting-group mb-3" };
const _hoisted_83 = { key: 0 };
const _hoisted_84 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-apple fa-fw text-white-500 dark:text-white-500" }, null, -1);
const _hoisted_86 = {
  href: "https://developer.okta.com/blog/2019/06/04/what-the-heck-is-sign-in-with-apple",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_87 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_88 = [
  _hoisted_87
];
const _hoisted_89 = {
  key: 8,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_90 = { class: "setting-group mb-3" };
const _hoisted_91 = { key: 0 };
const _hoisted_92 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-microsoft fa-fw text-blue-300 dark:text-blue-300" }, null, -1);
const _hoisted_94 = {
  href: "",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_95 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_96 = [
  _hoisted_95
];
const _hoisted_97 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_98 = { class: "setting-group mb-3" };
const _hoisted_99 = { key: 0 };
const _hoisted_100 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_101 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-tiktok fa-fw text-pink-500 dark:text-pink-500" }, null, -1);
const _hoisted_102 = {
  href: "https://developers.tiktok.com/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_103 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_104 = [
  _hoisted_103
];
const _hoisted_105 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_106 = { class: "setting-group mb-3" };
const _hoisted_107 = { key: 0 };
const _hoisted_108 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_109 = /* @__PURE__ */ createBaseVNode("span", { class: "fas fa-z fa-fw text-yellow-400 dark:text-yellow-300" }, null, -1);
const _hoisted_110 = ["src"];
const _hoisted_111 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, " ZoHo ", -1);
const _hoisted_112 = {
  href: "https://api-console.zoho.com/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_113 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_114 = [
  _hoisted_113
];
const _hoisted_115 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_116 = { class: "setting-group mb-3" };
const _hoisted_117 = { key: 0 };
const _hoisted_118 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_119 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-stack-exchange fa-fw text-blue-400 dark:text-blue-400" }, null, -1);
const _hoisted_120 = {
  href: "https://stackapps.com/apps/oauth/register/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_121 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_122 = [
  _hoisted_121
];
const _hoisted_123 = {
  key: 7,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_124 = { class: "setting-group mb-3" };
const _hoisted_125 = { key: 0 };
const _hoisted_126 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-square-gitlab fa-fw text-orange-400 dark:text-orange-400" }, null, -1);
const _hoisted_128 = {
  href: "https://gitlab.com/oauth/applications",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_129 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_130 = [
  _hoisted_129
];
const _hoisted_131 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_132 = { class: "setting-group mb-3" };
const _hoisted_133 = { key: 0 };
const _hoisted_134 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_135 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-square-reddit fa-fw text-orange-700 dark:text-orange-600" }, null, -1);
const _hoisted_136 = {
  href: "https://www.reddit.com/prefs/apps",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_137 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_138 = [
  _hoisted_137
];
const _hoisted_139 = {
  key: 7,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_140 = { class: "setting-group mb-3" };
const _hoisted_141 = { key: 0 };
const _hoisted_142 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_143 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-square-snapchat fa-fw text-yellow-400 dark:text-yellow-400" }, null, -1);
const _hoisted_144 = {
  href: "https://devportal.snap.com/manage/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_145 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_146 = [
  _hoisted_145
];
const _hoisted_147 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_148 = { class: "setting-group mb-3" };
const _hoisted_149 = { key: 0 };
const _hoisted_150 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_151 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-meetup fa-fw text-red-400 dark:text-red-400" }, null, -1);
const _hoisted_152 = {
  href: "https://www.meetup.com/api/oauth/list/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_153 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_154 = [
  _hoisted_153
];
const _hoisted_155 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_156 = { class: "setting-group mb-3" };
const _hoisted_157 = { key: 0 };
const _hoisted_158 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_159 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-atlassian fa-fw text-blue-800 dark:text-blue-800" }, null, -1);
const _hoisted_160 = {
  href: "https://developer.atlassian.com/console/myapps/",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_161 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_162 = [
  _hoisted_161
];
const _hoisted_163 = {
  key: 5,
  class: "mb-5 ml-8 mr-5 mt-4 border border-b-slate-300"
};
const _hoisted_164 = { key: 1 };
const _hoisted_165 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-semibold" }, "Analytics Settings", -1);
const _hoisted_166 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-3 w-10 pb-4" }, null, -1);
const _hoisted_167 = { class: "setting-group mb-3" };
const _hoisted_168 = { key: 0 };
const _hoisted_169 = /* @__PURE__ */ createBaseVNode("h4", { class: "w-100 mb-3 text-xl font-semibold" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "fa-brands fa-google fa-fw text-green-500 dark:text-green-500" }),
  /* @__PURE__ */ createTextVNode(" Google Analytics ")
], -1);
const _hoisted_170 = [
  _hoisted_169
];
const _hoisted_171 = { key: 2 };
const _hoisted_172 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-semibold" }, "General Settings", -1);
const _hoisted_173 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-3 w-10 pb-4" }, null, -1);
const _hoisted_174 = [
  _hoisted_172,
  _hoisted_173
];
const _hoisted_175 = { key: 3 };
const _hoisted_176 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-semibold" }, "Monitoring Settings", -1);
const _hoisted_177 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-3 w-10 pb-4" }, null, -1);
const _hoisted_178 = { class: "setting-group mb-3" };
const _hoisted_179 = { key: 0 };
const _hoisted_180 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_181 = {
  class: "css-1mxa28m e10nushx4 float-left mr-1",
  viewBox: "0 0 72 66",
  width: "28",
  height: "28",
  style: { "margin-top": "-1px" }
};
const _hoisted_182 = ["fill"];
const _hoisted_183 = { key: 4 };
const _hoisted_184 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-semibold" }, "App Meta Settings", -1);
const _hoisted_185 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-3 w-10 pb-4" }, null, -1);
const _hoisted_186 = { class: "setting-group mb-3" };
const _hoisted_187 = { key: 5 };
const _hoisted_188 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-2xl font-semibold" }, "Secret Settings", -1);
const _hoisted_189 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-3 w-10 pb-4" }, null, -1);
const _hoisted_190 = { class: "setting-group mb-3" };
const _hoisted_191 = { key: 0 };
const _hoisted_192 = { class: "w-100 mb-3 text-xl font-semibold" };
const _hoisted_193 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-egg fa-fw text-green-300 dark:text-green-300" }, null, -1);
const _hoisted_194 = {
  href: "https://en.wikipedia.org/wiki/Konami_Code",
  target: "_blank",
  class: "text-blue-300 duration-300 ease-in-out hover:text-blue-400"
};
const _hoisted_195 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-circle-info fa-fw fa-sm" }, null, -1);
const _hoisted_196 = [
  _hoisted_195
];
const _hoisted_197 = { class: "relative flex items-center" };
const _hoisted_198 = { class: "mr-3 w-full sm:flex sm:items-center" };
const _hoisted_199 = { class: "relative flex items-center" };
const _hoisted_200 = { class: "mr-3 w-full sm:flex sm:items-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _component_AppSettingToggle = resolveComponent("AppSettingToggle");
  const _component_AppSettingTextInput = resolveComponent("AppSettingTextInput");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_AppSettingTextarea = resolveComponent("AppSettingTextarea");
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
            to: { name: "app-settings" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, " App Settings ", 2)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ])
    ]),
    !$data.dataReady ? (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9)) : createCommentVNode("", true),
    $data.dataReady ? (openBlock(), createElementBlock("div", _hoisted_10, [
      createBaseVNode("div", _hoisted_11, [
        createBaseVNode("ul", _hoisted_12, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.tabs, (tab, index) => {
            return openBlock(), createElementBlock("li", {
              key: tab.name + "_" + index,
              class: "mr-2 cursor-pointer",
              onClick: ($event) => $options.changeTab(tab.name)
            }, [
              createBaseVNode("span", {
                class: normalizeClass([
                  "group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300",
                  $data.activeTab == tab.name ? "active border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500" : ""
                ])
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(["fa-fw fa-1x mr-3", tab.icon]),
                  style: { "margin-top": "2px" }
                }, null, 2),
                createTextVNode(" " + toDisplayString(tab.name), 1)
              ], 2)
            ], 8, _hoisted_13);
          }), 128))
        ])
      ]),
      createBaseVNode("div", _hoisted_14, [
        $data.activeTab == "Authentication" ? (openBlock(), createElementBlock("div", _hoisted_15, [
          _hoisted_16,
          _hoisted_17,
          createBaseVNode("div", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($data.authSettings, (setting) => {
              return openBlock(), createElementBlock("div", {
                key: "auth_setting_" + setting.id,
                class: "mb-3"
              }, [
                createBaseVNode("div", _hoisted_18, [
                  setting.key == "enableFbLogin" ? (openBlock(), createElementBlock("div", _hoisted_19, [
                    createBaseVNode("h4", _hoisted_20, [
                      _hoisted_21,
                      createTextVNode(" Facebook "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_22, _hoisted_24)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableFbLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appFbId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appFbSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appFbRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appFbRedirect" ? (openBlock(), createElementBlock("div", _hoisted_25)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_26, [
                  setting.key == "enableTwitterLogin" ? (openBlock(), createElementBlock("div", _hoisted_27, [
                    createBaseVNode("h4", _hoisted_28, [
                      _hoisted_29,
                      createTextVNode(" Twitter "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_30, _hoisted_32)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableTwitterLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitterId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitterSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitterRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitterRedirect" ? (openBlock(), createElementBlock("div", _hoisted_33)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_34, [
                  setting.key == "enableGoogleLogin" ? (openBlock(), createElementBlock("div", _hoisted_35, [
                    createBaseVNode("h4", _hoisted_36, [
                      _hoisted_37,
                      createTextVNode(" Google "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_38, _hoisted_40)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableGoogleLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGoogleId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGoogleSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGoogleRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGoogleRedirect" ? (openBlock(), createElementBlock("div", _hoisted_41)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_42, [
                  setting.key == "enableInstagramLogin" ? (openBlock(), createElementBlock("div", _hoisted_43, [
                    createBaseVNode("h4", _hoisted_44, [
                      _hoisted_45,
                      createTextVNode(" Instagram "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_46, _hoisted_48)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableInstagramLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appInstagramId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appInstagramSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appInstagramRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appInstagramRedirect" ? (openBlock(), createElementBlock("div", _hoisted_49)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_50, [
                  setting.key == "enableGitHubLogin" ? (openBlock(), createElementBlock("div", _hoisted_51, [
                    createBaseVNode("h4", _hoisted_52, [
                      _hoisted_53,
                      createTextVNode(" Github "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_54, _hoisted_56)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableGitHubLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitHubId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitHubSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitHubRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitHubRedirect" ? (openBlock(), createElementBlock("div", _hoisted_57)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_58, [
                  setting.key == "enableLinkedInLogin" ? (openBlock(), createElementBlock("div", _hoisted_59, [
                    createBaseVNode("h4", _hoisted_60, [
                      _hoisted_61,
                      createTextVNode(" LinkedIn "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_62, _hoisted_64)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableLinkedInLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appLinkedInId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appLinkedInSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appLinkedInRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appLinkedInRedirect" ? (openBlock(), createElementBlock("div", _hoisted_65)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_66, [
                  setting.key == "enableTwitchLogin" ? (openBlock(), createElementBlock("div", _hoisted_67, [
                    createBaseVNode("h4", _hoisted_68, [
                      _hoisted_69,
                      createTextVNode(" Twitch "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_70, _hoisted_72)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableTwitchLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitchId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitchSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitchRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTwitchRedirect" ? (openBlock(), createElementBlock("div", _hoisted_73)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_74, [
                  setting.key == "enableYouTubeLogin" ? (openBlock(), createElementBlock("div", _hoisted_75, [
                    createBaseVNode("h4", _hoisted_76, [
                      _hoisted_77,
                      createTextVNode(" YouTube "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_78, _hoisted_80)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableYouTubeLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appYouTubeId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appYouTubeSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appYouTubeRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appYouTubeRedirect" ? (openBlock(), createElementBlock("div", _hoisted_81)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_82, [
                  setting.key == "enableAppleLogin" ? (openBlock(), createElementBlock("div", _hoisted_83, [
                    createBaseVNode("h4", _hoisted_84, [
                      _hoisted_85,
                      createTextVNode(" Apple "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_86, _hoisted_88)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableAppleLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAppleId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAppleSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAppleTeamId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAppleKeyId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 5,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appApplePrivateKey" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 6,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAppleRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 7,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAppleRedirect" ? (openBlock(), createElementBlock("div", _hoisted_89)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_90, [
                  setting.key == "enableMicrosoftLogin" ? (openBlock(), createElementBlock("div", _hoisted_91, [
                    createBaseVNode("h4", _hoisted_92, [
                      _hoisted_93,
                      createTextVNode(" Microsoft "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_94, _hoisted_96)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableMicrosoftLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMicrosoftId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMicrosoftSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMicrosoftRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMicrosoftRedirect" ? (openBlock(), createElementBlock("div", _hoisted_97)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_98, [
                  setting.key == "enableTikTokLogin" ? (openBlock(), createElementBlock("div", _hoisted_99, [
                    createBaseVNode("h4", _hoisted_100, [
                      _hoisted_101,
                      createTextVNode(" TikTok "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_102, _hoisted_104)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableTikTokLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTikTokId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTikTokSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTikTokRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appTikTokRedirect" ? (openBlock(), createElementBlock("div", _hoisted_105)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_106, [
                  setting.key == "enableZoHoLogin" ? (openBlock(), createElementBlock("div", _hoisted_107, [
                    createBaseVNode("h4", _hoisted_108, [
                      _hoisted_109,
                      createBaseVNode("img", {
                        id: "zoho",
                        src: $options.zohoImgUrl,
                        alt: "Zoho",
                        class: "",
                        style: { "width": "100%", "max-width": "60px", "margin": "-10px 0 0 5px", "display": "inline-block" }
                      }, null, 8, _hoisted_110),
                      _hoisted_111,
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_112, _hoisted_114)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableZoHoLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appZoHoId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appZoHoSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appZoHoRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appZoHoRedirect" ? (openBlock(), createElementBlock("div", _hoisted_115)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_116, [
                  setting.key == "enableStackExchangeLogin" ? (openBlock(), createElementBlock("div", _hoisted_117, [
                    createBaseVNode("h4", _hoisted_118, [
                      _hoisted_119,
                      createTextVNode(" Stack Exchange "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_120, _hoisted_122)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableStackExchangeLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appStackExchangeId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appStackExchangeKey" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appStackExchangeSite" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appStackExchangeSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 5,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appStackExchangeRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 6,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appStackExchangeRedirect" ? (openBlock(), createElementBlock("div", _hoisted_123)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_124, [
                  setting.key == "enableGitLabLogin" ? (openBlock(), createElementBlock("div", _hoisted_125, [
                    createBaseVNode("h4", _hoisted_126, [
                      _hoisted_127,
                      createTextVNode(" GitLab "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_128, _hoisted_130)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableGitLabLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitLabId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitLabSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitLabRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appGitLabRedirect" ? (openBlock(), createElementBlock("div", _hoisted_131)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_132, [
                  setting.key == "enableRedditLogin" ? (openBlock(), createElementBlock("div", _hoisted_133, [
                    createBaseVNode("h4", _hoisted_134, [
                      _hoisted_135,
                      createTextVNode(" Reddit "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_136, _hoisted_138)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableRedditLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appRedditId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appRedditSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appRedditResponseType" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appRedditState" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 5,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appRedditRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 6,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appRedditRedirect" ? (openBlock(), createElementBlock("div", _hoisted_139)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_140, [
                  setting.key == "enableSnapchatLogin" ? (openBlock(), createElementBlock("div", _hoisted_141, [
                    createBaseVNode("h4", _hoisted_142, [
                      _hoisted_143,
                      createTextVNode(" Snapchat "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_144, _hoisted_146)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableSnapchatLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appSnapchatId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appSnapchatSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appSnapchatRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appSnapchatRedirect" ? (openBlock(), createElementBlock("div", _hoisted_147)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_148, [
                  setting.key == "enableMeetupLogin" ? (openBlock(), createElementBlock("div", _hoisted_149, [
                    createBaseVNode("h4", _hoisted_150, [
                      _hoisted_151,
                      createTextVNode(" Meetup "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_152, _hoisted_154)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableMeetupLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMeetupId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMeetupSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMeetupRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appMeetupRedirect" ? (openBlock(), createElementBlock("div", _hoisted_155)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_156, [
                  setting.key == "enableAtlassianLogin" ? (openBlock(), createElementBlock("div", _hoisted_157, [
                    createBaseVNode("h4", _hoisted_158, [
                      _hoisted_159,
                      createTextVNode(" Atlassian "),
                      withDirectives((openBlock(), createElementBlock("a", _hoisted_160, _hoisted_162)), [
                        [_directive_tippy, "Get Credentials"]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  setting.key == "enableAtlassianLogin" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                    key: 1,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAtlassianId" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 2,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAtlassianSecret" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 3,
                    class: "mb-3 ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAtlassianRedirect" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                    key: 4,
                    class: "ml-8 mr-5",
                    setting,
                    loading: $data.loading,
                    disabled: !$data.dataReady,
                    onUpdateSetting: $options.appSettingUpdateTriggered
                  }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                  setting.key == "appAtlassianRedirect" ? (openBlock(), createElementBlock("div", _hoisted_163)) : createCommentVNode("", true)
                ])
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        $data.activeTab == "Analytics" ? (openBlock(), createElementBlock("div", _hoisted_164, [
          _hoisted_165,
          _hoisted_166,
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.analyticsSettings, (setting) => {
            return openBlock(), createElementBlock("div", {
              key: "analytic_settings_" + setting.id,
              class: "mb-3"
            }, [
              createBaseVNode("div", _hoisted_167, [
                setting.key == "enableGoogleAnalytics" ? (openBlock(), createElementBlock("div", _hoisted_168, _hoisted_170)) : createCommentVNode("", true),
                setting.key == "enableGoogleAnalytics" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                  key: 1,
                  class: "mb-3 ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                setting.key == "appGoogleAnalyticsKey" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                  key: 2,
                  class: "ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  disabled: !$data.dataReady,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        $data.activeTab == "General" ? (openBlock(), createElementBlock("div", _hoisted_171, _hoisted_174)) : createCommentVNode("", true),
        $data.activeTab == "Monitoring" ? (openBlock(), createElementBlock("div", _hoisted_175, [
          _hoisted_176,
          _hoisted_177,
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.monitoringSettings, (setting) => {
            return openBlock(), createElementBlock("div", {
              key: "monitoring_settings_" + setting.id,
              class: "mb-3"
            }, [
              createBaseVNode("div", _hoisted_178, [
                setting.key == "enableSentryMonitoring" ? (openBlock(), createElementBlock("div", _hoisted_179, [
                  createBaseVNode("h4", _hoisted_180, [
                    (openBlock(), createElementBlock("svg", _hoisted_181, [
                      createBaseVNode("path", {
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z",
                        transform: "translate(11, 11)",
                        fill: _ctx.user.theme_dark ? "#ffffff" : "#362d59"
                      }, null, 8, _hoisted_182)
                    ])),
                    createTextVNode(" Sentry.io Monitoring ")
                  ])
                ])) : createCommentVNode("", true),
                setting.key == "enableSentryMonitoring" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                  key: 1,
                  class: "mb-3 ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                setting.key == "enableSentryMonitoringFeedbakForm" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                  key: 2,
                  class: "mb-3 ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                setting.key == "sentryIoDSN" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                  key: 3,
                  class: "ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  disabled: !$data.dataReady,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                setting.key == "sentryIoDSN" && $options.sentryEnabled ? (openBlock(), createBlock(_component_AppButton, {
                  key: 4,
                  secondary: "",
                  text: "Throw Test Error",
                  class: "mb-3 ml-8 mr-5 mt-4",
                  onClick: $options.throwTestError
                }, null, 8, ["onClick"])) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        $data.activeTab == "App Meta" ? (openBlock(), createElementBlock("div", _hoisted_183, [
          _hoisted_184,
          _hoisted_185,
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.metaSettings, (setting) => {
            return openBlock(), createElementBlock("div", {
              key: "monitoring_settings_" + setting.id,
              class: "mb-3"
            }, [
              createBaseVNode("div", _hoisted_186, [
                setting.key == "appName" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                  key: 0,
                  class: "ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  disabled: !$data.dataReady,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                setting.key == "author" ? (openBlock(), createBlock(_component_AppSettingTextInput, {
                  key: 1,
                  class: "ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  disabled: !$data.dataReady,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true),
                setting.key == "description" ? (openBlock(), createBlock(_component_AppSettingTextarea, {
                  key: 2,
                  class: "ml-8 mr-5",
                  setting,
                  loading: $data.loading,
                  disabled: !$data.dataReady,
                  onUpdateSetting: $options.appSettingUpdateTriggered
                }, null, 8, ["setting", "loading", "disabled", "onUpdateSetting"])) : createCommentVNode("", true)
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true),
        $data.activeTab == "Secrets" ? (openBlock(), createElementBlock("div", _hoisted_187, [
          _hoisted_188,
          _hoisted_189,
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.secretSettings, (setting) => {
            return openBlock(), createElementBlock("div", {
              key: "monitoring_settings_" + setting.id,
              class: "mb-3"
            }, [
              createBaseVNode("div", _hoisted_190, [
                setting.key == "enableKonamiAsteroids" ? (openBlock(), createElementBlock("div", _hoisted_191, [
                  createBaseVNode("h4", _hoisted_192, [
                    _hoisted_193,
                    createTextVNode(" App Hidden Features "),
                    withDirectives((openBlock(), createElementBlock("a", _hoisted_194, _hoisted_196)), [
                      [
                        _directive_tippy,
                        "Up, Up, Down, Down, Left, Right, Left, Right, a, b"
                      ]
                    ])
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_197, [
                  createBaseVNode("div", _hoisted_198, [
                    setting.key == "enableKonamiAsteroids" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                      key: 0,
                      class: "mb-3 ml-8 mr-5 cursor-pointer",
                      setting,
                      loading: $data.loading,
                      onUpdateSetting: $options.appSettingUpdateTriggered
                    }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                    setting.key == "enableKonamiAsteroids" ? withDirectives((openBlock(), createBlock(_component_AppButton, {
                      key: 1,
                      disabled: $data.loading,
                      accent: "",
                      outline: "",
                      icon: "fa-solid fa-gamepad",
                      "btn-class": "px-2 py-1",
                      style: { "margin-top": "-5px" },
                      onClick: _cache[0] || (_cache[0] = ($event) => $options.triggerEasterEgg("asteroids"))
                    }, null, 8, ["disabled"])), [
                      [_directive_tippy, "Trigger Hidden Konami Asteroids Code"]
                    ]) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_199, [
                  createBaseVNode("div", _hoisted_200, [
                    setting.key == "enableKonamiToasty" ? (openBlock(), createBlock(_component_AppSettingToggle, {
                      key: 0,
                      class: "mb-3 ml-8 mr-5",
                      setting,
                      loading: $data.loading,
                      onUpdateSetting: $options.appSettingUpdateTriggered
                    }, null, 8, ["setting", "loading", "onUpdateSetting"])) : createCommentVNode("", true),
                    setting.key == "enableKonamiToasty" ? withDirectives((openBlock(), createBlock(_component_AppButton, {
                      key: 1,
                      disabled: $data.loading,
                      accent: "",
                      outline: "",
                      icon: "fa-solid fa-play",
                      "btn-class": "px-2 py-1",
                      style: { "margin-top": "-5px" },
                      onClick: _cache[1] || (_cache[1] = ($event) => $options.triggerEasterEgg("toasty"))
                    }, null, 8, ["disabled"])), [
                      [_directive_tippy, "Trigger Hidden Konami Toasty Code"]
                    ]) : createCommentVNode("", true)
                  ])
                ])
              ])
            ]);
          }), 128))
        ])) : createCommentVNode("", true)
      ])
    ])) : createCommentVNode("", true)
  ]);
}
const AppSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AppSettings as default
};
