describe("Test suite", ()=>{
    beforeEach(async()=>{
     await browser.url("https://pastebin.com/");
    }); 
    it.only("set", async()=>{
        const Code = await $('//*[@id="postform-text"]');
        Code.setValue('Hello from WebDriver');
        await browser.pause(2000); 
        const Nametitle  = await $('//*[@id="postform-name"]');
        Nametitle.setValue('helloweb');
        await browser.pause(2000); 
        const Expiration = await $('//*[@id="postform-expiration"]');
        await browser.execute("arguments[0].style.visibility = 'visible';", Expiration); // css 
        await Expiration.selectByAttribute('value', '10M');
        await browser.pause(2000); 
        const button = await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button');
        button.click();
        await browser.pause(2000); 
        const surl = await browser.getUrl();
        console.log('New Paste' + surl);
    });
    })