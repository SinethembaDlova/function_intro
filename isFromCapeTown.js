var isFromCapeTown = function(fromCpt)
{
  var isFrom = fromCpt.startsWith("CA");
  return isFrom;
};

isFromCapeTown("CY 5633 222");

var Cpt = isFromCapeTown("CY 5633 222");
console.log(Cpt);
