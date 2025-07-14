'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".stacktech-button{align-items:center;border:none;border-radius:.375rem;cursor:pointer;display:flex;font-weight:500;gap:6px;justify-content:center;transition:all .2s ease-in-out}.stacktech-button:disabled{cursor:not-allowed}.stacktech-button--primary{background-color:#2284f7;color:#f3f7fd}.stacktech-button--primary:hover:not(:disabled){background-color:#5fa8f7}.stacktech-button--primary:active:not(:disabled){background-color:#1158bf}.stacktech-button--primary.stacktech-button--disabled{background-color:#f1f5f9;color:#a0aec0}.stacktech-button--secondary{background-color:#ffb648;color:#f3f7fd}.stacktech-button--secondary:hover:not(:disabled){background-color:#ffefc2}.stacktech-button--secondary:active:not(:disabled){background-color:#ffb648}.stacktech-button--secondary.stacktech-button--disabled{background-color:#f1f5f9;color:#a0aec0}.stacktech-button--outline{background-color:transparent;border:1px solid #2284f7;color:#2284f7}.stacktech-button--outline:hover:not(:disabled){border-color:#5fa8f7;color:#5fa8f7}.stacktech-button--outline:active:not(:disabled){background-color:#d5e7fc;border-color:#97c6f7;color:#97c6f7}.stacktech-button--outline.stacktech-button--disabled{background-color:#f8fafc;border-color:#cbd5e1;color:#a0aec0}.stacktech-button--small{padding:8px 16px}.stacktech-button--regular{padding:12px 18px}.stacktech-button--large{padding:14px 24px}.stacktech-button__left-icon,.stacktech-button__right-icon{align-items:center;display:flex;flex-shrink:0;justify-content:center}";
styleInject(css_248z$2);

var css_248z$1 = ".stacktech-typography-text--h1{font-family:Poppins,sans-serif;font-size:26px;font-weight:700;letter-spacing:-.9px;line-height:1.23}@media (min-width:1024px){.stacktech-typography-text--h1{font-size:40px;font-weight:700;letter-spacing:-1.2px;line-height:1.4}}.stacktech-typography-text--h2{font-family:Poppins,sans-serif;font-size:24px;font-weight:700;letter-spacing:-.8px;line-height:1.3333}@media (min-width:1024px){.stacktech-typography-text--h2{font-size:32px;font-weight:700;letter-spacing:-1px;line-height:1.3142}}.stacktech-typography-text--h3{font-family:Poppins,sans-serif;font-size:20px;font-weight:700;letter-spacing:-.7px;line-height:1.4}@media (min-width:1024px){.stacktech-typography-text--h3{font-size:28px;font-weight:700;letter-spacing:-.8px;line-height:1.3846}}.stacktech-typography-text--h4{font-family:Poppins,sans-serif;font-size:18px;font-weight:700;letter-spacing:-.6px;line-height:1.5555}@media (min-width:1024px){.stacktech-typography-text--h4{font-size:24px;font-weight:700;letter-spacing:-.6px;line-height:1.4545}}.stacktech-typography-text--h5{font-family:Poppins,sans-serif;font-size:16px;font-weight:700;letter-spacing:-.2px;line-height:1.625}@media (min-width:1024px){.stacktech-typography-text--h5{font-size:20px;font-weight:700;letter-spacing:-.2px;line-height:1.4}}.stacktech-typography-text--h6{font-family:Poppins,sans-serif;font-size:14px;font-weight:700;letter-spacing:0;line-height:1.7142}@media (min-width:1024px){.stacktech-typography-text--h6{font-size:16px;font-weight:700;letter-spacing:0;line-height:1.625}}.stacktech-typography-text--s1{font-family:Roboto,sans-serif;font-size:18px;font-weight:600;letter-spacing:-.6px;line-height:1.5555}@media (min-width:1024px){.stacktech-typography-text--s1{font-size:22px;font-weight:600;letter-spacing:-.6px;line-height:1.4545}}.stacktech-typography-text--s2{font-family:Roboto,sans-serif;font-size:16px;font-weight:600;letter-spacing:-.2px;line-height:1.625}@media (min-width:1024px){.stacktech-typography-text--s2{font-size:18px;font-weight:600;letter-spacing:-.2px;line-height:1.5555}}.stacktech-typography-text--s3{font-family:Roboto,sans-serif;font-size:14px;font-weight:600;letter-spacing:0;line-height:1.7142}@media (min-width:1024px){.stacktech-typography-text--s3{font-size:16px;font-weight:600;letter-spacing:0;line-height:1.625}}.stacktech-typography-text--s4{font-family:Roboto,sans-serif;font-size:12px;font-weight:600;letter-spacing:0;line-height:1.5}@media (min-width:1024px){.stacktech-typography-text--s4{font-size:14px;font-weight:600;letter-spacing:0;line-height:1.7142}}.stacktech-typography-text--s5{font-family:Roboto,sans-serif;font-size:10px;font-weight:600;letter-spacing:0;line-height:1.8}@media (min-width:1024px){.stacktech-typography-text--s5{font-size:12px;font-weight:600;letter-spacing:0;line-height:1.5}}.stacktech-typography-text--p1{font-family:Roboto,sans-serif;font-size:18px;font-weight:400;letter-spacing:0;line-height:1.5555}@media (min-width:1024px){.stacktech-typography-text--p1{font-size:18px;font-weight:400;letter-spacing:-.2px;line-height:1.5555}}.stacktech-typography-text--p2{font-family:Roboto,sans-serif;font-size:16px;font-weight:400;letter-spacing:0;line-height:1.625}@media (min-width:1024px){.stacktech-typography-text--p2{font-size:16px;font-weight:400;letter-spacing:0;line-height:1.625}}.stacktech-typography-text--p3{font-family:Roboto,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:1.7142}@media (min-width:1024px){.stacktech-typography-text--p3{font-size:14px;font-weight:400;letter-spacing:0;line-height:1.7142}}.stacktech-typography-text--c1{font-family:Roboto,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:1.7142;text-transform:uppercase}@media (min-width:1024px){.stacktech-typography-text--c1{font-size:14px;font-weight:400;letter-spacing:0;line-height:1.625}}.stacktech-typography-text--c2{font-family:Roboto,sans-serif;font-size:12px;font-weight:400;letter-spacing:0;line-height:1.5;text-transform:uppercase}@media (min-width:1024px){.stacktech-typography-text--c2{font-size:14px;font-weight:400;letter-spacing:0;line-height:1.7142}}.stacktech-typography-text--description{font-family:Roboto,sans-serif;font-size:12px;font-weight:400;letter-spacing:0;line-height:1.5}@media (min-width:1024px){.stacktech-typography-text--description{font-size:12px;font-weight:400;letter-spacing:0;line-height:1.5}}.stacktech-typography-font--bold{font-style:normal;font-weight:700}.stacktech-typography-font--semibold{font-style:normal;font-weight:600}.stacktech-typography-font--regular{font-style:normal;font-weight:400}";
styleInject(css_248z$1);

