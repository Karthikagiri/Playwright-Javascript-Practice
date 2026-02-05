import {test,expect} from "@playwright/test"

test('frame practising exercise', async({page})=>{

    await page.goto('https://leafground.com/frame.xhtml');
    const allFrames = page.frames();
    //console.log(allFrames);

    const iframeCount =  allFrames.length;
    console.log(iframeCount);

    for(let i = 0;i<iframeCount-1; i++){

     const iframeTitles =  await allFrames[i].title();
     console.log(`The title of frames ${iframeTitles}`);

    }

    const frame1Ref= page.frameLocator(`[src="default.xhtml"]`);

    frame1Ref.locator("//button[@id='Click']").click();
    await page.waitForTimeout(3000);
   const btnTextAfterClick= await frame1Ref.locator("//button[@id='Click']").textContent();
   expect(btnTextAfterClick).toBe("Hurray! You Clicked Me.");

   const outerFrame= page.frameLocator(`[src="page.xhtml"]`);
   const innerFrame= outerFrame.frameLocator(`[src="framebutton.xhtml"]`);

   innerFrame.locator("//button[@id='Click']").click()
   await page.waitForTimeout(3000);
   const btnTextAfterClickFromInnerFrame= await innerFrame.locator("//button[@id='Click']").textContent();
   expect(btnTextAfterClickFromInnerFrame).toBe("Hurray! You Clicked Me.");


});