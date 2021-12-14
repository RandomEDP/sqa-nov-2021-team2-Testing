//Protractor is a wrapper around Selenium Webdriver that provides an automation test framework
//which simulates user interaction with an Angular web application for a range of browsers and mobile devices.
//It provides all features of Selenium WebDriver along with Angular specific features for seamless end to end testing.
const { browser } = require('protractor');  

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var Vigenere_Cipher = function() {
  browser.waitForAngularEnabled(false);

  var Vigenere_Cipher_Page = require("../pages/Vigenere_Cipher_Page.js");

  this.World = function MyWorld() {
    this.page = new Vigenere_Cipher_Page();
  };

  this.Given(/^Vigenere Cipher Is Open$/, function (callback) {
    this.page.get();
    this.page.selectDropdownbyNum(2);
    callback();
  });

  this.When (/^I enter "([^"]*)" For Vigenere$/, function (arg1, callback) {
    this.page.preEncryptionTest(arg1)
    callback();
  });

  this.When (/^I enter "([^"]*)" Into Post_Encryption_Result For Vigenere$/, function (arg1, callback) {
    this.page.postEncryptionTest(arg1)
    callback();
  });

  this.When(/^I enter "([^"]*)" Into Number Of Shifts For Vigenere$/, function (arg1, callback) {
    this.page.vigenereArgBox(arg1)
    callback();
  });

  this.Then(/^the post result should equal "([^"]*)" For Vigenere$/, function (result, callback) {
    expect(this.page.getPreEncryptionTest()).to.eventually.equal(result).and.notify(callback);
  });

  this.Then(/^the pre result should equal "([^"]*)" For Vigenere$/, function (result, callback) {
    expect(this.page.getPostEncryptionTest()).to.eventually.equal(result).and.notify(callback);
  });


};

module.exports = Vigenere_Cipher;