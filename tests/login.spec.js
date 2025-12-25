import { test, expect } from '@playwright/test';
import { AutomationPage } from '../pages/AutomationPage';

test('login and delete account', async ({ page }) => {

  const automationPage = new AutomationPage(page);

  await automationPage.openWebsite();
  await expect(page.locator('.logo')).toBeVisible();

  await automationPage.clickLogin();
  await expect(page.getByText('Login to your account')).toBeVisible();

  await automationPage.login('misbahwaseem52@gmail.com', '123456789');
  await expect(page.getByText('Logged in as')).toBeVisible();

  await automationPage.deleteAccount();
  await expect(page.getByText('Account Deleted!')).toBeVisible();

});
