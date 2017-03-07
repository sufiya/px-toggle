// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {

  describe('px-toggle', function () {

    it('should be unchecked by default', function() {
      var toggleElement = fixture('PxToggleFixture');
      assert.isFalse(toggleElement.checked);
    });

    it('can be checked by setting property', function() {
      var toggleElement = fixture('PxToggleFixture');
      assert.isFalse(toggleElement.checked);
      toggleElement.checked = true;
      assert.isTrue(toggleElement.checked);
    });

    it('is checked when attribute is checked', function() {
      var toggleElement = fixture('CheckedAttributeFeature');
      assert.isTrue(toggleElement.checked);
    });

    it('is unchecked when attribute is set false', function() {
      var toggleElement = fixture('CheckedAttributeFeature');
      toggleElement.checked = false;
      assert.isFalse(toggleElement.checked);
    });
  });
}
