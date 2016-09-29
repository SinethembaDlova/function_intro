var regCheck = function(regPlate, location)
{
    var isFrom = regPlate.endsWith(location);
    console.log(isFrom);

};

regCheck('DV 23 NB GP', 'GP');
