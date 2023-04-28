// Code your solution here
function findMatching(drivers, string){
    return drivers.filter((strings) => strings.toLowerCase().includes(string.toLowerCase()))
}

function fuzzyMatch(drivers,string){
    return drivers.filter((strings) => strings.charAt(0) === string.charAt(0))
}

function matchName(driver, string){
    return driver.filter((driverInfo) => driverInfo.name === string)
}