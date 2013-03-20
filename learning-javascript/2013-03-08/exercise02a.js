function randomIntegers(n) 
{
	var num = new Array();
	var i = 0;
	 
	while(i < n) 
	{
		num.push(Math.floor((Math.random() * n) + 1));
		i++;
	}
	return num;
}

var num = randomIntegers(10);

for (var i = 0; i < num.length; i++) 
{
  	console.log(num[i]);
}
