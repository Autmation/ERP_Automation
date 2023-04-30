const { test, expect } = require("@playwright/test");

test.use({viewport:{width:1520,height:847}})

test("User Login", async function ({ page }) {

  await page.goto("https://www.moebel-kraft.de/");

  await page.locator("div[data-accept-action='all'] button[type='button']").click();

  await page.locator(".headerElement__icon.headerElement__icon--login").click();

  await page.waitForTimeout(3000);

  // await expect(page).toHaveURL(/kundenkonto/);   

  await page.locator("#loginEmail").type("mahi04reek@gmail.com");

  await page.locator("#loginPassword").type("Sherlocked@04");

  await page.locator("#login-submit").click();

  await page.waitForTimeout(5000)

  await page.locator('//span[@class="headerElement__icon headerElement__icon--login"]').click();

});
