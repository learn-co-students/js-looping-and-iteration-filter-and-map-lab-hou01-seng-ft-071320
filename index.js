// Code your solution here:
function driversWithRevenueOver(drivers, amount){
    let selectedDrivers = drivers.filter(function(driver){ 
        return driver.revenue > amount});
    return selectedDrivers;
}

function driverNamesWithRevenueOver(drivers, amount){
    let selectedDriversNames = driversWithRevenueOver(drivers, amount).map(function(driver){
        return driver.name;})
    return selectedDriversNames;
}

function exactMatch(drivers, attribute){
    let selectedDrivers = drivers.filter(function(driver){ 
        return driver.name === attribute.name || driver.revenue === attribute.revenue});
    return selectedDrivers;
}

function exactMatchToList(drivers, attribute){
    let selectedDriversNames = exactMatch(drivers, attribute).map(function(driver){
        return driver.name;})
    return selectedDriversNames;
}