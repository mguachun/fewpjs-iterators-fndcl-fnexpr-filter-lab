// Code your solution here

function findMatching(driver, s) {
    return driver.filter( possibleMatch =>
        possibleMatch.toLowerCase() === s.toLowerCase()
    )
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }
  
function matchName(driver, soughtName) {
    return driver.filter( record => record.name === soughtName)
}

