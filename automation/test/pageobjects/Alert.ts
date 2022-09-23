import Page from "./Page";
class AlertPage extends Page{

    private get heading() {return $('h3=JavaScript Alerts')}
    private get jsAlertbutton() {return $('button=Click for JS Alert')}
    private get jsPromtbutton() {return $('button=Click for JS Prompt')}
    private get jsConfirmbutton() {return $('button=Click for JS Confirm')}
    private get result() {return $('#result')}
    public open(){
        return super.open('/javascript_alerts');

    }
    public async verifyHeading(){
        await (await this.heading).waitForDisplayed({timeout:5000});
        expect(await (await this.heading).isDisplayed()).toBe(true);
    }
    public async jsClickalert(){
        await (await this.jsAlertbutton).waitForEnabled({timeout:5000});
        await (await this.jsAlertbutton).click();

     }
     public async jsConirm(){
        await (await this.jsConfirmbutton).waitForClickable({timeout:5000});
        await (await this.jsConfirmbutton).click();

     }
     public async jsPrompt(){
        await (await this.jsPromtbutton).waitForClickable({timeout:5000});
        await (await this.jsPromtbutton).click();

     }
     public async verifyResult(message:string){
        expect(await this.result.getText()).toEqual(message);

     }
}
export default new AlertPage();