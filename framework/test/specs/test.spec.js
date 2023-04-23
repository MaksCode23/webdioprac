const googlecloud = require('./pageobj/googlecloud');
const googlecalck = require('./pageobj/calculator');
const datatest = require('./datalayers/testdatat.json');
// npm run test-smoke
describe('smoke suite', () => {
  afterEach(async function () {
    if (this.currentTest.state === 'failed') {
      const testName = this.currentTest.title.replace(/\s+/g, '_').toLowerCase();
      const date = new Date().toISOString().slice(0, 10);
      const screenshotPath = `./junit-reports/${date}_${testName}.png`;
      await browser.saveScreenshot(screenshotPath);
    }
  });

  it('open browser', async() => {
    await googlecloud.open(); 
  });
    
  it('search', async() => {
    await googlecloud.search(datatest.homepagesearch.inputsearch); 
  });
  it('enterserch', async()=>{
    await googlecloud.ent();
  }); 
  it('opencalc',async()=>{
    await googlecloud.opencalc();
    await browser.pause(1000);
  });
  
});

// npm run test-other
describe('other suite', () => {
  afterEach(async function () {
    if (this.currentTest.state === 'failed') {
      const testName = this.currentTest.title.replace(/\s+/g, '_').toLowerCase();
      const date = new Date().toISOString().slice(0, 10);
      const screenshotPath = `./junit-reports/${date}_${testName}.png`;
      await browser.saveScreenshot(screenshotPath);
    }
  });

  //  it('open browser', async() => {
  //  await googlecalck.open(); 
  // });

   it('ckurl', async() => {
     await googlecalck.ckurl(await browser.getUrl());
     await browser.pause(7000);
   });
    it('switchframe',async()=>{
      await  googlecalck.openframes();
      await browser.pause(3000);
    });

   it('clickcompeng', async()=>{
    await  googlecalck.clickcompeng();
   });

   it('setInstances', async()=>{
   await  googlecalck.setInstance();
   })

   it('setos',async()=>{
    await googlecalck.setos();
   });

   it('setpm',async()=>{
  await googlecalck.setpm();
  });

  it('setsr',async()=>{
   await googlecalck.setsr();
 });

   it('setmtype',async()=>{
    await googlecalck.setmtype();
   });

  it('addgpu',async()=>{
    await googlecalck.adg();
   }); 

  it('gpu',async()=>{
    await googlecalck.gtype();
  });

  it('addgpu',async()=>{
     await googlecalck.ngtype();
  });
  it('setssd',async()=>{
    await googlecalck.setssd();
  });

it('location',async()=>{
      await googlecalck.lo();
    });
    
it('yer',async()=>{
  await googlecalck.yer();
});

it('add',async()=>{
  await googlecalck.adbtn();
});

it('chkregion',async()=>{
  await googlecalck.chkregion();
});

it('chkreg',async()=>{
  await googlecalck.chkreg();
});

it('chkssd',async()=>{
  await googlecalck.chkssd();
});

it('chksndr',async()=>{
  await googlecalck.chksndr();
});

it('chkterm',async()=>{
  await googlecalck.term();
});
 });