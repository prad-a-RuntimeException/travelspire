'use strict';

describe('travelspire.cards module', function() {

  beforeEach(module('travelspire.cards'));

  var scope, ctrl, $httpBackend;

  describe('cards controller', function(){
    it('should ....', inject(function(_$httpBackend_, $rootScope,$controller) {
        var scope = $rootScope.$new(),
            CardsCtrl = $controller('CardsCtrl',{$scope:scope});
      expect(CardsCtrl).toBeDefined();
      expect(scope.cards.length).toBe(2)
    }));

  });
});