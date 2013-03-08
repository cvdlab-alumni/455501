var s = '\n';

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
	if(i == j) 
		{ s += 1 }
	else
		{ s += 0 }

	if(j < 10) { s += ' ,'; }
  }
  s += '\n';
}

console.log(s);
