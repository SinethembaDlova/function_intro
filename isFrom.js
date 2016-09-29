var isFrom = function(regPlate, location)
{
    var isFrom = regPlate.startsWith(location);

    return isFrom;
};

isFrom('DV 23 NB GP', 'GP');

var From = isFrom('DV 23 NB GP', 'GP');
console.log(From);
