var chai = require('chai').use(require('chai-as-promised'));
// import { Given, When, Then, BeforeAll, TableDefinition, AfterAll, } from "cucumber";
var expect = chai.expect;

var Ceaser_Cipher = function() {
  browser.waitForAngularEnabled(false);

  var Ceaser_Cipher_Page = require("../pages/Ceaser_Cipher_Page.js");

  this.World = function MyWorld() {
    this.page = new Ceaser_Cipher_Page();
  };

  this.Given(/^Ceaser Cipher Is Open$/, function (callback) {
    this.page.get();
    browser.sleep(5000)
    callback();
  });

  this.When(/^I enter <"([^"]*)">$/, function (arg1, callback) {
    this.page.numberOfShifts(arg1);
    this.browser.sleep(500)
    callback();
  });

  this.When(/^I enter <"([^"]*)"> Into Number Of Shifts$/, function (arg1, callback) {
    this.page.numberOfShifts(arg1);
    this.browser.sleep(500)
    callback();
  });

  this.Then('the result should equal $result', function (result, callback) {
    expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
  });
};

module.exports = Ceaser_Cipher;