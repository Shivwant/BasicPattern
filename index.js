let i, j, row = 5;
const str3 = ' '
const str1 = '* '

for (i = 0; i < row; i++) {
    let str = ''

    for (j = row - i; j > 1; j--) {
        str = str + str3;
    }
    for (j = 0; j <= i; j++) {
        str = str + str1
    }
    console.log(str)
}

console.log("done")
