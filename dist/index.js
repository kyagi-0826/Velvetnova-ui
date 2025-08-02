import { defineComponent as U, computed as d, createBlock as le, openBlock as v, resolveDynamicComponent as fe, normalizeStyle as ne, normalizeClass as S, withCtx as me, renderSlot as q, ref as k, createElementBlock as _, createCommentVNode as E, withDirectives as J, createTextVNode as ae, toDisplayString as M, createElementVNode as u, vModelDynamic as he, withModifiers as ue, nextTick as Q, watch as ie, onMounted as re, vModelText as se, vModelCheckbox as _e, inject as ke, unref as be, vModelRadio as ye, provide as ge, onUnmounted as de, Teleport as ce, Fragment as Z, renderList as ee } from "vue";
const we = /* @__PURE__ */ U({
  __name: "NText",
  props: {
    type: { default: "default" },
    size: { default: "medium" },
    strong: { type: Boolean, default: !1 },
    italic: { type: Boolean, default: !1 },
    underline: { type: Boolean, default: !1 },
    delete: { type: Boolean, default: !1 },
    code: { type: Boolean, default: !1 },
    depth: { default: void 0 },
    tag: { default: "span" }
  },
  setup(w) {
    const h = w, o = d(() => [
      "vn-text",
      `vn-text--${h.type}`,
      `vn-text--${h.size}`,
      {
        "vn-text--strong": h.strong,
        "vn-text--italic": h.italic,
        "vn-text--underline": h.underline,
        "vn-text--delete": h.delete,
        "vn-text--code": h.code,
        [`vn-text--depth-${h.depth}`]: h.depth !== void 0
      }
    ]), e = d(() => {
      const i = {};
      if (h.depth !== void 0) {
        const r = {
          1: "var(--vn-opacity-1)",
          2: "var(--vn-opacity-2)",
          3: "var(--vn-opacity-3)",
          4: "var(--vn-opacity-4)",
          5: "var(--vn-opacity-5)"
        };
        i.opacity = r[h.depth];
      }
      return i;
    });
    return (i, r) => (v(), le(fe(i.tag), {
      class: S(o.value),
      style: ne(e.value)
    }, {
      default: me(() => [
        q(i.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
}), j = (w, h) => {
  const o = w.__vccOpts || w;
  for (const [e, i] of h)
    o[e] = i;
  return o;
}, $e = /* @__PURE__ */ j(we, [["__scopeId", "data-v-a051ffd8"]]), xe = {
  key: 0,
  class: "vn-input__prefix"
}, Ce = ["type", "placeholder", "disabled", "readonly", "maxlength"], Ve = {
  key: 1,
  class: "vn-input__suffix"
}, Se = {
  key: 2,
  class: "vn-input__suffix"
}, Be = /* @__PURE__ */ U({
  __name: "NInput",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: { default: "medium" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 },
    status: { default: void 0 },
    prefix: { default: "" },
    suffix: { default: "" },
    maxlength: { default: void 0 },
    showCount: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "clear", "keydown"],
  setup(w, { expose: h, emit: o }) {
    const e = w, i = o, r = k(), c = k(!1), y = d({
      get: () => e.modelValue,
      set: (s) => i("update:modelValue", s)
    }), g = d(() => [
      "vn-input-wrapper",
      `vn-input-wrapper--${e.size}`,
      {
        "vn-input-wrapper--focused": c.value,
        "vn-input-wrapper--disabled": e.disabled,
        "vn-input-wrapper--round": e.round,
        [`vn-input-wrapper--${e.status}`]: e.status
      }
    ]), b = d(() => [
      "vn-input",
      {
        "vn-input--with-prefix": e.prefix,
        "vn-input--with-suffix": e.suffix || e.clearable && y.value
      }
    ]), C = (s) => {
      c.value = !0, i("focus", s);
    }, V = (s) => {
      c.value = !1, i("blur", s);
    }, B = (s) => {
      const D = s.target;
      i("input", D.value);
    }, $ = async () => {
      var s;
      i("update:modelValue", ""), i("clear"), await Q(), (s = r.value) == null || s.focus();
    }, R = (s) => {
      i("keydown", s);
    };
    return h({
      focus: () => {
        var s;
        (s = r.value) == null || s.focus();
      },
      blur: () => {
        var s;
        (s = r.value) == null || s.blur();
      },
      inputRef: r
    }), (s, D) => (v(), _("div", {
      class: S(g.value)
    }, [
      s.$slots.prefix || s.prefix ? (v(), _("div", xe, [
        q(s.$slots, "prefix", {}, () => [
          ae(M(s.prefix), 1)
        ], !0)
      ])) : E("", !0),
      J(u("input", {
        ref_key: "inputRef",
        ref: r,
        "onUpdate:modelValue": D[0] || (D[0] = (p) => y.value = p),
        class: S(b.value),
        type: s.type,
        placeholder: s.placeholder,
        disabled: s.disabled,
        readonly: s.readonly,
        maxlength: s.maxlength,
        onFocus: C,
        onBlur: V,
        onInput: B,
        onKeydown: R
      }, null, 42, Ce), [
        [he, y.value]
      ]),
      s.clearable && y.value && !s.disabled ? (v(), _("div", Ve, [
        u("button", {
          type: "button",
          class: "vn-input__clear",
          onClick: $,
          onMousedown: D[1] || (D[1] = ue(() => {
          }, ["prevent"]))
        }, " ✕ ", 32)
      ])) : s.$slots.suffix || s.suffix ? (v(), _("div", Se, [
        q(s.$slots, "suffix", {}, () => [
          ae(M(s.suffix), 1)
        ], !0)
      ])) : E("", !0)
    ], 2));
  }
}), ze = /* @__PURE__ */ j(Be, [["__scopeId", "data-v-1f9c728c"]]), De = ["placeholder", "disabled", "readonly", "maxlength", "rows"], Me = {
  key: 0,
  class: "vn-textarea__count"
}, Re = /* @__PURE__ */ U({
  __name: "NTextarea",
  props: {
    modelValue: { default: "" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    autosize: { type: [Boolean, Object], default: !1 },
    rows: { default: 3 },
    maxlength: { default: void 0 },
    showCount: { type: Boolean, default: !1 },
    resize: { default: "vertical" },
    status: { default: void 0 }
  },
  emits: ["update:modelValue", "input", "focus", "blur", "keydown"],
  setup(w, { expose: h, emit: o }) {
    const e = w, i = o, r = k(), c = k(!1), y = k(), g = d({
      get: () => e.modelValue,
      set: (t) => i("update:modelValue", t)
    }), b = d(() => e.modelValue.length), C = d(() => [
      "vn-textarea-wrapper",
      {
        "vn-textarea-wrapper--focused": c.value,
        "vn-textarea-wrapper--disabled": e.disabled,
        "vn-textarea-wrapper--autosize": e.autosize,
        [`vn-textarea-wrapper--${e.status}`]: e.status
      }
    ]), V = d(() => [
      "vn-textarea",
      {
        "vn-textarea--autosize": e.autosize
      }
    ]), B = d(() => {
      const t = {
        resize: e.resize
      };
      return e.autosize && y.value && (t.height = y.value), t;
    }), $ = () => {
      if (!e.autosize || !r.value) return;
      const t = r.value, z = typeof e.autosize == "object" && e.autosize.minRows || 1, T = typeof e.autosize == "object" && e.autosize.maxRows || 1 / 0;
      t.style.height = "auto";
      const L = window.getComputedStyle(t), F = parseInt(L.lineHeight) || 20, W = parseInt(L.paddingTop) || 0, O = parseInt(L.paddingBottom) || 0, A = parseInt(L.borderTopWidth) || 0, K = parseInt(L.borderBottomWidth) || 0, X = F * z + W + O + A + K, G = F * T + W + O + A + K;
      let a = Math.max(t.scrollHeight, X);
      G < a && (a = G), y.value = `${a}px`;
    }, R = (t) => {
      c.value = !0, i("focus", t);
    }, I = (t) => {
      c.value = !1, i("blur", t);
    }, N = (t) => {
      const z = t.target;
      i("input", z.value), e.autosize && Q(() => {
        $();
      });
    }, s = (t) => {
      i("keydown", t);
    }, D = () => {
      var t;
      (t = r.value) == null || t.focus();
    }, p = () => {
      var t;
      (t = r.value) == null || t.blur();
    };
    return ie(() => e.modelValue, () => {
      e.autosize && Q(() => {
        $();
      });
    }), re(() => {
      e.autosize && $();
    }), h({
      focus: D,
      blur: p,
      textareaRef: r
    }), (t, z) => (v(), _("div", {
      class: S(C.value)
    }, [
      J(u("textarea", {
        ref_key: "textareaRef",
        ref: r,
        "onUpdate:modelValue": z[0] || (z[0] = (T) => g.value = T),
        class: S(V.value),
        placeholder: t.placeholder,
        disabled: t.disabled,
        readonly: t.readonly,
        maxlength: t.maxlength,
        rows: t.rows,
        style: ne(B.value),
        onFocus: R,
        onBlur: I,
        onInput: N,
        onKeydown: s
      }, null, 46, De), [
        [se, g.value]
      ]),
      t.showCount && t.maxlength ? (v(), _("div", Me, M(b.value) + "/" + M(t.maxlength), 1)) : E("", !0)
    ], 2));
  }
}), Te = /* @__PURE__ */ j(Re, [["__scopeId", "data-v-7dc4d17a"]]), He = ["disabled", "indeterminate"], Ie = {
  key: 0,
  class: "vn-checkbox__checkmark"
}, Ne = {
  key: 0,
  class: "vn-checkbox__label"
}, Le = /* @__PURE__ */ U({
  __name: "NCheckbox",
  props: {
    checked: { type: Boolean, default: void 0 },
    defaultChecked: { type: Boolean, default: !1 },
    indeterminate: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    size: { default: "medium" },
    label: { default: "" },
    value: { default: void 0 }
  },
  emits: ["update:checked", "change", "focus", "blur"],
  setup(w, { expose: h, emit: o }) {
    const e = w, i = o, r = k(), c = k(!1), y = k(e.defaultChecked), g = d(() => e.checked !== void 0), b = d({
      get: () => g.value ? e.checked : y.value,
      set: (p) => {
        g.value || (y.value = p), i("update:checked", p);
      }
    }), C = d(() => b.value || e.indeterminate), V = d(() => [
      "vn-checkbox",
      `vn-checkbox--${e.size}`,
      {
        "vn-checkbox--checked": b.value,
        "vn-checkbox--indeterminate": e.indeterminate,
        "vn-checkbox--disabled": e.disabled,
        "vn-checkbox--focused": c.value
      }
    ]), B = d(() => ["vn-checkbox__input"]), $ = d(() => [
      "vn-checkbox__box",
      {
        "vn-checkbox__box--checked": b.value,
        "vn-checkbox__box--indeterminate": e.indeterminate
      }
    ]), R = (p) => {
      const t = p.target;
      i("change", t.checked, p);
    }, I = (p) => {
      c.value = !0, i("focus", p);
    }, N = (p) => {
      c.value = !1, i("blur", p);
    }, s = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, D = () => {
      var p;
      (p = r.value) == null || p.blur();
    };
    return ie(
      () => e.indeterminate,
      (p) => {
        r.value && (r.value.indeterminate = p);
      },
      { immediate: !0 }
    ), h({
      focus: s,
      blur: D,
      inputRef: r
    }), (p, t) => (v(), _("label", {
      class: S(V.value)
    }, [
      J(u("input", {
        ref_key: "inputRef",
        ref: r,
        "onUpdate:modelValue": t[0] || (t[0] = (z) => b.value = z),
        type: "checkbox",
        class: S(B.value),
        disabled: p.disabled,
        indeterminate: p.indeterminate,
        onChange: R,
        onFocus: I,
        onBlur: N
      }, null, 42, He), [
        [_e, b.value]
      ]),
      u("span", {
        class: S($.value)
      }, [
        C.value ? (v(), _("span", Ie, M(p.indeterminate ? "−" : "✓"), 1)) : E("", !0)
      ], 2),
      p.label || p.$slots.default ? (v(), _("span", Ne, [
        q(p.$slots, "default", {}, () => [
          ae(M(p.label), 1)
        ], !0)
      ])) : E("", !0)
    ], 2));
  }
}), Fe = /* @__PURE__ */ j(Le, [["__scopeId", "data-v-c75ceafd"]]), Pe = ["disabled", "name", "value"], Ee = {
  key: 0,
  class: "vn-radio__label"
}, Ye = /* @__PURE__ */ U({
  __name: "NRadio",
  props: {
    value: { type: [String, Number, Boolean] },
    disabled: { type: Boolean, default: !1 },
    size: { default: "medium" },
    label: { default: "" },
    name: { default: void 0 }
  },
  emits: ["change", "focus", "blur"],
  setup(w, { expose: h, emit: o }) {
    const e = w, i = o, r = ke("radioGroup", null), c = k(), y = k(!1), g = d({
      get: () => r ? r.modelValue : void 0,
      set: (t) => {
        r && r.updateValue(t);
      }
    }), b = d(() => g.value === e.value), C = d(() => (r == null ? void 0 : r.size) || e.size), V = d(() => (r == null ? void 0 : r.disabled) || e.disabled), B = d(() => [
      "vn-radio",
      `vn-radio--${C.value}`,
      {
        "vn-radio--checked": b.value,
        "vn-radio--disabled": V.value,
        "vn-radio--focused": y.value
      }
    ]), $ = d(() => ["vn-radio__input"]), R = d(() => [
      "vn-radio__dot",
      {
        "vn-radio__dot--checked": b.value
      }
    ]), I = (t) => {
      i("change", e.value, t);
    }, N = (t) => {
      y.value = !0, i("focus", t);
    }, s = (t) => {
      y.value = !1, i("blur", t);
    };
    return h({
      focus: () => {
        var t;
        (t = c.value) == null || t.focus();
      },
      blur: () => {
        var t;
        (t = c.value) == null || t.blur();
      },
      inputRef: c
    }), (t, z) => {
      var T;
      return v(), _("label", {
        class: S(B.value)
      }, [
        J(u("input", {
          ref_key: "inputRef",
          ref: c,
          "onUpdate:modelValue": z[0] || (z[0] = (L) => g.value = L),
          type: "radio",
          class: S($.value),
          disabled: t.disabled,
          name: ((T = be(r)) == null ? void 0 : T.name) || t.name,
          value: t.value,
          onChange: I,
          onFocus: N,
          onBlur: s
        }, null, 42, Pe), [
          [ye, g.value]
        ]),
        u("span", {
          class: S(R.value)
        }, z[1] || (z[1] = [
          u("span", { class: "vn-radio__dot-inner" }, null, -1)
        ]), 2),
        t.label || t.$slots.default ? (v(), _("span", Ee, [
          q(t.$slots, "default", {}, () => [
            ae(M(t.label), 1)
          ], !0)
        ])) : E("", !0)
      ], 2);
    };
  }
}), Oe = /* @__PURE__ */ j(Ye, [["__scopeId", "data-v-83403c99"]]), Ue = /* @__PURE__ */ U({
  __name: "NRadioGroup",
  props: {
    modelValue: { type: [String, Number, Boolean], default: void 0 },
    name: { default: `radio-group-${Date.now()}` },
    size: { default: "medium" },
    disabled: { type: Boolean, default: !1 },
    direction: { default: "horizontal" }
  },
  emits: ["update:modelValue", "change"],
  setup(w, { emit: h }) {
    const o = w, e = h, i = d(() => [
      "vn-radio-group",
      `vn-radio-group--${o.direction}`,
      `vn-radio-group--${o.size}`,
      {
        "vn-radio-group--disabled": o.disabled
      }
    ]), r = (c) => {
      e("update:modelValue", c), e("change", c);
    };
    return ge("radioGroup", {
      modelValue: d(() => o.modelValue),
      name: d(() => o.name),
      size: d(() => o.size),
      disabled: d(() => o.disabled),
      updateValue: r
    }), (c, y) => (v(), _("div", {
      class: S(i.value)
    }, [
      q(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), je = /* @__PURE__ */ j(Ue, [["__scopeId", "data-v-87beca8f"]]), We = ["value", "placeholder", "disabled"], Ae = {
  key: 0,
  class: "vn-date-picker__suffix"
}, Ke = {
  key: 1,
  class: "vn-date-picker__suffix"
}, Xe = { class: "vn-date-picker__header" }, Ge = { class: "vn-date-picker__title" }, qe = { class: "vn-date-picker__calendar" }, Je = { class: "vn-date-picker__weekdays" }, Qe = { class: "vn-date-picker__days" }, Ze = ["onClick"], et = {
  key: 0,
  class: "vn-date-picker__time"
}, tt = { class: "vn-date-picker__time-inputs" }, at = /* @__PURE__ */ U({
  __name: "NDatePicker",
  props: {
    modelValue: { default: null },
    placeholder: { default: "请选择日期" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    showTime: { type: Boolean, default: !1 },
    format: { default: "YYYY-MM-DD" }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(w, { emit: h }) {
    const o = w, e = h, i = k(), r = k(), c = k(!1), y = k(!1), g = k(/* @__PURE__ */ new Date()), b = k(0), C = k(0), V = k({}), B = ["日", "一", "二", "三", "四", "五", "六"], $ = d(() => {
      if (!o.modelValue) return "";
      const a = o.modelValue, f = a.getFullYear(), x = String(a.getMonth() + 1).padStart(2, "0"), Y = String(a.getDate()).padStart(2, "0");
      let P = `${f}-${x}-${Y}`;
      if (o.showTime) {
        const n = String(a.getHours()).padStart(2, "0"), l = String(a.getMinutes()).padStart(2, "0");
        P += ` ${n}:${l}`;
      }
      return P;
    }), R = d(() => {
      const a = g.value.getFullYear(), f = g.value.getMonth() + 1;
      return `${a}年${f}月`;
    }), I = d(() => {
      const a = g.value.getFullYear(), f = g.value.getMonth(), Y = new Date(a, f, 1).getDay(), P = new Date(a, f, 1 - Y), n = [];
      for (let l = 0; l < 42; l++) {
        const m = new Date(P);
        m.setDate(P.getDate() + l), n.push({
          date: m.getDate(),
          month: m.getMonth(),
          year: m.getFullYear(),
          isCurrentMonth: m.getMonth() === f,
          isToday: s(m, /* @__PURE__ */ new Date()),
          isSelected: o.modelValue ? s(m, o.modelValue) : !1,
          dateObj: m
        });
      }
      return n;
    }), N = d(() => [
      "vn-date-picker__wrapper",
      {
        "vn-date-picker__wrapper--focused": y.value || c.value,
        "vn-date-picker__wrapper--disabled": o.disabled
      }
    ]), s = (a, f) => a.getFullYear() === f.getFullYear() && a.getMonth() === f.getMonth() && a.getDate() === f.getDate(), D = (a) => [
      "vn-date-picker__day",
      {
        "vn-date-picker__day--other-month": !a.isCurrentMonth,
        "vn-date-picker__day--today": a.isToday,
        "vn-date-picker__day--selected": a.isSelected
      }
    ], p = () => {
      o.disabled || (c.value = !c.value, c.value && Q(() => {
        t();
      }));
    }, t = () => {
      if (!i.value) return;
      const a = i.value.getBoundingClientRect(), f = 320, Y = window.innerHeight - a.bottom, P = a.top, n = Y < f && P > Y;
      V.value = {
        position: "absolute",
        left: `${a.left + window.scrollX}px`,
        top: n ? `${a.top + window.scrollY - f}px` : `${a.bottom + window.scrollY}px`,
        zIndex: 9999
      };
    }, z = () => {
      const a = new Date(g.value);
      a.setMonth(a.getMonth() - 1), g.value = a;
    }, T = () => {
      const a = new Date(g.value);
      a.setMonth(a.getMonth() + 1), g.value = a;
    }, L = (a) => {
      const f = new Date(a.dateObj);
      o.showTime && (f.setHours(b.value), f.setMinutes(C.value)), e("update:modelValue", f), e("change", f), o.showTime || (c.value = !1);
    }, F = () => {
      const a = /* @__PURE__ */ new Date();
      o.showTime && (b.value = a.getHours(), C.value = a.getMinutes()), e("update:modelValue", a), e("change", a), c.value = !1;
    }, W = () => {
      if (o.modelValue && o.showTime) {
        const a = new Date(o.modelValue);
        a.setHours(b.value), a.setMinutes(C.value), e("update:modelValue", a), e("change", a);
      }
      c.value = !1;
    }, O = () => {
      e("update:modelValue", null), e("change", null);
    }, A = (a) => {
      y.value = !0, e("focus", a);
    }, K = (a) => {
      y.value = !1, e("blur", a);
    }, X = (a) => {
      var f;
      (f = i.value) != null && f.contains(a.target) || (c.value = !1);
    }, G = () => {
      o.modelValue && o.showTime && (b.value = o.modelValue.getHours(), C.value = o.modelValue.getMinutes());
    };
    return re(() => {
      document.addEventListener("click", X), window.addEventListener("scroll", t), window.addEventListener("resize", t), G();
    }), de(() => {
      document.removeEventListener("click", X), window.removeEventListener("scroll", t), window.removeEventListener("resize", t);
    }), (a, f) => (v(), _("div", {
      class: "vn-date-picker",
      ref_key: "datePickerRef",
      ref: i
    }, [
      u("div", {
        class: S(N.value),
        onClick: p
      }, [
        u("input", {
          ref_key: "inputRef",
          ref: r,
          value: $.value,
          placeholder: a.placeholder,
          disabled: a.disabled,
          readonly: !0,
          class: "vn-date-picker__input",
          onFocus: A,
          onBlur: K
        }, null, 40, We),
        a.clearable && a.modelValue && !a.disabled ? (v(), _("div", Ae, [
          u("button", {
            type: "button",
            class: "vn-date-picker__clear",
            onClick: ue(O, ["stop"])
          }, " ✕ ")
        ])) : (v(), _("div", Ke, f[2] || (f[2] = [
          u("span", { class: "vn-date-picker__icon" }, "📅", -1)
        ])))
      ], 2),
      (v(), le(ce, { to: "body" }, [
        c.value ? (v(), _("div", {
          key: 0,
          class: "vn-date-picker__panel",
          style: ne(V.value)
        }, [
          u("div", Xe, [
            u("button", {
              onClick: z,
              class: "vn-date-picker__nav"
            }, "‹"),
            u("span", Ge, M(R.value), 1),
            u("button", {
              onClick: T,
              class: "vn-date-picker__nav"
            }, "›")
          ]),
          u("div", qe, [
            u("div", Je, [
              (v(), _(Z, null, ee(B, (x) => u("span", {
                key: x,
                class: "vn-date-picker__weekday"
              }, M(x), 1)), 64))
            ]),
            u("div", Qe, [
              (v(!0), _(Z, null, ee(I.value, (x) => (v(), _("button", {
                key: `${x.year}-${x.month}-${x.date}`,
                class: S(D(x)),
                onClick: (Y) => L(x)
              }, M(x.date), 11, Ze))), 128))
            ])
          ]),
          a.showTime ? (v(), _("div", et, [
            u("div", tt, [
              J(u("input", {
                "onUpdate:modelValue": f[0] || (f[0] = (x) => b.value = x),
                type: "number",
                min: "0",
                max: "23",
                class: "vn-date-picker__time-input",
                placeholder: "时"
              }, null, 512), [
                [se, b.value]
              ]),
              f[3] || (f[3] = u("span", null, ":", -1)),
              J(u("input", {
                "onUpdate:modelValue": f[1] || (f[1] = (x) => C.value = x),
                type: "number",
                min: "0",
                max: "59",
                class: "vn-date-picker__time-input",
                placeholder: "分"
              }, null, 512), [
                [se, C.value]
              ])
            ])
          ])) : E("", !0),
          u("div", { class: "vn-date-picker__footer" }, [
            u("button", {
              onClick: F,
              class: "vn-date-picker__today"
            }, "今天"),
            u("button", {
              onClick: W,
              class: "vn-date-picker__confirm"
            }, "确定")
          ])
        ], 4)) : E("", !0)
      ]))
    ], 512));
  }
}), nt = /* @__PURE__ */ j(at, [["__scopeId", "data-v-7faee58c"]]), ot = ["value", "placeholder", "disabled"], st = {
  key: 0,
  class: "vn-time-picker__suffix"
}, lt = {
  key: 1,
  class: "vn-time-picker__suffix"
}, ut = { class: "vn-time-picker__content" }, it = { class: "vn-time-picker__column" }, rt = ["onClick"], dt = { class: "vn-time-picker__column" }, ct = ["onClick"], pt = {
  key: 0,
  class: "vn-time-picker__column"
}, vt = ["onClick"], ft = /* @__PURE__ */ U({
  __name: "NTimePicker",
  props: {
    modelValue: { default: null },
    placeholder: { default: "请选择时间" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    showSeconds: { type: Boolean, default: !1 },
    hourStep: { default: 1 },
    minuteStep: { default: 1 },
    secondStep: { default: 1 },
    format: { default: "24" }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(w, { emit: h }) {
    const o = w, e = h, i = k(), r = k(), c = k(), y = k(), g = k(), b = k(!1), C = k(!1), V = k(0), B = k(0), $ = k(0), R = k({}), I = d(() => {
      const n = o.format === "12" ? 12 : 23, l = o.format === "12" ? 1 : 0, m = [];
      for (let H = l; H <= n; H += o.hourStep)
        m.push(H);
      return m;
    }), N = d(() => {
      const n = [];
      for (let l = 0; l < 60; l += o.minuteStep)
        n.push(l);
      return n;
    }), s = d(() => {
      const n = [];
      for (let l = 0; l < 60; l += o.secondStep)
        n.push(l);
      return n;
    }), D = d(() => o.modelValue ? o.modelValue : ""), p = d(() => [
      "vn-time-picker__wrapper",
      {
        "vn-time-picker__wrapper--focused": C.value || b.value,
        "vn-time-picker__wrapper--disabled": o.disabled
      }
    ]), t = (n) => {
      if (!n) {
        V.value = 0, B.value = 0, $.value = 0;
        return;
      }
      const l = n.split(":");
      V.value = parseInt(l[0]) || 0, B.value = parseInt(l[1]) || 0, $.value = parseInt(l[2]) || 0;
    }, z = () => {
      const n = String(V.value).padStart(2, "0"), l = String(B.value).padStart(2, "0");
      if (o.showSeconds) {
        const m = String($.value).padStart(2, "0");
        return `${n}:${l}:${m}`;
      }
      return `${n}:${l}`;
    }, T = (n, l) => [
      "vn-time-picker__item",
      {
        "vn-time-picker__item--selected": n === "hour" ? l === V.value : n === "minute" ? l === B.value : l === $.value
      }
    ], L = () => {
      o.disabled || (b.value = !b.value, b.value && Q(() => {
        F(), W();
      }));
    }, F = () => {
      if (!i.value) return;
      const n = i.value.getBoundingClientRect(), l = 300, H = window.innerHeight - n.bottom, te = n.top, oe = H < l && te > H;
      R.value = {
        position: "absolute",
        left: `${n.left + window.scrollX}px`,
        top: oe ? `${n.top + window.scrollY - l}px` : `${n.bottom + window.scrollY}px`,
        zIndex: 9999
      };
    }, W = () => {
      Q(() => {
        O(c.value, V.value, I.value), O(y.value, B.value, N.value), o.showSeconds && O(g.value, $.value, s.value);
      });
    }, O = (n, l, m) => {
      if (!n) return;
      const H = m.indexOf(l);
      if (H === -1) return;
      const te = 32, oe = n.clientHeight, ve = H * te - oe / 2 + te / 2;
      n.scrollTop = Math.max(0, ve);
    }, A = (n) => {
      V.value = n;
    }, K = (n) => {
      B.value = n;
    }, X = (n) => {
      $.value = n;
    }, G = () => {
      const n = /* @__PURE__ */ new Date();
      V.value = n.getHours(), B.value = n.getMinutes(), $.value = n.getSeconds(), W();
    }, a = () => {
      const n = z();
      e("update:modelValue", n), e("change", n), b.value = !1;
    }, f = () => {
      e("update:modelValue", null), e("change", null);
    }, x = (n) => {
      C.value = !0, e("focus", n);
    }, Y = (n) => {
      C.value = !1, e("blur", n);
    }, P = (n) => {
      var l;
      (l = i.value) != null && l.contains(n.target) || (b.value = !1);
    };
    return ie(() => o.modelValue, (n) => {
      t(n);
    }, { immediate: !0 }), re(() => {
      document.addEventListener("click", P), window.addEventListener("scroll", F), window.addEventListener("resize", F);
    }), de(() => {
      document.removeEventListener("click", P), window.removeEventListener("scroll", F), window.removeEventListener("resize", F);
    }), (n, l) => (v(), _("div", {
      class: "vn-time-picker",
      ref_key: "timePickerRef",
      ref: i
    }, [
      u("div", {
        class: S(p.value),
        onClick: L
      }, [
        u("input", {
          ref_key: "inputRef",
          ref: r,
          value: D.value,
          placeholder: n.placeholder,
          disabled: n.disabled,
          readonly: !0,
          class: "vn-time-picker__input",
          onFocus: x,
          onBlur: Y
        }, null, 40, ot),
        n.clearable && n.modelValue && !n.disabled ? (v(), _("div", st, [
          u("button", {
            type: "button",
            class: "vn-time-picker__clear",
            onClick: ue(f, ["stop"])
          }, " ✕ ")
        ])) : (v(), _("div", lt, l[0] || (l[0] = [
          u("span", { class: "vn-time-picker__icon" }, "🕐", -1)
        ])))
      ], 2),
      (v(), le(ce, { to: "body" }, [
        b.value ? (v(), _("div", {
          key: 0,
          class: "vn-time-picker__panel",
          style: ne(R.value)
        }, [
          u("div", ut, [
            u("div", it, [
              l[1] || (l[1] = u("div", { class: "vn-time-picker__column-header" }, "时", -1)),
              u("div", {
                class: "vn-time-picker__column-list",
                ref_key: "hourListRef",
                ref: c
              }, [
                (v(!0), _(Z, null, ee(I.value, (m) => (v(), _("div", {
                  key: m,
                  class: S(T("hour", m)),
                  onClick: (H) => A(m)
                }, M(String(m).padStart(2, "0")), 11, rt))), 128))
              ], 512)
            ]),
            u("div", dt, [
              l[2] || (l[2] = u("div", { class: "vn-time-picker__column-header" }, "分", -1)),
              u("div", {
                class: "vn-time-picker__column-list",
                ref_key: "minuteListRef",
                ref: y
              }, [
                (v(!0), _(Z, null, ee(N.value, (m) => (v(), _("div", {
                  key: m,
                  class: S(T("minute", m)),
                  onClick: (H) => K(m)
                }, M(String(m).padStart(2, "0")), 11, ct))), 128))
              ], 512)
            ]),
            n.showSeconds ? (v(), _("div", pt, [
              l[3] || (l[3] = u("div", { class: "vn-time-picker__column-header" }, "秒", -1)),
              u("div", {
                class: "vn-time-picker__column-list",
                ref_key: "secondListRef",
                ref: g
              }, [
                (v(!0), _(Z, null, ee(s.value, (m) => (v(), _("div", {
                  key: m,
                  class: S(T("second", m)),
                  onClick: (H) => X(m)
                }, M(String(m).padStart(2, "0")), 11, vt))), 128))
              ], 512)
            ])) : E("", !0)
          ]),
          u("div", { class: "vn-time-picker__footer" }, [
            u("button", {
              onClick: G,
              class: "vn-time-picker__now"
            }, "此刻"),
            u("button", {
              onClick: a,
              class: "vn-time-picker__confirm"
            }, "确定")
          ])
        ], 4)) : E("", !0)
      ]))
    ], 512));
  }
}), mt = /* @__PURE__ */ j(ft, [["__scopeId", "data-v-cf2b820a"]]), ht = [
  $e,
  ze,
  Te,
  Fe,
  Oe,
  je,
  nt,
  mt
], pe = (w) => {
  ht.forEach((h) => {
    const o = h.name || h.__name;
    o && w.component(o, h);
  });
}, kt = {
  install: pe
};
typeof window < "u" && window.Vue && pe(window.Vue);
export {
  Fe as NCheckbox,
  nt as NDatePicker,
  ze as NInput,
  Oe as NRadio,
  je as NRadioGroup,
  $e as NText,
  Te as NTextarea,
  mt as NTimePicker,
  kt as default
};
