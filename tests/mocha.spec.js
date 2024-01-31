const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");

describe("Example Test Suite", function () {
  it("should open Google homepage and search", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.google.com");
    let title = await driver.getTitle();
    console.log("Page title: " + title);
    assert.equal(title, "Google");
    await driver.quit();
  });
  it("should navigate to Wikipedia and verify the title", async function () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://en.wikipedia.org/wiki/Main_Page");
    await driver.quit();
  });
});
