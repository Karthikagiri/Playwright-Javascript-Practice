import { test, expect, chromium, webkit } from '@playwright/test';

test('test redbus application1', async ({}) => {
  const browser = await webkit.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.redbus.in/');
  console.log(await page.title());
  console.log(page.url());

  await browser.close();
});

test('test flipkart application1', async ({}) => {
  const browser1 = await chromium.launch({ headless: false, channel: 'msedge' });
  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();

  await page1.goto('https://www.flipkart.com');
  console.log(await page1.title());
  console.log(page1.url());

  await browser1.close();
});
  