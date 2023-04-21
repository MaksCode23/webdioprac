describe("Test suite", ()=>{
    beforeEach(async()=>{
     await browser.url("https://pastebin.com");
    }); 
    it.only("set", async()=>{
        const Code = await $('//*[@id="postform-text"]');
        Code.waitForDisplayed({ timeout: 5000 });
         const text = 'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force';
        await Code.setValue(text);
   
        const bashselect = await $('//*[@id="postform-format"]');
        await browser.execute("arguments[0].style.visibility = 'visible';", bashselect); // css 
        bashselect.waitForDisplayed({ timeout: 5000 });
        await bashselect.selectByVisibleText('Bash');

        const Expiration = await $('//*[@id="postform-expiration"]');
        await browser.execute("arguments[0].style.visibility = 'visible';", Expiration); // css 
        Expiration.waitForDisplayed({ timeout: 5000 });
        await Expiration.selectByVisibleText('10 Minutes');

        const nametitle = 'how to gain dominance among developers';
        const Nametitle  = await $('//*[@id="postform-name"]');
        Nametitle.waitForDisplayed({ timeout: 5000 });
        await Nametitle.setValue(nametitle);

        const button = await $('//*[@id="w0"]/div[5]/div[1]/div[10]/button');
        button.waitForDisplayed({ timeout: 5000 });
        button.click();
    
        const bash = await $('/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/a');
        bash.waitForDisplayed({ timeout: 2000});
        const bashvalue = await bash.getText();
        expect(bashvalue).toEqual('Bash');

        const pagetitile = await browser.getTitle();
        expect(pagetitile).toEqual(nametitle+' - Pastebin.com');
        console.log(await browser.getUrl());

        const divcode = await $('//div[@class="source bash"]');
        let codetext = await divcode.getText();
        expect(codetext).toEqual(text,'code err');
        await browser.pause(1000); 
    
    });
    })