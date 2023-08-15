const findTheOldest = function (entries) {
  result = entries.sort((a, b) => {
    let ageA = !a.yearOfDeath
      ? new Date().getFullYear() - a.yearOfBirth
      : a.yearOfDeath - a.yearOfBirth;
    let ageB = !b.yearOfDeath
      ? new Date().getFullYear() - b.yearOfBirth
      : b.yearOfDeath - b.yearOfBirth;

    return ageB - ageA;
  });

  return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
