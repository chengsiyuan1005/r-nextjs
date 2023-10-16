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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nfunction LastSalesPage(props) {\n    _s();\n    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api-mock/list-data\", fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"first\", isLoading);\n        if (data) {\n            console.log(\"data\", data, isLoading);\n            setSales(data);\n            console.log(\"sales\", sales);\n        }\n    }, [\n        data\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Failed to load.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    if (isLoading || !sales) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"last-sales\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: sales.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                        lineNumber: 37,\n                        columnNumber: 29\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"dwXFRU2/RGnVp36A2WQ8vgGuEWI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9sYXN0LXNhbGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ2pCO0FBRXpCLE1BQU1HLFVBQVU7cUNBQUlDO1FBQUFBOztXQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUFFO0FBRXBFLFNBQVNDLGNBQWNDLEtBQUs7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUE7SUFFbEMsTUFBTSxFQUFDWSxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFDLEdBQUdiLCtDQUFNQSxDQUNyQyx1QkFBdUJDO0lBR3pCSCxnREFBU0EsQ0FBQztRQUNSZ0IsUUFBUUMsR0FBRyxDQUFDLFNBQVNGO1FBR3JCLElBQUlGLE1BQU07WUFDUkcsUUFBUUMsR0FBRyxDQUFDLFFBQVFKLE1BQU1FO1lBQzFCSCxTQUFTQztZQUNURyxRQUFRQyxHQUFHLENBQUMsU0FBU047UUFFdkI7SUFDRixHQUFHO1FBQUNFO0tBQUs7SUFFVCxJQUFJQyxPQUFPO1FBQ1QscUJBQU8sOERBQUNJO3NCQUFHOzs7Ozs7SUFDYjtJQUNBLElBQUlILGFBQWEsQ0FBQ0osT0FBTztRQUN2QixxQkFBTyw4REFBQ087c0JBQUc7Ozs7OztJQUNiO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0Q7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0U7MEJBRUdULE1BQU1VLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQVEsOERBQUNDOzswQ0FDZiw4REFBQ0M7MENBQUlGLEtBQUtHLEtBQUs7Ozs7OzswQ0FDZiw4REFBQ0M7MENBQUdKLEtBQUtLLFdBQVc7Ozs7OzswQ0FDcEIsOERBQUNDO2dDQUFJQyxLQUFLUCxLQUFLUSxLQUFLO2dDQUFFQyxLQUFJOzs7Ozs7O3VCQUhIVCxLQUFLVSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBUzVDO0dBeENTdkI7O1FBRzBCUCwyQ0FBTUE7OztLQUhoQ087QUEwQ1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvbGFzdC1zYWxlcy5qcz85NGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcblxyXG5mdW5jdGlvbiBMYXN0U2FsZXNQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIGNvbnN0IHtkYXRhLCBlcnJvciwgaXNMb2FkaW5nfSA9IHVzZVNXUihcclxuICAgICcvYXBpLW1vY2svbGlzdC1kYXRhJywgZmV0Y2hlclxyXG4gIClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdmaXJzdCcsIGlzTG9hZGluZylcclxuXHJcbiAgXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEsIGlzTG9hZGluZylcclxuICAgICAgc2V0U2FsZXMoZGF0YSlcclxuICAgICAgY29uc29sZS5sb2coJ3NhbGVzJywgc2FsZXMpXHJcblxyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgyPkZhaWxlZCB0byBsb2FkLjwvaDI+XHJcbiAgfVxyXG4gIGlmIChpc0xvYWRpbmcgfHwgIXNhbGVzKSB7XHJcbiAgICByZXR1cm4gPGgyPkxvYWRpbmcuLi48L2gyPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5sYXN0LXNhbGVzPC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNhbGVzLm1hcChpdGVtID0+IDxsaSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxoND57aXRlbS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9saT4pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXN0U2FsZXNQYWdlOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNXUiIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkxhc3RTYWxlc1BhZ2UiLCJwcm9wcyIsInNhbGVzIiwic2V0U2FsZXMiLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJjb25zb2xlIiwibG9nIiwiaDIiLCJkaXYiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImg0IiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/last-sales.js\n"));

/***/ })

});