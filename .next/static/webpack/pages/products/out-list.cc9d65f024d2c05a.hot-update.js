"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/out-list",{

/***/ "./pages/products/out-list.js":
/*!************************************!*\
  !*** ./pages/products/out-list.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _s = $RefreshSig$();\nfunction OutListPage(props) {\n    _s();\n    const [dataList, setDataList] = useState(props.featureListData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Out list page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\out-list.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: dataList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\out-list.js\",\n                                lineNumber: 12,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\out-list.js\",\n                                lineNumber: 13,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\out-list.js\",\n                        lineNumber: 11,\n                        columnNumber: 32\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\out-list.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\out-list.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_s(OutListPage, \"IXMs8tk3oA58YWnVef27F/v61N4=\");\n_c = OutListPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OutListPage);\nvar _c;\n$RefreshReg$(_c, \"OutListPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9vdXQtbGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLFNBQVNBLFlBQVlDLEtBQUs7O0lBQ3hCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHQyxTQUFTSCxNQUFNSSxlQUFlO0lBRTlELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEOzBCQUVHSixTQUFTTSxHQUFHLENBQUNDLENBQUFBLHFCQUFRLDhEQUFDQzs7MENBQ2xCLDhEQUFDQzswQ0FBSUYsS0FBS0csS0FBSzs7Ozs7OzBDQUNmLDhEQUFDQzswQ0FBR0osS0FBS0ssV0FBVzs7Ozs7Ozt1QkFGTUwsS0FBS00sRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVEvQztHQWhCU2Y7S0FBQUE7O0FBa0JULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL291dC1saXN0LmpzPzRkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRGZWF0dXJlTGlzdERhdGF9IGZyb20gJy4uLy4uL2hlbHBlci9hcGktdXRpbHMnXHJcblxyXG5mdW5jdGlvbiBPdXRMaXN0UGFnZShwcm9wcykge1xyXG4gIGNvbnN0IFtkYXRhTGlzdCwgc2V0RGF0YUxpc3RdID0gdXNlU3RhdGUocHJvcHMuZmVhdHVyZUxpc3REYXRhKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+T3V0IGxpc3QgcGFnZTwvaDI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZGF0YUxpc3QubWFwKGl0ZW0gPT4gPGxpIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2xpPilcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXRMaXN0UGFnZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBmZWF0dXJlTGlzdERhdGEgPSBhd2FpdCBnZXRGZWF0dXJlTGlzdERhdGEoKTtcclxuICBjb25zb2xlLmxvZyhmZWF0dXJlTGlzdERhdGEpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge2ZlYXR1cmVMaXN0RGF0YX1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiT3V0TGlzdFBhZ2UiLCJwcm9wcyIsImRhdGFMaXN0Iiwic2V0RGF0YUxpc3QiLCJ1c2VTdGF0ZSIsImZlYXR1cmVMaXN0RGF0YSIsImRpdiIsImgyIiwibWFwIiwiaXRlbSIsImxpIiwiaDQiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/out-list.js\n"));

/***/ })

});