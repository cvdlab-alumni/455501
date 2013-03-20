function naturalNumbers(n) 
{
	var num = new Array();
	var evenNumbers = new Array();
	var count = 1;	
	 
	while(count <= n) 
	{
		num.push(count);
		count++;
	}
	evenNumbers = num.filter(function(item, index, array) { return ((item % 2) == 0); });
	return evenNumbers.map(function(item, index, array){ return item * 2; });
}
var num = naturalNumbers(10);

for (var i = 0; i < num.length; i++) 
{
  	console.log(num[i]);
}

