"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events",{

/***/ "./components/ui/button.js":
/*!*********************************!*\
  !*** ./components/ui/button.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.module.css */ \"./components/ui/button.module.css\");\n/* harmony import */ var _button_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Button(props) {\n    console.log(\"btn\", props);\n    if (props.link) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: props.link,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                href: props.link,\n                children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\components\\\\ui\\\\button.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\components\\\\ui\\\\button.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this);\n    } else {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: (_button_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn),\n                href: props.link,\n                children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\components\\\\ui\\\\button.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\components\\\\ui\\\\button.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, this);\n    }\n}\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL2J1dHRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUVhO0FBR3pDLFNBQVNFLE9BQVFDLEtBQUs7SUFDcEJDLFFBQVFDLEdBQUcsQ0FBQyxPQUFPRjtJQUNuQixJQUFJQSxNQUFNRyxJQUFJLEVBQUU7UUFDZCxxQkFDRSw4REFBQ04sa0RBQUlBO1lBQUNPLE1BQU1KLE1BQU1HLElBQUk7c0JBQ3BCLDRFQUFDRTtnQkFBRUMsV0FBV1IsK0RBQVc7Z0JBQUVNLE1BQU1KLE1BQU1HLElBQUk7MEJBQUdILE1BQU1RLFFBQVE7Ozs7Ozs7Ozs7O0lBR2xFLE9BQU87c0JBQ0wsOERBQUNDO3NCQUNDLDRFQUFDSjtnQkFBRUMsV0FBV1IsK0RBQVc7Z0JBQUVNLE1BQU1KLE1BQU1HLElBQUk7MEJBQUdILE1BQU1RLFFBQVE7Ozs7Ozs7Ozs7O0lBRWhFO0FBRUY7S0FkU1Q7QUFnQlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9idXR0b24uanM/OTg3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbiAocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZygnYnRuJywgcHJvcHMpXHJcbiAgaWYgKHByb3BzLmxpbmspIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmxpbmt9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59IGhyZWY9e3Byb3BzLmxpbmt9Pntwcm9wcy5jaGlsZHJlbn08L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgPGRpdj5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn0gaHJlZj17cHJvcHMubGlua30+e3Byb3BzLmNoaWxkcmVufTwvYT5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXSwibmFtZXMiOlsiTGluayIsImNsYXNzZXMiLCJCdXR0b24iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwiaHJlZiIsImEiLCJjbGFzc05hbWUiLCJidG4iLCJjaGlsZHJlbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/button.js\n"));

/***/ })

});