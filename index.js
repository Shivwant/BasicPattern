var i,j,row=5;
str=''
str3=' '
str1='* '
for(i=0;i<row;i++)
{
    str=''
    for(j=row-i;j>1;j--)
    {
        str=str+str3;
    }
    for (j=0;j<=i;j++)
    {
        str=str+str1
    }
    console.log(str)
}
console.log("done")