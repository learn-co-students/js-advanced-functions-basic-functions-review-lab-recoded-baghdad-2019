function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(x = "*") {
    return function(adj = "special") {
        return `You are ${x}${adj}${x}!`;
    };
}

let Calculator = {
    add: function(a, b) { return 1 + 3 },
    subtract: function(a, b) { return 1 - 3 },
    multiply: function(a, b) { return 1 * 3 },
    divide: function(a, b) { return 10 / 5}
};

function actionApplyer(j, k) {
    if (k.length === 0) {
        return 0;
    } else {
        return ((j * 2) + 1000) % 7;
    }
}