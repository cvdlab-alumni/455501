function capitalizeString(inputString) 
{
	var words = inputString.split(" ");
   	for(var i = 0; i < words.length; i++)
    	{
        	var j = words[i].charAt(0).toUpperCase();
        	words[i] = j + words[i].substr(1);
    	}
    	return words.join(" ");
}

var outputString = capitalizeString("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

console.log(outputString);