function Typo(_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'p1' : _b, children = _a.children, type = _a.type, className = _a.className, props = __rest(_a, ["variant", "children", "type", "className"]);
    return jsxRuntime.jsx("div", __assign({ className: "stacktech-typography-text--".concat(variant, " ").concat(type !== undefined ? "stacktech-typography-font--".concat(type) : '', " ").concat(className !== null && className !== void 0 ? className : '') }, props, { children: children }));
}

function Button(_a) {
    var _b;
    var children = _a.children, onClick = _a.onClick, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'regular' : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, props = __rest(_a, ["children", "onClick", "variant", "size", "disabled", "leftIcon", "rightIcon"]);
    var label = react.useMemo(function () {
        switch (size) {
            case 'small':
                return jsxRuntime.jsx(Typo, { className: "stacktech-button__label", variant: "s4", children: children });
            case 'regular':
                return jsxRuntime.jsx(Typo, { className: "stacktech-button__label", variant: "s3", children: children });
            case 'large':
                return jsxRuntime.jsx(Typo, { className: "stacktech-button__label", variant: "s2", children: children });
        }
    }, [children, size]);
    return (jsxRuntime.jsxs("button", __assign({ className: "stacktech-button stacktech-button--".concat(variant, " stacktech-button--").concat(size, " ").concat(disabled ? 'stacktech-button--disabled' : '', " ").concat((_b = props.className) !== null && _b !== void 0 ? _b : ''), onClick: onClick, disabled: disabled }, props, { children: [leftIcon && jsxRuntime.jsx("div", { className: "stacktech-button__left-icon", children: leftIcon }), label, rightIcon && jsxRuntime.jsx("div", { className: "stacktech-button__right-icon", children: rightIcon })] })));
}

