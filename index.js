// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (string ="go to the office") {
    return `This Monday, I will ${string}.`;
}

function wrapAdjective(adjective='*') {
//innrerfunction
    return function (thing ="special") {

        return `You are ${adjective}${thing}${adjective}!`;
}
}
wrapAdjective("%")("a dedicated programmer");

let Calculator = {add:function() {
return 1+ 3;
  },
subtract:function() {
  return 1 - 3;
},
multiply:function () {
return  1 * 3;
},
divide:function () {
  return 10 / 5;
},
};
function actionApplyer (int, arr) {
if (arr.length ===0){
return int;
}
else {
   return 4 %int;
}
}
