"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireDefault(require("./utils"));

var _dateUtils = require("./dateUtils");

var _styles = require("@material-ui/styles");

var _Circle = _interopRequireDefault(require("./Circle"));

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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 34,
      marginBottom: theme.spacing(2)
    },
    day: {
      margin: "0 ".concat(theme.spacing(1), "px")
    },
    blank: {
      width: 36,
      height: 36,
      margin: "0 ".concat(theme.spacing(1), "px")
    }
  };
};

var Week = /*#__PURE__*/function (_Component) {
  _inherits(Week, _Component);

  var _super = _createSuper(Week);

  function Week() {
    var _this;

    _classCallCheck(this, Week);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (day) {
      if (!_this.isDisabled(day)) _this.props.onSelect(day);
    });

    _defineProperty(_assertThisInitialized(_this), "isDisabled", function (day) {
      if (_this.props.readOnly) return true;
      var minDate = _this.props.minDate;
      var maxDate = _this.props.maxDate;
      return minDate && _utils["default"].isBefore(day, minDate) || maxDate && _utils["default"].isAfter(day, maxDate);
    });

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (day) {
      return _this.props.selectedDates && _utils["default"].dateIn(_this.props.selectedDates, day);
    });

    return _this;
  }

  _createClass(Week, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var dateInNumberic = new _dateUtils.dateTimeFormat('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      });
      var dateToday = dateInNumberic.format(new Date());
      var dayInNumeric = new _dateUtils.dateTimeFormat('en-US', {
        day: 'numeric'
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.root
      }, this.props.week.map(function (day, i) {
        if (day) {
          var isToday = day && dateToday === dateInNumberic.format(day);

          var isDisabled = _this2.isDisabled(day);

          var isSelected = _this2.isSelected(day);

          return /*#__PURE__*/_react["default"].createElement(_Circle["default"], {
            key: "day-".concat(day),
            label: dayInNumeric.format(day),
            disabled: isDisabled,
            checked: isSelected,
            onCheck: function onCheck(e) {
              _this2.onSelect(day);
            },
            isToday: isToday,
            className: classes.day
          }); // return (
          //   <DayButton
          //     key={`day-${day}`}
          //     onClick={e => {
          //       e.preventDefault()
          //       this.onSelect(day)
          //     }}
          //     disabled={isDisabled}
          //     selected={isSelected}
          //   >
          //     <DayBackdrop selected={isSelected} />
          //     <Day selected={isSelected} disabled={isDisabled} today={isToday}>
          //       {dayInNumeric.format(day)}
          //     </Day>
          //   </DayButton>
          // )
        }

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.blank,
          key: "blank-".concat(i)
        });
      }));
    }
  }]);

  return Week;
}(_react.Component);

var _default = (0, _styles.withStyles)(styles)(Week);

exports["default"] = _default;