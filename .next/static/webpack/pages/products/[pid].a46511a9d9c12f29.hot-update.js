"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/[pid]",{

/***/ "./pages/products/[pid].js":
/*!*********************************!*\
  !*** ./pages/products/[pid].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PidPage(props) {\n    const { loadProduct } = props;\n    // 针对 fallback === true 情况下 数据还未加载完\n    if (!loadProduct) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\[pid].js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: loadProduct.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\[pid].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: loadProduct.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\[pid].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\[pid].js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = PidPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PidPage);\nvar _c;\n$RefreshReg$(_c, \"PidPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcGlkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFJakMsU0FBU0MsUUFBU0MsS0FBSztJQUVyQixNQUFNLEVBQUNDLFdBQVcsRUFBQyxHQUFHRDtJQUV0QixtQ0FBbUM7SUFDbkMsSUFBSSxDQUFDQyxhQUFhO1FBQ2hCLHFCQUNFLDhEQUFDQztzQkFBRzs7Ozs7O0lBRVI7SUFFQSxxQkFDRSw4REFBQ0osMkNBQVFBOzswQkFDUCw4REFBQ0k7MEJBQUlELFlBQVlFLEtBQUs7Ozs7OzswQkFDdEIsOERBQUNDOzBCQUFHSCxZQUFZSSxPQUFPOzs7Ozs7Ozs7Ozs7QUFHN0I7S0FqQlNOOztBQWtEVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9bcGlkXS5qcz9kOGQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xyXG5cclxuZnVuY3Rpb24gUGlkUGFnZSAocHJvcHMpIHtcclxuXHJcbiAgY29uc3Qge2xvYWRQcm9kdWN0fSA9IHByb3BzXHJcblxyXG4gIC8vIOmSiOWvuSBmYWxsYmFjayA9PT0gdHJ1ZSDmg4XlhrXkuIsg5pWw5o2u6L+Y5pyq5Yqg6L295a6MXHJcbiAgaWYgKCFsb2FkUHJvZHVjdCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGgyPmxvYWRpbmcuLi48L2gyPlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8aDI+e2xvYWRQcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgIDxwPntsb2FkUHJvZHVjdC5jb250ZW50fTwvcD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHBhcmFtcyB9ID0gY29udGV4dDtcclxuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJhbXMucGlkXHJcblxyXG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ3Byb2R1Y3QnLCAnZGVtby5qc29uJylcclxuICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoKVxyXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKVxyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0cy5maW5kKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCA9PT0gcHJvZHVjdElkKVxyXG5cclxuICBjb25zb2xlLmxvZygncHJvZHVjdCcsIHByb2R1Y3QpXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxvYWRQcm9kdWN0OiBwcm9kdWN0XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBbXHJcbiAgICAgIHtwYXJhbXM6IHtwaWQ6ICdwMSd9fSxcclxuICAgICBcclxuICAgIF0sXHJcbiAgICAvLyDlpoLmnpzorr7nva5mYWxsYmFjazogdHJ1ZSwg5Y2z5L2/5pWw5o2u5rKh5pyJ6aKE5YWI5L+d5a2Y5Zyo5rWP6KeI5ZmoLCDkuZ/kvJrliqjmgIHor7fmsYLmnI3liqHlmajov5vooYzliqDovb1cclxuICAgIC8vIOWmguaenOiuvue9rmZhbGxiYWNrOiAnYmxvY2tpbmcnLCDkvJrnrYnliLDmlbDmja7liqDovb3lrozlho1yZW5kZXLpobXpnaJcclxuICAgIGZhbGxiYWNrOiB0cnVlLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpZFBhZ2U7Il0sIm5hbWVzIjpbIkZyYWdtZW50IiwiUGlkUGFnZSIsInByb3BzIiwibG9hZFByb2R1Y3QiLCJoMiIsInRpdGxlIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/[pid].js\n"));

/***/ })

});