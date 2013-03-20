function fibonacci(n)
{
	if(n == 0 || n==1)
		fibonacci[n] = n;
	else 
		fibonacci[n] = fibonacci(n-1) + fibonacci(n-2);
	return fibonacci[n];
}

fibonacci[1] = 1;

var elementFibonacci;

elementFibonacci = fibonacci(5);

console.log(elementFibonacci);


