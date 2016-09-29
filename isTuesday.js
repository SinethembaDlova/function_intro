var isTuesday = function(day)
{
  var dateToday = new Date();
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var checkTue = weekdays[dateToday.getDay()] === day;

  console.log(checkTue);
  return (checkTue);
};

//.log(checkTue);
isTuesday("Wednesday");
