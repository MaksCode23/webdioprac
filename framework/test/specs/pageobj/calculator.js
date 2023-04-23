const datatest = require('/Microsoft VS Code/wdio/test/specs/datalayers/testdatat.json');
class Googlecalculatorpage{
    constructor() {
        this.datat = null;
      }

    get devframe(){return $('//*[@id="cloud-site"]/devsite-iframe/iframe');} // frame1
    get ifram(){ return $('//*[@id="myFrame"]');} // frame2
    get conf(){return $('//*[@id="tab-item-1"]');} // engmd
    get inst(){return $('//*[@id="input_95"]');} // instance input
    get inputos(){ return $('//*[@id="select_108"]');}
    get pminput() {return $('//*[@id="select_112"]');}
    get in(){return $(`//md-option[contains(.,'${this.datat}')]`);}
    get series(){return $('//*[@id="select_120"]');}
    get tinp(){return $('//*[@id="select_122"]');}
    get cin(){return $(`md-checkbox[aria-label='${datatest.calckpage.gpu}']`);}
    get gty(){return $('//*[@id="select_486"]');}
    get ngty(){return $('//*[@id="select_488"]');}
    get ngtc(){return $(`//*[@id="select_option_496"]`);}
    get ssd(){return $('//*[@id="select_445"]');}
    get loc(){ return $('//*[@id="select_128"]');}
    get bl(){return $('//*[@id="select_option_252"]');}
    get iyer(){return $('//*[@id="select_135"]');}
    get siyer(){return $('//*[@id="select_option_133"]');}
    get butn(){return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[20]/button'); }

    get treg() {return $('//*[@id="compute"]/md-list/md-list-item[4]/div[1]');}
    get tloc() {return $('//*[@id="compute"]/md-list/md-list-item[1]/div[1]');}
    get tssd(){ return $('//*[@id="compute"]/md-list/md-list-item[7]/div[1]');}
    get tsndr(){ return $('//*[@id="compute"]/md-list/md-list-item[5]/div[1]');}
    get tterm(){ return $('//*[@id="compute"]/md-list/md-list-item[3]/div[1]');}

 async open() {
    await browser.url('https://cloud.google.com/products/calculator');
}
async term(){
    await expect(await this.tterm.getText()).toEqual(`Commitment term: ${datatest.tbase.term}`);
 }
async chksndr(){
    let temptsndr = await this.tsndr.getText();
    let tsndrValue = temptsndr.split('\n')[0];
    await expect(tsndrValue).toEqual(`Instance type: ${datatest.tbase.standard}`);
 }
async chkssd(){
    let tempssd = await this.tssd.getText();
    let ssdValue = tempssd.split('\n')[0];
    await expect(ssdValue).toEqual(`Local SSD: ${datatest.tbase.ssd} GiB`);
 }
async chkreg(){
    await expect(await this.treg.getText()).toEqual(`Provisioning model: ${datatest.tbase.reg}`);
 }
async chkregion(){
   await expect(await this.tloc.getText()).toEqual(`Region: ${datatest.tbase.loc}`);
}
async adbtn(){
    await this.butn.waitForClickable({timeout:5000});
    await this.butn.click();
}
async yer(){
    await this.iyer.waitForClickable({ timeout: 5000 });
    await this.iyer.click()
    await this.siyer.waitForClickable({ timeout: 5000 });
    await this.siyer.click()
}
async lo(){
    await this.loc.waitForClickable({ timeout: 5000 });
    await this.loc.click();
    await this.bl.waitForClickable({ timeout: 5000 });
    await this.bl.click();
}
async setssd(){
    await this.ssd.waitForClickable({ timeout: 5000 });
    await this.ssd.click();
    this.datat = datatest.calckpage.ssd;
    await this.in.waitForClickable({ timeout: 5000 });
    await this.in.click();
}
async ngtype(){
    await this.ngty.waitForClickable({ timeout: 5000 });
    await this.ngty.click();
    await this.ngtc.waitForClickable({ timeout: 5000 });
    await this.ngtc.click();
}
async gtype(){
    await this.gty.waitForClickable({ timeout: 5000 });
    await this.gty.click();
    try {
    this.datat = datatest.calckpage.gtype;
        await this.in.waitForClickable({ timeout: 5000 });
        await this.in.click();} 
    catch(err){
        console.error(`Not found: ${datatest.calckpage.gtype}`);
        console.log(`We chose: ${datatest.calckpage.gtyperez}`);
        this.datat = datatest.calckpage.gtyperez;
        await this.in.click();
    }
}
async adg(){
    await this.cin.waitForClickable({ timeout: 5000 });
    await this.cin.click();
}
async setmtype(){
    this.tinp.click();
    this.datat = datatest.calckpage.mtype;
    await this.in.waitForClickable({ timeout: 5000 });
    await this.in.click();
}
async setsr(){
    this.series.click();
    this.datat = datatest.calckpage.sr;
    await this.in.waitForClickable({ timeout: 5000 });
    await this.in.click();
}
async setpm(){
    await this.pminput.click();
    this.datat = datatest.calckpage.pm;
    await this.in.waitForClickable({ timeout: 5000 });
    await this.in.click();
}
async setInstance(){
    await this.inst.setValue('4');
}
async setos(){
    this.datat = datatest.calckpage.os;
    await this.inputos.click();
    try {
        await this.in.waitForExist({timeout: 5000});
        await this.in.click();
      } catch (err) {
        console.error(`Not found: ${datatest.calckpage.os}`);
        console.log(`We chose: ${await this.inputos.getText()}`);
        this.datat = await this.inputos.getText();
        await this.in.click();
      }
      
}
async openframes(){
   await browser.switchToFrame(await this.devframe);
   await browser.switchToFrame(await this.ifram);
}
async ckurl(url) {
    expect(datatest.calckpage.url).toEqual(url);
}
async clickcompeng(){
await this.conf.click();
}
}
module.exports = new Googlecalculatorpage();