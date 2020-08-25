// Code your solution here:
function driversWithRevenueOver(driver,revenue){
    return driver.filter(function(name){
        return name['revenue'] > revenue
        }
    )
}

function driverNamesWithRevenueOver(drivers,revenue){
    return driversWithRevenueOver(drivers,revenue).map(function(driver){
        return driver['name']
        }
    )
}

function exactMatch(driver,obj){
    return driver.filter(function(index){
        return index['name'] == obj['name'] || index['revenue'] == obj['revenue']
        }
    )
}

function exactMatchToList(driver,obj){
    return exactMatch(driver,obj).map(function(index){
        return index['name']
            }
        )
    }