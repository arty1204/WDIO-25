class HelpPage {
    get editButton() {
        return $('li [href="/help.html"]')
        }
       
    clickEditButton() {
       this.editButton.click();
    }
    
    get IsDisplayed() {
        return $('//*[text()="Browse Docs"]')
        }
       
    IsDisplayedBrowseDocs() {
       this.IsDisplayed.IsDisplayedBrowseDocs();
    }
}
module.exports = new HelpPage()