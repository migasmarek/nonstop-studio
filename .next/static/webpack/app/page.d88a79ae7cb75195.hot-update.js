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

/***/ "(app-pages-browser)/./app/ui/carousel.js":
/*!****************************!*\
  !*** ./app/ui/carousel.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @splidejs/react-splide */ \"(app-pages-browser)/./node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js\");\n/* harmony import */ var _splidejs_react_splide_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @splidejs/react-splide/css */ \"(app-pages-browser)/./node_modules/@splidejs/react-splide/dist/css/splide.min.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scripts_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/scripts/projects */ \"(app-pages-browser)/./scripts/projects.json\");\n\n\n\n\n\n\nfunction Carousel() {\n    const list = _scripts_projects__WEBPACK_IMPORTED_MODULE_4__;\n    const listProjects = list.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__.SplideSlide, {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().splideSlide),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/projects/\".concat(project.src),\n                    alt: project.name,\n                    width: 1728,\n                    height: 1067,\n                    priority: true,\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().splideImage)\n                }, void 0, false, {\n                    fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().splideBar),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().client),\n                            children: project.name\n                        }, void 0, false, {\n                            fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().task),\n                            children: project.task\n                        }, void 0, false, {\n                            fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().number),\n                            children: [\n                                project.id,\n                                \"/\",\n                                list.length\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                            lineNumber: 23,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, project.id, true, {\n            fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__.Splide, {\n        hasTrack: false,\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().splide),\n        \"aria-label\": \"My images\",\n        options: {\n            rewind: true,\n            gap: \"1rem\",\n            type: \"fade\",\n            perPage: 1,\n            pagination: false\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_splidejs_react_splide__WEBPACK_IMPORTED_MODULE_2__.SplideTrack, {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().splideTrack),\n                children: listProjects\n            }, void 0, false, {\n                fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"splide__arrows\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"splide__arrow splide__arrow--prev\",\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"splide__arrow splide__arrow--next\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/marekmigas/Library/CloudStorage/Dropbox/Clients/nonstop-studio/app/ui/carousel.js\",\n        lineNumber: 29,\n        columnNumber: 13\n    }, this);\n}\n_c = Carousel;\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9jYXJvdXNlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStCO0FBQzJDO0FBQ3RDO0FBQ0k7QUFDRTtBQUUzQixTQUFTTTtJQUNwQixNQUFNQyxPQUFPRiw4Q0FBUUE7SUFFckIsTUFBTUcsZUFBZUQsS0FBS0UsR0FBRyxDQUFDQyxDQUFBQSx3QkFDMUIsOERBQUNSLCtEQUFXQTtZQUFrQlMsV0FBV1AscUVBQWtCOzs4QkFDdkQsOERBQUNKLG1EQUFLQTtvQkFDSmEsS0FBSyxhQUF5QixPQUFaSCxRQUFRRyxHQUFHO29CQUM3QkMsS0FBS0osUUFBUUssSUFBSTtvQkFDakJDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLFFBQVE7b0JBQ1JQLFdBQVdQLHFFQUFrQjs7Ozs7OzhCQUUvQiw4REFBQ2dCO29CQUFJVCxXQUFXUCxtRUFBZ0I7O3NDQUM1Qiw4REFBQ2tCOzRCQUFHWCxXQUFXUCxnRUFBYTtzQ0FBR00sUUFBUUssSUFBSTs7Ozs7O3NDQUMzQyw4REFBQ1M7NEJBQUViLFdBQVdQLDhEQUFXO3NDQUFHTSxRQUFRZSxJQUFJOzs7Ozs7c0NBQ3hDLDhEQUFDRDs0QkFBRWIsV0FBV1AsZ0VBQWE7O2dDQUFHTSxRQUFRaUIsRUFBRTtnQ0FBQztnQ0FBRXBCLEtBQUtxQixNQUFNOzs7Ozs7Ozs7Ozs7OztXQVo1Q2xCLFFBQVFpQixFQUFFOzs7OztJQWlCaEMscUJBQ1EsOERBQUMxQiwwREFBTUE7UUFDUDRCLFVBQVU7UUFDVmxCLFdBQVdQLGdFQUFhO1FBQ3BCMkIsY0FBVztRQUNYQyxTQUFTO1lBQ0xDLFFBQVE7WUFDUkMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsWUFBWTtRQUNoQjs7MEJBRUEsOERBQUNsQywrREFBV0E7Z0JBQUNRLFdBQVdQLHFFQUFrQjswQkFDckNJOzs7Ozs7MEJBRUwsOERBQUNZO2dCQUFJVCxXQUFVOztrQ0FDM0IsOERBQUM0Qjt3QkFBTzVCLFdBQVU7a0NBQW9DOzs7Ozs7a0NBQ3RELDhEQUFDNEI7d0JBQU81QixXQUFVO2tDQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFEO0tBM0N3QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2Nhcm91c2VsLmpzPzI0ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBTcGxpZGUsIFNwbGlkZVNsaWRlLCBTcGxpZGVUcmFjayB9IGZyb20gXCJAc3BsaWRlanMvcmVhY3Qtc3BsaWRlXCI7XG5pbXBvcnQgJ0BzcGxpZGVqcy9yZWFjdC1zcGxpZGUvY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vcGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiQC9zY3JpcHRzL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsKCkge1xuICAgIGNvbnN0IGxpc3QgPSBwcm9qZWN0cztcblxuICAgIGNvbnN0IGxpc3RQcm9qZWN0cyA9IGxpc3QubWFwKHByb2plY3QgPT5cbiAgICAgICAgPFNwbGlkZVNsaWRlIGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuc3BsaWRlU2xpZGV9PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17YC9wcm9qZWN0cy8ke3Byb2plY3Quc3JjfWB9XG4gICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICB3aWR0aD17MTcyOH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxMDY3fVxuICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zcGxpZGVJbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwbGlkZUJhcn0+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudH0+e3Byb2plY3QubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhc2t9Pntwcm9qZWN0LnRhc2t9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm51bWJlcn0+e3Byb2plY3QuaWR9L3tsaXN0Lmxlbmd0aH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TcGxpZGVTbGlkZT5cbiAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3BsaWRlXG4gICAgICAgICAgICBoYXNUcmFjaz17ZmFsc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zcGxpZGV9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk15IGltYWdlc1wiXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICByZXdpbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGdhcDogXCIxcmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgICAgICBwZXJQYWdlOiAxLFxuICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9fSAgICBcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3BsaWRlVHJhY2sgY2xhc3NOYW1lPXtzdHlsZXMuc3BsaWRlVHJhY2t9PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdFByb2plY3RzfVxuICAgICAgICAgICAgICAgIDwvU3BsaWRlVHJhY2s+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpZGVfX2Fycm93c1wiPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3BsaWRlX19hcnJvdyBzcGxpZGVfX2Fycm93LS1wcmV2XCI+UHJldjwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3BsaWRlX19hcnJvdyBzcGxpZGVfX2Fycm93LS1uZXh0XCI+TmV4dDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3BsaWRlPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkltYWdlIiwiU3BsaWRlIiwiU3BsaWRlU2xpZGUiLCJTcGxpZGVUcmFjayIsInN0eWxlcyIsInByb2plY3RzIiwiQ2Fyb3VzZWwiLCJsaXN0IiwibGlzdFByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImNsYXNzTmFtZSIsInNwbGlkZVNsaWRlIiwic3JjIiwiYWx0IiwibmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJpb3JpdHkiLCJzcGxpZGVJbWFnZSIsImRpdiIsInNwbGlkZUJhciIsImgxIiwiY2xpZW50IiwicCIsInRhc2siLCJudW1iZXIiLCJpZCIsImxlbmd0aCIsImhhc1RyYWNrIiwic3BsaWRlIiwiYXJpYS1sYWJlbCIsIm9wdGlvbnMiLCJyZXdpbmQiLCJnYXAiLCJ0eXBlIiwicGVyUGFnZSIsInBhZ2luYXRpb24iLCJzcGxpZGVUcmFjayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/carousel.js\n"));

/***/ })

});