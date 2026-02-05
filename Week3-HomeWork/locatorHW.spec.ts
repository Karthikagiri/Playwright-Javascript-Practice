import {test,expect, firefox} from  "playwright/test";


test("create Lead", async()=>{

    const browser = await firefox.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
   await page.locator("//input[@id='username']").fill("DemoSalesManager");
    await page.locator("//input[@id='password']").fill("crmsfa");
    await page.click("//input[@class='decorativeSubmit']");
    await page.click("//a[contains(@href, '/crmsfa/control/main')]");
    await page.waitForLoadState('networkidle');
    await page.click("//a[@href='/crmsfa/control/leadsMain']");
    await page.click("//a[@href='/crmsfa/control/createLeadForm']");
    await page.locator("//input[@id='createLeadForm_companyName']").fill("TestLeaf");
    await page.locator("//input[@id='createLeadForm_firstName']").fill("karthika");
    await page.locator("//input[@id='createLeadForm_lastName']").fill("v");
    await page.locator("//input[@name='submitButton']").click()

});
