((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/contact.js"],{

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

/***/ }),

/***/ "./components/Resizer.js":
/*!*******************************!*\
  !*** ./components/Resizer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resizer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








 //resize an element by dragging the bottom right corner of it

var Resizer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Resizer, _Component);

  function Resizer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Resizer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUp", function (e) {
      _this.mouseIsDown = false;
      _this.resizingTextarea = false;
      if (_this.props.textarea && _this.props.editTextareaSize) _this.props.editTextareaSize(_this.props.textarea.style.width, _this.props.textarea.style.height);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "checkCollision", function (x, y, rect) {
      return x < rect.right && x > rect.right - 32 && y < rect.bottom && y > rect.bottom - 32;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDown", function (e) {
      _this.mouseIsDown = true;
      var x = e.clientX || e.touches && e.touches[0].clientX;
      var y = e.clientY || e.touches && e.touches[0].clientY;
      _this.downX = x;
      _this.downY = y;
      _this.rect = _this.props.textarea.getBoundingClientRect();
      var rect = _this.rect;

      if (_this.checkCollision(x, y, rect)) {
        _this.resizingTextarea = true;
      }

      _this.xd = rect.right - x;
      _this.yd = rect.bottom - y;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onMove", function (e) {
      var x = e.clientX || e.touches && e.touches[0].clientX;
      var y = e.clientY || e.touches && e.touches[0].clientY;
      _this.rect = _this.props.textarea.getBoundingClientRect();
      var rect = _this.rect;

      if (_this.checkCollision(x, y, rect)) {
        _this.resizingTextarea = true;

        if (_this.props.textarea) {
          _this.props.textarea.style.overflow = 'hidden';
        }
      } else {
        if (_this.props.textarea) {
          _this.props.textarea.style.overflow = '';
        }
      } //if(checkCollision(x,y,rect)){
      //this.resizingTextarea = true;
      //if(this.props.textarea){
      //  this.props.textarea.style.overflow = 'hidden';
      //}
      //}


      if (_this.mouseIsDown) {
        //console.log("dragging");
        if (_this.props.textarea) {
          //console.log(x, y, rect);
          if (_this.resizingTextarea) {
            e.preventDefault(); //if no lock, or if there is a lock but not for width, resize width

            if (!_this.props.lock || !_this.props.lock.width) {
              _this.props.textarea.style.width = x - rect.x + _this.xd + "px";
            } //same for height


            if (!_this.props.lock || !_this.props.lock.height) {
              _this.props.textarea.style.height = y - rect.y + _this.yd + "px";
            }
          }
        }
      } else {
        _this.resizingTextarea = false;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("touchmove", function (e) {
        return _this2.onMove(e);
      }, {
        passive: false
      });
      window.addEventListener("touchend", function (e) {
        return _this2.onUp(e);
      }, false);
      window.addEventListener("mouseup", function (e) {
        return _this2.onUp(e);
      }, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      window.removeEventListener("touchmove", function (e) {
        return _this3.onMove(e);
      }, {
        passive: false
      });
      window.removeEventListener("mouseup", function (e) {
        return _this3.onUp(e);
      }, false);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onMouseDown: this.onDown,
        onMouseMove: this.onMove,
        onTouchStart: this.onDown
      }, this.props.children);
    }
  }]);

  return Resizer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmurhash2_32_gc);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class)|(on[A-Z].*)|((data|aria|x)-.*))$/i;
var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(reactPropsRegex.test.bind(reactPropsRegex));

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/create-emotion-styled/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/create-emotion-styled/dist/index.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var channel = '__EMOTION_THEMING__';

// https://github.com/styled-components/styled-components/blob/e05b3fe247e9d956bcde786cec376e32afb85bca/src/utils/create-broadcast.js

var _contextTypes;
var contextTypes = (_contextTypes = {}, _contextTypes[channel] = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, _contextTypes);

function setTheme(theme) {
  this.setState({
    theme: theme
  });
}
var testPickPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__["default"];
var testPickPropsOnComponent = function testPickPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var testAlwaysTrue = function testAlwaysTrue() {
  return true;
};
var pickAssign = function pickAssign(testFn, target) {
  var i = 2;
  var length = arguments.length;

  for (; i < length; i++) {
    var source = arguments[i];

    var _key = void 0;

    for (_key in source) {
      if (testFn(_key)) {
        target[_key] = source[_key];
      }
    }
  }

  return target;
};

var warnedAboutExtractStatic = false;

function createEmotionStyled(emotion, view) {
  var _createStyled = function createStyled(tag, options) {
    if (true) {
      if (tag === undefined) {
        throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
      }
    }

    var staticClassName;
    var identifierName;
    var stableClassName;
    var shouldForwardProp;

    if (options !== undefined) {
      staticClassName = options.e;
      identifierName = options.label;
      stableClassName = options.target;
      shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && // $FlowFixMe
        options.shouldForwardProp(propName);
      } : options.shouldForwardProp;
    }

    var isReal = tag.__emotion_real === tag;
    var baseTag = staticClassName === undefined ? isReal && tag.__emotion_base || tag : tag;

    if (typeof shouldForwardProp !== 'function') {
      shouldForwardProp = typeof baseTag === 'string' && baseTag.charAt(0) === baseTag.charAt(0).toLowerCase() ? testPickPropsOnStringTag : testPickPropsOnComponent;
    }

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (staticClassName === undefined) {
        if (args[0] == null || args[0].raw === undefined) {
          styles.push.apply(styles, args);
        } else {
          styles.push(args[0][0]);
          var len = args.length;
          var i = 1;

          for (; i < len; i++) {
            styles.push(args[i], args[0][i]);
          }
        }
      } else if ( true && !warnedAboutExtractStatic) {
        console.warn('extractStatic is deprecated and will be removed in emotion@10. We recommend disabling extractStatic or using other libraries like linaria or css-literal-loader');
        warnedAboutExtractStatic = true;
      }

      var Styled =
      /*#__PURE__*/
      function (_view$Component) {
        _inheritsLoose(Styled, _view$Component);

        function Styled() {
          return _view$Component.apply(this, arguments) || this;
        }

        var _proto = Styled.prototype;

        _proto.componentWillMount = function componentWillMount() {
          if (this.context[channel] !== undefined) {
            this.unsubscribe = this.context[channel].subscribe(setTheme.bind(this));
          }
        };

        _proto.componentWillUnmount = function componentWillUnmount() {
          if (this.unsubscribe !== undefined) {
            this.context[channel].unsubscribe(this.unsubscribe);
          }
        };

        _proto.render = function render() {
          var props = this.props,
              state = this.state;
          this.mergedProps = pickAssign(testAlwaysTrue, {}, props, {
            theme: state !== null && state.theme || props.theme || {}
          });
          var className = '';
          var classInterpolations = [];

          if (props.className) {
            if (staticClassName === undefined) {
              className += emotion.getRegisteredStyles(classInterpolations, props.className);
            } else {
              className += props.className + " ";
            }
          }

          if (staticClassName === undefined) {
            className += emotion.css.apply(this, styles.concat(classInterpolations));
          } else {
            className += staticClassName;
          }

          if (stableClassName !== undefined) {
            className += " " + stableClassName;
          }

          return view.createElement(baseTag, // $FlowFixMe
          pickAssign(shouldForwardProp, {}, props, {
            className: className,
            ref: props.innerRef
          }));
        };

        return Styled;
      }(view.Component);

      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";

      if (tag.defaultProps !== undefined) {
        // $FlowFixMe
        Styled.defaultProps = tag.defaultProps;
      }

      Styled.contextTypes = contextTypes;
      Styled.__emotion_styles = styles;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_real = Styled;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if ( true && stableClassName === undefined) {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe


          return "." + stableClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return _createStyled(nextTag, nextOptions !== undefined ? // $FlowFixMe
        pickAssign(testAlwaysTrue, {}, options, nextOptions) : options).apply(void 0, styles);
      };

      return Styled;
    };
  };

  if ( true && typeof Proxy !== 'undefined') {
    _createStyled = new Proxy(_createStyled, {
      get: function get(target, property) {
        switch (property) {
          // react-hot-loader tries to access this stuff
          case '__proto__':
          case 'name':
          case 'prototype':
          case 'displayName':
            {
              return target[property];
            }

          default:
            {
              throw new Error("You're trying to use the styled shorthand without babel-plugin-emotion." + ("\nPlease install and setup babel-plugin-emotion or use the function call syntax(`styled('" + property + "')` instead of `styled." + property + "`)"));
            }
        }
      }
    });
  }

  return _createStyled;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotionStyled);


/***/ }),

/***/ "./node_modules/create-emotion/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/create-emotion/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4__);






var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (true) {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = "development" === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (true) {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_4___default()(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && "development" !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_2__["default"])(styles + identifierName) + identifierName;
  };

  if (true) {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (true) {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

/* harmony default export */ __webpack_exports__["default"] = (createEmotion);


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./node_modules/emotion/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/emotion/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return cx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return sheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return caches; });
/* harmony import */ var create_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-emotion */ "./node_modules/create-emotion/dist/index.esm.js");


