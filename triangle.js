str=' '

function printPascal(n)
{
	for(line = 1; line <= n; line++)
	{
	    str1='';
		
	var C=1;// used to represent C(line, i)
	for(i = 1; i <= line; i++)
	{
		// The first value in a line is always 1
		str1=str1+C;
		str1=str1+str;
		C = C * (line - i) / i;
	}
console.log(str1+" ")
	}
}

// Driver code
var n = 5;
printPascal(n);