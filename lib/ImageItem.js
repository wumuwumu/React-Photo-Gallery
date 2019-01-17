'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageItem = function (_Component) {
    (0, _inherits3.default)(ImageItem, _Component);

    function ImageItem(props) {
        (0, _classCallCheck3.default)(this, ImageItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ImageItem.__proto__ || (0, _getPrototypeOf2.default)(ImageItem)).call(this, props));

        _this.onImageLoad = function (e) {
            var _this$props = _this.props,
                src = _this$props.src,
                onLoad = _this$props.onLoad;

            var height = e.target.naturalHeight;
            var width = e.target.naturalWidth;

            _this.setState({ image: _this.props.src });
            typeof onLoad === 'function' && onLoad(src, width, height);
        };

        _this.handleClick = function () {
            var _this$props2 = _this.props,
                src = _this$props2.src,
                onClick = _this$props2.onClick;

            typeof onClick === 'function' && onClick(src);
        };

        _this.imageHandler = new Image();
        _this.imageHandler.addEventListener('load', _this.onImageLoad);
        _this.state = { image: null };
        return _this;
    }

    (0, _createClass3.default)(ImageItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.imageHandler.src = this.props.src;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.imageHandler.removeEventListener('load', this.onImageLoad);
            this.imageHandler = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                src = _props.src,
                size = _props.size,
                style = _props.style,
                srcPrefix = _props.srcPrefix;
            var image = this.state.image;


            if (!image) {
                return _react2.default.createElement('div', { className: 'rpg-image-item-wrapper', style: { width: size, height: size } });
            }

            var srcFix = srcPrefix ? srcPrefix : '';
            var customStyle = (0, _extends3.default)({
                width: size,
                height: size,
                backgroundImage: 'url(' + srcFix + src + ')'
            }, style);

            return _react2.default.createElement('div', {
                className: 'rpg-image-item-wrapper',
                style: customStyle,
                onClick: this.handleClick
            });
        }
    }]);
    return ImageItem;
}(_react.Component);

exports.default = ImageItem;


ImageItem.propTypes = {
    /**
     * 图片资源
     */
    src: _propTypes2.default.string,
    /**
     * 图片资源地址前缀，常见于OSS
     */
    srcPrefix: _propTypes2.default.string,
    /**
     * 图片加载完成的触发事件： (src, width, height) => void
     */
    onLoad: _propTypes2.default.func,
    /**
     * 点击图片时触发事件： (src) => void
     */
    onClick: _propTypes2.default.func
};
ImageItem.defaultProps = {
    src: undefined,
    srcPrefix: undefined,
    onLoad: undefined,
    onClick: undefined
};