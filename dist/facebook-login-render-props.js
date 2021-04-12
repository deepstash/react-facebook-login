!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.FacebookLogin = t(require("react")) : e.FacebookLogin = t(e.react)
}(this, function (e) {
  return function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var r = o[n] = {exports: {}, id: n, loaded: !1};
      return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }

    var o = {};
    return t.m = e, t.c = o, t.p = "", t(0)
  }([function (e, t, o) {
    e.exports = o(4)
  }, function (e, t, o) {
    e.exports = o(6)()
  }, function (t, o) {
    t.exports = e
  }, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function (e, t) {
      return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
    }
  }, function (e, t, o) {
    "use strict";

    function n(e) {
      return e && e.__esModule ? e : {"default": e}
    }

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var a = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t];
        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
      }
      return e
    }, c = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
      }
    }(), u = o(2), d = n(u), l = o(1), p = n(l), f = o(5), b = n(f), h = o(3), y = n(h), g = function () {
      var e = !1;
      try {
        e = !!(window.navigator && window.navigator.standalone || navigator.userAgent.match("CriOS") || navigator.userAgent.match(/mobile/i))
      } catch (t) {
      }
      return e
    }, k = function (e) {
      function t(e) {
        r(this, t);
        var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return o.responseApi = function (e) {
          window.FB.api("/me", {locale: o.props.language, fields: o.props.fields}, function (t) {
            a(t, e), o.props.callback(t)
          })
        }, o.checkLoginState = function (e) {
          o.setStateIfMounted({isProcessing: !1}), e.authResponse ? o.responseApi(e.authResponse) : o.props.onFailure ? o.props.onFailure({status: e.status}) : o.props.callback({status: e.status})
        }, o.checkLoginAfterRefresh = function (e) {
          "connected" === e.status ? o.checkLoginState(e) : window.FB.login(function (e) {
            return o.checkLoginState(e)
          }, !0)
        }, o.click = function (e) {
          if (o.state.isSdkLoaded && !o.state.isProcessing && !o.props.isDisabled) {
            o.setState({isProcessing: !0});
            var t = o.props, n = t.scope, r = t.appId, i = t.onClick, s = t.returnScopes, a = t.responseType,
              c = t.redirectUri, u = t.disableMobileRedirect, d = t.authType, l = t.state;
            if ("function" == typeof i && (i(e), e.defaultPrevented)) return void o.setState({isProcessing: !1});
            var p = {
              client_id: r,
              redirect_uri: c,
              state: l,
              return_scopes: s,
              scope: n,
              response_type: a,
              auth_type: d
            };
            if (o.props.isMobile && !u) window.location.href = "https://www.facebook.com/dialog/oauth" + (0, b["default"])(p); else {
              if (!window.FB) return void (o.props.onFailure && o.props.onFailure({status: "facebookNotLoaded"}));
              window.FB.getLoginStatus(function (e) {
                "connected" === e.status ? o.checkLoginState(e) : window.FB.login(o.checkLoginState, {
                  scope: n,
                  return_scopes: s,
                  auth_type: p.auth_type
                })
              })
            }
          }
        }, o.state = {isSdkLoaded: !1, isProcessing: !1}, o
      }

      return s(t, e), c(t, [{
        key: "componentDidMount", value: function () {
          if (this._isMounted = !0, document.getElementById("facebook-jssdk")) return void this.sdkLoaded();
          this.setFbAsyncInit(), this.loadSdkAsynchronously();
          var e = document.getElementById("fb-root");
          e || (e = document.createElement("div"), e.id = "fb-root", document.body.appendChild(e))
        }
      }, {
        key: "componentWillReceiveProps", value: function (e) {
          this.state.isSdkLoaded && e.autoLoad && !this.props.autoLoad && window.FB.getLoginStatus(this.checkLoginAfterRefresh)
        }
      }, {
        key: "componentWillUnmount", value: function () {
          this._isMounted = !1
        }
      }, {
        key: "setStateIfMounted", value: function (e) {
          this._isMounted && this.setState(e)
        }
      }, {
        key: "setFbAsyncInit", value: function () {
          var e = this, t = this.props, o = t.appId, n = t.xfbml, r = t.cookie, i = t.version, s = t.autoLoad;
          window.fbAsyncInit = function () {
            window.FB.init({
              version: "v" + i,
              appId: o,
              xfbml: n,
              cookie: r
            }), e.setStateIfMounted({isSdkLoaded: !0}), (s || e.isRedirectedFromFb()) && window.FB.getLoginStatus(e.checkLoginAfterRefresh)
          }
        }
      }, {
        key: "isRedirectedFromFb", value: function () {
          var e = window.location.search;
          return "facebookdirect" === (0, y["default"])(e, "state") && ((0, y["default"])(e, "code") || (0, y["default"])(e, "granted_scopes"))
        }
      }, {
        key: "sdkLoaded", value: function () {
          this.setState({isSdkLoaded: !0})
        }
      }, {
        key: "loadSdkAsynchronously", value: function () {
          var e = this.props.language;
          !function (t, o, n) {
            var r = t.getElementsByTagName(o)[0], i = r, s = r;
            t.getElementById(n) || (s = t.createElement(o), s.id = n, s.src = "https://connect.facebook.net/" + e + "/sdk.js", i.parentNode.insertBefore(s, i))
          }(document, "script", "facebook-jssdk")
        }
      }, {
        key: "render", value: function o() {
          var o = this.props.render;
          if (!o) throw new Error("ReactFacebookLogin requires a render prop to render");
          var e = {
            onClick: this.click,
            isDisabled: !!this.props.isDisabled,
            isProcessing: this.state.isProcessing,
            isSdkLoaded: this.state.isSdkLoaded
          };
          return this.props.render(e)
        }
      }]), t
    }(d["default"].Component);
    k.propTypes = {
      isDisabled: p["default"].bool,
      callback: p["default"].func.isRequired,
      appId: p["default"].string.isRequired,
      xfbml: p["default"].bool,
      cookie: p["default"].bool,
      authType: p["default"].string,
      scope: p["default"].string,
      state: p["default"].string,
      responseType: p["default"].string,
      returnScopes: p["default"].bool,
      redirectUri: p["default"].string,
      autoLoad: p["default"].bool,
      disableMobileRedirect: p["default"].bool,
      isMobile: p["default"].bool,
      fields: p["default"].string,
      version: p["default"].string,
      language: p["default"].string,
      onClick: p["default"].func,
      onFailure: p["default"].func,
      render: p["default"].func.isRequired
    }, k.defaultProps = {
      redirectUri: "undefined" != typeof window ? window.location.href : "/",
      scope: "public_profile,email",
      returnScopes: !1,
      xfbml: !1,
      cookie: !1,
      authType: "",
      fields: "name",
      version: "3.1",
      language: "en_US",
      disableMobileRedirect: !1,
      isMobile: g(),
      onFailure: null,
      state: "facebookdirect",
      responseType: "code"
    }, t["default"] = k
  }, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function (e) {
      return "?" + Object.keys(e).map(function (t) {
        return t + "=" + encodeURIComponent(e[t])
      }).join("&")
    }
  }, function (e, t, o) {
    "use strict";

    function n() {
    }

    function r() {
    }

    var i = o(7);
    r.resetWarningCache = n, e.exports = function () {
      function e(e, t, o, n, r, s) {
        if (s !== i) {
          var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw a.name = "Invariant Violation", a
        }
      }

      function t() {
        return e
      }

      e.isRequired = e;
      var o = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: r,
        resetWarningCache: n
      };
      return o.PropTypes = o, o
    }
  }, function (e, t) {
    "use strict";
    var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = o
  }])
});
