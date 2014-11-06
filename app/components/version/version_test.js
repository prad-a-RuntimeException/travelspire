'use strict';

describe('travelspire.version module', function() {
  beforeEach(module('travelspire.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
