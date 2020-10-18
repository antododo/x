webpackHotUpdate_N_E(1,{

/***/ "./components/System/WindowManager/Window.tsx":
/*!****************************************************!*\
  !*** ./components/System/WindowManager/Window.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/System/WindowManager/Window.module.scss */ \"./styles/System/WindowManager/Window.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_System_WindowManager_TitleBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/System/WindowManager/TitleBar */ \"./components/System/WindowManager/TitleBar.tsx\");\n/* harmony import */ var _utils_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/elements */ \"./utils/elements.ts\");\n/* harmony import */ var _utils_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/window */ \"./utils/window.ts\");\n/* harmony import */ var react_rnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-rnd */ \"./node_modules/react-rnd/lib/index.js\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/Window.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Window = function Window(_ref) {\n  _s();\n\n  var children = _ref.children,\n      _ref$icon = _ref.icon,\n      icon = _ref$icon === void 0 ? '' : _ref$icon,\n      id = _ref.id,\n      _ref$name = _ref.name,\n      name = _ref$name === void 0 ? '' : _ref$name,\n      bgColor = _ref.bgColor,\n      onMaximize = _ref.onMaximize,\n      onMinimize = _ref.onMinimize,\n      onClose = _ref.onClose,\n      onFocus = _ref.onFocus,\n      onBlur = _ref.onBlur,\n      updatePosition = _ref.updatePosition,\n      updateSize = _ref.updateSize,\n      lockAspectRatio = _ref.lockAspectRatio,\n      zIndex = _ref.zIndex,\n      maximized = _ref.maximized,\n      _ref$height = _ref.height,\n      height = _ref$height === void 0 ? 0 : _ref$height,\n      _ref$width = _ref.width,\n      width = _ref$width === void 0 ? 0 : _ref$width;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__[\"SessionContext\"]),\n      foregroundId = _useContext.session.foregroundId;\n\n  var windowRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_utils_elements__WEBPACK_IMPORTED_MODULE_3__[\"focusResizableElementRef\"])(windowRef);\n  }, []);\n  return __jsx(react_rnd__WEBPACK_IMPORTED_MODULE_5__[\"Rnd\"], {\n    ref: windowRef,\n    enableUserSelectHack: false,\n    className: \"\".concat(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.window, \" \").concat(maximized ? _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.maximized : '', \" \").concat(foregroundId === id ? _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.foreground : ''),\n    dragHandleClassName: \"handle\",\n    resizeHandleClasses: Object(_utils_window__WEBPACK_IMPORTED_MODULE_4__[\"resizeHandleClasses\"])(_styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a),\n    cancel: \".cancel\",\n    size: {\n      height: maximized ? '100%' : height,\n      width: maximized ? '100%' : width\n    },\n    minHeight: 250,\n    minWidth: 250,\n    tabIndex: -1,\n    onFocus: onFocus,\n    onBlur: onBlur,\n    onDragStart: _utils_elements__WEBPACK_IMPORTED_MODULE_3__[\"focusOnDrag\"],\n    onDragStop: updatePosition,\n    onResizeStop: updateSize,\n    enableResizing: !maximized,\n    disableDragging: maximized,\n    lockAspectRatio: lockAspectRatio,\n    style: {\n      zIndex: zIndex\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_components_System_WindowManager_TitleBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: icon,\n    name: name,\n    onMaximize: onMaximize,\n    onMinimize: onMinimize,\n    onClose: onClose,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }), __jsx(\"article\", {\n    className: _styles_System_WindowManager_Window_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,\n    style: {\n      backgroundColor: bgColor\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n_s(Window, \"h6GRU5KzfMKVmKb3m/vfGDOJvqg=\");\n\n_c = Window;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Window);\n\nvar _c;\n\n$RefreshReg$(_c, \"Window\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cudHN4PzJhMGQiXSwibmFtZXMiOlsiV2luZG93IiwiY2hpbGRyZW4iLCJpY29uIiwiaWQiLCJuYW1lIiwiYmdDb2xvciIsIm9uTWF4aW1pemUiLCJvbk1pbmltaXplIiwib25DbG9zZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJ1cGRhdGVQb3NpdGlvbiIsInVwZGF0ZVNpemUiLCJsb2NrQXNwZWN0UmF0aW8iLCJ6SW5kZXgiLCJtYXhpbWl6ZWQiLCJoZWlnaHQiLCJ3aWR0aCIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmRJZCIsInNlc3Npb24iLCJ3aW5kb3dSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJmb2N1c1Jlc2l6YWJsZUVsZW1lbnRSZWYiLCJzdHlsZXMiLCJ3aW5kb3ciLCJmb3JlZ3JvdW5kIiwicmVzaXplSGFuZGxlQ2xhc3NlcyIsImZvY3VzT25EcmFnIiwiY29udGVudCIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQThCLEdBQUcsU0FBakNBLE1BQWlDLE9Ba0JqQztBQUFBOztBQUFBLE1BakJKQyxRQWlCSSxRQWpCSkEsUUFpQkk7QUFBQSx1QkFoQkpDLElBZ0JJO0FBQUEsTUFoQkpBLElBZ0JJLDBCQWhCRyxFQWdCSDtBQUFBLE1BZkpDLEVBZUksUUFmSkEsRUFlSTtBQUFBLHVCQWRKQyxJQWNJO0FBQUEsTUFkSkEsSUFjSSwwQkFkRyxFQWNIO0FBQUEsTUFiSkMsT0FhSSxRQWJKQSxPQWFJO0FBQUEsTUFaSkMsVUFZSSxRQVpKQSxVQVlJO0FBQUEsTUFYSkMsVUFXSSxRQVhKQSxVQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsT0FTSSxRQVRKQSxPQVNJO0FBQUEsTUFSSkMsTUFRSSxRQVJKQSxNQVFJO0FBQUEsTUFQSkMsY0FPSSxRQVBKQSxjQU9JO0FBQUEsTUFOSkMsVUFNSSxRQU5KQSxVQU1JO0FBQUEsTUFMSkMsZUFLSSxRQUxKQSxlQUtJO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEseUJBRkpDLE1BRUk7QUFBQSxNQUZKQSxNQUVJLDRCQUZLLENBRUw7QUFBQSx3QkFESkMsS0FDSTtBQUFBLE1BREpBLEtBQ0ksMkJBREksQ0FDSjs7QUFBQSxvQkFHQUMsd0RBQVUsQ0FBQ0MsdUVBQUQsQ0FIVjtBQUFBLE1BRVNDLFlBRlQsZUFFRkMsT0FGRSxDQUVTRCxZQUZUOztBQUlKLE1BQU1FLFNBQVMsR0FBR0Msb0RBQU0sQ0FBTSxJQUFOLENBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxvRkFBd0IsQ0FBQ0gsU0FBRCxDQUF4QjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUNFLE1BQUMsNkNBQUQ7QUFDRSxPQUFHLEVBQUVBLFNBRFA7QUFFRSx3QkFBb0IsRUFBRSxLQUZ4QjtBQUdFLGFBQVMsWUFBS0ksc0ZBQU0sQ0FBQ0MsTUFBWixjQUFzQlosU0FBUyxHQUFHVyxzRkFBTSxDQUFDWCxTQUFWLEdBQXNCLEVBQXJELGNBQ1BLLFlBQVksS0FBS2pCLEVBQWpCLEdBQXNCdUIsc0ZBQU0sQ0FBQ0UsVUFBN0IsR0FBMEMsRUFEbkMsQ0FIWDtBQU1FLHVCQUFtQixFQUFDLFFBTnRCO0FBT0UsdUJBQW1CLEVBQUVDLHlFQUFtQixDQUFDSCxzRkFBRCxDQVAxQztBQVFFLFVBQU0sRUFBQyxTQVJUO0FBU0UsUUFBSSxFQUFFO0FBQ0pWLFlBQU0sRUFBRUQsU0FBUyxHQUFHLE1BQUgsR0FBWUMsTUFEekI7QUFFSkMsV0FBSyxFQUFFRixTQUFTLEdBQUcsTUFBSCxHQUFZRTtBQUZ4QixLQVRSO0FBYUUsYUFBUyxFQUFFLEdBYmI7QUFjRSxZQUFRLEVBQUUsR0FkWjtBQWVFLFlBQVEsRUFBRSxDQUFDLENBZmI7QUFnQkUsV0FBTyxFQUFFUixPQWhCWDtBQWlCRSxVQUFNLEVBQUVDLE1BakJWO0FBa0JFLGVBQVcsRUFBRW9CLDJEQWxCZjtBQW1CRSxjQUFVLEVBQUVuQixjQW5CZDtBQW9CRSxnQkFBWSxFQUFFQyxVQXBCaEI7QUFxQkUsa0JBQWMsRUFBRSxDQUFDRyxTQXJCbkI7QUFzQkUsbUJBQWUsRUFBRUEsU0F0Qm5CO0FBdUJFLG1CQUFlLEVBQUVGLGVBdkJuQjtBQXdCRSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFOQTtBQUFGLEtBeEJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EwQkUsTUFBQyxpRkFBRDtBQUNFLFFBQUksRUFBRVosSUFEUjtBQUVFLFFBQUksRUFBRUUsSUFGUjtBQUdFLGNBQVUsRUFBRUUsVUFIZDtBQUlFLGNBQVUsRUFBRUMsVUFKZDtBQUtFLFdBQU8sRUFBRUMsT0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJGLEVBaUNFO0FBQVMsYUFBUyxFQUFFa0Isc0ZBQU0sQ0FBQ0ssT0FBM0I7QUFBb0MsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUUzQjtBQUFuQixLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFFBREgsQ0FqQ0YsQ0FERjtBQXVDRCxDQW5FRDs7R0FBTUQsTTs7S0FBQUEsTTtBQXFFU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1dpbmRvdy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCB0eXBlIHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnQC90eXBlcy91dGlscy9wcm9ncmFtcyc7XG5cbmltcG9ydCBUaXRsZUJhciBmcm9tICdAL2NvbXBvbmVudHMvU3lzdGVtL1dpbmRvd01hbmFnZXIvVGl0bGVCYXInO1xuaW1wb3J0IHsgZm9jdXNPbkRyYWcsIGZvY3VzUmVzaXphYmxlRWxlbWVudFJlZiB9IGZyb20gJ0AvdXRpbHMvZWxlbWVudHMnO1xuaW1wb3J0IHsgcmVzaXplSGFuZGxlQ2xhc3NlcyB9IGZyb20gJ0AvdXRpbHMvd2luZG93JztcbmltcG9ydCB7IFJuZCB9IGZyb20gJ3JlYWN0LXJuZCc7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdpbmRvdzogUmVhY3QuRkM8QXBwQ29tcG9uZW50PiA9ICh7XG4gIGNoaWxkcmVuLFxuICBpY29uID0gJycsXG4gIGlkLFxuICBuYW1lID0gJycsXG4gIGJnQ29sb3IsXG4gIG9uTWF4aW1pemUsXG4gIG9uTWluaW1pemUsXG4gIG9uQ2xvc2UsXG4gIG9uRm9jdXMsXG4gIG9uQmx1cixcbiAgdXBkYXRlUG9zaXRpb24sXG4gIHVwZGF0ZVNpemUsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgekluZGV4LFxuICBtYXhpbWl6ZWQsXG4gIGhlaWdodCA9IDAsXG4gIHdpZHRoID0gMFxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgc2Vzc2lvbjogeyBmb3JlZ3JvdW5kSWQgfVxuICB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IHdpbmRvd1JlZiA9IHVzZVJlZjxSbmQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9jdXNSZXNpemFibGVFbGVtZW50UmVmKHdpbmRvd1JlZik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxSbmRcbiAgICAgIHJlZj17d2luZG93UmVmfVxuICAgICAgZW5hYmxlVXNlclNlbGVjdEhhY2s9e2ZhbHNlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMud2luZG93fSAke21heGltaXplZCA/IHN0eWxlcy5tYXhpbWl6ZWQgOiAnJ30gJHtcbiAgICAgICAgZm9yZWdyb3VuZElkID09PSBpZCA/IHN0eWxlcy5mb3JlZ3JvdW5kIDogJydcbiAgICAgIH1gfVxuICAgICAgZHJhZ0hhbmRsZUNsYXNzTmFtZT1cImhhbmRsZVwiXG4gICAgICByZXNpemVIYW5kbGVDbGFzc2VzPXtyZXNpemVIYW5kbGVDbGFzc2VzKHN0eWxlcyl9XG4gICAgICBjYW5jZWw9XCIuY2FuY2VsXCJcbiAgICAgIHNpemU9e3tcbiAgICAgICAgaGVpZ2h0OiBtYXhpbWl6ZWQgPyAnMTAwJScgOiBoZWlnaHQsXG4gICAgICAgIHdpZHRoOiBtYXhpbWl6ZWQgPyAnMTAwJScgOiB3aWR0aFxuICAgICAgfX1cbiAgICAgIG1pbkhlaWdodD17MjUwfVxuICAgICAgbWluV2lkdGg9ezI1MH1cbiAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgIG9uRHJhZ1N0YXJ0PXtmb2N1c09uRHJhZ31cbiAgICAgIG9uRHJhZ1N0b3A9e3VwZGF0ZVBvc2l0aW9ufVxuICAgICAgb25SZXNpemVTdG9wPXt1cGRhdGVTaXplfVxuICAgICAgZW5hYmxlUmVzaXppbmc9eyFtYXhpbWl6ZWR9XG4gICAgICBkaXNhYmxlRHJhZ2dpbmc9e21heGltaXplZH1cbiAgICAgIGxvY2tBc3BlY3RSYXRpbz17bG9ja0FzcGVjdFJhdGlvfVxuICAgICAgc3R5bGU9e3sgekluZGV4IH19XG4gICAgPlxuICAgICAgPFRpdGxlQmFyXG4gICAgICAgIGljb249e2ljb259XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIG9uTWF4aW1pemU9e29uTWF4aW1pemV9XG4gICAgICAgIG9uTWluaW1pemU9e29uTWluaW1pemV9XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAvPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yIH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9SbmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/WindowManager/Window.tsx\n");

/***/ })

})