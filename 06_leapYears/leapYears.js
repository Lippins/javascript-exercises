const leapYears = function(yearInput) {

    isDivisibleFour = (yearInput % 4 === 0);
    isDivisibleFourHundred =  (yearInput % 400 === 0);
    isDivisibleHundred = (yearInput % 100 === 0);
    let isLeapYear = false;

    if (isDivisibleFour) {
        isLeapYear = true;
    }

    if (isDivisibleHundred) {
        isLeapYear = false;
    }

    if (isDivisibleFourHundred) {
        isLeapYear = true;
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
