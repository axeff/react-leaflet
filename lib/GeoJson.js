'use strict';

exports.__esModule = true;

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _leaflet = require('leaflet');

var _react = require('react');

var _Path2 = require('./Path');

var _Path3 = _interopRequireDefault(_Path2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var GeoJson = function (_Path) {
  _inherits(GeoJson, _Path);

  function GeoJson() {
    _classCallCheck(this, GeoJson);

    return _possibleConstructorReturn(this, _Path.apply(this, arguments));
  }

  GeoJson.prototype.componentWillMount = function componentWillMount() {
    _Path.prototype.componentWillMount.call(this);

    var _props = this.props,
        data = _props.data,
        props = _objectWithoutProperties(_props, ['data']);

    this.leafletElement = (0, _leaflet.geoJson)(data, props);
  };

  GeoJson.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if ((0, _isFunction3.default)(this.props.style)) {
      this.setStyle(this.props.style);
    } else {
      this.setStyleIfChanged(prevProps, this.props);
    }
  };

  return GeoJson;
}(_Path3.default);

GeoJson.propTypes = {
  data: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]).isRequired
};
exports.default = GeoJson;