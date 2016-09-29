var isFromLimpopo = function(fromLimp)
{
  var isFrom = fromLimp.endsWith("L");
  return isFrom;
};

isFromLimpopo("DRT 122 L");

var Limp = isFromLimpopo("DRT 122 L");
console.log(Limp);
