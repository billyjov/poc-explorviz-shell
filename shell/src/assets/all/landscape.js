'use strict';



;define("landscape/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("landscape/app", ["exports", "ember-resolver", "ember-load-initializers", "landscape/config/environment", "ember-custom-elements"], function (_exports, _emberResolver, _emberLoadInitializers, _environment, _emberCustomElements) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  let App = (_dec = (0, _emberCustomElements.customElement)('ember-landscapes-app', {
    useShadowRoot: false
  }), _dec(_class = class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);

      _defineProperty(this, "rootElement", '#landscapeApp');

      _defineProperty(this, "autoboot", false);
    }

  }) || _class);
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("landscape/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("landscape/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("landscape/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // This component is not needed anymore. However we can only safely remove it once we have an Embroider release that
  // has the special dependency rule for this addon removed:
  // https://github.com/embroider-build/embroider/blob/4fad67f16f811e7f93199a1ee92dba8254c42978/packages/compat/src/addon-dependency-rules/ember-element-helper.ts
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("landscape/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("landscape/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("landscape/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("landscape/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("landscape/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("landscape/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("landscape/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("landscape/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("landscape/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("landscape/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("landscape/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("landscape/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("landscape/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("landscape/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("landscape/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("landscape/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("landscape/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("landscape/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("landscape/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("landscape/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("landscape/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("landscape/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("landscape/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("landscape/components/bs-form/element/control/switch", ["exports", "ember-bootstrap/components/bs-form/element/control/switch"], function (_exports, _switch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _switch.default;
    }
  });
});
;define("landscape/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("landscape/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("landscape/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("landscape/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("landscape/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("landscape/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("landscape/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("landscape/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("landscape/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("landscape/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("landscape/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("landscape/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
});
;define("landscape/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("landscape/components/bs-link-to", ["exports", "ember-bootstrap/components/bs-link-to"], function (_exports, _bsLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsLinkTo.default;
    }
  });
});
;define("landscape/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("landscape/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("landscape/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("landscape/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("landscape/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("landscape/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("landscape/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("landscape/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("landscape/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("landscape/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("landscape/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("landscape/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("landscape/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("landscape/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("landscape/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("landscape/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("landscape/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("landscape/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("landscape/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("landscape/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("landscape/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("landscape/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("landscape/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("landscape/components/copy-button", ["exports", "ember-cli-clipboard/components/copy-button"], function (_exports, _copyButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _copyButton.default;
    }
  });
});
;define("landscape/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("landscape/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("landscape/components/landscapes", [], function () {
  "use strict";
});
;define("landscape/components/share-landscape", ["exports", "@glimmer/component", "landscape/config/environment"], function (_exports, _component, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div id="colorPresets" class="dropdown">
    <button class="button-svg-with-hover" type="button">
      {{svg-jar "lock" class="octicon align-middle"}}
      <BsTooltip @placement="bottom" @triggerEvents="hover">
        Manage access to token
      </BsTooltip>
      <BsPopover @title="Manage Access">
        <table class="table table-striped" style="width: 100%">
          <tbody>
            {{#if (eq @token.ownerId this.auth.user.sub)}}
              {{#each @token.sharedUsersIds as |userWithAccess|}}
                <tr class="d-flex">
                  <td class="col-10">{{userWithAccess}}</td>
                  <td class="col-2">
                    <button
                      class="button-svg-with-hover"
                      type="button"
                      {{on "click" (fn this.revokeAccess userWithAccess)}}
                    >
                      {{svg-jar "dash" class="octicon align-middle"}}
                      <BsTooltip @placement="bottom" @triggerEvents="hover">
                        Revoke access
                      </BsTooltip>
                    </button>
                  </td>
                </tr>
              {{/each}}
              <tr class="d-flex">
                <td class="col-10">
                  <label for="username">Enter username</label>
                  <Input id="username" @value={{this.username}} placeholder="github|12345" />
                </td>
                <td class="col-2">
                  <button
                    class="button-svg-with-hover"
                    type="button"
                    {{on "click" this.grantAccess}}
                  >
                    {{svg-jar "plus" class="octicon align-middle"}}
                    <BsTooltip @placement="bottom" @triggerEvents="hover">
                      Grant access
                    </BsTooltip>
                  </button>
                </td>
              </tr>
            {{else}}
              <tr class="d-flex">
                <td class="col-10">Revoke own access</td>
                <td class="col-2">
                  <button
                    class="button-svg-with-hover"
                    type="button"
                    {{on "click" (fn this.revokeAccess this.auth.user.sub)}}
                  >
                    {{svg-jar "trashcan" class="octicon align-middle"}}
                    <BsTooltip @placement="bottom" @triggerEvents="hover">
                      Revoke own access
                    </BsTooltip>
                  </button>
                </td>
              </tr>
              <tr class="d-flex">
                <td class="col-10">Clone token</td>
                <td class="col-2">
                  <button
                    class="button-svg-with-hover"
                    type="button"
                    {{on "click" (fn this.cloneToken this.auth.user.sub)}}
                  >
                    {{svg-jar "clippy" class="octicon align-middle"}}
                    <BsTooltip @placement="bottom" @triggerEvents="hover">
                      Clone token to gain write access
                    </BsTooltip>
                  </button>
                </td>
              </tr>
            {{/if}}
          </tbody>
        </table>
      </BsPopover>
    </button>
  </div>
  */
  {
    "id": "+1sB7jdR",
    "block": "[[[10,0],[14,1,\"colorPresets\"],[14,0,\"dropdown\"],[12],[1,\"\\n  \"],[10,\"button\"],[14,0,\"button-svg-with-hover\"],[14,4,\"button\"],[12],[1,\"\\n    \"],[1,[28,[35,0],[\"lock\"],[[\"class\"],[\"octicon align-middle\"]]]],[1,\"\\n    \"],[8,[39,1],null,[[\"@placement\",\"@triggerEvents\"],[\"bottom\",\"hover\"]],[[\"default\"],[[[[1,\"\\n      Manage access to token\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,2],null,[[\"@title\"],[\"Manage Access\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,\"table\"],[14,0,\"table table-striped\"],[14,5,\"width: 100%\"],[12],[1,\"\\n        \"],[10,\"tbody\"],[12],[1,\"\\n\"],[41,[28,[37,4],[[30,1,[\"ownerId\"]],[30,0,[\"auth\",\"user\",\"sub\"]]],null],[[[42,[28,[37,6],[[28,[37,6],[[30,1,[\"sharedUsersIds\"]]],null]],null],null,[[[1,\"              \"],[10,\"tr\"],[14,0,\"d-flex\"],[12],[1,\"\\n                \"],[10,\"td\"],[14,0,\"col-10\"],[12],[1,[30,2]],[13],[1,\"\\n                \"],[10,\"td\"],[14,0,\"col-2\"],[12],[1,\"\\n                  \"],[11,\"button\"],[24,0,\"button-svg-with-hover\"],[24,4,\"button\"],[4,[38,7],[\"click\",[28,[37,8],[[30,0,[\"revokeAccess\"]],[30,2]],null]],null],[12],[1,\"\\n                    \"],[1,[28,[35,0],[\"dash\"],[[\"class\"],[\"octicon align-middle\"]]]],[1,\"\\n                    \"],[8,[39,1],null,[[\"@placement\",\"@triggerEvents\"],[\"bottom\",\"hover\"]],[[\"default\"],[[[[1,\"\\n                      Revoke access\\n                    \"]],[]]]]],[1,\"\\n                  \"],[13],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[2]],null],[1,\"            \"],[10,\"tr\"],[14,0,\"d-flex\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,0,\"col-10\"],[12],[1,\"\\n                \"],[10,\"label\"],[14,\"for\",\"username\"],[12],[1,\"Enter username\"],[13],[1,\"\\n                \"],[8,[39,9],[[24,1,\"username\"],[24,\"placeholder\",\"github|12345\"]],[[\"@value\"],[[30,0,[\"username\"]]]],null],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"col-2\"],[12],[1,\"\\n                \"],[11,\"button\"],[24,0,\"button-svg-with-hover\"],[24,4,\"button\"],[4,[38,7],[\"click\",[30,0,[\"grantAccess\"]]],null],[12],[1,\"\\n                  \"],[1,[28,[35,0],[\"plus\"],[[\"class\"],[\"octicon align-middle\"]]]],[1,\"\\n                  \"],[8,[39,1],null,[[\"@placement\",\"@triggerEvents\"],[\"bottom\",\"hover\"]],[[\"default\"],[[[[1,\"\\n                    Grant access\\n                  \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],[[[1,\"            \"],[10,\"tr\"],[14,0,\"d-flex\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,0,\"col-10\"],[12],[1,\"Revoke own access\"],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"col-2\"],[12],[1,\"\\n                \"],[11,\"button\"],[24,0,\"button-svg-with-hover\"],[24,4,\"button\"],[4,[38,7],[\"click\",[28,[37,8],[[30,0,[\"revokeAccess\"]],[30,0,[\"auth\",\"user\",\"sub\"]]],null]],null],[12],[1,\"\\n                  \"],[1,[28,[35,0],[\"trashcan\"],[[\"class\"],[\"octicon align-middle\"]]]],[1,\"\\n                  \"],[8,[39,1],null,[[\"@placement\",\"@triggerEvents\"],[\"bottom\",\"hover\"]],[[\"default\"],[[[[1,\"\\n                    Revoke own access\\n                  \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,\"tr\"],[14,0,\"d-flex\"],[12],[1,\"\\n              \"],[10,\"td\"],[14,0,\"col-10\"],[12],[1,\"Clone token\"],[13],[1,\"\\n              \"],[10,\"td\"],[14,0,\"col-2\"],[12],[1,\"\\n                \"],[11,\"button\"],[24,0,\"button-svg-with-hover\"],[24,4,\"button\"],[4,[38,7],[\"click\",[28,[37,8],[[30,0,[\"cloneToken\"]],[30,0,[\"auth\",\"user\",\"sub\"]]],null]],null],[12],[1,\"\\n                  \"],[1,[28,[35,0],[\"clippy\"],[[\"class\"],[\"octicon align-middle\"]]]],[1,\"\\n                  \"],[8,[39,1],null,[[\"@placement\",\"@triggerEvents\"],[\"bottom\",\"hover\"]],[[\"default\"],[[[[1,\"\\n                    Clone token to gain write access\\n                  \"]],[]]]]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]]],[1,\"        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"@token\",\"userWithAccess\"],false,[\"svg-jar\",\"bs-tooltip\",\"bs-popover\",\"if\",\"eq\",\"each\",\"-track-array\",\"on\",\"fn\",\"input\"]]",
    "moduleName": "landscape/components/share-landscape.hbs",
    "isStrictMode": false
  });

  const {
    userService
  } = _environment.default.backendAddresses;
  let ShareLandscape = (_dec = Ember._tracked, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class ShareLandscape extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "username", _descriptor, this);
    }

    async grantAccess() {
      try {
        await this.sendModifyAccess(this.args.token.value, this.username, 'grant');
        this.args.token.sharedUsersIds.addObject(this.username); // AlertifyHandler.showAlertifySuccess(`Access of ${this.username} granted for token ${this.args.token.value}`);
      } catch (e) {// AlertifyHandler.showAlertifySuccess(e.message);
      }
    }

    async revokeAccess(userId) {
      try {
        await this.sendModifyAccess(this.args.token.value, userId, 'revoke');
        this.args.token.sharedUsersIds.removeObject(userId); // AlertifyHandler.showAlertifySuccess(`Access of ${userId} revoked for token ${this.args.token.value}`);
      } catch (e) {// AlertifyHandler.showAlertifySuccess(e.message);
      }
    }

    async cloneToken(userId) {
      try {
        await this.sendModifyAccess(this.args.token.value, userId, 'clone');
        this.args.reload(); // AlertifyHandler.showAlertifySuccess(`Cloned token ${this.args.token.value}`);
      } catch (e) {// AlertifyHandler.showAlertifySuccess(e.message);
      }
    }

    sendModifyAccess(tokenId, userId, method) {
      return new Promise((resolve, reject) => {
        const encodedUserId = encodeURI(userId);
        fetch(`${userService}/token/${tokenId}/${encodedUserId}?method=${method}`, {
          headers: {
            // Authorization: `Bearer ${this.auth.accessToken}`,
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
          },
          method: 'POST'
        }).then(async response => {
          if (response.ok) {
            resolve(undefined);
          } else if (response.status === 404) {
            reject(new Error('Token not found'));
          } else {
            reject(new Error('Something went wrong'));
          }
        }).catch(e => reject(e));
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "username", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "grantAccess", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "grantAccess"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "revokeAccess", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "revokeAccess"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cloneToken", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "cloneToken"), _class.prototype)), _class));
  _exports.default = ShareLandscape;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ShareLandscape);
});
;define("landscape/components/token-selection", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <table
    id="token-selection-table"
    class="table table-striped"
  >
    <thead>
      <tr>
        <th scope="col" {{on "click" (fn this.sortBy "alias")}}>Alias</th>
        <th scope="col" {{on "click" (fn this.sortBy "value")}}>ID</th>
        <th scope="col" {{on "click" (fn this.sortBy "created")}}>Created</th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {{#if @currentToken}}
        <tr
          style="background-color: #aecce1"
          {{on "click" (fn @selectToken @currentToken)}}
        >
          <th scope="row">{{@currentToken.alias}}</th>
          <th scope="row">{{@currentToken.value}}</th>
          {{!-- <th scope="row">{{timestamp-to-date @currentToken.created "localString"}}</th> --}}
          <th scope="row"></th>
          <th scope="row"></th>
          <th scope="row"></th>
        </tr>
        <tr
          style="height: 10px"
        >
        </tr>
      {{/if}}
      {{#each
      @tokens
      as |token|
      }}
      {{!-- {{#each
      (sort-by (concat this.sortProperty ":" this.sortOrder) "value" @tokens)
      as |token|
      }} --}}
        <tr>
          <th scope="row" {{on "click" (fn @selectToken token)}}>{{token.alias}}</th>
          <th scope="row" {{on "click" (fn @selectToken token)}}>{{token.value}}</th>
          {{!-- <th scope="row" {{on "click" (fn @selectToken token)}}>{{timestamp-to-date token.created "localString"}}</th> --}}
          <th scope="row">
            <CopyButton
              class="button-svg-with-hover"
              @clipboardText={{token.value}}
              @success={{this.onTokenCopied}}
            >
              {{svg-jar "clippy" class="octicon align-middle"}}
              <BsTooltip @placement="bottom" @triggerEvents="hover">
                Copy token to clipboard
              </BsTooltip>
            </CopyButton>
          </th>
          <th scope="row">
            {{!-- {{#if (eq token.ownerId this.auth.user.sub)}}
              <button
                class="button-svg-with-hover"
                type="button"
                {{on "click" (fn @deleteToken token.value)}}
              >
                {{svg-jar "trashcan" class="octicon align-middle"}}
                <BsTooltip @placement="bottom" @triggerEvents="hover">
                  Delete token permanently
                </BsTooltip>
              </button>
            {{/if}} --}}
          </th>
          <th scope="row">
            <ShareLandscape
              @token={{token}}
              @reload={{@reload}}
            />
          </th>
        </tr>
      {{else}}
        There are no tokens linked to your account at the moment.
      {{/each}}
    </tbody>
  </table>
  
  */
  {
    "id": "iysRR/JX",
    "block": "[[[10,\"table\"],[14,1,\"token-selection-table\"],[14,0,\"table table-striped\"],[12],[1,\"\\n  \"],[10,\"thead\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[11,\"th\"],[24,\"scope\",\"col\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"sortBy\"]],\"alias\"],null]],null],[12],[1,\"Alias\"],[13],[1,\"\\n      \"],[11,\"th\"],[24,\"scope\",\"col\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"sortBy\"]],\"value\"],null]],null],[12],[1,\"ID\"],[13],[1,\"\\n      \"],[11,\"th\"],[24,\"scope\",\"col\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"sortBy\"]],\"created\"],null]],null],[12],[1,\"Created\"],[13],[1,\"\\n      \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[13],[1,\"\\n      \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[13],[1,\"\\n      \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tbody\"],[12],[1,\"\\n\"],[41,[30,1],[[[1,\"      \"],[11,\"tr\"],[24,5,\"background-color: #aecce1\"],[4,[38,0],[\"click\",[28,[37,1],[[30,2],[30,1]],null]],null],[12],[1,\"\\n        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[1,[30,1,[\"alias\"]]],[13],[1,\"\\n        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[1,[30,1,[\"value\"]]],[13],[1,\"\\n\"],[1,\"        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[13],[1,\"\\n        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[13],[1,\"\\n        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"tr\"],[14,5,\"height: 10px\"],[12],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[42,[28,[37,4],[[28,[37,4],[[30,3]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[12],[1,\"\\n        \"],[11,\"th\"],[24,\"scope\",\"row\"],[4,[38,0],[\"click\",[28,[37,1],[[30,2],[30,4]],null]],null],[12],[1,[30,4,[\"alias\"]]],[13],[1,\"\\n        \"],[11,\"th\"],[24,\"scope\",\"row\"],[4,[38,0],[\"click\",[28,[37,1],[[30,2],[30,4]],null]],null],[12],[1,[30,4,[\"value\"]]],[13],[1,\"\\n\"],[1,\"        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[1,\"\\n          \"],[8,[39,5],[[24,0,\"button-svg-with-hover\"]],[[\"@clipboardText\",\"@success\"],[[30,4,[\"value\"]],[30,0,[\"onTokenCopied\"]]]],[[\"default\"],[[[[1,\"\\n            \"],[1,[28,[35,6],[\"clippy\"],[[\"class\"],[\"octicon align-middle\"]]]],[1,\"\\n            \"],[8,[39,7],null,[[\"@placement\",\"@triggerEvents\"],[\"bottom\",\"hover\"]],[[\"default\"],[[[[1,\"\\n              Copy token to clipboard\\n            \"]],[]]]]],[1,\"\\n          \"]],[]]]]],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[1,\"\\n\"],[1,\"        \"],[13],[1,\"\\n        \"],[10,\"th\"],[14,\"scope\",\"row\"],[12],[1,\"\\n          \"],[8,[39,8],null,[[\"@token\",\"@reload\"],[[30,4],[30,5]]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[4]],[[[1,\"      There are no tokens linked to your account at the moment.\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@currentToken\",\"@selectToken\",\"@tokens\",\"token\",\"@reload\"],false,[\"on\",\"fn\",\"if\",\"each\",\"-track-array\",\"copy-button\",\"svg-jar\",\"bs-tooltip\",\"share-landscape\"]]",
    "moduleName": "landscape/components/token-selection.hbs",
    "isStrictMode": false
  });

  let TokenSelection = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class TokenSelection extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "sortProperty", _descriptor, this);

      _initializerDefineProperty(this, "sortOrder", _descriptor2, this);
    }

    sortBy(property) {
      if (property === this.sortProperty) {
        if (this.sortOrder === 'asc') {
          this.sortOrder = 'desc';
        } else {
          this.sortOrder = 'asc';
        }
      } else {
        this.sortOrder = 'asc';
        this.sortProperty = property;
      }
    }

    // eslint-disable-next-line class-methods-use-this
    onTokenCopied() {
      console.log('Token copied to clipboard'); // AlertifyHandler.showAlertifySuccess('Token copied to clipboard');
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "sortProperty", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'value';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "sortOrder", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 'asc';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "sortBy", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "sortBy"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onTokenCopied", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "onTokenCopied"), _class.prototype)), _class));
  _exports.default = TokenSelection;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TokenSelection);
});
;define("landscape/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("landscape/controllers/landscapes", ["exports", "landscape/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _descriptor, _descriptor2, _descriptor3;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const {
    userService
  } = _environment.default.backendAddresses;
  let Landscapes = (_dec = Ember.inject.service('landscape-token'), _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, _dec8 = Ember._action, _dec9 = Ember._action, (_class = class Landscapes extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tokenService", _descriptor, this);

      _initializerDefineProperty(this, "tokenCreationModalIsOpen", _descriptor2, this);

      _initializerDefineProperty(this, "tokenAlias", _descriptor3, this);
    }

    openTokenCreationModal() {
      console.log('open token creation modal');
      this.tokenCreationModalIsOpen = true;
      this.tokenAlias = '';
    }

    closeTokenCreationModal() {
      this.tokenCreationModalIsOpen = false;
      this.tokenAlias = '';
    }

    selectToken(token) {
      this.tokenService.setToken(token);
      this.transitionToRoute('visualization');
    }

    async createToken() {
      try {
        // const token = await this.sendTokenCreateRequest(this.tokenAlias);
        await this.sendTokenCreateRequest(this.tokenAlias);
        this.closeTokenCreationModal(); // AlertifyHandler.showAlertifySuccess(`Token created: ${token.value}`);

        this.send('refreshRoute');
      } catch (e) {// AlertifyHandler.showAlertifyError(e.message);
      }
    }

    async deleteToken(tokenId) {
      var _this$tokenService$to;

      try {
        await this.sendTokenDeleteRequest(tokenId); // AlertifyHandler.showAlertifySuccess('Token successfully deleted');
      } catch (e) {// AlertifyHandler.showAlertifyError(e.message);
      }

      if (((_this$tokenService$to = this.tokenService.token) === null || _this$tokenService$to === void 0 ? void 0 : _this$tokenService$to.value) === tokenId) {
        this.tokenService.removeToken();
      }

      this.send('refreshRoute');
    }

    sendTokenCreateRequest(alias = '') {
      // let uId = this.auth.user?.sub;
      console.log('user inside landscape controller value: ', JSON.parse(JSON.stringify(sessionStorage.getItem('user'))));
      let uId = JSON.parse(sessionStorage.getItem('user')).sub;

      if (!uId) {
        return Promise.reject(new Error('User profile not set'));
      }

      uId = encodeURI(uId);
      return new Promise((resolve, reject) => {
        fetch(`${userService}/user/${uId}/token`, {
          headers: {
            // Authorization: `Bearer ${this.auth.accessToken}`,
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            alias
          })
        }).then(async response => {
          if (response.ok) {
            const token = await response.json();
            resolve(token);
          } else {
            reject(new Error('Something went wrong'));
          }
        }).catch(e => reject(e));
      });
    }

    reload() {
      this.send('refreshRoute');
    }

    sendTokenDeleteRequest(tokenId) {
      return new Promise((resolve, reject) => {
        fetch(`${userService}/token/${tokenId}`, {
          headers: {
            // Authorization: `Bearer ${this.auth.accessToken}`,
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
          },
          method: 'DELETE'
        }).then(async response => {
          if (response.ok) {
            resolve(undefined);
          } else if (response.status === 404) {
            reject(new Error('Token not found'));
          } else {
            reject(new Error('Something went wrong'));
          }
        }).catch(e => reject(e));
      });
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tokenService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tokenCreationModalIsOpen", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "tokenAlias", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "openTokenCreationModal", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "openTokenCreationModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "closeTokenCreationModal", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "closeTokenCreationModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "selectToken", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "selectToken"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "createToken", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "createToken"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "deleteToken", [_dec8], Object.getOwnPropertyDescriptor(_class.prototype, "deleteToken"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "reload", [_dec9], Object.getOwnPropertyDescriptor(_class.prototype, "reload"), _class.prototype)), _class)); // DO NOT DELETE: this is how TypeScript knows how to look up your controllers.

  _exports.default = Landscapes;
});
;define("landscape/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("landscape/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("landscape/helpers/app-version", ["exports", "landscape/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("landscape/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
;define("landscape/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("landscape/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
});
;define("landscape/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
});
;define("landscape/helpers/bs-noop", ["exports", "ember-bootstrap/helpers/bs-noop"], function (_exports, _bsNoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNoop.default;
    }
  });
});
;define("landscape/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
});
;define("landscape/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
});
;define("landscape/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
});
;define("landscape/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("landscape/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
;define("landscape/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("landscape/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
;define("landscape/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define("landscape/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
;define("landscape/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("landscape/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("landscape/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("landscape/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("landscape/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("landscape/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
});
;define("landscape/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("landscape/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("landscape/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("landscape/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("landscape/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
});
;define("landscape/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("landscape/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("landscape/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("landscape/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("landscape/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
});
;define("landscape/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("landscape/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("landscape/helpers/is-clipboard-supported", ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"], function (_exports, _isClipboardSupported) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(_exports, "isClipboardSupported", {
    enumerable: true,
    get: function () {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
;define("landscape/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("landscape/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
});
;define("landscape/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("landscape/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("landscape/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("landscape/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("landscape/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("landscape/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("landscape/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("landscape/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("landscape/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("landscape/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("landscape/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("landscape/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("landscape/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
});
;define("landscape/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("landscape/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("landscape/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("landscape/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("landscape/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("landscape/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("landscape/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("landscape/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
});
;define("landscape/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("landscape/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("landscape/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("landscape/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("landscape/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("landscape/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("landscape/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("landscape/helpers/svg-jar", ["exports", "ember-svg-jar/utils/make-helper", "ember-svg-jar/utils/make-svg"], function (_exports, _makeHelper, _makeSvg) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.svgJar = svgJar;
  _exports.default = void 0;

  function getInlineAsset(assetId) {
    try {
      /* eslint-disable global-require */
      return require(`ember-svg-jar/inlined/${assetId}`).default;
    } catch (err) {
      return null;
    }
  }

  function svgJar(assetId, svgAttrs) {
    return (0, _makeSvg.default)(assetId, svgAttrs, getInlineAsset);
  }

  var _default = (0, _makeHelper.default)(svgJar);

  _exports.default = _default;
});
;define("landscape/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("landscape/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("landscape/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("landscape/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("landscape/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("landscape/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
});
;define("landscape/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("landscape/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("landscape/index", ["exports", "ember-custom-elements"], function (_exports, _emberCustomElements) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "customElement", {
    enumerable: true,
    get: function () {
      return _emberCustomElements.customElement;
    }
  });
  Object.defineProperty(_exports, "getCustomElement", {
    enumerable: true,
    get: function () {
      return _emberCustomElements.getCustomElement;
    }
  });
  Object.defineProperty(_exports, "setupCustomElementFor", {
    enumerable: true,
    get: function () {
      return _emberCustomElements.setupCustomElementFor;
    }
  });
  Object.defineProperty(_exports, "EmberOutletElement", {
    enumerable: true,
    get: function () {
      return _emberCustomElements.EmberOutletElement;
    }
  });
  Object.defineProperty(_exports, "EmberCustomElement", {
    enumerable: true,
    get: function () {
      return _emberCustomElements.EmberCustomElement;
    }
  });
});
;define("landscape/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "landscape/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("landscape/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("landscape/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("landscape/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("landscape/initializers/export-application-global", ["exports", "landscape/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("landscape/initializers/load-bootstrap-config", ["exports", "landscape/config/environment", "ember-bootstrap/config", "ember-bootstrap/version"], function (_exports, _environment, _config, _version) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});

    (0, _version.registerLibrary)();
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("landscape/instance-initializers/ember-custom-elements", ["exports", "ember-custom-elements/instance-initializers/ember-custom-elements"], function (_exports, _emberCustomElements) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberCustomElements.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberCustomElements.initialize;
    }
  });
});
;define("landscape/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("landscape/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
});
;define("landscape/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("landscape/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("landscape/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("landscape/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
;define("landscape/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("landscape/router", ["exports", "landscape/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('landscapes');
  });
});
;define("landscape/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * TODO
   *
   * @class Landascapes-Route
   * @extends Ember.Route
   */
  class IndexRoute extends Ember.Route {
    beforeModel(transition) {
      console.log('============ before model index landscape: ================');
      super.beforeModel(transition); // this.replaceWith('landscapes/');

      this.transitionTo('landscapes');
    }

  }

  _exports.default = IndexRoute;
});
;define("landscape/routes/landscapes", ["exports", "landscape/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const {
    userService
  } = _environment.default.backendAddresses;
  let Landscapes = (_dec = Ember.inject.service('landscape-token'), _dec2 = Ember._action, _dec3 = Ember._action, (_class = class Landscapes extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "tokenService", _descriptor, this);
    }

    refreshRoute() {
      return this.refresh();
    }

    beforeModel() {
      console.log('======== INIT LANDSCAPE ROUTE INSIDE APP =======');
    }

    async model() {
      var _JSON$parse;

      // let uId = this.auth.user?.sub;
      let uId = (_JSON$parse = JSON.parse(sessionStorage.getItem('user'))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.sub;

      if (!uId) {
        return Promise.reject(new Error('User profile not set'));
      }

      const a = sessionStorage.getItem('user');
      console.log('==== USER UID ===== ', JSON.parse(a).sub);
      uId = encodeURI(uId);
      return new Promise((resolve, reject) => {
        fetch(`${userService}/user/${uId}/token`, {
          headers: {
            // Authorization: `Bearer ${this.auth.accessToken}`,
            Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
          }
        }).then(async response => {
          if (response.ok) {
            const tokens = await response.json();
            console.log('tokens from backend: ', tokens);
            resolve(tokens);
          } else {
            reject();
          }
        }).catch(e => reject(e));
      });
    }

    afterModel(landscapeTokens) {
      const currentToken = this.tokenService.token;
      console.log('current token ===: ', currentToken);
      console.log('current token list ===: ', landscapeTokens);
      const tokenCandidates = landscapeTokens.filter(token => token.value === (currentToken === null || currentToken === void 0 ? void 0 : currentToken.value));
      console.log('token candidates ===: ', tokenCandidates);

      if (tokenCandidates.length > 0) {
        this.tokenService.setToken(tokenCandidates[0]);
      } else {
        // selected token does not exist anymore
        this.tokenService.removeToken();
      }
    }

    // eslint-disable-next-line class-methods-use-this
    loading()
    /* transition, originRoute */
    {
      return true;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tokenService", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "refreshRoute", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "refreshRoute"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "loading", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "loading"), _class.prototype)), _class));
  _exports.default = Landscapes;
});
;define("landscape/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("landscape/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("landscape/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("landscape/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("landscape/services/landscape-token", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class LandscapeTokenService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "token", null);
    }

    init() {
      super.init();
      this.restoreToken();
    }

    restoreToken() {
      const currentLandscapeTokenJSON = localStorage.getItem('currentLandscapeToken');

      if (currentLandscapeTokenJSON === null) {
        this.set('token', null);
        return;
      }

      const parsedToken = JSON.parse(currentLandscapeTokenJSON);

      if (this.isValidToken(parsedToken)) {
        this.set('token', parsedToken);
      } else {
        this.removeToken();
      }
    }

    setToken(token) {
      localStorage.setItem('currentLandscapeToken', JSON.stringify(token));
      this.set('token', token);
    }

    removeToken() {
      localStorage.removeItem('currentLandscapeToken');
      this.set('token', null);
    }

    isValidToken(token) {
      return this.isObject(token) && Object.keys(token).length === 4 && {}.hasOwnProperty.call(token, 'alias') && {}.hasOwnProperty.call(token, 'created') && {}.hasOwnProperty.call(token, 'ownerId') && {}.hasOwnProperty.call(token, 'value') && typeof token.alias === 'string' && typeof token.created === 'number' && typeof token.ownerId === 'string' && typeof token.value === 'string';
    }

    isObject(variable) {
      return Object.prototype.toString.call(variable) === '[object Object]';
    }

  } // DO NOT DELETE: this is how TypeScript knows how to look up your services.


  _exports.default = LandscapeTokenService;
});
;define("landscape/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("landscape/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("landscape/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("landscape/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "t0jZrW2F",
    "block": "[[[10,\"link\"],[14,\"rel\",\"stylesheet\"],[14,6,\"assets/landscapes/landscapes.css\"],[12],[13],[1,\"\\n\"],[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\\n\"],[10,\"h1\"],[12],[1,\"Hello from landscapes sub app\"],[13],[1,\"\\n\"],[10,\"button\"],[14,0,\"btn btn-primary\"],[12],[1,\"Button check styles\"],[13],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "landscape/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("landscape/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("landscape/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("landscape/templates/landscapes", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "6XNK27T3",
    "block": "[[[1,\"\\n\"],[10,\"h1\"],[12],[1,\"Just a simple app without nothing bs\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "landscape/templates/landscapes.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("landscape/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("landscape/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("landscape/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("landscape/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('landscape/config/environment', [], function() {
  
          var exports = {
            'default': {"modulePrefix":"landscape","environment":"development","rootURL":"/","locationType":"auto","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false},"_APPLICATION_TEMPLATE_WRAPPER":false,"_DEFAULT_ASYNC_OBSERVERS":true,"_JQUERY_INTEGRATION":false,"_TEMPLATE_ONLY_GLIMMER_COMPONENTS":true},"backendAddresses":{"landscapeService":"http://192.168.1.11:8082","traceService":"http://192.168.1.11:8083","userService":"http://192.168.1.11:8084","collaborativeService":"ws://192.168.1.11:8085"},"APP":{"name":"landscape","version":"0.0.0+a3de2882"},"exportApplicationGlobal":true}
          };
          Object.defineProperty(exports, '__esModule', {value: true});
          return exports;
        
});

;
          if (!runningTests) {
            require("landscape/app")["default"].create({"name":"landscape","version":"0.0.0+a3de2882"});
          }
        
//# sourceMappingURL=landscape.map
