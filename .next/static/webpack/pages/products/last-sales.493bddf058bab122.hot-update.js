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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst fetcher = function() {\n    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n        args[_key] = arguments[_key];\n    }\n    return fetch(...args).then((res)=>res.json());\n};\nfunction LastSalesPage(props) {\n    _s();\n    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.sales);\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api-mock/list-data\", fetcher);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            setSales(data);\n        }\n    }, [\n        data\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Failed to load.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, this);\n    }\n    // if (isLoading || !sales) {\n    //   return <h2>Loading...</h2>\n    // }\n    if (isLoading && !sales) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"last-sales\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: sales.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                        lineNumber: 35,\n                        columnNumber: 29\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\droop\\\\Desktop\\\\rn\\\\nextjs\\\\pages\\\\products\\\\last-sales.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(LastSalesPage, \"R6IUR6aSl+E4QEid6iQPT2gKD2Q=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = LastSalesPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);\nvar _c;\n$RefreshReg$(_c, \"LastSalesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9sYXN0LXNhbGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2pCO0FBRXpCLE1BQU1HLFVBQVU7cUNBQUlDO1FBQUFBOztXQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUFFO0FBRXBFLFNBQVNDLGNBQWNDLEtBQUs7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQ1MsTUFBTUMsS0FBSztJQUU5QyxNQUFNLEVBQUNFLElBQUksRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUMsR0FBR2IsK0NBQU1BLENBQ3JDLHVCQUF1QkM7SUFHekJILGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWEsTUFBTTtZQUNSRCxTQUFTQztRQUNYO0lBQ0YsR0FBRztRQUFDQTtLQUFLO0lBRVQsSUFBSUMsT0FBTztRQUNULHFCQUFPLDhEQUFDRTtzQkFBRzs7Ozs7O0lBQ2I7SUFDQSw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLElBQUk7SUFFSixJQUFJRCxhQUFhLENBQUNKLE9BQU87UUFDdkIscUJBQU8sOERBQUNLO3NCQUFHOzs7Ozs7SUFDYjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNEOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNFOzBCQUVHUCxNQUFNUSxHQUFHLENBQUNDLENBQUFBLHFCQUFRLDhEQUFDQzs7MENBQ2YsOERBQUNDOzBDQUFJRixLQUFLRyxLQUFLOzs7Ozs7MENBQ2YsOERBQUNDOzBDQUFHSixLQUFLSyxXQUFXOzs7Ozs7MENBQ3BCLDhEQUFDQztnQ0FBSUMsS0FBS1AsS0FBS1EsS0FBSztnQ0FBRUMsS0FBSTs7Ozs7Ozt1QkFISFQsS0FBS1UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QztHQXRDU3JCOztRQUcwQlAsMkNBQU1BOzs7S0FIaENPOztBQXdDVCwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9sYXN0LXNhbGVzLmpzPzk0YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbmNvbnN0IGZldGNoZXIgPSAoLi4uYXJncykgPT4gZmV0Y2goLi4uYXJncykudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcclxuXHJcbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UocHJvcHMpIHtcclxuICBjb25zdCBbc2FsZXMsIHNldFNhbGVzXSA9IHVzZVN0YXRlKHByb3BzLnNhbGVzKVxyXG5cclxuICBjb25zdCB7ZGF0YSwgZXJyb3IsIGlzTG9hZGluZ30gPSB1c2VTV1IoXHJcbiAgICAnL2FwaS1tb2NrL2xpc3QtZGF0YScsIGZldGNoZXJcclxuICApXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRTYWxlcyhkYXRhKVxyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGgyPkZhaWxlZCB0byBsb2FkLjwvaDI+XHJcbiAgfVxyXG4gIC8vIGlmIChpc0xvYWRpbmcgfHwgIXNhbGVzKSB7XHJcbiAgLy8gICByZXR1cm4gPGgyPkxvYWRpbmcuLi48L2gyPlxyXG4gIC8vIH1cclxuXHJcbiAgaWYgKGlzTG9hZGluZyAmJiAhc2FsZXMpIHsgLy8gc2FsZXMg6aKE5Yqg6L2977yMIOS4jeWtmOWcqOS4uuepulxyXG4gICAgcmV0dXJuIDxoMj5Mb2FkaW5nLi4uPC9oMj5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+bGFzdC1zYWxlczwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzYWxlcy5tYXAoaXRlbSA9PiA8bGkga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8aDQ+e2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvbGk+KVxyXG4gICAgICAgIH1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzUGFnZTtcclxuXHJcbi8vIOmihOWKoOi9vVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbW9jay5hcGlmb3guY24vbTEvMzQyMTQzMS0wLWRlZmF1bHQvbGlzdC1kYXRhJylcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gIHJldHVybiB7cHJvcHM6IHtzYWxlczogZGF0YX0sIHJldmFsaWRhdGU6IDMwfVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiTGFzdFNhbGVzUGFnZSIsInByb3BzIiwic2FsZXMiLCJzZXRTYWxlcyIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsImgyIiwiZGl2IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJoNCIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/last-sales.js\n"));

/***/ })

});