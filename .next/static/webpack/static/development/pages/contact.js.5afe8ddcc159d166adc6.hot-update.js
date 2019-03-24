webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/ContactForm.js":
/*!***********************************!*\
  !*** ./components/ContactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _Resizer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Resizer.js */ "./components/Resizer.js");














var ContactForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ContactForm, _Component);

  function ContactForm() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContactForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ContactForm).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleMessageKeyUp", function (e) {
      var value = e.target.value;

      if (value.length > 30) {
        _this.setState({
          message: value,
          messageValid: true
        });
      } else {
        _this.setState({
          messageValid: false
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleNameChange", function (e) {
      var value = e.target.value;

      _this.setState({
        name: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleEmailChange", function (e) {
      var value = e.target.value;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var isValid = re.test(String(value).toLowerCase());

      _this.setState({
        emailValid: isValid,
        email: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSuccessMessage", function (msg) {
      //alert("success: "+msg);
      var toastManager = _this.props.toastManager;
      toastManager.add(msg, {
        appearance: 'success',
        autoDismiss: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onErrorMessage", function (msg) {
      //alert("error: "+msg);
      var toastManager = _this.props.toastManager;
      toastManager.add(msg, {
        appearance: 'warning',
        autoDismiss: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubmitForm", function () {
      if (!navigator.onLine) return _this.onErrorMessage("Your are not online, please reconnect before sending feedback.");

      if (_this.state.emailValid === true && _this.state.messageValid) {
        react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].event({
          category: 'Contact',
          action: 'Form submit'
        });

        _this.setState({
          submitDisabled: true
        });

        setTimeout(function () {
          _this.setState({
            submitDisabled: false
          });
        }, 1000 * 6); //fetch POST

        fetch("/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
            name: _this.state.name,
            message: _this.state.message,
            email: _this.state.email
          })
        }).then(function (res) {
          return res.json();
        }).then(function (res) {
          if (res.success) {
            _this.onSuccessMessage(res.message);
          } else {
            _this.onErrorMessage(res.message);
          }
        }).catch(function (err) {
          console.warning("error sending email:", err);

          _this.onErrorMessage("Error sending message. Please try again later.");
        });
      } else {
        if (!_this.state.messageValid || _this.state.messageValid === "unset") _this.onErrorMessage("The message is too short. Please send more than 30 characters.");
        if (!_this.state.emailValid || _this.state.emailValid === "unset") _this.onErrorMessage("Please enter a valid email address.");
      }
    });

    _this.state = {
      message: "",
      name: "",
      email: "",
      messageValid: "unset",
      emailValid: "unset",
      submitDisabled: false,
      textarea: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContactForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Resizer_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        lock: {
          width: true
        },
        textarea: this.state.textarea
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        style: {
          fontSize: "0.75em"
        },
        className: "jsx-576325034"
      }, "* required"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "contact-message",
        className: "jsx-576325034"
      }, "Message *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-576325034" + " " + "textarea-container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        placeholder: "Write your message here",
        onKeyUp: this.handleMessageKeyUp,
        style: this.state.messageValid === false ? {
          borderColor: "red"
        } : {},
        ref: function ref(el) {
          if (_this2.state.textarea === null) {
            _this2.setState({
              textarea: el
            });
          }
        },
        className: "jsx-576325034" + " " + "contact-message"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/arrow_right.svg",
        alt: "resize",
        className: "jsx-576325034" + " " + "textarea-resize"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-576325034" + " " + "name-stuff"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "contact-name",
        className: "jsx-576325034"
      }, "Your name"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        id: "contact-name",
        type: "text",
        onChange: this.handleNameChange,
        className: "jsx-576325034"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-576325034"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        htmlFor: "contact-email",
        className: "jsx-576325034"
      }, "Your email *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        id: "contact-email",
        type: "text",
        onChange: this.handleEmailChange,
        style: this.state.emailValid === false ? {
          borderColor: "red"
        } : {},
        className: "jsx-576325034"
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        id: "btn-contact-send",
        onClick: this.handleSubmitForm,
        style: this.state.submitDisabled ? {
          backgroundColor: "#dcdcdc "
        } : {},
        disabled: this.state.submitDisabled,
        className: "jsx-576325034" + " " + "blue-g"
      }, "Send to George Campbell"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "576325034"
      }, ".contact-message.jsx-576325034{width:100%;height:14em;min-height:5em;max-height:1000px;line-height:1.5em;resize:vertical;max-width:100%;display:block;}.textarea-container.jsx-576325034{margin-left:0;}label.jsx-576325034{display:block;}input[type=\"text\"].jsx-576325034{width:100%;display:block;min-height:2em;margin-bottom:0.5em;font-family:'Hind Guntur',sans-serif;font-size:16px;box-sizing:border-box;border-radius:3px;border:1px solid rgb(169,169,169);padding-top:5.5px;}.name-stuff.jsx-576325034{margin:20px 0;}#btn-contact-send.jsx-576325034{margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZW9yZ2UvcHJvamVjdHMvcGVyc29uYWwvdGFza3RpbWVyL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0pvQixBQUd3QixBQVVHLEFBS0EsQUFHSCxBQVlHLEFBR0UsV0FoQ0osQUFrQkUsR0FSaEIsQUFLQSxBQWVBLEVBR0EsT0FoQ2lCLEVBa0JBLGFBakJHLEVBa0JFLGdCQWpCRixJQWtCbUIsY0FqQnJCLGdCQUNELE9BaUJBLFFBaEJELE9BaUJRLE9BaEJ4QixlQWlCb0Isa0JBQ2dCLGtDQUNoQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2dlb3JnZS9wcm9qZWN0cy9wZXJzb25hbC90YXNrdGltZXIvY29tcG9uZW50cy9Db250YWN0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJztcbmltcG9ydCBSZXNpemVyIGZyb20gJy4vUmVzaXplci5qcyc7XG5jbGFzcyBDb250YWN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIG1lc3NhZ2VWYWxpZDogXCJ1bnNldFwiLFxuICAgICAgZW1haWxWYWxpZDogXCJ1bnNldFwiLFxuICAgICAgc3VibWl0RGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgdGV4dGFyZWE6IG51bGxcbiAgICB9XG4gIH1cbiAgaGFuZGxlTWVzc2FnZUtleVVwID0gKGUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmKHZhbHVlLmxlbmd0aCA+IDMwKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlOiB2YWx1ZSxcbiAgICAgICAgbWVzc2FnZVZhbGlkOiB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWVzc2FnZVZhbGlkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgaGFuZGxlTmFtZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6IHZhbHVlXG4gICAgfSlcbiAgfVxuICBoYW5kbGVFbWFpbENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgIGNvbnN0IGlzVmFsaWQgPSByZS50ZXN0KFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbFZhbGlkOiBpc1ZhbGlkLFxuICAgICAgZW1haWw6IHZhbHVlXG4gICAgfSlcbiAgfVxuICBvblN1Y2Nlc3NNZXNzYWdlPShtc2cpPT57XG4gICAgLy9hbGVydChcInN1Y2Nlc3M6IFwiK21zZyk7XG4gICAgY29uc3QgeyB0b2FzdE1hbmFnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgdG9hc3RNYW5hZ2VyLmFkZChtc2csIHtcbiAgICAgIGFwcGVhcmFuY2U6ICdzdWNjZXNzJyxcbiAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxuICAgIH0pXG4gIH1cblxuICBvbkVycm9yTWVzc2FnZT0obXNnKT0+e1xuICAgIC8vYWxlcnQoXCJlcnJvcjogXCIrbXNnKTtcbiAgICBjb25zdCB7IHRvYXN0TWFuYWdlciB9ID0gdGhpcy5wcm9wcztcbiAgICB0b2FzdE1hbmFnZXIuYWRkKG1zZywge1xuICAgICAgYXBwZWFyYW5jZTogJ3dhcm5pbmcnLFxuICAgICAgYXV0b0Rpc21pc3M6IHRydWUsXG4gICAgfSlcbiAgfVxuICBoYW5kbGVTdWJtaXRGb3JtID0gKCkgPT4ge1xuICAgIGlmKCFuYXZpZ2F0b3Iub25MaW5lKSByZXR1cm4gdGhpcy5vbkVycm9yTWVzc2FnZShcIllvdXIgYXJlIG5vdCBvbmxpbmUsIHBsZWFzZSByZWNvbm5lY3QgYmVmb3JlIHNlbmRpbmcgZmVlZGJhY2suXCIpO1xuICAgIGlmKHRoaXMuc3RhdGUuZW1haWxWYWxpZCA9PT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLm1lc3NhZ2VWYWxpZCl7XG4gICAgICBSZWFjdEdBLmV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICdDb250YWN0JyxcbiAgICAgICAgYWN0aW9uOiAnRm9ybSBzdWJtaXQnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdWJtaXREaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN1Ym1pdERpc2FibGVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0sIDEwMDAqNik7XG4gICAgICAvL2ZldGNoIFBPU1RcbiAgICAgIGZldGNoKFwiL2NvbnRhY3RcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2UsXG4gICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWxcbiAgICAgICAgfSlcbiAgICAgIH0pLnRoZW4ocmVzPT57XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfSkudGhlbihyZXM9PntcbiAgICAgICAgaWYocmVzLnN1Y2Nlc3Mpe1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzTWVzc2FnZShyZXMubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkVycm9yTWVzc2FnZShyZXMubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGNvbnNvbGUud2FybmluZyhcImVycm9yIHNlbmRpbmcgZW1haWw6XCIsIGVycik7XG4gICAgICAgIHRoaXMub25FcnJvck1lc3NhZ2UoXCJFcnJvciBzZW5kaW5nIG1lc3NhZ2UuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIXRoaXMuc3RhdGUubWVzc2FnZVZhbGlkIHx8IHRoaXMuc3RhdGUubWVzc2FnZVZhbGlkID09PSBcInVuc2V0XCIpIHRoaXMub25FcnJvck1lc3NhZ2UoXCJUaGUgbWVzc2FnZSBpcyB0b28gc2hvcnQuIFBsZWFzZSBzZW5kIG1vcmUgdGhhbiAzMCBjaGFyYWN0ZXJzLlwiKTtcbiAgICAgIGlmKCF0aGlzLnN0YXRlLmVtYWlsVmFsaWQgfHwgdGhpcy5zdGF0ZS5lbWFpbFZhbGlkID09PSBcInVuc2V0XCIpIHRoaXMub25FcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuICg8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8UmVzaXplclxuICAgICAgICBsb2NrPXt7d2lkdGg6dHJ1ZX19XG4gICAgICAgIHRleHRhcmVhPXt0aGlzLnN0YXRlLnRleHRhcmVhfVxuICAgICAgICA+XG4gICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6XCIwLjc1ZW1cIn19PiYjNDI7IHJlcXVpcmVkPC9wPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3QtbWVzc2FnZVwiPk1lc3NhZ2UgJiM0Mjs8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1tZXNzYWdlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBtZXNzYWdlIGhlcmVcIlxuICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVNZXNzYWdlS2V5VXB9XG4gICAgICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS5tZXNzYWdlVmFsaWQgPT09IGZhbHNlID8ge2JvcmRlckNvbG9yOlwicmVkXCJ9IDoge319XG4gICAgICAgICAgICByZWY9eyhlbCk9PntcbiAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS50ZXh0YXJlYSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICB0ZXh0YXJlYTogZWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2Fycm93X3JpZ2h0LnN2Z1wiIGFsdD1cInJlc2l6ZVwiIGNsYXNzTmFtZT1cInRleHRhcmVhLXJlc2l6ZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1zdHVmZlwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdC1uYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImNvbnRhY3QtbmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0LWVtYWlsXCI+WW91ciBlbWFpbCAmIzQyOzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJjb250YWN0LWVtYWlsXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRW1haWxDaGFuZ2V9XG4gICAgICAgICAgc3R5bGU9e3RoaXMuc3RhdGUuZW1haWxWYWxpZCA9PT0gZmFsc2UgPyB7Ym9yZGVyQ29sb3I6XCJyZWRcIn0gOiB7fX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibHVlLWdcIiBpZD1cImJ0bi1jb250YWN0LXNlbmRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdEZvcm19IHN0eWxlPXt0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVkID8geyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2RjZGNkYyBcIn0gOiB7fX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZWR9PlNlbmQgdG8gR2VvcmdlIENhbXBiZWxsPC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFjdC1tZXNzYWdlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNGVtO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNWVtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dGFyZWEtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGV4dGFyZWEtcmVzaXplIHtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSGluZCBHdW50dXInLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2OSwxNjksMTY5KTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1LjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtc3R1ZmYge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNidG4tY29udGFjdC1zZW5kIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZXNpemVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07XG4iXX0= */\n/*@ sourceURL=/Users/george/projects/personal/tasktimer/components/ContactForm.js */")));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ })

})
//# sourceMappingURL=contact.js.5afe8ddcc159d166adc6.hot-update.js.map