"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("./util");

var _PhotoViewer = _interopRequireDefault(require("./PhotoViewer"));

var _ImageItem = _interopRequireDefault(require("./ImageItem"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PhotoGallery =
/*#__PURE__*/
function (_Component) {
  _inherits(PhotoGallery, _Component);

  function PhotoGallery(props) {
    var _this;

    _classCallCheck(this, PhotoGallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhotoGallery).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onViewerClose", function () {
      _this.setState({
        showViewer: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function (src, w, h) {
      var srcPrefix = _this.props.srcPrefix;
      var imageSet = _this.state.imageSet;
      imageSet[src] = {
        src: (0, _util.combineUrlPath)(srcPrefix, src),
        w: w,
        h: h
      };

      _this.setState({
        imageSet: imageSet
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageClick", function (src) {
      var photos = _this.props.photos;

      _this.setState({
        showViewer: true,
        index: photos.indexOf(src)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getThumbBoundsFn", function (index) {
      var src = (_this.props.photos || [])[index];
      var ele = _this.imagesEl[src];
      if (!ele) return undefined;
      var rect = ele.getBoundingClientRect() || {};
      var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
      return {
        x: rect.left,
        y: rect.top + pageYScroll,
        w: rect.width
      };
    });

    _this.state = {
      showViewer: false,
      index: 0,
      imageSet: {}
    };
    _this.imagesEl = {};
    return _this;
  }

  _createClass(PhotoGallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          photos = _this$props.photos,
          _this$props$direction = _this$props.direction,
          direction = _this$props$direction === void 0 ? 'row' : _this$props$direction,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 64 : _this$props$size,
          width = _this$props.width,
          height = _this$props.height,
          margin = _this$props.margin,
          srcPrefix = _this$props.srcPrefix,
          imagePlaceholder = _this$props.imagePlaceholder,
          itemClass = _this$props.itemClass,
          radius = _this$props.radius,
          expandAnimate = _this$props.expandAnimate;
      var _this$state = this.state,
          showViewer = _this$state.showViewer,
          index = _this$state.index,
          imageSet = _this$state.imageSet;
      var cls = (0, _classnames.default)({
        'rpg-photo-gallery': true,
        'rpg-row': direction === 'row',
        'rpg-column': direction === 'column'
      }); // 利用负值边距移除溢出的高度和宽度

      var style = {};
      var innerStyle = {};

      if (margin) {
        style.margin = -margin / 2;
        innerStyle.margin = margin / 2;
      } // 计算当前图册数据


      var gallery = (photos || []).map(function (src) {
        return imageSet[src];
      });
      var getThumbBoundsFn = expandAnimate ? this.getThumbBoundsFn : undefined;
      return _react.default.createElement("div", {
        className: "rpg-photo-gallery-wrapper"
      }, _react.default.createElement("div", {
        className: cls,
        style: style
      }, (photos || []).map(function (src) {
        return _react.default.createElement(_ImageItem.default, {
          getItemRef: function getItemRef(ref) {
            _this2.imagesEl[src] = ref;
          },
          key: src,
          src: src,
          srcPrefix: srcPrefix,
          size: size,
          width: width,
          height: height,
          style: innerStyle,
          onLoad: _this2.handleImageLoad,
          onClick: _this2.handleImageClick,
          imagePlaceholder: imagePlaceholder,
          className: itemClass,
          radius: radius
        });
      })), showViewer && _react.default.createElement(_PhotoViewer.default, {
        options: {
          index: index,
          getThumbBoundsFn: getThumbBoundsFn
        },
        items: gallery,
        onClose: this.onViewerClose
      }));
    }
  }]);

  return PhotoGallery;
}(_react.Component);

exports.default = PhotoGallery;
PhotoGallery.defaultProps = {
  photos: [],
  direction: 'row',
  size: 64,
  margin: undefined,
  srcPrefix: undefined,
  imagePlaceholder: undefined
};