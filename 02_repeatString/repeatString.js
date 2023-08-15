const repeatString = function(text, numOfTimes) {
    if (numOfTimes < 0) return "ERROR";

    let result = "";
    for (let i = 1; i <= numOfTimes; i++) {
        result+=text;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
