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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction LastSalesPage(props) {\n    _s();\n    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api-mock/list-data\", fetch);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://mock.apifox.cn/m1/3421431-0-default/list-data\").then((response)=>response.json()).then((data)=>{\n            console.log(\"data\", data);\n        });\n        if (data) {\n            const transformedSales = [];\n            console.log(\"data\", data);\n            data.forEach((item)=>{\n                transformedSales.push(item);\n            });\n            console.log(transformedSales);\n        }\n    }, [\n        data\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Failed to load.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 32,\n            columnNumber: 12\n        }, this);\n    } else if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"last-sales\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"dwXFRU2/RGnVp36A2WQ8vgGuEWI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9sYXN0LXNhbGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ2pCO0FBRXpCLFNBQVNHLGNBQWNDLEtBQUs7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUE7SUFFbEMsTUFBTSxFQUFDTSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFDLEdBQUdQLCtDQUFNQSxDQUNyQyx1QkFBdUJRO0lBR3pCVixnREFBU0EsQ0FBQztRQUNSVSxNQUFNLHlEQUNMQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDSixDQUFBQTtZQUNKTyxRQUFRQyxHQUFHLENBQUMsUUFBUVI7UUFDdEI7UUFJQSxJQUFJQSxNQUFNO1lBQ1IsTUFBTVMsbUJBQW1CLEVBQUU7WUFDM0JGLFFBQVFDLEdBQUcsQ0FBQyxRQUFRUjtZQUNwQkEsS0FBS1UsT0FBTyxDQUFDQyxDQUFBQTtnQkFDWEYsaUJBQWlCRyxJQUFJLENBQUNEO1lBQ3hCO1lBQ0FKLFFBQVFDLEdBQUcsQ0FBQ0M7UUFFZDtJQUNGLEdBQUc7UUFBQ1Q7S0FBSztJQUVULElBQUlDLE9BQU87UUFDVCxxQkFBTyw4REFBQ1k7c0JBQUc7Ozs7OztJQUNiLE9BQU8sSUFBSSxDQUFDYixNQUFNO1FBQ2hCLHFCQUFPLDhEQUFDYTtzQkFBRzs7Ozs7O0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNEO3NCQUFHOzs7Ozs7Ozs7OztBQU1WO0dBekNTakI7O1FBRzBCRCwyQ0FBTUE7OztLQUhoQ0M7QUEyQ1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvbGFzdC1zYWxlcy5qcz85NGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgaXNMb2FkaW5nfSA9IHVzZVNXUihcclxuICAgICcvYXBpLW1vY2svbGlzdC1kYXRhJywgZmV0Y2ggIFxyXG4gIClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKCdodHRwczovL21vY2suYXBpZm94LmNuL20xLzM0MjE0MzEtMC1kZWZhdWx0L2xpc3QtZGF0YScpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXHJcbiAgICB9KVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW11cclxuICAgICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKVxyXG4gICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKGl0ZW0pXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkU2FsZXMpXHJcblxyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgyPkZhaWxlZCB0byBsb2FkLjwvaDI+XHJcbiAgfSBlbHNlIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIDxoMj5Mb2FkaW5nLi4uPC9oMj5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+bGFzdC1zYWxlczwvaDI+XHJcbiAgICAgIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInNhbGVzIiwic2V0U2FsZXMiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidHJhbnNmb3JtZWRTYWxlcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImgyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/last-sales.js\n"));

/***/ })

});