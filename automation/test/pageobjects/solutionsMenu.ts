import Page from "./Page";
class SolutionMainMenu extends Page{

    //Locators

    private get mainmenu() {return $("(//span[text()='Solutions'])[1]")}
    private get qualityAssurance() {return $('span=Quality Assurance')}
    private get testAutomation() {return $('span=Test Automation')}
    private get performanceTesting() {return $('span=Performance Testing')}
    private get cyberSecurity() {return $('span=Cyber Security')}
    private get digitalTransormation() {return $('span=Digital Transformation')}
    private get plusButton () {return $('aria/Toggle Sliding Bar')};
    private get name () {return $('#name')}
    private get emailAdress () {return $('#email_address')}
    private get phone () {return $('#phone')}
    private get website () {return $('#website')}
    private get message () {return $('#message')}
    private get sendMessage () {return $('//button[@type="submit"]')}



//methods
    public async clickTSMenus(url1:string, url2:string,url3:string,url4:string,url5:string){
    
        await super.openMainUrl();
        await (await this.mainmenu).click();

        //click on Quality Assurance
        await (await this.qualityAssurance).click();
        expect(await (await this.qualityAssurance).getUrl()).toEqual(url1);

        //click on Test Automation
        await (await this.mainmenu).click();
        await (await this.testAutomation).click();
        expect(await (await this.testAutomation).getUrl()).toEqual(url2);

        //click on Performance testing
        await (await this.mainmenu).click();
        await (await this.performanceTesting).click();
        expect(await (await this.performanceTesting).getUrl()).toEqual(url3);

        //click on Cyber Security
        await (await this.mainmenu).click();
        await (await this.cyberSecurity).click();
        expect(await (await this.cyberSecurity).getUrl()).toEqual(url4);

        //click on Digital Transormation
        await (await this.mainmenu).click();
        await (await this.digitalTransormation).click();
        expect(await (await this.digitalTransormation).getUrl()).toEqual(url5);

    }
    //Open Get Social form and enter the details
    public async getSocial (name: string, email: string, phone: string, website: string, message: string) {
        
        await (await this.plusButton).click();
        await this.name.setValue(name);
        await this.emailAdress.setValue(email);
        await this.phone.setValue(phone);
        await this.website.setValue(website);
        await this.message.setValue(message);
        browser.maximizeWindow();
        await this.sendMessage.scrollIntoView();
        await this.sendMessage.click();
    }  




}
export default new SolutionMainMenu();