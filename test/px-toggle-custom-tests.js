  describe('px-toggle checked behaviour', function () {
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

    it('input is checked in shadow root when host attribute is checked', function() {
      var toggleElement = fixture('CheckedAttributeFeature');
      var inputElement = Polymer.dom(toggleElement.root).querySelector('input');
      assert.isTrue(inputElement.checked);
    });

    it('input is unchecked in shadow root when host attribute is removed', function() {
      var toggleElement = fixture('CheckedAttributeFeature');
      var inputElement = Polymer.dom(toggleElement.root).querySelector('input');
      toggleElement.removeAttribute('checked');
      assert.isFalse(inputElement.checked);
    });

    it('is unchecked when checked property is set false', function() {
      var toggleElement = fixture('CheckedAttributeFeature');
      toggleElement.checked = false;
      assert.isFalse(toggleElement.checked);
    });

    it('is unchecked when checked attribute is removed', function() {
      var toggleElement = fixture('CheckedAttributeFeature');
      toggleElement.removeAttribute('checked');
      assert.isFalse(toggleElement.checked);
    });
  });

  describe('px-toggle disabled behaviour', function () {
    it('is disabled when disabled attribute is true', function() {
      var toggleElement = fixture('DisabledToggleFeature');
      assert.isTrue(toggleElement.disabled);
    });

    it('is not disabled when disabled attribute removed', function() {
      var toggleElement = fixture('DisabledToggleFeature');
      toggleElement.removeAttribute('disabled');
      assert.isFalse(toggleElement.disabled);
    });

    it('is not disabled when disabled property set to false', function() {
      var toggleElement = fixture('DisabledToggleFeature');
      toggleElement.disabled = false;
      assert.isFalse(toggleElement.disabled);
    });
  });

  describe('px-toggle size behaviour', function () {
    it('is about 20px height when "small" size', function() {
      var toggleElement = fixture('PxToggleFixture');
      toggleElement.size = 'small';
      expect(toggleElement.getBoundingClientRect().height).to.be.closeTo(20, 1);
    });

    it('is about 30px height when "normal" size', function() {
      var toggleElement = fixture('PxToggleFixture');
      expect(toggleElement.getBoundingClientRect().height).to.be.closeTo(30, 1);
    });

    it('is about 40px height when "large" size', function() {
      var toggleElement = fixture('PxToggleFixture');
      toggleElement.size = 'large';
      expect(toggleElement.getBoundingClientRect().height).to.be.closeTo(40, 1);
    });

    it('is about 60px height when "huge" size', function() {
      var toggleElement = fixture('PxToggleFixture');
      toggleElement.size = 'huge';
      expect(toggleElement.getBoundingClientRect().height).to.be.closeTo(60, 1);
    });
  });
