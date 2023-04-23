const datatest = require('/Microsoft VS Code/wdio/test/specs/datalayers/testdatat.json');
class Googlecloudpage{
    get searchinput(){ return $('/html/body/section/devsite-header/div/div[1]/div/div/div[2]/devsite-search/form/div[1]/div/input'); }
    get aelement(){return $(`//a[b[contains(text(), '${datatest.homepagesearch.asearch}')]]`);}
    async open() {
        await browser.url(datatest.homepagesearch.homeure);
      }
    async search(text) {
        await this.searchinput.click();
        await this.searchinput.setValue(text);
      }
    async ent(){
      await browser.keys('Enter');
     }
    async opencalc(){
      await this.aelement.click();
    }

}
module.exports = new Googlecloudpage();