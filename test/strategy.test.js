/* global describe, it, expect */
/* jshint expr: true */

var WindowsLiveStrategy = require('../lib/strategy');


describe('Strategy', function() {
  
  describe('constructed', function() {
    var strategy = new WindowsLiveStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
    
    it('should be named windowslive', function() {
      expect(strategy.name).to.equal('windowslive');
    });
  })
  
});
