(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["push-notification"],{

/***/ "./App/Components/Elements/Notifications/notification-bar.jsx":
/*!********************************************************************!*\
  !*** ./App/Components/Elements/Notifications/notification-bar.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ \"../node_modules/react-transition-group/index.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var deriv_components_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deriv-components/lib/icon */ \"../../components/lib/icon.js\");\n/* harmony import */ var deriv_components_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_icon__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var deriv_components_lib_icon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! deriv-components/lib/icon.css */ \"../../components/lib/icon.css\");\n/* harmony import */ var deriv_components_lib_icon_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_icon_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n        \n\nvar NotificationBar =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(NotificationBar, _React$Component);\n\n  function NotificationBar() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, NotificationBar);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NotificationBar)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    _this.state = {};\n\n    _this.onClose = function () {\n      _this.setState({\n        show: false\n      }, function () {\n        clearTimeout(_this.timer);\n      });\n    };\n\n    return _this;\n  }\n\n  _createClass(NotificationBar, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      if (!this.state.show) {\n        this.timer = setTimeout(function () {\n          _this2.setState({\n            show: true\n          });\n        }, this.props.autoShow || 500);\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearTimeout(this.timer);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _this$props = this.props,\n          className = _this$props.className,\n          content = _this$props.content,\n          duration = _this$props.duration,\n          has_content_close = _this$props.has_content_close,\n          type = _this$props.type;\n      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__[\"CSSTransition\"], {\n        \"in\": this.state.show,\n        timeout: duration || 500,\n        classNames: {\n          enterDone: 'notification-bar--is-active'\n        },\n        unmountOnExit: true\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('notification-bar', {\n          'notification-bar--info': type === 'info',\n          className: className\n        })\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        className: \"notification-bar__message\"\n      }, has_content_close ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(content, function (child) {\n        return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {\n          onClose: _this3.onClose.bind(_this3)\n        });\n      }) : content), !has_content_close && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n        onClick: this.onClose.bind(this),\n        className: \"notification-bar__button\"\n      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(deriv_components_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        icon: \"IcCross\",\n        className: \"notification-bar__icon\"\n      }))));\n    }\n  }]);\n\n  return NotificationBar;\n}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);\n\nNotificationBar.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),\n  has_content_close: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29tcG9uZW50cy9FbGVtZW50cy9Ob3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi1iYXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbXBvbmVudHMvRWxlbWVudHMvTm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24tYmFyLmpzeD84ZGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzICAgICAgICBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgICAgICAgICBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCAgICAgICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgeyBJY29uIH0gICAgICAgICAgZnJvbSAnZGVyaXYtY29tcG9uZW50cyc7XG5cbmNsYXNzIE5vdGlmaWNhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7fTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2hvdykge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xuICAgICAgICAgICAgfSwgdGhpcy5wcm9wcy5hdXRvU2hvdyB8fCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBoYXNfY29udGVudF9jbG9zZSxcbiAgICAgICAgICAgIHR5cGUsIC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBkaWZmZXJlbnQgdHlwZSBvZiBub3RpZmljYXRpb25zXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIGluPXt0aGlzLnN0YXRlLnNob3d9XG4gICAgICAgICAgICAgICAgdGltZW91dD17ZHVyYXRpb24gfHwgNTAwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgZW50ZXJEb25lOiAnbm90aWZpY2F0aW9uLWJhci0taXMtYWN0aXZlJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbm90aWZpY2F0aW9uLWJhcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdub3RpZmljYXRpb24tYmFyLS1pbmZvJzogdHlwZSA9PT0gJ2luZm8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub3RpZmljYXRpb24tYmFyX19tZXNzYWdlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNfY29udGVudF9jbG9zZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChjb250ZW50LCBjaGlsZCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IG9uQ2xvc2U6IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7ICFoYXNfY29udGVudF9jbG9zZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbG9zZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbm90aWZpY2F0aW9uLWJhcl9fYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249J0ljQ3Jvc3MnIGNsYXNzTmFtZT0nbm90aWZpY2F0aW9uLWJhcl9faWNvbicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Ob3RpZmljYXRpb25CYXIucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50ICA6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pLFxuICAgIGhhc19jb250ZW50X2Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0eXBlICAgICAgICAgICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvbkJhcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFoQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQVFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBREE7QUFRQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFNQTs7OztBQWpFQTtBQUNBO0FBbUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFQQTtBQVVBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Components/Elements/Notifications/notification-bar.jsx\n");

/***/ }),

/***/ "./App/Containers/push-notification.jsx":
/*!**********************************************!*\
  !*** ./App/Containers/push-notification.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var _Components_Elements_Notifications_notification_bar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Elements/Notifications/notification-bar.jsx */ \"./App/Components/Elements/Notifications/notification-bar.jsx\");\n\n\n\n\n\nvar PushNotification = function PushNotification(_ref) {\n  var push_notifications = _ref.push_notifications;\n  return push_notifications.map(function (notification, idx) {\n    var autoShow = notification.autoShow,\n        content = notification.content,\n        duration = notification.duration,\n        type = notification.type;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Elements_Notifications_notification_bar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: idx,\n      autoShow: autoShow,\n      content: content,\n      duration: duration,\n      type: type || 'info',\n      has_content_close: true\n    });\n  });\n};\n\nPushNotification.propTypes = {\n  push_notifications: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(function (_ref2) {\n  var ui = _ref2.ui;\n  return {\n    push_notifications: ui.push_notifications\n  };\n})(PushNotification));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9wdXNoLW5vdGlmaWNhdGlvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9wdXNoLW5vdGlmaWNhdGlvbi5qc3g/OTFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzICAgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICAgICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gICAgIGZyb20gJ1N0b3Jlcy9jb25uZWN0JztcbmltcG9ydCBOb3RpZmljYXRpb25CYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9FbGVtZW50cy9Ob3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi1iYXIuanN4JztcblxuY29uc3QgUHVzaE5vdGlmaWNhdGlvbiA9ICh7XG4gICAgcHVzaF9ub3RpZmljYXRpb25zLFxufSkgPT4gKFxuICAgIHB1c2hfbm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbiwgaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXV0b1Nob3csIGNvbnRlbnQsIGR1cmF0aW9uLCB0eXBlIH0gPSBub3RpZmljYXRpb247XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uQmFyXG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgYXV0b1Nob3c9e2F1dG9TaG93fVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9ufVxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGUgfHwgJ2luZm8nfVxuICAgICAgICAgICAgICAgIGhhc19jb250ZW50X2Nsb3NlPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9KVxuKTtcblxuUHVzaE5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgPSB7XG4gICAgcHVzaF9ub3RpZmljYXRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgICh7IHVpIH0pID0+ICh7XG4gICAgICAgIHB1c2hfbm90aWZpY2F0aW9uczogdWkucHVzaF9ub3RpZmljYXRpb25zLFxuICAgIH0pXG4pKFB1c2hOb3RpZmljYXRpb24pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/push-notification.jsx\n");

/***/ })

}]);