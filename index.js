// Code your solution here
function findMatching (collection, string){ 
 return collection.filter(function (name){
    return name.toUpperCase() == string.toUpperCase()
  }) 
}

function fuzzyMatch (collection , string){  
  return  collection.filter(function(name){
    return name.slice(0, 2) === string
 })
}

function matchName(collection, string){
  return collection.filter(function (driverObject){
    return driverObject.name === string 
  })
}