var dayToday = function()
{
  var isDate = new Date();
  var day = isDate.getDay();

  return day;
};

dayToday();

var d = dayToday();
console.log(d);
