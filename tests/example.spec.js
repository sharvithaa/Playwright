// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  //Linear scripting
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  await page.locator("//input[@name='username']").fill('Admin');
  await page.locator("//input[@name='password']").fill('admin123');
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(1000);
  await page.screenshot({path:"./ScreenShots/Login.png",fullPage:true});

  const sidebar=['Admin','PIM','Leave','Time','Recruitment','My Info','Performance','Dashboard','Directory','Maintance','Claim','Buzz'];

  for(const name of sidebar)
    {
      if(name==='Maintance')
      {
        continue;
      }
      await page.locator(`//a//span[text()='${name}']`).click();
      await page.waitForTimeout(1000);
      await page.screenshot({path:`./Screenshots/${name}.png`,fullPage:true,animations:'disabled'});
       
    } 
  // Dynamic scripting
  // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  // await page.locator("//input[@name='username']").fill('Admin');
  // await page.locator("//input[@name='password']").fill('admin123');
  // await page.locator("//button[@type='submit']").click();
  // await page.waitForTimeout(1000);
  // await page.screenshot({path:"./ScreenShots/Dynamic/Login.png",fullPage:true});

  // let name="";
  // const sidebarItems = await page.locator("//aside//a//span").all();
  // console.log(sidebarItems);
  // for (const item of sidebarItems) {
  //   try {
  //     // @ts-ignore
  //     name = await item.innerText();
  //     if (name.trim() === "Maintenance") continue; // Skip 'Maintenance'

  //     console.log(`Navigating to: ${name}`);
  //     await item.click();
  //     await page.waitForTimeout(1000);

  //     await page.screenshot({ path: `./ScreenShots/Dynamic/${name}.png`, fullPage: true });
  //   } catch (error) {
  //     console.error(`Error navigating to sidebar item:`, error);
  //   }
  // }
});
