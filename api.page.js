class ApiPage {

    get editButton() {
         return $('.slidingNav [href="/docs/api.html"]')
        }
        
    clickEditButton() {
        this.editButton.click();
    }
    
    get editLink() {
        return $('li [href="#contribute"]')
       }
       
   clickEditLink() {
       this.editLink.click();
   }

}
module.exports = new ApiPage()


