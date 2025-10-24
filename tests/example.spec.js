// @ts-check
import { test, expect } from '@playwright/test';

test('teste de login com sucesso', async ({page}) => {
  await page.goto('https://www.saucedemo.com/v1/index.html')
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[id="login-button"]').click()
  await expect(page).toHaveTitle(/Swag Labs/)
})