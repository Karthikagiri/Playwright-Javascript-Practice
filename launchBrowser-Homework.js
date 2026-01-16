function launchBrowser(browserName){

if (browserName === 'Chrome'){
 console.log('This is Chrome browser')
}
else if (browserName === 'Firefox'){
console.log('This is fire fox browser')
}

else if(browserName === 'Edge') {
console.log('This is Edge browser')
}
else if (browserName === 'Safari') {
console.log('This is Safari browser')
}
else {
console.log('Not a Browser')
}
}   

BrowserA = 'Chrome'
BrowserB = 'Firefox'
BrowserC = 'Edge'
BrowserD = 'Safari'
BrowserE = 'Google'

launchBrowser(BrowserC)
launchBrowser(BrowserD)
launchBrowser(BrowserB)
launchBrowser(BrowserA)
launchBrowser(BrowserE)       