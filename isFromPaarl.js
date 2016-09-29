var isFromPaarl = function(fromPaa)
{
  var isFrom = fromPaa.startsWith("CJ");
  return isFrom;
};

isFromPaarl("CJ 6452 2211");

var Paa = isFromPaarl("CJ 6452 2211");
console.log(Paa);
