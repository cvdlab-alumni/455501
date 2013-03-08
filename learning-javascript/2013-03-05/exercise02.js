var s = '\n';

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
	s += i * j;
	if(j < 10)  
		{ s += ' ,'; }
  }
  s += '\n';
}

console.log(s);
