const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

describe("teste suite", async function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("firefox").build();
  });

  after(async function () {
    await driver.quit();
  });

  it("test suite1", async function () {
    await driver.get("https://www.google.com");
    let title = await driver.getTitle();
    console.log("Page title: " + title);
    assert.equal(title, "Google");
  });

  it("test suite2", async function () {
    await driver.navigate().to("https://www.google.com/search?q=max");
    let url = await driver.getCurrentUrl();
    console.log("Current URL:", url);
    let element = await driver.findElement(By.xpath('//*[@id="APjFqb"]'));
    let value = (await element.getText()).trim();
    console.log("Search value :", value);
    assert.equal(value, "max");
  });

  it("arrow test suite3", async () => {
    await driver.get("https://en.wikipedia.org/wiki/Main_Page");
    let texttitle = await driver.getTitle();
    console.log("Page first Text: ", texttitle);
    assert.equal(texttitle, "Wikipedia, the free encyclopedia");
  });
});
