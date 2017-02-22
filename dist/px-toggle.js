(function () {
  'use strict';

  class PxToggle {
    /* Name for the component */
    get is() {
      return 'px-toggle';
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

    attached() {
      // this.addEventListener("tap", (evt)=>this._onToggleTap(evt));
    }

    detached() {}

    _onToggleTap(evt) {
      // console.log(this.$.simpleToggle.checked);
      // this.$.simpleToggle.checked != this.$.simpleToggle.checked;
    }

    _checkLabelSize(size) {
      return `toggle__label--${size}`;
    }

    _checkInputSize(size) {
      return `toggle__input--${size}`;
    }

    clickMe() {
      this.$.simpleToggle.blur();
    }
  }

  /* Register this element with the Polymer constructor */
  Polymer(PxToggle);
})();
//# sourceMappingURL=px-toggle.js.map
