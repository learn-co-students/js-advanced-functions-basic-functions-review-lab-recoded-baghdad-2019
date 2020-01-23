// Your code here
function saturdayFun (activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}

let  mondayWork = function (activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`)
}

let wrapAdjective = function wrapAdjective(what= "*") {
    return function(whatever= "a hard worker") {
        return `You are ${what}${whatever}${what}!`
    }
}

let Calculator = {add: function(){return 1+3;},
  subtract: function(){return 1-3},
  multiply: function(){return 1*3},
  divide: function(){return 10/5}
}

function actionApplyer(start, arr=false){
  let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
  if (arr == false){
    return start;
  } else {
    return 4
  }
}