var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = Object(create_emotion__WEBPACK_IMPORTED_MODULE_0__["default"])(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontact&absolutePagePath=%2FUsers%2Fgeorge%2Fprojects%2Fpersonal%2Ftasktimer%2Fpages%2Fcontact.js!./":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontact&absolutePagePath=%2FUsers%2Fgeorge%2Fprojects%2Fpersonal%2Ftasktimer%2Fpages%2Fcontact.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/contact", function() {
      var page = __webpack_require__(/*! ./pages/contact.js */ "./pages/contact.js")
      if(true) {
        module.hot.accept(/*! ./pages/contact.js */ "./pages/contact.js", function() {
          if(!next.router.components["/contact"]) return
          var updatedPage = __webpack_require__(/*! ./pages/contact.js */ "./pages/contact.js")
          next.router.update("/contact", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-emotion/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/react-emotion/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: flush, hydrate, cx, merge, getRegisteredStyles, injectGlobal, keyframes, css, sheet, caches, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cx", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["cx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["getRegisteredStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectGlobal", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sheet", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["sheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caches", function() { return emotion__WEBPACK_IMPORTED_MODULE_1__["caches"]; });

/* harmony import */ var create_emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! create-emotion-styled */ "./node_modules/create-emotion-styled/dist/index.esm.js");





var index = Object(create_emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"])(emotion__WEBPACK_IMPORTED_MODULE_1__, react__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/components/OutboundLink.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutboundLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink =
/*#__PURE__*/
function (_Component) {
  _inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('a', props);
    }
  }]);

  return OutboundLink;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(OutboundLink, "trackLink", function () {
  Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('ga tracking not enabled');
});

_defineProperty(OutboundLink, "propTypes", {
  eventLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

_defineProperty(OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null
});



/***/ }),

/***/ "./node_modules/react-ga/dist/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/index.js ***!
  \*************************************************/
/*! exports provided: initialize, ga, set, send, pageview, modalview, timing, event, exception, plugin, outboundLink, OutboundLink, testModeAPI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ga", function() { return ga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalview", function() { return modalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timing", function() { return timing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exception", function() { return exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outboundLink", function() { return outboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundLink", function() { return OutboundLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModeAPI", function() { return testModeAPI; });
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/format */ "./node_modules/react-ga/dist/esm/utils/format.js");
/* harmony import */ var _utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/removeLeadingSlash */ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js");
/* harmony import */ var _utils_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/* harmony import */ var _utils_loadGA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadGA */ "./node_modules/react-ga/dist/esm/utils/loadGA.js");
/* harmony import */ var _utils_console_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");
/* harmony import */ var _utils_console_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/console/log */ "./node_modules/react-ga/dist/esm/utils/console/log.js");
/* harmony import */ var _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/testModeAPI */ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js");
/* harmony import */ var _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/OutboundLink */ "./node_modules/react-ga/dist/esm/components/OutboundLink.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var internalGa = function internalGa() {
  var _window;

  if (_testMode) return _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"].ga.apply(_utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
  if (typeof window === 'undefined') return false;
  if (!window.ga) return Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return Object(_utils_format__WEBPACK_IMPORTED_MODULE_0__["default"])(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof internalGa === 'function') {
    if (typeof command !== 'string') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!options || options.standardImplementation !== true) Object(_utils_loadGA__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (_typeof(config) !== 'object') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    internalGa.apply(void 0, args);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'arguments\');');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`fieldsObject` is required in .set()');
    return;
  }

  if (_typeof(fieldsObject) !== 'object') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'set\', fieldsObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', fieldObject);');
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path is required in .pageview()');
    return;
  }

  var path = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawPath);

  if (path === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', _objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = Object(_utils_removeLeadingSlash__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawModalName));

  if (modalName === '') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])('called ga(\'send\', \'pageview\', path);');
      Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = _objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` is required in .require()');
        return;
      }

      var name = Object(_utils_trim__WEBPACK_IMPORTED_MODULE_2__["default"])(rawName);

      if (name === '') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('`name` cannot be an empty string in .require()');
        return;
      } // Optional Fields


      if (options) {
        if (_typeof(options) !== 'object') {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga('require', name);

        if (_debug) {
          Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            Object(_utils_console_log__WEBPACK_IMPORTED_MODULE_5__["default"])("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      Object(_utils_console_warn__WEBPACK_IMPORTED_MODULE_4__["default"])('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].origTrackLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].trackLink;
_components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"].trackLink = outboundLink;
var OutboundLink = _components_OutboundLink__WEBPACK_IMPORTED_MODULE_7__["default"];
var testModeAPI = _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: event,
  exception: exception,
  plugin: plugin,
  outboundLink: outboundLink,
  OutboundLink: OutboundLink,
  testModeAPI: _utils_testModeAPI__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/log.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
function log(s) {
  console.info('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/console/warn.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return warn; });
function warn(s) {
  console.warn('[react-ga]', s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/format.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return format; });
/* harmony import */ var _mightBeEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mightBeEmail */ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js");
/* harmony import */ var _toTitleCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toTitleCase */ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js");
/* harmony import */ var _console_warn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console/warn */ "./node_modules/react-ga/dist/esm/utils/console/warn.js");



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (Object(_mightBeEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(s)) {
    Object(_console_warn__WEBPACK_IMPORTED_MODULE_2__["default"])('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return Object(_toTitleCase__WEBPACK_IMPORTED_MODULE_1__["default"])(s);
  }

  return s;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/loadGA.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */


  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */

});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/mightBeEmail.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mightBeEmail; });
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return /[^@]+@[^@]+/.test(s);
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeLeadingSlash; });
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/testModeAPI.js ***!
  \*************************************************************/
/*! exports provided: gaCalls, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaCalls", function() { return gaCalls; });
var gaCalls = [];
/* harmony default export */ __webpack_exports__["default"] = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push(args.concat());
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/toTitleCase.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTitleCase; });
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trim */ "./node_modules/react-ga/dist/esm/utils/trim.js");
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return Object(_trim__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}

/***/ }),

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
/*!******************************************************!*\
  !*** ./node_modules/react-ga/dist/esm/utils/trim.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trim; });
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/ToastContainer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/ToastContainer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContainer = undefined;

var _emotion = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _ToastElement = __webpack_require__(/*! ./ToastElement */ "./node_modules/react-toast-notifications/dist/ToastElement.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placements = {
  'top-left': { top: 0, left: 0 },
  'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 0, right: 0 },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 0, right: 0 }
};

var ToastContainer = exports.ToastContainer = function ToastContainer(_ref) {
  var children = _ref.children,
      placement = _ref.placement;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _emotion.css)(_extends({
        boxSizing: 'border-box',
        maxHeight: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: _ToastElement.gutter,
        pointerEvents: _react.Children.count(children) ? 'auto' : 'none',
        position: 'fixed'
      }, placements[placement]), '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkkiLCJmaWxlIjoiLi4vc3JjL1RvYXN0Q29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBndXR0ZXIgfSBmcm9tICcuL1RvYXN0RWxlbWVudCc7XG5cbmNvbnN0IHBsYWNlbWVudHMgPSB7XG4gICd0b3AtbGVmdCc6IHsgdG9wOiAwLCBsZWZ0OiAwIH0sXG4gICd0b3AtY2VudGVyJzogeyB0b3A6IDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9LFxuICAndG9wLXJpZ2h0JzogeyB0b3A6IDAsIHJpZ2h0OiAwIH0sXG4gICdib3R0b20tbGVmdCc6IHsgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXG4gICdib3R0b20tY2VudGVyJzogeyBib3R0b206IDAsIGxlZnQ6ICc1MCUnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9LFxuICAnYm90dG9tLXJpZ2h0JzogeyBib3R0b206IDAsIHJpZ2h0OiAwIH0sXG59O1xuXG5leHBvcnQgdHlwZSBUb2FzdENvbnRhaW5lclByb3BzID0geyBjaGlsZHJlbjogTm9kZSwgcGxhY2VtZW50OiBQbGFjZW1lbnQgfTtcblxuZXhwb3J0IGNvbnN0IFRvYXN0Q29udGFpbmVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHBsYWNlbWVudCxcbn06IFRvYXN0Q29udGFpbmVyUHJvcHMpID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIHBhZGRpbmc6IGd1dHRlcixcbiAgICAgIHBvaW50ZXJFdmVudHM6IENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA/ICdhdXRvJyA6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgLi4ucGxhY2VtZW50c1twbGFjZW1lbnRdLFxuICAgIH19XG4gID5cbiAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+e2NoaWxkcmVufTwvVHJhbnNpdGlvbkdyb3VwPlxuICA8L2Rpdj5cbik7XG4iXX0= */')
    },
    _react2.default.createElement(
      _reactTransitionGroup.TransitionGroup,
      { component: null },
      children
    )
  );
};

/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/ToastController.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/ToastController.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastController = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultAutoDismissTimeout = 5000;

var ToastController = exports.ToastController = function (_Component) {
  _inherits(ToastController, _Component);

  function ToastController() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ToastController);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ToastController.__proto__ || Object.getPrototypeOf(ToastController)).call.apply(_ref, [this].concat(args))), _this), _this.state = { autoDismissTimeout: _this.props.autoDismissTimeout }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ToastController, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          autoDismiss = _props.autoDismiss,
          onDismiss = _props.onDismiss;
      var autoDismissTimeout = this.state.autoDismissTimeout;


      if (autoDismiss) {
        this.timeout = setTimeout(onDismiss, autoDismissTimeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          Toast = _props2.Toast,
          props = _objectWithoutProperties(_props2, ['Toast']);

      var autoDismissTimeout = this.state.autoDismissTimeout;

      var time = props.transitionDuration;

      return _react2.default.createElement(
        _reactTransitionGroup.Transition,
        _extends({ appear: true, mountOnEnter: true, unmountOnExit: true, timeout: time }, props),
        function (transitionState) {
          return _react2.default.createElement(Toast, _extends({
            autoDismissTimeout: autoDismissTimeout,
            transitionState: transitionState
          }, props));
        }
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(_ref2) {
      var autoDismiss = _ref2.autoDismiss,
          autoDismissTimeout = _ref2.autoDismissTimeout;

      if (!autoDismiss) return null;

      var timeout = typeof autoDismiss === 'number' ? autoDismiss : autoDismissTimeout;

      return { autoDismissTimeout: timeout };
    }
  }]);

  return ToastController;
}(_react.Component);

ToastController.defaultProps = {
  autoDismiss: false
};

/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/ToastElement.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/ToastElement.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultToast = exports.shrink = exports.toastWidth = exports.gutter = exports.borderRadius = undefined;

var _emotion = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");

var _icons = __webpack_require__(/*! ./icons */ "./node_modules/react-toast-notifications/dist/icons.js");

var _colors = __webpack_require__(/*! ./colors */ "./node_modules/react-toast-notifications/dist/colors.js");

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// common
var borderRadius = exports.borderRadius = 4;
var gutter = exports.gutter = 8;
var toastWidth = exports.toastWidth = 360;
var shrink = /*#__PURE__*/exports.shrink = (0, _reactEmotion.keyframes)('from{height:100%;}to{height:0%}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYytCIiwiZmlsZSI6Ii4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgQ2hlY2tJY29uLCBGbGFtZUljb24sIEluZm9JY29uLCBDbG9zZUljb24sIEFsZXJ0SWNvbiB9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1cyA9IDQ7XG5leHBvcnQgY29uc3QgZ3V0dGVyID0gODtcbmV4cG9ydCBjb25zdCB0b2FzdFdpZHRoID0gMzYwO1xuZXhwb3J0IGNvbnN0IHNocmluayA9IGtleWZyYW1lc2Bmcm9tIHsgaGVpZ2h0OiAxMDAlOyB9IHRvIHsgaGVpZ2h0OiAwJSB9YDtcblxuLy8gYTExeSBoZWxwZXJcbmNvbnN0IEExMXlUZXh0ID0gKHsgdGFnOiBUYWcsIC4uLnByb3BzIH0pID0+IChcbiAgPFRhZ1xuICAgIGNzcz17e1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbkExMXlUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFnOiAnc3BhbicsXG59O1xuXG4vLyBkZWZhdWx0IGFwcGVhcmFuY2VzXG5cbmNvbnN0IGFwcGVhcmFuY2VzID0ge1xuICBzdWNjZXNzOiB7XG4gICAgaWNvbjogQ2hlY2tJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5HNTAwLFxuICAgIGZnOiBjb2xvcnMuRzMwMCxcbiAgICBiZzogY29sb3JzLkc1MCxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBpY29uOiBGbGFtZUljb24sXG4gICAgdGV4dDogY29sb3JzLlI1MDAsXG4gICAgZmc6IGNvbG9ycy5SMzAwLFxuICAgIGJnOiBjb2xvcnMuUjUwLFxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgaWNvbjogQWxlcnRJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ZNTAwLFxuICAgIGZnOiBjb2xvcnMuWTMwMCxcbiAgICBiZzogY29sb3JzLlk1MCxcbiAgfSxcbiAgaW5mbzoge1xuICAgIGljb246IEluZm9JY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ONDAwLFxuICAgIGZnOiBjb2xvcnMuQjIwMCxcbiAgICBiZzogJ3doaXRlJyxcbiAgfSxcbn07XG5leHBvcnQgdHlwZSBBcHBlYXJhbmNlVHlwZXMgPSAkS2V5czx0eXBlb2YgYXBwZWFyYW5jZXM+O1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2KHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGZsZXhTaHJpbms6IDAsXG4gIG9wYWNpdHk6IDAuNSxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7IG9wYWNpdHk6IDEgfSxcbn0pO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIGZsZXhHcm93OiAxLFxuICBmb250U2l6ZTogMTQsXG4gIGxpbmVIZWlnaHQ6IDEuNCxcbiAgbWluSGVpZ2h0OiA0MCxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbn0pO1xuXG4vLyBOT1RFOiBpbnZva2UgYW5pbWF0aW9uIHdoZW4gTk9UIGBhdXRvRGlzbWlzc2Agd2l0aCBvcGFjaXR5IG9mIDAgdG8gYXZvaWQgYVxuLy8gcGFpbnQgYnVnIGluIEZpcmVGb3guXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MjUyODlcbmNvbnN0IENvdW50ZG93biA9IHN0eWxlZC5kaXYoKHsgYXV0b0Rpc21pc3NUaW1lb3V0LCBvcGFjaXR5IH0pID0+ICh7XG4gIGFuaW1hdGlvbjogYCR7c2hyaW5rfSAke2F1dG9EaXNtaXNzVGltZW91dH1tcyBsaW5lYXJgLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMSknLFxuICBib3R0b206IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgb3BhY2l0eSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdpZHRoOiAnMTAwJScsXG59KSk7XG5jb25zdCBJY29uID0gKHsgYXBwZWFyYW5jZSwgYXV0b0Rpc21pc3MsIGF1dG9EaXNtaXNzVGltZW91dCB9KSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXTtcbiAgY29uc3QgR2x5cGggPSBtZXRhLmljb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtZXRhLmZnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgY29sb3I6IG1ldGEuYmcsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGd1dHRlcixcbiAgICAgICAgcGFkZGluZ1RvcDogZ3V0dGVyLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb3VudGRvd25cbiAgICAgICAgb3BhY2l0eT17YXV0b0Rpc21pc3MgPyAxIDogMH1cbiAgICAgICAgYXV0b0Rpc21pc3NUaW1lb3V0PXthdXRvRGlzbWlzc1RpbWVvdXR9XG4gICAgICAvPlxuICAgICAgPEdseXBoIGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkge1xuICBjb25zdCBwb3MgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcbiAgY29uc3QgcmVsZXZhbnRQbGFjZW1lbnQgPSBwb3NbMV0gPT09ICdjZW50ZXInID8gcG9zWzBdIDogcG9zWzFdO1xuICBjb25zdCB0cmFuc2xhdGVNYXAgPSB7XG4gICAgcmlnaHQ6ICd0cmFuc2xhdGUzZCgxMjAlLCAwLCAwKScsXG4gICAgbGVmdDogJ3RyYW5zbGF0ZTNkKC0xMjAlLCAwLCAwKScsXG4gICAgYm90dG9tOiAndHJhbnNsYXRlM2QoMCwgMTIwJSwgMCknLFxuICAgIHRvcDogJ3RyYW5zbGF0ZTNkKDAsIC0xMjAlLCAwKScsXG4gIH07XG5cbiAgcmV0dXJuIHRyYW5zbGF0ZU1hcFtyZWxldmFudFBsYWNlbWVudF07XG59XG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uU3RhdGUgPSAnZW50ZXJpbmcnIHwgJ2VudGVyZWQnIHwgJ2V4aXRpbmcnIHwgJ2V4aXRlZCc7XG5jb25zdCB0b2FzdFN0YXRlcyA9IChwbGFjZW1lbnQ6IFBsYWNlbWVudCkgPT4gKHtcbiAgZW50ZXJpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBlbnRlcmVkOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScgfSxcbiAgZXhpdGluZzogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG4gIGV4aXRlZDogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG59KTtcbmNvbnN0IFRvYXN0RWxlbWVudCA9IHN0eWxlZC5kaXYoXG4gICh7IGFwcGVhcmFuY2UsIHBsYWNlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uU3RhdGUgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcGVhcmFuY2VzW2FwcGVhcmFuY2VdLmJnLFxuICAgICAgYm9yZGVyUmFkaXVzLFxuICAgICAgYm94U2hhZG93OiAnMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpJyxcbiAgICAgIGNvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS50ZXh0LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWFyZ2luQm90dG9tOiBndXR0ZXIsXG4gICAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7dHJhbnNpdGlvbkR1cmF0aW9ufW1zIGN1YmljLWJlemllcigwLjIsIDAsIDAsIDEpYCxcbiAgICAgIHdpZHRoOiB0b2FzdFdpZHRoLFxuICAgICAgLi4udG9hc3RTdGF0ZXMocGxhY2VtZW50KVt0cmFuc2l0aW9uU3RhdGVdLFxuICAgIH07XG4gIH1cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRGVmYXVsdFRvYXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgVG9hc3RQcm9wcyA9IHtcbiAgYXBwZWFyYW5jZTogQXBwZWFyYW5jZVR5cGVzLFxuICBhdXRvRGlzbWlzczogYm9vbGVhbiB8IG51bWJlcixcbiAgYXV0b0Rpc21pc3NUaW1lb3V0OiBudW1iZXIsIC8vIGluaGVyaXRlZCBmcm9tIFRvYXN0UHJvdmlkZXJcbiAgY2hpbGRyZW46IE5vZGUsXG4gIG9uRGlzbWlzczogRXZlbnQgPT4gKixcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIHRyYW5zaXRpb25TdGF0ZTogVHJhbnNpdGlvblN0YXRlLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFRvYXN0ID0gKHtcbiAgYXBwZWFyYW5jZSxcbiAgYXV0b0Rpc21pc3MsXG4gIGF1dG9EaXNtaXNzVGltZW91dCxcbiAgY2hpbGRyZW4sXG4gIG9uRGlzbWlzcyxcbiAgcGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHRyYW5zaXRpb25TdGF0ZSxcbn06IFRvYXN0UHJvcHMpID0+IChcbiAgPFRvYXN0RWxlbWVudFxuICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgdHJhbnNpdGlvblN0YXRlPXt0cmFuc2l0aW9uU3RhdGV9XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPXt0cmFuc2l0aW9uRHVyYXRpb259XG4gID5cbiAgICA8SWNvblxuICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgIGF1dG9EaXNtaXNzPXthdXRvRGlzbWlzc31cbiAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgIC8+XG4gICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICB7b25EaXNtaXNzID8gKFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRpc21pc3N9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8QTExeVRleHQ+Q2xvc2U8L0ExMXlUZXh0PlxuICAgICAgPC9CdXR0b24+XG4gICAgKSA6IG51bGx9XG4gIDwvVG9hc3RFbGVtZW50PlxuKTtcbiJdfQ== */', 'label:shrink;');

// a11y helper
var A11yText = function A11yText(_ref) {
  var Tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ['tag']);

  return _react2.default.createElement(Tag, _extends({
    className: (0, _emotion.css)({
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: 1
    }, '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJJIiwiZmlsZSI6Ii4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgQ2hlY2tJY29uLCBGbGFtZUljb24sIEluZm9JY29uLCBDbG9zZUljb24sIEFsZXJ0SWNvbiB9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1cyA9IDQ7XG5leHBvcnQgY29uc3QgZ3V0dGVyID0gODtcbmV4cG9ydCBjb25zdCB0b2FzdFdpZHRoID0gMzYwO1xuZXhwb3J0IGNvbnN0IHNocmluayA9IGtleWZyYW1lc2Bmcm9tIHsgaGVpZ2h0OiAxMDAlOyB9IHRvIHsgaGVpZ2h0OiAwJSB9YDtcblxuLy8gYTExeSBoZWxwZXJcbmNvbnN0IEExMXlUZXh0ID0gKHsgdGFnOiBUYWcsIC4uLnByb3BzIH0pID0+IChcbiAgPFRhZ1xuICAgIGNzcz17e1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbkExMXlUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFnOiAnc3BhbicsXG59O1xuXG4vLyBkZWZhdWx0IGFwcGVhcmFuY2VzXG5cbmNvbnN0IGFwcGVhcmFuY2VzID0ge1xuICBzdWNjZXNzOiB7XG4gICAgaWNvbjogQ2hlY2tJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5HNTAwLFxuICAgIGZnOiBjb2xvcnMuRzMwMCxcbiAgICBiZzogY29sb3JzLkc1MCxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBpY29uOiBGbGFtZUljb24sXG4gICAgdGV4dDogY29sb3JzLlI1MDAsXG4gICAgZmc6IGNvbG9ycy5SMzAwLFxuICAgIGJnOiBjb2xvcnMuUjUwLFxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgaWNvbjogQWxlcnRJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ZNTAwLFxuICAgIGZnOiBjb2xvcnMuWTMwMCxcbiAgICBiZzogY29sb3JzLlk1MCxcbiAgfSxcbiAgaW5mbzoge1xuICAgIGljb246IEluZm9JY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ONDAwLFxuICAgIGZnOiBjb2xvcnMuQjIwMCxcbiAgICBiZzogJ3doaXRlJyxcbiAgfSxcbn07XG5leHBvcnQgdHlwZSBBcHBlYXJhbmNlVHlwZXMgPSAkS2V5czx0eXBlb2YgYXBwZWFyYW5jZXM+O1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2KHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGZsZXhTaHJpbms6IDAsXG4gIG9wYWNpdHk6IDAuNSxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7IG9wYWNpdHk6IDEgfSxcbn0pO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIGZsZXhHcm93OiAxLFxuICBmb250U2l6ZTogMTQsXG4gIGxpbmVIZWlnaHQ6IDEuNCxcbiAgbWluSGVpZ2h0OiA0MCxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbn0pO1xuXG4vLyBOT1RFOiBpbnZva2UgYW5pbWF0aW9uIHdoZW4gTk9UIGBhdXRvRGlzbWlzc2Agd2l0aCBvcGFjaXR5IG9mIDAgdG8gYXZvaWQgYVxuLy8gcGFpbnQgYnVnIGluIEZpcmVGb3guXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MjUyODlcbmNvbnN0IENvdW50ZG93biA9IHN0eWxlZC5kaXYoKHsgYXV0b0Rpc21pc3NUaW1lb3V0LCBvcGFjaXR5IH0pID0+ICh7XG4gIGFuaW1hdGlvbjogYCR7c2hyaW5rfSAke2F1dG9EaXNtaXNzVGltZW91dH1tcyBsaW5lYXJgLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMSknLFxuICBib3R0b206IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgb3BhY2l0eSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdpZHRoOiAnMTAwJScsXG59KSk7XG5jb25zdCBJY29uID0gKHsgYXBwZWFyYW5jZSwgYXV0b0Rpc21pc3MsIGF1dG9EaXNtaXNzVGltZW91dCB9KSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXTtcbiAgY29uc3QgR2x5cGggPSBtZXRhLmljb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtZXRhLmZnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgY29sb3I6IG1ldGEuYmcsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGd1dHRlcixcbiAgICAgICAgcGFkZGluZ1RvcDogZ3V0dGVyLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb3VudGRvd25cbiAgICAgICAgb3BhY2l0eT17YXV0b0Rpc21pc3MgPyAxIDogMH1cbiAgICAgICAgYXV0b0Rpc21pc3NUaW1lb3V0PXthdXRvRGlzbWlzc1RpbWVvdXR9XG4gICAgICAvPlxuICAgICAgPEdseXBoIGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkge1xuICBjb25zdCBwb3MgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcbiAgY29uc3QgcmVsZXZhbnRQbGFjZW1lbnQgPSBwb3NbMV0gPT09ICdjZW50ZXInID8gcG9zWzBdIDogcG9zWzFdO1xuICBjb25zdCB0cmFuc2xhdGVNYXAgPSB7XG4gICAgcmlnaHQ6ICd0cmFuc2xhdGUzZCgxMjAlLCAwLCAwKScsXG4gICAgbGVmdDogJ3RyYW5zbGF0ZTNkKC0xMjAlLCAwLCAwKScsXG4gICAgYm90dG9tOiAndHJhbnNsYXRlM2QoMCwgMTIwJSwgMCknLFxuICAgIHRvcDogJ3RyYW5zbGF0ZTNkKDAsIC0xMjAlLCAwKScsXG4gIH07XG5cbiAgcmV0dXJuIHRyYW5zbGF0ZU1hcFtyZWxldmFudFBsYWNlbWVudF07XG59XG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uU3RhdGUgPSAnZW50ZXJpbmcnIHwgJ2VudGVyZWQnIHwgJ2V4aXRpbmcnIHwgJ2V4aXRlZCc7XG5jb25zdCB0b2FzdFN0YXRlcyA9IChwbGFjZW1lbnQ6IFBsYWNlbWVudCkgPT4gKHtcbiAgZW50ZXJpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBlbnRlcmVkOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScgfSxcbiAgZXhpdGluZzogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG4gIGV4aXRlZDogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG59KTtcbmNvbnN0IFRvYXN0RWxlbWVudCA9IHN0eWxlZC5kaXYoXG4gICh7IGFwcGVhcmFuY2UsIHBsYWNlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uU3RhdGUgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcGVhcmFuY2VzW2FwcGVhcmFuY2VdLmJnLFxuICAgICAgYm9yZGVyUmFkaXVzLFxuICAgICAgYm94U2hhZG93OiAnMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpJyxcbiAgICAgIGNvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS50ZXh0LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWFyZ2luQm90dG9tOiBndXR0ZXIsXG4gICAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7dHJhbnNpdGlvbkR1cmF0aW9ufW1zIGN1YmljLWJlemllcigwLjIsIDAsIDAsIDEpYCxcbiAgICAgIHdpZHRoOiB0b2FzdFdpZHRoLFxuICAgICAgLi4udG9hc3RTdGF0ZXMocGxhY2VtZW50KVt0cmFuc2l0aW9uU3RhdGVdLFxuICAgIH07XG4gIH1cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRGVmYXVsdFRvYXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgVG9hc3RQcm9wcyA9IHtcbiAgYXBwZWFyYW5jZTogQXBwZWFyYW5jZVR5cGVzLFxuICBhdXRvRGlzbWlzczogYm9vbGVhbiB8IG51bWJlcixcbiAgYXV0b0Rpc21pc3NUaW1lb3V0OiBudW1iZXIsIC8vIGluaGVyaXRlZCBmcm9tIFRvYXN0UHJvdmlkZXJcbiAgY2hpbGRyZW46IE5vZGUsXG4gIG9uRGlzbWlzczogRXZlbnQgPT4gKixcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIHRyYW5zaXRpb25TdGF0ZTogVHJhbnNpdGlvblN0YXRlLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFRvYXN0ID0gKHtcbiAgYXBwZWFyYW5jZSxcbiAgYXV0b0Rpc21pc3MsXG4gIGF1dG9EaXNtaXNzVGltZW91dCxcbiAgY2hpbGRyZW4sXG4gIG9uRGlzbWlzcyxcbiAgcGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHRyYW5zaXRpb25TdGF0ZSxcbn06IFRvYXN0UHJvcHMpID0+IChcbiAgPFRvYXN0RWxlbWVudFxuICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgdHJhbnNpdGlvblN0YXRlPXt0cmFuc2l0aW9uU3RhdGV9XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPXt0cmFuc2l0aW9uRHVyYXRpb259XG4gID5cbiAgICA8SWNvblxuICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgIGF1dG9EaXNtaXNzPXthdXRvRGlzbWlzc31cbiAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgIC8+XG4gICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICB7b25EaXNtaXNzID8gKFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRpc21pc3N9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8QTExeVRleHQ+Q2xvc2U8L0ExMXlUZXh0PlxuICAgICAgPC9CdXR0b24+XG4gICAgKSA6IG51bGx9XG4gIDwvVG9hc3RFbGVtZW50PlxuKTtcbiJdfQ== */')
  }, props));
};
A11yText.defaultProps = {
  tag: 'span'
};

// default appearances

var appearances = {
  success: {
    icon: _icons.CheckIcon,
    text: colors.G500,
    fg: colors.G300,
    bg: colors.G50
  },
  error: {
    icon: _icons.FlameIcon,
    text: colors.R500,
    fg: colors.R300,
    bg: colors.R50
  },
  warning: {
    icon: _icons.AlertIcon,
    text: colors.Y500,
    fg: colors.Y300,
    bg: colors.Y50
  },
  info: {
    icon: _icons.InfoIcon,
    text: colors.N400,
    fg: colors.B200,
    bg: 'white'
  }
};


var Button = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1rce5zx0',
  label: 'Button'
})({
  cursor: 'pointer',
  flexShrink: 0,
  opacity: 0.5,
  padding: gutter + 'px ' + gutter * 1.5 + 'px',
  transition: 'opacity 150ms',

  ':hover': { opacity: 1 }
}, '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VlIiwiZmlsZSI6Ii4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgQ2hlY2tJY29uLCBGbGFtZUljb24sIEluZm9JY29uLCBDbG9zZUljb24sIEFsZXJ0SWNvbiB9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1cyA9IDQ7XG5leHBvcnQgY29uc3QgZ3V0dGVyID0gODtcbmV4cG9ydCBjb25zdCB0b2FzdFdpZHRoID0gMzYwO1xuZXhwb3J0IGNvbnN0IHNocmluayA9IGtleWZyYW1lc2Bmcm9tIHsgaGVpZ2h0OiAxMDAlOyB9IHRvIHsgaGVpZ2h0OiAwJSB9YDtcblxuLy8gYTExeSBoZWxwZXJcbmNvbnN0IEExMXlUZXh0ID0gKHsgdGFnOiBUYWcsIC4uLnByb3BzIH0pID0+IChcbiAgPFRhZ1xuICAgIGNzcz17e1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbkExMXlUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFnOiAnc3BhbicsXG59O1xuXG4vLyBkZWZhdWx0IGFwcGVhcmFuY2VzXG5cbmNvbnN0IGFwcGVhcmFuY2VzID0ge1xuICBzdWNjZXNzOiB7XG4gICAgaWNvbjogQ2hlY2tJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5HNTAwLFxuICAgIGZnOiBjb2xvcnMuRzMwMCxcbiAgICBiZzogY29sb3JzLkc1MCxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBpY29uOiBGbGFtZUljb24sXG4gICAgdGV4dDogY29sb3JzLlI1MDAsXG4gICAgZmc6IGNvbG9ycy5SMzAwLFxuICAgIGJnOiBjb2xvcnMuUjUwLFxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgaWNvbjogQWxlcnRJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ZNTAwLFxuICAgIGZnOiBjb2xvcnMuWTMwMCxcbiAgICBiZzogY29sb3JzLlk1MCxcbiAgfSxcbiAgaW5mbzoge1xuICAgIGljb246IEluZm9JY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ONDAwLFxuICAgIGZnOiBjb2xvcnMuQjIwMCxcbiAgICBiZzogJ3doaXRlJyxcbiAgfSxcbn07XG5leHBvcnQgdHlwZSBBcHBlYXJhbmNlVHlwZXMgPSAkS2V5czx0eXBlb2YgYXBwZWFyYW5jZXM+O1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2KHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGZsZXhTaHJpbms6IDAsXG4gIG9wYWNpdHk6IDAuNSxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7IG9wYWNpdHk6IDEgfSxcbn0pO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIGZsZXhHcm93OiAxLFxuICBmb250U2l6ZTogMTQsXG4gIGxpbmVIZWlnaHQ6IDEuNCxcbiAgbWluSGVpZ2h0OiA0MCxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbn0pO1xuXG4vLyBOT1RFOiBpbnZva2UgYW5pbWF0aW9uIHdoZW4gTk9UIGBhdXRvRGlzbWlzc2Agd2l0aCBvcGFjaXR5IG9mIDAgdG8gYXZvaWQgYVxuLy8gcGFpbnQgYnVnIGluIEZpcmVGb3guXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MjUyODlcbmNvbnN0IENvdW50ZG93biA9IHN0eWxlZC5kaXYoKHsgYXV0b0Rpc21pc3NUaW1lb3V0LCBvcGFjaXR5IH0pID0+ICh7XG4gIGFuaW1hdGlvbjogYCR7c2hyaW5rfSAke2F1dG9EaXNtaXNzVGltZW91dH1tcyBsaW5lYXJgLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMSknLFxuICBib3R0b206IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgb3BhY2l0eSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdpZHRoOiAnMTAwJScsXG59KSk7XG5jb25zdCBJY29uID0gKHsgYXBwZWFyYW5jZSwgYXV0b0Rpc21pc3MsIGF1dG9EaXNtaXNzVGltZW91dCB9KSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXTtcbiAgY29uc3QgR2x5cGggPSBtZXRhLmljb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtZXRhLmZnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgY29sb3I6IG1ldGEuYmcsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGd1dHRlcixcbiAgICAgICAgcGFkZGluZ1RvcDogZ3V0dGVyLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb3VudGRvd25cbiAgICAgICAgb3BhY2l0eT17YXV0b0Rpc21pc3MgPyAxIDogMH1cbiAgICAgICAgYXV0b0Rpc21pc3NUaW1lb3V0PXthdXRvRGlzbWlzc1RpbWVvdXR9XG4gICAgICAvPlxuICAgICAgPEdseXBoIGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkge1xuICBjb25zdCBwb3MgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcbiAgY29uc3QgcmVsZXZhbnRQbGFjZW1lbnQgPSBwb3NbMV0gPT09ICdjZW50ZXInID8gcG9zWzBdIDogcG9zWzFdO1xuICBjb25zdCB0cmFuc2xhdGVNYXAgPSB7XG4gICAgcmlnaHQ6ICd0cmFuc2xhdGUzZCgxMjAlLCAwLCAwKScsXG4gICAgbGVmdDogJ3RyYW5zbGF0ZTNkKC0xMjAlLCAwLCAwKScsXG4gICAgYm90dG9tOiAndHJhbnNsYXRlM2QoMCwgMTIwJSwgMCknLFxuICAgIHRvcDogJ3RyYW5zbGF0ZTNkKDAsIC0xMjAlLCAwKScsXG4gIH07XG5cbiAgcmV0dXJuIHRyYW5zbGF0ZU1hcFtyZWxldmFudFBsYWNlbWVudF07XG59XG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uU3RhdGUgPSAnZW50ZXJpbmcnIHwgJ2VudGVyZWQnIHwgJ2V4aXRpbmcnIHwgJ2V4aXRlZCc7XG5jb25zdCB0b2FzdFN0YXRlcyA9IChwbGFjZW1lbnQ6IFBsYWNlbWVudCkgPT4gKHtcbiAgZW50ZXJpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBlbnRlcmVkOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScgfSxcbiAgZXhpdGluZzogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG4gIGV4aXRlZDogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG59KTtcbmNvbnN0IFRvYXN0RWxlbWVudCA9IHN0eWxlZC5kaXYoXG4gICh7IGFwcGVhcmFuY2UsIHBsYWNlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uU3RhdGUgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcGVhcmFuY2VzW2FwcGVhcmFuY2VdLmJnLFxuICAgICAgYm9yZGVyUmFkaXVzLFxuICAgICAgYm94U2hhZG93OiAnMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpJyxcbiAgICAgIGNvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS50ZXh0LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWFyZ2luQm90dG9tOiBndXR0ZXIsXG4gICAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7dHJhbnNpdGlvbkR1cmF0aW9ufW1zIGN1YmljLWJlemllcigwLjIsIDAsIDAsIDEpYCxcbiAgICAgIHdpZHRoOiB0b2FzdFdpZHRoLFxuICAgICAgLi4udG9hc3RTdGF0ZXMocGxhY2VtZW50KVt0cmFuc2l0aW9uU3RhdGVdLFxuICAgIH07XG4gIH1cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRGVmYXVsdFRvYXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgVG9hc3RQcm9wcyA9IHtcbiAgYXBwZWFyYW5jZTogQXBwZWFyYW5jZVR5cGVzLFxuICBhdXRvRGlzbWlzczogYm9vbGVhbiB8IG51bWJlcixcbiAgYXV0b0Rpc21pc3NUaW1lb3V0OiBudW1iZXIsIC8vIGluaGVyaXRlZCBmcm9tIFRvYXN0UHJvdmlkZXJcbiAgY2hpbGRyZW46IE5vZGUsXG4gIG9uRGlzbWlzczogRXZlbnQgPT4gKixcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIHRyYW5zaXRpb25TdGF0ZTogVHJhbnNpdGlvblN0YXRlLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFRvYXN0ID0gKHtcbiAgYXBwZWFyYW5jZSxcbiAgYXV0b0Rpc21pc3MsXG4gIGF1dG9EaXNtaXNzVGltZW91dCxcbiAgY2hpbGRyZW4sXG4gIG9uRGlzbWlzcyxcbiAgcGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHRyYW5zaXRpb25TdGF0ZSxcbn06IFRvYXN0UHJvcHMpID0+IChcbiAgPFRvYXN0RWxlbWVudFxuICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgdHJhbnNpdGlvblN0YXRlPXt0cmFuc2l0aW9uU3RhdGV9XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPXt0cmFuc2l0aW9uRHVyYXRpb259XG4gID5cbiAgICA8SWNvblxuICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgIGF1dG9EaXNtaXNzPXthdXRvRGlzbWlzc31cbiAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgIC8+XG4gICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICB7b25EaXNtaXNzID8gKFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRpc21pc3N9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8QTExeVRleHQ+Q2xvc2U8L0ExMXlUZXh0PlxuICAgICAgPC9CdXR0b24+XG4gICAgKSA6IG51bGx9XG4gIDwvVG9hc3RFbGVtZW50PlxuKTtcbiJdfQ== */');

var Content = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1rce5zx1',
  label: 'Content'
})({
  flexGrow: 1,
  fontSize: 14,
  lineHeight: 1.4,
  minHeight: 40,
  padding: gutter + 'px ' + gutter * 1.5 + 'px'
}, '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVnQiIsImZpbGUiOiIuLi9zcmMvVG9hc3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmltcG9ydCB7IENoZWNrSWNvbiwgRmxhbWVJY29uLCBJbmZvSWNvbiwgQ2xvc2VJY29uLCBBbGVydEljb24gfSBmcm9tICcuL2ljb25zJztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBjb21tb25cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXMgPSA0O1xuZXhwb3J0IGNvbnN0IGd1dHRlciA9IDg7XG5leHBvcnQgY29uc3QgdG9hc3RXaWR0aCA9IDM2MDtcbmV4cG9ydCBjb25zdCBzaHJpbmsgPSBrZXlmcmFtZXNgZnJvbSB7IGhlaWdodDogMTAwJTsgfSB0byB7IGhlaWdodDogMCUgfWA7XG5cbi8vIGExMXkgaGVscGVyXG5jb25zdCBBMTF5VGV4dCA9ICh7IHRhZzogVGFnLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxUYWdcbiAgICBjc3M9e3tcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCknLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB3aWR0aDogMSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5BMTF5VGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhZzogJ3NwYW4nLFxufTtcblxuLy8gZGVmYXVsdCBhcHBlYXJhbmNlc1xuXG5jb25zdCBhcHBlYXJhbmNlcyA9IHtcbiAgc3VjY2Vzczoge1xuICAgIGljb246IENoZWNrSWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuRzUwMCxcbiAgICBmZzogY29sb3JzLkczMDAsXG4gICAgYmc6IGNvbG9ycy5HNTAsXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgaWNvbjogRmxhbWVJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5SNTAwLFxuICAgIGZnOiBjb2xvcnMuUjMwMCxcbiAgICBiZzogY29sb3JzLlI1MCxcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGljb246IEFsZXJ0SWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuWTUwMCxcbiAgICBmZzogY29sb3JzLlkzMDAsXG4gICAgYmc6IGNvbG9ycy5ZNTAsXG4gIH0sXG4gIGluZm86IHtcbiAgICBpY29uOiBJbmZvSWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuTjQwMCxcbiAgICBmZzogY29sb3JzLkIyMDAsXG4gICAgYmc6ICd3aGl0ZScsXG4gIH0sXG59O1xuZXhwb3J0IHR5cGUgQXBwZWFyYW5jZVR5cGVzID0gJEtleXM8dHlwZW9mIGFwcGVhcmFuY2VzPjtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdih7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBmbGV4U2hyaW5rOiAwLFxuICBvcGFjaXR5OiAwLjUsXG4gIHBhZGRpbmc6IGAke2d1dHRlcn1weCAke2d1dHRlciAqIDEuNX1weGAsXG4gIHRyYW5zaXRpb246ICdvcGFjaXR5IDE1MG1zJyxcblxuICAnOmhvdmVyJzogeyBvcGFjaXR5OiAxIH0sXG59KTtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXYoe1xuICBmbGV4R3JvdzogMSxcbiAgZm9udFNpemU6IDE0LFxuICBsaW5lSGVpZ2h0OiAxLjQsXG4gIG1pbkhlaWdodDogNDAsXG4gIHBhZGRpbmc6IGAke2d1dHRlcn1weCAke2d1dHRlciAqIDEuNX1weGAsXG59KTtcblxuLy8gTk9URTogaW52b2tlIGFuaW1hdGlvbiB3aGVuIE5PVCBgYXV0b0Rpc21pc3NgIHdpdGggb3BhY2l0eSBvZiAwIHRvIGF2b2lkIGFcbi8vIHBhaW50IGJ1ZyBpbiBGaXJlRm94LlxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjI1Mjg5XG5jb25zdCBDb3VudGRvd24gPSBzdHlsZWQuZGl2KCh7IGF1dG9EaXNtaXNzVGltZW91dCwgb3BhY2l0eSB9KSA9PiAoe1xuICBhbmltYXRpb246IGAke3Nocmlua30gJHthdXRvRGlzbWlzc1RpbWVvdXR9bXMgbGluZWFyYCxcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjEpJyxcbiAgYm90dG9tOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIG9wYWNpdHksXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB3aWR0aDogJzEwMCUnLFxufSkpO1xuY29uc3QgSWNvbiA9ICh7IGFwcGVhcmFuY2UsIGF1dG9EaXNtaXNzLCBhdXRvRGlzbWlzc1RpbWVvdXQgfSkgPT4ge1xuICBjb25zdCBtZXRhID0gYXBwZWFyYW5jZXNbYXBwZWFyYW5jZV07XG4gIGNvbnN0IEdseXBoID0gbWV0YS5pY29uO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbWV0YS5mZyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGNvbG9yOiBtZXRhLmJnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBndXR0ZXIsXG4gICAgICAgIHBhZGRpbmdUb3A6IGd1dHRlcixcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q291bnRkb3duXG4gICAgICAgIG9wYWNpdHk9e2F1dG9EaXNtaXNzID8gMSA6IDB9XG4gICAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgICAgLz5cbiAgICAgIDxHbHlwaCBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMSB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIHtcbiAgY29uc3QgcG9zID0gcGxhY2VtZW50LnNwbGl0KCctJyk7XG4gIGNvbnN0IHJlbGV2YW50UGxhY2VtZW50ID0gcG9zWzFdID09PSAnY2VudGVyJyA/IHBvc1swXSA6IHBvc1sxXTtcbiAgY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICAgIHJpZ2h0OiAndHJhbnNsYXRlM2QoMTIwJSwgMCwgMCknLFxuICAgIGxlZnQ6ICd0cmFuc2xhdGUzZCgtMTIwJSwgMCwgMCknLFxuICAgIGJvdHRvbTogJ3RyYW5zbGF0ZTNkKDAsIDEyMCUsIDApJyxcbiAgICB0b3A6ICd0cmFuc2xhdGUzZCgwLCAtMTIwJSwgMCknLFxuICB9O1xuXG4gIHJldHVybiB0cmFuc2xhdGVNYXBbcmVsZXZhbnRQbGFjZW1lbnRdO1xufVxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblN0YXRlID0gJ2VudGVyaW5nJyB8ICdlbnRlcmVkJyB8ICdleGl0aW5nJyB8ICdleGl0ZWQnO1xuY29uc3QgdG9hc3RTdGF0ZXMgPSAocGxhY2VtZW50OiBQbGFjZW1lbnQpID0+ICh7XG4gIGVudGVyaW5nOiB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkgfSxcbiAgZW50ZXJlZDogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknIH0sXG4gIGV4aXRpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBleGl0ZWQ6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxufSk7XG5jb25zdCBUb2FzdEVsZW1lbnQgPSBzdHlsZWQuZGl2KFxuICAoeyBhcHBlYXJhbmNlLCBwbGFjZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvblN0YXRlIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS5iZyxcbiAgICAgIGJvcmRlclJhZGl1cyxcbiAgICAgIGJveFNoYWRvdzogJzAgM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTc1KScsXG4gICAgICBjb2xvcjogYXBwZWFyYW5jZXNbYXBwZWFyYW5jZV0udGV4dCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1hcmdpbkJvdHRvbTogZ3V0dGVyLFxuICAgICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAke3RyYW5zaXRpb25EdXJhdGlvbn1tcyBjdWJpYy1iZXppZXIoMC4yLCAwLCAwLCAxKWAsXG4gICAgICB3aWR0aDogdG9hc3RXaWR0aCxcbiAgICAgIC4uLnRvYXN0U3RhdGVzKHBsYWNlbWVudClbdHJhbnNpdGlvblN0YXRlXSxcbiAgICB9O1xuICB9XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERlZmF1bHRUb2FzdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFRvYXN0UHJvcHMgPSB7XG4gIGFwcGVhcmFuY2U6IEFwcGVhcmFuY2VUeXBlcyxcbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW4gfCBudW1iZXIsXG4gIGF1dG9EaXNtaXNzVGltZW91dDogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIGNoaWxkcmVuOiBOb2RlLFxuICBvbkRpc21pc3M6IEV2ZW50ID0+ICosXG4gIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciwgLy8gaW5oZXJpdGVkIGZyb20gVG9hc3RQcm92aWRlclxuICB0cmFuc2l0aW9uU3RhdGU6IFRyYW5zaXRpb25TdGF0ZSwgLy8gaW5oZXJpdGVkIGZyb20gVG9hc3RQcm92aWRlclxufTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUb2FzdCA9ICh7XG4gIGFwcGVhcmFuY2UsXG4gIGF1dG9EaXNtaXNzLFxuICBhdXRvRGlzbWlzc1RpbWVvdXQsXG4gIGNoaWxkcmVuLFxuICBvbkRpc21pc3MsXG4gIHBsYWNlbWVudCxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICB0cmFuc2l0aW9uU3RhdGUsXG59OiBUb2FzdFByb3BzKSA9PiAoXG4gIDxUb2FzdEVsZW1lbnRcbiAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgIHRyYW5zaXRpb25TdGF0ZT17dHJhbnNpdGlvblN0YXRlfVxuICAgIHRyYW5zaXRpb25EdXJhdGlvbj17dHJhbnNpdGlvbkR1cmF0aW9ufVxuICA+XG4gICAgPEljb25cbiAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICBhdXRvRGlzbWlzcz17YXV0b0Rpc21pc3N9XG4gICAgICBhdXRvRGlzbWlzc1RpbWVvdXQ9e2F1dG9EaXNtaXNzVGltZW91dH1cbiAgICAvPlxuICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAge29uRGlzbWlzcyA/IChcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25EaXNtaXNzfSByb2xlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPEExMXlUZXh0PkNsb3NlPC9BMTF5VGV4dD5cbiAgICAgIDwvQnV0dG9uPlxuICAgICkgOiBudWxsfVxuICA8L1RvYXN0RWxlbWVudD5cbik7XG4iXX0= */');

// NOTE: invoke animation when NOT `autoDismiss` with opacity of 0 to avoid a
// paint bug in FireFox.
// https://bugzilla.mozilla.org/show_bug.cgi?id=625289
var Countdown = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1rce5zx2',
  label: 'Countdown'
})(function (_ref2) {
  var autoDismissTimeout = _ref2.autoDismissTimeout,
      opacity = _ref2.opacity;
  return {
    animation: shrink + ' ' + autoDismissTimeout + 'ms linear',
    backgroundColor: 'rgba(0,0,0,0.1)',
    bottom: 0,
    height: 0,
    left: 0,
    opacity: opacity,
    position: 'absolute',
    width: '100%'
  };
}, '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZrQiIsImZpbGUiOiIuLi9zcmMvVG9hc3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmltcG9ydCB7IENoZWNrSWNvbiwgRmxhbWVJY29uLCBJbmZvSWNvbiwgQ2xvc2VJY29uLCBBbGVydEljb24gfSBmcm9tICcuL2ljb25zJztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBjb21tb25cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXMgPSA0O1xuZXhwb3J0IGNvbnN0IGd1dHRlciA9IDg7XG5leHBvcnQgY29uc3QgdG9hc3RXaWR0aCA9IDM2MDtcbmV4cG9ydCBjb25zdCBzaHJpbmsgPSBrZXlmcmFtZXNgZnJvbSB7IGhlaWdodDogMTAwJTsgfSB0byB7IGhlaWdodDogMCUgfWA7XG5cbi8vIGExMXkgaGVscGVyXG5jb25zdCBBMTF5VGV4dCA9ICh7IHRhZzogVGFnLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxUYWdcbiAgICBjc3M9e3tcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCknLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB3aWR0aDogMSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5BMTF5VGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhZzogJ3NwYW4nLFxufTtcblxuLy8gZGVmYXVsdCBhcHBlYXJhbmNlc1xuXG5jb25zdCBhcHBlYXJhbmNlcyA9IHtcbiAgc3VjY2Vzczoge1xuICAgIGljb246IENoZWNrSWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuRzUwMCxcbiAgICBmZzogY29sb3JzLkczMDAsXG4gICAgYmc6IGNvbG9ycy5HNTAsXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgaWNvbjogRmxhbWVJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5SNTAwLFxuICAgIGZnOiBjb2xvcnMuUjMwMCxcbiAgICBiZzogY29sb3JzLlI1MCxcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGljb246IEFsZXJ0SWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuWTUwMCxcbiAgICBmZzogY29sb3JzLlkzMDAsXG4gICAgYmc6IGNvbG9ycy5ZNTAsXG4gIH0sXG4gIGluZm86IHtcbiAgICBpY29uOiBJbmZvSWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuTjQwMCxcbiAgICBmZzogY29sb3JzLkIyMDAsXG4gICAgYmc6ICd3aGl0ZScsXG4gIH0sXG59O1xuZXhwb3J0IHR5cGUgQXBwZWFyYW5jZVR5cGVzID0gJEtleXM8dHlwZW9mIGFwcGVhcmFuY2VzPjtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdih7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBmbGV4U2hyaW5rOiAwLFxuICBvcGFjaXR5OiAwLjUsXG4gIHBhZGRpbmc6IGAke2d1dHRlcn1weCAke2d1dHRlciAqIDEuNX1weGAsXG4gIHRyYW5zaXRpb246ICdvcGFjaXR5IDE1MG1zJyxcblxuICAnOmhvdmVyJzogeyBvcGFjaXR5OiAxIH0sXG59KTtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXYoe1xuICBmbGV4R3JvdzogMSxcbiAgZm9udFNpemU6IDE0LFxuICBsaW5lSGVpZ2h0OiAxLjQsXG4gIG1pbkhlaWdodDogNDAsXG4gIHBhZGRpbmc6IGAke2d1dHRlcn1weCAke2d1dHRlciAqIDEuNX1weGAsXG59KTtcblxuLy8gTk9URTogaW52b2tlIGFuaW1hdGlvbiB3aGVuIE5PVCBgYXV0b0Rpc21pc3NgIHdpdGggb3BhY2l0eSBvZiAwIHRvIGF2b2lkIGFcbi8vIHBhaW50IGJ1ZyBpbiBGaXJlRm94LlxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjI1Mjg5XG5jb25zdCBDb3VudGRvd24gPSBzdHlsZWQuZGl2KCh7IGF1dG9EaXNtaXNzVGltZW91dCwgb3BhY2l0eSB9KSA9PiAoe1xuICBhbmltYXRpb246IGAke3Nocmlua30gJHthdXRvRGlzbWlzc1RpbWVvdXR9bXMgbGluZWFyYCxcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjEpJyxcbiAgYm90dG9tOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIG9wYWNpdHksXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB3aWR0aDogJzEwMCUnLFxufSkpO1xuY29uc3QgSWNvbiA9ICh7IGFwcGVhcmFuY2UsIGF1dG9EaXNtaXNzLCBhdXRvRGlzbWlzc1RpbWVvdXQgfSkgPT4ge1xuICBjb25zdCBtZXRhID0gYXBwZWFyYW5jZXNbYXBwZWFyYW5jZV07XG4gIGNvbnN0IEdseXBoID0gbWV0YS5pY29uO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbWV0YS5mZyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGNvbG9yOiBtZXRhLmJnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBndXR0ZXIsXG4gICAgICAgIHBhZGRpbmdUb3A6IGd1dHRlcixcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q291bnRkb3duXG4gICAgICAgIG9wYWNpdHk9e2F1dG9EaXNtaXNzID8gMSA6IDB9XG4gICAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgICAgLz5cbiAgICAgIDxHbHlwaCBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMSB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIHtcbiAgY29uc3QgcG9zID0gcGxhY2VtZW50LnNwbGl0KCctJyk7XG4gIGNvbnN0IHJlbGV2YW50UGxhY2VtZW50ID0gcG9zWzFdID09PSAnY2VudGVyJyA/IHBvc1swXSA6IHBvc1sxXTtcbiAgY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICAgIHJpZ2h0OiAndHJhbnNsYXRlM2QoMTIwJSwgMCwgMCknLFxuICAgIGxlZnQ6ICd0cmFuc2xhdGUzZCgtMTIwJSwgMCwgMCknLFxuICAgIGJvdHRvbTogJ3RyYW5zbGF0ZTNkKDAsIDEyMCUsIDApJyxcbiAgICB0b3A6ICd0cmFuc2xhdGUzZCgwLCAtMTIwJSwgMCknLFxuICB9O1xuXG4gIHJldHVybiB0cmFuc2xhdGVNYXBbcmVsZXZhbnRQbGFjZW1lbnRdO1xufVxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblN0YXRlID0gJ2VudGVyaW5nJyB8ICdlbnRlcmVkJyB8ICdleGl0aW5nJyB8ICdleGl0ZWQnO1xuY29uc3QgdG9hc3RTdGF0ZXMgPSAocGxhY2VtZW50OiBQbGFjZW1lbnQpID0+ICh7XG4gIGVudGVyaW5nOiB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkgfSxcbiAgZW50ZXJlZDogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknIH0sXG4gIGV4aXRpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBleGl0ZWQ6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxufSk7XG5jb25zdCBUb2FzdEVsZW1lbnQgPSBzdHlsZWQuZGl2KFxuICAoeyBhcHBlYXJhbmNlLCBwbGFjZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvblN0YXRlIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS5iZyxcbiAgICAgIGJvcmRlclJhZGl1cyxcbiAgICAgIGJveFNoYWRvdzogJzAgM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTc1KScsXG4gICAgICBjb2xvcjogYXBwZWFyYW5jZXNbYXBwZWFyYW5jZV0udGV4dCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1hcmdpbkJvdHRvbTogZ3V0dGVyLFxuICAgICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAke3RyYW5zaXRpb25EdXJhdGlvbn1tcyBjdWJpYy1iZXppZXIoMC4yLCAwLCAwLCAxKWAsXG4gICAgICB3aWR0aDogdG9hc3RXaWR0aCxcbiAgICAgIC4uLnRvYXN0U3RhdGVzKHBsYWNlbWVudClbdHJhbnNpdGlvblN0YXRlXSxcbiAgICB9O1xuICB9XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERlZmF1bHRUb2FzdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFRvYXN0UHJvcHMgPSB7XG4gIGFwcGVhcmFuY2U6IEFwcGVhcmFuY2VUeXBlcyxcbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW4gfCBudW1iZXIsXG4gIGF1dG9EaXNtaXNzVGltZW91dDogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIGNoaWxkcmVuOiBOb2RlLFxuICBvbkRpc21pc3M6IEV2ZW50ID0+ICosXG4gIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciwgLy8gaW5oZXJpdGVkIGZyb20gVG9hc3RQcm92aWRlclxuICB0cmFuc2l0aW9uU3RhdGU6IFRyYW5zaXRpb25TdGF0ZSwgLy8gaW5oZXJpdGVkIGZyb20gVG9hc3RQcm92aWRlclxufTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUb2FzdCA9ICh7XG4gIGFwcGVhcmFuY2UsXG4gIGF1dG9EaXNtaXNzLFxuICBhdXRvRGlzbWlzc1RpbWVvdXQsXG4gIGNoaWxkcmVuLFxuICBvbkRpc21pc3MsXG4gIHBsYWNlbWVudCxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICB0cmFuc2l0aW9uU3RhdGUsXG59OiBUb2FzdFByb3BzKSA9PiAoXG4gIDxUb2FzdEVsZW1lbnRcbiAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgIHRyYW5zaXRpb25TdGF0ZT17dHJhbnNpdGlvblN0YXRlfVxuICAgIHRyYW5zaXRpb25EdXJhdGlvbj17dHJhbnNpdGlvbkR1cmF0aW9ufVxuICA+XG4gICAgPEljb25cbiAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICBhdXRvRGlzbWlzcz17YXV0b0Rpc21pc3N9XG4gICAgICBhdXRvRGlzbWlzc1RpbWVvdXQ9e2F1dG9EaXNtaXNzVGltZW91dH1cbiAgICAvPlxuICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAge29uRGlzbWlzcyA/IChcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25EaXNtaXNzfSByb2xlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPEExMXlUZXh0PkNsb3NlPC9BMTF5VGV4dD5cbiAgICAgIDwvQnV0dG9uPlxuICAgICkgOiBudWxsfVxuICA8L1RvYXN0RWxlbWVudD5cbik7XG4iXX0= */');
var Icon = function Icon(_ref3) {
  var appearance = _ref3.appearance,
      autoDismiss = _ref3.autoDismiss,
      autoDismissTimeout = _ref3.autoDismissTimeout;

  var meta = appearances[appearance];
  var Glyph = meta.icon;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _emotion.css)({
        backgroundColor: meta.fg,
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        color: meta.bg,
        flexShrink: 0,
        paddingBottom: gutter,
        paddingTop: gutter,
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        width: 30
      }, '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUdNIiwiZmlsZSI6Ii4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgQ2hlY2tJY29uLCBGbGFtZUljb24sIEluZm9JY29uLCBDbG9zZUljb24sIEFsZXJ0SWNvbiB9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1cyA9IDQ7XG5leHBvcnQgY29uc3QgZ3V0dGVyID0gODtcbmV4cG9ydCBjb25zdCB0b2FzdFdpZHRoID0gMzYwO1xuZXhwb3J0IGNvbnN0IHNocmluayA9IGtleWZyYW1lc2Bmcm9tIHsgaGVpZ2h0OiAxMDAlOyB9IHRvIHsgaGVpZ2h0OiAwJSB9YDtcblxuLy8gYTExeSBoZWxwZXJcbmNvbnN0IEExMXlUZXh0ID0gKHsgdGFnOiBUYWcsIC4uLnByb3BzIH0pID0+IChcbiAgPFRhZ1xuICAgIGNzcz17e1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbkExMXlUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFnOiAnc3BhbicsXG59O1xuXG4vLyBkZWZhdWx0IGFwcGVhcmFuY2VzXG5cbmNvbnN0IGFwcGVhcmFuY2VzID0ge1xuICBzdWNjZXNzOiB7XG4gICAgaWNvbjogQ2hlY2tJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5HNTAwLFxuICAgIGZnOiBjb2xvcnMuRzMwMCxcbiAgICBiZzogY29sb3JzLkc1MCxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBpY29uOiBGbGFtZUljb24sXG4gICAgdGV4dDogY29sb3JzLlI1MDAsXG4gICAgZmc6IGNvbG9ycy5SMzAwLFxuICAgIGJnOiBjb2xvcnMuUjUwLFxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgaWNvbjogQWxlcnRJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ZNTAwLFxuICAgIGZnOiBjb2xvcnMuWTMwMCxcbiAgICBiZzogY29sb3JzLlk1MCxcbiAgfSxcbiAgaW5mbzoge1xuICAgIGljb246IEluZm9JY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ONDAwLFxuICAgIGZnOiBjb2xvcnMuQjIwMCxcbiAgICBiZzogJ3doaXRlJyxcbiAgfSxcbn07XG5leHBvcnQgdHlwZSBBcHBlYXJhbmNlVHlwZXMgPSAkS2V5czx0eXBlb2YgYXBwZWFyYW5jZXM+O1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2KHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGZsZXhTaHJpbms6IDAsXG4gIG9wYWNpdHk6IDAuNSxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7IG9wYWNpdHk6IDEgfSxcbn0pO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIGZsZXhHcm93OiAxLFxuICBmb250U2l6ZTogMTQsXG4gIGxpbmVIZWlnaHQ6IDEuNCxcbiAgbWluSGVpZ2h0OiA0MCxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbn0pO1xuXG4vLyBOT1RFOiBpbnZva2UgYW5pbWF0aW9uIHdoZW4gTk9UIGBhdXRvRGlzbWlzc2Agd2l0aCBvcGFjaXR5IG9mIDAgdG8gYXZvaWQgYVxuLy8gcGFpbnQgYnVnIGluIEZpcmVGb3guXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MjUyODlcbmNvbnN0IENvdW50ZG93biA9IHN0eWxlZC5kaXYoKHsgYXV0b0Rpc21pc3NUaW1lb3V0LCBvcGFjaXR5IH0pID0+ICh7XG4gIGFuaW1hdGlvbjogYCR7c2hyaW5rfSAke2F1dG9EaXNtaXNzVGltZW91dH1tcyBsaW5lYXJgLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMSknLFxuICBib3R0b206IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgb3BhY2l0eSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdpZHRoOiAnMTAwJScsXG59KSk7XG5jb25zdCBJY29uID0gKHsgYXBwZWFyYW5jZSwgYXV0b0Rpc21pc3MsIGF1dG9EaXNtaXNzVGltZW91dCB9KSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXTtcbiAgY29uc3QgR2x5cGggPSBtZXRhLmljb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtZXRhLmZnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgY29sb3I6IG1ldGEuYmcsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGd1dHRlcixcbiAgICAgICAgcGFkZGluZ1RvcDogZ3V0dGVyLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb3VudGRvd25cbiAgICAgICAgb3BhY2l0eT17YXV0b0Rpc21pc3MgPyAxIDogMH1cbiAgICAgICAgYXV0b0Rpc21pc3NUaW1lb3V0PXthdXRvRGlzbWlzc1RpbWVvdXR9XG4gICAgICAvPlxuICAgICAgPEdseXBoIGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkge1xuICBjb25zdCBwb3MgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcbiAgY29uc3QgcmVsZXZhbnRQbGFjZW1lbnQgPSBwb3NbMV0gPT09ICdjZW50ZXInID8gcG9zWzBdIDogcG9zWzFdO1xuICBjb25zdCB0cmFuc2xhdGVNYXAgPSB7XG4gICAgcmlnaHQ6ICd0cmFuc2xhdGUzZCgxMjAlLCAwLCAwKScsXG4gICAgbGVmdDogJ3RyYW5zbGF0ZTNkKC0xMjAlLCAwLCAwKScsXG4gICAgYm90dG9tOiAndHJhbnNsYXRlM2QoMCwgMTIwJSwgMCknLFxuICAgIHRvcDogJ3RyYW5zbGF0ZTNkKDAsIC0xMjAlLCAwKScsXG4gIH07XG5cbiAgcmV0dXJuIHRyYW5zbGF0ZU1hcFtyZWxldmFudFBsYWNlbWVudF07XG59XG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uU3RhdGUgPSAnZW50ZXJpbmcnIHwgJ2VudGVyZWQnIHwgJ2V4aXRpbmcnIHwgJ2V4aXRlZCc7XG5jb25zdCB0b2FzdFN0YXRlcyA9IChwbGFjZW1lbnQ6IFBsYWNlbWVudCkgPT4gKHtcbiAgZW50ZXJpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBlbnRlcmVkOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScgfSxcbiAgZXhpdGluZzogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG4gIGV4aXRlZDogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG59KTtcbmNvbnN0IFRvYXN0RWxlbWVudCA9IHN0eWxlZC5kaXYoXG4gICh7IGFwcGVhcmFuY2UsIHBsYWNlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uU3RhdGUgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcGVhcmFuY2VzW2FwcGVhcmFuY2VdLmJnLFxuICAgICAgYm9yZGVyUmFkaXVzLFxuICAgICAgYm94U2hhZG93OiAnMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpJyxcbiAgICAgIGNvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS50ZXh0LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWFyZ2luQm90dG9tOiBndXR0ZXIsXG4gICAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7dHJhbnNpdGlvbkR1cmF0aW9ufW1zIGN1YmljLWJlemllcigwLjIsIDAsIDAsIDEpYCxcbiAgICAgIHdpZHRoOiB0b2FzdFdpZHRoLFxuICAgICAgLi4udG9hc3RTdGF0ZXMocGxhY2VtZW50KVt0cmFuc2l0aW9uU3RhdGVdLFxuICAgIH07XG4gIH1cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRGVmYXVsdFRvYXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgVG9hc3RQcm9wcyA9IHtcbiAgYXBwZWFyYW5jZTogQXBwZWFyYW5jZVR5cGVzLFxuICBhdXRvRGlzbWlzczogYm9vbGVhbiB8IG51bWJlcixcbiAgYXV0b0Rpc21pc3NUaW1lb3V0OiBudW1iZXIsIC8vIGluaGVyaXRlZCBmcm9tIFRvYXN0UHJvdmlkZXJcbiAgY2hpbGRyZW46IE5vZGUsXG4gIG9uRGlzbWlzczogRXZlbnQgPT4gKixcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIHRyYW5zaXRpb25TdGF0ZTogVHJhbnNpdGlvblN0YXRlLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFRvYXN0ID0gKHtcbiAgYXBwZWFyYW5jZSxcbiAgYXV0b0Rpc21pc3MsXG4gIGF1dG9EaXNtaXNzVGltZW91dCxcbiAgY2hpbGRyZW4sXG4gIG9uRGlzbWlzcyxcbiAgcGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHRyYW5zaXRpb25TdGF0ZSxcbn06IFRvYXN0UHJvcHMpID0+IChcbiAgPFRvYXN0RWxlbWVudFxuICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgdHJhbnNpdGlvblN0YXRlPXt0cmFuc2l0aW9uU3RhdGV9XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPXt0cmFuc2l0aW9uRHVyYXRpb259XG4gID5cbiAgICA8SWNvblxuICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgIGF1dG9EaXNtaXNzPXthdXRvRGlzbWlzc31cbiAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgIC8+XG4gICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICB7b25EaXNtaXNzID8gKFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRpc21pc3N9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8QTExeVRleHQ+Q2xvc2U8L0ExMXlUZXh0PlxuICAgICAgPC9CdXR0b24+XG4gICAgKSA6IG51bGx9XG4gIDwvVG9hc3RFbGVtZW50PlxuKTtcbiJdfQ== */')
    },
    _react2.default.createElement(Countdown, {
      opacity: autoDismiss ? 1 : 0,
      autoDismissTimeout: autoDismissTimeout
    }),
    _react2.default.createElement(Glyph, {
      className: (0, _emotion.css)({ position: 'relative', zIndex: 1 }, '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUhhIiwiZmlsZSI6Ii4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgQ2hlY2tJY29uLCBGbGFtZUljb24sIEluZm9JY29uLCBDbG9zZUljb24sIEFsZXJ0SWNvbiB9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJy4vY29sb3JzJztcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1cyA9IDQ7XG5leHBvcnQgY29uc3QgZ3V0dGVyID0gODtcbmV4cG9ydCBjb25zdCB0b2FzdFdpZHRoID0gMzYwO1xuZXhwb3J0IGNvbnN0IHNocmluayA9IGtleWZyYW1lc2Bmcm9tIHsgaGVpZ2h0OiAxMDAlOyB9IHRvIHsgaGVpZ2h0OiAwJSB9YDtcblxuLy8gYTExeSBoZWxwZXJcbmNvbnN0IEExMXlUZXh0ID0gKHsgdGFnOiBUYWcsIC4uLnByb3BzIH0pID0+IChcbiAgPFRhZ1xuICAgIGNzcz17e1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbkExMXlUZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGFnOiAnc3BhbicsXG59O1xuXG4vLyBkZWZhdWx0IGFwcGVhcmFuY2VzXG5cbmNvbnN0IGFwcGVhcmFuY2VzID0ge1xuICBzdWNjZXNzOiB7XG4gICAgaWNvbjogQ2hlY2tJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5HNTAwLFxuICAgIGZnOiBjb2xvcnMuRzMwMCxcbiAgICBiZzogY29sb3JzLkc1MCxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBpY29uOiBGbGFtZUljb24sXG4gICAgdGV4dDogY29sb3JzLlI1MDAsXG4gICAgZmc6IGNvbG9ycy5SMzAwLFxuICAgIGJnOiBjb2xvcnMuUjUwLFxuICB9LFxuICB3YXJuaW5nOiB7XG4gICAgaWNvbjogQWxlcnRJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ZNTAwLFxuICAgIGZnOiBjb2xvcnMuWTMwMCxcbiAgICBiZzogY29sb3JzLlk1MCxcbiAgfSxcbiAgaW5mbzoge1xuICAgIGljb246IEluZm9JY29uLFxuICAgIHRleHQ6IGNvbG9ycy5ONDAwLFxuICAgIGZnOiBjb2xvcnMuQjIwMCxcbiAgICBiZzogJ3doaXRlJyxcbiAgfSxcbn07XG5leHBvcnQgdHlwZSBBcHBlYXJhbmNlVHlwZXMgPSAkS2V5czx0eXBlb2YgYXBwZWFyYW5jZXM+O1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2KHtcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGZsZXhTaHJpbms6IDAsXG4gIG9wYWNpdHk6IDAuNSxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbiAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMTUwbXMnLFxuXG4gICc6aG92ZXInOiB7IG9wYWNpdHk6IDEgfSxcbn0pO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdih7XG4gIGZsZXhHcm93OiAxLFxuICBmb250U2l6ZTogMTQsXG4gIGxpbmVIZWlnaHQ6IDEuNCxcbiAgbWluSGVpZ2h0OiA0MCxcbiAgcGFkZGluZzogYCR7Z3V0dGVyfXB4ICR7Z3V0dGVyICogMS41fXB4YCxcbn0pO1xuXG4vLyBOT1RFOiBpbnZva2UgYW5pbWF0aW9uIHdoZW4gTk9UIGBhdXRvRGlzbWlzc2Agd2l0aCBvcGFjaXR5IG9mIDAgdG8gYXZvaWQgYVxuLy8gcGFpbnQgYnVnIGluIEZpcmVGb3guXG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MjUyODlcbmNvbnN0IENvdW50ZG93biA9IHN0eWxlZC5kaXYoKHsgYXV0b0Rpc21pc3NUaW1lb3V0LCBvcGFjaXR5IH0pID0+ICh7XG4gIGFuaW1hdGlvbjogYCR7c2hyaW5rfSAke2F1dG9EaXNtaXNzVGltZW91dH1tcyBsaW5lYXJgLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMSknLFxuICBib3R0b206IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgb3BhY2l0eSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdpZHRoOiAnMTAwJScsXG59KSk7XG5jb25zdCBJY29uID0gKHsgYXBwZWFyYW5jZSwgYXV0b0Rpc21pc3MsIGF1dG9EaXNtaXNzVGltZW91dCB9KSA9PiB7XG4gIGNvbnN0IG1ldGEgPSBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXTtcbiAgY29uc3QgR2x5cGggPSBtZXRhLmljb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtZXRhLmZnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgY29sb3I6IG1ldGEuYmcsXG4gICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGd1dHRlcixcbiAgICAgICAgcGFkZGluZ1RvcDogZ3V0dGVyLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICB3aWR0aDogMzAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb3VudGRvd25cbiAgICAgICAgb3BhY2l0eT17YXV0b0Rpc21pc3MgPyAxIDogMH1cbiAgICAgICAgYXV0b0Rpc21pc3NUaW1lb3V0PXthdXRvRGlzbWlzc1RpbWVvdXR9XG4gICAgICAvPlxuICAgICAgPEdseXBoIGNzcz17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAxIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkge1xuICBjb25zdCBwb3MgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKTtcbiAgY29uc3QgcmVsZXZhbnRQbGFjZW1lbnQgPSBwb3NbMV0gPT09ICdjZW50ZXInID8gcG9zWzBdIDogcG9zWzFdO1xuICBjb25zdCB0cmFuc2xhdGVNYXAgPSB7XG4gICAgcmlnaHQ6ICd0cmFuc2xhdGUzZCgxMjAlLCAwLCAwKScsXG4gICAgbGVmdDogJ3RyYW5zbGF0ZTNkKC0xMjAlLCAwLCAwKScsXG4gICAgYm90dG9tOiAndHJhbnNsYXRlM2QoMCwgMTIwJSwgMCknLFxuICAgIHRvcDogJ3RyYW5zbGF0ZTNkKDAsIC0xMjAlLCAwKScsXG4gIH07XG5cbiAgcmV0dXJuIHRyYW5zbGF0ZU1hcFtyZWxldmFudFBsYWNlbWVudF07XG59XG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uU3RhdGUgPSAnZW50ZXJpbmcnIHwgJ2VudGVyZWQnIHwgJ2V4aXRpbmcnIHwgJ2V4aXRlZCc7XG5jb25zdCB0b2FzdFN0YXRlcyA9IChwbGFjZW1lbnQ6IFBsYWNlbWVudCkgPT4gKHtcbiAgZW50ZXJpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBlbnRlcmVkOiB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScgfSxcbiAgZXhpdGluZzogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG4gIGV4aXRlZDogeyB0cmFuc2Zvcm06IGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIH0sXG59KTtcbmNvbnN0IFRvYXN0RWxlbWVudCA9IHN0eWxlZC5kaXYoXG4gICh7IGFwcGVhcmFuY2UsIHBsYWNlbWVudCwgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uU3RhdGUgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcGVhcmFuY2VzW2FwcGVhcmFuY2VdLmJnLFxuICAgICAgYm9yZGVyUmFkaXVzLFxuICAgICAgYm94U2hhZG93OiAnMCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpJyxcbiAgICAgIGNvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS50ZXh0LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgbWFyZ2luQm90dG9tOiBndXR0ZXIsXG4gICAgICB0cmFuc2l0aW9uOiBgdHJhbnNmb3JtICR7dHJhbnNpdGlvbkR1cmF0aW9ufW1zIGN1YmljLWJlemllcigwLjIsIDAsIDAsIDEpYCxcbiAgICAgIHdpZHRoOiB0b2FzdFdpZHRoLFxuICAgICAgLi4udG9hc3RTdGF0ZXMocGxhY2VtZW50KVt0cmFuc2l0aW9uU3RhdGVdLFxuICAgIH07XG4gIH1cbik7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRGVmYXVsdFRvYXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgVG9hc3RQcm9wcyA9IHtcbiAgYXBwZWFyYW5jZTogQXBwZWFyYW5jZVR5cGVzLFxuICBhdXRvRGlzbWlzczogYm9vbGVhbiB8IG51bWJlcixcbiAgYXV0b0Rpc21pc3NUaW1lb3V0OiBudW1iZXIsIC8vIGluaGVyaXRlZCBmcm9tIFRvYXN0UHJvdmlkZXJcbiAgY2hpbGRyZW46IE5vZGUsXG4gIG9uRGlzbWlzczogRXZlbnQgPT4gKixcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIHRyYW5zaXRpb25TdGF0ZTogVHJhbnNpdGlvblN0YXRlLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG59O1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFRvYXN0ID0gKHtcbiAgYXBwZWFyYW5jZSxcbiAgYXV0b0Rpc21pc3MsXG4gIGF1dG9EaXNtaXNzVGltZW91dCxcbiAgY2hpbGRyZW4sXG4gIG9uRGlzbWlzcyxcbiAgcGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb24sXG4gIHRyYW5zaXRpb25TdGF0ZSxcbn06IFRvYXN0UHJvcHMpID0+IChcbiAgPFRvYXN0RWxlbWVudFxuICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgcGxhY2VtZW50PXtwbGFjZW1lbnR9XG4gICAgdHJhbnNpdGlvblN0YXRlPXt0cmFuc2l0aW9uU3RhdGV9XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPXt0cmFuc2l0aW9uRHVyYXRpb259XG4gID5cbiAgICA8SWNvblxuICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgIGF1dG9EaXNtaXNzPXthdXRvRGlzbWlzc31cbiAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgIC8+XG4gICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICB7b25EaXNtaXNzID8gKFxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkRpc21pc3N9IHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICA8QTExeVRleHQ+Q2xvc2U8L0ExMXlUZXh0PlxuICAgICAgPC9CdXR0b24+XG4gICAgKSA6IG51bGx9XG4gIDwvVG9hc3RFbGVtZW50PlxuKTtcbiJdfQ== */')
    })
  );
};
function getTranslate(placement) {
  var pos = placement.split('-');
  var relevantPlacement = pos[1] === 'center' ? pos[0] : pos[1];
  var translateMap = {
    right: 'translate3d(120%, 0, 0)',
    left: 'translate3d(-120%, 0, 0)',
    bottom: 'translate3d(0, 120%, 0)',
    top: 'translate3d(0, -120%, 0)'
  };

  return translateMap[relevantPlacement];
}

var toastStates = function toastStates(placement) {
  return {
    entering: { transform: getTranslate(placement) },
    entered: { transform: 'translate3d(0,0,0)' },
    exiting: { transform: getTranslate(placement) },
    exited: { transform: getTranslate(placement) }
  };
};
var ToastElement = /*#__PURE__*/(0, _reactEmotion2.default)('div', {
  target: 'e1rce5zx3',
  label: 'ToastElement'
})(function (_ref4) {
  var appearance = _ref4.appearance,
      placement = _ref4.placement,
      transitionDuration = _ref4.transitionDuration,
      transitionState = _ref4.transitionState;

  return _extends({
    backgroundColor: appearances[appearance].bg,
    borderRadius: borderRadius,
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.175)',
    color: appearances[appearance].text,
    display: 'flex',
    marginBottom: gutter,
    transition: 'transform ' + transitionDuration + 'ms cubic-bezier(0.2, 0, 0, 1)',
    width: toastWidth
  }, toastStates(placement)[transitionState]);
}, '\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0pxQiIsImZpbGUiOiIuLi9zcmMvVG9hc3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5cbmltcG9ydCB7IENoZWNrSWNvbiwgRmxhbWVJY29uLCBJbmZvSWNvbiwgQ2xvc2VJY29uLCBBbGVydEljb24gfSBmcm9tICcuL2ljb25zJztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBjb21tb25cbmV4cG9ydCBjb25zdCBib3JkZXJSYWRpdXMgPSA0O1xuZXhwb3J0IGNvbnN0IGd1dHRlciA9IDg7XG5leHBvcnQgY29uc3QgdG9hc3RXaWR0aCA9IDM2MDtcbmV4cG9ydCBjb25zdCBzaHJpbmsgPSBrZXlmcmFtZXNgZnJvbSB7IGhlaWdodDogMTAwJTsgfSB0byB7IGhlaWdodDogMCUgfWA7XG5cbi8vIGExMXkgaGVscGVyXG5jb25zdCBBMTF5VGV4dCA9ICh7IHRhZzogVGFnLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxUYWdcbiAgICBjc3M9e3tcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCknLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICB3aWR0aDogMSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5BMTF5VGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhZzogJ3NwYW4nLFxufTtcblxuLy8gZGVmYXVsdCBhcHBlYXJhbmNlc1xuXG5jb25zdCBhcHBlYXJhbmNlcyA9IHtcbiAgc3VjY2Vzczoge1xuICAgIGljb246IENoZWNrSWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuRzUwMCxcbiAgICBmZzogY29sb3JzLkczMDAsXG4gICAgYmc6IGNvbG9ycy5HNTAsXG4gIH0sXG4gIGVycm9yOiB7XG4gICAgaWNvbjogRmxhbWVJY29uLFxuICAgIHRleHQ6IGNvbG9ycy5SNTAwLFxuICAgIGZnOiBjb2xvcnMuUjMwMCxcbiAgICBiZzogY29sb3JzLlI1MCxcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGljb246IEFsZXJ0SWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuWTUwMCxcbiAgICBmZzogY29sb3JzLlkzMDAsXG4gICAgYmc6IGNvbG9ycy5ZNTAsXG4gIH0sXG4gIGluZm86IHtcbiAgICBpY29uOiBJbmZvSWNvbixcbiAgICB0ZXh0OiBjb2xvcnMuTjQwMCxcbiAgICBmZzogY29sb3JzLkIyMDAsXG4gICAgYmc6ICd3aGl0ZScsXG4gIH0sXG59O1xuZXhwb3J0IHR5cGUgQXBwZWFyYW5jZVR5cGVzID0gJEtleXM8dHlwZW9mIGFwcGVhcmFuY2VzPjtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdih7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBmbGV4U2hyaW5rOiAwLFxuICBvcGFjaXR5OiAwLjUsXG4gIHBhZGRpbmc6IGAke2d1dHRlcn1weCAke2d1dHRlciAqIDEuNX1weGAsXG4gIHRyYW5zaXRpb246ICdvcGFjaXR5IDE1MG1zJyxcblxuICAnOmhvdmVyJzogeyBvcGFjaXR5OiAxIH0sXG59KTtcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXYoe1xuICBmbGV4R3JvdzogMSxcbiAgZm9udFNpemU6IDE0LFxuICBsaW5lSGVpZ2h0OiAxLjQsXG4gIG1pbkhlaWdodDogNDAsXG4gIHBhZGRpbmc6IGAke2d1dHRlcn1weCAke2d1dHRlciAqIDEuNX1weGAsXG59KTtcblxuLy8gTk9URTogaW52b2tlIGFuaW1hdGlvbiB3aGVuIE5PVCBgYXV0b0Rpc21pc3NgIHdpdGggb3BhY2l0eSBvZiAwIHRvIGF2b2lkIGFcbi8vIHBhaW50IGJ1ZyBpbiBGaXJlRm94LlxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjI1Mjg5XG5jb25zdCBDb3VudGRvd24gPSBzdHlsZWQuZGl2KCh7IGF1dG9EaXNtaXNzVGltZW91dCwgb3BhY2l0eSB9KSA9PiAoe1xuICBhbmltYXRpb246IGAke3Nocmlua30gJHthdXRvRGlzbWlzc1RpbWVvdXR9bXMgbGluZWFyYCxcbiAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjEpJyxcbiAgYm90dG9tOiAwLFxuICBoZWlnaHQ6IDAsXG4gIGxlZnQ6IDAsXG4gIG9wYWNpdHksXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB3aWR0aDogJzEwMCUnLFxufSkpO1xuY29uc3QgSWNvbiA9ICh7IGFwcGVhcmFuY2UsIGF1dG9EaXNtaXNzLCBhdXRvRGlzbWlzc1RpbWVvdXQgfSkgPT4ge1xuICBjb25zdCBtZXRhID0gYXBwZWFyYW5jZXNbYXBwZWFyYW5jZV07XG4gIGNvbnN0IEdseXBoID0gbWV0YS5pY29uO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbWV0YS5mZyxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIGNvbG9yOiBtZXRhLmJnLFxuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBndXR0ZXIsXG4gICAgICAgIHBhZGRpbmdUb3A6IGd1dHRlcixcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q291bnRkb3duXG4gICAgICAgIG9wYWNpdHk9e2F1dG9EaXNtaXNzID8gMSA6IDB9XG4gICAgICAgIGF1dG9EaXNtaXNzVGltZW91dD17YXV0b0Rpc21pc3NUaW1lb3V0fVxuICAgICAgLz5cbiAgICAgIDxHbHlwaCBjc3M9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMSB9fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShwbGFjZW1lbnQpIHtcbiAgY29uc3QgcG9zID0gcGxhY2VtZW50LnNwbGl0KCctJyk7XG4gIGNvbnN0IHJlbGV2YW50UGxhY2VtZW50ID0gcG9zWzFdID09PSAnY2VudGVyJyA/IHBvc1swXSA6IHBvc1sxXTtcbiAgY29uc3QgdHJhbnNsYXRlTWFwID0ge1xuICAgIHJpZ2h0OiAndHJhbnNsYXRlM2QoMTIwJSwgMCwgMCknLFxuICAgIGxlZnQ6ICd0cmFuc2xhdGUzZCgtMTIwJSwgMCwgMCknLFxuICAgIGJvdHRvbTogJ3RyYW5zbGF0ZTNkKDAsIDEyMCUsIDApJyxcbiAgICB0b3A6ICd0cmFuc2xhdGUzZCgwLCAtMTIwJSwgMCknLFxuICB9O1xuXG4gIHJldHVybiB0cmFuc2xhdGVNYXBbcmVsZXZhbnRQbGFjZW1lbnRdO1xufVxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblN0YXRlID0gJ2VudGVyaW5nJyB8ICdlbnRlcmVkJyB8ICdleGl0aW5nJyB8ICdleGl0ZWQnO1xuY29uc3QgdG9hc3RTdGF0ZXMgPSAocGxhY2VtZW50OiBQbGFjZW1lbnQpID0+ICh7XG4gIGVudGVyaW5nOiB7IHRyYW5zZm9ybTogZ2V0VHJhbnNsYXRlKHBsYWNlbWVudCkgfSxcbiAgZW50ZXJlZDogeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknIH0sXG4gIGV4aXRpbmc6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxuICBleGl0ZWQ6IHsgdHJhbnNmb3JtOiBnZXRUcmFuc2xhdGUocGxhY2VtZW50KSB9LFxufSk7XG5jb25zdCBUb2FzdEVsZW1lbnQgPSBzdHlsZWQuZGl2KFxuICAoeyBhcHBlYXJhbmNlLCBwbGFjZW1lbnQsIHRyYW5zaXRpb25EdXJhdGlvbiwgdHJhbnNpdGlvblN0YXRlIH0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBlYXJhbmNlc1thcHBlYXJhbmNlXS5iZyxcbiAgICAgIGJvcmRlclJhZGl1cyxcbiAgICAgIGJveFNoYWRvdzogJzAgM3B4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTc1KScsXG4gICAgICBjb2xvcjogYXBwZWFyYW5jZXNbYXBwZWFyYW5jZV0udGV4dCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1hcmdpbkJvdHRvbTogZ3V0dGVyLFxuICAgICAgdHJhbnNpdGlvbjogYHRyYW5zZm9ybSAke3RyYW5zaXRpb25EdXJhdGlvbn1tcyBjdWJpYy1iZXppZXIoMC4yLCAwLCAwLCAxKWAsXG4gICAgICB3aWR0aDogdG9hc3RXaWR0aCxcbiAgICAgIC4uLnRvYXN0U3RhdGVzKHBsYWNlbWVudClbdHJhbnNpdGlvblN0YXRlXSxcbiAgICB9O1xuICB9XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERlZmF1bHRUb2FzdFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFRvYXN0UHJvcHMgPSB7XG4gIGFwcGVhcmFuY2U6IEFwcGVhcmFuY2VUeXBlcyxcbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW4gfCBudW1iZXIsXG4gIGF1dG9EaXNtaXNzVGltZW91dDogbnVtYmVyLCAvLyBpbmhlcml0ZWQgZnJvbSBUb2FzdFByb3ZpZGVyXG4gIGNoaWxkcmVuOiBOb2RlLFxuICBvbkRpc21pc3M6IEV2ZW50ID0+ICosXG4gIHBsYWNlbWVudDogUGxhY2VtZW50LFxuICB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciwgLy8gaW5oZXJpdGVkIGZyb20gVG9hc3RQcm92aWRlclxuICB0cmFuc2l0aW9uU3RhdGU6IFRyYW5zaXRpb25TdGF0ZSwgLy8gaW5oZXJpdGVkIGZyb20gVG9hc3RQcm92aWRlclxufTtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRUb2FzdCA9ICh7XG4gIGFwcGVhcmFuY2UsXG4gIGF1dG9EaXNtaXNzLFxuICBhdXRvRGlzbWlzc1RpbWVvdXQsXG4gIGNoaWxkcmVuLFxuICBvbkRpc21pc3MsXG4gIHBsYWNlbWVudCxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICB0cmFuc2l0aW9uU3RhdGUsXG59OiBUb2FzdFByb3BzKSA9PiAoXG4gIDxUb2FzdEVsZW1lbnRcbiAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgIHRyYW5zaXRpb25TdGF0ZT17dHJhbnNpdGlvblN0YXRlfVxuICAgIHRyYW5zaXRpb25EdXJhdGlvbj17dHJhbnNpdGlvbkR1cmF0aW9ufVxuICA+XG4gICAgPEljb25cbiAgICAgIGFwcGVhcmFuY2U9e2FwcGVhcmFuY2V9XG4gICAgICBhdXRvRGlzbWlzcz17YXV0b0Rpc21pc3N9XG4gICAgICBhdXRvRGlzbWlzc1RpbWVvdXQ9e2F1dG9EaXNtaXNzVGltZW91dH1cbiAgICAvPlxuICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAge29uRGlzbWlzcyA/IChcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25EaXNtaXNzfSByb2xlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPEExMXlUZXh0PkNsb3NlPC9BMTF5VGV4dD5cbiAgICAgIDwvQnV0dG9uPlxuICAgICkgOiBudWxsfVxuICA8L1RvYXN0RWxlbWVudD5cbik7XG4iXX0= */');

// ==============================
// DefaultToast
// ==============================

var DefaultToast = exports.DefaultToast = function DefaultToast(_ref5) {
  var appearance = _ref5.appearance,
      autoDismiss = _ref5.autoDismiss,
      autoDismissTimeout = _ref5.autoDismissTimeout,
      children = _ref5.children,
      onDismiss = _ref5.onDismiss,
      placement = _ref5.placement,
      transitionDuration = _ref5.transitionDuration,
      transitionState = _ref5.transitionState;
  return _react2.default.createElement(
    ToastElement,
    {
      appearance: appearance,
      placement: placement,
      transitionState: transitionState,
      transitionDuration: transitionDuration
    },
    _react2.default.createElement(Icon, {
      appearance: appearance,
      autoDismiss: autoDismiss,
      autoDismissTimeout: autoDismissTimeout
    }),
    _react2.default.createElement(
      Content,
      null,
      children
    ),
    onDismiss ? _react2.default.createElement(
      Button,
      { onClick: onDismiss, role: 'button' },
      _react2.default.createElement(_icons.CloseIcon, null),
      _react2.default.createElement(
        A11yText,
        null,
        'Close'
      )
    ) : null
  );
};

/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/ToastProvider.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/ToastProvider.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withToastManager = exports.ToastConsumer = exports.ToastProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _ToastController = __webpack_require__(/*! ./ToastController */ "./node_modules/react-toast-notifications/dist/ToastController.js");

var _ToastContainer = __webpack_require__(/*! ./ToastContainer */ "./node_modules/react-toast-notifications/dist/ToastContainer.js");

var _ToastElement = __webpack_require__(/*! ./ToastElement */ "./node_modules/react-toast-notifications/dist/ToastElement.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-toast-notifications/dist/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultComponents = { Toast: _ToastElement.DefaultToast, ToastContainer: _ToastContainer.ToastContainer };

// $FlowFixMe
var _React$createContext = _react2.default.createContext(),
    Consumer = _React$createContext.Consumer,
    Provider = _React$createContext.Provider;

var NOOP = function NOOP() {};
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Provider
// ==============================

var ToastProvider = exports.ToastProvider = function (_Component) {
  _inherits(ToastProvider, _Component);

  function ToastProvider(props) {
    _classCallCheck(this, ToastProvider);

    var _this = _possibleConstructorReturn(this, (ToastProvider.__proto__ || Object.getPrototypeOf(ToastProvider)).call(this, props));

    _this.cacheComponents = function (components) {
      _this.components = _extends({}, defaultComponents, components);
    };

    _this.add = function (content) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NOOP;

      var id = (0, _utils.generateUEID)();
      var callback = function callback() {
        return cb(id);
      };

      _this.setState(function (state) {
        var toasts = state.toasts.slice(0);
        var toast = Object.assign({}, { content: content, id: id }, options);

        toasts.push(toast);

        return { toasts: toasts };
      }, callback);
    };

    _this.remove = function (id) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NOOP;

      var callback = function callback() {
        return cb(id);
      };

      _this.setState(function (state) {
        var toasts = state.toasts.filter(function (t) {
          return t.id !== id;
        });
        return { toasts: toasts };
      }, callback);
    };

    _this.onDismiss = function (id) {
      return function () {
        return _this.remove(id);
      };
    };

    _this.cacheComponents(props.components);
    _this.state = { toasts: [] };
    return _this;
  }

  _createClass(ToastProvider, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.components !== this.props.components) {
        this.cacheComponents(nextProps.components);
      }
    }
    // avoid creating a new fn on every render

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          components = _props.components,
          props = _objectWithoutProperties(_props, ['children', 'components']);

      var _components = this.components,
          Toast = _components.Toast,
          ToastContainer = _components.ToastContainer;
      var toasts = this.state.toasts;
      var add = this.add,
          remove = this.remove;


      return _react2.default.createElement(
        Provider,
        { value: { add: add, remove: remove, toasts: toasts } },
        children,
        canUseDOM ? (0, _reactDom.createPortal)(_react2.default.createElement(
          ToastContainer,
          props,
          toasts.map(function (_ref) {
            var content = _ref.content,
                id = _ref.id,
                rest = _objectWithoutProperties(_ref, ['content', 'id']);

            return _react2.default.createElement(
              _ToastController.ToastController,
              _extends({
                key: id,
                Toast: Toast,
                onDismiss: _this2.onDismiss(id)
              }, props, rest),
              content
            );
          })
        ), document.body) : _react2.default.createElement(ToastContainer, props) // keep ReactDOM.hydrate happy

      );
    }
  }]);

  return ToastProvider;
}(_react.Component);

ToastProvider.defaultProps = {
  autoDismissTimeout: 5000,
  components: defaultComponents,
  placement: 'top-right',
  transitionDuration: 220
};
var ToastConsumer = exports.ToastConsumer = function ToastConsumer(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    Consumer,
    null,
    function (context) {
      return children(context);
    }
  );
};

var withToastManager = exports.withToastManager = function withToastManager(Comp) {
  return function (props) {
    return _react2.default.createElement(
      ToastConsumer,
      null,
      function (context) {
        return _react2.default.createElement(Comp, _extends({ toastManager: context }, props));
      }
    );
  };
};

/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/colors.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/colors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Reds
var R50 = exports.R50 = '#FFEBE6';
var R75 = exports.R75 = '#FFBDAD';
var R100 = exports.R100 = '#FF8F73';
var R200 = exports.R200 = '#FF7452';
var R300 = exports.R300 = '#FF5630';
var R400 = exports.R400 = '#DE350B';
var R500 = exports.R500 = '#BF2600';

// Yellows
var Y50 = exports.Y50 = '#FFFAE6';
var Y75 = exports.Y75 = '#FFF0B3';
var Y100 = exports.Y100 = '#FFE380';
var Y200 = exports.Y200 = '#FFC400';
var Y300 = exports.Y300 = '#FFAB00';
var Y400 = exports.Y400 = '#FF991F';
var Y500 = exports.Y500 = '#FF8B00';

// Greens
var G50 = exports.G50 = '#E3FCEF';
var G75 = exports.G75 = '#ABF5D1';
var G100 = exports.G100 = '#79F2C0';
var G200 = exports.G200 = '#57D9A3';
var G300 = exports.G300 = '#36B37E';
var G400 = exports.G400 = '#00875A';
var G500 = exports.G500 = '#006644';

// Blues
var B50 = exports.B50 = '#DEEBFF';
var B75 = exports.B75 = '#B3D4FF';
var B100 = exports.B100 = '#4C9AFF';
var B200 = exports.B200 = '#2684FF';
var B300 = exports.B300 = '#0065FF';
var B400 = exports.B400 = '#0052CC';
var B500 = exports.B500 = '#0747A6';

// Purples
var P50 = exports.P50 = '#EAE6FF';
var P75 = exports.P75 = '#C0B6F2';
var P100 = exports.P100 = '#998DD9';
var P200 = exports.P200 = '#8777D9';
var P300 = exports.P300 = '#6554C0';
var P400 = exports.P400 = '#5243AA';
var P500 = exports.P500 = '#403294';

// Teals
var T50 = exports.T50 = '#E6FCFF';
var T75 = exports.T75 = '#B3F5FF';
var T100 = exports.T100 = '#79E2F2';
var T200 = exports.T200 = '#00C7E6';
var T300 = exports.T300 = '#00B8D9';
var T400 = exports.T400 = '#00A3BF';
var T500 = exports.T500 = '#008DA6';

// Neutrals
var N0 = exports.N0 = '#FFFFFF';
var N10 = exports.N10 = '#FAFBFC';
var N20 = exports.N20 = '#F4F5F7';
var N30 = exports.N30 = '#EBECF0';
var N40 = exports.N40 = '#DFE1E6';
var N50 = exports.N50 = '#C1C7D0';
var N60 = exports.N60 = '#B3BAC5';
var N70 = exports.N70 = '#A5ADBA';
var N80 = exports.N80 = '#97A0AF';
var N90 = exports.N90 = '#8993A4';
var N100 = exports.N100 = '#7A869A';
var N200 = exports.N200 = '#6B778C';
var N300 = exports.N300 = '#5E6C84';
var N400 = exports.N400 = '#505F79';
var N500 = exports.N500 = '#42526E';
var N600 = exports.N600 = '#344563';
var N700 = exports.N700 = '#253858';
var N800 = exports.N800 = '#172B4D';

// ATTENTION: update the tints if you update this
var N900 = exports.N900 = '#091E42';

// Each tint is made of N900 and an alpha channel
var N10A = exports.N10A = 'rgba(9, 30, 66, 0.02)';
var N20A = exports.N20A = 'rgba(9, 30, 66, 0.04)';
var N30A = exports.N30A = 'rgba(9, 30, 66, 0.08)';
var N40A = exports.N40A = 'rgba(9, 30, 66, 0.13)';
var N50A = exports.N50A = 'rgba(9, 30, 66, 0.25)';
var N60A = exports.N60A = 'rgba(9, 30, 66, 0.31)';
var N70A = exports.N70A = 'rgba(9, 30, 66, 0.36)';
var N80A = exports.N80A = 'rgba(9, 30, 66, 0.42)';
var N90A = exports.N90A = 'rgba(9, 30, 66, 0.48)';
var N100A = exports.N100A = 'rgba(9, 30, 66, 0.54)';
var N200A = exports.N200A = 'rgba(9, 30, 66, 0.60)';
var N300A = exports.N300A = 'rgba(9, 30, 66, 0.66)';
var N400A = exports.N400A = 'rgba(9, 30, 66, 0.71)';
var N500A = exports.N500A = 'rgba(9, 30, 66, 0.77)';
var N600A = exports.N600A = 'rgba(9, 30, 66, 0.82)';
var N700A = exports.N700A = 'rgba(9, 30, 66, 0.89)';
var N800A = exports.N800A = 'rgba(9, 30, 66, 0.95)';

/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/icons.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/icons.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloseIcon = exports.InfoIcon = exports.FlameIcon = exports.CheckIcon = exports.AlertIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDefaultProps(width) {
  return {
    'aria-hidden': true,
    height: 16,
    width: width,
    viewBox: '0 0 ' + width + ' 16',
    style: {
      display: 'inline-block',
      verticalAlign: 'text-top',
      fill: 'currentColor'
    }
  };
}

var AlertIcon = exports.AlertIcon = function AlertIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(16), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z'
    })
  );
};
var CheckIcon = exports.CheckIcon = function CheckIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(12), props),
    _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z' })
  );
};
var FlameIcon = exports.FlameIcon = function FlameIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(12), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M5.05.01c.81 2.17.41 3.38-.52 4.31C3.55 5.37 1.98 6.15.9 7.68c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.01 8.68 2.15 5.05.02L5.03 0l.02.01z'
    })
  );
};
var InfoIcon = exports.InfoIcon = function InfoIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(14), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M6.3 5.71a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 8.01c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V8v.01zM7 2.32C3.86 2.32 1.3 4.86 1.3 8c0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 1c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z'
    })
  );
};
var CloseIcon = exports.CloseIcon = function CloseIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, getDefaultProps(14), props),
    _react2.default.createElement('path', {
      fillRule: 'evenodd',
      d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
    })
  );
};

/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ToastProvider = __webpack_require__(/*! ./ToastProvider */ "./node_modules/react-toast-notifications/dist/ToastProvider.js");

Object.defineProperty(exports, 'ToastConsumer', {
  enumerable: true,
  get: function get() {
    return _ToastProvider.ToastConsumer;
  }
});
Object.defineProperty(exports, 'ToastProvider', {
  enumerable: true,
  get: function get() {
    return _ToastProvider.ToastProvider;
  }
});
Object.defineProperty(exports, 'withToastManager', {
  enumerable: true,
  get: function get() {
    return _ToastProvider.withToastManager;
  }
});


/***/ }),

/***/ "./node_modules/react-toast-notifications/dist/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-toast-notifications/dist/utils.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUEID = generateUEID;
function generateUEID() {
  var first = Math.random() * 46656 | 0;
  var second = Math.random() * 46656 | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);
  return first + second;
}

/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply spread
   * them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : undefined;
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   *  appear: 500,
   * }}
   * ```
   *
   * If the value of appear is not set, then the value from enter is taken.
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    var pt =  true ? _PropTypes.timeoutsShape : undefined;;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : undefined;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : undefined;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : undefined;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference dll_3681e7fd756237ce51c6 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3681e7fd756237ce51c6 */ "dll-reference dll_3681e7fd756237ce51c6"))("./node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContactForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm.js */ "./components/ContactForm.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_3__);



 //DefaultToast is undefined for now, so cannot change css of default toast notifications
