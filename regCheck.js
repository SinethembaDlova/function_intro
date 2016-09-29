var regCheck = function(regPlate, location)
{
    var isFrom = regPlate.endsWith(location);
    // var isL = regPlate.endsWith('L');
    // var isEC = regPlate.endsWith('EC');
    // var isMP = regPlate.endsWith('MP');
    //
    console.log(isFrom);
    // console.log(isL);
    // console.log(isEC);
    // console.log(isMP);
};

regCheck('DV 23 NB GP', 'GP');
