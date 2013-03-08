var s = '\n';

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
	s += i * j;
	s += ' ';
  }
  s += '\n';
}

console.log(s);
