var isWeekday = function (day) {
    var dayDetails = !day.startsWith('S');

  return dayDetails;
};
console.log(isWeekday('Monday'), true);
// it works
