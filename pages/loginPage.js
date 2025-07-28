// @ts-check
import { test, expect } from '@playwright/test';
import { users } from '../testdata/users'; 

export class LoginPage {
  constructor(page) {
    this.page = page;
    // Define web elements as class properties
    this.userName = page.locator('#username'); // use css selector
    this.password = page.locator('xpath=//input[@id="password"]'); //use xpath
    this.submitButton = page.getByText('Submit').nth(0); //use getByText method
    this.successLoginMessage =  page.getByText('Logged In Successfully');
    this.invalidUserMessage = page.getByText('Your username is invalid!').nth(0);
    this.invalidPasswordMessage = page.getByText('Your password is invalid!').nth(0);
    this.userNameHeading =  page.getByText('username').nth(1);
    this.passwordHeading =  page.getByText('password').nth(1);
  }

  // Login method like your example
  async loginOnPage(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.submitButton.click();
  }

}




