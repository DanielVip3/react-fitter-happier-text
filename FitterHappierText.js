'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var FitterHappierText = (function (_React$Component) {
  _inherits(FitterHappierText, _React$Component);

  function FitterHappierText() {
    _classCallCheck(this, FitterHappierText);

    _get(Object.getPrototypeOf(FitterHappierText.prototype), 'constructor', this).call(this);
    this.resize = (0, _lodash.debounce)(this.resize.bind(this));
    this.state = {
      width: 256,
      height: 24
    };
  }

  _createClass(FitterHappierText, [{
    key: 'resize',
    value: function resize() {
      var el = this.refs.text;
      var state = this.state;
      var width = el.offsetWidth || el.getComputedTextLength();
      var height = el.offsetHeight | 24;
      if (state.width !== width || state.height !== height) {
        this.setState({
          width: width,
          height: height
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resize();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.resize();
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = {
        svg: {
          width: '100%',
          maxHeight: '100%',
          fill: 'currentcolor',
          overflow: 'visible'
        },
        text: {
          fontFamily: 'inherit',
          fontSize: '1rem',
          fontWeight: 'inherit',
          textAnchor: 'middle'
        }
      };
      var viewBox = [0, 0, this.state.width, this.state.height].join(' ');

      return _react2['default'].createElement(
        'svg',
        _extends({}, this.props, {
          viewBox: viewBox,
          style: styles.svg }),
        _react2['default'].createElement(
          'text',
          {
            ref: 'text',
            x: '50%',
            y: this.props.baseline,
            style: styles.text },
          this.props.text
        )
      );
    }
  }]);

  return FitterHappierText;
})(_react2['default'].Component);

FitterHappierText.defaultProps = {
  baseline: 16,
  paddingY: 0
};

exports['default'] = FitterHappierText;
module.exports = exports['default'];
