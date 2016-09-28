var date = "27 Septermber 2016";
console.log(date);

var con = true;
var stdNum = 9;
var codeX = "Bootcamp";
var date = new Date();
var list = [10, 20, 30, 40, 50];

console.log(con);
console.log(stdNum);
console.log(codeX);
console.log(date);
console.log(list);

console.log(typeof con);
console.log(typeof stdNum);
console.log(typeof codeX);
console.log(typeof date);
console.log(typeof list);


var dayDetails = function(day)
{
  var isWeekend = day.startsWith('S');
  var isDay = day.endsWith('day');
  var length = day.length;

  console.log(isWeekend);
  console.log(isDay);
  console.log(length);
};

dayDetails('Monday');
dayDetails('December');
dayDetails('Sunday');
