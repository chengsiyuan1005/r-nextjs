"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].js":
/*!***********************************!*\
  !*** ./pages/events/[...slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helper_api_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/api-utils */ \"./helper/api-utils.js\");\n\n\n\nfunction DateSelectPage(props) {\n    const { selectDate } = props;\n    if (selectDate.status) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: selectDate.error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Date select page\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = DateSelectPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateSelectPage);\nvar _c;\n$RefreshReg$(_c, \"DateSelectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFFaEUsU0FBU0csZUFBZUMsS0FBSztJQUUzQixNQUFNLEVBQUNDLFVBQVUsRUFBQyxHQUFHRDtJQUVyQixJQUFJQyxXQUFXQyxNQUFNLEVBQUU7UUFDckIscUJBQU8sOERBQUNDO3NCQUNOLDRFQUFDQzswQkFBSUgsV0FBV0ksS0FBSzs7Ozs7Ozs7Ozs7SUFFekI7SUFFQSxxQkFDRSw4REFBQ0Y7a0JBQ0MsNEVBQUNHO3NCQUFHOzs7Ozs7Ozs7OztBQUdWO0tBZlNQOztBQXFDVCwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzPzUyNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge2dldEZpbHRlckRhdGUsIGdldEFsbERhdGV9IGZyb20gJy4uLy4uL2hlbHBlci9hcGktdXRpbHMnXHJcblxyXG5mdW5jdGlvbiBEYXRlU2VsZWN0UGFnZShwcm9wcykge1xyXG5cclxuICBjb25zdCB7c2VsZWN0RGF0ZX0gPSBwcm9wc1xyXG5cclxuICBpZiAoc2VsZWN0RGF0ZS5zdGF0dXMpIHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICA8aDM+e3NlbGVjdERhdGUuZXJyb3J9PC9oMz5cclxuICAgIDwvZGl2PlxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkRhdGUgc2VsZWN0IHBhZ2U8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vLyDlr7nkuo7mlbDmja7ph4/ovoPlpJrnmoTmlbDmja7vvIwg55SoIGdldFNlcnZlclNpZGVQcm9wcyDku47mnI3liqHlmajnq6/ojrflj5Yg77yI55So55qE5pe25YCZ5YaN6I635Y+W77yJXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHtwYXJhbXN9ID0gY29udGV4dFxyXG5cclxuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWdcclxuICBjb25zdCB5ZWFyID0gc2x1Z1swXVxyXG4gIGNvbnN0IG1vbnRoID0gc2x1Z1sxXVxyXG4gIGNvbnNvbGUubG9nKCB5ZWFyLCBtb250aClcclxuXHJcbiAgLy8gc2VsZWN0RGF0ZSA9IGF3YWl0IGdldEZpbHRlckRhdGUoKVxyXG4gIC8vIGNvbnNvbGUubG9nKCdmaXJzdCcsIHNlbGVjdERhdGUpXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7c2VsZWN0RGF0ZX1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlU2VsZWN0UGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImdldEZpbHRlckRhdGUiLCJnZXRBbGxEYXRlIiwiRGF0ZVNlbGVjdFBhZ2UiLCJwcm9wcyIsInNlbGVjdERhdGUiLCJzdGF0dXMiLCJkaXYiLCJoMyIsImVycm9yIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});