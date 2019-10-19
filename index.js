// Your code here
// Your code here
function saturdayFun(activity = "roller-skate") {
    console.log(`This Saturday, I want to ${activity}`);
}

function mondayWork(activity = "go to the office") {
    console.log(`This Monday, I will ${activity}`);
}

function wrapAdjective(x = "+") {
    return function(adj = "special") {
        return `You are ${x}${adj}${x}`;
    };
}

let calculator = {
    addition: function(a, b) { return a + b },
    subtraction: function(a, b) { return a - b },
    multiplication: function(a, b) { return a * b },
    division: function(a, b) { return a / b }
};

function actionApplyer(j, k) {
    if (k.length === 0) {
        return 0;
    } else {
        return ((j * 2) + 1000) % 7;
    }
}