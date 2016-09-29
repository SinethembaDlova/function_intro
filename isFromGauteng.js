var isFromGauteng = function(fromJhb)
{
  var isFrom = fromJhb.endsWith("GP");
  return isFrom;
};

isFromGauteng("DS 1256 GP");

var Jhb = isFromGauteng("DS 1256 GP");
console.log(Jhb);
