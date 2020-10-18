webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/ListView.tsx":
/*!****************************************************!*\
  !*** ./components/System/FileManager/ListView.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/FileManager/ListView.module.scss */ \"./styles/System/FileManager/ListView.module.scss\");\n/* harmony import */ var _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_FileManager_DirectyListEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/FileManager/DirectyListEntry */ \"./components/System/FileManager/DirectyListEntry.tsx\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/ListView.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DirectoryList = function DirectoryList(_ref) {\n  _s();\n\n  var cwd = _ref.cwd,\n      entries = _ref.entries,\n      onDoubleClick = _ref.onDoubleClick;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  return __jsx(\"article\", {\n    style: {\n      height: '100%'\n    } //ref={}\n    // onClick={(e) => {\n    //   console.log(e.target);\n    //   console.log(e.currentTarget);\n    //   console.log(e.nativeEvent);\n    //   console.log(e.relatedTarget);\n    //   // setSelected('');\n    // }}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"table\", {\n    className: _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.directory,\n    onBlur: function onBlur(e, y) {\n      console.log('target', e.target);\n      console.log('currentTarget', e.currentTarget);\n      console.log('nativeEvent', e.nativeEvent);\n      console.log('relatedTarget', e.relatedTarget);\n      console.log('y', y);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    className: _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emphasis,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"Name\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Size\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Kind\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, cwd !== _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"ROOT_DIRECTORY\"] && __jsx(_components_System_FileManager_DirectyListEntry__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    selected: selected,\n    setSelected: setSelected,\n    doubleClick: onDoubleClick({\n      path: '..'\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }), entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        kind = _ref2.kind,\n        name = _ref2.name,\n        path = _ref2.path,\n        url = _ref2.url,\n        size = _ref2.size,\n        fullName = _ref2.fullName;\n    return __jsx(_components_System_FileManager_DirectyListEntry__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: path,\n      path: path,\n      icon: icon,\n      kind: kind,\n      size: size,\n      fullName: fullName,\n      selected: selected,\n      setSelected: setSelected,\n      doubleClick: onDoubleClick({\n        path: path,\n        url: url,\n        icon: icon,\n        name: name\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 15\n      }\n    });\n  }))));\n};\n\n_s(DirectoryList, \"18RT5nPrBTPIyYXVolwVU2o0VQI=\");\n\n_c = DirectoryList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DirectoryList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTGlzdFZpZXcudHN4PzE5NzgiXSwibmFtZXMiOlsiRGlyZWN0b3J5TGlzdCIsImN3ZCIsImVudHJpZXMiLCJvbkRvdWJsZUNsaWNrIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGVpZ2h0Iiwic3R5bGVzIiwiZGlyZWN0b3J5IiwiZSIsInkiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm5hdGl2ZUV2ZW50IiwicmVsYXRlZFRhcmdldCIsImVtcGhhc2lzIiwiUk9PVF9ESVJFQ1RPUlkiLCJwYXRoIiwibWFwIiwiaWNvbiIsImtpbmQiLCJuYW1lIiwidXJsIiwic2l6ZSIsImZ1bGxOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBc0MsR0FBRyxTQUF6Q0EsYUFBeUMsT0FJekM7QUFBQTs7QUFBQSxNQUhKQyxHQUdJLFFBSEpBLEdBR0k7QUFBQSxNQUZKQyxPQUVJLFFBRkpBLE9BRUk7QUFBQSxNQURKQyxhQUNJLFFBREpBLGFBQ0k7O0FBQUEsa0JBQzRCQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEM7QUFBQSxNQUNHQyxRQURIO0FBQUEsTUFDYUMsV0FEYjs7QUFHSixTQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBRFQsQ0FFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFO0FBQU8sYUFBUyxFQUFFQyxzRkFBTSxDQUFDQyxTQUF6QjtBQUFvQyxVQUFNLEVBQUUsZ0JBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3BEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxDQUFDLENBQUNJLE1BQXhCO0FBQ0FGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJILENBQUMsQ0FBQ0ssYUFBL0I7QUFDQUgsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkgsQ0FBQyxDQUFDTSxXQUE3QjtBQUNBSixhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSCxDQUFDLENBQUNPLGFBQS9CO0FBQ0FMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVosRUFBaUJGLENBQWpCO0FBQ0QsS0FORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFSCxzRkFBTSxDQUFDVSxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLENBREYsQ0FQRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLEdBQUcsS0FBS2tCLCtEQUFSLElBQ0MsTUFBQyx1RkFBRDtBQUNFLFlBQVEsRUFBRWQsUUFEWjtBQUVFLGVBQVcsRUFBRUMsV0FGZjtBQUdFLGVBQVcsRUFBRUgsYUFBYSxDQUFDO0FBQUVpQixVQUFJLEVBQUU7QUFBUixLQUFELENBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQVFHbEIsT0FBTyxDQUFDbUIsR0FBUixDQUFZLGlCQUFxRDtBQUFBLFFBQWxEQyxJQUFrRCxTQUFsREEsSUFBa0Q7QUFBQSxRQUE1Q0MsSUFBNEMsU0FBNUNBLElBQTRDO0FBQUEsUUFBdENDLElBQXNDLFNBQXRDQSxJQUFzQztBQUFBLFFBQWhDSixJQUFnQyxTQUFoQ0EsSUFBZ0M7QUFBQSxRQUExQkssR0FBMEIsU0FBMUJBLEdBQTBCO0FBQUEsUUFBckJDLElBQXFCLFNBQXJCQSxJQUFxQjtBQUFBLFFBQWZDLFFBQWUsU0FBZkEsUUFBZTtBQUNoRSxXQUNFLE1BQUMsdUZBQUQ7QUFDRSxTQUFHLEVBQUVQLElBRFA7QUFFRSxVQUFJLEVBQUVBLElBRlI7QUFHRSxVQUFJLEVBQUVFLElBSFI7QUFJRSxVQUFJLEVBQUVDLElBSlI7QUFLRSxVQUFJLEVBQUVHLElBTFI7QUFNRSxjQUFRLEVBQUVDLFFBTlo7QUFPRSxjQUFRLEVBQUV0QixRQVBaO0FBUUUsaUJBQVcsRUFBRUMsV0FSZjtBQVNFLGlCQUFXLEVBQUVILGFBQWEsQ0FBQztBQUFFaUIsWUFBSSxFQUFKQSxJQUFGO0FBQVFLLFdBQUcsRUFBSEEsR0FBUjtBQUFhSCxZQUFJLEVBQUpBLElBQWI7QUFBbUJFLFlBQUksRUFBSkE7QUFBbkIsT0FBRCxDQVQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFhRCxHQWRBLENBUkgsQ0FkRixDQVhGLENBREY7QUFxREQsQ0E1REQ7O0dBQU14QixhOztLQUFBQSxhO0FBOERTQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0xpc3RWaWV3LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0xpc3RWaWV3Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBEaXJlY3RvcnlWaWV3IH0gZnJvbSAnQC90eXBlcy9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9GaWxlTWFuYWdlcic7XG5cbmltcG9ydCBEaXJlY3R5TGlzdEVudHJ5IGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvRGlyZWN0eUxpc3RFbnRyeSc7XG5pbXBvcnQgeyBST09UX0RJUkVDVE9SWSB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBEaXJlY3RvcnlMaXN0OiBSZWFjdC5GQzxEaXJlY3RvcnlWaWV3PiA9ICh7XG4gIGN3ZCxcbiAgZW50cmllcyxcbiAgb25Eb3VibGVDbGlja1xufSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlXG4gICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fVxuICAgICAgLy9yZWY9e31cbiAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZS5uYXRpdmVFdmVudCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGUucmVsYXRlZFRhcmdldCk7XG4gICAgICAvLyAgIC8vIHNldFNlbGVjdGVkKCcnKTtcbiAgICAgIC8vIH19XG4gICAgPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdG9yeX0gb25CbHVyPXsoZSwgeSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0JywgZS50YXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudFRhcmdldCcsIGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCduYXRpdmVFdmVudCcsIGUubmF0aXZlRXZlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVsYXRlZFRhcmdldCcsIGUucmVsYXRlZFRhcmdldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd5JywgeSk7XG4gICAgICB9fT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9e3N0eWxlcy5lbXBoYXNpc30+XG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGg+U2l6ZTwvdGg+XG4gICAgICAgICAgICA8dGg+S2luZDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtjd2QgIT09IFJPT1RfRElSRUNUT1JZICYmIChcbiAgICAgICAgICAgIDxEaXJlY3R5TGlzdEVudHJ5XG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgICBkb3VibGVDbGljaz17b25Eb3VibGVDbGljayh7IHBhdGg6ICcuLicgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2VudHJpZXMubWFwKCh7IGljb24sIGtpbmQsIG5hbWUsIHBhdGgsIHVybCwgc2l6ZSwgZnVsbE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPERpcmVjdHlMaXN0RW50cnlcbiAgICAgICAgICAgICAgICBrZXk9e3BhdGh9XG4gICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgIGtpbmQ9e2tpbmR9XG4gICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICBmdWxsTmFtZT17ZnVsbE5hbWV9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBkb3VibGVDbGljaz17b25Eb3VibGVDbGljayh7IHBhdGgsIHVybCwgaWNvbiwgbmFtZSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdG9yeUxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/FileManager/ListView.tsx\n");

/***/ })

})