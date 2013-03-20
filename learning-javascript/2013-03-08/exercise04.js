var data = 
[
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];

var key = 'name';
var values = ['goofy', 'scrooge'];
var result = new Array();

function select(data, key, values)
{
	var result = new Array();	

	for(var i = 0; i < data.length; i++) 
	{  
		for(var j = 0; j < values.length; j++)
		{	
			if(values[j] == data[i].name) result.push(data[i]); 
		} 
    }  
    return result;
}

result = select(data, key, values);

for(var i = 0; i < result.length; i++) 
{ 
	console.log(result[i].id);
	console.log(result[i].name);
} 