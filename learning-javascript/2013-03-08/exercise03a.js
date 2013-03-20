function capitalizeString(inputString) 
{
	return inputString[0].toUpperCase() + inputString.slice(1);
}

var outputString = capitalizeString("ciao");

console.log(outputString);

