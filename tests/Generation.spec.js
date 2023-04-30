const { test, expect } = require("@playwright/test");

test.use({viewport:{width:1520,height:847}})

test("User Registration", async function ({ page }) {

  await page.goto("https://www.moebel-kraft.de/");

  await page.locator("div[data-accept-action='all'] button[type='button']").click();

  await page.locator(".headerElement__icon.headerElement__icon--login").click();

  await page.waitForTimeout(3000);

  await page.locator("#registerAccount").click();

  await page.locator("#salutation").selectOption({value:"female"});

  await page.locator("#firstName").type("Antony");

  await page.locator("#lastName").type("George");

  await page.locator("body > div:nth-child(16) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > input:nth-child(1)").type("antony@gmail.com");

  await page.locator("#password").type("George@04");

  await page.locator("#password2").type("George@04");

  await page.click("div[class='accountNew__agbCheckbox'] span[class='checkbox__checkbox checkbox__checkbox--alignTop']");

  await page.waitForTimeout(3000);

  await page.locator("#register-submit").click();

  const errMessage = await page.locator('//font[contains(text(),"This user already exists.")]').textContent();

  console.log("Error Message is"+errMessage);

  await page.waitForTimeout(2000);

});
