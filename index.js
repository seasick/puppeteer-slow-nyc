'use strict';
const puppeteer = require('puppeteer');



module.exports = async function startBrowser() {
  const options = {
    args: [
      // '--no-sandbox',
      // '--disable-setuid-sandbox',
      // '--disable-dev-shm-usage',
      // '--disable-accelerated-2d-canvas',
      // '--disable-gpu'
    ],
    headless: false
  };

  return await puppeteer.launch(options);
};
