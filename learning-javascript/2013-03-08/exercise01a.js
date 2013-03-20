function naturalNumbers(n) 
{
	var num = new Array();
	var count = 1;	
	 
	while(count <= n) 
	{
		num.push(count++);
	}
	return num;
}

var num = naturalNumbers(10);

for (var i = 0; i < num.length; i++) 
{
  	console.log(num[i]);
}