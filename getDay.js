var getDay = function(date)
{
  var day = date.getDay();

  return day;
};

getDay(new Date(2016,09,27));

var d = getDay(new Date(2016,09,27));
console.log(d);
