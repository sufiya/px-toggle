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
         * The zoom level of the active map. Can be used to set or update
         * the zoom level of the map, or read from after the user changes the
         * map zoom level to an updated value.
         *
         * @type {Number}
         */
        size: {
          type: String,
          value: "small"
        }
      };
    }

    get listeners() {
     return {
       'tap': '_onCheckTap'
     };
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
