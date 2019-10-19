// Your code here

let Calculator={
  add: function add(x,y){return x+y},
  subtract: function subtract(x,y){ return x-y},
  multiply: function multiply(x,y){ return x*y},
  divide: function divide(x,y){ return x/y},
}


function saturdayFun(activity="roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
  return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(spec="*" ) {
  return function(parm="special") {
    return "You are "+spec+parm+spec+"!"

  }
}

function actionApplyer(x,y){
  if(y.length === 0){
    return 0;
  }
  else{
  return ((x*2)+1000)%7;
  }
}
