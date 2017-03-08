(function() {
  'use strict';

  class PxToggle {
    beforeRegister() {
      this.is = 'px-toggle';
      this.properties = this.properties || {};
    }

    get behaviors() {
      return this._behaviors || (this._behaviors = [Polymer.IronCheckedElementBehavior]);
    }

    set behaviors(value) {
      this._behaviors = value;
    }

    set properties(value) {
      this._properties = value;
    }

    /* Properties for this component */
    get properties() {
      return {
        /**
         * The size of the toggle element. Can be one of
         * small, regular (default), large & huge.
         * @type {String}
         */
        size: {
          type: String,
          value: ""
        },
        disabled: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        }
      };
    }

    get listeners() {
     return {
       'tap': '_onCheckTap'
     };
    }

    _checkDisabledState(disabled){
      return `${(disabled ? 'toggle--disabled' : '')}`;
    }

    _checkLabelSize(size){
      return `toggle__label--${size}`;
    }

    _checkInputSize(size){
      return `toggle__input--${size}`;
    }
    _onCheckTap(evt) {
      this.checked = !this.checked;
    }
  }

  /* Register this element with the Polymer constructor */
  Polymer(PxToggle);
})();
