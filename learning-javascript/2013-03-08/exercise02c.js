function compare(value1, value2) 
{
	return (value1 > value2) ? value1 : value2;
}

function randomIntegers(n) 
{
	var num = new Array();
	var oddNumbers = new Array();
	var i = 0;
	 
	while(i < n) 
	{
		num.push(Math.floor((Math.random() * n) + 1));
		i++;
	}
	oddNumbers = num.filter(function(item, index, array) { return ((item % 2) != 0); });
	return oddNumbers.sort(); 
}

var num = randomIntegers(10);

for (var i = 0; i < num.length; i++) 
{
  	console.log(num[i]);
}

