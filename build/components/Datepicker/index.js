"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = _interopRequireDefault(require("./utils"));

var _Calendar = _interopRequireDefault(require("./Calendar"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/styles");

var _ThemeProvider = _interopRequireDefault(require("./ThemeProvider"));


var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    dialogPaper: {
      minHeight: 482,
      maxHeight: 482,
      display: 'flex'
    }
  };
});

function initState(_ref) {
  var selectedDates = _ref.selectedDates,
    minDate = _ref.minDate,
    maxDate = _ref.maxDate;
  return {
    selectedDates: selectedDates ? _toConsumableArray(selectedDates) : [],
    minDate: minDate ? minDate : null,
    maxDate: maxDate ? maxDate : null
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'setSelectedDates':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedDates: action.payload
      });

    case 'setMinDate':
      return _objectSpread(_objectSpread({}, state), {}, {
        minDate: action.payload
      });

    case 'setMaxDate':
      return _objectSpread(_objectSpread({}, state), {}, {
        maxDate: action.payload
      });

    default:
      return new Error('wrong action type in multiple date picker reducer');
  }
}

var DatePicker = function DatePicker(_ref2) {
  var open = _ref2.open,
    initMinDate = _ref2.minDate,
    initMaxDate = _ref2.maxDate,
    readOnly = _ref2.readOnly,
    onCancel = _ref2.onCancel,
    onSubmit = _ref2.onSubmit,
    limit = _ref2.limit,
    onLimit = _ref2.onLimit,
    rangeMin = _ref2.rangeMin,
    onRangeMin = _ref2.onRangeMin,
    limitPerWeek = _ref2.limitPerWeek,
    onLimitPerWeek = _ref2.onLimitPerWeek,
    outerSelectedDates = _ref2.selectedDates,
    cancelButtonText = _ref2.cancelButtonText,
    _ref2$submitButtonTex = _ref2.submitButtonText,
    submitButtonText = _ref2$submitButtonTex === void 0 ? 'Submit' : _ref2$submitButtonTex,
    _ref2$selectedDatesTi = _ref2.selectedDatesTitle,
    selectedDatesTitle = _ref2$selectedDatesTi === void 0 ? 'Selected Dates' : _ref2$selectedDatesTi;

  if (cancelButtonText == null) {
    cancelButtonText = readOnly ? 'Dismiss' : 'Cancel';
  }

  var _useReducer = (0, _react.useReducer)(reducer, {
    selectedDates: outerSelectedDates,
    minDate: initMinDate,
    maxDate: initMaxDate
  }, initState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    selectedDates = _useReducer2$.selectedDates,
    minDate = _useReducer2$.minDate,
    maxDate = _useReducer2$.maxDate,
    dispatch = _useReducer2[1];

  var classes = useStyles();
  var onSelect = (0, _react.useCallback)(function (day) {
    if (readOnly) return;

    if (_utils["default"].dateIn(selectedDates, day)) {
      dispatch({
        type: 'setSelectedDates',
        payload: selectedDates.filter(function (date) {
          return !_utils["default"].isSameDay(date, day);
        })
      });
    } else {
      if (selectedDates.length < limit) {
        var count = 0;
        selectedDates.map(item => {
           if((0, _moment["default"])(item).week() === (0, _moment["default"])(day).week()){
             count++;
           }
        })
        if(count < limitPerWeek){
          var rangeValidate = true;
          selectedDates.map(item => {
            // if((0, _moment["default"])(item).week() === (0, _moment["default"])(day).week()){
              const range = new Date(item).getDate() - new Date(day).getDate()
              if(Math.abs(range) < rangeMin)
                rangeValidate = false;
            // }
          })
          if(rangeValidate){
            dispatch({
              type: 'setSelectedDates',
              payload: [].concat(_toConsumableArray(selectedDates), [day])
            });
          } else {
            onRangeMin();
          }
          
        } else {
          onLimitPerWeek()
        }
       
      } else {
        onLimit()
      }
    }
  }, [selectedDates, dispatch, readOnly]);
  var onRemoveAtIndex = (0, _react.useCallback)(function (index) {
    if (readOnly) return;

    var newDates = _toConsumableArray(selectedDates);

    if (index > -1) {
      newDates.splice(index, 1);
    }

    dispatch({
      type: 'setSelectedDates',
      payload: newDates
    });
  }, [selectedDates, dispatch, readOnly]);
  var dismiss = (0, _react.useCallback)(function () {
    dispatch({
      type: 'setSelectedDates',
      payload: []
    });
    onCancel();
  }, [dispatch, onCancel]);
  var handleCancel = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    dismiss();
  }, [dismiss]);
  var handleOk = (0, _react.useCallback)(function (e) {
    e.preventDefault();
    if (readOnly) return;
    onSubmit(selectedDates);
  }, [onSubmit, selectedDates, readOnly]);
  (0, _react.useEffect)(function () {
    if (open) {
      dispatch({
        type: 'setSelectedDates',
        payload: outerSelectedDates != null ? outerSelectedDates : []
      });
    }
  }, [open, outerSelectedDates]);
  return /*#__PURE__*/_react["default"].createElement(_ThemeProvider["default"], null, /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: open,
    classes: {
      paper: classes.dialogPaper
    }
  }, /*#__PURE__*/_react["default"].createElement(_Calendar["default"], {
    selectedDates: selectedDates,
    onSelect: onSelect,
    onRemoveAtIndex: onRemoveAtIndex,
    minDate: minDate,
    maxDate: maxDate,
    onCancel: handleCancel,
    onOk: handleOk,
    readOnly: readOnly,
    cancelButtonText: cancelButtonText,
    submitButtonText: submitButtonText,
    selectedDatesTitle: selectedDatesTitle
  })));
};

DatePicker.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  minDate: _propTypes["default"].instanceOf(Date),
  maxDate: _propTypes["default"].instanceOf(Date),
  readOnly: _propTypes["default"].bool,
  onCancel: _propTypes["default"].func.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  selectedDates: _propTypes["default"].array,
  cancelButtonText: _propTypes["default"].string,
  submitButtonText: _propTypes["default"].string,
  selectedDatesTitle: _propTypes["default"].string
};
var _default = DatePicker;
exports["default"] = _default;
