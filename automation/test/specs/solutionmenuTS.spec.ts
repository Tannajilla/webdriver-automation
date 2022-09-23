import solutionsMenu from "../pageobjects/solutionsMenu";

describe("360Logica official website", async function(){

var url1= "https://www.360logica.com/quality-assurance/";
var url2="https://www.360logica.com/test-automation/";
var url3="https://www.360logica.com/performance-testing/";
var url4="https://www.360logica.com/cyber-security/";
var url5="https://www.360logica.com/digital-transformation/";
let name="Tanzila";
let email="tanzila.gmail.com";
let phone="8974342231";
let website="test.com";
let message="text";

    it("click and veriy Urls of solution menu and submenus", async function () {
        
        await solutionsMenu.clickTSMenus(url1, url2,url3,url4,url5);
    });

    it("Create account on Get Social form", async function () {
    
        await solutionsMenu.getSocial (name, email, phone, website, message)
    });

    
})