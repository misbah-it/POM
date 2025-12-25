export class AutomationPage {
  constructor(page) {
    this.page = page;

    // Home page
    this.logo = page.locator('.logo');
    this.loginLink = page.getByRole('link', { name: 'Login' });

    // Login page
    this.loginHeading = page.getByText('Login to your account');
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInText = page.getByText('Logged in as');

    // Account page
    this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
    this.accountDeletedText = page.getByText('Account Deleted!');
  }

  async openWebsite() {
    await this.page.goto('https://automationexercise.com/');
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async deleteAccount() {
    await this.deleteAccountLink.click();
  }
}
