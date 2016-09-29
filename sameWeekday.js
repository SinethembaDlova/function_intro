const date1 = new Date('2016-08-10');
const date2 = new Date('2016-09-28');

var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var sameWeekday = function(date1, date2)
{
  var day1 = date1.getDay();
  var day2 = date2.getDay();

  var checkday1 = weekDays[day1];
  var checkday2 = weekDays[day2];

  var checkM = checkday1.startsWith('M') && checkday2.startsWith('M');
  var checkTue = checkday1.startsWith('Tue') && checkday2.startsWith('Tue');
  var checkW = checkday1.startsWith('W') && checkday2.startsWith('W');
  var checkThur = checkday1.startsWith('Thur') && checkday2.startsWith('Thur');
  var checkF = checkday1.startsWith('M') && checkday2.startsWith('F');
  var checkSat = checkday1.startsWith('Sat') && checkday2.startsWith('Sat');
  var checkSun = checkday1.startsWith('Sun') && checkday2.startsWith('Sun');

  console.log(checkday1);
  console.log(checkday2);

  console.log(checkM);
  console.log(checkTue);
  console.log(checkW);
  console.log(checkThur);
  console.log(checkF);
  console.log(checkSat);
  console.log(checkSun);

};

sameWeekday((new Date('2016-08-10')), (new Date('2016-09-28')));