var css_248z = ".stacktech-dropdown{--color-value-text:#2d3748;--color-menu-background:#fff;--color-border-menu:#cbd5e0;align-items:flex-start;display:flex;flex-direction:column;gap:4px;height:fit-content;width:fit-content}.stacktech-dropdown__component--disabled{--color-value-text:#cbd5e0;--color-menu-background:#edf2f7;--color-border-menu:#edf2f7;pointer-events:none}.stacktech-dropdown__label{color:#2d3748}.stacktech-dropdown__menu{align-items:flex-start;display:flex;flex-direction:column;gap:8px;position:relative;width:100%}.stacktech-dropdown__menu__trigger{align-items:center;align-self:stretch;background:var(--color-menu-background);border:1px solid var(--color-border-menu);border-radius:4px;cursor:pointer;display:flex;flex-direction:row;gap:8px;justify-content:space-between;padding:10px 12px;width:100%}.stacktech-dropdown__menu__trigger--open,.stacktech-dropdown__menu__trigger:hover{background:#edf2f7;border:1px solid #edf2f7}.stacktech-dropdown__menu__trigger__value{color:var(--color-value-text)}.stacktech-dropdown__menu__trigger__chevron{color:var(--color-value-text);transition:transform .2s ease-in-out}.stacktech-dropdown__menu__trigger__chevron--open{transform:rotate(180deg)}.stacktech-dropdown__menu__list{align-items:flex-start;align-self:stretch;background:#fff;border:1px solid #cbd5e0;border-radius:4px;display:flex;flex-direction:column;gap:8px;left:0;max-height:200px;opacity:0;overflow-y:auto;padding:0;position:absolute;transform:translateY(-10px);visibility:hidden;width:100%;z-index:1000}.stacktech-dropdown__menu__list,.stacktech-dropdown__menu__list--open{transition:opacity .2s ease-in-out,visibility .2s ease-in-out,transform .2s ease-in-out}.stacktech-dropdown__menu__list--open{opacity:1;transform:translateY(0);visibility:visible}.stacktech-dropdown__menu__list--top{bottom:100%;top:auto;transform:translateY(10px)}.stacktech-dropdown__menu__list--bottom{top:100%;transform:translateY(-10px)}.stacktech-dropdown__menu__list__option{align-items:flex-start;align-self:stretch;color:#2d3748;cursor:pointer;display:flex;flex-direction:row;padding:12px}.stacktech-dropdown__menu__list__option:hover{background:#edf2f7}";
styleInject(css_248z);

function Dropdown(_a) {
    var label = _a.label, options = _a.options, onChange = _a.onChange, value = _a.value, _b = _a.disabled, disabled = _b === void 0 ? false : _b, placeholder = _a.placeholder, className = _a.className, props = __rest(_a, ["label", "options", "onChange", "value", "disabled", "placeholder", "className"]);
    var _c = react.useState(false), open = _c[0], setOpen = _c[1];
    var _d = react.useState("bottom"), listPosition = _d[0], setListPosition = _d[1];
    var dropdownRef = react.useRef(null);
    var triggerRef = react.useRef(null);
    var listRef = react.useRef(null);
    // Close dropdown on click outside
    react.useEffect(function () {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [open]);
    // Detect available space and set list position
    react.useEffect(function () {
        if (open && triggerRef.current && listRef.current) {
            var triggerRect = triggerRef.current.getBoundingClientRect();
            var listRect = listRef.current.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            var spaceBelow = windowHeight - triggerRect.bottom;
            var spaceAbove = triggerRect.top;
            var spaceNeeded = listRect.height;
            if (spaceBelow < spaceNeeded && spaceAbove > spaceNeeded) {
                setListPosition("top");
            }
            else {
                setListPosition("bottom");
            }
        }
    }, [open]);
    var handleSelect = function (option) {
        onChange(option);
        setOpen(false);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "stacktech-dropdown stacktech-dropdown__component ".concat(disabled ? "stacktech-dropdown__component--disabled" : "", " ").concat(className !== null && className !== void 0 ? className : ""), ref: dropdownRef }, props, { children: [label && (jsxRuntime.jsx("label", { className: "stacktech-dropdown__label", htmlFor: props.id, children: jsxRuntime.jsx(Typo, { variant: "p3", children: label }) })), jsxRuntime.jsxs("div", { className: "stacktech-dropdown__menu", children: [jsxRuntime.jsxs("button", { type: "button", className: "stacktech-dropdown__menu__trigger ".concat(open ? "stacktech-dropdown__menu__trigger--open" : ""), onClick: function () { return !disabled && setOpen(function (prev) { return !prev; }); }, disabled: disabled, ref: triggerRef, "aria-expanded": open, "aria-haspopup": "listbox", id: props.id, children: [jsxRuntime.jsx(Typo, { variant: "p3", className: "stacktech-dropdown__menu__trigger__value", children: value.label || placeholder }), jsxRuntime.jsx("svg", { className: "stacktech-dropdown__menu__trigger__chevron ".concat(open ? "stacktech-dropdown__menu__trigger__chevron--open" : ""), xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: jsxRuntime.jsx("path", { d: "M13.2802 6L8.93355 10.3467C8.42021 10.86 7.58022 10.86 7.06688 10.3467L2.72021 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })] }), !disabled && (jsxRuntime.jsx("ul", { className: "stacktech-dropdown__menu__list ".concat(open ? "stacktech-dropdown__menu__list--open" : "", " stacktech-dropdown__menu__list--").concat(listPosition), ref: listRef, role: "listbox", "aria-activedescendant": value.value, children: options.map(function (option) { return (jsxRuntime.jsx("li", { className: "stacktech-dropdown__menu__list__option ".concat(option.value === value.value
                                ? "stacktech-dropdown__menu__list__option--selected"
                                : ""), onClick: function () { return handleSelect(option); }, role: "option", "aria-selected": option.value === value.value, id: option.value, children: jsxRuntime.jsx(Typo, { variant: "p3", children: option.label }) }, option.value)); }) }))] })] })));
}

exports.Button = Button;
exports.Dropdown = Dropdown;
exports.Typo = Typo;
