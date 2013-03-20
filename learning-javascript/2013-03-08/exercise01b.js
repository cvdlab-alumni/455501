function naturalNumbers(n) 
{
	var num = new Array();
	var count = 1;	
	 
	while(count <= n) 
	{
		num.push(count);
		count++;
	}
	return num.filter(function(item, index, array) { return ((item % 2) == 0); });
}
var num = naturalNumbers(10);

for (var i = 0; i < num.length; i++) 
{
  	console.log(num[i]);
}

