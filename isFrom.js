var isFrom = function(regPlate, location)
{
    var isFrom = regPlate.endsWith(location);

    console.log(isFrom);
};

isFrom('DV 23 NB GP', 'GP');
