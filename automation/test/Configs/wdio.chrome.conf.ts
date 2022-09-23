import { config as sharedconfig } from "./wdio.conf"
export const config : WebdriverIO.Config= {
...sharedconfig,
services: ['chromedriver'],
capabilities:[{maxInstances: 5,
        
    browserName: 'chrome',
    acceptInsecureCerts: true
}]
}