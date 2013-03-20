function naturalNumbers(n) 
{
	var num = new Array();
	var evenNumbers = new Array();
	var multiple = new Array();
	var divisibleByFour = new Array();
	var count = 1;	
	 
	while(count <= n) 
	{
		num.push(count);
		count++;
	}
	evenNumbers = num.filter(function(item, index, array) { return ((item % 2) == 0); });
	multiple = evenNumbers.map(function(item, index, array){ return item * 2; });
	divisibleByFour = multiple.filter(function(item, index, array) { return ((item % 4) == 0); }); 
	return divisibleByFour.reduce(function(previous, current, index, array) { return previous + current; });
}

console.log(naturalNumbers(10));



