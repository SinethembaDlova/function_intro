var isFrom = function(regPlate, location)
{
    var isFrom = regPlate.startsWith(location);

    console.log(isFrom);
};

isFrom('DV 23 NB GP', 'GP');
