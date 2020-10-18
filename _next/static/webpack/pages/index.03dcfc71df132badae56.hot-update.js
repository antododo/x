webpackHotUpdate_N_E("pages/index",{

/***/ "./components/System/FileManager/ListView.tsx":
/*!****************************************************!*\
  !*** ./components/System/FileManager/ListView.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/FileManager/ListView.module.scss */ \"./styles/System/FileManager/ListView.module.scss\");\n/* harmony import */ var _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_FileManager_DirectyListEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/FileManager/DirectyListEntry */ \"./components/System/FileManager/DirectyListEntry.tsx\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/FileManager/ListView.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DirectoryList = function DirectoryList(_ref) {\n  _s();\n\n  var cwd = _ref.cwd,\n      entries = _ref.entries,\n      onDoubleClick = _ref.onDoubleClick;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      selected = _useState[0],\n      setSelected = _useState[1];\n\n  var tableContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  return __jsx(\"article\", {\n    className: _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.directoryContainer,\n    onFocus: function onFocus(e) {\n      console.log(e.target);\n      console.log(e.nativeEvent);\n      console.log(e.currentTarget);\n      console.log(e.relatedTarget);\n    },\n    ref: tableContainerRef,\n    tabIndex: -1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"table\", {\n    className: _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.directory,\n    onBlur: function onBlur(event) {\n      if (event.relatedTarget === tableContainerRef.current) {\n        setSelected('');\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    className: _styles_System_FileManager_ListView_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.emphasis,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"Name\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"Size\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Kind\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, cwd !== _utils_constants__WEBPACK_IMPORTED_MODULE_3__[\"ROOT_DIRECTORY\"] && __jsx(_components_System_FileManager_DirectyListEntry__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    selected: selected,\n    setSelected: setSelected,\n    doubleClick: onDoubleClick({\n      path: '..'\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }), entries.map(function (_ref2) {\n    var icon = _ref2.icon,\n        kind = _ref2.kind,\n        name = _ref2.name,\n        path = _ref2.path,\n        url = _ref2.url,\n        size = _ref2.size,\n        fullName = _ref2.fullName;\n    return __jsx(_components_System_FileManager_DirectyListEntry__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: path,\n      path: path,\n      icon: icon,\n      kind: kind,\n      size: size,\n      fullName: fullName,\n      selected: selected,\n      setSelected: setSelected,\n      doubleClick: onDoubleClick({\n        path: path,\n        url: url,\n        icon: icon,\n        name: name\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 15\n      }\n    });\n  }))));\n};\n\n_s(DirectoryList, \"WzJC17dusRZ+MyaF8sWbuoridYA=\");\n\n_c = DirectoryList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DirectoryList);\n\nvar _c;\n\n$RefreshReg$(_c, \"DirectoryList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTGlzdFZpZXcudHN4PzE5NzgiXSwibmFtZXMiOlsiRGlyZWN0b3J5TGlzdCIsImN3ZCIsImVudHJpZXMiLCJvbkRvdWJsZUNsaWNrIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwidGFibGVDb250YWluZXJSZWYiLCJ1c2VSZWYiLCJzdHlsZXMiLCJkaXJlY3RvcnlDb250YWluZXIiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm5hdGl2ZUV2ZW50IiwiY3VycmVudFRhcmdldCIsInJlbGF0ZWRUYXJnZXQiLCJkaXJlY3RvcnkiLCJldmVudCIsImN1cnJlbnQiLCJlbXBoYXNpcyIsIlJPT1RfRElSRUNUT1JZIiwicGF0aCIsIm1hcCIsImljb24iLCJraW5kIiwibmFtZSIsInVybCIsInNpemUiLCJmdWxsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQXNDLEdBQUcsU0FBekNBLGFBQXlDLE9BSXpDO0FBQUE7O0FBQUEsTUFISkMsR0FHSSxRQUhKQSxHQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsYUFDSSxRQURKQSxhQUNJOztBQUFBLGtCQUM0QkMsc0RBQVEsQ0FBQyxFQUFELENBRHBDO0FBQUEsTUFDR0MsUUFESDtBQUFBLE1BQ2FDLFdBRGI7O0FBRUosTUFBTUMsaUJBQWlCLEdBQUdDLG9EQUFNLENBQWMsSUFBZCxDQUFoQztBQUVBLFNBQ0U7QUFDRSxhQUFTLEVBQUVDLHNGQUFNLENBQUNDLGtCQURwQjtBQUVFLFdBQU8sRUFBRSxpQkFBQ0MsQ0FBRCxFQUFPO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQWQ7QUFDQUYsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0ksV0FBZDtBQUNBSCxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDSyxhQUFkO0FBQ0FKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNNLGFBQWQ7QUFDRCxLQVBIO0FBUUUsT0FBRyxFQUFFVixpQkFSUDtBQVNFLFlBQVEsRUFBRSxDQUFDLENBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFO0FBQU8sYUFBUyxFQUFFRSxzRkFBTSxDQUFDUyxTQUF6QjtBQUFvQyxVQUFNLEVBQUUsZ0JBQUNDLEtBQUQsRUFBVztBQUNyRCxVQUFJQSxLQUFLLENBQUNGLGFBQU4sS0FBd0JWLGlCQUFpQixDQUFDYSxPQUE5QyxFQUF1RDtBQUNyRGQsbUJBQVcsQ0FBQyxFQUFELENBQVg7QUFDRDtBQUNGLEtBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUcsc0ZBQU0sQ0FBQ1ksUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixDQURGLENBTEYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dwQixHQUFHLEtBQUtxQiwrREFBUixJQUNDLE1BQUMsdUZBQUQ7QUFDRSxZQUFRLEVBQUVqQixRQURaO0FBRUUsZUFBVyxFQUFFQyxXQUZmO0FBR0UsZUFBVyxFQUFFSCxhQUFhLENBQUM7QUFBRW9CLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FINUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBUUdyQixPQUFPLENBQUNzQixHQUFSLENBQVksaUJBQXFEO0FBQUEsUUFBbERDLElBQWtELFNBQWxEQSxJQUFrRDtBQUFBLFFBQTVDQyxJQUE0QyxTQUE1Q0EsSUFBNEM7QUFBQSxRQUF0Q0MsSUFBc0MsU0FBdENBLElBQXNDO0FBQUEsUUFBaENKLElBQWdDLFNBQWhDQSxJQUFnQztBQUFBLFFBQTFCSyxHQUEwQixTQUExQkEsR0FBMEI7QUFBQSxRQUFyQkMsSUFBcUIsU0FBckJBLElBQXFCO0FBQUEsUUFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQ2hFLFdBQ0UsTUFBQyx1RkFBRDtBQUNFLFNBQUcsRUFBRVAsSUFEUDtBQUVFLFVBQUksRUFBRUEsSUFGUjtBQUdFLFVBQUksRUFBRUUsSUFIUjtBQUlFLFVBQUksRUFBRUMsSUFKUjtBQUtFLFVBQUksRUFBRUcsSUFMUjtBQU1FLGNBQVEsRUFBRUMsUUFOWjtBQU9FLGNBQVEsRUFBRXpCLFFBUFo7QUFRRSxpQkFBVyxFQUFFQyxXQVJmO0FBU0UsaUJBQVcsRUFBRUgsYUFBYSxDQUFDO0FBQUVvQixZQUFJLEVBQUpBLElBQUY7QUFBUUssV0FBRyxFQUFIQSxHQUFSO0FBQWFILFlBQUksRUFBSkEsSUFBYjtBQUFtQkUsWUFBSSxFQUFKQTtBQUFuQixPQUFELENBVDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQWFELEdBZEEsQ0FSSCxDQVpGLENBWEYsQ0FERjtBQW1ERCxDQTNERDs7R0FBTTNCLGE7O0tBQUFBLGE7QUE2RFNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vRmlsZU1hbmFnZXIvTGlzdFZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vRmlsZU1hbmFnZXIvTGlzdFZpZXcubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IERpcmVjdG9yeVZpZXcgfSBmcm9tICdAL3R5cGVzL2NvbXBvbmVudHMvU3lzdGVtL0ZpbGVNYW5hZ2VyL0ZpbGVNYW5hZ2VyJztcblxuaW1wb3J0IERpcmVjdHlMaXN0RW50cnkgZnJvbSAnQC9jb21wb25lbnRzL1N5c3RlbS9GaWxlTWFuYWdlci9EaXJlY3R5TGlzdEVudHJ5JztcbmltcG9ydCB7IFJPT1RfRElSRUNUT1JZIH0gZnJvbSAnQC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRGlyZWN0b3J5TGlzdDogUmVhY3QuRkM8RGlyZWN0b3J5Vmlldz4gPSAoe1xuICBjd2QsXG4gIGVudHJpZXMsXG4gIG9uRG91YmxlQ2xpY2tcbn0pID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHRhYmxlQ29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3RvcnlDb250YWluZXJ9XG4gICAgICBvbkZvY3VzPXsoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUubmF0aXZlRXZlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnJlbGF0ZWRUYXJnZXQpO1xuICAgICAgfX1cbiAgICAgIHJlZj17dGFibGVDb250YWluZXJSZWZ9XG4gICAgICB0YWJJbmRleD17LTF9XG4gICAgPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdG9yeX0gb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IHRhYmxlQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBzZXRTZWxlY3RlZCgnJyk7XG4gICAgICAgIH1cbiAgICAgIH19PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT17c3R5bGVzLmVtcGhhc2lzfT5cbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5TaXplPC90aD5cbiAgICAgICAgICAgIDx0aD5LaW5kPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2N3ZCAhPT0gUk9PVF9ESVJFQ1RPUlkgJiYgKFxuICAgICAgICAgICAgPERpcmVjdHlMaXN0RW50cnlcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGRvdWJsZUNsaWNrPXtvbkRvdWJsZUNsaWNrKHsgcGF0aDogJy4uJyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZW50cmllcy5tYXAoKHsgaWNvbiwga2luZCwgbmFtZSwgcGF0aCwgdXJsLCBzaXplLCBmdWxsTmFtZSB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RGlyZWN0eUxpc3RFbnRyeVxuICAgICAgICAgICAgICAgIGtleT17cGF0aH1cbiAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICAgICAga2luZD17a2luZH1cbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIGZ1bGxOYW1lPXtmdWxsTmFtZX1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAgICAgICAgIGRvdWJsZUNsaWNrPXtvbkRvdWJsZUNsaWNrKHsgcGF0aCwgdXJsLCBpY29uLCBuYW1lIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0b3J5TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/FileManager/ListView.tsx\n");

/***/ })

})