"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemeContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _ThemeProvider = _interopRequireDefault(require("@material-ui/styles/ThemeProvider"));

var _orange = _interopRequireDefault(require("@material-ui/core/colors/orange"));

var _purple = _interopRequireDefault(require("@material-ui/core/colors/purple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function createTheme(light) {
  var theme = {
    palette: {
      type: light ? 'light' : 'dark',
      primary: {
        // light: será calculada com base em palette.primary.main,
        main: '#b0f82d',
        // dark: será calculada com base em palette.primary.main,
        // contrastText: será calculada para contrastar com palette.primary.main
      },
      secondary: {
        light: '#b0f82d',
        main: '#b0f82d',
        // dark: será calculada com base palette.secondary.main,
        contrastText: '#ffcc00',
      },
      grey: {
        main: '#e3e3e3',
      },
    }
  };
  return (0, _styles.createMuiTheme)(theme);
}

var ThemeContext = (0, _react.createContext)({});
exports.ThemeContext = ThemeContext;

function ThemeProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(createTheme(true)),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var setThemeType = (0, _react.useCallback)(function (type) {
    setTheme(createTheme(type === 'light'));
  }, [setTheme]);
  return /*#__PURE__*/_react["default"].createElement(_ThemeProvider["default"], {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      setThemeType: setThemeType
    }
  }, children));
}

var _default = ThemeProvider;
exports["default"] = _default;
