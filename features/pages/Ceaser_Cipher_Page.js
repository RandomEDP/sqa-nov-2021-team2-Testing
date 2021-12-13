const { element } = require("protractor");

var CalculatorPage = function() {

  this.get = function() {
    browser.get('https://cipher.kierancaruana.com');
  };

  this.setFirstValue = function(value) {
    element(by.model('first')).sendKeys(value);
  };

  this.setSecondValue = function(value) {
    element(by.model('second')).sendKeys(value);
  };

  this.setOperator = function(value) {
    element(by.model('operator')).element(by.cssContainingText('option', value)).click();
  };

  this.getResult = function() {
    return element(by.binding('latest')).getText();
  };

  this.numberOfShifts = function(value) {
    element(by.css('body > div > div > input:nth-of-type(1)')).sendKeys(value)
  }

  this.preEncryptionTest = function(value) {
    element(by.css('body > div > div > input:nth-of-type(2)'))
  } 
};

module.exports = CalculatorPage;
