import { test, expect } from '@playwright/test';

test('End-to-end Signup and Delete Account on AutomationExercise', async ({ page }: { page: import('@playwright/test').Page }) => {
  // 1. Launch browser and 2. Navigate to URL
  await page.goto('http://automationexercise.com');

  // 3. Verify that home page is visible
  await expect(page).toHaveURL('https://automationexercise.com/');
  await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();

  // 4. Click on 'Signup / Login' button
  await page.locator('a[href="/login"]').click();

  // 5. Verify 'New User Signup!' is visible
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

  // 6. Enter name and email address
  await page.locator('input[data-qa="signup-name"]').fill('Happiness');
  await page.locator('input[data-qa="signup-email"]').fill(`happiness_${Date.now()}@example.com`);

  // 7. Click 'Signup' button
  await page.locator('button[data-qa="signup-button"]').click();

  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

  // 9. Fill details: Title, Name, Email, Password, DOB
  await page.locator('#id_gender2').check(); // Mrs.
  await page.locator('#password').fill('SecurePass123');
  await page.locator('#days').selectOption('10');
  await page.locator('#months').selectOption('5');
  await page.locator('#years').selectOption('1995');

  // 10. Select newsletter checkbox
  await page.locator('#newsletter').check();

  // 11. Select offers checkbox
  await page.locator('#optin').check();

  // 12. Fill address info
  await page.locator('#first_name').fill('Happiness');
  await page.locator('#last_name').fill('Ozoemena');
  await page.locator('#company').fill('TestCorp');
  await page.locator('#address1').fill('123 Test Street');
  await page.locator('#address2').fill('Suite 4B');
  await page.locator('#country').selectOption('India');
  await page.locator('#state').fill('Lagos');
  await page.locator('#city').fill('Ikeja');
  await page.locator('#zipcode').fill('100001');
  await page.locator('#mobile_number').fill('1234567890');

  // 13. Click 'Create Account' button
  await page.locator('button[data-qa="create-account"]').click();

  // 14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();

  // 15. Click 'Continue' button
  await page.locator('a[data-qa="continue-button"]').click();

  // 16. Verify that 'Logged in as username' is visible
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();

  // 17. Click 'Delete Account' button
  await page.locator('a[href="/delete_account"]').click();

  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue'
  await expect(page.locator('h2:has-text("Account Deleted!")')).toBeVisible();
  await page.locator('a[data-qa="continue-button"]').click();
});