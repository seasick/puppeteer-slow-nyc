'use strict';
/* global describe: false, before: false, it: false,
    beforeEach: false, afterEach: false, after: false, window: false, document: false */

const assert = require('assert').strict;
const startBrowser = require('../');
const util = require('util');



const promiseTimeout = util.promisify(setTimeout);

describe('Puppeteer', function() {
  let pageManager;

  it('start the browser', async function() {
    this.timeout(10000);

    console.time('startBrowser');
    const browser = await startBrowser();
    console.timeEnd('startBrowser');
    assert(browser);

    console.time('closeBrowser');
    await browser.close();
    console.timeEnd('closeBrowser');
  });

});
