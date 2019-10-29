// Your code here
function saturdayFun(activty="roller-skate"){
  return "This Saturday, I want to "+activty+"!";
}

function mondayWork(activty="go to the office"){
  return "This Monday, I will "+activty+".";
}

function wrapAdjective(flair="*"){
  return function(adj="special"){
    return "You are "+flair+adj+flair+"!";
  };
}
let Calculator={add:function(n1,n2){return n1+n2},subtract:function(n1,n2){return n1-n2},multiply:function(n1,n2){return n1*n2},divide:function(n1,n2){return n1/n2}};

arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]

function actionApplyer(k,array){
for(let i=0;i<array.length;i++){
  k=array[i](k);
}
return k;
}

