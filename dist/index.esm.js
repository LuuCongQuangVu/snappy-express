import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon, { LoadingOutlined, CommentOutlined, RetweetOutlined } from '@ant-design/icons';
import { AiFillEdit, AiFillDelete, AiFillYoutube, AiFillAudio, AiFillCustomerService, AiOutlinePlus, AiFillApi, AiFillSetting } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { IoImageSharp } from 'react-icons/io5';

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SnyStatus = /*#__PURE__*/function (_Component) {
  _inherits(SnyStatus, _Component);

  var _super = _createSuper$1(SnyStatus);

  function SnyStatus() {
    _classCallCheck(this, SnyStatus);

    return _super.apply(this, arguments);
  }

  _createClass(SnyStatus, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          statusArray = _this$props.statusArray,
          status_vi = _this$props.status_vi,
          type = _this$props.type,
          label = _this$props.label,
          children = _this$props.children;
          _this$props.tooltip;
          _this$props.badge;
          var style = _this$props.style,
          className = _this$props.className;
      var checkStatus = statusArray.find(function (item) {
        return item.array.includes(status);
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "sny-status ".concat(status && 'w-148', " ").concat(type, " ").concat(checkStatus && (checkStatus === null || checkStatus === void 0 ? void 0 : checkStatus.color), " ").concat(className),
        style: style
      }, label || children || status_vi);
    }
  }]);

  return SnyStatus;
}(Component);
SnyStatus.propTypes = {
  statusArray: PropTypes.array,
  status: PropTypes.string,
  status_vi: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  tooltip: PropTypes.object,
  badge: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string
};
SnyStatus.defaultProps = {
  statusArray: [{
    array: ['request_received', 'waiting_for_return', 'returning', 'part_delivery'],
    color: 'orange'
  }, {
    array: ['processing_picked_up', 'out_for_delivery', 'picked_up'],
    color: 'blue'
  }, {
    array: ['import_picking_warehouse', 'on_the_way', 'import_returning_warehouse', 'returned'],
    color: 'cyan'
  }, {
    array: ['picked_up_fail', 'undeliverable', 'return_fail', 'canceled'],
    color: 'red'
  }, {
    array: ['processing_on_the_way', 'on_the_way_returning'],
    color: 'purple'
  }, {
    array: ['delivered'],
    color: 'green'
  }],
  status: undefined,
  status_vi: 'SnappyExpress',
  type: '',
  label: undefined,
  children: undefined,
  tooltip: {},
  badge: {},
  style: {},
  className: ''
};

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SnyButton = /*#__PURE__*/function (_Component) {
  _inherits(SnyButton, _Component);

  var _super = _createSuper(SnyButton);

  function SnyButton(props) {
    _classCallCheck(this, SnyButton);

    return _super.call(this, props);
  }

  _createClass(SnyButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          type = _this$props.type,
          size = _this$props.size,
          style = _this$props.style,
          children = _this$props.children,
          icon = _this$props.icon,
          loading = _this$props.loading,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled,
          className = _this$props.className,
          suffixIcon = _this$props.suffixIcon,
          shape = _this$props.shape,
          iconButton = _this$props.iconButton,
          template = _this$props.template;
      if (shape === 'circle' || template) return /*#__PURE__*/React.createElement("div", {
        onClick: !disabled && onClick || function (e) {
          return e.isDefaultPrevented();
        },
        className: "sny-button circle ".concat(size, " ").concat(template, " ").concat(disabled && 'disabled' || type, " ").concat(className),
        style: style
      }, loading && /*#__PURE__*/React.createElement(LoadingOutlined, null) || template && /*#__PURE__*/React.createElement(Icon, {
        component: template === 'edit' && AiFillEdit || template === 'delete' && AiFillDelete || template === 'view' && BsFillEyeFill || template === 'message' && CommentOutlined || template === 'video' && AiFillYoutube || template === 'audio' && AiFillAudio || template === 'image' && IoImageSharp || template === 'retweet' && RetweetOutlined || template === 'service' && AiFillCustomerService || template === 'plus' && AiOutlinePlus || template === 'api' && AiFillApi || template === 'setting' && AiFillSetting
      }) || icon);
      return /*#__PURE__*/React.createElement("div", {
        onClick: !disabled && onClick || function (e) {
          return e.isDefaultPrevented();
        },
        className: "sny-button ".concat(iconButton && 'icon-button', " ").concat(disabled && 'disabled' || type, " ").concat(size, " ").concat(className),
        style: style
      }, icon && /*#__PURE__*/React.createElement("div", null, loading && /*#__PURE__*/React.createElement(LoadingOutlined, null) || icon), !iconButton && /*#__PURE__*/React.createElement("div", {
        className: icon && 'ml-8' || ''
      }, children || label), suffixIcon && /*#__PURE__*/React.createElement("div", {
        className: "ml-8"
      }, suffixIcon));
    }
  }]);

  return SnyButton;
}(Component);
SnyButton.propTypes = {
  label: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  suffixIcon: PropTypes.node,
  shape: PropTypes.string,
  badge: PropTypes.object,
  iconButton: PropTypes.bool,
  tooltip: PropTypes.object,
  template: PropTypes.string
};
SnyButton.defaultProps = {
  label: 'SnappyExpress',
  type: 'default',
  size: 'md',
  style: {},
  icon: false,
  loading: false,
  onClick: function onClick(e) {
    return e.isDefaultPrevented();
  },
  disabled: false,
  className: '',
  suffixIcon: false,
  shape: '',
  badge: {},
  iconButton: false,
  tooltip: {},
  template: ''
};

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "@keyframes jump {\n  0% {\n    transform: translate3d(0, 5%, 0);\n    opacity: 0.8; }\n  100% {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\nbody .sny-button {\n  padding: 0px 16px;\n  height: 32px;\n  font-size: 14px;\n  color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  body .sny-button:active {\n    animation: jump 0.5s ease; }\n  body .sny-button a {\n    color: inherit; }\n  body .sny-button.circle {\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    border-radius: 50%;\n    border-color: #595959 !important; }\n    body .sny-button.circle .anticon {\n      font-size: 16px;\n      color: #595959 !important; }\n    body .sny-button.circle.sm {\n      width: 24px;\n      height: 24px;\n      border-radius: 50%; }\n    body .sny-button.circle.xs {\n      width: 20px;\n      height: 20px;\n      border-radius: 50%; }\n      body .sny-button.circle.xs .anticon {\n        font-size: 11px; }\n    body .sny-button.circle.blue-hover:hover, body .sny-button.circle.edit:hover, body .sny-button.circle.view:hover, body .sny-button.circle.message:hover, body .sny-button.circle.video:hover, body .sny-button.circle.audio:hover, body .sny-button.circle.image:hover, body .sny-button.circle.retweet:hover, body .sny-button.circle.service:hover, body .sny-button.circle.plus:hover, body .sny-button.circle.api:hover, body .sny-button.circle.setting:hover {\n      border-color: #0050b3 !important; }\n      body .sny-button.circle.blue-hover:hover .anticon, body .sny-button.circle.edit:hover .anticon, body .sny-button.circle.view:hover .anticon, body .sny-button.circle.message:hover .anticon, body .sny-button.circle.video:hover .anticon, body .sny-button.circle.audio:hover .anticon, body .sny-button.circle.image:hover .anticon, body .sny-button.circle.retweet:hover .anticon, body .sny-button.circle.service:hover .anticon, body .sny-button.circle.plus:hover .anticon, body .sny-button.circle.api:hover .anticon, body .sny-button.circle.setting:hover .anticon {\n        color: #0050b3 !important; }\n    body .sny-button.circle.red-hover:hover, body .sny-button.circle.delete:hover {\n      border-color: #cf1322 !important; }\n      body .sny-button.circle.red-hover:hover .anticon, body .sny-button.circle.delete:hover .anticon {\n        color: #cf1322 !important; }\n  body .sny-button.lg {\n    height: 40px; }\n  body .sny-button.sm {\n    height: 22px;\n    border-radius: 2px;\n    font-size: 12px; }\n  body .sny-button.success {\n    background-color: #237804;\n    border: 1px solid #228100; }\n    body .sny-button.success:hover {\n      background-color: #389e0d;\n      border: 1px solid #237804; }\n  body .sny-button.cyan {\n    background-color: #006d75;\n    border: 1px solid #006d75; }\n    body .sny-button.cyan:hover {\n      background-color: #08979c; }\n  body .sny-button.primary {\n    background-color: #0050b3;\n    border: 1px solid #0050b3; }\n    body .sny-button.primary:hover {\n      background-color: #096dd9; }\n  body .sny-button.secondary {\n    background-color: #6b7588;\n    border: 1px solid #6b7588; }\n    body .sny-button.secondary:hover {\n      background-color: #8f90a6; }\n  body .sny-button.danger {\n    background-color: #b10015;\n    border: 1px solid #b10015; }\n    body .sny-button.danger:hover {\n      background-color: #cf1322; }\n  body .sny-button.default {\n    border: 1px solid #d9d9d9;\n    color: #000000a6;\n    background-color: white; }\n  body .sny-button.icon-button {\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    align-items: center;\n    justify-content: center; }\n  body .sny-button.disabled {\n    background-color: #f5f5f5;\n    border: 1px solid #d9d9d9;\n    color: #00000040;\n    cursor: not-allowed; }\n\nbody .sny-tabs {\n  width: 100%;\n  display: flex; }\n  body .sny-tabs .tab {\n    flex: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 46px;\n    border-bottom: 2px solid #d9dbea;\n    color: #2a2565;\n    cursor: pointer; }\n    body .sny-tabs .tab .ant-space,\n    body .sny-tabs .tab .ant-space-item {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n    body .sny-tabs .tab:hover {\n      background-color: #f0f5ff; }\n  body .sny-tabs .tab-active {\n    background-color: #f0f5ff;\n    border-bottom: 2px solid #2a2565;\n    animation: jump 0.5s ease; }\n\nbody .sny-status {\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  font-size: 12px;\n  min-width: 84px; }\n  body .sny-status.w-148 {\n    min-width: 148px; }\n  body .sny-status.orange {\n    color: #ad4e00;\n    background-color: #fff7e6;\n    border: 1px solid #ad4e00; }\n  body .sny-status.red {\n    color: #a8071a;\n    background-color: #fff1f0;\n    border: 1px solid #a8071a; }\n  body .sny-status.blue {\n    color: #1d39c4;\n    background-color: #f0f5ff;\n    border: 1px solid #1d39c4; }\n  body .sny-status.cyan {\n    color: #006d75;\n    background-color: #e6fffb;\n    border: 1px solid #006d75; }\n  body .sny-status.purple {\n    color: #722ed1;\n    background-color: #f9f0ff;\n    border: 1px solid #722ed1; }\n  body .sny-status.green {\n    color: #135200;\n    background-color: #f6ffed;\n    border: 1px solid #135200; }\n";
n(css,{});

var returnLibrary = function returnLibrary() {
  return {
    SnyStatus: SnyStatus,
    SnyButton: SnyButton
  };
};

var index = returnLibrary();

export { index as default };
