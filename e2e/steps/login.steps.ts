import { Given, When, Then } from './bdd';
import { expect } from '@playwright/test';

Given('I navigate to saucedemo', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

When('I input {string} in the username field', async ({ page }, username: string) => {
  await page.locator("#user-name").fill(username);
});

When('I input {string} in the password field', async ({ page }, password: string) => {
  await page.locator("#password").fill(password);
});

When('I click {string} button', async ({ page }, buttonName: string) => {
  if (buttonName.toLowerCase() === 'login') {
    await page.locator("#login-button").click();
  } else {
    await page.locator("enter locator here").click();
  }
});

Then('I should be able to see {string} page', async ({ page }, pageName: string) => {
  await expect(page.locator("[data-test='title']")).toHaveText(pageName);
});
// use this website for api testing practice https://restful-booker.herokuapp.com/apidoc/index.html