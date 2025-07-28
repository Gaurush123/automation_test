// @ts-check
import { test, expect } from '@playwright/test';
import { environments } from '../testdata/environments.js';
import { LoginPage } from '../pages/loginPage.js';
import { loginData } from '../testdata/loginData.js';
import { users } from '../testdata/users.js';

test.describe('Test Login feature', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(environments.loginUrl);
  });

  test('Validate Successful Login', async ({ page }) => {
    await loginPage.loginOnPage(users.validDetails.username, users.validDetails.password);
    await expect(loginPage.successLoginMessage).toHaveText(loginData.successMessage);
  });

  test('Validate Username and Password field heading should be correct', async ({ page }) => {
    await expect(loginPage.userNameHeading).toHaveText(loginData.usernameHeading);
    await expect(loginPage.passwordHeading).toHaveText(loginData.passwordHeading);
  });

  test('Validate incorrect userName warning message', async ({ page }) => {
    await loginPage.loginOnPage(users.incorrectUserName.username, users.incorrectUserName.password);
    await expect(loginPage.invalidUserMessage).toHaveText(loginData.invalidUserNameMessage);
  });

  test('Validate incorrect password warning message', async ({ page }) => {
    await loginPage.loginOnPage(users.incorrectPassword.username, users.incorrectPassword.password);
    await expect(loginPage.invalidPasswordMessage).toHaveText(loginData.invalidPasswordMessage);
  });
});


