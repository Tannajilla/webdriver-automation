import Alert from "../pageobjects/Alert"

describe("alert validation", async function(){

    it("JS alert", async function () {
        await Alert.open();
        await Alert.verifyHeading();
        await Alert.jsClickalert();
        await browser.acceptAlert();
        await Alert.verifyResult("You successfully clicked an alert");

        
    });
    it("JS confirm-ok", async function () {
        await Alert.open();
        await Alert.verifyHeading();
        await Alert.jsConirm();
        await browser.acceptAlert();
        await Alert.verifyResult("You clicked: Ok");

        
    });
    it("JS confirm-Cancel", async function () {
        await Alert.open();
        await Alert.verifyHeading();
        await Alert.jsConirm();
        await browser.dismissAlert();
        await Alert.verifyResult("You clicked: Cancel");

        
    });
    it("click JS prompt", async function () {
        await browser.pause(2000);
        const alertmessage="Prompt alert";
        await Alert.open();
        await Alert.verifyHeading();
        await Alert.jsPrompt();
        await browser.sendAlertText(alertmessage);
        await Alert.verifyResult("You enterd:" +alertmessage);

        
    });
})