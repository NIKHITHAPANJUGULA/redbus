import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    // go to the redbus url
  await page.goto('https://www.redbus.in/');
  await page.getByLabel('From').click();
  // select the boarding point
  await page.getByLabel('From').fill('hy');
  await page.getByRole('button', { name: ' From  Hyderabad ' }).click();
  await page.getByLabel('To').click();
  // select the destination
  await page.getByLabel('To').fill('ban');
  await page.getByRole('button', { name: ' To  Bangalore  Madiwala' }).click();
  await page.getByRole('button', { name: ' Date' }).click();
  //choose the date of travel
  await page.getByRole('button', { name: ' Date Jan 2024 1 Holiday' }).click();
  // click on search
  await page.getByRole('button', { name: 'SEARCH BUSES' }).click();
});