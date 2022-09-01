//Square Problem 
const str="* * * * *";
var i,j,row=5;
for(i=0;i<row;i++)
{
    console.log(str);
}

console.log();
console.log();

//Rectangle Problem
const str1="* * * * * * * * * * *";
var i,j,row=5;
for(i=0;i<row;i++)
{
    console.log(str1);
}

console.log();
console.log();

//Right Angle Triangle
var i,j,row=5;
const str2="*";

for(i=0;i<row;i++)
{
    str3=""
    for(j=0;j<=i;j++)
    {
        str3=str3+str2;
    }
    console.log(str3)
}

console.log();
console.log();

//Opposite Right Angle Triangle
var i,j,row=5;
const str4="*";

for(i=0;i<row;i++)
{
    str5=""
    for(j=row-i;j>=1;j--)
    {
        str5=str5+str4;
    }
    console.log(str5)
}

console.log();
console.log();

//Left Right Angle Triangle
var i,j,row=5;
const stre1=" ";
const stre2="*"

for(i=0;i<row;i++)
{
    stre=""
    for(j=row-i;j>1;j--)
    {
        stre=stre+stre1;
    }
    for(j=0;j<=i;j++)
    {
        stre=stre+stre2;
    }
    console.log(stre)
}

console.log();
console.log();

//Opposite Left Side Triangle
var i,j,row=5;
const strem1="*";
const strem2=" "

for(i=0;i<row;i++)
{
    strem=""
    
    for(j=0;j<i;j++)
    {
        strem=strem+strem2;
    }
    for(j=row-i;j>=1;j--)
    {
        strem=strem+strem1;
    }
    console.log(strem)
}

console.log();
console.log();

//Opposite Pyramid
var i,j,row=5;
const st1=" "
const st2="* "

for(i=0;i<row;i++)
{
    st=""
    for(j=0;j<i;j++)
    {
        st=st+st1;
    }
    for(j=row-i;j>=1;j--)
    {
        st=st+st2;
    }
    
    console.log(st);
}