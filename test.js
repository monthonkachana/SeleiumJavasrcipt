const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");
async function run() {
  const options = new chrome.Options();
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("https://www.google.com");
    let title = await driver.getTitle();
    console.log("Page title: " + title);
    assert.equal(title, "Google");
  } catch (e) {
    console.log("Error:", e.message);
  } finally {
    await driver.quit();
  }
}

run();
