const assert = require("assert");
const parseElapsedTime = require("../utils/parseElapsedTime.js");
const puppeteer = require('puppeteer');

describe("parseElapsedTime", function(){
  it("should return correct output, including correct pluralisation", function(){
    //seconds only
    for(let i=0;i<60;i++){
        assert.equal(parseElapsedTime(i*1000), i+" second"+(i===1 ? "" : "s"));
    }
    //minutes and seconds
    assert.equal(parseElapsedTime(1000*60), "1 minute, 0 seconds");
    assert.equal(parseElapsedTime(1000*60+1000), "1 minute, 1 second");
    assert.equal(parseElapsedTime(1000*60*2), "2 minutes, 0 seconds");
    assert.equal(parseElapsedTime(1000*60*2+1000), "2 minutes, 1 second");
    assert.equal(parseElapsedTime(1000*60*2+2000), "2 minutes, 2 seconds");
    assert.equal(parseElapsedTime(1000*60*60-1000), "59 minutes, 59 seconds");
    //hours and minutes
    assert.equal(parseElapsedTime(1000*60*60), "1 hour, 0 minutes");
    assert.equal(parseElapsedTime(1000*60*60+1000*60), "1 hour, 1 minute");
    assert.equal(parseElapsedTime(1000*60*60+1000*60*30), "1 hour, 30 minutes");
    assert.equal(parseElapsedTime(1000*60*60*2), "2 hours, 0 minutes");
    assert.equal(parseElapsedTime(1000*60*60*2+1000*60), "2 hours, 1 minute");
    assert.equal(parseElapsedTime(1000*60*60*2+1000*60*2), "2 hours, 2 minutes");
    assert.equal(parseElapsedTime(1000*60*60*12+1000*60), "12 hours, 1 minute");
    assert.equal(parseElapsedTime(1000*60*60*12+1000*60*47), "12 hours, 47 minutes");
    assert.equal(parseElapsedTime(1000*60*60*24-1000*60), "23 hours, 59 minutes");
    assert.equal(parseElapsedTime(1000*60*60*24-1000), "23 hours, 59 minutes");//even if 1 second away, still don't show next minute
    //days, hours, and minutes
    assert.equal(parseElapsedTime(1000*60*60*24), "1 day, 0 hrs, 0 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60), "1 day, 0 hrs, 1 min");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*100), "1 day, 0 hrs, 1 min");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*120), "1 day, 0 hrs, 2 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*10), "1 day, 0 hrs, 10 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*41), "1 day, 0 hrs, 41 mins");

    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*60), "1 day, 1 hr, 0 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60+1000*60*60), "1 day, 1 hr, 1 min");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*100+1000*60*60), "1 day, 1 hr, 1 min");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*120+1000*60*60), "1 day, 1 hr, 2 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*10+1000*60*60), "1 day, 1 hr, 10 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*41+1000*60*60), "1 day, 1 hr, 41 mins");

    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*60*4), "1 day, 4 hrs, 0 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60+1000*60*60*5), "1 day, 5 hrs, 1 min");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*100+1000*60*60*7), "1 day, 7 hrs, 1 min");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*120+1000*60*60*12), "1 day, 12 hrs, 2 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*10+1000*60*60*15), "1 day, 15 hrs, 10 mins");
    assert.equal(parseElapsedTime(1000*60*60*24+1000*60*41+1000*60*60*22), "1 day, 22 hrs, 41 mins");

    assert.equal(parseElapsedTime(1000*60*60*24*7-1000), "6 days, 23 hrs, 59 mins");
    //weeks, days, hrs, minutes
    assert.equal(parseElapsedTime(1000*60*60*24*7), "1 w, 0 d, 0 h, 0 m");
    assert.equal(parseElapsedTime(1000*60*60*24*7*1.5), "1 w, 3 d, 12 h, 0 m");
    assert.equal(parseElapsedTime(1000*60*60*24*7*2), "2 w, 0 d, 0 h, 0 m");
    assert.equal(parseElapsedTime(1000*60*60*24*7*43+1000*60), "43 w, 0 d, 0 h, 1 m");
    assert.equal(parseElapsedTime(1000*60*60*24*7*43+1000*60*60), "43 w, 0 d, 1 h, 0 m");
    assert.equal(parseElapsedTime(1000*60*60*24*7*43+1000*60*60*24), "43 w, 1 d, 0 h, 0 m");
  })
})

describe("ui tests", function(){
  let browser, page;
  before(function(done){
    (async () => {
      browser = await puppeteer.launch();
      console.log("browser launched");
      page = await browser.newPage();
      console.log("browser and page launched");
      done();
    })();
  });
  it("should display toast notifications responsively, within the screen width", function(done){
    this.timeout(30000);
    (async () => {
      let fail = false;
      await page.setViewport({
        width: 320,
        height: 600,
        isMobile: true
      }) ;
      console.log("viewport set");

      await page.goto('http://localhost:3000/contact');
      console.log("went to contact page");
      await page.click("#btn-contact-send");
      const toast = await page.waitForSelector(".css-otip-ToastElement:first-child");
      const toastWidth = parseInt(JSON.parse(JSON.stringify(await toast.boundingBox())).width);
      await page.screenshot({path:"./test/toast-test.png", fullPage:true});
    //  const toastWidth = await toast.boundingBox().width;
      console.log("toast width:", toastWidth);
      if(toastWidth > 307){
        fail = true;
      }
      done(fail);
    })();
  })

  after(function(){
    (async () => {
      await page.goto('http://localhost:3000/');
      await page.screenshot({path:"./test/home-test.png", fullPage:true});
      await page.goto('http://localhost:3000/about');
      await page.screenshot({path:"./test/about-test.png", fullPage:true});
      await browser.close();
    })();
  })

})
