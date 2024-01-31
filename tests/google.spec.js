const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const assert = require("assert");

async function run(browserName) {
  let options;

  if (browserName === "chrome") {
    options = new chrome.Options();
  } else if (browserName === "firefox") {
    options = new firefox.Options();
  } else {
    console.error("Invalid browser name");
    return;
  }
  const driver = await new Builder()
    .forBrowser(browserName)
    .setChromeOptions(options)
    .build();

  try {
    await driver.get("https://www.google.com");

    let title = await driver.getTitle();
    console.log(`${browserName} - Page title: ${title}`);
    assert.equal(title, "Google");

    let url = await driver.getCurrentUrl();
    console.log(`${browserName} - Current URL: ${url}`);
    await driver.navigate().to("https://www.google.com/search?q=max");
    let element = await driver.findElement(By.xpath('//*[@id="APjFqb"]'));
    let value = (await element.getText()).trim();
    console.log(`${browserName} - Search result: ${value}`);
    assert.equal(value, "MAX");
  } catch (error) {
    console.error(`${browserName} - Error:`, error.message);
  } finally {
    await driver.quit();
  }
}

run("chrome");
run("firefox");
