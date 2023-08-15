const removeFromArray = function(itemList, ...args) {

    for (let arg of args) {
        startPosition = itemList.indexOf(arg);
        if (startPosition >= 0) itemList.splice(startPosition,1);

    }

    return itemList;

};

// Do not edit below this line
module.exports = removeFromArray;
