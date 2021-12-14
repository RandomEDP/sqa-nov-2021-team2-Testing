const { browser } = require('protractor');

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
    callback();
  });

  this.When (/^I enter "([^"]*)"$/, function (arg1, callback) {
    this.page.preEncryptionTest(arg1)
    callback();
  });

  this.When (/^I enter "([^"]*)" Into Post_Encryption_Result$/, function (arg1, callback) {
    this.page.postEncryptionTest(arg1)
    callback();
  });

  this.When(/^I enter "([^"]*)" Into Number Of Shifts$/, function (arg1, callback) {
    this.page.numberOfShifts(arg1)
    callback();
  });

  this.Then(/^the post result should equal "([^"]*)"$/, function (result, callback) {
    expect(this.page.getPreEncryptionTest()).to.eventually.equal(result).and.notify(callback);
  });

  this.Then(/^the pre result should equal "([^"]*)"$/, function (result, callback) {
    expect(this.page.getPostEncryptionTest()).to.eventually.equal(result).and.notify(callback);
  });


};

module.exports = Ceaser_Cipher;