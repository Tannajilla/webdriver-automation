import { config as sharedconfig } from "./wdio.conf"
export const config : WebdriverIO.Config= {
...sharedconfig,
services: ['selenium-standalone'],
capabilities:[{maxInstances: 5,
        
    browserName: 'firefox',
    
    acceptInsecureCerts: true
}]
}