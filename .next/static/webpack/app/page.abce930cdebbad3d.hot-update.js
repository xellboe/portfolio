"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Form/From.jsx":
/*!**************************************!*\
  !*** ./src/components/Form/From.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/modules/Form.module.scss */ \"(app-pages-browser)/./src/styles/modules/Form.module.scss\");\n/* harmony import */ var _styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst From = ()=>{\n    var _errors, _errors1, _errors2, _errors3;\n    _s();\n    const { register, handleSubmit, watch, reset, formState: { errors, isValid } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({\n        mode: \"onBlur\"\n    });\n    const onSubmit = (data)=>{\n        // axios.post(\n        //   `https://api.telegram.org/bot6654165442:AAEmBLI2Y_hiBg4PpVjUkhuWxutscq4OQUA/sendMessage?chat_id=5540508200&text=Name: ${data.name}\n        //   Email:  ${data.email}\n        //   Message: ${data.message}`\n        // )\n        reset();\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Leave us your info\"\n            }, void 0, false, {\n                fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                id: \"tg\",\n                onSubmit: handleSubmit(onSubmit),\n                className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__place),\n                action: \"\",\n                method: \"post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Fullname:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Your Name\",\n                                ...register(\"name\", {\n                                    required: true\n                                }),\n                                className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__input)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__errors),\n                        children: ((_errors = errors) === null || _errors === void 0 ? void 0 : _errors.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: ((_errors1 = errors) === null || _errors1 === void 0 ? void 0 : _errors1.message) || \"Enter your name!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 28\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Email:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                placeholder: \"Email or telegram nickname\",\n                                ...register(\"email\", {\n                                    required: true\n                                }),\n                                className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__input)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__errors),\n                                children: ((_errors2 = errors) === null || _errors2 === void 0 ? void 0 : _errors2.email) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: ((_errors3 = errors) === null || _errors3 === void 0 ? void 0 : _errors3.message) || \"Enter email or telegram nickname!\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 31\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Message:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Write me something\",\n                                ...register(\"message\", {\n                                    required: true\n                                }),\n                                className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__textarea)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        className: (_styles_modules_Form_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form__submit),\n                        value: \"Send\",\n                        disabled: !isValid\n                    }, void 0, false, {\n                        fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\PROGEROM BUDU\\\\My Projects\\\\my-portfolio\\\\src\\\\components\\\\Form\\\\From.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(From, \"WbyrfuIJkqQFs0/LoO0LHFbj3SI=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = From;\n/* harmony default export */ __webpack_exports__[\"default\"] = (From);\nvar _c;\n$RefreshReg$(_c, \"From\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Zvcm0vRnJvbS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRWdCO0FBRWlCO0FBQ2pDO0FBRXpCLE1BQU1JLE9BQU87UUErQkZDLFNBQW9CQSxVQVdsQkEsVUFBcUJBOztJQXpDaEMsTUFBTSxFQUNKQyxRQUFRLEVBQ1JDLFlBQVksRUFDWkMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLFdBQVcsRUFBRUwsTUFBTSxFQUFFTSxPQUFPLEVBQUUsRUFDL0IsR0FBR1Ysd0RBQU9BLENBQUM7UUFBRVcsTUFBTTtJQUFTO0lBQzdCLE1BQU1DLFdBQVcsQ0FBQ0M7UUFDaEIsY0FBYztRQUNkLHVJQUF1STtRQUN2SSwwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLElBQUk7UUFDSkw7UUFDQU0sUUFBUUMsR0FBRyxDQUFDRjtJQUNkO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVdoQix1RkFBb0I7OzBCQUNsQyw4REFBQ2tCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxJQUFHO2dCQUFLVCxVQUFVTixhQUFhTTtnQkFBV0ssV0FBV2hCLHFGQUFrQjtnQkFBRXNCLFFBQU87Z0JBQUdDLFFBQU87O2tDQUM5Riw4REFBQ0M7OzRCQUFNOzBDQUVMLDhEQUFDQztnQ0FDQ0MsYUFBWTtnQ0FDWCxHQUFHdEIsU0FBUyxRQUFRO29DQUFFdUIsVUFBVTtnQ0FBSyxFQUFFO2dDQUN4Q1gsV0FBV2hCLHFGQUFrQjs7Ozs7Ozs7Ozs7O2tDQUlqQyw4REFBQ2U7d0JBQUlDLFdBQVdoQixzRkFBbUI7a0NBQ2hDRyxFQUFBQSxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVEyQixJQUFJLG1CQUFJLDhEQUFDQztzQ0FBRzVCLEVBQUFBLFdBQUFBLG9CQUFBQSwrQkFBQUEsU0FBUTZCLE9BQU8sS0FBSTs7Ozs7Ozs7Ozs7a0NBRzFDLDhEQUFDUjs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxhQUFZO2dDQUNYLEdBQUd0QixTQUFTLFNBQVM7b0NBQUV1QixVQUFVO2dDQUFLLEVBQUU7Z0NBQ3pDWCxXQUFXaEIscUZBQWtCOzs7Ozs7MENBRS9CLDhEQUFDZTtnQ0FBSUMsV0FBV2hCLHNGQUFtQjswQ0FDaENHLEVBQUFBLFdBQUFBLG9CQUFBQSwrQkFBQUEsU0FBUThCLEtBQUssbUJBQUksOERBQUNGOzhDQUFHNUIsRUFBQUEsV0FBQUEsb0JBQUFBLCtCQUFBQSxTQUFRNkIsT0FBTyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0MsOERBQUNSOzs0QkFBTTswQ0FFTCw4REFBQ1U7Z0NBQ0NSLGFBQVk7Z0NBQ1gsR0FBR3RCLFNBQVMsV0FBVztvQ0FBRXVCLFVBQVU7Z0NBQUssRUFBRTtnQ0FDM0NYLFdBQVdoQix3RkFBcUI7Ozs7Ozs7Ozs7OztrQ0FHcEMsOERBQUN5Qjt3QkFBTVcsTUFBSzt3QkFBU3BCLFdBQVdoQixzRkFBbUI7d0JBQUVzQyxPQUFNO3dCQUFPQyxVQUFVLENBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJGO0dBMURNUDs7UUFPQUgsb0RBQU9BOzs7S0FQUEc7QUE0RE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gcm9tLmpzeD83NmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL21vZHVsZXMvRm9ybS5tb2R1bGUuc2Nzc1wiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuY29uc3QgRnJvbSA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIHdhdGNoLFxyXG4gICAgcmVzZXQsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzLCBpc1ZhbGlkIH0sXHJcbiAgfSA9IHVzZUZvcm0oeyBtb2RlOiBcIm9uQmx1clwiIH0pXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgLy8gYXhpb3MucG9zdChcclxuICAgIC8vICAgYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Q2NjU0MTY1NDQyOkFBRW1CTEkyWV9oaUJnNFBwVmpVa2h1V3h1dHNjcTRPUVVBL3NlbmRNZXNzYWdlP2NoYXRfaWQ9NTU0MDUwODIwMCZ0ZXh0PU5hbWU6ICR7ZGF0YS5uYW1lfVxyXG4gICAgLy8gICBFbWFpbDogICR7ZGF0YS5lbWFpbH1cclxuICAgIC8vICAgTWVzc2FnZTogJHtkYXRhLm1lc3NhZ2V9YFxyXG4gICAgLy8gKVxyXG4gICAgcmVzZXQoKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9fY29udGVudH0+XHJcbiAgICAgIDxoMj5MZWF2ZSB1cyB5b3VyIGluZm88L2gyPlxyXG4gICAgICA8Zm9ybSBpZD1cInRnXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fX3BsYWNlfSBhY3Rpb249XCJcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgRnVsbG5hbWU6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIlxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJuYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fX2lucHV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fX2Vycm9yc30+XHJcbiAgICAgICAgICB7ZXJyb3JzPy5uYW1lICYmIDxwPntlcnJvcnM/Lm1lc3NhZ2UgfHwgXCJFbnRlciB5b3VyIG5hbWUhXCJ9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBvciB0ZWxlZ3JhbSBuaWNrbmFtZVwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fX2lucHV0fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9fZXJyb3JzfT5cclxuICAgICAgICAgICAge2Vycm9ycz8uZW1haWwgJiYgPHA+e2Vycm9ycz8ubWVzc2FnZSB8fCBcIkVudGVyIGVtYWlsIG9yIHRlbGVncmFtIG5pY2tuYW1lIVwifTwvcD59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICBNZXNzYWdlOlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgbWUgc29tZXRoaW5nXCJcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwibWVzc2FnZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX190ZXh0YXJlYX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fX3N1Ym1pdH0gdmFsdWU9XCJTZW5kXCIgZGlzYWJsZWQ9eyFpc1ZhbGlkfSAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyb21cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRm9ybSIsInN0eWxlcyIsImF4aW9zIiwiRnJvbSIsImVycm9ycyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJyZXNldCIsImZvcm1TdGF0ZSIsImlzVmFsaWQiLCJtb2RlIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm1fX2NvbnRlbnQiLCJoMiIsImZvcm0iLCJpZCIsImZvcm1fX3BsYWNlIiwiYWN0aW9uIiwibWV0aG9kIiwibGFiZWwiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJmb3JtX19pbnB1dCIsImZvcm1fX2Vycm9ycyIsIm5hbWUiLCJwIiwibWVzc2FnZSIsImVtYWlsIiwidGV4dGFyZWEiLCJmb3JtX190ZXh0YXJlYSIsInR5cGUiLCJmb3JtX19zdWJtaXQiLCJ2YWx1ZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Form/From.jsx\n"));

/***/ })

});