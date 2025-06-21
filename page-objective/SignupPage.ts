import { Locator, Page } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly signupLoginButton: Locator;
  readonly newUserSignupText: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;
  readonly enterAccountInfoText: Locator;
  readonly titleRadioButton: Locator;
  readonly passwordInput: Locator;
  readonly daysDropdown: Locator;
  readonly monthsDropdown: Locator;
  readonly yearsDropdown: Locator;
  readonly newsletterCheckbox: Locator;
  readonly offersCheckbox: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countryDropdown: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedText: Locator;
  readonly continueButton: Locator;
  readonly loggedInAsText: Locator;
  readonly deleteAccountButton: Locator;
  readonly accountDeletedText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginButton = page.locator('a[href="/login"]');
    this.newUserSignupText = page.locator('h2:has-text("New User Signup!")');
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.enterAccountInfoText = page.locator('b:has-text("Enter Account Information")');
    this.titleRadioButton = page.locator('#id_gender1'); // Title = Mr
    this.passwordInput = page.locator('#password');
    this.daysDropdown = page.locator('#days');
    this.monthsDropdown = page.locator('#months');
    this.yearsDropdown = page.locator('#years');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.offersCheckbox = page.locator('#optin');
    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.companyInput = page.locator('#company');
    this.address1Input = page.locator('#address1');
    this.address2Input = page.locator('#address2');
    this.countryDropdown = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.locator('#mobile_number');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedText = page.locator('h2:has-text("Account Created!")');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
    this.loggedInAsText = page.locator('a:has-text("Logged in as")');
    this.deleteAccountButton = page.locator('a[href="/delete_account"]');
    this.accountDeletedText = page.locator('h2:has-text("Account Deleted!")');
  }

  async navigate() {
    await this.page.goto('http://automationexercise.com');
  }

  async signupNewUser(name: string, email: string, password: string) {
    await this.signupLoginButton.click();
    await this.newUserSignupText.waitFor();
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();

    await this.enterAccountInfoText.waitFor();
    await this.titleRadioButton.check();
    await this.passwordInput.fill(password);

    await this.daysDropdown.selectOption('10');
    await this.monthsDropdown.selectOption('5');
    await this.yearsDropdown.selectOption('1995');

    await this.newsletterCheckbox.check();
    await this.offersCheckbox.check();

    await this.firstNameInput.fill('John');
    await this.lastNameInput.fill('Doe');
    await this.companyInput.fill('TestCorp');
    await this.address1Input.fill('123 Test Street');
    await this.address2Input.fill('Apt 1');
    await this.countryDropdown.selectOption('United States');
    await this.stateInput.fill('California');
    await this.cityInput.fill('Los Angeles');
    await this.zipcodeInput.fill('90001');
    await this.mobileNumberInput.fill('1234567890');

    await this.createAccountButton.click();
  }

  async verifyAccountCreatedAndLogin() {
    await this.accountCreatedText.waitFor();
    await this.continueButton.click();
    await this.loggedInAsText.waitFor();
  }

  async deleteAccount() {
    await this.deleteAccountButton.click();
    await this.accountDeletedText.waitFor();
    await this.continueButton.click();
  }
}
