"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products/last-sales",{

/***/ "./pages/products/last-sales.js":
/*!**************************************!*\
  !*** ./pages/products/last-sales.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LastSalesPage(props) {\n    _s();\n    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api-mock/list-data\", fetch);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // // fetch('https://api.jisuapi.com/xiaohua/all?pagenum=1&pagesize=20&sort=addtime&appkey=96bc7fa736341beb')\n        // // fetch('https://mock.apifox.cn/m1/3421431-0-default/list-data')\n        // fetch('/api-mock/list-data')\n        // .then((response) => response.json())\n        // .then(data => {\n        //   console.log('data', data)\n        // })\n        if (data) {\n            const transformedSales = [];\n            console.log(\"data\", data);\n        }\n    }, []);\n    // if (error) {\n    //   return <h2>Failed to load.</h2>\n    // } else if (!data) {\n    //   return <h2>Loading...</h2>\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"last-sales\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"c+X+bUeHHb7DD9DeEt3gLkugrDk=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9sYXN0LXNhbGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ2pCO0FBRXpCLFNBQVNHLGNBQWNDLEtBQUs7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUE7SUFFbEMsTUFBTSxFQUFDTSxJQUFJLEVBQUVDLEtBQUssRUFBQyxHQUFHTiwrQ0FBTUEsQ0FDMUIsdUJBQXVCTztJQUd6QlQsZ0RBQVNBLENBQUM7UUFDUiw2R0FBNkc7UUFDN0csb0VBQW9FO1FBQ3BFLCtCQUErQjtRQUMvQix1Q0FBdUM7UUFDdkMsa0JBQWtCO1FBQ2xCLDhCQUE4QjtRQUM5QixLQUFLO1FBRUwsSUFBSU8sTUFBTTtZQUNSLE1BQU1HLG1CQUFtQixFQUFFO1lBQzNCQyxRQUFRQyxHQUFHLENBQUMsUUFBUUw7UUFFdEI7SUFDRixHQUFHLEVBQUU7SUFFTCxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsSUFBSTtJQUVKLHFCQUNFLDhEQUFDTTtrQkFDQyw0RUFBQ0M7c0JBQUc7Ozs7Ozs7Ozs7O0FBR1Y7R0FsQ1NYOztRQUdlRCwyQ0FBTUE7OztLQUhyQkM7QUFvQ1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvbGFzdC1zYWxlcy5qcz85NGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoXHJcbiAgICAnL2FwaS1tb2NrL2xpc3QtZGF0YScsIGZldGNoICBcclxuICApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAvLyBmZXRjaCgnaHR0cHM6Ly9hcGkuamlzdWFwaS5jb20veGlhb2h1YS9hbGw/cGFnZW51bT0xJnBhZ2VzaXplPTIwJnNvcnQ9YWRkdGltZSZhcHBrZXk9OTZiYzdmYTczNjM0MWJlYicpXHJcbiAgICAvLyAvLyBmZXRjaCgnaHR0cHM6Ly9tb2NrLmFwaWZveC5jbi9tMS8zNDIxNDMxLTAtZGVmYXVsdC9saXN0LWRhdGEnKVxyXG4gICAgLy8gZmV0Y2goJy9hcGktbW9jay9saXN0LWRhdGEnKVxyXG4gICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAvLyAudGhlbihkYXRhID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxyXG4gICAgLy8gfSlcclxuICAgIFxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdXHJcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcclxuXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIGlmIChlcnJvcikge1xyXG4gIC8vICAgcmV0dXJuIDxoMj5GYWlsZWQgdG8gbG9hZC48L2gyPlxyXG4gIC8vIH0gZWxzZSBpZiAoIWRhdGEpIHtcclxuICAvLyAgIHJldHVybiA8aDI+TG9hZGluZy4uLjwvaDI+XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPmxhc3Qtc2FsZXM8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInNhbGVzIiwic2V0U2FsZXMiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaCIsInRyYW5zZm9ybWVkU2FsZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/last-sales.js\n"));

/***/ })

});