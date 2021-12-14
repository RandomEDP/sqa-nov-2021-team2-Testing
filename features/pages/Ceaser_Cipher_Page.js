const { element, browser } = require("protractor");

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
    element(by.id('caesarArgBox')).sendKeys(value);
  }

  this.preEncryptionTest = function(value) {
    element(by.css('body > div > div:nth-of-type(3) > input')).sendKeys(value);
  }

  this.postEncryptionTest = function(value) {
    element(by.css('body > div > div:nth-of-type(4) > input')).sendKeys(value);
  } 

  this.getPreEncryptionTest = function(value) {
    return element(by.css('body > div > div:nth-of-type(3) > input')).getAttribute('value');
  } 

  this.getPostEncryptionTest = function() {
    return element(by.css('body > div > div:nth-of-type(4) > input')).getAttribute('value');
    } 
};

module.exports = CalculatorPage;
