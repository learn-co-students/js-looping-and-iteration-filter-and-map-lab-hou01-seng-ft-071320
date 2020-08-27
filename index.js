// Code your solution here:

const drivers = [{ name: 'Sally',   revenue: 400 }, { name: 'Annette', revenue: 200 }, { name: 'Jim', revenue: 150 }];

const driversWithRevenueOver = function (array, revenue) {
   return array.filter(function(driver) { 
        return driver.revenue > revenue;
    });
}

// console.log(driversWithRevenueOver(drivers,150))

const driverNamesWithRevenueOver = function (array, revenue) {
   return driversWithRevenueOver(array, revenue).map(function(driver){
        return driver.name
    });
}

//  console.log(driverNamesWithRevenueOver(drivers,150))

const exactMatch = function (array, attribute){
    let keyWord = Object.keys(attribute)[0];
    let value = Object.values(attribute)[0];
       return array.filter(function(driver){
        return driver[keyWord] === value
    })
}

// console.log(exactMatch(drivers, { revenue: 400 }))

const exactMatchToList = function (array, attribute){
    return exactMatch (array, attribute).map(function(driver){
        return driver.name
    });
}

console.log(exactMatchToList(drivers, { revenue: 400 }))
