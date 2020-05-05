const assert = require('assert') 
const apiPage = require('../page/api.page.js')
const helpPage = require('../page/help.page.js')
const versionsPage = require('../page/versions.page.js')
describe('webdriver.io page', () => {

    it('should click API button', () => {
        browser.url('https://webdriver.io')
        apiPage.clickEditButton();
        browser.pause(2000);
    })

    it('should click to element', () => {
        const ContributeLink = $('li [href="#contribute"]');
        ContributeLink.click()
        browser.pause(2000);
    })

    it('should click Help button', () => {
        helpPage.clickEditButton();
        browser.pause(2000);
    })
 
    it('should detect if an element is displayed', () => {
        const BrowseDocs = $('//*[text()="Browse Docs"]');
        isDisplayed = BrowseDocs.isDisplayed();
        console.log("isDisplayed?;" + isDisplayed); // outputs: true
    })

    it('should click Versions button', () => {
        versionsPage.clickEditButton();
        browser.pause(2000);
    })

    it('should click to element', () => {
        const PostVersionsLink = $('li [href="#past-versions"]');
        PostVersionsLink.click()
        browser.pause(2000);
    })

    it('should click to element', () => {
        const v5Documentation = $('[href="https://v5.webdriver.io/"]');
        v5Documentation.click()
        browser.pause(2000);
    })

})