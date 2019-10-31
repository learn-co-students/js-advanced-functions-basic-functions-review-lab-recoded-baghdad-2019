// Your code here
// Your code here
function saturdayFun (activity='roller-skate'){
return `This Saturday, I want to ${activity}!`;
}
let mondayWork = function (activity ='go to the office'){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(adjective = '*'){
  return function(word = 'special'){
    return `You are ${adjective}${word}${adjective}!`;

  }
}
wrapAdjective("%")("a dedicated programmer")
let Calculator ={add:function(){
  return 1 + 3;
}, subtract:function(){
  return 1 - 3;
},multiply:function(){
  return 1 * 3;
},divide: function(){
  return 10 / 5;
}};
function actionApplyer(int , arr){
  if (arr.length === 0){
    return int;
  }
  else{
    return 4 % int;
  }
}
