var yearsAgo = function(year)
{
  var date = new Date();
  var full = date.getFullYear();

  console.log(full - year + " years ago");
};

yearsAgo(2010);