//waiting for repo owner to publish changes to npm
//in mean time, just setting this weird class '.css-1p3cd4g' to change css
//import { ToastNotification } from '../components/ToastNotification.js';

var ContactFormWithToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["withToastManager"])(_components_ContactForm_js__WEBPACK_IMPORTED_MODULE_2__["default"]); // const ToastNotification = ({children, ...props}) => (
//   <DefaultToast {...props} style={{width:"100%"}}><p>Test</p>{children}</DefaultToast>
// );

var Contact = function Contact(_ref) {
  var ReactGA = _ref.ReactGA;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastProvider"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1846214492" + " " + "about-paragraphs"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1846214492"
  }, "If you would like to provide feedback or get in contact, send me an email using the form below."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContactFormWithToasts, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1846214492"
  }, ".about-paragraphs.jsx-1846214492{padding-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZW9yZ2UvcHJvamVjdHMvcGVyc29uYWwvdGFza3RpbWVyL3BhZ2VzL2NvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJvQixBQUdpQyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2dlb3JnZS9wcm9qZWN0cy9wZXJzb25hbC90YXNrdGltZXIvcGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzJztcbmltcG9ydCB7IC8qRGVmYXVsdFRvYXN0LCovIFRvYXN0UHJvdmlkZXIsIHdpdGhUb2FzdE1hbmFnZXIgfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJztcbi8vRGVmYXVsdFRvYXN0IGlzIHVuZGVmaW5lZCBmb3Igbm93LCBzbyBjYW5ub3QgY2hhbmdlIGNzcyBvZiBkZWZhdWx0IHRvYXN0IG5vdGlmaWNhdGlvbnNcbi8vd2FpdGluZyBmb3IgcmVwbyBvd25lciB0byBwdWJsaXNoIGNoYW5nZXMgdG8gbnBtXG4vL2luIG1lYW4gdGltZSwganVzdCBzZXR0aW5nIHRoaXMgd2VpcmQgY2xhc3MgJy5jc3MtMXAzY2Q0ZycgdG8gY2hhbmdlIGNzc1xuLy9pbXBvcnQgeyBUb2FzdE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvVG9hc3ROb3RpZmljYXRpb24uanMnO1xuY29uc3QgQ29udGFjdEZvcm1XaXRoVG9hc3RzID0gd2l0aFRvYXN0TWFuYWdlcihDb250YWN0Rm9ybSk7XG4vLyBjb25zdCBUb2FzdE5vdGlmaWNhdGlvbiA9ICh7Y2hpbGRyZW4sIC4uLnByb3BzfSkgPT4gKFxuLy8gICA8RGVmYXVsdFRvYXN0IHsuLi5wcm9wc30gc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PjxwPlRlc3Q8L3A+e2NoaWxkcmVufTwvRGVmYXVsdFRvYXN0PlxuLy8gKTtcbmNvbnN0IENvbnRhY3QgPSAoe1JlYWN0R0F9KSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFRvYXN0UHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFyYWdyYXBoc1wiPlxuICAgICAgICAgIDxwPklmIHlvdSB3b3VsZCBsaWtlIHRvIHByb3ZpZGUgZmVlZGJhY2sgb3IgZ2V0IGluIGNvbnRhY3QsIHNlbmQgbWUgYW4gZW1haWwgdXNpbmcgdGhlIGZvcm0gYmVsb3cuPC9wPlxuICAgICAgICAgIDxDb250YWN0Rm9ybVdpdGhUb2FzdHMvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hYm91dC1wYXJhZ3JhcGhzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9Ub2FzdFByb3ZpZGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl19 */\n/*@ sourceURL=/Users/george/projects/personal/tasktimer/pages/contact.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ 1:
/*!************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcontact&absolutePagePath=%2FUsers%2Fgeorge%2Fprojects%2Fpersonal%2Ftasktimer%2Fpages%2Fcontact.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcontact&absolutePagePath=%2FUsers%2Fgeorge%2Fprojects%2Fpersonal%2Ftasktimer%2Fpages%2Fcontact.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcontact&absolutePagePath=%2FUsers%2Fgeorge%2Fprojects%2Fpersonal%2Ftasktimer%2Fpages%2Fcontact.js!./");


/***/ }),

/***/ "dll-reference dll_3681e7fd756237ce51c6":
/*!*******************************************!*\
  !*** external "dll_3681e7fd756237ce51c6" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_3681e7fd756237ce51c6;

/***/ })

},[[1,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=contact.js.map