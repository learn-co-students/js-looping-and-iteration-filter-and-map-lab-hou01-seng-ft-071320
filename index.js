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

function exactMatch (drivers, obj) {
    return drivers.filter(function (driver) {
      let matches = false;
      for (const key in obj) {
        matches = driver[key] === obj[key];
      }
      return matches;
    });
  }

function exactMatchToList(driver,obj){
    return exactMatch(driver,obj).map(function(index){
        return index['name']
            }
        )
    }