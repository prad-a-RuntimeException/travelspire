'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /cards when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/cards");
  });


  describe('cards', function() {

    beforeEach(function() {
      browser.get('index.html#/cards');
    });

      var cardsList = element.all(by.repeater('card in cards'));
      var query = element(by.model('query'));


      it('should filter the card list as a user types into the search box', function() {
          expect(cardsList.count()).toBeGreaterThan(0);

          query.sendKeys('SomeRandomValue');
          expect(cardsList.count()).toBe(0);

          query.clear();
          query.sendKeys('');
          expect(cardsList.count()).toBeGreaterThan(1);
      });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
