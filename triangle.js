str=' '

function printPascal(n)
{
	for(line = 1; line <= n; line++)
	{
	    str1='';
		
	var C=1;
	for(i = 1; i <= line; i++)
	{
		str1=str1+C;
		str1=str1+str;
		C = C * (line - i) / i;
	}
	for(i=n-line;i>=1;i--)
	{
		str1=str+str1;
	}
console.log(str1+" ")
	}
}

var n = 5;
printPascal(n);