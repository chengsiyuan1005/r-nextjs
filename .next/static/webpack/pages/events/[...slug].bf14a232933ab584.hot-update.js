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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helper_api_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/api-utils */ \"./helper/api-utils.js\");\n\n\n\nfunction DateSelectPage(props) {\n    const { selectDate } = props;\n    if (selectDate.status) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: selectDate.error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n            lineNumber: 9,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Date select page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            selectDate.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, item.id, true, {\n                    fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n                    lineNumber: 18,\n                    columnNumber: 32\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\events\\\\[...slug].js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c = DateSelectPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateSelectPage);\nvar _c;\n$RefreshReg$(_c, \"DateSelectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFFaEUsU0FBU0UsZUFBZUMsS0FBSztJQUUzQixNQUFNLEVBQUNDLFVBQVUsRUFBQyxHQUFHRDtJQUVyQixJQUFJQyxXQUFXQyxNQUFNLEVBQUU7UUFDckIscUJBQU8sOERBQUNDO3NCQUNOLDRFQUFDQzswQkFBSUgsV0FBV0ksS0FBSzs7Ozs7Ozs7Ozs7SUFFekI7SUFFQSxxQkFDRSw4REFBQ0Y7OzBCQUNDLDhEQUFDRzswQkFBRzs7Ozs7O1lBRUZMLFdBQVdNLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQVEsOERBQUNDOztzQ0FDcEIsOERBQUNDO3NDQUFJRixLQUFLRyxLQUFLOzs7Ozs7c0NBQ2YsOERBQUNDO3NDQUFHSixLQUFLSyxXQUFXOzs7Ozs7O21CQUZRTCxLQUFLTSxFQUFFOzs7Ozs7Ozs7OztBQU8vQztLQXJCU2Y7O0FBMkNULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2V2ZW50cy9bLi4uc2x1Z10uanM/NTI1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7Z2V0RmlsdGVyRGF0ZSwgZ2V0QWxsRGF0ZX0gZnJvbSAnLi4vLi4vaGVscGVyL2FwaS11dGlscydcclxuXHJcbmZ1bmN0aW9uIERhdGVTZWxlY3RQYWdlKHByb3BzKSB7XHJcblxyXG4gIGNvbnN0IHtzZWxlY3REYXRlfSA9IHByb3BzXHJcblxyXG4gIGlmIChzZWxlY3REYXRlLnN0YXR1cykge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxoMz57c2VsZWN0RGF0ZS5lcnJvcn08L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+RGF0ZSBzZWxlY3QgcGFnZTwvaDI+XHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3REYXRlLm1hcChpdGVtID0+IDxsaSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICA8aDQ+e2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9saT4pXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy8g5a+55LqO5pWw5o2u6YeP6L6D5aSa55qE5pWw5o2u77yMIOeUqCBnZXRTZXJ2ZXJTaWRlUHJvcHMg5LuO5pyN5Yqh5Zmo56uv6I635Y+WIO+8iOeUqOeahOaXtuWAmeWGjeiOt+WPlu+8iVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7cGFyYW1zfSA9IGNvbnRleHRcclxuXHJcbiAgY29uc3Qgc2x1ZyA9IHBhcmFtcy5zbHVnXHJcbiAgY29uc3QgeWVhciA9IHNsdWdbMF1cclxuICBjb25zdCBtb250aCA9IHNsdWdbMV1cclxuICBjb25zb2xlLmxvZyggeWVhciwgbW9udGgpXHJcblxyXG4gIGNvbnN0IHNlbGVjdERhdGUgPSBhd2FpdCBnZXRGaWx0ZXJEYXRlKHllYXIsIG1vbnRoKVxyXG4gIGNvbnNvbGUubG9nKCdmaXJzdCcsIHNlbGVjdERhdGUpXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7c2VsZWN0RGF0ZX1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlU2VsZWN0UGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImdldEFsbERhdGUiLCJEYXRlU2VsZWN0UGFnZSIsInByb3BzIiwic2VsZWN0RGF0ZSIsInN0YXR1cyIsImRpdiIsImgzIiwiZXJyb3IiLCJoMiIsIm1hcCIsIml0ZW0iLCJsaSIsImg0IiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/events/[...slug].js\n"));

/***/ })

});