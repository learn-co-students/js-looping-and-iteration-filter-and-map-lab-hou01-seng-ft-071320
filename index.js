// Code your solution here:
function driversWithRevenueOver(array, revenue) {
    return array.filter(function(driver) {
        return driver.revenue >= revenue
    })
}

function driverNamesWithRevenueOver(array, revenue) {
    const newArray = driversWithRevenueOver(array, revenue)
    return newArray.map(function(driver) {
        return driver.name
    })
}

function exactMatch(array, obj) {
    return array.filter(function(driver) {
        return driver.name === obj.name || driver.revenue === obj.revenue
    })
}

function exactMatchToList(array, obj) {
    const newArray = exactMatch(array, obj)
    return newArray.map(function(driver) {
        return driver.name
    })
}