"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useCircleStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(0, 0, 0, 0)' // marginLeft: theme.spacing(1.5)

    },
    rootText: {
      color: theme.palette.text.primary
    },
    rootTextDisabled: {
      color: theme.palette.text.disabled
    },
    todayRoot: {
      background: theme.palette.background["default"]
    },
    checkedRoot: {
      background: "#02E2BD"
    },
    checkedRootDisabled: {
      background: "#faaa"
    },
    checkedText: {
      color: theme.palette.type === 'dark' ? theme.palette.getContrastText(theme.palette.primary.main) : "#2C3033"
    },
    text: {
      textAlign: 'center'
    }
  };
});

var Circle = function Circle(_ref) {
  var _classNames;

  var label = _ref.label,
    disabled = _ref.disabled,
    checked = _ref.checked,
    onCheck = _ref.onCheck,
    className = _ref.className,
    isToday = _ref.isToday;
  var classes = useCircleStyles();
  var theme = (0, _core.useTheme)();
  var handleClick = (0, _react.useCallback)(function () {
    if (!disabled) {
      onCheck(!checked);
    }
  }, [onCheck, disabled, checked]);
  return /*#__PURE__*/_react["default"].createElement(_core.ButtonBase, {
    className: (0, _classnames["default"])(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.rootText, !checked && !disabled), _defineProperty(_classNames, classes.todayRoot, isToday), _defineProperty(_classNames, classes.rootTextDisabled, disabled), _defineProperty(_classNames, classes.checkedRoot, checked && !disabled), _defineProperty(_classNames, classes.checkedRootDisabled, checked && disabled), _classNames), className),
    disabled: disabled,
    onClick: handleClick,
    style: _objectSpread({}, disabled ? {
      background: "#fff",
      fontWeight: 200
    } : {})
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    color: "inherit",
    variant: "body1",
    className: (0, _classnames["default"])(classes.text, _defineProperty({}, classes.checkedText, checked))
  }, label));
};

Circle.propTypes = {
  classes: _propTypes["default"].object,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
  disabled: _propTypes["default"].bool,
  checked: _propTypes["default"].bool.isRequired,
  onCheck: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string
};
var _default = Circle;
exports["default"] = _default;
