"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: {
      width: theme.spacing(30),
      backgroundColor: theme.palette.background["default"],
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      margin: theme.spacing(2),
      // width: '100%',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-between'
    },
    list: {
      flex: '1',
      overflowY: 'auto'
    }
  };
};

var DateDisplay = /*#__PURE__*/function (_Component) {
  _inherits(DateDisplay, _Component);

  var _super = _createSuper(DateDisplay);

  function DateDisplay() {
    var _this;

    _classCallCheck(this, DateDisplay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedYear: false
    });

    _defineProperty(_assertThisInitialized(_this), "getFormatedDate", function (date) {
      // const dateTime = new dateTimeFormat('en-US', {
      //   year: 'numeric',
      //   month: 'short',
      //   day: '2-digit'
      // }).format(date)
      // return `${dateTime}`
      return (0, _moment["default"])(date).format('ll');
    });

    _defineProperty(_assertThisInitialized(_this), "removeDateAtIndex", function (index) {
      return function () {
        _this.props.onRemoveAtIndex(index);
      };
    });

    return _this;
  }

  _createClass(DateDisplay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.monthDaySelected) {
        this.setState({
          selectedYear: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          selectedDates = _this$props.selectedDates,
          readOnly = _this$props.readOnly;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.header
      }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "subtitle1"
      }, this.props.selectedDatesTitle), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        variant: "subtitle1",
        color: readOnly ? 'textSecondary' : 'primary'
      }, selectedDates.length)), /*#__PURE__*/_react["default"].createElement(_core.List, {
        dense: true,
        className: classes.list
      }, selectedDates.map(function (date, index) {
        return /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
          key: "".concat(date.toString()),
          button: readOnly,
          disabled: readOnly,
          onClick: _this2.removeDateAtIndex(index)
        }, /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
          primary: _this2.getFormatedDate(date)
        }), !readOnly && /*#__PURE__*/_react["default"].createElement(_Clear["default"], {
          color: "error"
        }));
      })));
    }
  }]);

  return DateDisplay;
}(_react.Component);

var _default = (0, _core.withStyles)(styles)(DateDisplay);

exports["default"] = _default;