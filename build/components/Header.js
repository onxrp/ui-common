"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header() {
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      flexGrow: 1
    },
    borderBottom: "4px solid #a100b9"
  }, /*#__PURE__*/_react["default"].createElement(_material.AppBar, {
    position: "static" // @ts-ignore
    ,
    color: "white"
  }, /*#__PURE__*/_react["default"].createElement(_material.Container, null, /*#__PURE__*/_react["default"].createElement(_material.Toolbar, {
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      flexGrow: 1
    },
    textAlign: "left"
  }, /*#__PURE__*/_react["default"].createElement(_material.Link, {
    href: "https://onxrp.com/"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/assets/images/logo.png",
    style: {
      maxWidth: '150px'
    },
    alt: "onXRP"
  }))), /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Link, {
    href: "https://onxrp.com/"
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    color: "primary",
    variant: "contained"
  }, "Back to Home"))))))));
};

var _default = Header;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwidGhlbWUiLCJmbGV4R3JvdyIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBU0E7Ozs7QUFFQSxJQUFNQSxNQUFxQixHQUFHLFNBQXhCQSxNQUF3QixHQUFNO0FBQ25DLE1BQU1DLEtBQUssR0FBRyx5QkFBZDtBQUNBLHNCQUNDLCtFQUNDLGdDQUFDLGFBQUQ7QUFBSyxJQUFBLEVBQUUsRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUU7QUFBWixLQUFUO0FBQTBCLElBQUEsWUFBWTtBQUF0QyxrQkFDQyxnQ0FBQyxnQkFBRDtBQUFRLElBQUEsUUFBUSxFQUFDLFFBQWpCLENBQ0M7QUFERDtBQUVDLElBQUEsS0FBSyxFQUFDO0FBRlAsa0JBR0MsZ0NBQUMsbUJBQUQscUJBQ0MsZ0NBQUMsaUJBQUQ7QUFBUyxJQUFBLGNBQWMsRUFBRTtBQUF6QixrQkFDQyxnQ0FBQyxhQUFEO0FBQUssSUFBQSxFQUFFLEVBQUU7QUFBRUEsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBVDtBQUEwQixJQUFBLFNBQVMsRUFBQztBQUFwQyxrQkFDQyxnQ0FBQyxjQUFEO0FBQVMsSUFBQSxJQUFJLEVBQUM7QUFBZCxrQkFDQztBQUNDLElBQUEsR0FBRyxFQUFDLHlCQURMO0FBRUMsSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FGUjtBQUdDLElBQUEsR0FBRyxFQUFDO0FBSEwsSUFERCxDQURELENBREQsZUFVQyxnQ0FBQyxhQUFELHFCQUNDLGdDQUFDLGNBQUQ7QUFBUyxJQUFBLElBQUksRUFBQztBQUFkLGtCQUNDLGdDQUFDLGdCQUFEO0FBQVEsSUFBQSxLQUFLLEVBQUMsU0FBZDtBQUF3QixJQUFBLE9BQU8sRUFBQztBQUFoQyxvQkFERCxDQURELENBVkQsQ0FERCxDQUhELENBREQsQ0FERCxDQUREO0FBOEJBLENBaENEOztlQWtDZUgsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Qm94LFxyXG5cdEFwcEJhcixcclxuXHRUb29sYmFyLFxyXG5cdHVzZVRoZW1lLFxyXG5cdENvbnRhaW5lcixcclxuXHRMaW5rIGFzIE11aUxpbmssXHJcblx0QnV0dG9uLFxyXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8YW55PiA9ICgpID0+IHtcclxuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEJveCBzeD17eyBmbGV4R3JvdzogMSB9fSBib3JkZXJCb3R0b209e2A0cHggc29saWQgI2ExMDBiOWB9PlxyXG5cdFx0XHRcdDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIlxyXG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRcdFx0Y29sb3I9XCJ3aGl0ZVwiPlxyXG5cdFx0XHRcdFx0PENvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM9e3RydWV9PlxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggc3g9e3sgZmxleEdyb3c6IDEgfX0gdGV4dEFsaWduPVwibGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE11aUxpbmsgaHJlZj1cImh0dHBzOi8vb254cnAuY29tL1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1heFdpZHRoOiAnMTUwcHgnIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwib25YUlBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NdWlMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TXVpTGluayBocmVmPVwiaHR0cHM6Ly9vbnhycC5jb20vXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEJhY2sgdG8gSG9tZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTXVpTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxyXG5cdFx0XHRcdFx0PC9Db250YWluZXI+XHJcblx0XHRcdFx0PC9BcHBCYXI+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19