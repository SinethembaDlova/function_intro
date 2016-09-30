/*const date1 = new Date('2016-08-10');
const date2 = new Date('2016-09-28');*/

var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var sameWeekday = function(date1, date2)
{
  var day1 = date1.getDay();
  var day2 = date2.getDay();

  var checkday1 = weekDays[day1];
  var checkday2 = weekDays[day2];

  var checkEqual = checkday1 === checkday2;

  return checkEqual;
};

sameWeekday((new Date('2016-08-10')), (new Date('2016-09-28')));

var Equal = sameWeekday((new Date('2016-08-10')), (new Date('2016-09-28')));
console.log(Equal);
